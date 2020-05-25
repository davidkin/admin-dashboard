import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaChartComponent } from './widgets/area-chart/area-chart.component';

import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaChartComponent,
    CardsComponent,
    PieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,

    FlexLayoutModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaChartComponent,
    CardsComponent,
    PieComponent
  ]
})
export class SharedModule { }
