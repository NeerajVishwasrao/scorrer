import { Routes } from '@angular/router';
import { MatchDashboardComponent } from './match-dashboard/match-dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PlayersComponent } from './players/players.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'matchDash',
        pathMatch: 'full'
    }, // Redirect default path to login



    {
        path: 'matchDash', component: MatchDashboardComponent,
        pathMatch: 'full',
        title: 'Dashboard'
    },

    {
        path: 'controlPanel',
        component: ControlPanelComponent,
        title: 'Control Panel'
    },

    {
        path: 'players',
        component: PlayersComponent,
        title: 'Players'
    },

    {
        path: 'adminLogin',
        component: AdminLoginComponent,
        title: 'Admin Login'
    },

    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
    // Redirect unknown routes to dashboard
];
