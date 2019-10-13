import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.sass']
})
export class SaisieComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() formValidated: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(formBuilder: FormBuilder) { 

    this.form = formBuilder.group({
      login: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.formValidated.emit(this.form);
  }

}
