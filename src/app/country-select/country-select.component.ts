


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { COUNTRIES } from '../../data/countryData';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css'],
  standalone : true,
  imports : [FormsModule,CommonModule]

})
export class CountrySelectComponent {
  countries = COUNTRIES;

 
  @Input() selectedCountry: any;
  @Output() countryChange = new EventEmitter<any>();

  onCountryChange() {
    
    this.countryChange.emit(this.selectedCountry);
  }
  constructor(private router: Router) {
    
  }

  

}
