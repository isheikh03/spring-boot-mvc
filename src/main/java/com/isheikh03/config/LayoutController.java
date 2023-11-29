package com.isheikh03.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LayoutController {
	
	@RequestMapping("/")
    public String api() {
		return "redirect:/api/dashboard";
    }
	
	@RequestMapping("/admin-layout")
    public String adminLayout() {
        return "/layouts/admin-layout";
    }
	
    @GetMapping("/login")
    public String login() {
        return "/login";
    }
    
    @GetMapping("/403")
    public String error403() {
        return "/error/403";
    }
    @GetMapping("/404")
    public String error404() {
    	return "/error/403";
    }
    @GetMapping("/error")
    public String error() {
    	return "/error/403";
    }

}
