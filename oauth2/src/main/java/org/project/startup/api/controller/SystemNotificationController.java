package org.project.startup.api.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.project.startup.api.dto.DTOInterface;
import org.project.startup.api.dto.MessageDTO;
import org.project.startup.api.util.MessageType;
import org.project.startup.notification.event.UserEvent;
import org.project.startup.notification.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SystemNotificationController extends ApiController {
	
	@Autowired
	private NotificationService notificationService;
	
	@ApiOperation(value = "Send a notification", notes = "Send a notification to websocket server", response = MessageDTO.class)
	@RequestMapping(value = "notification/send", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiResponses({ 
		@ApiResponse(code = 200, message = "Success", response = MessageDTO.class),
		@ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class) 
	})
	public ResponseEntity<DTOInterface> sendNotification(@Validated @RequestBody final UserEvent notification, final HttpServletRequest request) {		
		notificationService.sendNotification(notification);
		MessageDTO message = new MessageDTO(MessageType.SUCCESS, "Notification was sent");
		return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
	}
}
