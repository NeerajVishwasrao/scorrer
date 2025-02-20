import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { matchData } from '../shared/interface';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-match-dashboard',
  standalone: true,
  imports: [NgFor],
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
    this.getAllMatches()
  }

  matches: matchData[] = [];
  getAllMatches() {

    this.http.get('assets/allMatches.json').subscribe((val) => {
      this.matches = val as matchData[]
      console.log(this.matches);
      
    })

  }
}