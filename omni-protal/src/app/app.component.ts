import { Component } from '@angular/core';
import { RecentItem } from './models/recents.model';
import { Command } from './models/command.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'omni-protal';

  navLinks: Command[];

  ngOnInit() {
    this.navLinks = [];    
  }

  onRecentItemPinned(item: Command) {
    this.navLinks.push(item);
  }
}
