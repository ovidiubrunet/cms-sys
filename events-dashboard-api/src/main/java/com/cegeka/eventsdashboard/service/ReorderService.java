package com.cegeka.eventsdashboard.service;

import com.cegeka.eventsdashboard.domain.PostPositionIdx;
import com.cegeka.eventsdashboard.repository.*;
import com.cegeka.eventsdashboard.web.admin.dto.ReorderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;

import javax.validation.ConstraintViolationException;
import java.util.Optional;


@Service
public class ReorderService {

    @Autowired
    private PostPositionIdxRepository postPositionIdxRepository;

    @Autowired
    private Scheduler scheduler;

    @Transactional(
            propagation = Propagation.REQUIRED,
            rollbackFor = {Exception.class, ConstraintViolationException.class}
    )
    public Mono<ReorderDTO> saveOrder(ReorderDTO reorderDTO) {
        Mono.fromCallable(() -> this.postPositionIdxRepository.findAll())
                .flatMap(postPositionIdxes -> {
                    postPositionIdxes.forEach(p -> {
                        if (p.getPosition() >= reorderDTO.getPreviousPost().getPostPositionIdx().getPosition()) {
                            p.setPosition(p.getPosition() + 1);
                            this.postPositionIdxRepository.save(p);
                        }
                    });

                    return Mono.just(postPositionIdxes);
                })
                .flatMapMany(Flux::fromIterable)
                .subscribeOn(scheduler);

        Mono.fromCallable(() -> this.postPositionIdxRepository.findById(reorderDTO.getCurrentPost().getPostPositionIdx().getId()))
                .filter(Optional::isPresent)
                .map(position -> {
                    PostPositionIdx p = position.get();
                    p.setPosition(reorderDTO.getPreviousPost().getPostPositionIdx().getPosition());
                    this.postPositionIdxRepository.save(p);
                    return position;
                })
                .subscribeOn(scheduler);

        return Mono.just(reorderDTO);
    }
}
