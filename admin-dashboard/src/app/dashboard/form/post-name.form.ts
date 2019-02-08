import { FieldConfig } from 'src/app/form/field.interface';
import { Validators } from '@angular/forms';

export class PostNameForm {
    public static form: FieldConfig[] = [
        {
          type: 'input',
          label: 'Post name',
          inputType: 'text',
          name: 'name',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Post Name is Required.'
            }
          ]
        },
        {
          type: 'input',
          label: 'Post url',
          inputType: 'text',
          name: 'url',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Url is Required.'
            }
          ]
        }
      ];
}
