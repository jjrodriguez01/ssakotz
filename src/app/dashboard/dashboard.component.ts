import { Component, OnInit } from '@angular/core';
import { Knight } from '../knight';
import { KnightService } from '../knight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  knights: Knight[] = [];

  constructor(private knightService: KnightService) { }

  ngOnInit(): void {
    this.getKnights();
  }

  getKnights(): void{
    this.knightService.getKnights().subscribe(knights => this.knights = knights.slice(1,4));
  }

}
