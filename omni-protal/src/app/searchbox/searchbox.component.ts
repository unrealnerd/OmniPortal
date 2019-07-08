import { Component, OnInit } from '@angular/core';

import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
  providers: [SearchboxService]
})
export class SearchboxComponent implements OnInit {

  constructor(private searchboxService: SearchboxService) { }

  ngOnInit() {
  }

  serviceUrl = 'http://localhost:5001/api/web/incoming';

  fetch() {
    console.log(this.searchboxService.getSampleResponse(this.serviceUrl)
      .subscribe((data: {}) => {
        alert(JSON.stringify(data));
      }));
  }

}
