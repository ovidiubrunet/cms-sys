import { NgModule } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextareaComponent } from './components/textarea/textarea.component';
import { UploadComponent } from './components/upload/upload.component';
import { SharedModule } from '../shared/shared.module';
import { SafePipe } from '../shared/safe.pipe';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    TextareaComponent,
    UploadComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CKEditorModule,
    SharedModule
  ],
  entryComponents: [
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    UploadComponent,
  ],
  exports: [
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    UploadComponent,
  ]
})
export class FormModule { }
