import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})  
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
    console.log('Loaded favorites:', this.favorites);
  }

  openPhoto(photo: any): void {
    this.router.navigate(['/photos', photo.id]);
  }
}