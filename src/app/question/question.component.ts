import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {parseInt} from "lodash";
import {AnswerWithSelect, Question, QuestionView} from "../core/models/question.model";
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
  currentIndex: number
  gameOver: boolean
  points: number

  ngOnInit(): void {
    this.questionService
      .getAll()
      .subscribe((q: Question[]) => {
        this.questions = q.map(question => new Question(question).toView());
      })
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionMockService: QuestionMockService,
    private questionService: QuestionService
  ) {
    this.themesId = []
    this.questions = [];
    this.currentIndex = 0;
    this.points = 0;
    this.gameOver = false;

    this.route.queryParamMap
      .subscribe(params => {
        this.themesId = params
          .getAll('id').map(parseInt)
      })
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectAnswer(answer: AnswerWithSelect) {
    if (this.currentQuestion.isCorrectAnswer(answer)) {
      this.points++;
    }

    this.currentIndex++;
    this.gameOver = this.currentIndex >= this.questions.length;
  }

  goToMenu() {
    this.router.navigate(["/"]);
  }
}
