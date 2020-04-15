import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  constructor(private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {
  }

  logAdminOut(): void {
    this.adminAuthService.logUserOut();
  }

}
