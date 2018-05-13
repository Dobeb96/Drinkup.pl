import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

interface Drinks { drinkID: number; notes: string; };

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  // user: Observable<firebase.User>;
  _db: AngularFirestore;
  drinks: Observable<any[]>;


  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    // TODO: https://www.youtube.com/watch?v=2ciHixbc4HE
    // this.user = this.afAuth.authState;
    this.drinks = db.collection('/items').valueChanges();
    this._db = db;
    console.log(this.drinks);
    console.log(this.drinks['drinkID']);
    this.addTshirt(15, 'dynamic');
  }

  ngOnInit() {
  }

  addTshirt(drinkID: number, notes: string){
    let shirtsCollection = this._db.collection<Drinks>('items');
    shirtsCollection.add({ drinkID: drinkID, notes: notes });
  }
}