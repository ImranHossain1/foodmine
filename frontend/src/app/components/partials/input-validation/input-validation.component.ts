import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const VALIDATIORS_MESSAGES: any = {
  required: 'Should not be Empty',
  email:'Email is not valid',
  minLength: 'Field is too short',
  notMatch:'Password and Confirm Password is mot matching'
}
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input() control!: AbstractControl;
  @Input() showErrorsWhen: boolean = true;
  errorMessages: string[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkvalidation()
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(()=>{
      this.checkvalidation()
    })
    this.control.valueChanges.subscribe(()=>{
      this.checkvalidation();
    })
  }

  checkvalidation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }
    const errorkeys = Object.keys(errors);
    this.errorMessages = errorkeys.map(key => VALIDATIORS_MESSAGES[key]);

  }
}
