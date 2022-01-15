import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LegendaryCosmo } from './LegendaryCosmo/LegendaryCosmo';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CosmoService {

  private cosmoUrl = 'api/cosmos';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getCosmos(): Observable<LegendaryCosmo[]>{
    return this.http.get<LegendaryCosmo[]>(this.cosmoUrl)
    .pipe(
      tap(_ => this.log('fetched cosmos')),
      catchError(this.handleError<LegendaryCosmo[]>('getCosmos', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`CosmoService: ${message}`);
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

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
