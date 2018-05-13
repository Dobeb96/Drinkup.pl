import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';

interface Drinks { drinkID: number; notes: string; };

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  // _db: AngularFirestore;
  drinks: Observable<any[]>;
  drinksArray: Array<Object> = [];

  constructor(private http: HttpClient,
              public afAuth: AngularFireAuth,
              db: AngularFirestore) {
    this.drinks = db.collection('/items').valueChanges();
    // this._db = db;

    db.collection('/items').valueChanges().subscribe(val => {
      for (var i = 0; i < val.length; i++) {
        // console.log(val[i]);
        this.drinksArray.push(val[i]);
      }
      // console.log(this.drinksArray);
      this.printDrinksToView(this.drinksArray);
    });
  }

  printDrinksToView(drinksArray) {
    drinksArray.forEach((drink) => {
      // console.log('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drink.drinkID);
      // console.log(drink.notes);

      var outputDrinks = document.getElementById('drinks_list');
      var APIDrink = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drink.drinkID).subscribe(val => {
        for (var i = 0; i < val['drinks'].length; i++) {
          // console.log(val['drinks'][i]);
          var outputHTML = `<a href="/recipe/${val['drinks'][i]['idDrink']}"><div class="drink">
                              <img src="${val['drinks'][i]['strDrinkThumb']}">
                              <div>
                                <h1>${val['drinks'][i]['strDrink']}</h1>
                                <p>${drink.notes}</p>
                              </div>
                            </div></a>`
          outputDrinks.innerHTML += outputHTML;
        }
      });
    });
  }

  ngOnInit() {
  }
}