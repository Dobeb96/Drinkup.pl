import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['../app.component.css']
})
export class RecipeComponent implements OnInit {
  drinkID: number;

  constructor(route: ActivatedRoute) {
    this.drinkID = route.snapshot.params['id'];
    this.przykladowyMethod();
    this.fetchDrinkID(this.drinkID);

  }

  ngOnInit() {
  }

  przykladowyMethod() {
    // w zmiennej this.drinkID będzie siedzieć ID drinka
    console.log(this.drinkID);
    // 
  }

  fetchDrinkID(input) {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', ' https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.drinkID);
    HTTPRequest.onload = function() {
      var drinks = JSON.parse(HTTPRequest.responseText);
      scope.printToView(drinks);
      console.log(drinks);
    };
    HTTPRequest.send();
    
  }

  printToView(drinks){
    document.getElementById('name').innerHTML = drinks['drinks'][0]['strDrink'];
    document.getElementById('recipe').innerHTML = drinks['drinks'][0]['strInstructions'];
    document.getElementById('photo').setAttribute("src", drinks['drinks'][0]["strDrinkThumb"]);

    document.getElementById('ingr1').innerHTML = drinks['drinks'][0]['strIngredient1'] + " " + drinks['drinks'][0]['strMeasure1'] ;
    document.getElementById('ingr2').innerHTML = drinks['drinks'][0]['strIngredient2'] + " " + drinks['drinks'][0]['strMeasure2'] ;
    document.getElementById('ingr3').innerHTML = drinks['drinks'][0]['strIngredient3'] + " " + drinks['drinks'][0]['strMeasure3'] ;
    document.getElementById('ingr4').innerHTML = drinks['drinks'][0]['strIngredient4'] + " " + drinks['drinks'][0]['strMeasure4'] ;
    document.getElementById('ingr5').innerHTML = drinks['drinks'][0]['strIngredient5'] + " " + drinks['drinks'][0]['strMeasure5'] ;
    document.getElementById('ingr6').innerHTML = drinks['drinks'][0]['strIngredient6'] + " " + drinks['drinks'][0]['strMeasure6'] ;
  }


}