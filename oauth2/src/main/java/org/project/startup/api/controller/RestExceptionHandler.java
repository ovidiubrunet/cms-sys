package org.project.startup.api.controller;

import org.project.startup.api.exception.ClientOauth2Exception;
import org.project.startup.api.exception.InvalidOldPasswordException;
import org.project.startup.api.exception.RegistrationTokenNotFoundException;
import org.project.startup.api.exception.UserAlreadyExistsException;
import org.project.startup.api.util.ExceptionResponse;
import org.project.startup.api.util.ValidationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@ControllerAdvice
public class RestExceptionHandler {
	private static final String UNEXPECTED_ERROR = "Exception.unexpected";
	private final MessageSource messageSource;

	@Autowired
	public RestExceptionHandler(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

	/**
	 * handling user exists from registration
	 * 
	 * @param ex
	 * @return
	 */
	@ResponseBody
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(UserAlreadyExistsException.class)
	public ResponseEntity<ExceptionResponse> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {

		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("Validation Error");
		response.setErrorMessage(ex.getMessage());

		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
	}
	
	/**
	 * handling token doesn't exists 
	 * 
	 * @param ex
	 * @return
	 */
	@ResponseBody
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(RegistrationTokenNotFoundException.class)
	public ResponseEntity<ExceptionResponse> handleTokenNotExistsException(RegistrationTokenNotFoundException ex) {

		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("Validation Error");
		response.setErrorMessage(ex.getMessage());

		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
	}
	
    @ResponseStatus(HttpStatus.BAD_REQUEST)
	  @ExceptionHandler({InvalidOldPasswordException.class })
	  public ResponseEntity<ExceptionResponse>  handleInvalidOldPassword(InvalidOldPasswordException ex) {
		    ExceptionResponse response = new ExceptionResponse();
			response.setErrorCode("Validation Error");
			response.setErrorMessage(ex.getMessage());
	
			return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
	  }

	/**
	 * handling client that obtains the token
	 * 
	 * @param ex
	 * @return
	 */
	@ResponseBody
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(ClientOauth2Exception.class)
	public ResponseEntity<ExceptionResponse> clientOauth2Exception(ClientOauth2Exception ex) {

		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("Validation Error");
		response.setErrorMessage(ex.getMessage());

		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
	}

	/**
	 * 
	 * @param ex
	 * @param locale
	 * @return
	 */
	@ResponseBody
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ExceptionResponse> handleArgumentNotValidException(MethodArgumentNotValidException ex,
			Locale locale) {
		List<String> errors = ex.getBindingResult().getFieldErrors().stream()
				.map(this::buildLocalizedErrorMessageSource).collect(Collectors.toList());

		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("Validation Error");
		response.setErrorMessage("Invalid inputs.");
		response.setErrors(errors);
		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
	}

	/**
	 * 
	 * @param ex
	 * @param locale
	 * @return
	 */
	@ResponseBody
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<ExceptionResponse> handleExceptions(Exception ex, Locale locale) {
		String errorMessage = messageSource.getMessage(UNEXPECTED_ERROR, null, locale);
		ex.printStackTrace();
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("Server Error");
		response.setErrorMessage(errorMessage);
		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	/**
	 * get the message from messagesource based on locale variable
	 * @param fe
	 * @return
	 */
	private String buildLocalizedErrorMessageSource(FieldError fe) {
		String localizedErrorMsg = "";
		try {
			localizedErrorMsg = this.messageSource.getMessage(ValidationUtil.buildMessage(fe), (Object[]) null,
					LocaleContextHolder.getLocale());
		} catch (Exception ex) {
			localizedErrorMsg = fe.getDefaultMessage();
		}
		return localizedErrorMsg;
	}
}
