import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError as _throw, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }


  // https://stackoverflow.com/questions/50291570/module-not-found-error-cant-resolve-rxjs-add-operator-catch-in-f-angular
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || "Server Error");
      })
    )                  
  } 
}
