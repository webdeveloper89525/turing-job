import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { SkillSectionComponent } from './skill-section/skill-section.component';
import { JobSectionComponent } from './job-section/job-section.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobCardComponent } from './job-card/job-card.component';

import { CompanySizePipe } from '../../shared/pipes/company-size.pipe';
import { DateAgoPipe } from '../../shared/pipes/date-ago.pipe';

const routes: Routes = [
  {
      path: '', component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SkillSectionComponent,
    JobSectionComponent,
    JobDetailComponent,
    JobCardComponent,
    CompanySizePipe,
    DateAgoPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
