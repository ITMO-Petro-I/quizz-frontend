export interface Theme {
  id: number;
  name: string;
}

export class ThemeView implements Theme {
  id: number;
  name: string;
  selected: boolean;

  constructor(id: number, name: string, selected: boolean = false) {
    this.id = id;
    this.name = name;
    this.selected = selected;
  }
}
