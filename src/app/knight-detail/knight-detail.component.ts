import { Component, OnInit, Input } from '@angular/core';
import {Knight} from '../knight';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KnightService } from '../knight.service';
import { CosmoService } from '../cosmo.service';
import { LegendaryCosmo } from '../LegendaryCosmo/LegendaryCosmo';
import { DamageType } from '../DamageType';
import { KnightSkill } from '../KnightSkill';
import { SkillLevel } from '../SkillLevel';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-knight-detail',
  templateUrl: './knight-detail.component.html',
  styleUrls: ['./knight-detail.component.css']
})
export class KnightDetailComponent implements OnInit {

  @Input() knight?: Knight;
  @Input() cosmos?: LegendaryCosmo[];
  cosmoImg = "assets/images/cosmo/nothing.jpg";
  selectedCosmo = undefined;
  skillsForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private knightService: KnightService,
    private cosmoService: CosmoService,
    private fb:FormBuilder) { 
      this.skillsForm = fb.group({skillsFormArray:this.fb.array([])});
    }

  get skillsFormArray() : FormArray {
    return this.skillsForm.get("skillsFormArray") as FormArray
  }

  ngOnInit(): void {
    this.getKnight();
    this.getCosmos();
  }

  getKnight(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.knightService.getKnight(id).subscribe(knight => {
      this.knight = knight
      knight.skills.forEach(skill =>
        {
          let control = new FormControl(skill.levels[0])
          
          this.skillsFormArray.push(control)
        });
        
      });
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

  onChangeSkill(id: number){
    this.skillsFormArray.controls.forEach(e=>{
      let level = e.value as SkillLevel
      if(level.skillId == id){
        if(this.knight !== undefined){
          //let skill = this.knight.skills.find(s => s.id == id)
          let skill = this.knightService.getSkill(this.knight.id,id,level.level)
          if(skill !== undefined){
            this.knight.skills[id-1] = skill
          }
        }
      }
    })
    Object.keys(this.skillsForm.controls).forEach(e=>{
      console.log(this.skillsForm.controls[e].value)
      if(this.knight !==undefined){
        let level = this.skillsForm.controls[e].value as SkillLevel
        //this.knight.skills[id].description = level.description
      }
    })
    
  }

  getSkill(knight: Knight, id:number, level:number):KnightSkill {
    let skill = knight.skills[0]
    switch(id){
        case 1:
            skill = skill;
            break;
        case 2:
            skill = knight.skills[1]
            break;
        case 3:
            skill = knight.skills[2]
            break;
        case 4:
            skill = knight.skills[3]
            break;
        default:
            skill = skill;
            break;
    }
    return skill;
}

}
