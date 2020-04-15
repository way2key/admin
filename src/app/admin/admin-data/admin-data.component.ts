import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.scss']
})
export class AdminDataComponent implements OnInit {
  navLinks = [
    { path: 'holiday', label: 'Vacance' },
    { path: 'timeplan', label: 'Horaire' },
    { path: 'student', label: 'Stagiaire' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
