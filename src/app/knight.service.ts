import { Injectable } from '@angular/core';
import {KnightsFactory} from './knights-factory/KnightsFactory'
import { Knight } from './knight';
import { Knights } from './knights-factory/Knights';
import { from, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { KnightSkill } from './KnightSkill';
import { KnightTypeEnum } from './KnightType';
import { SkillType } from './SkillType';
import { Thanatos } from './knights-factory/knights/Thanatos';

@Injectable({
  providedIn: 'root'
})
export class KnightService {

  /* knights: Knight[] = [
    KnightsFactory.create(Knights.HYOGADIVINO),
    KnightsFactory.create(Knights.THANATOS),
    KnightsFactory.create(Knights.AFRODITA),
    KnightsFactory.create(Knights.SAGA),
    KnightsFactory.create(Knights.KANON),
    KnightsFactory.create(Knights.RADAMANTIS),
    KnightsFactory.create(Knights.SHURA)
  ]; */

  private knightsUrl = 'api/knights';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  //Obtener caballeros con RxJs Of()
  /* getKnights(): Observable<Knight[]>{
    const KNIGHTS = of(this.knights); 
    this.messageService.add("Se reciven los caballeros con éxito");
    return KNIGHTS;
  } */

  //Obtener caballeros con HttpClient
  getKnights(): Observable<Knight[]>{
    return this.http.get<Knight[]>(this.knightsUrl)
    .pipe(
      tap(_ => this.log('fetched knights')),
      catchError(this.handleError<Knight[]>('getKnights', []))
    );
  }

  /* getKnight(id: number): Observable<Knight>{
    const knight = this.knights.find(k => k.id === id)!;
    return of(knight);
  } */

  getKnight(id: number): Observable<Knight>{
    const url = `${this.knightsUrl}/${id}`;
    return this.http.get<Knight>(url).pipe(
      tap(_ => this.log(`fetched knight id=${id}`)),
      catchError(this.handleError<Knight>('getKnight id=${id}'))
    );
  }

  getSkill(knightId:number, skillId:number, level: number): KnightSkill{
    let skill : KnightSkill = {description:"",id:0,type:SkillType.ACTIVE,name:"",levels:[]}
    let knight: Knight
    switch(knightId){
      case 9:
        knight = new Thanatos()
        skill=knight.getSkill(skillId,level)
      break;
    }
    return skill
  }

  private log(message: string) {
    this.messageService.add(`KnightService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
