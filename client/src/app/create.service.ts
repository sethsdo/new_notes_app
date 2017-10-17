import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
import { Note } from "./note"

@Injectable()
export class CreateService {
  notes = [];
  constructor(private _http: Http) { }
  display() {
    console.log("Im in display")
    return this._http.get("/get_notes").map(data => data.json()).toPromise()
  }

  // display() {
  //   return this._http.get('/get_notes')
  //     .subscribe(
  //     (notes) => {
  //       console.log('Successful response from the server');
  //       this.notes.push(notes.json());
  //       console.log(this.notes)
  //       return this.notes
  //     },
  //     (err) => {
  //       console.log("this is an error")
  //       console.log(err);
  //     }
  //     )
  // }

  create(new_note: Note, callback){
    console.log("this is create in service")
    console.log(new_note.note)
    return this._http.post('/create', new_note)
      .subscribe(
      (response) => {
        console.log('Successful response from the server');
        callback()
      },
      (err) => {
        console.log(err);
        callback()
      }
      )
  }

}
