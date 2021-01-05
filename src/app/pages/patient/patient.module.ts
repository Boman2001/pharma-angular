import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from '.';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: fromComponents.PatientoverviewComponent
  },
  {
    path: 'nieuw',
    pathMatch: 'full',
    component: fromComponents.PatientcreateComponent
  },
    {
    path: ':id/wijzig',
    pathMatch: 'full',
    component: fromComponents.PatienteditComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: fromComponents.PatientdetailComponent
  },
]

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientModule { }
