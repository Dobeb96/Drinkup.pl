import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularBillboardService } from 'angular-billboard'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['../app.component.css']
})
export class RecipeComponent implements OnInit {
  drinkID: number;
  charts: any[];
  chartsOptions: any[];

  constructor(route: ActivatedRoute, private angularBillboardService: AngularBillboardService) {
    this.drinkID = route.snapshot.params['id'];
    this.przykladowyMethod();
    this.fetchDrinkID(this.drinkID);

  }

  ngOnInit() {
    this.chartsOptions = [
      {
        data: {
          columns: [
            ["data1", 100],
            ["data2", 300],
            ["data3", 200]
              ],
              type: "pie"
        },
        tooltip: {
          show: false
        },
        legend: {
          position: "right",
          contents: {
            template: "<span style='color:#fff;background-color:#ccc'>{=TITLE}</span>"
          }
        },
      }
  ];
  this.charts = this.angularBillboardService.generate(...this.chartsOptions);
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
    document.getElementById('name').innerHTML = drinks['strDrink'];
    document.getElementById('recipe').innerHTML = drinks['strInstructions'];
    // document.getElementById('photo').setAttribute("src", drinksArray["strDrinkThumb"]);
  }


}
