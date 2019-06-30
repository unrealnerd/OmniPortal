import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({

  imports: [MatGridListModule, MatButtonModule, MatToolbarModule],
  exports: [MatGridListModule, MatButtonModule,  MatToolbarModule]  
})
export class AppMaterialModule { }