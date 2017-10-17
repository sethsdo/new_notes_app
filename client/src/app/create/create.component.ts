import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from "./../note"
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_note: Note
  notes: Array<Note>;
  constructor(private _createService: CreateService) {
    this.notes = (this._createService.notes)
  }

  @Output() add_a_note = new EventEmitter()

  note = {
    note: ""
  }

  onSubmit() {
    console.log(this.new_note)
    // this._createService.notes.push(this.new_note)
    this._createService.create(this.new_note, this.getNotes.bind(this))
  
    this.new_note = new Note
  }

  getNotes() {
    this._createService.display()
      .then(note => this.notes = note)
      .catch(err => console.log("there is an error"))
  }

  ngOnInit() {
    this.getNotes()
    // console.log("oninit")
    // console.log(this._createService.display(), "this is in the Init")
    // // this.notes = (this._createService.notes)
    // console.log(this.notes)
    this.new_note = new Note;
  }

}
