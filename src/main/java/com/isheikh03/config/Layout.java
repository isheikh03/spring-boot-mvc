package com.isheikh03.config;

import org.sitemesh.builder.SiteMeshFilterBuilder;
import org.sitemesh.config.ConfigurableSiteMeshFilter;

public class Layout extends ConfigurableSiteMeshFilter {

    @Override
    protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
        builder.addDecoratorPath("/api/*", "/admin-layout");
//        builder.addDecoratorPath("/403/*", "/admin-layout");
//        builder.addDecoratorPath("/user/*", "/home");
//        builder.addDecoratorPath("/admin/*", "/home");
//        builder.addDecoratorPath("/about/*", "/home");
//        builder.addDecoratorPath("/nav/*", "/home");
    }
}