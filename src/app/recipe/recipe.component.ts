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
    this.fetchDrinkID();
  }

  ngOnInit() {
  }

  fetchDrinkID() {
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

    document.getElementById('ingr1').innerHTML = drinks['drinks'][0]['strMeasure1'] + " " + drinks['drinks'][0]['strIngredient1'];
    document.getElementById('ingr2').innerHTML = drinks['drinks'][0]['strMeasure2'] + " " + drinks['drinks'][0]['strIngredient2'];
    document.getElementById('ingr3').innerHTML = drinks['drinks'][0]['strMeasure3'] + " " + drinks['drinks'][0]['strIngredient3'];
    document.getElementById('ingr4').innerHTML = drinks['drinks'][0]['strMeasure4'] + " " + drinks['drinks'][0]['strIngredient4'];
    document.getElementById('ingr5').innerHTML = drinks['drinks'][0]['strMeasure5'] + " " + drinks['drinks'][0]['strIngredient5'];
    document.getElementById('ingr6').innerHTML = drinks['drinks'][0]['strMeasure6'] + " " + drinks['drinks'][0]['strIngredient6'];
    document.getElementById('ingr7').innerHTML = drinks['drinks'][0]['strMeasure7'] + " " + drinks['drinks'][0]['strIngredient7'];
    document.getElementById('ingr8').innerHTML = drinks['drinks'][0]['strMeasure8'] + " " + drinks['drinks'][0]['strIngredient8'];
    document.getElementById('ingr9').innerHTML = drinks['drinks'][0]['strMeasure9'] + " " + drinks['drinks'][0]['strIngredient9'];
    document.getElementById('ingr10').innerHTML = drinks['drinks'][0]['strMeasure10'] + " " + drinks['drinks'][0]['strIngredient10'];
    document.getElementById('ingr11').innerHTML = drinks['drinks'][0]['strMeasure11'] + " " + drinks['drinks'][0]['strIngredient11'];
    document.getElementById('ingr12').innerHTML = drinks['drinks'][0]['strMeasure12'] + " " + drinks['drinks'][0]['strIngredient12'];
    document.getElementById('ingr13').innerHTML = drinks['drinks'][0]['strMeasure13'] + " " + drinks['drinks'][0]['strIngredient13'];
    document.getElementById('ingr14').innerHTML = drinks['drinks'][0]['strMeasure14'] + " " + drinks['drinks'][0]['strIngredient14'];
    document.getElementById('ingr15').innerHTML = drinks['drinks'][0]['strMeasure15'] + " " + drinks['drinks'][0]['strIngredient15'];

    


  }


}