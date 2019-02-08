package org.project.startup.api.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.project.startup.api.dto.DTOInterface;
import org.project.startup.api.dto.MessageDTO;
import org.project.startup.api.dto.PasswordDTO;
import org.project.startup.api.dto.UserDTO;
import org.project.startup.api.event.RegistrationEvent;
import org.project.startup.api.event.ResendRegistrationTokenEvent;
import org.project.startup.api.event.ResetPasswordEvent;
import org.project.startup.api.exception.InvalidOldPasswordException;
import org.project.startup.api.model.User;
import org.project.startup.api.model.VerificationRegistrationToken;
import org.project.startup.api.service.UserService;
import org.project.startup.api.util.MessageType;
import org.project.startup.email.service.impl.EmailServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
public class RegistrationController extends ApiController {

    @Autowired
    private UserService userService;

    @Autowired
    private ApplicationEventPublisher eventPublisher;


    @Autowired
    private EmailServiceImpl emailService;

    private static final Logger logger = LoggerFactory.getLogger(SecurityController.class);

    @ApiOperation(value = "Register new user account", notes = "Creating a new user account", response = MessageDTO.class)
    @RequestMapping(value = "user/registration", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({@ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)})
    public ResponseEntity<DTOInterface> registerUser(@Validated @RequestBody final UserDTO dto,
                                                     final HttpServletRequest request) {

        MessageDTO message = null;

        // logger.info("LOCALEEEE: " + request.getLocale() + "sfsdf" +
        // messageSource.getMessage("Size.userdto.firstName", new Object[] { "Ovidiu",
        // "2", "10" }, Locale.US));
        logger.info("Going to create a user");

        // save user
        final User registered = userService.save(dto);

        // user successfully saved publish event
        eventPublisher.publishEvent(new RegistrationEvent(registered, request.getLocale(), getAppUrl(request)));

        message = new MessageDTO(MessageType.SUCCESS, "User was saved");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    @ApiOperation(value = "Confirm register user account based on confirmation token", notes = "Confirm Registration", response = MessageDTO.class)
    @RequestMapping(value = "user/registration-confirm", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({@ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)})
    public ResponseEntity<DTOInterface> confirmRegistration(@RequestParam("token") final String token,
                                                            final HttpServletRequest request) {

        final String result = userService.validateVerificationToken(token);
        logger.info("Going to verificate a token");
        if (result.equals("valid")) {
            MessageDTO message = new MessageDTO(MessageType.SUCCESS, result);
            return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
        }

        MessageDTO message = new MessageDTO(MessageType.ERROR, result);
        return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
    }

    @ApiOperation(value = "Search an user based by email", notes = "Search User", response = MessageDTO.class)
    @RequestMapping(value = "user/email-exists", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({@ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)})
    public ResponseEntity<DTOInterface> searchEmailExists(@RequestParam("email") final String email,
                                                          final HttpServletRequest request) {

        if (userService.emailExist(email)) {
            MessageDTO message = new MessageDTO(MessageType.ERROR, "Email exists.");
            return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
        }

        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Ok");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    @ApiOperation(value = "Search an user based by username", notes = "Search User", response = MessageDTO.class)
    @RequestMapping(value = "user/username-exists", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({@ApiResponse(code = 200, message = "Success", response = UserDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)})
    public ResponseEntity<DTOInterface> searchUsernameExists(@RequestParam("username") final String username,
                                                             final HttpServletRequest request) {

        if (userService.findByName(username)) {
            MessageDTO message = new MessageDTO(MessageType.ERROR, "Username exists.");
            return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
        }
        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Ok");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    @ApiOperation(value = "Resend registration token", notes = "Resend token", response = MessageDTO.class)
    @RequestMapping(value = "user/resend-registration-token", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> resendRegistrationToken(@RequestParam("token") final String existingToken,
                                                                final HttpServletRequest request) {

        final VerificationRegistrationToken newToken = userService.generateNewVerificationToken(existingToken);
        final User user = userService.getUser(newToken.getToken());

        // resend email with registration token
        eventPublisher.publishEvent(
                new ResendRegistrationTokenEvent(user, request.getLocale(), getAppUrl(request), newToken.getToken()));

        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "token was resent");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    // Reset password
    @ApiOperation(value = "Reset Password", notes = "Reset Password action", response = MessageDTO.class)
    @RequestMapping(value = "user/reset-password", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> resetPassword(final HttpServletRequest request, @RequestParam("email") final String userEmail) {
        final User user = userService.findUserByEmail(userEmail);
        if (user != null) {
            eventPublisher.publishEvent(new ResetPasswordEvent(user, request.getLocale(), getAppUrl(request)));
        }
        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Reset password token was sent.");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    @ApiOperation(value = "Check Password Rest Token", notes = "Check if the received token for reseting password is correct", response = MessageDTO.class)
    @RequestMapping(value = "user/check-password-reset-token", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> checkPasswordResetPassword(@RequestParam("id") final long id, @RequestParam("token") final String token) {
        final String result = userService.validatePasswordResetToken(id, token);
        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Success");
        HttpStatus status = HttpStatus.OK;
        if (result != null) {
            message = new MessageDTO(MessageType.ERROR, result);
            return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<DTOInterface>(message, status);
        }

    }

    @ApiOperation(value = "Save reseted password", notes = "Set a new password that from reset action after the token was verified", response = MessageDTO.class)
    @RequestMapping(value = "/user/save-password", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> savePassword(@Valid @RequestBody final PasswordDTO passwordDto) {
        final User user = userService.getUserByID(passwordDto.getId());
        userService.changeUserPassword(user, passwordDto.getNewPassword());
        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Success");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    // change user password
    @ApiOperation(value = "Update user password", notes = "Change the user password", response = MessageDTO.class)
    @RequestMapping(value = "/user/update-password", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<DTOInterface> changeUserPassword(@Valid @RequestBody final PasswordDTO passwordDto) {
        final User user = userService.getUserByID(passwordDto.getId());
        if (!userService.checkIfValidOldPassword(user, passwordDto.getOldPassword())) {
            throw new InvalidOldPasswordException();
        }
        userService.changeUserPassword(user, passwordDto.getNewPassword());
        MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Success");
        return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
    }

    @ApiOperation(value = "Get authenticated user by token", notes = "After receiving the token the client can fetch the user authenticated details by token", response = UserDTO.class)
    @RequestMapping(value = "secure/user/authenticated", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
            @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
    public ResponseEntity<Object> getAuthenticatedUser(@RequestHeader("Authorization") final String header) {

        Authentication a = SecurityContextHolder.getContext().getAuthentication();

        Map<String, Object> user = new HashMap<>();
        // token
        Object clientIds = ((OAuth2Authentication) a).getDetails();

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        user.put("userDetails", userDetails);
        user.put("oauth", clientIds);

        return new ResponseEntity<Object>(user, HttpStatus.OK);
    }
}
