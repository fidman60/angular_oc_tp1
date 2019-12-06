import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: 'Mon premier poste',
    content: 'Nam solepud Siden, isdem impetu occurrere veloci. et signis prope ripam locatis ad manus comminus conseren',
    loveIts: null
  },
    {
      title: 'Mon deuxieme poste',
      content: 'Nam solepud Siden,pe ripam locatis ad manus comminus conseren manus comminus conseren manus comminus conseren',
      loveIts: null
    },
    {
      title: 'Mon troisieme poste',
      content: 'Nam solepud Siden, isdem impetu occurrere vel. ipam locatis ad manus comminus conseren',
      loveIts: null
    }];
}
