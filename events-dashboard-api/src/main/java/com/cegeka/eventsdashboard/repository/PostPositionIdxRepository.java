package com.cegeka.eventsdashboard.repository;


import com.cegeka.eventsdashboard.domain.PostPositionIdx;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostPositionIdxRepository extends CrudRepository<PostPositionIdx, Long> {
    //custom query
    @Query("select max(p.position) from PostPositionIdx p ")
    Long findBiggestValue();
}
