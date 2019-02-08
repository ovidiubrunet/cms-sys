package org.project.startup.api.repository;

import org.project.startup.api.model.User;
import org.project.startup.api.model.VerificationRegistrationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.stream.Stream;

public interface VerificationRegistrationTokenRepository extends JpaRepository<VerificationRegistrationToken, Long> {

	VerificationRegistrationToken findByToken(String token);

	VerificationRegistrationToken findByUser(User user);

    Stream<VerificationRegistrationToken> findAllByExpiryDateLessThan(Date now);

    void deleteByExpiryDateLessThan(Date now);

    @Modifying
    @Query("delete from VerificationRegistrationToken t where t.expiryDate <= ?1")
    void deleteAllExpiredSince(Date now);
}
