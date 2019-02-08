package com.cegeka.eventsdashboard.web.admin.handler;

import com.cegeka.eventsdashboard.domain.Template;
import com.cegeka.eventsdashboard.repository.TemplateRepository;
import com.cegeka.eventsdashboard.util.ServerResponseWithCors;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;

import java.io.IOException;

@Component
public class OperationHandler {

    private TemplateRepository templateRepository;
    private final Scheduler scheduler;
    private final Log logger = LogFactory.getLog(this.getClass());

    public OperationHandler(TemplateRepository templateRepository, Scheduler scheduler){
        this.templateRepository = templateRepository;
        this.scheduler = scheduler;
    }

    public Mono<ServerResponse> inits (ServerRequest request) {

        byte[] arrayData = null;

        // file .txt
        ClassPathResource jsaAboutFile = new ClassPathResource("templates/index.html");

        try {
            arrayData = new byte[(int) jsaAboutFile.contentLength()];
            jsaAboutFile.getInputStream().read(arrayData);
            logger.debug("E");
        } catch (IOException e) {
            e.printStackTrace();
            logger.debug("E");
        }

        Template template = new Template();
        template.setName("index");
        template.setContent(new String(arrayData));
        this.templateRepository.save(template);
        Mono<Template> templateMono = Mono.just(template);
        return ServerResponseWithCors.ok().build();
    }
}
