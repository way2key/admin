import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-data-student',
  templateUrl: './admin-data-student.component.html',
  styleUrls: ['./admin-data-student.component.scss']
})
export class AdminDataStudentComponent implements OnInit {
  students = [];
  shownStudents = [];
  constructor() { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.students.push({firstname:"Olivier",lastname:"Dancona"});
    this.shownStudents = this.students;
  }

}
