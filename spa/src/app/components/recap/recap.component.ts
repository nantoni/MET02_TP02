import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.sass']
})
export class RecapComponent implements OnInit {

  @Input() data: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
