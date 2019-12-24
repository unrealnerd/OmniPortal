import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchboxService } from '../searchbox.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {

  constructor(private searchboxService: SearchboxService) { }

  query: string;  

  ngOnInit() {
  }

  fetch() {
    this.searchboxService.publishSearchQuery(this.query);
    this.searchboxService.getBotConductorResponse(environment.botConductorApiEndpoint, this.query)
      .subscribe((data: { message: string }) => {
        console.log(data);        
        this.searchboxService.publishApiResponse(data);
      });
  }

}
