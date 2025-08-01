import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },              // Home
  { path: 'favorites', component: FavoritesComponent },  // Favorites
  { path: 'photos/:id', component: PhotoDetailComponent }, // Single photo page
  { path: '**', redirectTo: '' } // Fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
