package com.cegeka.eventsdashboard.web.guest.dto;

import java.util.Set;

public class GuestTemplateDTO {
    private String template;
    private Set<AssetsDTO> assets;

    public GuestTemplateDTO(String template, Set<AssetsDTO> assets) {
        this.template = template;
        this.assets = assets;
    }

    public String getTemplate() {
        return template;
    }

    public Set<AssetsDTO> getAssets() {
        return assets;
    }
}
