import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class PageNumComponent {
  @Input() pageno: Number;
  title = 'page-num';
}
