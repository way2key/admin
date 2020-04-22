import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-admin-data-student-allot-student',
  templateUrl: './admin-data-student-allot-student.component.html',
  styleUrls: ['./admin-data-student-allot-student.component.scss']
})
export class AdminDataStudentAllotStudentComponent implements OnInit {
  students = [];
  shownStudents = [];
  clockMachines = [];
  searchField = '';
  interaction = new FormControl('');
  filteredOptions: Observable<string[]>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.students = this.data;
    this.shownStudents = this.data;
    this.filteredOptions = this.interaction.valueChanges
    .pipe(
      startWith(''),
      map(value =>  this._filter(value))
    );
    const socket = io.connect("http://localhost:4000/allotStudent");
    socket.on('updateClockMachine', clockMachines => {
      this.clockMachines = clockMachines;
    })

    socket.on('newClockMachine', machine => {
      this.clockMachines.push(machine);
    })

    socket.on('clockMachineDisconnected', socketId => {
      this.clockMachines = this.clockMachines.filter(item => item.socketId !== socketId);
    })
  }

  private _filter(option: string): string[] {
    const filterValue = option.toLowerCase();
    this.shownStudents = this.students.filter(student => {
      let search = (student.firstname + " " + student.lastname).toLowerCase();
      return (search.includes(filterValue));
    });
    return this.shownStudents.map(student => (student.firstname + " " + student.lastname))
  }

  clearSearchField(): void {
    this.searchField = '';
  }

  randomMachine(): void {

  }

  alphabetical(): void {

  }

}
