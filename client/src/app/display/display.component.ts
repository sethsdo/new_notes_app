import { Component, OnInit, Input} from '@angular/core';
// import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() notes
  constructor() { }

  ngOnInit() {
    // console.log(this._createService.notes)
    // console.log(this._createService.notes)
    // this.notes = this._createService.notes
    // console.log("this is notes")
    console.log(this.notes)
  }

}
