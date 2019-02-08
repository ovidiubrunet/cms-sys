package org.project.startup.api.repository;

import org.project.startup.api.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoleRepository  extends JpaRepository<Role, Long> {
	Role findById(long ID);
	//custom query
	@Query("select c from Role c where name=?1")
	Role findByName(final String name);
	
	List<Role> findAll();
}
