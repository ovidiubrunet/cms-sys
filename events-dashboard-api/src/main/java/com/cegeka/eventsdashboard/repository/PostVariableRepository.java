package com.cegeka.eventsdashboard.repository;


import com.cegeka.eventsdashboard.domain.PostVariable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostVariableRepository extends CrudRepository<PostVariable, Long> {
}
