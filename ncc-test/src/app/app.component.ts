import { Component } from '@angular/core';
import { articles } from './data/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ncc-test';
  public currentYear = new Date().getFullYear();
}
