abstract class AbstractQuestion {
  id: string;
  category: string;
  text: string;
  image: string;
  correct: number[];

  protected constructor(id: string, category: string, text: string, image: string, correct: number[]) {
    this.id = id;
    this.category = category;
    this.text = text;
    this.image = image;
    this.correct = correct;
  }

  clear() {
    this.id = "";
    this.text = "";
    this.image = "";
    this.correct = [];
  }
}

export class Question extends AbstractQuestion {
  answers: string[];

  constructor(id: string, category: string, text: string, image: string, answers: string[], correct: number[]) {
    super(id, category, text, image, correct);
    this.answers = answers;
  }

  toView() {
    return new QuestionView(this.id,
      this.category,
      this.text,
      this.image,
      this.answers,
      this.correct
    );
  }

  override clear() {
    super.clear();
    this.answers = [];
  }
}

export class QuestionView extends AbstractQuestion {
  // Id       string   `dynamo:"id" json:"id" validate:"required"`
  // Category string   `dynamo:"category" json:"category" validate:"required"`
  // Text     string   `dynamo:"question" json:"question" validate:"required"`
  // Image    string   `dynamo:"image" json:"image" validate:"required"`
  // Answers  []string `dynamo:"answers" json:"answers"`
  // Correct  []uint   `dynamo:"correct" json:"correct"`
  answers: AnswerWithSelect[];

  constructor(id: string, category: string, text: string, image: string, answers: string[], correct: number[]) {
    super(id, category, text, image, correct);
    this.answers = answers.map(
      (answ) => new AnswerWithSelect(answ)
    );
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
