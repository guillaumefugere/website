import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HomeRoutes)],
})
export class HomeModule {}
