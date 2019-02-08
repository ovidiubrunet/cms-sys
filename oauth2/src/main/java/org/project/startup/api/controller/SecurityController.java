package org.project.startup.api.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.project.startup.api.dto.DTOInterface;
import org.project.startup.api.dto.MessageDTO;
import org.project.startup.api.dto.TokenDTO;
import org.project.startup.api.dto.UserDTO;
import org.project.startup.api.model.AuthTokenInfo;
import org.project.startup.api.service.Oauth2RestClientService;
import org.project.startup.api.util.MessageType;
import org.project.startup.data.service.RedisService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SecurityController extends ApiController {

    @Autowired
    private RedisService redisService;


    @Autowired
    private Oauth2RestClientService oauth2RestClientService;

    private static final Logger logger = LoggerFactory.getLogger(SecurityController.class);

    @ApiOperation(value = "Get home page", notes = "home action", response = UserDTO.class)
    @RequestMapping(value = "secure/home", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> getHomePage(@RequestHeader("Authorization") final String header, final HttpServletRequest request) {

        UserDTO user = new UserDTO();
        user.setEmail(getAppUrl(request));

        logger.info("Going to create a user");
        redisService.testConnection();

        MessageDTO message = new MessageDTO(MessageType.ERROR, "User was saved");

        return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
    }

    @ApiOperation(value = "Test if the user has the privilege to read", notes = "read action", response = UserDTO.class)
    @RequestMapping(value = "secure/test-privilege-read", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> testPrivilegeRead(@RequestHeader("Authorization") final String header, final HttpServletRequest request) {

        logger.info("Going to delete a user");
        MessageDTO message = new MessageDTO(MessageType.ERROR, "User was read");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
    }

    @ApiOperation(value = "Test if the user has the privilege to create", notes = "edit action", response = UserDTO.class)
    @RequestMapping(value = "secure/test-privilege-create", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> testPrivilegeCreate(@RequestHeader("Authorization") final String header, final HttpServletRequest request) {

        logger.info("Going to delete a user");
        MessageDTO message = new MessageDTO(MessageType.ERROR, "User was created");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
    }

    @ApiOperation(value = "Test if the user has the privilege to edit", notes = "edit action", response = UserDTO.class)
    @RequestMapping(value = "secure/test-privilege-edit", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> testPrivilegeEdit(@RequestHeader("Authorization") final String header, final HttpServletRequest request) {

        logger.info("Going to edit a user");
        MessageDTO message = new MessageDTO(MessageType.ERROR, "User was edited");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
    }

    @ApiOperation(value = "Test if the user has the privilege to delete", notes = "delete action", response = UserDTO.class)
    @RequestMapping(value = "secure/test-privilege-delete", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> testPrivilegeDelete(@RequestHeader("Authorization") final String header, final HttpServletRequest request) {

        logger.info("Going to delete a user");
        MessageDTO message = new MessageDTO(MessageType.ERROR, "User was deleted");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
    }


    /**
     * Get the Token.
     * u>The request sent by the client was syntactically incorrect. because of dto order
     *
     * @return
     */
    @ApiOperation(value = "Get the token from oauth2 server", notes = "Token details")
    @RequestMapping(value = "token", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<DTOInterface> getToken(@Validated @RequestBody final TokenDTO dto, final HttpServletRequest request) {

        AuthTokenInfo token = oauth2RestClientService.sendTokenRequest(request, dto);

        MessageDTO message = new MessageDTO(MessageType.SUCCESS, token.getAccess_token());
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }
}
