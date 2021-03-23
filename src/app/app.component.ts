import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Futtatás', url: '/folder/run', icon: 'play' },
    { title: 'Működés', url: '/folder/dijkstra', icon: 'book' },
    { title: 'Info', url: '/folder/info', icon: 'information-circle'}
  ];
  constructor() {}
}
