import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchboxService } from '../searchbox.service';


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
    this.searchboxService.getBotConductorResponse({ query: this.query, request: null })
      .subscribe((data: { message: string }) => {
        console.log(data);
        this.searchboxService.publishApiResponse(data);
      });
  }

}
