import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  photo: any;

  constructor(
    private route: ActivatedRoute,
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.photo = this.favoritesService.getFavoriteById(id);

    if (!this.photo) {
      this.router.navigate(['/favorites']); // fallback
    }
  }

  removeFromFavorites(): void {
    this.favoritesService.removeFavorite(this.photo.id);
    this.router.navigate(['/favorites']);
  }
}