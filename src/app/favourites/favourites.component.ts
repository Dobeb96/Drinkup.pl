import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Drinks { drinkID: number; notes: string; };

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  scope = this;
  _db: AngularFirestore;
  drinks: Observable<any[]>;
  drinksArray: Array<Object> = [];

  constructor(private http: HttpClient,
              public afAuth: AngularFireAuth,
              db: AngularFirestore,
              private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log(true);
      } else {
        document.getElementById('logged').classList.add('hidden');
        document.getElementById("anonymous").classList.remove('hidden');
        console.log(false);
      }
    });
    this.drinks = db.collection('/items').valueChanges();
    this._db = db;

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

  addFavourite(){
    var _drinkID = parseInt((<HTMLInputElement>document.getElementById('drinkID')).value);
    var _notes = (<HTMLInputElement>document.getElementById('drinkDesc')).value;
    console.log(_drinkID);
    let drinksCollection = this._db.collection<Drinks>('items');
    drinksCollection.add({ drinkID: _drinkID, notes: _notes });
    document.getElementById('drinks_list').innerHTML = '';
    // this.scope.router.navigate(['/homepage']); // so that the database can refresh peacefully
  }

  ngOnInit() {
  }
}