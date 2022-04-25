import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpeechComponent} from './speech/speech.component';

const routes: Routes = [
  {path: 'speech', component: SpeechComponent},
  {path: '', component: SpeechComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
