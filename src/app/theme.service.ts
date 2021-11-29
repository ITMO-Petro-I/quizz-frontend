import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Theme} from "./core/models/theme.model";

@Injectable({
  providedIn: 'root'
})

// interface ThemeServiceInterface {
//   getThemes(): ThemeModel[]
// }

export class ThemeService /*implements ThemeServiceInterface*/ {

  constructor(
    private http: HttpClient) {
  }
}
