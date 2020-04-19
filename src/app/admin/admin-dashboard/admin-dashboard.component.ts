import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../admin-dashboard.service';
import * as moment from 'moment';

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
  clockMachine = [{name:"t21", entry:"12:49:00"}]
  constructor(private adminDashboardService: AdminDashboardService) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher(): void {
  this.adminDashboardService.getTeacher().subscribe(
    teacher => this.teacher = teacher
  )
}

}
