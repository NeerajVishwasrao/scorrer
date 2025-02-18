import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './match-dashboard.component.html',
  styleUrl: './match-dashboard.component.css'
})
export class MatchDashboardComponent {
  showViewScore: boolean = true
  router=inject(Router);
  ngOnInit() {
if (this.router.url=="") {
  this.showViewScore=false
}
  }
}
