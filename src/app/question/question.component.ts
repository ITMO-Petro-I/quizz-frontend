import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {parseInt} from "lodash";
import {Question, QuestionView} from "../core/models/question.model";
import {QuestionMockService} from "../core/services/question.mock.service";
import {QuestionService} from "../core/services/question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  themesId: number[]
  questions: QuestionView[]
  currQuestion: number

  ngOnInit(): void {
    this.questionService
      .getAll()
      .subscribe((q: Question[]) => {
        this.questions = q.map(question => new Question(question).toView());
      })
  }

  constructor(private route: ActivatedRoute,
              private questionMockService: QuestionMockService,
              private questionService: QuestionService) {
    this.themesId = []
    this.route.queryParamMap
      .subscribe(params => {
        this.themesId = params
          .getAll('id').map(parseInt)
      })
    this.questions = []
    this.currQuestion = 0
  }

  doSomething() {

  }
}
