import { Component, OnInit } from '@angular/core';
import { Knight } from '../knight';
import { KnightService } from '../knight.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-knights',
  templateUrl: './knights.component.html',
  styleUrls: ['./knights.component.css']
})
export class KnightsComponent implements OnInit {
  
  knights: Knight[] = [];
  selectedKnight?: Knight;

  constructor(private knightService: KnightService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getKnights();
  }

  getKnights(): void{
    this.knightService.getKnights().subscribe(knights => this.knights = knights);
  }

}
