import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  user: Observable<firebase.User>;
  items: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.user = this.afAuth.authState;
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
  }

}
