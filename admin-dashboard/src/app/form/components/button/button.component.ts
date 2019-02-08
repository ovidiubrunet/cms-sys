import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-button',
  template: `
  <mat-card class='input-card'>
    <div class='demo-full-width margin-top' [formGroup]='group'>
      <button type='submit' mat-raised-button color='primary'>{{field.label}}</button>
    </div>
</mat-card>
`,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
