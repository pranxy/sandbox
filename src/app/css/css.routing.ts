import { Routes, RouterModule } from '@angular/router';
import { CssButtonComponent } from './css-button/css-button.component';
import { CssDashboardComponent } from './css-dashboard/css-dashboard.component';
import { CssComponent } from './css.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'button'
    },
    {
        path: '',
        component: CssComponent,
        children: [
            // {
            //     path: '',
            //     component: CssDashboardComponent
            // },
            {
                path: 'button',
                component: CssButtonComponent
                // loadChildren: () =>
                //     import('./css-button/css-button.module').then((m) => m.CssButtonModule)
            }
        ]
    }
];

export const CssRoutes = RouterModule.forChild(routes);
