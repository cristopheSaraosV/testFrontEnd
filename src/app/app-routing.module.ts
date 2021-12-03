import { ListComponent } from './page/list/list.component';
import { GraphComponent } from './page/graph/graph.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'graph', component: GraphComponent},
  { path:'list', component: ListComponent},
  { path:'**', redirectTo:'' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
