import {Component, OnInit} from '@angular/core';
import {Theme, ThemeView} from "../core/models/theme.model";
import {Router} from "@angular/router";
import {filter, map} from "lodash";
import {Question} from "../core/models/question.model";
import {CategoryService} from "../core/services/category.service";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: ThemeView[] = []

  constructor(public router: Router, private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe((c: Theme[]) => {
        this.themes = c.map(category => new ThemeView(category.id, category.name));
      })
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
