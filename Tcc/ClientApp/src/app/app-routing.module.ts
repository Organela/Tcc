import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full' 
    },
    { 
        path: 'fetch-data', 
        component: FetchDataComponent 
    },
    {
        path: 'main',
        component: MainPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}