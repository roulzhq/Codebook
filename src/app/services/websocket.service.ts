import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public connect(url: string): WebSocketSubject<MessageEvent> {
    return webSocket(url);
  }
}
