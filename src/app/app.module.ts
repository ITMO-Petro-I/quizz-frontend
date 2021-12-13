import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionComponent} from './question/question.component';
import {ThemesComponent} from './themes/themes.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from "./core/core.module";
import {MainComponent} from './main/main.component';
import {EditorComponent} from './editor/editor.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ThemesComponent,
    MainComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    // NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FlexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
