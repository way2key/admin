import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../admin-dashboard.service';

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
