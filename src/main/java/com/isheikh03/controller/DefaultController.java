package com.isheikh03.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class DefaultController {

    @GetMapping("/")
    public String home() {
        return "redirect:/api/dashboard";
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "/dashboard";
    }

    @GetMapping("/admin")
    public String admin() {
        return "/admin";
    }

    @GetMapping("/user")
    public String user() {
        return "/user";
    }

    @GetMapping("/about")
    public String about() {
        return "/about";
    }


    
    @GetMapping("/nav/1")
    public String nav1() {
        return "/nav1";
    }
    @GetMapping("/nav/2")
    public String nav2() {
    	return "/nav2";
    }
    @GetMapping("/nav/3")
    public String nav3() {
    	return "/nav3";
    }
    @GetMapping("/nav/4")
    public String nav4() {
    	return "/nav4";
    }

}
