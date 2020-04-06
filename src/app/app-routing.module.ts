import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'
import { Service1Component } from './parent/ServiceForData/service1/service1.component';
import { New1Component } from './forservice/new1/new1.component';

const routes: Routes = [
  {path: '', component: New1Component},
  {path: 'parent', component: ParentComponent},
  {path: "a", component: ChildComponent},
  {path: '', component: Service1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
