/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nobledocs.dndui.fifth.catalogs.controller;

import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Alain Carmona
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/races")
    public String races() {
        return "races";
    }

    @RequestMapping("/classes")
    public String classes() {
        return "classes";
    }

    @RequestMapping("/backgrounds")
    public String backgrounds() {
        return "backgrounds";
    }

}
