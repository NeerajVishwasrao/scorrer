import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  router = inject(Router);
  http = inject(HttpClient);


  players:any=[
    {srno: 1, name:"Mark Otto", class:"12th div-A"},
    {srno: 2, name:"Mark Otto", class:"12th div-A"},
    {srno: 3, name:"Mark Otto", class:"12th div-A"},
    {srno: 4, name:"Mark Otto", class:"12th div-A"},
    {srno: 5, name:"Mark Otto", class:"12th div-A"},
    {srno: 6, name:"Mark Otto", class:"12th div-A"},
    {srno: 7, name:"Mark Otto", class:"12th div-A"},
    {srno: 8, name:"Mark Otto", class:"12th div-A"},
    {srno: 9, name:"Mark Otto", class:"12th div-A"},
  ]
}
