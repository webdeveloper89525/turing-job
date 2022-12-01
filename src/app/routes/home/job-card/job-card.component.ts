import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IJob } from '../../../core/model/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() job: IJob;
  @Input() selected: boolean;
  @Output() onSelect = new EventEmitter<IJob>();

  constructor() {
    this.selected = false;
    this.job = {
      jobId: "",
      createdDate: "",
      updatedDate: "",
      industry: "",
      publishedOnJobBoard: "",
      requiredSkills: [],
      role: "",
      publicTitle: "",
      isActive: false,
      jobLanguageContent: [],
      companySize: 1,
    };
  }

  ngOnInit(): void {    
  }

  handleClick() {
    this.onSelect.emit(this.job)
  }
}
