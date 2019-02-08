package org.project.startup.api.service.impl;

import org.project.startup.api.dto.UserDTO;
import org.project.startup.api.exception.RegistrationTokenNotFoundException;
import org.project.startup.api.exception.UserAlreadyExistsException;
import org.project.startup.api.model.PasswordResetToken;
import org.project.startup.api.model.Role;
import org.project.startup.api.model.User;
import org.project.startup.api.model.VerificationRegistrationToken;
import org.project.startup.api.repository.PasswordResetTokenRepository;
import org.project.startup.api.repository.RoleRepository;
import org.project.startup.api.repository.UserRepository;
import org.project.startup.api.repository.VerificationRegistrationTokenRepository;
import org.project.startup.api.service.UserService;
import org.project.startup.api.util.ObjectMapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.*;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordResetTokenRepository passwordTokenRepository;

	@Autowired
	private VerificationRegistrationTokenRepository tokenRegistrationRepository;
	
	@PersistenceContext
	private EntityManager entityManager;

	/*@Autowired
	private SessionRegistry sessionRegistry;
*/
	@Autowired
	private PasswordEncoder passwordEncoder;

	private static final String TOKEN_INVALID = "invalidToken";
	private static final String TOKEN_EXPIRED = "expired";
	private static final String TOKEN_VALID = "valid";

	@Override
	public List<UserDTO> findAll(Pageable pageable) {
		
	    List<UserDTO> returnValue = new ArrayList<>();
		Page<User> users = userRepository.findAll(pageable);
	    List<User> userEntities = users.getContent();
	
        for (User userEntity : userEntities) {
            UserDTO userDto = new UserDTO();            
            userDto.setEmail(userEntity.getEmail());
            userDto.setUsername(userEntity.getUsername());
            userDto.setFirstName(userEntity.getFirstName());
            userDto.setLastName(userEntity.getLastName()); 
            userDto.setPrivileges(userEntity.getPrivileges());
            //BeanUtils.copyProperties(userEntity, userDto);
            for(Role r: userEntity.getRoles()) {
              	userDto.addRole(r);
            }
            returnValue.add(userDto);
        }

		return returnValue;
	}

	@Override
	public UserDTO findById(long id) {
		User user = userRepository.findById(id);
		//UserDTO userAccount = new UserDTO();
		UserDTO userAccount = ObjectMapperUtil.map(user, UserDTO.class);	
		//userAccount.setEmail(user.getEmail());
		return userAccount;
	}

	@Override
	public User save(UserDTO accountDto) {		

		if (emailExist(accountDto.getEmail())) {
			throw new UserAlreadyExistsException(accountDto.getEmail());
		}
		
		//Role r = entityManager.find(Role.class, 3L);	
		
	   Role roleClient = roleRepository.findByName("CLIENT");
	   

		
		final User user = new User();


		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(11);

		user.setFirstName(accountDto.getFirstName());
		user.setLastName(accountDto.getLastName());
		user.setUsername(accountDto.getUsername());
		user.setPassword("{bcrypt}"+encoder.encode(accountDto.getPassword()));
		user.setEmail(accountDto.getEmail());
		//user.getRoles().add(r);
		

		Set<Role> roles = new HashSet<>();
		roles.add(roleClient);
		
		user.setRoles(roles);
		
		 //entityManager.persist(user);
		 //entityManager.flush();
		//transaction.commit();
		
		userRepository.save(user);
		return user;


	}

	@Override
	public void createVerificationTokenForUser(final User user, final String token) {
		final VerificationRegistrationToken myToken = new VerificationRegistrationToken(token, user);
		tokenRegistrationRepository.save(myToken);
	}

	@Override
	public User getUser(final String verificationToken) {
		final VerificationRegistrationToken token = tokenRegistrationRepository.findByToken(verificationToken);
		if (token != null) {
			return token.getUser();
		}
		return null;
	}

	@Override
	public void saveRegisteredUser(final User user) {
		userRepository.save(user);
	}

	@Override
	public VerificationRegistrationToken getVerificationToken(final String VerificationRegistrationToken) {
		return tokenRegistrationRepository.findByToken(VerificationRegistrationToken);
	}

	@Override
	public UserDTO update(UserDTO accountDto) {
		// TODO Auto-generated method stub
		UserDTO user = findById(accountDto.getId());
		user.setEmail(accountDto.getEmail());
		return findById(accountDto.getId());
	}

	@Override
	public boolean findByName(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username) != null;
	}


    @Override
    public void deleteUser(final User user) {
        final VerificationRegistrationToken verificationToken = tokenRegistrationRepository.findByUser(user);

        if (verificationToken != null) {
        	tokenRegistrationRepository.delete(verificationToken);
        }

        final PasswordResetToken passwordToken = passwordTokenRepository.findByUser(user);

        if (passwordToken != null) {
            passwordTokenRepository.delete(passwordToken);
        }

        userRepository.delete(user);
}

	public boolean emailExist(final String email) {
		return userRepository.findByEmail(email) != null;
	}

	@Override
	public User getUserByPasswordResetToken(final String token) {
		return passwordTokenRepository.findByToken(token).getUser();
	}

	@Override
	public PasswordResetToken getPasswordResetToken(final String token) {
		return passwordTokenRepository.findByToken(token);
	}

	@Override
	public User findUserByEmail(final String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public User getUserByID(final long id) {
		return userRepository.findById(id);
	}

	@Override
	public String validateVerificationToken(String token) {
		final VerificationRegistrationToken verificationToken = tokenRegistrationRepository.findByToken(token);
		if (verificationToken == null) {
			return TOKEN_INVALID;
		}

		final User user = verificationToken.getUser();
		final Calendar cal = Calendar.getInstance();
		if ((verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
			tokenRegistrationRepository.delete(verificationToken);
			return TOKEN_EXPIRED;
		}

		user.setEnabled(true);
		// tokenRepository.delete(verificationToken);
		userRepository.save(user);
		return TOKEN_VALID;
	}

	@Override
	public void createPasswordResetTokenForUser(final User user, final String token) {
		final PasswordResetToken myToken = new PasswordResetToken(token, user);
		passwordTokenRepository.save(myToken);
	}
	
    @Override
    public VerificationRegistrationToken generateNewVerificationToken(final String existingVerificationToken) {
    	VerificationRegistrationToken vToken = tokenRegistrationRepository.findByToken(existingVerificationToken);
    	
    	if (vToken == null) {
    		throw new RegistrationTokenNotFoundException();
    	} 
    	
        vToken.updateToken(UUID.randomUUID().toString());
        vToken = tokenRegistrationRepository.save(vToken);
        return vToken;
}

	@Override
	public List<String> getUsersFromSessionRegistry() {
/*		return sessionRegistry.getAllPrincipals().stream()
				.filter((u) -> !sessionRegistry.getAllSessions(u, false).isEmpty()).map(Object::toString)
				.collect(Collectors.toList());*/
		return null;
	}

	@Override
	public boolean checkIfValidOldPassword(final User user, final String oldPassword) {
		return passwordEncoder.matches(oldPassword, user.getPassword());
	}

	@Override
	public void changeUserPassword(final User user, final String password) {
		user.setPassword(passwordEncoder.encode(password));
		userRepository.save(user);
	}
	
	@Override
    public String validatePasswordResetToken(long id, String token) {
        final PasswordResetToken passToken = passwordTokenRepository.findByToken(token);
        if ((passToken == null) || (passToken.getUser().getId() != id)) {
            return "invalidToken";
        }

        final Calendar cal = Calendar.getInstance();
        if ((passToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
            return "expired";
        }
        return null;
   }
}