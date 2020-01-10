import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { SearchboxService } from 'src/app/searchbox.service';

@Component({
  selector: 'app-card-servicemap',
  templateUrl: './card-servicemap.component.html',
  styleUrls: ['./card-servicemap.component.css']
})
export class CardServicemapComponent implements OnInit {

  @Input()
  services: Service[];

  constructor(private searchboxService: SearchboxService) { }

  ngOnInit() {
  }

  triggerCommand(q: string) {
    this.searchboxService.triggerBotConductor({ query: q, request: null });
  }

}
