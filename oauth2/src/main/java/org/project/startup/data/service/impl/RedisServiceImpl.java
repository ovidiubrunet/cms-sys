package org.project.startup.data.service.impl;

import com.lambdaworks.redis.RedisClient;
import com.lambdaworks.redis.RedisConnection;
import org.project.startup.data.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RedisServiceImpl implements RedisService{
	
	@Autowired
	private RedisClient redisClient;
	
	public void testConnection() {
	    RedisConnection<String, String> connection = redisClient.connect();

	    System.out.println("Connected to Redis");

	    connection.close();
	}
}
