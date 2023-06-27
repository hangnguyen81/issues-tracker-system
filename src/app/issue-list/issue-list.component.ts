import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../services/issues.service';
import { Issue } from '../services/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showAddIssue = false;

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReport() {
    this.showAddIssue = false;
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issuesService.getPendingIssues();
  }
}
