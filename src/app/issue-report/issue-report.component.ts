import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../services/issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private issuesService: IssuesService
  ) {}

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid){
      this.issueForm.markAllAsTouched();
      return
    }
    this.issuesService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

  cancelAddIssue() {
    this.formClose.emit();
  }
}
