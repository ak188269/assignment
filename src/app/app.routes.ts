// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrySelectComponent } from './country-select/country-select.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

export const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
