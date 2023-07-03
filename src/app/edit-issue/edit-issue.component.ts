import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../services/issues.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css'],
})
export class EditIssueComponent implements OnInit {
  editIssueForm: FormGroup | undefined;
  @Input() issueNo: number | null = null;
  @Output() editFormClose = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private issuesService: IssuesService
  ) {}

  ngOnInit(): void {
    this.editIssueForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      priority: [''],
      type: [''],
    });
  }
}
