import { Component, OnInit } from '@angular/core';
import { Item } from './explorer.model';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  constructor() { }

  Items: string[];

  ngOnInit() {
    this.Items = ['list1','list2'];
  }

}
