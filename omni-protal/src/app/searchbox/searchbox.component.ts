import { Component, OnInit } from '@angular/core';

import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {

  constructor(private searchboxService: SearchboxService) { }

  serviceUrl = 'http://localhost:5001/api/web/incoming';

  ngOnInit() {
  }

  fetch() {
    this.searchboxService.getBotConductorResponse(this.serviceUrl)
      .subscribe((data: {}) => {
        console.log(data);
        this.searchboxService.sendApiResponse(JSON.stringify(data));
      });
  }

}
