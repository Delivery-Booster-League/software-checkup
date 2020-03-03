import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  darkModeActived : boolean = false;
  public isMobileResolution: boolean;
  constructor(private _snackBar: MatSnackBar,private overlayContainer: OverlayContainer) {
    if (window.innerWidth < 767) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    console.log(this.isMobileResolution);
  }

  toggleDarkTheme(){
    this.darkModeActived = !this.darkModeActived;
    
    this.openSnackBar();
    this.addaptOverlayToTheme();
  }

  addaptOverlayToTheme(){
    if(this.darkModeActived){
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
      this.overlayContainer.getContainerElement().classList.remove('candy-app-theme'); 
    }
    else{
      this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
      this.overlayContainer.getContainerElement().classList.add('candy-app-theme'); 
    }

  }
  openSnackBar() {
    let mode:string = "light";
    if(this.darkModeActived) {
     
      mode="dark";
    }
    let snackBarRef = this._snackBar.open('Switched to '+mode+' mode','dismiss',{duration: 4000  });
    
  }

}
