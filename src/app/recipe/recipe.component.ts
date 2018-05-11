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
  }

  ngOnInit() {
  }

  przykladowyMethod() {
    // w zmiennej this.drinkID będzie siedzieć ID drinka
    console.log(this.drinkID);
    // 
  }
}
