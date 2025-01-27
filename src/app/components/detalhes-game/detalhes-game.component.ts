import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Game } from '../../models/game';
import { API_CONFIG } from '../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detalhes-game',
  imports: [ RouterModule, MatGridListModule, MatButtonModule, RouterLink ],
  templateUrl: './detalhes-game.component.html',
  styleUrl: './detalhes-game.component.css'
})
export class DetalhesGameComponent {

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

  constructor(private http: HttpClient, 
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) { 
      this.game.id = this.route.snapshot.paramMap.get('id')
      this.getGame(this.game.id)
    }
  
    getGame(id: any) {
      this.spinner.show()
        this.http.get<Game>(`${API_CONFIG.baseUrl}/games/${id}`).subscribe(resposta => {
          this.game = resposta
          this.spinner.hide()
        })
    }
  
}
