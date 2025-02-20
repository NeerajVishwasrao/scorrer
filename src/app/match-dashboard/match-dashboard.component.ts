import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { matchData } from '../shared/interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-match-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './match-dashboard.component.html',
  styleUrl: './match-dashboard.component.css'
})
export class MatchDashboardComponent {
  showViewScore: boolean = true
  router = inject(Router);
  http = inject(HttpClient)

  ngOnInit() {
    if (this.router.url == "") {
      this.showViewScore = false
    }
  }

  matches: matchData[] = [];
  getAllMatches() {

    this.http.get('assets/allMatches.json').subscribe((val) => {
      this.matches = val as matchData[]
    })

  }
}