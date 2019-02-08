package org.project.startup.api.service;

import org.project.startup.api.dto.UserDTO;
import org.project.startup.api.model.PasswordResetToken;
import org.project.startup.api.model.User;
import org.project.startup.api.model.VerificationRegistrationToken;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService {
	List<UserDTO> findAll(Pageable pageable);

	UserDTO findById(long id);

	User save(UserDTO accountDto);

	UserDTO update(UserDTO accountDto);
	
	 void deleteUser(User user);

	boolean findByName(String name);

	User getUser(String verificationToken);

	boolean emailExist(String email);

	void createVerificationTokenForUser(User user, String token);

	VerificationRegistrationToken getVerificationToken(String VerificationRegistrationToken);

	void saveRegisteredUser(User user);

	VerificationRegistrationToken generateNewVerificationToken(String token);

	void createPasswordResetTokenForUser(User user, String token);

	User findUserByEmail(String email);

	PasswordResetToken getPasswordResetToken(String token);

	User getUserByPasswordResetToken(String token);

	User getUserByID(long id);

	void changeUserPassword(User user, String password);

	boolean checkIfValidOldPassword(User user, String password);

	String validateVerificationToken(String token);

	List<String> getUsersFromSessionRegistry();
	
	String validatePasswordResetToken(long id, String token);
}
