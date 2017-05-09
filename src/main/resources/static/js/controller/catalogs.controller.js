/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('dnduiApp', []);

app.controller('catalogsCtrl', function ($scope, $sce) {
    $scope.modal = {};
    $scope.setTraitsData = setTraitsData;
    $scope.setSubracesData = setSubracesData;
    
    function setTraitsData(race) {
        switch (race) {
            // When dwarf is selected
            case 1:
                $scope.modal.title = 'DWARF';
                $scope.modal.data = $sce.trustAsHtml('<p>Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Constitution score increases by 2.<br/>' +
                        '<strong>Age.</strong> Dwarves mature at the same rate as humans, but they\'re considered young until they reach the age of 50. On average, they live about 350 years.<br/>' +
                        '<strong>Alignment.</strong> Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of just order.<br/>' +
                        '<strong>Size.</strong> Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 25 feel. Your speed is not reduced by wearing heavy armor.<br/>' +
                        '<strong>Darkvision.</strong> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.<br/>' +
                        '<strong>Dwarven Resilience.</strong> You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9).<br/>' +
                        '<strong>Dwarven Combat Training.</strong> You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.<br/>' +
                        '<strong>Tool Proficiency.</strong> You gain proficiency with the artisan\'s tools of your choice: smith\'s tools, brewer\'s supplies, or mason\'s tools. < br / >' +
                        '<strong>Stonecunning.</strong> Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.<br/>' +
                        '<strong>Subrace.</strong> Two main subraces of dwarves populate the worlds of D&AMP;D: hill dwarves and mountain dwarves. Choose one of these subraces.</p>');
                break;
        }
    }

    function setSubracesData(race) {
        switch (race) {
            // When dwarf is selected
            case 1:
                $scope.modal.title = 'DWARF';
                $scope.modal.data = $sce.trustAsHtml('<h3>HILL DWARF</h3>' +
                        '<p>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Wisdom score increases by 1.<br/>' +
                        '<strong>Dwarven Toughness.</strong> Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</p>' +
                        '<h3>MOUNTAIN DWARF</h3>' +
                        '<p>As a mountain dwarf, you\'re strong and hardy, accustomed to a difficult life in rugged terrain. You\'re probably on the tall side (for a dwarf), and tend toward lighter coloration, The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Strength score increases by 2.<br/>' +
                        '<strong>Dwarven Armor Training.</strong> You have proficiency with light and medium armor.</p>' +
                        '<div class="alert alert-success">' +
                        '<strong>DUERGAR</strong>' +
                        '<p>In cities deep in the Underdark live the duergar, ar gray dwarves. These vicious, stealthy slave traders raid the surface world for caplives, then sell their prey to the other races of the Underdark. They have innale magical abililies to become invisible and to temporarily grow to giant size.</p>' +
                        '</div>');
                break;
        }
    }
});
