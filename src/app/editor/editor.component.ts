import {Component, OnInit} from '@angular/core';
import {Question} from "../core/models/question.model";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  questionForm: Question;

  constructor() {
    const payload = {
      id: "",
      category: "",
      text: "",
      image: "",
      answers: [""],
      correct: [0]
    }
    this.questionForm = new Question(payload);
  }

  ngOnInit(): void {
  }

  onClick() {
    this.questionForm.answers.push("")
  }

  clear() {
    this.questionForm.clear();
  }

  parseCorrAnswers($event: Event) {
    // @ts-ignore
    let src: string = event.target.value;

    this.questionForm.correct = src.split(',')
      .map(String.prototype.trim)
      .map(parseInt);
  }

  sendQuestion() {

  }
}
