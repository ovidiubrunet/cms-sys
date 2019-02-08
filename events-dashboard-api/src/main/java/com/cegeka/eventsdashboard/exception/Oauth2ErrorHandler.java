package com.cegeka.eventsdashboard.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;

import java.io.IOException;
import java.nio.file.AccessDeniedException;

public class Oauth2ErrorHandler implements ResponseErrorHandler {

    protected final Log logger = LogFactory.getLog(this.getClass());
    @Override
    public void handleError(ClientHttpResponse httpResponse) throws IOException {
        if (httpResponse.getStatusCode().series() == HttpStatus.Series.SERVER_ERROR) {
            // handle SERVER_ERROR
            logger.debug("HAS SERVER ERROR");
            throw new AccessDeniedException("Oauth2 server error.");

        } else if (httpResponse.getStatusCode().series() == HttpStatus.Series.CLIENT_ERROR) {
            // handle CLIENT_ERROR
            if (httpResponse.getStatusCode() == HttpStatus.NOT_FOUND) {
                // throw new NotFoundException;
                logger.debug("HAS CLIENT ERROR");
            } else if (httpResponse.getStatusCode() == HttpStatus.UNAUTHORIZED) {
                logger.debug("TOKEN EXPIRED");
                throw new AccessDeniedException("No token set.");
            } else if (httpResponse.getStatusCode() == HttpStatus.BAD_REQUEST) {
                logger.debug("TOKEN NOT RECOGNIZED");
                throw new AccessDeniedException("Token not recognized.");
            }
        }
    }

    @Override
    public boolean hasError(ClientHttpResponse httpResponse) throws IOException {

        return (
                httpResponse.getStatusCode().series() == HttpStatus.Series.CLIENT_ERROR
                        || httpResponse.getStatusCode().series() == HttpStatus.Series.SERVER_ERROR);
    }
}
