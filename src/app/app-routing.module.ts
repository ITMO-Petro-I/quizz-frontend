import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ThemesComponent} from "./themes/themes.component";
import {QuestionComponent} from "./question/question.component";
import {EditorComponent} from "./editor/editor.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'themes', component: ThemesComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'editor', component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
