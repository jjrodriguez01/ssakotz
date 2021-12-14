import { Component, OnInit, Input } from '@angular/core';
import {Knight} from '../knight';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KnightService } from '../knight.service';
import { CosmoService } from '../cosmo.service';
import { LegendaryCosmo } from '../LegendaryCosmo/LegendaryCosmo';
import { DamageType } from '../DamageType';

@Component({
  selector: 'app-knight-detail',
  templateUrl: './knight-detail.component.html',
  styleUrls: ['./knight-detail.component.css']
})
export class KnightDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private knightService: KnightService,
    private cosmoService: CosmoService,
    private location: Location) { }

  @Input() knight?: Knight;
  @Input() cosmos?: LegendaryCosmo[];
  cosmoImg = "assets/images/cosmo/nothing.jpg";
  selectedCosmo = undefined;
    
  ngOnInit(): void {
    this.getKnight();
    this.getCosmos();
  }

  getKnight(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.knightService.getKnight(id).subscribe(knight => this.knight = knight);
  }

  getCosmos(): void {
    this.cosmoService.getCosmos().subscribe(cosmo => this.cosmos = cosmo);
  }

  /* Como el scope del html es limitado a su compnente se crea este metodo
  para obtener el enum */
  public get getKnightDmgType(): typeof DamageType{
    return DamageType
  }

  onChangeSelCosmo(cosmo: any){
    console.log(cosmo);
    if(cosmo === "undefined"){
      this.cosmoImg = "assets/images/cosmo/nothing.jpg";
    }else{
      this.selectedCosmo = cosmo;
      this.cosmoImg = cosmo.image;
    }
  }

}
