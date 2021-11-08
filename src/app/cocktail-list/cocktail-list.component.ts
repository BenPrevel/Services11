import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';
import { Cocktails } from '../common/cocktails.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktails[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((datas) => {
      datas.forEach((data) =>
        this.cocktails.push(new Cocktails(data.name, data.price, data.img))
      );
    });
  }
}
