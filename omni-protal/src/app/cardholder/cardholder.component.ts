import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.css'],
})
export class CardholderComponent implements OnInit {

  apiResponse: string;
  
  constructor(private searchboxService: SearchboxService) {
    this.searchboxService.getApiResponse().subscribe(value => {
      this.apiResponse = value;
      console.log(value);
    });
  }

  ngOnInit() {
  }
}
