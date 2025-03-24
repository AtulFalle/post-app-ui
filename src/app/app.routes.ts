import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/post-list/post-list.component').then( m => m.PostListComponent)
    },
    {
        path:'post-details',
        loadComponent: () => import('./components/post-detail/post-detail.component').then(m => m.PostDetailComponent)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
