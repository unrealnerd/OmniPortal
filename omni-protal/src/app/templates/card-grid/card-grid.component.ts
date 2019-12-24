import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface UserData {
  match_id: number;
  duration: number;
  radiant_name: string;
  dire_name: string;
  radiant_score: number;
  dire_score: number;
}


@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})

export class CardGridComponent implements OnInit {

  @Input()
  dataSource: any;

  matDataSource: any;

  displayedColumns: string[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {    
    this.displayedColumns = Object.keys(this.dataSource[0]);
    this.matDataSource = new MatTableDataSource<UserData>(this.dataSource);
    this.matDataSource.paginator = this.paginator;
  }

}
