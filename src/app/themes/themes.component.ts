import {Component, OnInit} from '@angular/core';
import {Theme} from "../core/models/theme.model";
import {Router} from "@angular/router";
import {filter, map} from "lodash";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: ThemeView[]

  constructor(public router: Router) {

    this.themes = [
      new ThemeView(1, "Theme 1"),
      new ThemeView(2, "Theme 2"),
      new ThemeView(3, "Theme 3"),
      new ThemeView(4, "Theme 4")];
  }

  ngOnInit(): void {
  }

  startQuiz() {

    this.router.navigate(['/question'],
      {
        queryParams: {
          id: map(filter(this.themes, 'selected'), 'id')
        }
      });
  }
}

class ThemeView implements Theme {
  id: number;
  name: string;
  selected: boolean;


  constructor(id: number, name: string, selected: boolean = false) {
    this.id = id;
    this.name = name;
    this.selected = selected;
  }
}
