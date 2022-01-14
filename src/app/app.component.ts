import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Set iframe source';
  url: string = "https://angular.io/api/router/RouterLink";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl('assets/iframe/iFrameCommunicator.html');
   }
  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl('assets/iframe/iFrameCommunicator.html');
  }
  @HostListener('window:message', ['$event'])
  onMessage($event: any) {
    /* if ($event.origin != "*") { // set your origin
      return false;
    }
    if ($event.data.for == "user") {
      alert('here i am');
    } */
    console.log($event);
  }
}