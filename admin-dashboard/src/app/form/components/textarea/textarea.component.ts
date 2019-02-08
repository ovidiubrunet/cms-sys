import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
import { UploadAdapter } from 'src/app/dashboard/models/upload-adapter';
import * as Editor from './ckeditor';
import { CkeditorConfig } from './ckeditor-config';
@Component({
  selector: 'app-textarea',
  template: `
  <mat-card class='input-card'>
    <div class='demo-full-width' [formGroup]='group'>
      <ckeditor  matInput [config]="editorConfig" [editor]="Editor" type="text"
      [formControlName]='field.name' (ready)="onReady($event)"></ckeditor>
    </div>
  </mat-card>

`,
  styles: [
  ]
})
export class TextareaComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  public Editor = Editor;
  public editorConfig = CkeditorConfig.editorConfig;
  constructor() { }
  ngOnInit() { }
  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }
}
