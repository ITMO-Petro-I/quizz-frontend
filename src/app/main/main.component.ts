import {Component, OnInit} from '@angular/core';
import {Question} from "../core/models/question.model";
import {Router} from '@angular/router';
import {Theme, ThemeView} from "../core/models/theme.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isFormHidden: boolean = true;
  isNewCatHidden: boolean = true;
  categoryForm: Theme;

  constructor(public router: Router) {
    this.categoryForm = new ThemeView(1, "base");
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


  ngOnInit(): void {
  }

  addCategory() {

  }
}
