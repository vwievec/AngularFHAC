import {Component, OnInit} from '@angular/core';
import { NasaApiService } from './services/nasa-api.service';
import {INasaImage} from './INasaImage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private nasaApiService: NasaApiService) {
  }
  title = 'NASA Cameras';

  // private nasaApiService: NasaApiService;
  private images = [];
  private currentImage: INasaImage;

  showImage(img: INasaImage) {
    console.log('Show image: ' + img.id);
    this.currentImage = img;
    console.log(img);
    document.getElementById('overlay').style.display = 'block';
  }

  hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }

  ngOnInit() {
    this.showPictures();
  }

  showPictures() {
    this.nasaApiService.getPicture()
      .subscribe(data => { this.images = data; },
        err => console.log(err),
        () => console.log('Loaded photos from api'));
  }


}
