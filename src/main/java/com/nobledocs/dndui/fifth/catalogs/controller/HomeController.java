/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nobledocs.dndui.fifth.catalogs.controller;

import org.springframework.stereotype.Controller;
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
        return "catalogs/races";
    }

    @RequestMapping("/classes")
    public String classes() {
        return "catalogs/classes";
    }

    @RequestMapping("/backgrounds")
    public String backgrounds() {
        return "catalogs/backgrounds";
    }

    @RequestMapping("/spells/bard")
    public String bardSpells() {
        return "spells/bard-spells";
    }

    @RequestMapping("/spells/cleric")
    public String clericSpells() {
        return "spells/cleric-spells";
    }

    @RequestMapping("/spells/druid")
    public String druidSpells() {
        return "spells/druid-spells";
    }

    @RequestMapping("/spells/paladin")
    public String paladinSpells() {
        return "spells/paladin-spells";
    }

    @RequestMapping("/spells/ranger")
    public String rangerSpells() {
        return "spells/ranger-spells";
    }

    @RequestMapping("/spells/sorcerer")
    public String sorcererSpells() {
        return "spells/sorcerer-spells";
    }

    @RequestMapping("/spells/warlock")
    public String warlockSpells() {
        return "spells/warlock-spells";
    }

    @RequestMapping("/spells/wizard")
    public String wizardSpells() {
        return "spells/wizard-spells";
    }

}
