import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusideComponent } from './menuside/menuside.component';
import { MenutopComponent } from './menutop/menutop.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenusideComponent, MenutopComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenusideComponent, MenutopComponent],
})
export class SharedModule {}
