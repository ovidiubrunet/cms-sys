package com.cegeka.eventsdashboard.repository;

import com.cegeka.eventsdashboard.domain.Upload;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UploadRepository extends CrudRepository<Upload, Long> {
}
