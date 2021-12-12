import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from "./services/api.service";
import { DragDirective } from './directives/drag.directive';


@NgModule({
    declarations: [
        DragDirective
    ],
    imports: [
        CommonModule,
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
