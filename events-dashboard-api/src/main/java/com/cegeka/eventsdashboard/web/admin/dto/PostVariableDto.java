package com.cegeka.eventsdashboard.web.admin.dto;

import javax.validation.constraints.NotEmpty;

public class PostVariableDto {

    @NotEmpty
    private String name;

    @NotEmpty
    private String value;

    public PostVariableDto() {
    }

    public PostVariableDto(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }
    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "PostVariableDto{" +
                "name='" + name + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}


