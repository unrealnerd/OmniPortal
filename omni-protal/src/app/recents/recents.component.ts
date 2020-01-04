import { Component, OnInit } from '@angular/core';
import { RecentItem } from './recents.model';
import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {

  recentItems: RecentItem[];

  constructor(private searchboxService: SearchboxService) { }

  ngOnInit() {
    this.recentItems = [];
    this.searchboxService.getSearchQuery().subscribe(q => {
      this.recentItems.unshift({ text: q, value: q })
    });
  }

  onRefreshClick(q: string) {
    this.searchboxService.getBotConductorResponse(q).subscribe((response) => {
      this.searchboxService.publishApiResponse(response);
    });
  }

}
