import {Component, OnInit} from '@angular/core';
import {Question} from "../core/models/question.model";
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isFormHidden: boolean = true;
  questionForm: Question;

  constructor(public router: Router) {
    const payload = {
      id: "1",
      category: "2",
      text: "3",
      image: "4",
      answers: ["3"],
      correct: [0]
    }
    this.questionForm = new Question(payload)
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
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
