import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  score: number;

  constructor() {
    this.score = 0;
  }

  eventFromChild() {
    this.score++;
  }
}
