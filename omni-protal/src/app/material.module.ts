import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({

  imports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule],
  exports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule]
})
export class AppMaterialModule { }