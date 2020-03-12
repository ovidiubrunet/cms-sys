package com.cegeka.eventsdashboard.web.admin.router;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import static org.springframework.web.reactive.function.server.RouterFunctions.resources;

public class ResourceRouter {

    public static RouterFunction<ServerResponse> resourceRoutes(String fileSystemResourcePath) {
        return resources("/resource/**", new FileSystemResource(fileSystemResourcePath));
    }
}
