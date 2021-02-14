import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { CssRoutes } from './css.routing';
import { MatListModule } from '@angular/material/list';

const material = [
    MatListModule
];

@NgModule({
    imports: [CommonModule, CssRoutes, ...material],
    declarations: [CssComponent]
})
export class CssModule {}
