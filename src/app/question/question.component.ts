import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, parseInt} from "lodash";
import {QuestionView} from "../core/models/question.model";
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
    this.service
      .getQuestions(this.themesId)
      .subscribe((q) => this.questions.push(q.toView()));

  }

  constructor(private route: ActivatedRoute,
              private service: QuestionService) {
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
