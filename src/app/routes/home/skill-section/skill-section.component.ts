import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISkill, SKILLS } from '../../../core/model/skill.model';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit {
  @Input() skills: ISkill[];
  @Output() toggleSelection = new EventEmitter<number>();

   constructor() { 
    this.skills = [];
  }

  ngOnInit() {
  }

  onToggle(value: number) {
    this.toggleSelection.emit(value);
  }
}
