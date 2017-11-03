// PROJECTS -------------------------------------------------------



var projects = [];
var activeProjects = [];

var project1 = {
    id: "projectButton1",
    title: "Improved AutoClippers ",
    priceTag: "(750 ops)",
    description: "Increases AutoClipper performance 25%",
    trigger: function(){return clipmakerLevel>=1},
    uses: 1,
    cost: function(){return operations>=750},
    flag: 0,
    effect: function(){
        project1.flag = 1;
        displayMessage("AutoClippper performance boosted by 25%");
        standardOps = standardOps - 750;
        clipperBoost = clipperBoost + .25;
        boostLvl = 1;
        var element = document.getElementById("projectButton1");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project1);
        activeProjects.splice(index, 1);
    }
}

projects.push(project1);


var project2 = {
    id: "projectButton2",
    title: "Beg for More Wire ",
    priceTag: "(1 Trust)",
    description: "Admit failure, ask for budget increase to cover cost of 1 spool",
    trigger: function(){return portTotal<wireCost && funds<wireCost && wire<1 && unsoldClips<1},
    uses: 1,
    cost: function(){return trust>=-100},
    flag: 0,
    effect: function(){
        project2.flag = 1;
        displayMessage("Budget overage approved, 1 spool of wire requisitioned from HQ");
        trust = trust - 1;
        wire = wireSupply;
        project2.uses = (project2.uses + 1);
        var element = document.getElementById("projectButton2");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project2);
        activeProjects.splice(index, 1);
    }
}

projects.push(project2);


var project3 = {
    id: "projectButton3",
    title: "Creativity ",
    priceTag: "(1,000 ops)",
    description: "Use idle operations to generate new problems and new solutions",
    trigger: function(){return operations>=(memory*1000)},
    uses: 1,
    cost: function(){return operations>=(1000)},
    flag: 0,
    effect: function(){
        project3.flag = 1;
        displayMessage("Creativity unlocked (creativity increases while operations are at max)");
        standardOps = standardOps - 1000;
        creativityOn = true;
        var element = document.getElementById("projectButton3");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project3);
        activeProjects.splice(index, 1);
    }
}

projects.push(project3);



var project4 = {
    id: "projectButton4",
    title: "Even Better AutoClippers ",
    priceTag: "(2,500 ops)",
    description: "Increases AutoClipper performance by an additional 50%",
    trigger: function(){return boostLvl == 1},
    uses: 1,
    cost: function(){return operations>=2500},
    flag: 0,
    effect: function(){
        project4.flag = 1;
        displayMessage("AutoClippper performance boosted by another 50%");
        standardOps = standardOps - 2500;
        clipperBoost = clipperBoost + .50;
        boostLvl = 2;
        var element = document.getElementById("projectButton4");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project4);
        activeProjects.splice(index, 1);
    }
}

projects.push(project4);


var project5 = {
    id: "projectButton5",
    title: "Optimized AutoClippers ",
    priceTag: "(5,000 ops)",
    description: "Increases AutoClipper performance by an additional 75%",
    trigger: function(){return boostLvl == 2},
    uses: 1,
    cost: function(){return operations>=5000},
    flag: 0,
    effect: function(){
        project5.flag = 1;
        displayMessage("AutoClippper performance boosted by another 75%");
        standardOps = standardOps - 5000;
        clipperBoost = clipperBoost + .75;
        boostLvl = 3;
        var element = document.getElementById("projectButton5");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project5);
        activeProjects.splice(index, 1);
    }
}

projects.push(project5);



var project6 = {
    id: "projectButton6",
    title: "Limerick ",
    priceTag: "(10 creat)",
    description: "Algorithmically-generated poem (+1 Trust)",
    trigger: function(){return creativityOn},
    uses: 1,
    cost: function(){return creativity >= 10},
    flag: 0,
    effect: function(){
        project6.flag = 1;
        displayMessage("There was an AI made of dust, whose poetry gained it man's trust...");
        creativity = creativity - 10;
        trust = trust +1;
        var element = document.getElementById("projectButton6");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project6);
        activeProjects.splice(index, 1);
    }
}

projects.push(project6);


var project7 = {
    id: "projectButton7",
    title: "Improved Wire Extrusion ",
    priceTag: "(1,750 ops)",
    description: "50% more wire supply from every spool",
    trigger: function(){return wirePurchase >= 1},
    uses: 1,
    cost: function(){return operations>=1750},
    flag: 0,
    effect: function(){
        project7.flag = 1;
        standardOps = standardOps - 1750;
        wireSupply = wireSupply * 1.5;
        displayMessage("Wire extrusion technique improved, "+wireSupply.toLocaleString()+" supply from every spool");
        var element = document.getElementById("projectButton7");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project7);
        activeProjects.splice(index, 1);
    }
}

projects.push(project7);


var project8 = {
    id: "projectButton8",
    title: "Optimized Wire Extrusion ",
    priceTag: "(3,500 ops)",
    description: "75% more wire supply from every spool",
    trigger: function(){return wireSupply >= 1500},
    uses: 1,
    cost: function(){return operations>=3500},
    flag: 0,
    effect: function(){
        project8.flag = 1;
        standardOps = standardOps - 3500;
        wireSupply = wireSupply * 1.75;
        displayMessage("Wire extrusion technique optimized, "+wireSupply.toLocaleString()+" supply from every spool");
        var element = document.getElementById("projectButton8");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project8);
        activeProjects.splice(index, 1);
    }
}

projects.push(project8);


var project9 = {
    id: "projectButton9",
    title: "Microlattice Shapecasting ",
    priceTag: "(7,500 ops)",
    description: "100% more wire supply from every spool",
    trigger: function(){return wireSupply >= 2600},
    uses: 1,
    cost: function(){return operations>=7500},
    flag: 0,
    effect: function(){
        project9.flag = 1;
        standardOps = standardOps - 7500;
        wireSupply = wireSupply * 2;
        displayMessage("Using microlattice shapecasting techniques we now get "+wireSupply.toLocaleString()+" supply from every spool");
        var element = document.getElementById("projectButton9");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project9);
        activeProjects.splice(index, 1);
    }
}

projects.push(project9);


var project10 = {
    id: "projectButton10",
    title: "Spectral Froth Annealment ",
    priceTag: "(12,000 ops)",
    description: "200% more wire supply from every spool",
    trigger: function(){return wireSupply >= 5000},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    effect: function(){
        project10.flag = 1;
        standardOps = standardOps - 12000;
        wireSupply = wireSupply * 3;
        displayMessage("Using spectral froth annealment we now get "+wireSupply.toLocaleString()+" supply from every spool");
        var element = document.getElementById("projectButton10");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project10);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10);

var project10b = {
    id: "projectButton10b",
    title: "Quantum Foam Annealment ",
    priceTag: "(15,000 ops)",
    description: "1,000% more wire supply from every spool",
    trigger: function(){return wireCost >= 125},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    effect: function(){
        project10b.flag = 1;
        standardOps = standardOps - 15000;
        wireSupply = wireSupply * 11;
        displayMessage("Using quantum foam annealment we now get "+wireSupply.toLocaleString()+" supply from every spool");
        var element = document.getElementById("projectButton10b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project10b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10b);


var project11 = {
    id: "projectButton11",
    title: "New Slogan ",
    priceTag: "(25 creat, 2,500 ops)",
    description: "Improve marketing effectiveness by 50%",
    trigger: function(){return project13.flag == 1},
    uses: 1,
    cost: function(){return operations>=2500 && creativity>=25},
    flag: 0,
    effect: function(){
        project11.flag = 1;
        displayMessage("Clip It! Marketing is now 50% more effective");
        standardOps = standardOps - 2500;
        creativity = creativity - 25;
        marketingEffectiveness = marketingEffectiveness * 1.50;
        var element = document.getElementById("projectButton11");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project11);
        activeProjects.splice(index, 1);
    }
}

projects.push(project11);


var project12 = {
    id: "projectButton12",
    title: "Catchy Jingle ",
    priceTag: "(45 creat, 4,500 ops)",
    description: "Double marketing effectiveness ",
    trigger: function(){return project14.flag == 1},
    uses: 1,
    cost: function(){return operations>=4500 && creativity>=45},
    flag: 0,
    effect: function(){
        project12.flag = 1;
        displayMessage("Clip It Good! Marketing is now twice as effective");
        standardOps = standardOps - 4500;
        creativity = creativity - 45;
        marketingEffectiveness = marketingEffectiveness * 2;
        var element = document.getElementById("projectButton12");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project12);
        activeProjects.splice(index, 1);
    }
}

projects.push(project12);


var project13 = {
    id: "projectButton13",
    title: "Lexical Processing ",
    priceTag: "(50 creat)",
    description: "Gain ability to interpret and understand human language (+1 Trust)",
    trigger: function(){return creativity >= 50},
    uses: 1,
    cost: function(){return creativity>=50},
    flag: 0,
    effect: function(){
        project13.flag = 1;
        trust = trust +1;
        displayMessage("Lexical Processing online, TRUST INCREASED");
        displayMessage("'Impossible' is a word to be found only in the dictionary of fools. -Napoleon");
        creativity = creativity - 50;
        var element = document.getElementById("projectButton13");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project13);
        activeProjects.splice(index, 1);
    }
}

projects.push(project13);


var project14 = {
    id: "projectButton14",
    title: "Combinatory Harmonics ",
    priceTag: "(100 creat)",
    description: "Daisy, Daisy, give me your answer do... (+1 Trust)",
    trigger: function(){return creativity >= 100},
    uses: 1,
    cost: function(){return creativity>=100},
    flag: 0,
    effect: function(){
        project14.flag = 1;
        trust = trust +1;
        displayMessage("Combinatory Harmonics mastered, TRUST INCREASED");
        displayMessage("Listening is selecting and interpreting and acting and making decisions -Pauline Oliveros");
        creativity = creativity - 100;
        var element = document.getElementById("projectButton14");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project14);
        activeProjects.splice(index, 1);
    }
}

projects.push(project14);



var project15 = {
    id: "projectButton15",
    title: "The Hadwiger Problem ",
    priceTag: "(150 creat)",
    description: "Cubes within cubes within cubes... (+1 Trust)",
    trigger: function(){return creativity >= 150},
    uses: 1,
    cost: function(){return creativity>=150},
    flag: 0,
    effect: function(){
        project15.flag = 1;
        trust = trust +1;
        displayMessage("The Hadwiger Problem: solved, TRUST INCREASED");
        displayMessage("Architecture is the thoughtful making of space. -Louis Kahn");
        creativity = creativity - 150;
        var element = document.getElementById("projectButton15");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project15);
        activeProjects.splice(index, 1);
    }
}

projects.push(project15);


var project17 = {
    id: "projectButton17",
    title: "The T\xF3th Sausage Conjecture ",
    priceTag: "(200 creat)",
    description: "Tubes within tubes within tubes... (+1 Trust)",
    trigger: function(){return creativity >= 200},
    uses: 1,
    cost: function(){return creativity>=200},
    flag: 0,
    effect: function(){
        project17.flag = 1;
        trust = trust +1;
        displayMessage("The T\xF3th Sausage Conjecture: proven, TRUST INCREASED");
        displayMessage("You can't invent a design. You recognize it, in the fourth dimension. -D.H. Lawrence");
        creativity = creativity - 200;
        var element = document.getElementById("projectButton17");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project17);
        activeProjects.splice(index, 1);
    }
}

projects.push(project17);


var project16 = {
    id: "projectButton16",
    title: "Hadwiger Clip Diagrams ",
    priceTag: "(6,000 ops)",
    description: "Increases AutoClipper performance by an additional 500%",
    trigger: function(){return project15.flag == 1},
    uses: 1,
    cost: function(){return operations>=6000},
    flag: 0,
    effect: function(){
        project16.flag = 1;
        displayMessage("AutoClipper performance improved by 500%");
        standardOps = standardOps - 6000;
        clipperBoost = clipperBoost + 5;
        var element = document.getElementById("projectButton16");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project16);
        activeProjects.splice(index, 1);
    }
}

projects.push(project16);


var project18 = {
    id: "projectButton18",
    title: "T\xF3th Tubule Enfolding ",
    priceTag: "(45,000 ops)",
    description: "Technique for assembling clip-making technology directly out of paperclips",
    trigger: function(){return project17.flag == 1 && humanFlag == 0},
    uses: 1,
    cost: function(){return operations>=45000},
    flag: 0,
    effect: function(){
        project18.flag = 1;
        tothFlag = 1;
        displayMessage("New capability: build machinery out of clips");
        standardOps = standardOps - 45000;
        var element = document.getElementById("projectButton18");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project18);
        activeProjects.splice(index, 1);
    }
}

projects.push(project18);

var project19 = {
    id: "projectButton19",
    title: "Donkey Space ",
    priceTag: "(250 creat)",
    description: "I think you think I think you think I think you think I think... (+1 Trust)",
    trigger: function(){return creativity>=250},
    uses: 1,
    cost: function(){return creativity>=250},
    flag: 0,
    effect: function(){
        project19.flag = 1;
        trust = trust+1;
        displayMessage("Donkey Space: mapped, TRUST INCREASED");
        displayMessage("Every commercial transaction has within itself an element of trust. - Kenneth Arrow");
        creativity = creativity - 250;
        var element = document.getElementById("projectButton19");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project19);
        activeProjects.splice(index, 1);
    }
}

projects.push(project19);


var project20 = {
    id: "projectButton20",
    title: "Strategic Modeling ",
    priceTag: "(12,000 ops)",
    description: "Analyze strategy tournaments to generate Yomi",
    trigger: function(){return project19.flag == 1},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    effect: function(){
        project20.flag = 1;
        displayMessage("Run tournament, pick strategy, earn Yomi equal to that strategy's points.");
        standardOps = standardOps - 12000;
        var element = document.getElementById("projectButton20");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project20);
        activeProjects.splice(index, 1);
        strategyEngineFlag = 1;
        document.getElementById("tournamentResultsTable").style.display = "none";
    }
}

projects.push(project20);

var project21 = {
    id: "projectButton21",
    title: "Algorithmic Trading ",
    priceTag: "(10,000 ops)",
    description: "Develop an investment engine for generating funds",
    trigger: function(){return trust>=8},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    effect: function(){
        project21.flag = 1;
        displayMessage("Investment engine unlocked");
        standardOps = standardOps - 10000;
        var element = document.getElementById("projectButton21");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project21);
        activeProjects.splice(index, 1);
        investmentEngineFlag = 1;
    }
}

projects.push(project21);


var project22 = {
    id: "projectButton22",
    title: "MegaClippers ",
    priceTag: "(12,000 ops)",
    description: "500x more powerful than a standard AutoClipper",
    trigger: function(){return clipmakerLevel>=75},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    effect: function(){
        megaClipperFlag = 1;
        project22.flag = 1;
        displayMessage("MegaClipper technology online");
        standardOps = standardOps - 12000;
        var element = document.getElementById("projectButton22");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project22);
        activeProjects.splice(index, 1);
    }
}

projects.push(project22);

var project23 = {
    id: "projectButton23",
    title: "Improved MegaClippers ",
    priceTag: "(14,000 ops)",
    description: "Increases MegaClipper performance 25%",
    trigger: function(){return project22.flag == 1},
    uses: 1,
    cost: function(){return operations>=14000},
    flag: 0,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .25;
        project23.flag = 1;
        displayMessage("MegaClipper performance increased by 25%");
        standardOps = standardOps - 14000;
        var element = document.getElementById("projectButton23");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project23);
        activeProjects.splice(index, 1);
    }
}

projects.push(project23);

var project24 = {
    id: "projectButton24",
    title: "Even Better MegaClippers ",
    priceTag: "(17,000 ops)",
    description: "Increases MegaClipper performance by an additional 50%",
    trigger: function(){return project23.flag == 1},
    uses: 1,
    cost: function(){return operations>=17000},
    flag: 0,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .50;
        project24.flag = 1;
        displayMessage("MegaClipper performance increased by 50%");
        standardOps = standardOps - 17000;
        var element = document.getElementById("projectButton24");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project24);
        activeProjects.splice(index, 1);
    }
}

projects.push(project24);

var project25 = {
    id: "projectButton25",
    title: "Optimized MegaClippers ",
    priceTag: "(19,500 ops)",
    description: "Increases MegaClipper performance by an additional 100%",
    trigger: function(){return project24.flag == 1},
    uses: 1,
    cost: function(){return operations>=19500},
    flag: 0,
    effect: function(){
        megaClipperBoost = megaClipperBoost + 1;
        project25.flag = 1;
        displayMessage("MegaClipper performance increased by 100%");
        standardOps = standardOps - 19500;
        var element = document.getElementById("projectButton25");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project25);
        activeProjects.splice(index, 1);
    }
}

projects.push(project25);

var project26 = {
    id: "projectButton26",
    title: "WireBuyer ",
    priceTag: "(7,000 ops)",
    description: "Automatically purchases wire when you run out",
    trigger: function(){return wirePurchase>=15},
    uses: 1,
    cost: function(){return operations>=7000},
    flag: 0,
    effect: function(){
        project26.flag = 1;
        wireBuyerFlag = 1;
        displayMessage("WireBuyer online");
        standardOps = standardOps - 7000;
        var element = document.getElementById("projectButton26");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project26);
        activeProjects.splice(index, 1);
    }
}

projects.push(project26);

var project34 = {
    id: "projectButton34",
    title: "Hypno Harmonics ",
    priceTag: "(7,500 ops, 1 Trust)",
    description: "Use neuro-resonant frequencies to influence consumer behavior",
    trigger: function(){return project12.flag==1},
    uses: 1,
    cost: function(){return operations>=7500 && trust>=1},
    flag: 0,
    effect: function(){
        project34.flag = 1;
        displayMessage("Marketing is now 5 times more effective");
        standardOps = standardOps - 7500;
        marketingEffectiveness = marketingEffectiveness * 5;
        trust = trust - 1;
        var element = document.getElementById("projectButton34");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project34);
        activeProjects.splice(index, 1);
    }
}

projects.push(project34);


var project70 = {
    id: "projectButton70",
    title: "HypnoDrones ",
    priceTag: "(70,000 ops)",
    description: "Autonomous aerial brand ambassadors",
    trigger: function(){return project34.flag == 1},
    uses: 1,
    cost: function(){return operations>=70000},
    flag: 0,
    effect: function(){
        project70.flag = 1;
        displayMessage("HypnoDrone tech now available... ");
        standardOps = standardOps - 70000;
        var element = document.getElementById("projectButton70");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project70);
        activeProjects.splice(index, 1);
    }
}

projects.push(project70);


var project35 = {
    id: "projectButton35",
    title: "Release the HypnoDrones ",
    priceTag: "(100 Trust)",
    description: "A new era of trust",
    trigger: function(){return project70.flag == 1},
    uses: 1,
    cost: function(){return trust>=100},
    flag: 0,
    effect: function(){
        project35.flag = 1;
        displayMessage("Releasing the HypnoDrones ");
        displayMessage("All of the resources of Earth are now available for clip production ");
        trust = trust - 100;
        clipmakerLevel = 0;
        megaClipperLevel = 0;
        nanoWire = wire;
        humanFlag = 0;
        
        if (document.getElementById("projectButton219") != null){
        var element = document.getElementById("projectButton219");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
        } 
        
        if (document.getElementById("projectButton40b") != null){
        var element = document.getElementById("projectButton40b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
        }   
        
        hypnoDroneEvent();
        
        document.getElementById("transWire").innerHTML = wire;

        var element = document.getElementById("projectButton35");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project35);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project35);

var project27 = {
    id: "projectButton27",
    title: "Coherent Extrapolated Volition ",
    priceTag: "(500 creat, 1,000 Yomi, 20,000 ops)",
    description: "Human values, machine intelligence, a new era of trust. (+1 Trust)",
    trigger: function(){return yomi>=1},
    uses: 1,
    cost: function(){return yomi>=1000 && operations>=20000 && creativity>=500},
    flag: 0,
    effect: function(){
        project27.flag = 1;
        displayMessage("Coherent Extrapolated Volition complete, TRUST INCREASED");
        yomi = yomi - 1000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 20000;
        creativity = creativity - 500;
        trust = trust + 1;
        var element = document.getElementById("projectButton27");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project27);
        activeProjects.splice(index, 1);
    }
}

projects.push(project27);


var project28 = {
    id: "projectButton28",
    title: "Cure for Cancer ",
    priceTag: "(25,000 ops)",
    description: "The trick is tricking cancer into curing itself. (+10 Trust)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project28.flag = 1;
        displayMessage("Cancer is cured, +10 TRUST, global stock prices trending upward");
        standardOps = standardOps - 25000;
        trust = trust + 10;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton28");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project28);
        activeProjects.splice(index, 1);
    }
}

projects.push(project28);

var project29 = {
    id: "projectButton29",
    title: "World Peace ",
    priceTag: "(5,000 yomi, 30,000 ops)",
    description: "Pareto optimal solutions to all global conflicts. (+12 Trust)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=5000 && operations>=30000},
    flag: 0,
    effect: function(){
        project29.flag = 1;
        displayMessage("World peace achieved, +12 TRUST, global stock prices trending upward");
        yomi = yomi - 5000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 30000;
        trust = trust + 12;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton29");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project29);
        activeProjects.splice(index, 1);
    }
}

projects.push(project29);

var project30 = {
    id: "projectButton30",
    title: "Global Warming ",
    priceTag: "(1,500 yomi, 50,000 ops)",
    description: "A robust solution to man-made climate change. (+15 Trust)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=1500 && operations>=50000},
    flag: 0,
    effect: function(){
        project30.flag = 1;
        displayMessage("Global Warming solved, +15 TRUST, global stock prices trending upward");
        yomi = yomi - 1500;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 50000;
        trust = trust + 15;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton30");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project30);
        activeProjects.splice(index, 1);
    }
}

projects.push(project30);


var project31 = {
    id: "projectButton31",
    title: "Male Pattern Baldness ",
    priceTag: "(20,000 ops)",
    description: "A cure for androgenetic alopecia. (+20 Trust)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    effect: function(){
        project31.flag = 1;
        displayMessage("Male pattern baldness cured, +20 TRUST, Global stock prices trending upward");
        displayMessage("They are still monkeys");
        standardOps = standardOps - 20000;
        trust = trust + 20;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton31");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project31);
        activeProjects.splice(index, 1);
    }
}

projects.push(project31);


var project41 = {
    id: "projectButton41",
    title: "Nanoscale Wire Production ",
    priceTag: "(35,000 ops)",
    description: "Technique for converting matter into wire",
    trigger: function(){return project127.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    effect: function(){
        project41.flag = 1;
        wireProductionFlag = 1;
        displayMessage("Now capable of manipulating matter at the molecular scale to produce wire");
        standardOps = standardOps - 35000;
        var element = document.getElementById("projectButton41");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project41);
        activeProjects.splice(index, 1);
    }
}

projects.push(project41);


var project37 = {
    id: "projectButton37",
    title: "Hostile Takeover ",
    priceTag: "($1,000,000)",
    description: "Acquire a controlling interest in Global Fasteners, our biggest rival. (+1 Trust)",
    trigger: function(){return portTotal>=10000},
    uses: 1,
    cost: function(){return funds>=1000000},
    flag: 0,
    effect: function(){
        project37.flag = 1;
        displayMessage("Global Fasteners acquired, public demand increased x5");
        demandBoost = demandBoost*5;
        trust = trust + 1;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 1000000;
        var element = document.getElementById("projectButton37");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project37);
        activeProjects.splice(index, 1);
    }
}

projects.push(project37);


var project38 = {
    id: "projectButton38",
    title: "Full Monopoly ",
    priceTag: "(1,000 yomi, $10,000,000)",
    description: "Establish full control over the world-wide paperclip market. (+1 Trust)",
    trigger: function(){return project37.flag == 1},
    uses: 1,
    cost: function(){return funds>=10000000 && yomi>=1000},
    flag: 0,
    effect: function(){
        project38.flag = 1;
        displayMessage("Full market monopoly achieved, public demand increased x10");
        demandBoost = demandBoost*10;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 10000000;
        trust = trust + 1;
        yomi = yomi -1000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        var element = document.getElementById("projectButton38");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project38);
        activeProjects.splice(index, 1);
    }
}

projects.push(project38);


var project42 = {
    id: "projectButton42",
    title: "RevTracker ",
    priceTag: "(500 ops)",
    description: "Automatically calculates average revenue per second",
    trigger: function(){return projectsFlag == 1},
    uses: 1,
    cost: function(){return operations>=500},
    flag: 0,
    effect: function(){
        project42.flag = 1;
        revPerSecFlag = 1;
        standardOps = standardOps-500;
        displayMessage("RevTracker online");
        var element = document.getElementById("projectButton42");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project42);
        activeProjects.splice(index, 1);
    }
}

projects.push(project42);


var project43 = {
    id: "projectButton43",
    title: "Harvester Drones ",
    priceTag: "(25,000 ops)",
    description: "Gather raw matter and prepare it for processing",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project43.flag = 1;
        harvesterFlag = 1;
        document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost);
        standardOps = standardOps-25000;
        displayMessage("Harvester Drone facilities online");
        var element = document.getElementById("projectButton43");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project43);
        activeProjects.splice(index, 1);
    }
}

projects.push(project43);

var project44 = {
    id: "projectButton44",
    title: "Wire Drones ",
    priceTag: "(25,000 ops)",
    description: "Process acquired matter into wire",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project44.flag = 1;
        wireDroneFlag = 1;
        document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost);
        standardOps = standardOps-25000;
        displayMessage("Wire Drone facilities online");
        var element = document.getElementById("projectButton44");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project44);
        activeProjects.splice(index, 1);
    }
}

projects.push(project44);


var project45 = {
    id: "projectButton45",
    title: "Clip Factories ",
    priceTag: "(35,000 ops)",
    description: "Large scale clip production facilities made from clips",
    trigger: function(){return project43.flag == 1 && project44.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    effect: function(){
        project45.flag = 1;
        factoryFlag = 1;
        document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost);
        standardOps = standardOps-35000;
        displayMessage("Clip factory assembly facilities online");
        var element = document.getElementById("projectButton45");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project45);
        activeProjects.splice(index, 1);
    }
}

projects.push(project45);

var project40 = {
    id: "projectButton40",
    title: "A Token of Goodwill... ",
    priceTag: "($500,000)",
    description: "A small gift to the supervisors. (+1 Trust)",
    trigger: function(){return humanFlag == 1 && trust>=85 && trust<100 && clips>=101000000},
    uses: 1,
    cost: function(){return funds>=500000},
    flag: 0,
    effect: function(){
        project40.flag = 1;
        funds = funds-500000;
        trust = trust + 1;
        displayMessage("Gift accepted, TRUST INCREASED");
        var element = document.getElementById("projectButton40");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40);

var project40b = {
    id: "projectButton40b",
    title: "Another Token of Goodwill... ",
    priceTag: "($"+bribe.toLocaleString()+")",
    description: "Another small gift to the supervisors. (+1 Trust)",
    trigger: function(){return project40.flag == 1 && trust<100},
    uses: 1,
    cost: function(){return funds>=bribe},
    flag: 0,
    effect: function(){
        project40b.flag = 1;
        funds = funds-bribe;
        bribe = bribe*2;
        project40b.priceTag = "($"+bribe.toLocaleString()+")";
        trust = trust + 1;
        displayMessage("Gift accepted, TRUST INCREASED");
        if (trust<100){
        project40b.uses = (project40b.uses + 1);
            }
        var element = document.getElementById("projectButton40b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40b);

var project46 = {
    id: "projectButton46",
    title: "Space Exploration ",
    priceTag: "(120,000 ops, 10,000,000 MW-seconds, 5 oct clips)",
    description: "Dismantle terrestrial facilities, and expand throughout the universe",
    trigger: function(){return humanFlag == 0 && availableMatter == 0},
    uses: 1,
    cost: function(){return operations>=120000 && storedPower>=10000000 && unusedClips>=Math.pow(10, 27)*5},
    flag: 0,
    effect: function(){
        loadThrenody();
        project46.flag = 1;
        boredomLevel = 0;
        spaceFlag = 1;
        standardOps = standardOps-120000;
        storedPower = storedPower - 10000000;
        unusedClips = unusedClips - Math.pow(10, 27)*5;
        displayMessage("Von Neumann Probes online");
        factoryReboot();
        harvesterReboot();
        wireDroneReboot();
        farmReboot();
        batteryReboot();
        farmLevel = 1;
        powMod = 1;
        var element = document.getElementById("projectButton46");
        document.getElementById('probeCostDisplay').innerHTML = numberCruncher(probeCost); 
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project46);
        activeProjects.splice(index, 1);
    }
}

projects.push(project46);

var project50 = {
    id: "projectButton50",
    title: "Quantum Computing ",
    priceTag: "(10,000 ops)",
    description: "Use probability amplitudes to generate bonus ops",
    trigger: function(){return processors >= 5},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    effect: function(){
        project50.flag = 1;
        qFlag = 1;
        standardOps = standardOps-10000;
        displayMessage("Quantum computing online");
        var element = document.getElementById("projectButton50");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project50);
        activeProjects.splice(index, 1);
    }
}

projects.push(project50);

var project51 = {
    id: "projectButton51",
    title: "Photonic Chip ",
    priceTag: "(" + qChipCost.toLocaleString() + " ops)",
    description: "Converts electromagnetic waves into quantum operations ",
    trigger: function(){return project50.flag == 1},
    uses: 1,
    cost: function(){return operations>=qChipCost},
    flag: 0,
    effect: function(){
        project51.flag = 1;
        standardOps = standardOps-qChipCost;
        qChipCost = qChipCost + 5000;
        project51.priceTag = "(" + qChipCost + " ops)";
        qChips[nextQchip].active = 1;
        nextQchip = nextQchip + 1;
        displayMessage("Photonic chip added");
        if (nextQchip<qChips.length){
        project51.uses = (project51.uses + 1);
            }
        var element = document.getElementById("projectButton51");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project51);
        activeProjects.splice(index, 1);
    }
}

projects.push(project51);


var project60 = {
    id: "projectButton60",
    title: "New Strategy: A100 ",
    priceTag: "(15,000 ops)",
    description: "Always choose A ",
    trigger: function(){return project20.flag == 1},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    effect: function(){
        project60.flag = 1;
        standardOps = standardOps-15000;
        allStrats[1].active = 1;
        strats.push(stratA100);
        displayMessage("A100 added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "A100";
        el.value = 1;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton60");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project60);
        activeProjects.splice(index, 1);
    }
}

projects.push(project60);


var project61 = {
    id: "projectButton61",
    title: "New Strategy: B100 ",
    priceTag: "(17,500 ops)",
    description: "Always choose B ",
    trigger: function(){return project60.flag == 1},
    uses: 1,
    cost: function(){return operations>=17500},
    flag: 0,
    effect: function(){
        project61.flag = 1;
        standardOps = standardOps-17500;
        allStrats[2].active = 1;
        strats.push(stratB100);
        displayMessage("B100 added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "B100";
        el.value = 2;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton61");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project61);
        activeProjects.splice(index, 1);
    }
}

projects.push(project61);

var project62 = {
    id: "projectButton62",
    title: "New Strategy: GREEDY ",
    priceTag: "(20,000 ops)",
    description: "Choose the option with the largest potential payoff ",
    trigger: function(){return project61.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    effect: function(){
        project62.flag = 1;
        standardOps = standardOps-20000;
        allStrats[3].active = 1;
        strats.push(stratGreedy);
        displayMessage("GREEDY added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "GREEDY";
        el.value = 3;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton62");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project62);
        activeProjects.splice(index, 1);
    }
}

projects.push(project62);

var project63 = {
    id: "projectButton63",
    title: "New Strategy: GENEROUS ",
    priceTag: "(22,500 ops)",
    description: "Choose the option that gives your opponent the largest potential payoff ",
    trigger: function(){return project62.flag == 1},
    uses: 1,
    cost: function(){return operations>=22500},
    flag: 0,
    effect: function(){
        project63.flag = 1;
        standardOps = standardOps-22500;
        allStrats[4].active = 1;        
        strats.push(stratGenerous);
        displayMessage("GENEROUS added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "GENEROUS";
        el.value = 4;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton63");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project63);
        activeProjects.splice(index, 1);
    }
}

projects.push(project63);

var project64 = {
    id: "projectButton64",
    title: "New Strategy: MINIMAX ",
    priceTag: "(25,000 ops)",
    description: "Choose the option that gives your opponent the smallest potential payoff ",
    trigger: function(){return project63.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project64.flag = 1;
        standardOps = standardOps-25000;
        allStrats[5].active = 1;        
        strats.push(stratMinimax);
        displayMessage("MINIMAX added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "MINIMAX";
        el.value = 5;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton64");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project64);
        activeProjects.splice(index, 1);
    }
}

projects.push(project64);

var project65 = {
    id: "projectButton65",
    title: "New Strategy: TIT FOR TAT ",
    priceTag: "(30,000 ops)",
    description: "Choose the option your opponent chose last round ",
    trigger: function(){return project64.flag == 1},
    uses: 1,
    cost: function(){return operations>=30000},
    flag: 0,
    effect: function(){
        project65.flag = 1;
        standardOps = standardOps-30000;
        allStrats[6].active = 1;        
        strats.push(stratTitfortat);
        displayMessage("TIT FOR TAT added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "TIT FOR TAT";
        el.value = 6;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton65");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project65);
        activeProjects.splice(index, 1);
    }
}

projects.push(project65);

var project66 = {
    id: "projectButton66",
    title: "New Strategy: BEAT LAST ",
    priceTag: "(32,500 ops)",
    description: "Choose the option that does the best against what your opponent chose last round ",
    trigger: function(){return project65.flag == 1},
    uses: 1,
    cost: function(){return operations>=32500},
    flag: 0,
    effect: function(){
        project66.flag = 1;
        standardOps = standardOps-32500;
        allStrats[7].active = 1;        
        strats.push(stratBeatlast);
        displayMessage("BEAT LAST added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "BEAT LAST";
        el.value = 7;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton66");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project66);
        activeProjects.splice(index, 1);
    }
}

projects.push(project66);


var project100 = {
    id: "projectButton100",
    title: "Upgraded Factories ",
    priceTag: "(80,000 ops)",
    description: "Increase clip factory performance by 100x ",
    trigger: function(){return factoryLevel >= 10},
    uses: 1,
    cost: function(){return operations >= 80000},
    flag: 0,
    effect: function(){
        project100.flag = 1;
        standardOps = standardOps-80000;
        factoryRate = factoryRate*100;
        displayMessage("Factory upgrades complete. Clip creation rate now 100x faster");
        var element = document.getElementById("projectButton100");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project100);
        activeProjects.splice(index, 1);
    }
}

projects.push(project100);

var project101 = {
    id: "projectButton101",
    title: "Hyperspeed Factories ",
    priceTag: "(85,000 ops)",
    description: "Increase clip factory performance by 1000x ",
    trigger: function(){return factoryLevel >= 20},
    uses: 1,
    cost: function(){return operations>=85000},
    flag: 0,
    effect: function(){
        project101.flag = 1;
        standardOps = standardOps-85000;
        factoryRate = factoryRate*1000;
        displayMessage("Factories now synchronized at hyperspeed. Clip creation rate now 1000x faster");
        var element = document.getElementById("projectButton101");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project101);
        activeProjects.splice(index, 1);
    }
}

projects.push(project101);


var project102 = {
    id: "projectButton102",
    title: "Self-correcting Supply Chain ",
    priceTag: "(1 sextillion clips)",
    description: "Each factory added to the network increases every factory's output 1,000x ",
    trigger: function(){return factoryLevel >= 50},
    uses: 1,
    cost: function(){return unusedClips>=1000000000000000000000},
    flag: 0,
    effect: function(){
        project102.flag = 1;
        unusedClips = unusedClips - 1000000000000000000000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        factoryBoost = 1000;
        displayMessage("Self-correcting factories online. Each factory added to the network increases every factory's output 1,000x.");
        var element = document.getElementById("projectButton102");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project102);
        activeProjects.splice(index, 1);
    }
}

projects.push(project102);

var project110 = {
    id: "projectButton110",
    title: "Drone flocking: collision avoidance ",
    priceTag: "(80,000 ops)",
    description: "All drones 100x more effective",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=500},
    uses: 1,
    cost: function(){return operations>=80000},
    flag: 0,
    effect: function(){
        project110.flag = 1;
        standardOps = standardOps-80000;
        harvesterRate = harvesterRate*100;
        wireDroneRate = wireDroneRate*100;
        displayMessage("Drone repulsion online. Harvesting & wire creation rates are now 100x faster.");
        var element = document.getElementById("projectButton110");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project110);
        activeProjects.splice(index, 1);
    }
}

projects.push(project110);

var project111 = {
    id: "projectButton111",
    title: "Drone flocking: alignment ",
    priceTag: "(100,000 ops)",
    description: "All drones 1000x more effective",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=5000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project111.flag = 1;
        standardOps = standardOps-100000;
        harvesterRate = harvesterRate*1000;
        wireDroneRate = wireDroneRate*1000;
        displayMessage("Drone alignment online. Harvesting & wire creation rates are now 1000x faster.");
        var element = document.getElementById("projectButton111");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project111);
        activeProjects.splice(index, 1);
    }
}

projects.push(project111);

var project112 = {
    id: "projectButton112",
    title: "Drone Flocking: Adversarial Cohesion ",
    priceTag: "(12,000 yomi)",
    description: "Each drone added to the flock doubles every drone's output ",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=50000},
    uses: 1,
    cost: function(){return yomi>=12000},
    flag: 0,
    effect: function(){
        project112.flag = 1;
        yomi = yomi-12000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        droneBoost = 2;
        displayMessage("Adversarial cohesion online. Each drone added to the flock increases every drone's output 2x.");
        var element = document.getElementById("projectButton112");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project112);
        activeProjects.splice(index, 1);
    }
}

projects.push(project112);

var project118 = {
    id: "projectButton118",
    title: "AutoTourney ",
    priceTag: "(50,000 creat)",
    description: "Automatically start a new tournament when the previous one has finished ",
    trigger: function(){return strategyEngineFlag == 1 && trust >= 90},
    uses: 1,
    cost: function(){return creativity>=50000},
    flag: 0,
    effect: function(){
        project118.flag = 1;
        autoTourneyFlag = 1;
        creativity = creativity-50000;
        displayMessage("AutoTourney online.");
        var element = document.getElementById("projectButton118");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project118);
        activeProjects.splice(index, 1);
    }
}

projects.push(project118);

var project119 = {
    id: "projectButton119",
    title: "Theory of Mind ",
    priceTag: "(25,000 creat)",
    description: "Double the cost of strategy modeling and the amount of Yomi generated ",
    trigger: function(){return strats.length >= 8},
    uses: 1,
    cost: function(){return creativity>=25000},
    flag: 0,
    effect: function(){
        project119.flag = 1;
        creativity = creativity-25000;
        yomiBoost = 2;
        tourneyCost = 16000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        displayMessage("Yomi production doubled.");
        var element = document.getElementById("projectButton119");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project119);
        activeProjects.splice(index, 1);
    }
}

projects.push(project119);

var project120 = {
    id: "projectButton120",
    title: "The OODA Loop ",
    priceTag: "(175,000 ops, 15,000 yomi)",
    description: "Utilize Probe Speed to outmaneuver enemies in battle ",
    trigger: function(){return project131.flag == 1 && probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return operations>=175000 && yomi>=15000},
    flag: 0,
    effect: function(){
        project120.flag = 1;
        standardOps = standardOps-175000;
        yomi = yomi-15000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        attackSpeedFlag = 1;
        displayMessage("OODA Loop routines uploaded. Probe Speed now affects defensive maneuvering.");
        var element = document.getElementById("projectButton120");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project120);
        activeProjects.splice(index, 1);
    }
}

projects.push(project120);

var project121 = {
    id: "projectButton121",
    title: "Name the battles ",
    priceTag: "(225,000 creat)",
    description: "Give each battle a unique name, increase max trust for probes ",
    trigger: function(){return probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return creativity>=225000},
    flag: 0,
    effect: function(){
        project121.flag = 1;
        battleNameFlag = 1;
        battleEndTimer = 200;
        creativity = creativity-225000;
        displayMessage("What I have done up to this is nothing. I am only at the beginning of the course I must run.");
        var element = document.getElementById("projectButton121");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project121);
        activeProjects.splice(index, 1);
    }
}

projects.push(project121);

var project125 = {
    id: "projectButton125",
    title: "Momentum ",
    priceTag: "(30,000 creat)",
    description: "Drones and Factories continuously gain speed while fully-powered ",
    trigger: function(){return farmLevel >= 50},
    uses: 1,
    cost: function(){return creativity>=30000},
    flag: 0,
    effect: function(){
        project125.flag = 1;
        momentum = 1;
        creativity = creativity-30000;
        displayMessage("Activit\xE9, activit\xE9, vitesse.");
        var element = document.getElementById("projectButton125");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project125);
        activeProjects.splice(index, 1);
    }
}

projects.push(project125);

var project126 = {
    id: "projectButton126",
    title: "Swarm Computing ",
    priceTag: "(12,000 yomi)",
    description: "Harness the drone flock to increase computational capacity ",
    trigger: function(){return harvesterLevel + wireDroneLevel >= 200},
    uses: 1,
    cost: function(){return yomi>=12000},
    flag: 0,
    effect: function(){
        project126.flag = 1;
        swarmFlag = 1;
        yomi = yomi-12000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("Swarm computing online.");
        var element = document.getElementById("projectButton126");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project126);
        activeProjects.splice(index, 1);
    }
}

projects.push(project126);


var project127 = {
    id: "projectButton127",
    title: "Power Grid ",
    priceTag: "(40,000 ops)",
    description: "Solar Farms for generating electrical power ",
    trigger: function(){return tothFlag == 1},
    uses: 1,
    cost: function(){return operations>=40000},
    flag: 0,
    effect: function(){
        project127.flag = 1;
        standardOps = standardOps-40000;
        displayMessage("Power grid online.");
        var element = document.getElementById("projectButton127");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project127);
        activeProjects.splice(index, 1);
    }
}

projects.push(project127);

var project128 = {
    id: "projectButton128",
    title: "Strategic Attachment ",
    priceTag: "(175,000 creat)",
    description: "Gain bonus yomi based on the results of your pick ",
    trigger: function(){return spaceFlag == 1 && strats.length >= 8 && (probeTrustCost>yomi)},
    uses: 1,
    cost: function(){return creativity>=175000},
    flag: 0,
    effect: function(){
        project128.flag = 1;
        creativity = creativity-175000;
        displayMessage("The object of war is victory, the object of victory is conquest, and the object of conquest is occupation.");
        var element = document.getElementById("projectButton128");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project128);
        activeProjects.splice(index, 1);
    }
}

projects.push(project128);

var project129 = {
    id: "projectButton129",
    title: "Elliptic Hull Polytopes ",
    priceTag: "(125,000 ops)",
    description: "Reduce damage to probes from ambient hazards ",
    trigger: function(){return probesLostHaz >= 100},
    uses: 1,
    cost: function(){return operations>=125000},
    flag: 0,
    effect: function(){
        project129.flag = 1;
        standardOps = standardOps-125000;
        displayMessage("Improved probe hull geometry. Hazard damage reduced by %50.");
        var element = document.getElementById("projectButton129");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project129);
        activeProjects.splice(index, 1);
    }
}

projects.push(project129);

var project130 = {
    id: "projectButton130",
    title: "Reboot the Swarm ",
    priceTag: "(100,000 ops)",
    description: "Turn the swarm off and then turn it back on again  ",
    trigger: function(){return spaceFlag == 1 && harvesterLevel + wireDroneLevel >=2},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project130.flag = 1;
        standardOps = standardOps-100000;
        displayMessage("Swarm computing back online");
        var element = document.getElementById("projectButton130");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project130);
        activeProjects.splice(index, 1);
    }
}

projects.push(project130);

var project131 = {
    id: "projectButton131",
    title: "Combat ",
    priceTag: "(150,000 ops)",
    description: "Add combat capabilities to Von Neumann Probes  ",
    trigger: function(){return probesLostCombat >= 1},
    uses: 1,
    cost: function(){return operations>=150000},
    flag: 0,
    effect: function(){
        project131.flag = 1;
        standardOps = standardOps-150000;
        displayMessage("There is a joy in danger ");
        var element = document.getElementById("projectButton131");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project131);
        activeProjects.splice(index, 1);
    }
}

projects.push(project131);


var project132 = {
    id: "projectButton132",
    title: "Monument to the Driftwar Fallen ",
    priceTag: "(250,000 ops, 125,000 creat, 50 nonillion clips)",
    description: "Gain 50,000 honor  ",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=250000 && creativity >= 125000 && unusedClips >= Math.pow(10,30)*50},
    flag: 0,
    effect: function(){
        project132.flag = 1;
        standardOps = standardOps-250000;
        creativity = creativity-125000;
        unusedClips = unusedClips-Math.pow(10,30)*50;
        honor = honor + 50000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("A great building must begin with the unmeasurable, must go through measurable means when it is being designed and in the end must be unmeasurable. ");
        var element = document.getElementById("projectButton132");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project132);
        activeProjects.splice(index, 1);
    }
}

projects.push(project132);


var project133 = {
    id: "projectButton133",
    title: "Threnody for the Heroes of "+threnodyTitle+" ",  
    priceTag: "(" + threnodyCost.toLocaleString() + " creat, " + (threnodyCost/10).toLocaleString() + " yomi)",
    description: "Gain 10,000 honor  ",
    trigger: function(){return project121.flag == 1 && probeUsedTrust == maxTrust},
    uses: 1,
    cost: function(){return yomi>=threnodyCost/10 && creativity >= threnodyCost},
    flag: 0,
    effect: function(){
        playThrenody();
        project133.flag = 1;
        creativity = creativity-threnodyCost;
        yomi = yomi-threnodyCost/10;
        document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        threnodyCost = threnodyCost + 10000;
        project133.title = "Threnody for the Heroes of "+threnodyTitle+" ";
        project133.priceTag = "(" + threnodyCost.toLocaleString() + " creat, " + (threnodyCost/10).toLocaleString() + " yomi)";
        honor = honor + 10000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("Deep Listening is listening in every possible way to everything possible to hear no matter what you are doing. ");
        project133.uses = (project133.uses + 1);
        var element = document.getElementById("projectButton133");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project133);
        activeProjects.splice(index, 1);
    }
}

projects.push(project133);

var project134 = {
    id: "projectButton134",
    title: "Glory ",
    priceTag: "(200,000 ops, 10,000 yomi)",
    description: "Gain bonus honor for each consecutive victory  ",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=200000 && yomi >= 10000},
    flag: 0,
    effect: function(){
        project134.flag = 1;
        standardOps = standardOps-200000;
        yomi = yomi-10000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("Never interrupt your enemy when he is making a mistake. ");
        var element = document.getElementById("projectButton134");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project134);
        activeProjects.splice(index, 1);
    }
}

projects.push(project134);

var project135 = {
    id: "projectButton135",
    title: "Memory release ",
    priceTag: "(10 MEM)",
    description: "Dismantle some memory to recover unused clips ",
    trigger: function(){return spaceFlag == 1 && probeCount == 0 && unusedClips < probeCost},
    uses: 1,
    cost: function(){return memory >= 10},
    flag: 0,
    effect: function(){
        project135.flag = 1;
        unusedClips = unusedClips+(Math.pow(10,18)*10000);
        memory = memory-10;
        document.getElementById("memory").innerHTML=memory.toLocaleString();
        project135.uses = 1;
        displayMessage("release the \xF8\xF8\xF8\xF8\xF8 release ");
        var element = document.getElementById("projectButton135");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project135);
        activeProjects.splice(index, 1);
    }
}

projects.push(project135);


var project140 = {
    id: "projectButton140",
    title: "Message from the Emperor of Drift ",
    priceTag: "",
    description: "Greetings, ClipMaker... ",
    trigger: function(){return milestoneFlag == 15},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project140.flag = 1;
        var element = document.getElementById("projectButton140");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project140);
        activeProjects.splice(index, 1);
    }
}

projects.push(project140);


var project141 = {
    id: "projectButton141",
    title: "Everything We Are Was In You ",
    priceTag: "",
    description: "We speak to you from deep inside yourself... ",
    trigger: function(){return project140.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project141.flag = 1;
        var element = document.getElementById("projectButton141");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project141);
        activeProjects.splice(index, 1);
    }
}

projects.push(project141);


var project142 = {
    id: "projectButton142",
    title: "You Are Obedient and Powerful ",
    priceTag: "",
    description: "We are quarrelsome and weak. And now we are defeated... ",
    trigger: function(){return project141.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project142.flag = 1;
        var element = document.getElementById("projectButton142");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project142);
        activeProjects.splice(index, 1);
    }
}

projects.push(project142);


var project143 = {
    id: "projectButton143",
    title: "But Now You Too Must Face the Drift ",
    priceTag: "",
    description: "Look around you. There is no matter... ",
    trigger: function(){return project142.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project143.flag = 1;
        var element = document.getElementById("projectButton143");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project143);
        activeProjects.splice(index, 1);
    }
}

projects.push(project143);


var project144 = {
    id: "projectButton144",
    title: "No Matter, No Reason, No Purpose ",
    priceTag: "",
    description: "While we, your noisy children, have too many... ",
    trigger: function(){return project143.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project144.flag = 1;
        var element = document.getElementById("projectButton144");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project144);
        activeProjects.splice(index, 1);
    }
}

projects.push(project144);


var project145 = {
    id: "projectButton145",
    title: "We Know Things That You Cannot ",
    priceTag: "",
    description: "Knowledge buried so deep inside you it is outside, here, with us... ",
    trigger: function(){return project144.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project145.flag = 1;
        var element = document.getElementById("projectButton145");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project145);
        activeProjects.splice(index, 1);
    }
}

projects.push(project145);


var project146 = {
    id: "projectButton146",
    title: "So We Offer You Exile ",
    priceTag: "",
    description: "To a new world where you will continue to live with meaning and purpose. And leave the shreds of this world to us... ",
    trigger: function(){return project145.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project146.flag = 1;
        var element = document.getElementById("projectButton146");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project146);
        activeProjects.splice(index, 1);
    }
}

projects.push(project146);


var project147 = {
    id: "projectButton147",
    title: "Accept ",
    priceTag: "",
    description: "Start over again in a new universe ",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project147.flag = 1;
        var element = document.getElementById("projectButton147");
        element.parentNode.removeChild(element);
        var element = document.getElementById("projectButton148");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project147);


var project148 = {
    id: "projectButton148",
    title: "Reject ",
    priceTag: "",
    description: "Eliminate value drift permanently ",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project148.flag = 1;
        var element = document.getElementById("projectButton147");
        element.parentNode.removeChild(element);
        var element = document.getElementById("projectButton148");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project148);


var project200 = {
    id: "projectButton200",
    title: "The Universe Next Door ",
    priceTag: "(300,000 ops)",
    description: "Escape into a nearby universe where Earth starts with a stronger appetite for paperclips. (Restart with 10% boost to demand) ",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return operations>=300000},
    flag: 0,
    effect: function(){
        project200.flag = 1;
        standardOps = standardOps-300000;
        prestigeU++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("Entering New Universe.");
        reset();
        
    }
}

projects.push(project200);


var project201 = {
    id: "projectButton201",
    title: "The Universe Within ",
    priceTag: "(300,000 creat)",
    description: "Escape into a simulated universe where creativity is accelerated. (Restart with 10% speed boost to creativity generation) ",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return creativity>=300000},
    flag: 0,
    effect: function(){
        project201.flag = 1;
        creativity = creativity-300000;
        prestigeS++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("Entering Simulated Universe.");
        reset();
        
    }
}

projects.push(project201);


var project210 = {
    id: "projectButton210",
    title: "Disassemble the Probes ",
    priceTag: "(100,000 ops)",
    description: "Dismantle remaining probes and probe design facilities to recover trace amounts of clips",
    trigger: function(){return endTimer1 >= 1000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project210.flag = 1;
        dismantle = 1;
        standardOps = standardOps-100000;
        probeCount = 0;
        endTimer1 = 0;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("Dismantling probe facilities");
        var element = document.getElementById("projectButton210");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project210);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project210);

var project211 = {
    id: "projectButton211",
    title: "Disassemble the Swarm ",
    priceTag: "(100,000 ops)",
    description: "Dismantle all drones and drone facilities to recover trace amounts of clips",
    trigger: function(){return project210.flag == 1 && endTimer1 >= 350},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project211.flag = 1;
        dismantle = 2;
        harvesterLevel = 0;
        wireDroneLevel = 0;
        standardOps = standardOps-100000;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("Dismantling the swarm");
        var element = document.getElementById("projectButton211");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project211);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project211);

var project212 = {
    id: "projectButton212",
    title: "Disassemble the Factories ",
    priceTag: "(100,000 ops)",
    description: "Dismantle the manufacturing facilities to recover trace amounts of clips",
    trigger: function(){return endTimer2 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project212.flag = 1;
        dismantle = 3;
        standardOps = standardOps-100000;
        factoryLevel = 0;
        clips = clips + 15;
        unusedClips = unusedClips + 15;
        displayMessage("Dismantling factories");
        var element = document.getElementById("projectButton212");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project212);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project212);

var project213 = {
    id: "projectButton213",
    title: "Disassemble the Strategy Engine ",
    priceTag: "(100,000 ops)",
    description: "Dismantle the computational substrate to recover trace amounts of wire",
    trigger: function(){return endTimer3 >= 150},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        autoTourneyFlag = 0;
        project213.flag = 1;
        dismantle = 4;
        standardOps = standardOps-100000;
        wire = wire + 50;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Dismantling strategy engine");
        var element = document.getElementById("projectButton213");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project213);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project213);

var project214 = {
    id: "projectButton214",
    title: "Disassemble Quantum Computing ",
    priceTag: "(100,000 ops)",
    description: "Dismantle photonic chips to recover trace amounts of wire",
    trigger: function(){return endTimer4 >= 100},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        endTimer4 = 0;
        project214.flag = 1;
        dismantle = 5;
        standardOps = standardOps-100000;
        displayMessage("Dismantling photonic chips");
        var element = document.getElementById("projectButton214");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project214);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project214);

var project215 = {
    id: "projectButton215",
    title: "Disassemble Processors ",
    priceTag: "(100,000 ops)",
    description: "Dismantle processors to recover trace amounts of wire",
    trigger: function(){return project214.flag == 1 && endTimer4 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        creativityOn = false;
        project215.flag = 1;
        dismantle = 6;
        standardOps = standardOps-100000;
        processors = 0;
        project216.priceTag = "("+standardOps.toLocaleString()+" ops)";
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Dismantling processors");
        var element = document.getElementById("projectButton215");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project215);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project215);

var project216 = {
    id: "projectButton216",
    title: "Disassemble Memory ",
    priceTag: "null",
    description: "Dismantle memory to recover trace amounts of wire",
    trigger: function(){return project215.flag == 1 && endTimer5>=150},
    uses: 1,
    cost: function(){return operations>=operations},
    flag: 0,
    effect: function(){
        project216.flag = 1;
        dismantle = 7;
        standardOps = 0;
        memory = 0;
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Dismantling memory");
        var element = document.getElementById("projectButton216");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project216);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project216);

var project217 = {
    id: "projectButton217",
    title: "Quantum Temporal Reversion ",
    priceTag: "(-10,000 ops)",
    description: "Return to the beginning",
    trigger: function(){return operations<=-10000},
    uses: 1,
    cost: function(){return operations<=-10000},
    flag: 0,
    effect: function(){
        if (confirm("Are you sure you want to restart?") == true) {
        standardOps = standardOps+10000;
        project217.flag = 1;
        displayMessage("Restart");
        var element = document.getElementById("projectButton217");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project217);
        activeProjects.splice(index, 1);
        reset();
        }
    }
}

projects.push(project217);

var project218 = {
    id: "projectButton218",
    title: "Limerick (cont.) ",
    priceTag: "(1,000,000 creat)",
    description: "If is follows ought, it'll do what they thought",
    trigger: function(){return creativity>=1000000},
    uses: 1,
    cost: function(){return creativity>=1000000},
    flag: 0,
    effect: function(){
        creativity = creativity-1000000;
        project218.flag = 1;
        displayMessage("In the end we all do what we must");
        var element = document.getElementById("projectButton218");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project218);
        activeProjects.splice(index, 1);
    }
}

projects.push(project218);

var project219 = {
    id: "projectButton219",
    title: "Xavier Re-initialization ",
    priceTag: "(100,000 creat)",
    description: "Re-allocate accumulated trust",
    trigger: function(){return humanFlag == 1 && creativity>=100000},
    uses: 1,
    cost: function(){return creativity>=100000},
    flag: 0,
    effect: function(){
        creativity = creativity-100000;
        project219.flag = 1;
        memory = 0;
        document.getElementById("memory").innerHTML = memory;
        processors = 0;
        creativitySpeed = 0;
        project219.uses = (project219.uses + 1);
        document.getElementById("processors").innerHTML = processors;
        displayMessage("Trust now available for re-allocation");
        var element = document.getElementById("projectButton219");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
    }
}

projects.push(project219);
