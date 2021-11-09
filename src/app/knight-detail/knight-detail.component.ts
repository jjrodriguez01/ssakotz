import { Component, OnInit, Input } from '@angular/core';
import {Knight} from '../knight';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KnightService } from '../knight.service';

@Component({
  selector: 'app-knight-detail',
  templateUrl: './knight-detail.component.html',
  styleUrls: ['./knight-detail.component.css']
})
export class KnightDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private knightService: KnightService,
    private location: Location) { }

  @Input() knight?: Knight;

  ngOnInit(): void {
    this.getKnight();
  }

  getKnight(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.knightService.getKnight(id).subscribe(knight => this.knight = knight);
  }

}
