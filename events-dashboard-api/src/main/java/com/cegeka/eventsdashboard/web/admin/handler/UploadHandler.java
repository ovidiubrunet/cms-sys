package com.cegeka.eventsdashboard.web.admin.handler;

import com.cegeka.eventsdashboard.exception.FileTypeNotSupportedException;
import com.cegeka.eventsdashboard.service.FileStorage;
import com.cegeka.eventsdashboard.util.ServerResponseWithCors;
import com.cegeka.eventsdashboard.web.admin.dto.UploadFileResponse;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.http.codec.multipart.Part;
import org.springframework.stereotype.Component;
import org.springframework.util.MimeType;
import org.springframework.web.reactive.function.BodyExtractors;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.Map;
import java.util.Optional;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

@Component
public class UploadHandler {

    private FileStorage fileStorage;

    public UploadHandler(FileStorage fileStorage){
        this.fileStorage = fileStorage;
    }

    public Mono<ServerResponse> upload(ServerRequest request) {

        return request.body(BodyExtractors.toMultipartData()).flatMap( parts -> {

            Map<String, Part> map = parts.toSingleValueMap();
            FilePart filePart = (FilePart) map.get("file");

            FileStorage.FileType fileType;

            switch(Optional.ofNullable(filePart.headers().getContentType())
                    .map(MimeType::getType).orElse("")) {
                case "image":
                    fileType =  FileStorage.FileType.IMAGE;
                    break;
                case "pdf":
                    fileType =  FileStorage.FileType.PDF;
                    break;
                default:
                    throw new FileTypeNotSupportedException("File type not supported");
            }

            UploadFileResponse response = this.fileStorage.upload(fileType, filePart);

           return  ServerResponseWithCors.ok().contentType(MediaType.APPLICATION_JSON).body(fromObject(response));
        });
    }
}
