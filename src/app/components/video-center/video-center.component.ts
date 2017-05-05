import { Component, OnInit } from '@angular/core';
import {Video} from "../../video";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  // videos:Video[];
  videos:Array<Video>;

  selectedVideo: Video;

  constructor(private _videoService:VideoService) { }

  ngOnInit() {
     this._videoService.getVideos()
       .subscribe(resVideoData=>this.videos=resVideoData);
  }

  onSelectVideo(video:any){
    this.selectedVideo=video;
  }

  onSubmitVideo(video:Video){
    this._videoService.addVideo(video)
      .subscribe(resNewVideo =>{
        this.videos.push(resNewVideo);
        this.selectedVideo=resNewVideo;
      });
  }

}
