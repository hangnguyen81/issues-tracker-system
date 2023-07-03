import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../../assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = issues;
  constructor() {}

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.resolvedDate);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  getIssue(issueNo: number): Issue[]{
    return this.issues.filter(i => i.issueNo === issueNo)
  }

  resolveIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      resolvedDate: new Date(),
    };
    const index = this.issues.findIndex((i) => i === issue);
    this.issues[index] = selectedIssue;
  }

  getSuggestion(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter((issue) => issue.title.indexOf(title) !== -1);
    }
    return [];
  }
}
