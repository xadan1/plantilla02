import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolmenu',
  templateUrl: './toolmenu.component.html',
  styles: [],
})
export class ToolmenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
