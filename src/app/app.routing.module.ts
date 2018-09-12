import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';

const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'centerPanel', component: CenterPanelComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
