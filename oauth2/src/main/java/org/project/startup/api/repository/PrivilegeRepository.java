package org.project.startup.api.repository;

import org.project.startup.api.model.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PrivilegeRepository  extends JpaRepository<Privilege, Long> {
	Privilege findById(long ID);
	//custom query
	@Query("select c from Privilege c where name=?1")
	Privilege findByName(final String name);
	
	List<Privilege> findAll();
}
