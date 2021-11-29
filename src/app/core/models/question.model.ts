export class Question {
  // Id       string   `dynamo:"id" json:"id" validate:"required"`
  // Category string   `dynamo:"category" json:"category" validate:"required"`
  // Text     string   `dynamo:"question" json:"question" validate:"required"`
  // Image    string   `dynamo:"image" json:"image" validate:"required"`
  // Answers  []string `dynamo:"answers" json:"answers"`
  // Correct  []uint   `dynamo:"correct" json:"correct"`
  id: string;
  category: string;
  text: string;
  image: string;
  answers: Array<string>;
  correct: number[];

  constructor(id: string, category: string, text: string, image: string, answers: string[], correct: number[]) {
    this.id = id;
    this.category = category;
    this.text = text;
    this.image = image;
    this.answers = answers;
    this.correct = correct;
  }

  clear() {
    this.id = "";
    this.text = "";
    this.image = "";
    this.answers = [];
    this.correct = [];
  }
}
