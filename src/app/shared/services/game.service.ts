import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { WebsocketService } from "./websocket.service";
import { map } from 'rxjs/operators';

const CHAT_URL = "ws://192.168.1.101:8080/topic/initGame/";

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect(CHAT_URL).pipe(map(
      (response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        console.log('data', data);
        return data;
      }
    ));
  }
}