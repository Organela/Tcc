import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isSignin = false;

  constructor(ngZone: NgZone) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onSignIn(googleUser): void {
    this.isSignin = true;
    var profile = googleUser.getBasicProfile();
    console.warn('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.warn('Name: ' + profile.getName());
    console.warn('Image URL: ' + profile.getImageUrl());
    console.warn('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  signOut(): void {
    this.isSignin = false;
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  
  }
}
