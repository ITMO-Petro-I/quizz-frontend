import {Component, OnInit} from '@angular/core';
import {Theme, ThemeView} from "../core/models/theme.model";
import {Router} from "@angular/router";
import {filter, map} from "lodash";
import {CategoryMockService} from "../core/services/category.mock.service";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: ThemeView[] = []

  constructor(public router: Router,
              private categoryService: CategoryMockService) {

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
