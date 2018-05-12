import { Component, OnInit, SecurityContext } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  location: Location;

  constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }

  fetchDrinks(input) {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input);
    HTTPRequest.onload = function() {
      var drinksArray = JSON.parse(HTTPRequest.responseText);
      scope.printDrinksToView(drinksArray);
    };
    HTTPRequest.send();
  }

  fetchDrinksByFilter(filters) {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    if (filters[0] == 'Alcoholic' || filters[0] == 'Non_Alcoholic') {
      HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + filters[0]);
    } else if (filters[0] == 'Ordinary%20Drink' || filters[0] == 'Cocktail' || filters[0] == 'Shot' || filters[0] == 'Cocoa' || filters[0] == 'Homemade%20Liqueur') {
      HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + filters[0]);
    } else {
      HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + filters[0]);
    }
    HTTPRequest.onload = function() {
      var drinksArray = JSON.parse(HTTPRequest.responseText);
      scope.printDrinksToView(drinksArray);
      // scope.printDrinksToViewWithFilters(drinksArray, filters);
    };
    HTTPRequest.send();
  }

  printDrinksToView(drinksArray) {
    var outputDrinks = document.getElementById('drinks_list');

    outputDrinks.innerHTML = '';

    if (Array.isArray(drinksArray['drinks'])) {
      drinksArray['drinks'].forEach((drink) => {
        var strCategory = '';
        if (drink['strCategory'] !== undefined) { strCategory = drink['strCategory'] }
        var outputHTML = '<div class="drink">' +
                            '<img src="' + drink['strDrinkThumb'] + '">' +
                            '<div>' +
                              '<h1>' +
                              drink['strDrink']  +
                              '</h1>' +
                              '<h2>' +
                              strCategory +
                              '</h2>' +
                            '</div>' +
                          '</div>';
        // console.log(this.location.path);
        // var sanitized = this.sanitizer.bypassSecurityTrustHtml('<p [textContent]="this.test"></p>');
        // var sanitized = this.sanitizer.sanitize(SecurityContext.HTML, outputHTML);
        // this.sanitizer.sanitize
        // outputDrinks.innerHTML = sanitized;
        // this.example = this.test(outputHTML);
        outputDrinks.innerHTML += outputHTML;
        
      });
    } else {
      outputDrinks.innerHTML = '<h1>Brak drinków do wyświetlenia!</h1>';
    }
  }

  // test(html) {
    // console.log(this.sanitizer.bypassSecurityTrustHtml(html));
    // document.getElementById('drinks_list').innerHTML = <string>this.sanitizer.bypassSecurityTrustHtml(html);
    // return this.sanitizer.bypassSecurityTrustHtml(html);
  // }

  searchByName(input, event) {
    var inactiveSearch = document.getElementsByClassName('search2');
    for (var i = 0; i < inactiveSearch.length; i++) {
      inactiveSearch[i].classList.add('hidden');
    }

    document.getElementById('back_button').classList.remove('hidden');
    this.fetchDrinks(input);
  }

  searchByFilters() {
    var inactiveSearch = document.getElementsByClassName('search1');
    for (var i = 0; i < inactiveSearch.length; i++) {
      inactiveSearch[i].classList.add('hidden');
    }

    var inactiveSearch = document.getElementsByClassName('search2');
    for (var i = 0; i < inactiveSearch.length; i++) {
      inactiveSearch[i].classList.add('hidden');
    }

    var filters = []
    var filterRadio = document.getElementsByClassName('filter');
    for (var i = 0; i < filterRadio.length; i++) {
      var filterInput = <HTMLInputElement>filterRadio[i];
      if (filterInput.checked) {
        filters.push(filterRadio[i].id);
      }
    }

    document.getElementById('back_button').classList.remove('hidden');
    this.fetchDrinksByFilter(filters);
  }

  backButtonClicked() {
    document.getElementById('back_button').classList.add('hidden');
    document.getElementById('drinks_list').innerHTML = '';

    var searches1 = document.getElementsByClassName('search1');
    var searches2 = document.getElementsByClassName('search2');

    for (var i = 0; i < searches1.length; i++) {
      searches1[i].classList.remove('hidden');
    }

    for (var i = 0; i < searches2.length; i++) {
      searches2[i].classList.remove('hidden');
    }
  }
}