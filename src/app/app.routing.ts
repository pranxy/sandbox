import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'css' },
    { path: 'css', loadChildren: () => import('./css/css.module').then((m) => m.CssModule) }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
