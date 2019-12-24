import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({

  imports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule, MatListModule, MatSidenavModule],
  exports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule, MatListModule, MatSidenavModule]
})
export class AppMaterialModule { }
