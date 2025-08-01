import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorite.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  const mockPhoto = {
    id: 123,
    title: 'Test Photo',
    url: 'https://picsum.photos/id/123/400/600'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new FavoritesService();
    localStorage.clear(); // Clear state before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a photo to favorites', () => {
    service.addFavorite(mockPhoto);
    const favorites = service.getFavorites();
    expect(favorites.length).toBe(1);
    expect(favorites[0].id).toBe(mockPhoto.id);
  });

  it('should not add duplicates', () => {
    service.addFavorite(mockPhoto);
    service.addFavorite(mockPhoto);
    expect(service.getFavorites().length).toBe(1);
  });

  it('should return true for isFavorite()', () => {
    service.addFavorite(mockPhoto);
    expect(service.isFavorite(mockPhoto.id)).toBeTrue();
  });

  it('should remove a photo from favorites', () => {
    service.addFavorite(mockPhoto);
    service.removeFavorite(mockPhoto.id);
    expect(service.isFavorite(mockPhoto.id)).toBeFalse();
    expect(service.getFavorites().length).toBe(0);
  });
});