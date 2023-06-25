import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: [''],
    });
  }
}