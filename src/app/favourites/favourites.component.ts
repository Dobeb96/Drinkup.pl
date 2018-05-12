import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { DataSnapshot } from '@firebase/database';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyAWEdrQOJ8hp1H-_IUyfrXlas32aUo065I",
  authDomain: "drink-up-1524767130276.firebaseapp.com",
  databaseURL: "https://drink-up-1524767130276.firebaseio.com",
  storageBucket: "drink-up-1524767130276.appspot.com",
  messagingSenderId: "861899942727"
};

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  // user: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;
  // msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    // var databaseRef = af.database.ref();
    // console.log(databaseRef);
    // this.items = af.list('/messages');
    // this.user = this.afAuth.authState;
    // this.Send('info');
  }

  // Send(desc: string) {
    // this.items.push({ message: desc});
    // this.msgVal = 'asdasd';
  // }

  ngOnInit() {
  }

}
