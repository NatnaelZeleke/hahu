import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../../services/PasswordValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  rememberMe = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        login: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(50),
            Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
          ],
        ],
        email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      }, {
        validator: PasswordValidation.MatchPassword // Custom validation method
      }
    );
  }

  register() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  changeStatus() {
    this.rememberMe = !this.rememberMe;
  }



}
