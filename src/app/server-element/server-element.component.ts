import { Component, Input, OnInit } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss'
})

export class ServerElementComponent implements OnInit {
  @Input('sevElement') element: {
    name: string,
    status: boolean
  }
  
  constructor() {
    this.element = {
      name: 'abc',
      status: Math.random() > 0.5 ? true : false
    }
  }

  ngOnInit() {}

  getServerStatus() {
    return this.element.status == true ? 'online' : 'offline';
  }

  getColor() {
    return this.element.status == true ? 'greenGround' : 'redGround';
  }
}
