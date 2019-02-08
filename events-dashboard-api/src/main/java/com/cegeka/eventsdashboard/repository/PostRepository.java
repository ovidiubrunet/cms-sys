package com.cegeka.eventsdashboard.repository;

import com.cegeka.eventsdashboard.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface PostRepository  extends PagingAndSortingRepository<Post, Long> {

    Post findById(long ID);

    Post findByName(final String name);

    @Query("select p from Post p")
    Page<Post> findAll(Pageable pageable);

    @Query("select p from Post p where p.name LIKE %?1% AND (p.expireDate > current_date OR p.expireDate IS null)")
    Page<Post> findByNameContainingAndNotExpired(Pageable pageable, String name);

    @Query("select count(p) from Post p where p.name LIKE %?1%")
    Long countByName(String name);

    //custom query
    @Query("select p from Post p where category=?1")
    Post findByCategory(final String category);

    @Transactional
    void removePostByName(String name);

    @Query("SELECT COUNT(p) FROM Post p ")
    Long countAll();

}
