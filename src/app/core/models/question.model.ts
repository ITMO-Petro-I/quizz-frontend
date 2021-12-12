abstract class AbstractQuestion {
  id: string;
  category: string;
  text: string;
  image: string[];
  correct: number[];

  protected constructor(payload: Partial<AbstractQuestion>) {
    this.id = payload.id || "";
    this.category = payload.category || "";
    this.text = payload.text || "";
    this.image = [];
    this.correct = payload.correct || [];
  }

  clear() {
    this.id = "";
    this.text = "";
    this.image = [""];
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
        image: this.image,
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
