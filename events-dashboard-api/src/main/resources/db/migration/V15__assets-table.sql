CREATE TABLE assets (
  id SERIAL primary key ,
  asset_type varchar(10) NOT NULL,
  asset_path text  NOT NULL
);

CREATE SEQUENCE ASSET_SEQ START WITH 1 INCREMENT BY 1;


CREATE TABLE template_assets (
  template_id BIGINT NOT NULL,
  asset_id BIGINT NOT NULL,
  PRIMARY KEY (template_id, asset_id),
  constraint FK_TEMPLATE_ASSETS_TEMPLATE FOREIGN KEY (template_id) REFERENCES templates (id),
  constraint FK_TEMPLATE_ASSETS_ASSET FOREIGN KEY (asset_id) REFERENCES assets (id)
);

INSERT INTO public.assets (id, asset_type, asset_path) VALUES (1, 'js', 'resource/js/main.81ab96e4a3f581a35dde.js?0bcca7199060b35688e5');
INSERT INTO public.template_assets (template_id, asset_id) VALUES (2, 1);
