import {environment} from "../../../environments/environment";

abstract class AbstractQuestion {
  id: number;
  category: string;
  text: string;
  images: string[];
  correct: number[];

  protected constructor(payload: Partial<AbstractQuestion>) {
    this.id = payload.id || 0;
    this.category = payload.category || "";
    this.text = payload.text || "";
    this.images = payload.images || [];
    this.correct = payload.correct || [];
  }

  clear() {
    this.id = 0;
    this.text = "";
    this.images = [];
    this.correct = [];
  }
}

export class Question extends AbstractQuestion {
  answers: string[];

  constructor(payload: Partial<Question>) {
    super(payload);
    this.answers = payload.answers || [];
  }

  toView() {
    let payload = {...this};
    payload.answers.forEach((answer) => new AnswerWithSelect(answer));
    return new QuestionView(
      {
        id: this.id,
        category: this.category,
        text: this.text,
        images: this.images.map(url => environment.s3_url + "/" + url),
        answers: this.answers.map((answer) => new AnswerWithSelect(answer)),
        correct: this.correct
      }
    );
  }

  override clear() {
    super.clear();
    this.answers = [];
  }
}

export class QuestionView extends AbstractQuestion {
  answers: AnswerWithSelect[];

  constructor(payload: Partial<QuestionView>) {
    super(<Partial<AbstractQuestion>>payload);
    this.answers = payload.answers || [];
  }

  isCorrectAnswer(answer : AnswerWithSelect) {
    return this.correct.includes(this.answers.indexOf(answer));
  }

  override clear() {
    super.clear();
    this.answers = [];
  }
}

export class AnswerWithSelect {
  answer: string;
  selected: boolean;

  constructor(answer: string, selected = false) {
    this.answer = answer;
    this.selected = selected;
  }
}
