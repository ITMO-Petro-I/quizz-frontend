import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Theme} from "../models/theme.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService {
  constructor() {
  }

  getAll(): Observable<Theme[]> {
    return new Observable<Theme[]>((subscriber) => {
      subscriber.next(
        [
          {
            id: 0,
            name: "history1",
          },
          {
            id: 1,
            name: "history2",
          },
          {
            id: 2,
            name: "history3",
          },
        ]
      )
    })
  }
}
