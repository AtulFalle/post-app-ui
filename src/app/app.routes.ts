import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./components/post-list/post-list.component').then( m => m.PostListComponent)
    },
    {
        path:'post-details',
        loadComponent: () => import('./components/post-detail/post-detail.component').then(m => m.PostDetailComponent)
    }
];
