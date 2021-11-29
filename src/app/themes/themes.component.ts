import {Component, OnInit} from '@angular/core';
import {Theme} from "../core/models/theme.model";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: Theme[]

  constructor() {
    this.themes = [];
  }

  ngOnInit(): void {
  }
}
