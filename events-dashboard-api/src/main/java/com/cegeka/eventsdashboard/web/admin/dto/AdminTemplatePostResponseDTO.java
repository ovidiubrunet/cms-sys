package com.cegeka.eventsdashboard.web.admin.dto;

import java.util.ArrayList;
import java.util.List;

public class AdminTemplatePostResponseDTO {
    private List<VariablesDTO> variables = new ArrayList<>();

    private Long id;
    private String name;
    private String content;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<VariablesDTO> getVariables() {
        return variables;
    }

    public void setVariables(List<VariablesDTO> variables) {
        this.variables = variables;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
