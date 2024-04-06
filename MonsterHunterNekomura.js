
var iFileName = "MonsterHunterNekomura.js";

RequiredSheetVersion("13.0.6");

SourceList["MHHB"] = {
	name : "Monster Hunter Homebrew",
	abbreviation : "MHHB",
	defaultExcluded : true,
}

//RACES
RaceList["felyne"] = { 

	regExpSearch : /^(?=.*nekomura)(?=.*felyne).*$/i,
	name : "Nekomura, Felyne", 
	source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],
	plural : "Felynes",
	size : 4,
	speed : { 
        walk : { spd : 30, enc : 20 }, 
	},
    toolProfs : ["Cook's Utensils"], 
	languageProfs : ["Common", "Felinish"], 
	vision : [["Darkvision", 60]], 
	weaponprofs : [false, false, ["Cat's Paw", "Improvised Tools"]], 
	skills : ["Survival","Stealth"],
	age : " reach maturity around the age of 16 and generally lives around a century.", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	height : " average about 3 and a half feet tall.", 
	weight : " weigh around 65 lb", 
	heightMetric : " average about 1m tall", 
	weightMetric : " weigh around 30 kg",
	improvements : "Nekomura: +2 Dexterity, Felyne: +1 Wisdom", 
	scores : [0, 2, 0, 0, 1, 0], 
	trait : "Nekomura Nimbleness: You can move through the space of a creature that is of a size larger than you.\n\nQuadrupedal Movement: As a bonus action, a nekomura can shift onto all fours at the beginning of their turn. If they do this, they are restricted to only taking the Dodge and Dash actions, but their speed becomes 40. Every turn that you use this ability requires you use your bonus action to maintain this form of movement.\n\nKeepers of the Morale: You have proficiency in Artisan Tools (Cook's Utensils). During a short rest, you may make use of this ability to cook a Therapeutic Meal, any characters that share in this meal cause the health healed by hit dice (but not the characters' Constitution modifier) to be doubled.", 

	spellcastingAbility : 6, //required for a spellcaster; the ability score to use for spellcasting. Remove this line if your race has no spellcasting. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)


};
RaceList["melynx"] = { 

	regExpSearch : /^(?=.*nekomura)(?=.*melynx).*$/i,
	name : "Nekomura, Melynx", 
	source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],
	plural : "Melynxes",
	size : 4,
	speed : { 
        walk : { spd : 30, enc : 20 }, 
	},
	languageProfs : ["Common", "Felinish"], 
	vision : [["Darkvision", 60]], 
	weaponprofs : [false, false, ["Cat's Paw"]], 
	skills : ["Survival", "Sleight of Hand","Stealth"],
	age : " reach maturity around the age of 16 and generally lives around a century.", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	height : " average about 3 and a half feet tall.", 
	weight : " weigh around 65 lb", 
	heightMetric : " average about 1m tall", 
	weightMetric : " weigh around 30 kg",
	improvements : "Nekomura: +2 Dexterity, Felyne: +1 Wisdom", 
	scores : [0, 2, 0, 1, 0, 0], 
	trait : "• Nekomura Nimbleness: You can move through the space of a creature that is of a size larger than you.\n• Quadrupedal Movement: As a bonus action, a nekomura can shift onto all fours at the beginning of their turn. If they do this, they are restricted to only taking the Dodge and Dash actions, but their speed becomes 40. Every turn that you use this ability requires you use your bonus action to maintain this form of movement.\n• Cat's Grace: When rolling a saving throw to avoid fall damage, you roll at advanatage.", 

	spellcastingAbility : 6, //required for a spellcaster; the ability score to use for spellcasting. Remove this line if your race has no spellcasting. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)


};

//WEAPONS
WeaponsList["cats paw"] = {
        name : "Cat's Paw",
        source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],


        regExpSearch : /^(?=.*cat)(?=.*paw).*$/i,

        type : "Cat's Paw",
        ability : 0,

        abilitytodamage : false,

        damage : [1, 6, "slashing"],
        range : "Melee",

        description : "Finesse, light, special",
        special : true,
        list : "melee",
        weight : 3,
        dc : false,
    }

//FEATS

FeatsList["keeper of the morale"] = {
    name : "Keeper of the Morale (Felynes)",
    source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],
    prerequisite : "You must be a Felyne.",
    prereqeval : function(v) {
        return CurrentRace.known.indexOf('felyne') !== -1;
    },
    description : "You have proficiency in Artisan Tools (Cook's Utensils). During a short rest, you may make use of this ability to cook a Therapeutic Meal, any characters that share in this meal cause the health healed by hit dice (but not the characters' Constitution modifier) to be doubled.",
}
FeatsList["natural stealth"] = {
    name : "Natural Stealth (Melynx)",
    source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],
    prerequisite : "You must be a Nekomura.",
    prereqeval : function(v) {
        return CurrentRace.known.indexOf('melynx') !== -1;
    },
    description : "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
}

FeatsList["burrower"] = {
    name : "Burrower",
    source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],
    prerequisite : "You must be a Felyne.",
    prereqeval : function(v) {
        return CurrentRace.known.indexOf('felyne') !== -1 || CurrentRace.known.indexOf('melynx') !== -1;
    },
    description : "During a turn in which you have used your Quadrupedal Movement bonus action, you may burrow into the ground with a burrow speed of 10 ft. As long you remain underground, you must continue to use your Quadrupedal Movement bonus action.",
}
FeatsList["mad bombers"] = {
    name : "Mad Bombers",
    source : ["MHHB", "https://homebrewery.naturalcrit.com/share/HyWtDKSX"],
    prerequisite : "You must be a Nekomura.",
    prereqeval : function(v) {
        return CurrentRace.known.indexOf('felyne') !== -1 || CurrentRace.known.indexOf('melynx') !== -1;
    },
    description : "When attacking with an explosive, you may add double your proficiency bonus if you choose to carry the explosive and rush the enemy, rather than safely throwing it.",
}

