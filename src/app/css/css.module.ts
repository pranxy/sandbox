import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { CssRoutes } from './css.routing';

@NgModule({
    imports: [CommonModule, CssRoutes],
    declarations: [CssComponent]
})
export class CssModule {}
