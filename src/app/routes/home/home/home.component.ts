import { Component } from '@angular/core';
import { JobService, PAGE_SIZE } from '../../../core/service/job.service';
import { IJob } from '../../../core/model/job.model';
import { ISkill, SKILLS } from '../../../core/model/skill.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  skills: ISkill[];
  jobs: IJob[];
  offset: number;
  selectedJob: IJob | null;
  isInitLoading: boolean;

  constructor(public jobApi: JobService) { 
    this.skills = SKILLS;
    this.jobs = [];
    this.offset = 0;
    this.selectedJob = null;
    this.isInitLoading = false;
  }

  ngOnInit() {
    this.loadJobs();
  }

  // Get job list
  loadJobs() {
    let skillIds = <number[]>[];
    for( let skill of this.skills) {
      if (skill.selected) {
        skillIds = skillIds.concat(skill.ids || []);
      }
    }
    if (this.offset === 0) {
      this.isInitLoading = true;
    }
    return this.jobApi.getJobs({ offset: this.offset, skillIds: [...new Set(skillIds)] }).subscribe((data: IJob[]) => {
      if (this.offset === 0) {
        this.jobs = data;
      } else {
        this.jobs = this.jobs.concat(data);
      }
      this.offset = this.offset + PAGE_SIZE;
      this.isInitLoading = false;

      if (!this.selectedJob) {
        this.handleSelectJob(this.jobs[0])
      }
    });
  }

  toggleSelection(index: number): void {
    this.offset = 0;
    this.selectedJob = null;
    this.skills[index].selected = !this.skills[index].selected;
    this.loadJobs();
  }

  handleSelectJob(job: IJob): void {
    this.selectedJob = job;
  }
}
