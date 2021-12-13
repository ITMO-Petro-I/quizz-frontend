import {Component, OnInit} from '@angular/core';
import {Question} from "../core/models/question.model";
import {FileHandle} from "../core/directives/drag.directive";
import {QuestionService} from "../core/services/question.service";
import {CategoryService} from "../core/services/category.service";
import {Theme} from "../core/models/theme.model";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  questionForm: Question;
  droppedFiles: FileHandle[] = [];
  categories: Theme[] = [];

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService) {
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

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    })
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

  onClick() {
    this.questionForm.answers.push("")
  }

  clear() {
    this.questionForm.clear();
  }

  sendQuestion() {
    this.questionService.create(this.questionForm).subscribe((id) => {
      console.log("Created question:", id);
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
