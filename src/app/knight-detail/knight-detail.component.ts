import { Component, OnInit, Input } from '@angular/core';
import {Knight} from '../knight';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Input() knight?: Knight
  @Input() cosmos?: LegendaryCosmo[]
  cosmoImg = "assets/images/cosmo/nothing.jpg"
  selectedCosmo = undefined
  skillsForm: FormGroup
  knightForm: FormGroup
  href: string = window.location.href
  x="jjj"

  constructor(private route: ActivatedRoute,
    private knightService: KnightService,
    private cosmoService: CosmoService,
    private fb:FormBuilder) { 
      this.skillsForm = fb.group({skillsFormArray:this.fb.array([])});
      this.knightForm = fb.group({
        level: new FormControl(""),
        healtPoints: new FormControl(""),
        cosmicAtk : new FormControl(""),
        cosmicDef : new FormControl(""),
        physicalAtk : new FormControl(""),
        physicalDef : new FormControl(""),
        speed : new FormControl(""),
        statusHit: new FormControl(""),
        critPhysicLevel: new FormControl(""),
        statusResist: new FormControl(""),
        physicalCritEffect: new FormControl(""),
        cosmicDMG: new FormControl(""),
        physicalCritResist: new FormControl(""),
        cosmicDMGResist: new FormControl(""),
        physicalDEFPerf: new FormControl(""),
        cosmicDEFPerf: new FormControl(""),
        dmgReflect: new FormControl(""),
        hpSteal: new FormControl(""),
        healing: new FormControl(""),
        basePhysicalCrit: new FormControl(""),
        defenderDef: new FormControl(""),
        defenderResDef: new FormControl(""),
        defenderCritRes: new FormControl(""),
      })
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
        this.onChanges()   
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
          let skill = this.knightService.getSkill(this.knight.id,id,level.level, this.knight)
          if(skill !== undefined){
            this.knight.skills[id-1] = skill
            e.setValue(skill.levels[level.level-1])
          }
        }
      }
    })
  }

  updateAllSkills():void{
    if(this.knight !== undefined){
      this.knight.skills.forEach(s =>{
        //console.log(s.id)
        this.onChangeSkill(s.id)
      })
    }
  }

  onChanges(): void{
    this.knightForm.get("level")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.level = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("cosmicAtk")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.basicAttributes.cosmicAtk = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("cosmicDMG")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.cosmicDMG = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("physicalAtk")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.basicAttributes.physicalAtk = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("critPhysicLevel")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.critPhysicLevel = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("physicalCritEffect")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.physicalCritEffect = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("basePhysicalCrit")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.basePhysicalCrit = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("defenderDef")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.defenderDef = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("defenderResDef")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.defenderResDef = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("statusHit")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.battleAttributes.statusHit = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("healtPoints")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.basicAttributes.healtPoints = val
        this.updateAllSkills()
      }
    })

    this.knightForm.get("speed")?.valueChanges.subscribe(val =>{
      if(this.knight !== undefined){
        this.knight.basicAttributes.speed = val
        this.updateAllSkills()
      }
    })

  }

  /* getSkill(knight: Knight, id:number, level:number):KnightSkill {
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
} */

}
