import {Component, OnInit} from '@angular/core';
import {Question} from "../core/models/question.model";
import {FileHandle} from "../core/directives/drag.directive";
import {QuestionService} from "../core/services/question.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  questionForm: Question;
  droppedFiles: FileHandle[] = [];

  constructor(private questionService: QuestionService) {
    const payload = {
      id: 0,
      category: "",
      text: "",
      images: [],
      answers: [],
      correct: []
    }
    this.questionForm = new Question(payload);
  }

  filesDropped(files: FileHandle[]): void {
    this.droppedFiles = files;
    const file = files[0].file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      this.questionForm.images.push(e.target.result);
      console.log(this.questionForm)
    };

  }

  ngOnInit(): void {
  }

  onClick() {
    this.questionForm.answers.push("")
  }

  clear() {
    this.questionForm.clear();
  }

  // parseCorrect($event: Event) {
  //   // @ts-ignore
  //   let src: string = event.target.value;
  //
  //   this.questionForm.correct = src.split(',')
  //     .map(String.prototype.trim)
  //     .map(parseInt);
  // }

  sendQuestion() {
    this.questionService.create(this.questionForm).subscribe((id) => {
      console.log(id);
      this.questionService.getAll().subscribe((questions) => {
        console.log(questions)
        console.log(questions.find((q) => q.id === id));
      })
    })
  }

  changeCorrectAnswer(answer: string) {
    let index = this.questionForm.answers.indexOf(answer)

    let indexInCorrect = this.questionForm.correct.indexOf(index);

    if (indexInCorrect == -1) {
      this.questionForm.correct.push(index);
    } else {
      this.questionForm.correct.splice(indexInCorrect, 1);
    }
  }

  log(data : any) {
    console.log(data)
  }
}
