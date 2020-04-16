import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-admin-data-student',
  templateUrl: './admin-data-student.component.html',
  styleUrls: ['./admin-data-student.component.scss']
})
export class AdminDataStudentComponent implements OnInit {
  students = [];
  shownStudents = [];
  searchField = '';
  interaction = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.getStudents();
    this.filteredOptions = this.interaction.valueChanges
    .pipe(
      startWith(''),
      map(value =>  this._filter(value))
    );
  }

  getStudents(): void {
    this.students.push({firstname:"Olivier",lastname:"D'Ancona"},{firstname:"Ryan",lastname:"Quinn"});
  }

  clearSearchField() {
    this.searchField = '';
  }

  private _filter(option: string): string[] {
    const filterValue = option.toLowerCase();
    this.shownStudents = this.students.filter(student => {
      let search = (student.firstname + " " + student.lastname).toLowerCase();
      return (search.includes(filterValue));
    });
    return this.shownStudents.map(student => (student.firstname + " " + student.lastname))
  }

}
