import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFormControl, IRegForm, IValidator } from '../../interface/registerForm.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() form !: IRegForm;
  fb = inject(FormBuilder);

  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    if(this.form?.formControls){
      let formGroup: any= {};
      this.form.formControls.forEach((control:IFormControl)=>{
        let controlValidators: any =[];
        if(control.validators){
          control.validators.forEach((val:IValidator)=>{
            if(val.validatorName === 'required')    controlValidators.push(Validators.required);
            if(val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number));
            if(val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
            if(val.validatorName === 'email') controlValidators.push(Validators.email);
            if(val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
          })
        }
        formGroup[control.name] = [control.value || null, controlValidators]
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
      console.log(this.dynamicFormGroup);
    }
  }

  onSubmit(){
    console.log(this.dynamicFormGroup);
  }

  resetForm(){
    this.dynamicFormGroup.reset();
  }
}
