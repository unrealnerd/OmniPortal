import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-card-servicemap',
  templateUrl: './card-servicemap.component.html',
  styleUrls: ['./card-servicemap.component.css']
})
export class CardServicemapComponent implements OnInit {

  @Input()
  services: Service[];

  constructor() { }

  ngOnInit() {
  }

}
