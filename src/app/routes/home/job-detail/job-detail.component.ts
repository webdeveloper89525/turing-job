import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { IJob } from '../../../core/model/job.model';
import { JobService } from '../../../core/service/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit, OnChanges {
  @Input() selectedJob: IJob | null;

  job: IJob | null;
  isLoading: boolean

  constructor(public jobApi: JobService) {
    this.selectedJob = null;
    this.job = null;
    this.isLoading = false;
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedJob"]) {
      this.loadJobDetail();
    }    
  }

  loadJobDetail() {
    if (this.selectedJob) {
      const jobId = this.selectedJob.jobId;
  
      this.isLoading = true;
      this.jobApi.getJob(jobId).subscribe((data: IJob) => {
        this.job = data;
        this.isLoading = false;
      });
    }
  }
}
