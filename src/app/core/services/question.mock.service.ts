import {Injectable} from '@angular/core';
import {Question} from "../models/question.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionMockService {

  constructor() {
  }

  get(themes: number[]): Observable<Question> {
    return new Observable<Question>((subscriber) => {
    })
  }
}
