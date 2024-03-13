import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  newServerName: string = '';
  servers = [
    { name: 'Testserver', status: false },
    { name: 'Testserver 2', status: true },
  ];

  onAddServer() {
    this.servers.push({
      name: this.newServerName,
      status: Math.random() > 0.5 ? true : false
    });
    this.newServerName = '';
  }
}
