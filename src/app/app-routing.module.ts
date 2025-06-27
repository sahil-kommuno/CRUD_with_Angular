import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisterformComponent } from './Components/registerform/registerform.component';

const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"regform", component: RegisterformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
