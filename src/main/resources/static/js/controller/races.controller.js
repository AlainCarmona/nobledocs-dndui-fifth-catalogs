/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('dnduiApp', []);
app.controller('racesCtrl', function ($scope, $sce) {
    $scope.modal = {};

    $scope.setTraitsData = setTraitsData;
    $scope.setSubracesData = setSubracesData;

    function setTraitsData(race) {
        switch (race) {
            case 1: // When dwarf is selected
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
            case 2: // When elf is selected
                $scope.modal.title = 'ELF';
                $scope.modal.data = $sce.trustAsHtml('<p>Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Dexterity score increases by 2.<br/>' +
                        '<strong>Age.</strong> Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.<br/>' +
                        '<strong>Alignment.</strong> Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others\' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.<br/>' +
                        '<strong>Size.</strong> Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 30 feet.<br/>' +
                        '<strong>Darkvision.</strong> Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.<br/>' +
                        '<strong>Keen Senses.</strong> You have proficiency in the Perception skill.<br/>' +
                        '<strong>Fey Ancestry.</strong> You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.<br/>' +
                        '<strong>Trance.</strong> Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.<br/>' +
                        '<strong>Subrace.</strong> Ancient divides among the elven people resulted in three main subraces: high elves, wood elves, and dark elves, who are commonly called drow. Choose one of these subraces. In some worlds, these subraces are divided still further (such as the sun elves and moon elves of the Forgotten Realms), so if you wish, you can choose a narrower subrace.</p>');
                break;
            case 3: // When halfling is selected
                $scope.modal.title = 'HALFLING';
                $scope.modal.data = $sce.trustAsHtml('<p>Your halfling character has a number of traits in common with ali other halflings.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Dexterity score increases by 2.<br/>' +
                        '<strong>Age.</strong> A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.<br/>' +
                        '<strong>Alignment.</strong> Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.<br/>' +
                        '<strong>Size.</strong> Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 25 feel.<br/>' +
                        '<strong>Lucky.</strong> When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.<br/>' +
                        '<strong>Brave.</strong> You have advantage on saving throws against being frightened.<br/>' +
                        '<strong>Halfling Nimbleness.</strong> You can move through the space of any creature that is of a size larger than yours.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Halfling. The Halfling language isn\'t secret, but halflings are loath to share it with others. They write very little, so they don\'t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.<br/>' +
                        '<strong>Subrace.</strong> The two main kinds of halfling. lightfoot and stout, are more like closely related families than true subraces. Choose one of these subraces.</p>');
                break;
            case 4: // When human is selected
                $scope.modal.title = 'HUMAN';
                $scope.modal.data = $sce.trustAsHtml('<p>It\'s hard to make generalizations about humans, but your human character has these traits.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your ability scores each increase by 1.<br/>' +
                        '<strong>Age.</strong> Humans reach adulthood in their late teens and live less than a century.<br/>' +
                        '<strong>Alignment.</strong> Humans tend toward no particular alignment. The best and the worst are found among them.<br/>' +
                        '<strong>Size.</strong> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 30 feet.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>' +
                        '<div class="alert alert-success">' +
                        '<strong>VARIANT HUMAN TRAITS</strong>' +
                        '<p>If your campaign uses the optional feat rules from chapter 6, your Dungeon Master might allow these variant traits, all of which replace the human\'s Ability Score Increase trait.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Two different ability scores of your choice increase by 1.<br/>' +
                        '<strong>Skills.</strong> You gain proficiency in one skill of your choice.<br/>' +
                        '<strong>Feat.</strong> You gain one feat of your choice.</p>' +
                        '</div>');
                break;
            case 5: // When dragonborn is selected
                $scope.modal.title = 'DRAGONBORN';
                $scope.modal.data = $sce.trustAsHtml('<p>Your draconic heritage manifests in a variety of traits you share with other dragonborn.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Strength score increases by 2, and your Charisma score increases by 1.<br/>' +
                        '<strong>Age.</strong> Young dragonborn grow quickly. They walk hours after hatching. attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.<br/>' +
                        '<strong>Alignment.</strong> Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat. respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.<br/>' +
                        '<strong>Size.</strong> Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 30 feet.<br/>' +
                        '<strong>Draconic Ancestry.</strong> You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.<br/>' +
                        '<strong>Breath Weapon.</strong> You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.' +
                        '<br/>When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.' +
                        '<br/>After you use your breath weapon, you can\'t use it again until you complete a short or long rest. Damage Resistance. You have resistance to the damage type associated with your draconic ancestry.</p>' +
                        '<table class="table">' +
                        '<thead>' +
                        '<tr>' +
                        '<th>Dragon</th>' +
                        '<th>Damage Type</th>' +
                        '<th>Breath Weapon</th>' +
                        '</tr>' +
                        '</thead>' +
                        '<tbody>' +
                        '<tr>' +
                        '<td>Black</td>' +
                        '<td>Acid</td>' +
                        '<td>5 by 30 fI. line (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Blue</td>' +
                        '<td>Lighting</td>' +
                        '<td>5 by 30 ft. line (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Brass</td>' +
                        '<td>Fire</td>' +
                        '<td>5 by 30 ft. line (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Bronce</td>' +
                        '<td>Lighting</td>' +
                        '<td>5 by 30 fI. line (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Cooper</td>' +
                        '<td>Acid</td>' +
                        '<td>5 by 30 fI. line (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Gold</td>' +
                        '<td>Fire</td>' +
                        '<td>15 ft. cone (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Green</td>' +
                        '<td>Poison</td>' +
                        '<td>15 ft. cone (Con. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Red</td>' +
                        '<td>Fire</td>' +
                        '<td>15 ft. cone (Dex. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Silver</td>' +
                        '<td>Cold</td>' +
                        '<td>15 ft. cone (Con. save)</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>White</td>' +
                        '<td>Cold</td>' +
                        '<td>15 ft. cone (Con. save)</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>' +
                        '<p><strong>Damage Resistance.</strong> You have resistance to the damage type associated with your draconic ancestry.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.</p>');
                break;
            case 6: // When gnome is selected
                $scope.modal.title = 'GNOME';
                $scope.modal.data = $sce.trustAsHtml('<p>Your gnome character has certain characteristics in common with all other gnomes.<br/>' +
                        '<strong>Ability Score Increase.</strong> Your Intelligence score increases by 2.<br/>' +
                        '<strong>Age.</strong> Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.</p>' +
                        '<div class="alert alert-success">' +
                        '<strong>ALWAYS APPRECIATIVE</strong>' +
                        '<p>It\'s rare for a gnome to be hostile ar malicious unless he ar she has suffered a grievous injury. Gnomes know that most races don\'t share their sense of humor, but they enjoy anyone\'s company just as they enjoy everything else they set out to do.</p>' +
                        '</div>' +
                        '<p><strong>Alignment.</strong> Gnomes are most often good. Those who lend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who lend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.<br/>' +
                        '<strong>Size.</strong> Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 25 feel.<br/>' +
                        '<strong>Darkvision.</strong> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.<br/>' +
                        '<strong>Gnome Cunning.</strong> You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.<br/>' +
                        '<strong>Subrace.</strong> Two subraces of gnomes are found among the worlds of D&AMP;D: forest gnomes and rock gnomes. Choose one of these subraces.</p>');
                break;
            case 7: // When half-elf is selected
                $scope.modal.title = 'HALF-ELF';
                $scope.modal.data = $sce.trustAsHtml('<p>Your half-elf character has some qualities in common with elves and some that are unique to half-elves.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Charisma score increases by 2, and two other ability scores of yourchoice increase by 1.<br/>' +
                        '<strong>Age.</strong> Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.<br/>' +
                        '<strong>Alignment.</strong> Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and of leaders nor desire for followers. They chafe at rules, resent others\' demands, and sometimes prove unreliable, or at least unpredictable.</p>' +
                        '<div class="alert alert-success">' +
                        '<strong>EXCELLENT AM BASSADORS</strong>' +
                        '<p>Many half-elves learn at an early age to get along with everyone, defusing hostility and finding common ground. As a race, they have elven grace without elven aloofness and human energy without human boorishness. They often make excellent ambassadors and go-betweens (except between elves and humans, since each side suspects the half-elf of favoring the other).</p>' +
                        '</div>' +
                        '<p><strong>Size.</strong> Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 30 feet.<br/>' +
                        '<strong>Darkvision.</strong> Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.<br/>' +
                        '<strong>Fey Ancestry.</strong> You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.<br/>' +
                        '<strong>Skill Versatility.</strong> You gain proficiency in two skills of your choice.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common, Elvish, and one extra language of your choice.</p>');
                break;
            case 8: // When half-orc is selected
                $scope.modal.title = 'HALF-ORC';
                $scope.modal.data = $sce.trustAsHtml('<p>Your half-orc charaeter has certain traits deriving from your orc ancestry.</p>' +
                        '<div class="alert alert-success">' +
                        '<strong>GRUDGING ACCEPTANCE</strong>' +
                        '<p>Each half-orc finds a way to gain acceptance from those who hate ores. Some are reserved, trying not to draw attention to themselves. A few demonstrate piety and good-heartedness as publicly as they can (whether or not such demonstrations are genuine). And some simply try to be so tough that others just avoid them.</p>' +
                        '</div>' +
                        '<p><strong>Ability Score Increase.</strong> Your Strength score increases by 2, and your Constitution score increases by 1.<br/>' +
                        '<strong>Age.</strong> Half-orcs mature a tittle faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.<br/>' +
                        '<strong>Alignment.</strong> Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among ores and willing to live out their lives among them are usually evil.<br/>' +
                        '<strong>Size.</strong> Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 30 feet.<br/>' +
                        '<strong>Darkvision.</strong> Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim tight within 60 feet of you as if it were bright tight, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.<br/>' +
                        '<strong>Menacing.</strong> You gain proficiency in the Intimidation skill.<br/>' +
                        '<strong>Relentless Endurance.</strong> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can\'t use this feature again until you finish a long rest.<br/>' +
                        '<strong>Savage Attacks.</strong> When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time and add it to the extra damage of the critical hit.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.</p>');
                break;
            case 9: // When tiefling is selected
                $scope.modal.title = 'TIEFLING';
                $scope.modal.data = $sce.trustAsHtml('<p>Tieflings share certain racial traits as a result of their infernal descent.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Intelligence score increases by 1, and your Charisma score increases by 2.<br/>' +
                        '<strong>Age.</strong> Tieflings mature at the same rate as humans but live a few years longer.<br/>' +
                        '<strong>Alignment.</strong> Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not an independent nature inclines many tieflings toward a chaotic alignment.<br/>' +
                        '<strong>Size.</strong> Tieflings are about the same size and build as humans. Your size is Medium.<br/>' +
                        '<strong>Speed.</strong> Your base walking speed is 30 feet.<br/>' +
                        '<strong>Darkvision.</strong> Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.<br/>' +
                        '<strong>Hellish Resistance.</strong> You have resistance to fire damage.<br/>' +
                        '<strong>Infernal Legacy.</strong> You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.<br/>' +
                        '<strong>Languages.</strong> You can speak, read, and write Common and Infernal.</p>');
                break;
        }
    }

    function setSubracesData(race) {
        switch (race) {
            case 1: // When dwarf is selected
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
            case 2: // When elf is selected
                $scope.modal.title = 'ELF';
                $scope.modal.data = $sce.trustAsHtml('<h3>HIGH ELF</h3>' +
                        '<p>As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&AMP;D, there are two kinds of high elves. One type (which includes the gray elves aod valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk. the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.</p>' +
                        '<p>The sun elves of Faerun (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blood. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-while, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Intelligence score increases by 1.<br/>' +
                        '<strong>Elf Weapon Training.</strong> You have proficiency with the longsword, shortsword, shortbow, and longbow.<br/>' +
                        '<strong>Cantrip.</strong> You know one Cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.<br/>' +
                        '<strong>Extra Language.</strong> You can speak, read, and write one extra language of your choice.</p>' +
                        '<h3>WOOD ELF</h3>' +
                        '<p>As a wood elf, you have keen senses and intuition, and your fleel feel carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves. green elves, or forest elves) are reclusive and distrusting of non-elves.</p>' +
                        '<p>Wood elves\' skin lends to be copperish in hue, sometimes with traces of green. Their hair lends toward browns and blacks, bul il is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Wisdom score increases by 1.<br/>' +
                        '<strong>Elf Weapon Training.</strong> You have proficiency with the longsword, shortsword, shortbow, and longbow.<br/>' +
                        '<strong>Fleet of Foot.</strong> Your base walking speed increases to 35 feel.<br/>' +
                        '<strong>Mask of the Wild.</strong> You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, misl, and other natural phenomena.</p>' +
                        '<h3>DARK ELF (DROW)</h3>' +
                        '<p>Descended from an earlier subrace of dark-skinned elves; the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption. Now they have build their own civilizalion in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves. the drow have black skin that resembles polished obsidian and slark while ar pale yellow hair. They commonly have very pale eyes (so pale as lObe mistaken for while) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than mosl elves.</p>' +
                        '<p>Drow adventurers are rare, and the race does not exist in ali worlds. Check with your Dungeon Master to see if you can play a drow character.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Charisma score increases by 1.<br/>' +
                        '<strong>Superior Darkvision.</strong> Your darkvision has a radius of 120 feel.<br/>' +
                        '<strong>Sunlight Sensitivity.</strong> You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the larget of your attack, ar whatever you are trying to perceive is in direct sunlight.<br/>' +
                        '<strong>Drow Magic.</strong> You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie tire spell once per day. When you reach 5th level, you can also casl the darkness spell once per day. Charisma is your spellcasting ability for these spells.<br/>' +
                        '<strong>Drow Weapon Training.</strong> You have proficiency with rapiers, shortswords, and hand crossbows.</p>' +
                        '<div class="alert alert-success">' +
                        '<strong>THE DARKNESS OF THE DROW</strong>' +
                        '<p>Were it not for one renowned exception, the race of drow would be universally reviled. To most, they are a race of demon-worshiping marauders dwelling in the subterranean depths of the Underdark, emerging only on the blackest nights to pillage and slaughter the surface dwellers they despise. Their society is depraved and preoccupied with the favor of Lolth, their spider-goddess, who sanctions murder and the extermination of entire families as noble houses vie for position.</p>' +
                        '<p>Yet one drow, at least, broke the mold. In the world of the Forgotten Realms, Drizzt Do\'Urden, ranger of the North, has proven his quality as a good - hearted defender of the weak and innocent.Rejecting his heritage and adrift in a world that looks upon him with terror and loathing, Drizzl is a model for those few drow who follow in his footsteps, trying to find a life apart from the evil society of their Underdark homes.</p>' +
                        '<p>Drow grow up believing that surface - dwelling races are inferior, worthless except as slaves.Drow who develop a conscience or find it necessary to cooperate with members of other races find it hard to overcome that prejudice, especially when they are 50 often on the receiving end of hatred.' +
                        '</p>' +
                        '</div>');
                break;
            case 3: // When halfling is selected
                $scope.modal.title = 'HALFLING';
                $scope.modal.data = $sce.trustAsHtml('<h3>LIGHTFOOT</h3>' +
                        '<p>As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You\'re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. </p>' +
                        '<p>Lightfoots are more prone to wanderlust than other halflings. and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk. these halflings are called hairfeet or tallfellows.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Charisma score increases by 1.<br/>' +
                        '<strong>Naturally Stealthy.</strong> You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.</p>' +
                        '<h3>STOUT</h3>' +
                        '<p>As a stout halfling,  you\'re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts. and they\'re most common in the south.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Constitution score increases by 1.<br/>' +
                        '<strong>Stout Resilience.</strong> You have advantage on saving throws against poison, and you have resistance against poison damage.</p>');
                break;
            case 6: // When gnome is selected
                $scope.modal.title = 'GNOME';
                $scope.modal.data = $sce.trustAsHtml('<h3>FOREST GNOME</h3>' +
                        '<p>As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&AMP;D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats ar to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.</p>' +
                        '<p><strong>Ability Score Increase.</strong> Your Dexterity score increases by 1.<br/>' +
                        '<strong>Natural Illusionist.</strong> You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.<br/>' +
                        '<strong>Speak with Small Beasts.</strong> Through sounds and gestures, you can communicate simple ideas with Small ar smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.</p>' +
                        '<h3>ROCK GNOME</h3>' +
                        '<p>As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&AMP;D are rock gnomes, including the tinker gnomes of the Dragonlance setting.<br/>' +
                        '<strong>Ability Score Increase.</strong> Your Constitution score increases by 1.<br/>' +
                        '<strong>Artificer\'s Lore.</strong> Whenever you make an Intelligence (History) check related to magic items, alchemical objects, ar technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.<br/>' +
                        '<strong>Tinker.</strong> You have proficiency with artisan\'s tools (tinker\'s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), ar when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.</p>' +
                        '<p>When you create a device, choose one of the following options:</p>' +
                        '<p><em>Clockwork Toy.</em> This toy is a clockwork animal, monster, ar person, such as a frog, mouse, bird, dragon, ar soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. lt makes noises as appropriate to the creature it represents.<br/>' +
                        '<em>Fire Starter.</em> The device produces a miniature flame, which you can use to light a candle, torch, ar campfire. Using the device requires your action.<br/>' +
                        '<em>Music Box.</em> When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song\'s end ar when it is closed.</p>');
                break;
        }
    }
});
