import { Routes, RouterModule } from '@angular/router';
import { CssComponent } from './css.component';

const routes: Routes = [
  { path: '', component: CssComponent },
];

export const CssRoutes = RouterModule.forChild(routes);
