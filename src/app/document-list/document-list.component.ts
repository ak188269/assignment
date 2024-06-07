import { COUNTRIES } from './../../data/countryData';


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CountrySelectComponent } from '../country-select/country-select.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  standalone : true,
  imports : [CommonModule,FormsModule ,CountrySelectComponent]
})
export class DocumentListComponent  {
  @Input() selectedCountry: any;
  @Input() documents: string[] = [];
  countries  = COUNTRIES;
  @Output() goToUploadDocument = new EventEmitter<any>();

  constructor() {}


  onCountryChange(country: any) {
    this.selectedCountry = country;
  }

  goToUploadPage() {    
    this.goToUploadDocument.emit();
  }


}
