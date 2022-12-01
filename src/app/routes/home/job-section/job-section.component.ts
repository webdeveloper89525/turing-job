import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IJob } from '../../../core/model/job.model';

@Component({
  selector: 'app-job-section',
  templateUrl: './job-section.component.html',
  styleUrls: ['./job-section.component.scss']
})
export class JobSectionComponent {
  @Input() jobs: IJob[];
  @Input() selectedJob: IJob | null;
  @Output() onLoadMore = new EventEmitter<void>();
  @Output() onSelectJob = new EventEmitter<IJob>();

  throttle = 0;
  distance = 2;

  constructor() { 
    this.jobs = [];
    this.selectedJob = null;
  }

  ngOnInit() {
  }

  onScroll() {
    this.onLoadMore.emit();
  }

  onSelect(job: IJob) {
    this.onSelectJob.emit(job)
  }
}
