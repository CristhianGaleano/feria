import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit, OnDestroy {

  public liveChat: any;

  constructor() {
    this.liveChat = document.createElement('script');
      this.liveChat.type = 'text/javascript';
      this.liveChat.setAttribute('class', 'liveChatWidget');
    	this.liveChat.text = `
      window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
      d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
      _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
      $.src="https://v2.zopim.com/?5ccTfZd4kSWVIAsqLUuWKreyrqgqLQQX";z.t=+new Date;$.
      type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
      `;
      document.getElementsByTagName('head')[0].appendChild(this.liveChat);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    $( ".liveChatWidget" ).remove();
  }

}
