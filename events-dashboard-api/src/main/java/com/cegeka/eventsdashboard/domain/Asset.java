package com.cegeka.eventsdashboard.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "assets")
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ASSET_SEQ")
    @SequenceGenerator(name = "ASSET_SEQ", sequenceName = "ASSET_SEQ", allocationSize = 1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "asset_path", nullable = false)
    private String path;

    @Column(name = "asset_type", nullable = false)
    private String type;

    @JsonManagedReference
    @ManyToMany( fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinTable(
            name = "template_assets",
            joinColumns = {@JoinColumn(name="asset_id")},
            inverseJoinColumns = {@JoinColumn(name="template_id")}
    )
    Set<Template> templates = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Set<Template> getTemplates() {
        return templates;
    }

    public void setTemplates(Set<Template> templates) {
        this.templates = templates;
    }
}
