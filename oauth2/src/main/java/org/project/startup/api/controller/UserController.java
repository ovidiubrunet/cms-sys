package org.project.startup.api.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.project.startup.api.dto.DTOInterface;
import org.project.startup.api.dto.MessageDTO;
import org.project.startup.api.dto.UserDTO;
import org.project.startup.api.model.User;
import org.project.startup.api.service.UserService;
import org.project.startup.api.util.MessageType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController extends ApiController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
    @Autowired
    private UserService userService;	
	
	@ApiOperation(value = "Get all users", notes = "users action", response = UserDTO.class)
	@RequestMapping(value = "secure/users", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ApiResponses({
        @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
        @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
	
	public ResponseEntity<List<UserDTO>> getUsers(
			@RequestParam("page") final int page, 
			@RequestParam("size") final int size,
			@RequestParam("sort") final String sort,
			@RequestParam("order") final String order,
			@RequestHeader("Authorization") final String header) 
	{		
		Direction srt = sort.equals("DESC")?Sort.Direction.DESC: Sort.Direction.ASC;
		logger.info("Going to fetch all users");	
		List<UserDTO> users = userService.findAll(PageRequest.of(page, size, new Sort(srt, new String[] {order})));
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Create a user.", notes = "users action", response = UserDTO.class)
	@RequestMapping(value = "secure/users", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,  produces = { MediaType.APPLICATION_JSON_VALUE })
	@ApiResponses({
        @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
        @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
	public ResponseEntity<DTOInterface> addUser(@RequestHeader("Authorization") final String header) {
		logger.info("Going to create a user");		
		MessageDTO message = new MessageDTO(MessageType.SUCCESS, "User successfully created.");		
		return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Get User by id", notes = "get user action", response = UserDTO.class)
	@RequestMapping(value = "secure/user/{id}", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ApiResponses({
        @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
        @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
	public ResponseEntity<DTOInterface> getUser(@RequestHeader("Authorization") final String header, @PathVariable("id") long id) {
		logger.info("Going to fetch the user with the id: {}", id);		
		UserDTO user = userService.findById(id);		
		return new ResponseEntity<DTOInterface>(user, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Delete User by id", notes = "delete user action", response = UserDTO.class)
	@RequestMapping(value = "secure/user/{id}", method = RequestMethod.DELETE, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ApiResponses({
        @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
        @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
	public ResponseEntity<DTOInterface> deleteUser(@RequestHeader("Authorization") final String header, @PathVariable("id") long id) {
		logger.info("Going to delete the user with id {}", id);		
		User user = userService.getUserByID(id);
		
		 if (user == null) {
            MessageDTO message = new MessageDTO(MessageType.ERROR, "The user doesn't exists.");
            return new ResponseEntity<DTOInterface>(message, HttpStatus.BAD_REQUEST);
		 }

		userService.deleteUser(user);
		MessageDTO message = new MessageDTO(MessageType.SUCCESS, "User successfully  deleted.");		
		return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Update User by id", notes = "update user action", response = UserDTO.class)
	@RequestMapping(value = "secure/user/{id}", method = RequestMethod.PUT, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ApiResponses({
        @ApiResponse(code = 200, message = "Success", response = UserDTO.class),
        @ApiResponse(code = 400, message = "Bad request", response = MessageDTO.class)
    })
	public ResponseEntity<DTOInterface> updateUser(@RequestHeader("Authorization") final String header, @PathVariable("id") long id) {
		logger.info("Going to update the user with id {}", id);		
		MessageDTO message = new MessageDTO(MessageType.SUCCESS, "User successfully updated.");		
		return new ResponseEntity<DTOInterface>(message, HttpStatus.OK);
	}
}
