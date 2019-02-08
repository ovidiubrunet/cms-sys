package org.project.startup.notification.util;

import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.time.Duration;

public class WebsocketClient {
	public static void send(String event, String user) {
		 WebSocketClient client = new ReactorNettyWebSocketClient();
	        client.execute(
	          URI.create("ws://localhost:8090/app/chatMessage.new?user="+user), 
	          session -> session.send(
	            Mono.just(session.textMessage(event)))	   
	            .then())
	.block(Duration.ofSeconds(10L));
	}
}
