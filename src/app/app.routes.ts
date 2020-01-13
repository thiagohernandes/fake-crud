import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainFakeComponent } from './main-fake/main-fake.component';
import { DetailFakeComponent } from './detail-fake/detail-fake.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainFakeComponent },
    { path: 'detail', component: DetailFakeComponent },
    { path: 'detail/:id', component: DetailFakeComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
