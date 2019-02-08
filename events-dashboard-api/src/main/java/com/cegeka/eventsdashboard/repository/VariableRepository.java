package com.cegeka.eventsdashboard.repository;

import com.cegeka.eventsdashboard.domain.Template;
import com.cegeka.eventsdashboard.domain.Variable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VariableRepository extends CrudRepository<Variable, Long> {
    Variable findByNameAndTemplate(String name, Template template);
}
