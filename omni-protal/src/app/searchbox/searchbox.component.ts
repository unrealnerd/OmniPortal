import { Component, OnInit } from '@angular/core';

import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],  
})
export class SearchboxComponent implements OnInit {

  constructor(private searchboxService: SearchboxService) { }

  ngOnInit() {
  }

  serviceUrl = 'http://localhost:5000/api/web/incoming';

  fetch() {
    this.searchboxService.getBotConductorResponse(this.serviceUrl)
      .subscribe((data: {}) => {
        alert(JSON.stringify(data));
        this.searchboxService.sendApiResponse(JSON.stringify(data));
      });
  }

}
