import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatInputModule, } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
const material =[MatCardModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
  imports: material,
  exports: material
  })
  export class MaterialModule { }