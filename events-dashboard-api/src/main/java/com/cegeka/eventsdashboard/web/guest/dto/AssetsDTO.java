package com.cegeka.eventsdashboard.web.guest.dto;

public class AssetsDTO {
    String type;
    String path;

    public AssetsDTO(String type, String path) {
        this.type = type;
        this.path = path;
    }

    public String getType() {
        return type;
    }

    public String getPath() {
        return path;
    }
}
