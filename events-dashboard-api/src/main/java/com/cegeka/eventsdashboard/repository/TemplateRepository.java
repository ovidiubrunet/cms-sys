package com.cegeka.eventsdashboard.repository;

import com.cegeka.eventsdashboard.domain.Post;
import com.cegeka.eventsdashboard.domain.Template;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TemplateRepository extends CrudRepository<Template, Long> {

    @Query("select p from Template p where name=?1")
    Template findByName(final String name);
}
