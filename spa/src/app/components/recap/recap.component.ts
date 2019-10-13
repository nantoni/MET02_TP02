import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.sass']
})
export class RecapComponent implements OnInit {

  @Input() data: FormData;

  constructor() { }

  ngOnInit() {
  }

}
