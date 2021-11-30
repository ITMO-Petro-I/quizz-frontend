import {Injectable} from '@angular/core';
import {Question} from "../models/question.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {
  }

  getQuestions(themes: number[]): Observable<Question> {
    return new Observable<Question>((subscriber) => {
      subscriber.next(new Question("1", "2",
        "3", "4", ["5"], [1]))
      subscriber.next(new Question("2", "3",
        "4", "5", ["6"], [12]))
    })
  }
}
