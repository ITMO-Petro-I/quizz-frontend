import {Component, OnInit} from '@angular/core';
import {Question} from "../core/models/question.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isFormHidden: boolean = true;
  questionForm: Question;

  constructor() {
    this.questionForm = new Question("1", "2", "3", "4", ["3"], [3])
  }

  ngOnInit(): void {
  }

  onClick() {
    this.questionForm.answers.push("")
  }

  sendQuestion() {
    //logic
    this.clear();
  }

  clear() {
    this.isFormHidden = true;
    this.questionForm.clear();
  }

  parseCorrAnswers($event: Event) {
    // @ts-ignore
    let src: string = event.target.value;

    this.questionForm.correct = src.split(',')
      .map(String.prototype.trim)
      .map(parseInt);
  }
}
