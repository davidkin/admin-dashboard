import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    MatSidenavModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class DefaultModule { }
