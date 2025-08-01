import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoritePhotos';
  private favorites: any[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(this.storageKey);
    this.favorites = stored ? JSON.parse(stored) : [];
  }

  private saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
  }

  getFavorites(): any[] {
    return [...this.favorites];
  }

  addFavorite(photo: any): void {
    if (!this.isFavorite(photo.id)) {
      this.favorites.push({ ...photo }); // store full object
      this.saveToStorage();
    }
  }

  removeFavorite(id: number): void {
    this.favorites = this.favorites.filter(p => p.id !== id);
    this.saveToStorage();
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(p => p.id === id);
  }

  getFavoriteById(id: number): any | undefined {
    return this.favorites.find(p => p.id === id);
  }
}