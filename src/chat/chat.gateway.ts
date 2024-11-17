import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors:{
    origin:"*"
  }
})
export class ChatGateway { 
  private connectedClients= new Set<string>()
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() message:string, @ConnectedSocket() client:Socket): void {
    client.broadcast.emit('receiveMessage', message); 
    console.log('received',message)
  }
  handleConnection(client: Socket) {
    if(!this.connectedClients.has(client.id)){
      this.connectedClients.add(client.id)
      console.log('Client connected: ', client.id);

    }else{
      console.log('duplicates connection ignored for',client.id)

    }
    
   
  }

  handleDisconnect(client: Socket) {
    if(!this.connectedClients.has(client.id)){
      this.connectedClients.delete(client.id)
    
   console.log('Client disconnected: ', client.id);
    }
  }
}

