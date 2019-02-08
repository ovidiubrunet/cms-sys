package com.cegeka.eventsdashboard.web.admin.dto;

import com.cegeka.eventsdashboard.domain.VariableType;

public class VariablesDTO {
    public String name;
    public String value;
    public VariableType type;
    private String inputType;
    private String label;

    public VariablesDTO(String name, String value, VariableType type, String inputType, String label) {
        this.name = name;
        this.value = value;
        this.type = type;
        this.inputType = inputType;
        this.label = label;
    }

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }

    public VariableType getType() {
        return type;
    }

    public String getInputType() {
        return inputType;
    }

    public String getLabel() {
        return label;
    }
}
