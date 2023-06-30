import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../services/issues.service';
import { Issue } from '../services/issue';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  suggestions: Issue[] = [];
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
    this.issueForm.controls['title'].valueChanges.subscribe((title: string) => {
      this.suggestions = this.issuesService.getSuggestion(title)
    });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issuesService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

  cancelAddIssue() {
    this.formClose.emit();
  }
}
