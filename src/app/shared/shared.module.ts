import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusideComponent } from './menuside/menuside.component';
import { MenutopComponent } from './menutop/menutop.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ToolmenuComponent } from './toolmenu/toolmenu.component';

@NgModule({
  declarations: [MenusideComponent, MenutopComponent, ToolmenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenusideComponent, MenutopComponent, ToolmenuComponent],
})
export class SharedModule {}
