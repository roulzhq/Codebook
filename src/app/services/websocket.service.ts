import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor() {
    let socket = new WebSocket(`ws://localhost:8080/clientHandler`);

    socket.onopen = (event) => {
      socket.send(
        JSON.stringify({
          messageID: "12345-12345",
          messageType: 1,
          authToken: '129031-d12-112d08dh10fg4-132d13',
          data: {
            codebookId: 'mycodebook',
            cellId: 'acellid',
          },
        })
      );
    };

    socket.onclose = (event) => {
      console.log(event);
    };
  }
}
