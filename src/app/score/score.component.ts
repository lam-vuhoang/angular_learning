import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  @Output() sendDataToParent = new EventEmitter<void>();

  _sendDataToParent() {
    this.sendDataToParent.emit();
  }
}
