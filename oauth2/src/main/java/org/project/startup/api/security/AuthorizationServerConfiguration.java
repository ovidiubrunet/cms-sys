package org.project.startup.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.approval.UserApprovalHandler;
import org.springframework.security.oauth2.provider.token.TokenStore;

import javax.sql.DataSource;
 
/**
 * Authorization Server Configuration.
 * @author ovidiu.dragoi
 *
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {
 
    private static String REALM="PROJECT_MANAGER_REALM";
     
    @Autowired
    private TokenStore tokenStore;
    
    @Autowired
    private DataSource dataSource;
 
    @Autowired
    private UserApprovalHandler userApprovalHandler;
 
    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;
 
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
    	
    	//Din memorie
    	//Authorization: Basic base64(client_id:client_secret) to have access
        /* 
          	clients.inMemory()
        	// (required) the client id.
            .withClient("cronosmanager")
            // Grant types that are authorized for the client to use. Default value is empty.
            .authorizedGrantTypes("password", "authorization_code", "refresh_token", "implicit")
            //Authorities that are granted to the client (regular Spring Security authorities).
            .authorities("ROLE_CLIENT", "ROLE_TRUSTED_CLIENT")
            //scope
            .scopes("read", "write", "trust")
            //secret
            .secret("parola")
            .accessTokenValiditySeconds(3600).//Access token is only valid for 2 minutes.
            refreshTokenValiditySeconds(600);//Refresh token is only valid for 10 minutes.
        */
    	
    	//din baza de date
    	clients.jdbc(dataSource);
    }
 
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.tokenStore(tokenStore).userApprovalHandler(userApprovalHandler)
                .authenticationManager(authenticationManager);
    }
 
    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer.realm(REALM+"/client");
        //allows for checking token /check_token
        oauthServer.checkTokenAccess("isAuthenticated()");
    }
 
}
