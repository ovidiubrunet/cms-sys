package org.project.startup.api.repository;


import org.project.startup.api.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.transaction.Transactional;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
	
	User findById(long ID);
	
	User findByUsername(final String username);
	
	@Query("select u from User u")
	Page<User> findAll(Pageable pageable);
 	
	//custom query
	@Query("select c from User c where email=?1")
	User findByEmail(final String email);

	@Transactional
	void removeUserByUsername(String username);
}
