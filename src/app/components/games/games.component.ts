import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Game } from '../../models/game';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../../config/api.config';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-games',
  imports: [ MatCardModule, MatToolbarModule, MatButtonModule, RouterLink ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  game: Game = {
    id: '',
    title: '',
    year: '',
    genre: '',
    platforms: '',
    score: '',
    imgUrl: '',
    shortDescription: '',
    longDescription: ''
  }

  games: Game[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.game.id = this.route.snapshot.paramMap.get('id')
    this.getGames(this.game.id)
  }

  getGames(id: any) {
      this.http.get<Game[]>(`${API_CONFIG.baseUrl}/lists/${id}/games`).subscribe(resposta => {
        //console.log(resposta)
        this.games = resposta
      })
  }
}
