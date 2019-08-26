import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({

  imports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule],
  exports: [MatInputModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatCardModule]
})
export class AppMaterialModule { }
