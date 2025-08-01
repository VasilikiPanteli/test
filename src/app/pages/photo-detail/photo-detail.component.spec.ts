import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PhotoDetailComponent } from './photo-detail.component';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [PhotoDetailComponent],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: { paramMap: { get: () => '1' } }  // mock id
        }
      }
    ]
  }).compileComponents();
});