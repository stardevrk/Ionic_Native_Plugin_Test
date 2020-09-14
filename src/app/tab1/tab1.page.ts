import { Component } from '@angular/core';
import { VideoUpload } from 'ionic-plugin-video-upload/video-upload/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private videoUpload: VideoUpload) {}

  clickUpload = () => {
    
    this.videoUpload.init({
      poolID: 'us-east-1:68d37f98-98e6-4c06-85f6-2c31fcd38608',
      region: 'us-east-1',
      bucket: 'birdiefire-cv',
      folder: 'testLocation/',
      cameraWidth: 150,
      cameraHeight: 250
    });

    this.videoUpload.startUpload('standard').then(result => {

    })
  }

  
  clickLive = () => {
    this.videoUpload.initLive({
      cameraWidth: 150,
      cameraHeight: 250
    })

    this.videoUpload.startBroadcast('rtmp://3.89.78.208/live/g121790');
  }

}
