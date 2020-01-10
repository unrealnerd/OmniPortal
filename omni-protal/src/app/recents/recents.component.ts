import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecentItem } from '../models/recents.model';
import { SearchboxService } from '../searchbox.service';
import { Command } from '../models/command.model';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {

  recentItems: Command[];

  @Output()
  pin: EventEmitter<Command> = new EventEmitter();

  constructor(private searchboxService: SearchboxService) { }

  ngOnInit() {
    this.recentItems = [];
    this.searchboxService.getSearchQuery().subscribe(q => {
      this.recentItems.unshift({ query: q, request: q })
    });
  }

  onRefreshClick(c: Command) {
    this.searchboxService.getBotConductorResponse(c).subscribe((response) => {
      this.searchboxService.publishApiResponse(response);
    });
  }

  onPinClick(item: Command) {
    this.pin.emit(item);
  }

}
