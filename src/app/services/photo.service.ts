import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private totalPhotos = 5000;

  constructor() {}

  getPhotos(start: number, count: number): Promise<any[]> {
    const delay = 200 + Math.floor(Math.random() * 100); // 200–300ms

    const photos = Array.from({ length: count }, (_, i) => {
      const id = start + i;
      return {
        id,
        title: `Photo ${id}`,
        url: `https://picsum.photos/id/${id % 1000}/400/600`
      };
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(photos), delay);
    });
  }
}