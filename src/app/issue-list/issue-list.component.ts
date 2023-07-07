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
  selectedIssue: Issue | null = null;
  action = 'edit | resolve | reject';

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReport() {
    this.showAddIssue = false;
    this.getIssues();
  }

  onResolve(isResolved: boolean) {
    if (isResolved && this.selectedIssue) {
      this.issuesService.resolveIssue(this.selectedIssue);
      this.getIssues();
    }
  }

  startAction(issue: Issue, action:string = 'edit'){
    this.selectedIssue = issue;
    this.action = action;
  }

  private getIssues() {
    this.issues = this.issuesService.getPendingIssues();
  }
}
