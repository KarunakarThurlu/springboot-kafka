package com.kafka.securityconfig;


public class SpringBootSecurityConfiguration{
/*
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.authorizeRequests()
		.antMatchers("/","index","/css","/js/*").permitAll()
		//.antMatchers("/kafka").hasRole("STUDENT")
		.anyRequest()
		.authenticated();
		//.and()
		//.formLogin()
		//.loginPage("/login").permitAll()
		//.defaultSuccessUrl("/home");
	}
	/*
	 * @Override
	 * 
	 * @Bean protected UserDetailsService userDetailsService() { UserDetails
	 * user=User.builder() .username("user")
	 * .password(passwordEncoder().encode("pwd")) .roles("STUDENT") //ROLE_STUDENT
	 * .build();
	 * 
	 * UserDetails admin=User.builder() .username("admin")
	 * .password(passwordEncoder().encode("admin")) .roles("ADMIN") //ROLE_ADMIN
	 * .build();
	 * 
	 * return new InMemoryUserDetailsManager(user,admin); }
	 */
}
