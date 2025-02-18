import { Routes } from '@angular/router';
import { MatchDashboardComponent } from './match-dashboard/match-dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PlayersComponent } from './players/players.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

export const routes: Routes = [
    { path: "", component: MatchDashboardComponent },
    { path: "controlPanel", component: ControlPanelComponent },
    { path: "players", component: PlayersComponent },
    {path:"adminLogin",component:AdminLoginComponent}
];
