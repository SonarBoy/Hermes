import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

export const routes: Routes = [

    // {path: 'Menu',component: MenuComponent}

    {path: 'About',component: AboutUsComponent},
    {path: 'Menu',component: FoodMenuComponent},
    {path: 'Menu',component: FoodMenuComponent}
    
];
