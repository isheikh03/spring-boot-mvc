/*
 * Created by Jehadul Hoque
 * Date on: 2019-12-21 17:20
 */


package com.isheikh03.config;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ImplementIntercept extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        final String contPath = request.getContextPath();
        String urlPrefix = "http://" + request.getServerName() + ":" + request.getServerPort() + contPath;
        request.setAttribute("urlPrefix", urlPrefix);
        
        if (request.getSession().getAttribute("errorMessage") != null) {
            request.setAttribute("errorMessage", request.getSession().getAttribute("errorMessage"));
            request.getSession().removeAttribute("errorMessage");
        }
        if (request.getSession().getAttribute("highlightMessage") != null) {
            request.setAttribute("highlightMessage", request.getSession().getAttribute("highlightMessage"));
            request.getSession().removeAttribute("highlightMessage");
        }
        return true;
    }
}
