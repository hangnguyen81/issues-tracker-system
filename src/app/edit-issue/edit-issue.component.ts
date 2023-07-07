import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../services/issues.service';
import { Issue } from '../services/issue';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css'],
})
export class EditIssueComponent implements OnInit {
  editIssueForm: FormGroup | undefined;
  issueForEdit: Issue[] = [];
  @Input() issueNo: number | null = null;
  @Output() editFormClose = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private issuesService: IssuesService
  ) {}

  ngOnInit(): void {
    this.getIssue(this.issueNo);
    this.editIssueForm = this.formBuilder.group({
      title: [this.issueForEdit[0].title, Validators.required],
      description: [this.issueForEdit[0].description],
      priority: [this.issueForEdit[0].priority],
      type: [this.issueForEdit[0].type],
    });
  }

  getIssue(issueNo: number | null) {
    if (issueNo === null) return;
    this.issueForEdit = this.issuesService.getIssue(issueNo);
  }

  updateIssue(){
    
  }
}
