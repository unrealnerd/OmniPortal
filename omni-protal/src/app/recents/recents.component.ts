import { Component, OnInit } from '@angular/core';
import { RecentItem } from './recents.model';
import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {

  constructor(private searchboxService: SearchboxService) { }

  RecentItems: RecentItem[];

  ngOnInit() {
    this.RecentItems = [];
    this.searchboxService.getSearchQuery().subscribe(q => {
      this.RecentItems.push({ text: q, value: q })
    });
  }

}
