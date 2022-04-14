package com.claim.pooltablebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages="com.claim")

public class PoolTableBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(PoolTableBackEndApplication.class, args);
	}

}
