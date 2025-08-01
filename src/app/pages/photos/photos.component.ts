import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorite.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  visiblePhotos: any[] = [];
  batchSize = 6;
  loading = false;
  showScrollTop = false;

  constructor(
    private photoService: PhotoService,
    public favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMorePhotos();
  }

  loadMorePhotos(): void {
    if (this.loading) return;

    this.loading = true;
    const start = this.visiblePhotos.length;

    this.photoService.getPhotos(start, this.batchSize).then((newPhotos) => {
      this.visiblePhotos.push(...newPhotos);
      this.loading = false;
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 100;

    if (scrollPosition >= threshold) {
      this.loadMorePhotos();
    }

    // Show "Scroll to Top" button
    this.showScrollTop = window.scrollY > 500;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

markAsFavorite(photo: any): void {
  this.favoritesService.addFavorite(photo);
}
}