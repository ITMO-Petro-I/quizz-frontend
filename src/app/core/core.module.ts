import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from "./services/api.service";
import { DragDirective } from './directives/drag.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        DragDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        DragDirective
    ],
    providers: [
        ApiService
    ]
})
export class CoreModule {
}
