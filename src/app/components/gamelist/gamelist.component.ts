import { Component, resource } from '@angular/core';
import { GameList } from '../../models/gameList';
import { API_CONFIG } from '../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-gamelist',
  imports: [MatCardModule, RouterLink, MatToolbarModule, RouterModule],
  providers: [],
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {

  gamelist: GameList[] = [];

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService
  ) {
    this.getList()
  }

  getList() {
    this.spinner.show();
    this.http.get<GameList[]>(`${API_CONFIG.baseUrl}/lists`).subscribe(resposta => {
      this.gamelist = resposta
      this.spinner.hide()
    })
  }
  
  //public getList = resource<GameList[], unknown>({
  //    loader: async () => {
  //      const resposta = await fetch(`${API_CONFIG.baseUrl}/lists`);
  //      const data = await resposta.json();
  //      return data.results;
  //    }
  //  })
}
