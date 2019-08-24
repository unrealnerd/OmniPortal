import { Component, OnInit } from '@angular/core';

import { SearchboxService } from '../searchbox.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {

  constructor(private searchboxService: SearchboxService) { }

  ngOnInit() {
  }

  fetch() {
    this.searchboxService.getBotConductorResponse(environment.botConductorApiEndpoint)
      .subscribe((data: { message: string }) => {
        console.log(data);
        this.searchboxService.sendApiResponse(JSON.stringify(data.message));
      });
  }

}
