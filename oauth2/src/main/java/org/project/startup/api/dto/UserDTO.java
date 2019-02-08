package org.project.startup.api.dto;

import org.project.startup.api.model.Privilege;
import org.project.startup.api.model.Role;
import org.project.startup.api.validation.FieldMatch;
import org.project.startup.api.validation.ValidEmail;
import org.project.startup.api.validation.ValidUsername;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

/**
 * 
 * @author ovidiu.dragoi
 *
 */

@FieldMatch(first = "password", second = "matchingPassword", message = "The password fields must match")
public class UserDTO implements DTOInterface {

	private long id;

	@ValidUsername
	@Size(min = 5, max = 10)
	@NotEmpty
	@NotNull
	private String username;

	@Size(min = 5, max = 10)
	private String password;

	@Size(min = 5, max = 50)
	@ValidEmail
	private String email;

	@NotEmpty
	@NotNull
	private String firstName;

	@NotEmpty
	@NotNull
	private String lastName;

	@NotNull
	@NotEmpty
	@Size(min = 1)
	private String matchingPassword;

	private Set<Role> roles = new HashSet<>();

	private Set<Privilege> privileges;

	public UserDTO() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(final String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(final String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(final String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public String getMatchingPassword() {
		return matchingPassword;
	}

	public void setMatchingPassword(final String matchingPassword) {
		this.matchingPassword = matchingPassword;
	}

	public void setPassword(final String password) {
		this.password = password;
	}



	public void addRole(Role role) {
		if (this.roles == null) {
			this.roles = new HashSet<>();
		}
		for (Privilege p: role.getPrivileges()) {
            System.out.println(p.getName());
        }

		this.roles.add(role);
	}

	public Set<Role> getRoles() {
		return this.roles;
	}

	public Set<Privilege> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(Set<Privilege> privileges) {
		this.privileges = privileges;
	}

}
