package org.project.startup.api.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CORSFilter implements Filter {
	
	 private static final Logger LOG = LoggerFactory.getLogger(CORSFilter.class);
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
        	HttpServletResponse response = (HttpServletResponse) res;
        	HttpServletRequest request = (HttpServletRequest) req;
        	   
        	   
        	response.setHeader("Access-Control-Allow-Origin", "*");
        	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, HEAD");
        	response.setHeader("Access-Control-Allow-Headers", "X-Auth-Token, Content-Type, Authorization, X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
        	response.setHeader("Access-Control-Expose-Headers", "custom-header1, custom-header2");
        	response.setHeader("Access-Control-Allow-Credentials", "true");
        	response.setHeader("Access-Control-Max-Age", "4800");
	        
	        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
	            response.setStatus(HttpServletResponse.SC_OK);
	        } else {
	            chain.doFilter(req, res);
	            LOG.info("---CORS Configuration Completed---");
	        }
	}
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}
	@Override
	public void destroy() {
	}
} 