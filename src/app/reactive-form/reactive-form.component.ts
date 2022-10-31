import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  myForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/09[0-9]{9}$/),
    ]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required)
    })
  })

  @Output() customSubmit = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customSubmit.emit(this.myForm.value);
    //this.customSubmit.emit(this.myForm.get('email')?.value); for individual value
  }

  get email() {
    return this.myForm.get('email');
  }

  get phone() {
    return this.myForm.get('phone');
  }

}
