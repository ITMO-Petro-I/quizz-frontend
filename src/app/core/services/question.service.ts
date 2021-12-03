import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Question} from "../models/question.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<Question[]> {
    return this.apiService.get('/questions');
  }
}
