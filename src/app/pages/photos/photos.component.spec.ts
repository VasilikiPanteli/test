import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { PhotoService } from 'src/app/services/photo.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let service: PhotoService;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent]
    });
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(PhotoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an array of photos with correct structure', async () => {
    const photos = await service.getPhotos(0, 5);

    expect(photos.length).toBe(5);
    photos.forEach(photo => {
      expect(photo.id).toBeDefined();
      expect(photo.title).toBeDefined();
      expect(photo.url).toBeDefined();
      expect(typeof photo.url).toBe('string');
      expect(photo.url).toContain('https://picsum.photos/');
    });
  });

  it('should assign incremental IDs correctly', async () => {
    const photos = await service.getPhotos(5, 3);

    expect(photos.length).toBe(3);
    expect(photos[0].id + 1).toBe(photos[1].id);
    expect(photos[1].id + 1).toBe(photos[2].id);
  });
});
