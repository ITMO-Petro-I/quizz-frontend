import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Theme, ThemeView} from "../models/theme.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<Theme[]> {
    return this.apiService.get('/categories');
  }
}
