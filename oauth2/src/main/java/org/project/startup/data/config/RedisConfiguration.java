package org.project.startup.data.config;

import com.lambdaworks.redis.support.RedisClientFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.URI;
import java.net.URISyntaxException;

@Configuration
public class RedisConfiguration {

	  @Bean()
	  public RedisClientFactoryBean redisConnectionFactory() {
		  RedisClientFactoryBean redis = new RedisClientFactoryBean();
		  
		  URI uri;
		try {
			uri = new URI("redis://localhost:6379");
			redis.setUri(uri);
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  
		  
		  return redis;
	  }
}
