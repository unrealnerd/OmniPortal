import { Component, OnInit, Input } from '@angular/core';
import { Command } from '../models/command.model';
import { SearchboxService } from '../searchbox.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  navLinks: Command[]

  constructor(private searchService: SearchboxService) { }

  ngOnInit() {
  }

  triggerCommand(command: string) {
    this.searchService.triggerBotConductor(command);
  }

}
