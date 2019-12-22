import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({

  imports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule],
  exports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule]
})
export class AppMaterialModule { }
