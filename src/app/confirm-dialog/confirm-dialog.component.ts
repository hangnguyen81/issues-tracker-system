import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  @Input() issueNo: number | null = null;
  @Output() resolve = new EventEmitter<boolean>();

  agree() {
    this.resolve.emit(true);
    this.issueNo = null;
  }

  disagree() {
    this.resolve.emit(false);
    this.issueNo = null;
  }
}
