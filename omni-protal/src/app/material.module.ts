import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({

  imports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule, MatListModule, MatSidenavModule, MatPaginatorModule, MatTableModule, MatIconModule
  ],
  exports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule, MatListModule, MatSidenavModule, MatPaginatorModule, MatTableModule, MatIconModule
  ]
})
export class AppMaterialModule { }
