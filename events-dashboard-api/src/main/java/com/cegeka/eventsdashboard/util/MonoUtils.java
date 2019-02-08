package com.cegeka.eventsdashboard.util;

import com.cegeka.eventsdashboard.exception.NotFoundResourceException;
import reactor.core.publisher.Mono;

import java.util.Optional;
import java.util.function.Supplier;

public class MonoUtils {

    public static <T> Mono optionalToMono(Optional<T> object) {
        return Mono.fromCallable(object::get);
    }

    public static <T> Mono<T> fromOptionalWithNotFoundException(Optional<T> option, String resourceName) {
        return option.
                map(Mono::just).
                orElseGet(() -> Mono.error(new NotFoundResourceException(resourceName)));
    }

    public static <T> Mono<T> fromOptional(Optional<T> option) {
        return option.map(Mono::just).orElseGet(Mono::empty);
    }

    public static <T> Mono<T> fromOptional(Optional<T> option, Supplier<? extends Exception> errorSupplier) {
        return option.map(Mono::just).orElseGet(() -> Mono.error(errorSupplier.get()));
    }
}
