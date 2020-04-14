import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  teacher = {
    firstname: 'Nom',
    lastname: 'Prenom'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
