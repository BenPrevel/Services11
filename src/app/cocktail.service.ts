import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktails } from './common/cocktails.model';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  constructor(private http: HttpClient) {}

  public getCocktails() {
    return this.http.get<Cocktails[]>('assets/cocktailsCarte.json');
  }
}
