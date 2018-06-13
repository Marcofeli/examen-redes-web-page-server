import { Component } from '@angular/core';
import { TwitterMessageService } from './services/twitter-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tweets: any;

  constructor(private twitterMessageService: TwitterMessageService) {
    this.twitterMessageService.getAllMessages().subscribe((tweets) => {
      this.tweets = tweets;
      console.log(tweets);
    });
  }
}
