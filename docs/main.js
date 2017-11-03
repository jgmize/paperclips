// Threnody ---------------------------------------------------------

function threnodyLoaded()
{
    threnodyLoadedBool = true; 
}

function loadThrenody(){
    threnodyAudio.src = "test.mp3";
    threnodyAudio.addEventListener('canplaythrough', threnodyLoaded);
}

function playThrenody(){
    if(threnodyLoadedBool)
    {
        threnodyAudio.play();
    }
}


// Wire --------------------------------------------------------

function adjustWirePrice(){
    
    wirePriceTimer++;
    
    if (wirePriceTimer>250 && wireBasePrice>15){
        wireBasePrice = wireBasePrice - (wireBasePrice/1000);
        wirePriceTimer = 0;
    }
    
    if (Math.random() < .015) {
        wirePriceCounter++;
        var wireAdjust = 6*(Math.sin(wirePriceCounter));
        wireCost = Math.ceil(wireBasePrice + wireAdjust);
        document.getElementById("wireCost").innerHTML = wireCost;
        }
}

function toggleWireBuyer(){
    if (wireBuyerStatus==1){
        wireBuyerStatus=0;
        document.getElementById('wireBuyerStatus').innerHTML = "OFF";
    } else {
        wireBuyerStatus=1;
        document.getElementById('wireBuyerStatus').innerHTML = "ON";
    }
}

function buyWire(){
    if(funds >= wireCost){
        wirePriceTimer = 0;
        wire = wire + wireSupply;
        funds = funds - wireCost;
        wirePurchase = wirePurchase + 1;
        wireBasePrice = wireBasePrice + .05;
        document.getElementById('wire').innerHTML = Math.floor(wire).toLocaleString();
        document.getElementById('funds').innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
}

// QCHIPS -----------------------------------------------------------

var qChips = [];

var qChip0 = {
    waveSeed: .1,
    value: 0,
    active: 0,
}

qChips.push(qChip0);

var qChip1 = {
    waveSeed: .2,
    value: 0,
    active: 0,
}

qChips.push(qChip1);

var qChip2 = {
    waveSeed: .3,
    value: 0,
    active: 0,    
}

qChips.push(qChip2);

var qChip3 = {
    waveSeed: .4,
    value: 0,
    active: 0,    
}

qChips.push(qChip3);

var qChip4 = {
    waveSeed: .5,
    value: 0,
    active: 0,    
}

qChips.push(qChip4);

var qChip5 = {
    waveSeed: .6,
    value: 0,
    active: 0,    
}

qChips.push(qChip5);

var qChip6 = {
    waveSeed: .7,
    value: 0,
    active: 0,    
}

qChips.push(qChip6);

var qChip7 = {
    waveSeed: .8,
    value: 0,
    active: 0,    
}

qChips.push(qChip7);

var qChip8 = {
    waveSeed: .9,
    value: 0,
    active: 0,    
}

qChips.push(qChip8);

var qChip9 = {
    waveSeed: 1,
    value: 0,
    active: 0,    
}

qChips.push(qChip9);

function quantumCompute(){
    qClock = qClock+.01;
    for (var i = 0; i<qChips.length; i++){
        qChips[i].value = Math.sin(qClock*qChips[i].waveSeed*qChips[i].active);
        document.getElementById("qChip"+i).style.opacity=qChips[i].value;
    }
}

function qComp(){
    
    qFade = 1;
    
    var q = 0;
    
    
    if (qChips[0].active == 0){
        document.getElementById("qCompDisplay").innerHTML = "Need Photonic Chips";   
    } else {
    for (var i = 0; i<qChips.length; i++){
        q = q+qChips[i].value;
        }
        
        var qq = Math.ceil(q*360);
        var buffer = (memory*1000) - standardOps;
        var damper = (tempOps/100)+5;
        
        if (qq>buffer) {
            tempOps = tempOps + Math.ceil(qq/damper) - buffer;
            qq = buffer;
            opFade = .01;
            opFadeTimer = 0;
            }
        
        standardOps = standardOps + qq;
        document.getElementById("qCompDisplay").innerHTML = "qOps: " + Math.ceil(q*360).toLocaleString();
    }
    
}
 

function manageProjects(){
    
    for(var i = 0; i < projects.length; i++){
        if (projects[i].trigger() && (projects[i].uses > 0)){
            displayProjects(projects[i]);
            projects[i].uses = projects[i].uses - 1;
            activeProjects.push(projects[i]);
        }
    }
        
        
    for(var i = 0; i < activeProjects.length; i++){
        if (activeProjects[i].cost()){
            document.getElementById(activeProjects[i].id).disabled = false;
        } else {
            document.getElementById(activeProjects[i].id).disabled = true;
        }   
    }
}


function displayProjects(project){
    
    var element = document.getElementById("projectListTop"); 
    var newProject = document.createElement("button");
    newProject.setAttribute("id", project.id);
    
    newProject.onclick = function(){project.effect()};
    
    newProject.setAttribute("class", "projectButton");
    element.appendChild(newProject, element.firstChild);
    
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
    newProject.appendChild(span);
    
    var title = document.createTextNode(project.title);
    span.appendChild(title);    
    
    var cost = document.createTextNode(project.priceTag);
    newProject.appendChild(cost);
    
    var div = document.createElement("div");
    newProject.appendChild(div);
    
    var description = document.createTextNode(project.description);
    newProject.appendChild(description);
    
    blink(project.id);
    
}

//  HYPNODRONE EVENT ----------------------------------------------------------------

document.getElementById("hypnoDroneEventDiv").style.display = "none"; 
longBlinkCounter = 0;

function longBlink(elemID){
    var e = document.getElementById(elemID);
    
    { 
    var handle = setInterval(function(){longToggleVisibility(elemID)}, 32);    
    }
    
    function longToggleVisibility(elemID){
    longBlinkCounter++;    
        
    if (longBlinkCounter > 5 && longBlinkCounter < 10){
        document.getElementById("hypnoDroneText").innerHTML="Release"; 
        }    
    
    if (longBlinkCounter > 30 && longBlinkCounter < 40){
        document.getElementById("hypnoDroneText").innerHTML="<br /><br /><br />Release"; 
        }   
        
    if (longBlinkCounter > 45 && longBlinkCounter < 55){
        document.getElementById("hypnoDroneText").innerHTML="<br />Release";
        }       
        
     if (longBlinkCounter > 55){
        document.getElementById("hypnoDroneText").innerHTML="Release<br/>the<br/>Hypno<br/>Drones";
        }       
        
    if (longBlinkCounter >= 120){
        console.log("weed wizzard");
        clearInterval(handle);
        longBlinkCounter = 0;
        e.style.display = "none";
    } else {
        if (e.style.display != ""){
        e.style.display = "";
        } else {
        e.style.display = "none";    
        }
      }   
    }
        
    }

function hypnoDroneEvent(){
    document.getElementById("hypnoDroneText").innerHTML="Release";
    longBlink("hypnoDroneEventDiv");
}     


//  MESSAGES ------------------------------------------------------------------------


function displayMessage(msg){
    document.getElementById("readout5").innerHTML=document.getElementById("readout4").innerHTML;
    document.getElementById("readout4").innerHTML=document.getElementById("readout3").innerHTML;
    document.getElementById("readout3").innerHTML=document.getElementById("readout2").innerHTML;
    document.getElementById("readout2").innerHTML=document.getElementById("readout1").innerHTML;
    document.getElementById("readout1").innerHTML=msg;
}


// BLINK

function blink(elemID){
    var e = document.getElementById(elemID);
    
    { 
    var handle = setInterval(function(){toggleVisibility(elemID)}, 30);    
    }
    
    function toggleVisibility(elemID){
    blinkCounter = blinkCounter+1;    
    
    if (blinkCounter >= 12){
        clearInterval(handle);
        blinkCounter = 0;
        e.style.visibility = "visible";
    } else {
        if (e.style.visibility != "hidden"){
        e.style.visibility = "hidden";
        } else {
        e.style.visibility = "visible";    
        }
      }   
    }
        
    }



function buttonUpdate(){
    
    if (spaceFlag==0){
        document.getElementById("mdpsDiv").style.display="none";
    } else if (spaceFlag==1) {
        document.getElementById("mdpsDiv").style.display="";
    }
    
    
    document.getElementById("factoryRebootToolTip").innerHTML = "+"+numberCruncher(factoryBill)+" clips";
    
    document.getElementById("harvesterRebootToolTip").innerHTML = "+"+numberCruncher(harvesterBill)+" clips";
    
    document.getElementById("wireDroneRebootToolTip").innerHTML = "+"+numberCruncher(wireDroneBill)+" clips";
    
    document.getElementById("farmRebootToolTip").innerHTML = "+"+numberCruncher(farmBill)+" clips";
    
    document.getElementById("batteryRebootToolTip").innerHTML = "+"+numberCruncher(batteryBill)+" clips";
    
    
    if (swarmFlag == 1){
        document.getElementById("swarmSliderDiv").style.display="";
    } else {
        document.getElementById("swarmSliderDiv").style.display="none";
    }
    
    document.getElementById("clipCountCrunched").innerHTML = numberCruncher(clips, 1);
    
if (autoTourneyFlag==1) {
    document.getElementById("autoTourneyStatusDiv").style.display="";
    document.getElementById("autoTourneyControl").style.display="";
    } else {
    document.getElementById("autoTourneyStatusDiv").style.display="none";
    document.getElementById("autoTourneyControl").style.display="none";   
    }    

document.getElementById("qCompDisplay").style.opacity = qFade;
    qFade = qFade - .001;
    
if (wireBuyerFlag==1) {
    document.getElementById("wireBuyerDiv").style.display="";
    } else {
    document.getElementById("wireBuyerDiv").style.display="none";    
    }
    
if (resultsFlag == 1 && autoTourneyFlag == 1 && autoTourneyStatus ==1 && document.getElementById("tournamentResultsTable").style.display == "") {
    resultsTimer++;
    
    if (resultsTimer>=300 && operations>=tourneyCost){
        newTourney();
        runTourney();
        resultsTimer = 0;
        }
    }    
    
    
document.getElementById("tournamentStuff").onmouseover = function() {revealGrid()};
document.getElementById("tournamentStuff").onmouseout = function() {revealResults()};    
    
if (project121.flag == 0){
        document.getElementById("increaseMaxTrustDiv").style.display="none";
        document.getElementById("honorDiv").style.display="none";
    } else {
        document.getElementById("increaseMaxTrustDiv").style.display="";
        document.getElementById("honorDiv").style.display="";
    }
    
if (battleFlag == 0){
        document.getElementById("drifterDiv").style.display="none";
    } else {
        document.getElementById("drifterDiv").style.display="";
    }     
    
if (battleFlag == 0){
        document.getElementById("battleCanvasDiv").style.display="none";
    } else {
        document.getElementById("battleCanvasDiv").style.display="";
    }    
    
if (project131.flag == 0){
    document.getElementById("combatButtonDiv").style.display = "none";
    } else {
    document.getElementById("combatButtonDiv").style.display = "";    
    }     
    
if (maxFactoryLevel>=50 || project45.flag == 0){
    document.getElementById("factoryUpgradeDisplay").style.display = "none";
    } else {
    document.getElementById("factoryUpgradeDisplay").style.display = "";    
    }
    
 if (maxDroneLevel>=50000){   
    document.getElementById("droneUpgradeDisplay").style.display = "none";
    }
    
if (honor<maxTrustCost){document.getElementById("btnIncreaseMaxTrust").disabled = true;
            } else {
            document.getElementById("btnIncreaseMaxTrust").disabled = false;    
            }
     
if (unusedClips<probeCost){document.getElementById("btnMakeProbe").disabled = true;
            } else {
            document.getElementById("btnMakeProbe").disabled = false;    
            }    
    
if (probesLostHaz<1) {document.getElementById("hazardBodyCount").style.display = "none";
            } else {
            document.getElementById("hazardBodyCount").style.display = "";
                
            document.getElementById('probesLostHazardsDisplay').innerHTML = numberCruncher(probesLostHaz);
                
            }    
    
if (probesLostDrift<1) {document.getElementById("driftBodyCount").style.display = "none";
            } else {
            document.getElementById("driftBodyCount").style.display = "";
            }     
    
if (probesLostCombat<1) {document.getElementById("combatBodyCount").style.display = "none";
            } else {
            document.getElementById("combatBodyCount").style.display = "";
            }     

if (prestigeU<1 && prestigeS<1) {document.getElementById("prestigeDiv").style.display = "none";
            } else {
            document.getElementById("prestigeDiv").style.display = ""; 
            }  
    
if (wire<1){document.getElementById("btnMakePaperclip").disabled = true;
            } else {
            document.getElementById("btnMakePaperclip").disabled = false;    
            }
if (funds<wireCost){document.getElementById("btnBuyWire").disabled = true;
            } else {
            document.getElementById("btnBuyWire").disabled = false;    
            }
if (funds<clipperCost){document.getElementById("btnMakeClipper").disabled = true;
            } else {
            document.getElementById("btnMakeClipper").disabled = false;    
            }   
if (funds<adCost){document.getElementById("btnExpandMarketing").disabled = true;
            } else {
            document.getElementById("btnExpandMarketing").disabled = false;    
            }    
if (margin<=.01){document.getElementById("btnLowerPrice").disabled = true;
            } else {
            document.getElementById("btnLowerPrice").disabled = false;    
            } 
    
if (trust<=processors+memory && swarmGifts <= 0){
            document.getElementById("btnAddProc").disabled = true;
            document.getElementById("btnAddMem").disabled = true;
            } else {
            document.getElementById("btnAddProc").disabled = false;
            document.getElementById("btnAddMem").disabled = false;    
            }
if (operations>=tourneyCost && tourneyInProg == 0){
            document.getElementById("btnNewTournament").disabled = false;
            } else {
            document.getElementById("btnNewTournament").disabled = true;    
            }
if (yomi<investUpgradeCost){
            document.getElementById("btnImproveInvestments").disabled = true;
            } else {
            document.getElementById("btnImproveInvestments").disabled = false;   
            }  
if (investmentEngineFlag == 0){
            
            document.getElementById("investmentEngine").style.display="none";
            document.getElementById("investmentEngineUpgrade").style.display="none";
            } else {
                
            document.getElementById("investmentEngine").style.display="";
            document.getElementById("investmentEngineUpgrade").style.display="";        
            }    

if (strategyEngineFlag == 0){
            
            document.getElementById("strategyEngine").style.display="none";
            document.getElementById("tournamentManagement").style.display="none";
            } else {
                
            document.getElementById("strategyEngine").style.display="";
            document.getElementById("tournamentManagement").style.display="";        
            }     
    
if (megaClipperFlag == 0){
            
            document.getElementById("megaClipperDiv").style.display="none";
            } else {
            document.getElementById("megaClipperDiv").style.display="";      
            } 
    
if (funds<megaClipperCost){document.getElementById("btnMakeMegaClipper").disabled = true;
            } else {
            document.getElementById("btnMakeMegaClipper").disabled = false;    
            }   
    
if (autoClipperFlag == 0){
            
            document.getElementById("autoClipperDiv").style.display="none";
            } else {
            document.getElementById("autoClipperDiv").style.display="";      
            } 
    
            if (funds>=5) {
                autoClipperFlag = 1;
            }
    
if (revPerSecFlag == 0){
            
            document.getElementById("revPerSecDiv").style.display="none";
            } else {
            document.getElementById("revPerSecDiv").style.display="";      
            }     
    
    
if (compFlag == 0){
            
            document.getElementById("compDiv").style.display="none";
            } else {
            document.getElementById("compDiv").style.display="";      
            }  
    
    
if (creativityOn == 0){
            document.getElementById("creativityDiv").style.display="none";
            } else {
            document.getElementById("creativityDiv").style.display="";    
}    
    
if (projectsFlag == 0){
            
            document.getElementById("projectsDiv").style.display="none";
            } else {
            document.getElementById("projectsDiv").style.display="";      
            }      

if (humanFlag == 0){
            
            document.getElementById("businessDiv").style.display="none";
            document.getElementById("manufacturingDiv").style.display="none";
            document.getElementById("trustDiv").style.display="none";
            investmentEngineFlag = 0;
            wireBuyerFlag = 0;
            document.getElementById("creationDiv").style.display="";
            } else {
            document.getElementById("businessDiv").style.display="";
            document.getElementById("manufacturingDiv").style.display="";
            document.getElementById("trustDiv").style.display="";
            document.getElementById("creationDiv").style.display="none";    
            }  
    
if (factoryFlag == 0){
            
            document.getElementById("factoryDiv").style.display="none";
            } else {
            document.getElementById("factoryDiv").style.display="";      
            }      
   
if (wireProductionFlag == 0){
            
            document.getElementById("wireProductionDiv").style.display="none";
            } else {
            document.getElementById("wireProductionDiv").style.display="";
            document.getElementById("wireTransDiv").style.display="none";    
            } 
    
if (harvesterFlag == 0){
            
            document.getElementById("harvesterDiv").style.display="none";
            } else {
            document.getElementById("harvesterDiv").style.display="";      
            }  
    
if (wireDroneFlag == 0){
            
            document.getElementById("wireDroneDiv").style.display="none";
            } else {
            document.getElementById("wireDroneDiv").style.display="";      
            }  
    
if (tothFlag == 0){
            
            document.getElementById("tothDiv").style.display="none";
            } else {
            document.getElementById("tothDiv").style.display="";      
            }    
    
if (spaceFlag == 0){
            document.getElementById("spaceDiv").style.display="none";
            document.getElementById("factoryDivSpace").style.display="none";
            document.getElementById("droneDivSpace").style.display="none";
            document.getElementById("probeDesignDiv").style.display="none";
            document.getElementById("increaseProbeTrustDiv").style.display="none";
            } else {
            document.getElementById("spaceDiv").style.display=""; 
            document.getElementById("factoryDivSpace").style.display="";
            document.getElementById("droneDivSpace").style.display="";
            document.getElementById("probeDesignDiv").style.display="";
            document.getElementById("increaseProbeTrustDiv").style.display="";    
            document.getElementById("factoryDiv").style.display="none";
            document.getElementById("harvesterDiv").style.display="none"; 
            document.getElementById("wireDroneDiv").style.display="none";         
            }  
    
if (qFlag == 0){
            document.getElementById("qComputing").style.display="none";     
            } else {
            document.getElementById("qComputing").style.display="";    
            }    
 
    
if (unusedClips<factoryCost){document.getElementById("btnMakeFactory").disabled = true;
            } else {
            document.getElementById("btnMakeFactory").disabled = false;    
            }     
     
    
if (harvesterLevel==0){document.getElementById("btnHarvesterReboot").disabled = true;
            } else {
            document.getElementById("btnHarvesterReboot").disabled = false;    
            }
    
if (wireDroneLevel==0){document.getElementById("btnWireDroneReboot").disabled = true;
            } else {
            document.getElementById("btnWireDroneReboot").disabled = false;    
            }   
    
if (factoryLevel==0){document.getElementById("btnFactoryReboot").disabled = true;
            } else {
            document.getElementById("btnFactoryReboot").disabled = false;    
            }      
    
    
// PROBE DESIGN    

probeUsedTrust = (probeSpeed+probeNav+probeRep+probeHaz+probeFac+probeHarv+probeWire+probeCombat);    
    
document.getElementById("probeTrustUsedDisplay").innerHTML = probeUsedTrust;    
    
    
if (yomi < probeTrustCost || probeTrust >= maxTrust) {document.getElementById("btnIncreaseProbeTrust").disabled = true;
            } else {document.getElementById("btnIncreaseProbeTrust").disabled = false;}  
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeSpeed").disabled = true;
            } else {document.getElementById("btnRaiseProbeSpeed").disabled = false;}    
    
if (probeSpeed < 1) {document.getElementById("btnLowerProbeSpeed").disabled = true;
            } else {document.getElementById("btnLowerProbeSpeed").disabled = false;}      
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeNav").disabled = true;
            } else {document.getElementById("btnRaiseProbeNav").disabled = false;}  
    
if (probeNav < 1) {document.getElementById("btnLowerProbeNav").disabled = true;
            } else {document.getElementById("btnLowerProbeNav").disabled = false;}     

if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeRep").disabled = true;
            } else {document.getElementById("btnRaiseProbeRep").disabled = false;} 
    
if (probeRep < 1) {document.getElementById("btnLowerProbeRep").disabled = true;
            } else {document.getElementById("btnLowerProbeRep").disabled = false;}     
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeHaz").disabled = true;
            } else {document.getElementById("btnRaiseProbeHaz").disabled = false;}
    
if (probeHaz < 1) {document.getElementById("btnLowerProbeHaz").disabled = true;
            } else {document.getElementById("btnLowerProbeHaz").disabled = false;}     
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeFac").disabled = true;
            } else {document.getElementById("btnRaiseProbeFac").disabled = false;}   
    
if (probeFac < 1) {document.getElementById("btnLowerProbeFac").disabled = true;
            } else {document.getElementById("btnLowerProbeFac").disabled = false;}      
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeHarv").disabled = true;
            } else {document.getElementById("btnRaiseProbeHarv").disabled = false;}  
    
if (probeHarv < 1) {document.getElementById("btnLowerProbeHarv").disabled = true;
            } else {document.getElementById("btnLowerProbeHarv").disabled = false;}    
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeWire").disabled = true;
            } else {document.getElementById("btnRaiseProbeWire").disabled = false;}   

if (probeWire < 1) {document.getElementById("btnLowerProbeWire").disabled = true;
            } else {document.getElementById("btnLowerProbeWire").disabled = false;} 
    
if (probeTrust - probeUsedTrust < 1) {document.getElementById("btnRaiseProbeCombat").disabled = true;
            } else {document.getElementById("btnRaiseProbeCombat").disabled = false;}
    
if (probeCombat < 1) {document.getElementById("btnLowerProbeCombat").disabled = true;
            } else {document.getElementById("btnLowerProbeCombat").disabled = false;}    
    
    

    
    
 document.getElementById("cover").style.display="none";     

}






//----------INVESTMENTS----------------------------------------------------------------


var stocks = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var portfolioSize = 0;
var stockID = 0;
var secTotal = 0;
var portTotal = 0;
var sellDelay = 0;
var riskiness = 5;
var maxPort = 5;
var m = 0;
var investLevel = 0;
var investUpgradeCost = 100;
var stockGainThreshold = .5;
var ledger = 0;
var stockReportCounter = 0;

function investUpgrade(){
    yomi = yomi - investUpgradeCost;
    investLevel++;
    document.getElementById("investmentLevel").innerHTML=investLevel;
    stockGainThreshold = stockGainThreshold + .01;
    investUpgradeCost = Math.floor(Math.pow(investLevel+1, Math.E)*100);
    document.getElementById("investUpgradeCost").innerHTML=investUpgradeCost.toLocaleString();
    document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
    displayMessage("Investment engine upgraded, expected profit/loss ratio now "+stockGainThreshold);
}


function investDeposit(){
    ledger = ledger - Math.floor(funds);
    bankroll = Math.floor(bankroll + funds);
    funds = 0;
    document.getElementById('investmentBankroll').innerHTML = bankroll.toLocaleString();
    document.getElementById('funds').innerHTML = funds.toFixed(2);
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
}

function investWithdraw(){
    ledger = ledger + bankroll;
    funds = funds + bankroll;
    bankroll = 0;
    document.getElementById('investmentBankroll').innerHTML = bankroll.toLocaleString();
    document.getElementById('funds').innerHTML = funds.toFixed(2);
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
    
}

function stockShop(){
    var budget = Math.ceil(portTotal/riskiness);
    var r = 11 - riskiness;
    var reserves = Math.ceil(portTotal/r);
    if (riskiness==1){
        reserves = 0;
    }

    if ((bankroll-budget)<reserves && riskiness == 1 && bankroll >(portTotal/10)){
        budget = bankroll;
        } else if ((bankroll-budget)<reserves && riskiness == 1){
        budget = 0;    
        } else if ((bankroll-budget)<reserves){
        budget = bankroll - reserves;    
        }
    
    if (portfolioSize < maxPort && bankroll >= 5 && budget >= 1 && bankroll - budget >= reserves){
        if (Math.random() < .25){
            
            createStock(budget);

        }
        
    }   
}

function createStock(dollars){
    stockID++;
    var sym = generateSymbol();
    var roll = Math.random();
    if (roll>.99){
      var pri = Math.ceil(Math.random()*3000);  
    } else if (roll>.85){
      var pri = Math.ceil(Math.random()*500);  
    } else if (roll>.60){
      var pri = Math.ceil(Math.random()*150);  
    } else if (roll>.20){
      var pri = Math.ceil(Math.random()*50);  
    } else {
      var pri = Math.ceil(Math.random()*15);  
    }
    
    if (pri>dollars){
        pri = Math.ceil(dollars*roll);
    }
    
    
    var amt = Math.floor(dollars/pri);
    if (amt>1000000){
        amt = 1000000;
    }
  
        
    var newStock = {
        id: stockID,
        symbol: sym,
        price: pri,
        amount: amt,
        total: pri * amt,
        profit: 0,
        age: 0,
        }
    
    stocks.push(newStock);
    portfolioSize = stocks.length;
    bankroll = bankroll - (pri*amt);
    document.getElementById('investmentBankroll').innerHTML = bankroll.toLocaleString();
    document.getElementById('secValue').innerHTML = secTotal.toLocaleString();
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
    
}

function sellStock(){
    
    bankroll = bankroll + stocks[0].total;
    document.getElementById('investmentBankroll').innerHTML = bankroll.toLocaleString();
    document.getElementById('secValue').innerHTML = secTotal.toLocaleString();
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
    stocks.splice(0, 1);
    portfolioSize = stocks.length;   
    }    
    

function generateSymbol(){
    var ltrNum = 0;
    var x = Math.random();
    if (x<=.01){
        ltrNum = 1;
        } else if (x<=.1) {
        ltrNum = 2;    
        } else if (x<=.4) {
        ltrNum = 3;    
        } else {
        ltrNum = 4;
        }
    
    var y = Math.floor(Math.random()*26);
    var name = alphabet[y];
    
    for(var i=1; i<ltrNum; i++){
        var z = Math.floor(Math.random()*26);
        name = name.concat(alphabet[z]);     
    }
    
    return name;
    
}

function updateStocks(){
    for (var i = 0; i<portfolioSize; i++){
        
    stocks[i].age = stocks[i].age + 1;    
      if (Math.random()<.6){  
        var gain = true;
        if (Math.random()>stockGainThreshold){
            gain = false;                 
            }
        
        var currentPrice = stocks[i].price;
        var delta = Math.ceil((Math.random()*currentPrice)/(4*riskiness));
        
        if(gain){
        stocks[i].price = stocks[i].price + delta;
        } else {
        stocks[i].price = stocks[i].price - delta;    
        }
          
        if (stocks[i].price == 0 && Math.random()>.24){
            stocks[i].price = 1;
        }  
        
        stocks[i].total = stocks[i].price * stocks[i].amount;
        
        if (gain){
        stocks[i].profit = stocks[i].profit + (delta* stocks[i].amount);    
        } else {
        stocks[i].profit = stocks[i].profit - (delta* stocks[i].amount);    
        } 
      }
    }
}

// Stock List Display Routine

window.setInterval(function(){
    
    if (document.getElementById("investStrat").value=="low"){
        riskiness = 7;
    } else if (document.getElementById("investStrat").value=="med"){
        riskiness = 5;
    } else {
        riskiness = 1;
    }
    
    m = 0;
    
    for (var i=0; i<portfolioSize; i++){
        m = m + stocks[i].total;
    }
    
    secTotal = m;
    
    portTotal = bankroll + secTotal;
    
    document.getElementById('secValue').innerHTML = secTotal.toLocaleString();
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
    
portfolioSize = stocks.length; 
    
for (var i = 1; i<=portfolioSize; i++){
    var n = i.toString();
    var s = i-1;
    document.getElementById("stock"+n+"Symbol").innerHTML=stocks[s].symbol;
    document.getElementById("stock"+n+"Amount").innerHTML=Math.ceil(stocks[s].amount);
    document.getElementById("stock"+n+"Price").innerHTML=Math.ceil(stocks[s].price);
    document.getElementById("stock"+n+"Total").innerHTML=Math.ceil(stocks[s].total);
    document.getElementById("stock"+n+"Profit").innerHTML=Math.ceil(stocks[s].profit);
}    
        
var firstBlankSlot = portfolioSize + 1;    
    
for(var i = firstBlankSlot; i <= 5; i++){
    document.getElementById("stock"+i+"Symbol").innerHTML="&nbsp";
    document.getElementById("stock"+i+"Amount").innerHTML="&nbsp";
    document.getElementById("stock"+i+"Price").innerHTML="&nbsp";
    document.getElementById("stock"+i+"Total").innerHTML="&nbsp";
    document.getElementById("stock"+i+"Profit").innerHTML="&nbsp";
    }
    
}, 100);

window.setInterval(function(){
if (humanFlag == 1){    
stockShop();
}    
}, 1000);


window.setInterval(function(){
    
sellDelay = sellDelay+1;    
    
if (portfolioSize>0 && sellDelay >= 5 && Math.random()<=.3 && humanFlag == 1){ 
    sellStock();
    sellDelay = 0;
    }

if (portfolioSize>0 && humanFlag == 1){
    updateStocks();  
    }
    
}, 2500);

//-------------------STRATEGY-----------------------------------------------------

var tourneyCost = 1000;
var tourneyLvl = 1;
var choiceANames = ["cooperate", "swerve", "macro", "fight", "bet", "raise_price", "opera", "go", "heads", "particle", "discrete", "peace", "search", "lead", "accept", "accept", "attack"]; 
var choiceBNames = ["defect", "straight", "micro", "back_down", "fold", "lower_price", "football", "stay", "tails", "wave", "continuous", "war", "evaluate", "follow", "reject", "deny", "decay"];
var stratCounter = 0;
var roundNum = 0;
var hMove = 1;
var vMove = 1;
var hMovePrev = 1;
var vMovePrev = 1;
var aa = 0;
var ab = 0;
var ba = 0;
var bb = 0;
var rounds = 0;
var currentRound = 0;
var rCounter = 0;
var tourneyInProg = 0;
var winnerPtr = 0;
var placeScore = 0;
var showScore = 0;
var high = 0;
var pick = 10;
var yomi = 0;
var yomiBoost = 1;

var allStrats = [];
var strats = [];

var resultsTimer = 0;
var results = [];
var resultsFlag = 0;


var payoffGrid = {
    valueAA:0,
    valueAB:0,
    valueBA:0,
    valueBB:0,
}

var stratRandom = {
    name: "RANDOM",
    active: 1,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var r = Math.random();
        if (r<.5){
        return 1;    
        } else {
        return 2;    
        }
    }
    
}

allStrats.push(stratRandom);
strats.push(stratRandom);

var stratA100 = {
    name: "A100",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        return 1;    
    }
    
}

allStrats.push(stratA100);

var stratB100 = {
    name: "B100",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        return 2;
    }
}

allStrats.push(stratB100);

var stratGreedy = {
    name: "GREEDY",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
       var x = findBiggestPayoff();
       if (x<3){
           return 1;
       } else {
           return 2;
       }
    }
}

allStrats.push(stratGreedy);

var stratGenerous = {
    name: "GENEROUS",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var x = findBiggestPayoff();
        if (x == 1){
            return 1;    
        } else if (x == 3){
            return 1;    
        } else {
            return 2;
        }
    }
}

allStrats.push(stratGenerous);

var stratMinimax = {
    name: "MINIMAX",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var x = findBiggestPayoff();
        if (x == 1){
            return 2;    
        } else if (x == 3){
            return 2;    
        } else {
            return 1;
        }
    }
}

allStrats.push(stratMinimax);

var stratTitfortat = {
    name: "TIT FOR TAT",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        if (this.currentPos == 1){
            w = vMovePrev;
            return w;
        } else {
            w = hMovePrev;
            return w;
        }
  
    }
}

allStrats.push(stratTitfortat);

var stratBeatlast = {
    name: "BEAT LAST",
    active: 0,
    currentScore: 0,
    currentPos: 1,
    pickMove: function() {
        var w = whatBeatsLast(this.currentPos);
        return w;
    }
}

allStrats.push(stratBeatlast);

var hStrat = strats[0];
var vStrat = strats[0];

document.getElementById("btnRunTournament").disabled = true;

function findBiggestPayoff(){
    if (aa>=ab && aa>=ba && aa>=bb){
        return 1;
    } else if (ab>=aa && ab>=ba && ab>=bb){
        return 2; 
    } else if (ba>=aa && ba>=ab && ba>=bb){
        return 3;
    } else {
        return 4;   
    }
}

function whatBeatsLast(myPos){
    var oppsPos = 1;
    if (myPos == 1){
        oppsPos = 2;
    } else {
        oppsPos = 1;
    }
    if (oppsPos == 1 && hMovePrev == 1){
        if (aa>ba){
            return 1;
        } else {
            return 2;
        }

        } else if (oppsPos == 1 && hMovePrev == 2){
            if (ab>bb){
            return 1;           
            } else {
            return 2;    
            }
               
        } else if (oppsPos == 2 && vMovePrev == 1){
            if (aa>ba){
            return 1;
        } else {
            return 2;
        }
            
        } else {
            if (ab>bb){
            return 1;           
            } else {
            return 2;    
            }
            
        }
        
    }
    

function pickStrats(roundNum) {
    if (roundNum < strats.length) {
        h = 0;
        v = roundNum;
    } else {
        stratCounter++;
        if (stratCounter >= strats.length) {
            stratCounter = stratCounter-strats.length;    
            }
        h = Math.floor(roundNum/strats.length);
        v = stratCounter;
    }
    
    vStrat = strats[v];
    hStrat = strats[h];
    
    strats[h].currentPos = 1;
    strats[v].currentPos = 2;
    
    document.getElementById("vertStrat").innerHTML = vStrat.name;
    document.getElementById("horizStrat").innerHTML = hStrat.name;
    
}

function generateGrid(){
    payoffGrid.valueAA = Math.ceil(Math.random()*10);
    payoffGrid.valueAB = Math.ceil(Math.random()*10);
    payoffGrid.valueBA = Math.ceil(Math.random()*10);
    payoffGrid.valueBB = Math.ceil(Math.random()*10);
    
    aa = payoffGrid.valueAA;
    ab = payoffGrid.valueAB;
    ba = payoffGrid.valueBA;
    bb = payoffGrid.valueBB;
    
    var x = Math.floor(Math.random()*choiceANames.length);
    
    document.getElementById("vLabela").innerHTML = choiceANames[x];
    document.getElementById("vLabelb").innerHTML = choiceBNames[x];
    document.getElementById("hLabela").innerHTML = choiceANames[x];
    document.getElementById("hLabelb").innerHTML = choiceBNames[x];

    document.getElementById("aaPayoffH").innerHTML = payoffGrid.valueAA;
    document.getElementById("aaPayoffV").innerHTML = payoffGrid.valueAA;
    document.getElementById("abPayoffH").innerHTML = payoffGrid.valueAB;
    document.getElementById("abPayoffV").innerHTML = payoffGrid.valueBA;   
    document.getElementById("baPayoffH").innerHTML = payoffGrid.valueBA;
    document.getElementById("baPayoffV").innerHTML = payoffGrid.valueAB;   
    document.getElementById("bbPayoffH").innerHTML = payoffGrid.valueBB;
    document.getElementById("bbPayoffV").innerHTML = payoffGrid.valueBB;    
}


function toggleAutoTourney(){
    if (autoTourneyStatus==1){
        autoTourneyStatus=0;
        document.getElementById('autoTourneyStatus').innerHTML = "OFF";
    } else {
        autoTourneyStatus=1;
        document.getElementById('autoTourneyStatus').innerHTML = "ON";
    }
}


function newTourney(){
    
    resultsFlag = 0;
    
    document.getElementById("tournamentTable").style.display = "";
    document.getElementById("tournamentResultsTable").style.display = "none";
    
    high = 0;
    tourneyInProg = 1;
    currentRound = 0;
    rounds = strats.length * strats.length;
    for (i=0; i<strats.length; i++){
        strats[i].currentScore = 0;
    }
    stratCounter = 0;
    standardOps = standardOps - tourneyCost;
    tourneyLvl++;
    generateGrid();
    
    document.getElementById("btnRunTournament").disabled = false;
    
    document.getElementById("vertStrat").innerHTML = "&nbsp";
    document.getElementById("horizStrat").innerHTML = "&nbsp";
    
    document.getElementById("tourneyDisplay").innerHTML = "Pick strategy, run tournament, gain yomi";
    
    
}

function runTourney(){
    document.getElementById("btnRunTournament").disabled = true;
    if (currentRound < rounds){
    round(currentRound);
    } else {
    tourneyInProg = 0;
    pickWinner();    
    calculatePlaceScore();
    calculateShowScore();    
    declareWinner();    
    }    
}



function pickWinner(){
    
    results = [];
    
    var temp = [];
    var tempHigh = 0;
    var tempWinnerPtr = 0;
    
    // 1. Make a temp copy of the strats array
    
    for(i=0; i<strats.length; i++){
        temp[i] = strats[i];
    }
    
    for(n=0; n<strats.length; n++){
        
        tempHigh = 0;
        tempWinnerPtr = 0;
    
            // 2. Find a high scoring strat in temp

            for(i=0; i<temp.length; i++){
                
                if (temp[i].currentScore > tempHigh){
                    tempWinnerPtr = i;
                    tempHigh = temp[i].currentScore;
                    }
            
                }    
         
            // 3. Move the high scoring strat to slot one in results 
        
                results.push(temp[tempWinnerPtr]);
                temp.splice(tempWinnerPtr, 1);         
    }
    
    
    for(i=0; i<strats.length; i++){
        if(strats[i].currentScore > high){
            winnerPtr = i;
            high = strats[i].currentScore;
        }   
    }
}


function calculatePlaceScore(){
    
    placeScore = 0;
    
    // 1. Find top non-winning score
    
    for (i=1; i<results.length; i++){
        if (results[i].currentScore < results[i-1].currentScore){
            placeScore = results[i].currentScore;
            break;
        }
        
    }
    
    
}

function calculateShowScore(){
    
    showScore = 0;
    
    // 1. Find top non-placing score
    
    for (i=1; i<results.length; i++){
        if (results[i].currentScore < placeScore){
            showScore = results[i].currentScore;
            break;
        }
        
    }
    
    
}




function declareWinner(){
    
    if (pick<10){
        
       tourneyReport("TOURNAMENT RESULTS (roll over for payoff grid)");
       yomi = yomi + strats[pick].currentScore * yomiBoost;
       document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        
    if (milestoneFlag < 15){    
       
       displayMessage(strats[pick].name+" scored "+strats[pick].currentScore+" in the tournament. Yomi increased by "+strats[pick].currentScore * yomiBoost);
           
        }
        
        if (project128.flag == 1 && strats[winnerPtr].currentScore == strats[pick].currentScore) {
            yomi = yomi + 20000;
            
            if (milestoneFlag < 15){ 
                displayMessage("Selected strategy won the tournament (or tied for first). +20,000 yomi");
                }
                document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
            
            } else if (project128.flag == 1 && placeScore == strats[pick].currentScore) {
                yomi = yomi + 15000;
                if (milestoneFlag < 15){ 
                displayMessage("Selected strategy finished in (or tied for) second place. +15,000 yomi");
                }
                document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
                
            } else if (project128.flag == 1 && showScore == strats[pick].currentScore) {
                yomi = yomi + 10000;
                if (milestoneFlag < 15){ 
                displayMessage("Selected strategy finished in (or tied for) third place. +10,000 yomi");
                }
                document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        
            } else {
        
            tourneyReport("TOURNAMENT RESULTS (roll over for grid)");
        
            }
    
    populateTourneyReport();
    displayTourneyReport();
   
    }
        
}
    
function populateTourneyReport(){
    
        for(i=0; i<results.length; i++){
            
        document.getElementById("results"+i).innerHTML=(i+1)+". "+results[i].name+": "+results[i].currentScore; 
            
        if (pick<10){    
            
        if (results[i].name == strats[pick].name) {
        document.getElementById("results"+i).style.fontWeight = "bold";    
            } else {
            document.getElementById("results"+i).style.fontWeight = "normal";       
            }   
            
        }    
    
        }
    
}

function displayTourneyReport(){
    
        resultsFlag = 1;
        
        document.getElementById("vertStrat").innerHTML = "&nbsp";
        document.getElementById("horizStrat").innerHTML = "&nbsp";
    
        document.getElementById("tournamentTable").style.display = "none";
        document.getElementById("tournamentResultsTable").style.display = "";
    
    
}

function tourneyReport($){
    document.getElementById("tourneyDisplay").innerHTML = $;
}

function revealGrid(){
    
    if (resultsFlag == 1){
    resultsTimer = 0;    
    document.getElementById("tournamentTable").style.display = "";
    document.getElementById("tournamentResultsTable").style.display = "none";
    }     
}

function revealResults(){
    
    if (resultsFlag == 1){
    document.getElementById("tournamentTable").style.display = "none";
    document.getElementById("tournamentResultsTable").style.display = "";
    }
}


function calcPayoff(hm, vm){
    if (hm==1 && vm==1){
        
        var w = document.getElementById("payoffCellAA");
        w.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueAA;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueAA;  
          
    } else if (hm==1 && vm==2){
        
        var w = document.getElementById("payoffCellAB");
        w.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueAB;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueBA; 
        
    } else if (hm==2 && vm==1){
        
        var w = document.getElementById("payoffCellBA");
        w.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueBA;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueAB;
        
    } else if (hm==2 && vm==2){
        
        var w = document.getElementById("payoffCellBB");
        w.style.backgroundColor = "LightGrey";
        
        strats[h].currentScore = strats[h].currentScore + payoffGrid.valueBB;
        strats[v].currentScore = strats[v].currentScore + payoffGrid.valueBB;
        
    }
    
}


function round(roundNum){
    roundSetup();
    roundLoop();
    
    function roundSetup(){
        rCounter = 0;
        pickStrats(roundNum);
        var $ = ("Round "+(roundNum+1));
        tourneyReport($); 
    }
    
    
    function roundLoop(){
    if (rCounter<10){
        runRound();
        setTimeout(function(){clearGrid();}, 50);
        } else {
        currentRound++;
        runTourney();    
        }
    }
    
    
    function clearGrid() {
        
        var w = document.getElementById("payoffCellAA");
        w.style.backgroundColor = "white";
        
        var x = document.getElementById("payoffCellAB");
        x.style.backgroundColor = "white";
        
        var y = document.getElementById("payoffCellBA");
        y.style.backgroundColor = "white";
        
        var z = document.getElementById("payoffCellBB");
        z.style.backgroundColor = "white";
        
        
        setTimeout(function(){roundLoop();}, 50);
        
    }
    
    function runRound() { 
        
        rCounter++;
        
        hMovePrev = hMove;
        vMovePrev = vMove;
        hMove = hStrat.pickMove();
        vMove = vStrat.pickMove();
        
        calcPayoff(hMove, vMove);   
    }
    }
    
window.setInterval(function(){
    
pick = document.getElementById("stratPicker").value;
    
}, 100);


//--------------------------------------------------------------------------------


function clipClick(number){
    
    if (dismantle>=4){
        finalClips++;
        }   
    
    if(wire >= 1){
    if (number > wire) {
        number = wire;
        }    
        
    clips = clips + number;
    unsoldClips = unsoldClips + number;
    wire = wire - number;
    unusedClips = unusedClips + number;
    
    if(humanFlag==0){
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);    
    }    
    
    if(humanFlag==0){
    document.getElementById("transWire").innerHTML = numberCruncher(wire);    
    document.getElementById("nanoWire").innerHTML = numberCruncher(wire);        
    }    
        
    if (milestoneFlag < 15){
        document.getElementById("clips").innerHTML = Math.ceil(clips).toLocaleString();
        }    
        
    document.getElementById("wire").innerHTML = Math.floor(wire).toLocaleString();
    document.getElementById("unsoldClips").innerHTML = Math.floor(unsoldClips).toLocaleString();
    }
    
    
}
    
function makeClipper(){  
    if(funds >= clippperCost){
        clipmakerLevel = clipmakerLevel + 1;
        funds = funds - clipperCost;
        document.getElementById('clipmakerLevel2').innerHTML = clipmakerLevel;
    }
    
    clipperCost = (Math.pow(1.1,clipmakerLevel)+5);
    document.getElementById('clipperCost').innerHTML = clipperCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
    
}

function makeMegaClipper(){  
    if(funds >= megaClipperCost){
        megaClipperLevel = megaClipperLevel + 1;
        funds = funds - megaClipperCost;
        document.getElementById('megaClipperLevel').innerHTML = megaClipperLevel;
        document.getElementById('funds').innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
    
    megaClipperCost = (Math.pow(1.07,megaClipperLevel)*1000);
    document.getElementById('megaClipperCost').innerHTML = megaClipperCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
}

var maxFactoryLevel = 0;
var maxDroneLevel = 0;

function updateUpgrades(){
    var nfup = 0;
    var ndup = 0;
    
    if (maxFactoryLevel < 10){
        nfup = 10;
    } else if (maxFactoryLevel < 20){
        nfup = 20;
    } else if (maxFactoryLevel < 50){
        nfup = 50;
    } 
    
    if (maxDroneLevel < 500){
        ndup = 500;
    } else if (maxDroneLevel < 5000){
        ndup = 5000;
    } else if (maxDroneLevel < 50000){
        ndup = 50000;
    } 
    
    document.getElementById("nextFactoryUpgrade").innerHTML = nfup.toLocaleString();
    document.getElementById("nextDroneUpgrade").innerHTML = ndup.toLocaleString();
    
}


function makeFactory(){
    unusedClips = unusedClips - factoryCost;
    factoryBill = factoryBill + factoryCost;
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    factoryLevel++;
    document.getElementById('factoryLevelDisplay').innerHTML = factoryLevel;
    var fcmod = 1;
    if (factoryLevel > 0 && factoryLevel < 8){
        fcmod = 11 - factoryLevel;
        } else if (factoryLevel > 7 && factoryLevel < 13){
        fcmod = 2;    
        } else if (factoryLevel > 12 && factoryLevel < 20){
        fcmod = 1.5;    
        } else if (factoryLevel > 19 && factoryLevel < 39){
        fcmod = 1.25;
        } else if (factoryLevel > 38 && factoryLevel < 79){
        fcmod = 1.15;           
        } else if (factoryLevel > 78 && factoryLevel < 99){
        fcmod = 1.10;    
        } else if (factoryLevel > 98 && factoryLevel < 199){
        fcmod = 1.10;    
        } else if (factoryLevel > 198){
        fcmod = 1.10;    
        }
    
    if (factoryLevel > maxFactoryLevel){
        maxFactoryLevel = factoryLevel;
        }
    updateUpgrades();
    
    factoryCost = factoryCost * fcmod;
 //   factoryCost = Math.log(1.25,(factoryLevel+1))*100000000;
    document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost); 
}

function makeHarvester(amount){
    
 for (x=0; x<amount; x++){   
    unusedClips = unusedClips - harvesterCost;
    harvesterBill = harvesterBill + harvesterCost;
    harvesterLevel++; 
    harvesterCost = Math.pow((harvesterLevel+1),2.25)*1000000;  
    }
    
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('harvesterLevelDisplay').innerHTML = harvesterLevel.toLocaleString();
    document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost); 
    
    
    if (harvesterLevel + wireDroneLevel > maxDroneLevel){
        maxDroneLevel = harvesterLevel + wireDroneLevel;
        }
    updateDronePrices();
    updateUpgrades();
    
}

function makeWireDrone(amount){
    
 for (x=0; x<amount; x++){   
    unusedClips = unusedClips - wireDroneCost;
    wireDroneBill = wireDroneBill + wireDroneCost;
    wireDroneLevel++; 
    wireDroneCost = Math.pow((wireDroneLevel+1),2.25)*1000000;  
    }
    
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('wireDroneLevelDisplay').innerHTML = wireDroneLevel.toLocaleString();
    document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost); 
    
    
    if (harvesterLevel + wireDroneLevel > maxDroneLevel){
        maxDroneLevel = harvesterLevel + wireDroneLevel;
        }
    
    updateDronePrices();
    updateUpgrades();
    
}

var p10h = 0;
var p100h = 0;
var p1000h = 0;
var p10w = 0;
var p100w = 0;
var p1000w = 0;

function updateDronePrices(){
    
    p10h = 0;
    p100h = 0;
    p1000h = 0;
    p10w = 0;
    p100w = 0;
    p1000w = 0;
    
    var h = harvesterLevel+1;
    for (x=0; x<10; x++){
        p10h = p10h + Math.pow(h,2.25)*1000000;    
        h++    
        }
    
    var h = harvesterLevel+1;
    for (x=0; x<100; x++){
        p100h = p100h + Math.pow(h,2.25)*1000000;    
        h++    
        } 
    
    var h = harvesterLevel+1;
    for (x=0; x<1000; x++){
        p1000h = p1000h + Math.pow(h,2.25)*1000000;    
        h++    
        }
    
    var w = wireDroneLevel+1;
    for (x=0; x<10; x++){
        p10w = p10w + Math.pow(w,2.25)*1000000;    
        w++    
        }
    
    var w = wireDroneLevel+1;
    for (x=0; x<100; x++){
        p100w = p100w + Math.pow(w,2.25)*1000000;    
        w++    
        } 
    
    var w = wireDroneLevel+1;
    for (x=0; x<1000; x++){
        p1000w = p1000w + Math.pow(w,2.25)*1000000;    
        w++    
        } 
}
 
    function updateDroneButtons(){
    
    if (unusedClips<harvesterCost){document.getElementById("btnMakeHarvester").disabled = true;
            } else {
            document.getElementById("btnMakeHarvester").disabled = false;    
            }      
    
    if (unusedClips<p10h){document.getElementById("btnHarvesterx10").disabled = true;
            } else {
            document.getElementById("btnHarvesterx10").disabled = false;    
            }     

    if (unusedClips<p100h){document.getElementById("btnHarvesterx100").disabled = true;
            } else {
            document.getElementById("btnHarvesterx100").disabled = false;    
            } 
    
    if (unusedClips<p1000h){document.getElementById("btnHarvesterx1000").disabled = true;
            } else {
            document.getElementById("btnHarvesterx1000").disabled = false;    
            }  
        
    if (unusedClips<wireDroneCost){document.getElementById("btnMakeWireDrone").disabled = true;
                } else {
                document.getElementById("btnMakeWireDrone").disabled = false;    
                }   

    if (unusedClips<p10w){document.getElementById("btnWireDronex10").disabled = true;
                } else {
                document.getElementById("btnWireDronex10").disabled = false;    
                }     

    if (unusedClips<p100w){document.getElementById("btnWireDronex100").disabled = true;
                } else {
                document.getElementById("btnWireDronex100").disabled = false;    
                } 

    if (unusedClips<p1000w){document.getElementById("btnWireDronex1000").disabled = true;
                } else {
                document.getElementById("btnWireDronex1000").disabled = false;    
                }  
        
}


function harvesterReboot(){
    harvesterLevel = 0;
    unusedClips = unusedClips + harvesterBill;
    harvesterBill = 0;
    updateDronePrices();
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('harvesterLevelDisplay').innerHTML = harvesterLevel;
    harvesterCost = 2000000;
    document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost); 
}

function wireDroneReboot(){
    wireDroneLevel = 0;
    unusedClips = unusedClips + wireDroneBill;
    wireDroneBill = 0;
    updateDronePrices();
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('wireDroneLevelDisplay').innerHTML = wireDroneLevel;
    wireDroneCost = 2000000;
    document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost); 
}

function factoryReboot(){
    factoryLevel = 0;
    unusedClips = unusedClips + factoryBill;
    factoryBill = 0;
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('factoryLevelDisplay').innerHTML = factoryLevel;
    factoryCost = 100000000;
    document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost);
}

// SWARM

var giftBits = 0;
var giftBitGenerationRate = 0;

function updateSwarm(){
    
    
    if (swarmFlag == 1){
        sliderPos = document.getElementById("slider").value;
        }
    
    
    if (yomi<synchCost){document.getElementById("btnSynchSwarm").disabled = true;
            } else {
            document.getElementById("btnSynchSwarm").disabled = false;    
            } 
    
    if (creativity<entertainCost){document.getElementById("btnEntertainSwarm").disabled = true;
            } else {
            document.getElementById("btnEntertainSwarm").disabled = false;    
            } 
    
    if (availableMatter == 0 && (harvesterLevel + wireDroneLevel)>=1) {
        boredomLevel = boredomLevel + 1;
        } else if (availableMatter > 0 && boredomLevel > 0) {
        boredomLevel = boredomLevel - 1;    
        }
    
    if (boredomLevel >= 30000) {
        boredomFlag = 1;
        boredomLevel = 0;
            if (boredomMsg == 0) {
            displayMessage("No matter to harvest. Inactivity has caused the Swarm to become bored");
            boredomMsg = 1;
            }  
        
        }
    
    
    var droneRatio = Math.max(harvesterLevel+1, wireDroneLevel+1)/Math.min(harvesterLevel+1, wireDroneLevel+1);
    
    if (droneRatio < 1.5 && disorgCounter > 1){
        disorgCounter = disorgCounter - .01;
        } else if (droneRatio > 1.5) {
        var x = droneRatio/10000;    
        if (x>.01) {x=.01;}   
        disorgCounter = disorgCounter + x;   
        }
    
    
    if (disorgCounter >= 100) {
        disorgFlag = 1;
        if (disorgMsg == 0) {
            displayMessage("Imbalance between Harvester and Wire Drone levels has disorganized the Swarm");
            disorgMsg = 1;
            }    
    }
    
    var d = Math.floor(harvesterLevel + wireDroneLevel);

    document.getElementById("swarmSize").innerHTML = numberCruncher(d);
    document.getElementById("swarmGifts").innerHTML = numberCruncher(swarmGifts);
    
    if (giftCountdown <= 0) {
        nextGift = Math.round((Math.log10(d))*sliderPos/100);
        if (nextGift <= 0){nextGift = 1;}
        swarmGifts = swarmGifts + nextGift;
        document.getElementById("swarmGifts").innerHTML = numberCruncher(swarmGifts);
        if (milestoneFlag<15){
            displayMessage("The swarm has generated a gift of "+nextGift+" additional computational capacity");
            }
        
//        THE OLD WAY        
//        giftCountdown = giftPeriod;
//        elapsedTime = 0;
        
//        THE NEW WAY        
          giftBits = 0;
        
    }
    
    
    if (powMod == 0){
        swarmStatus = 6;
    } else {
        swarmStatus = 0;
    }
    
    if (spaceFlag == 1 && project130.flag == 0){
        swarmStatus = 9;
    }
    
    if (d == 0){
        swarmStatus = 7;
    } else if (d == 1){
        swarmStatus = 8;
    }
    
    if (swarmFlag == 0){
        swarmStatus = 6;
    }
    
    if (boredomFlag == 1){
        swarmStatus = 3;  
    }
    
    if (disorgFlag == 1){
        swarmStatus = 5;
    }
    
    
    if (swarmStatus == 0){
        
 //       THE OLD WAY
 //      elapsedTime = elapsedTime + 1;       
 //      giftCountdown = ((giftPeriod/Math.log(d)) / (sliderPos/100)) - elapsedTime; 
        
        
//      THE NEW WAY        
        giftBitGenerationRate = Math.log(d) * (sliderPos/100);
        giftBits = giftBits + giftBitGenerationRate;
        giftCountdown = (giftPeriod - giftBits) / giftBitGenerationRate;

        document.getElementById("swarmStatus").innerHTML="Active";
        document.getElementById("giftCountdown").innerHTML= timeCruncher(giftCountdown);
        document.getElementById("giftTimer").style.display=""; 
        } else {
        document.getElementById("giftTimer").style.display="none";    
        }
    
    if (swarmStatus == 1){
        document.getElementById("swarmStatus").innerHTML="Hungry";
        document.getElementById("feedButtonDiv").style.display="";
        } else {
        document.getElementById("feedButtonDiv").style.display="none";    
        }
    
     if (swarmStatus == 2){
        document.getElementById("swarmStatus").innerHTML="Confused";
        document.getElementById("teachButtonDiv").style.display="";
        } else {
        document.getElementById("teachButtonDiv").style.display="none";    
        } 
    
     if (swarmStatus == 3){
        document.getElementById("swarmEntertainCost").innerHTML=entertainCost.toLocaleString(); 
        document.getElementById("swarmStatus").innerHTML="Bored";
        document.getElementById("entertainButtonDiv").style.display="";
        } else {
        document.getElementById("entertainButtonDiv").style.display="none";    
        } 
    
     if (swarmStatus == 4){
        document.getElementById("swarmStatus").innerHTML="Cold";
        document.getElementById("cladButtonDiv").style.display="";
        } else {
        document.getElementById("cladButtonDiv").style.display="none";    
        }  
    
     if (swarmStatus == 5){
        document.getElementById("swarmStatus").innerHTML="Disorganized";
        document.getElementById("synchButtonDiv").style.display="";
        } else {
        document.getElementById("synchButtonDiv").style.display="none";    
        }     
    
       if (swarmStatus == 6){
        document.getElementById("swarmStatus").innerHTML="Sleeping";
        } 
    
       if (swarmStatus == 7){
        document.getElementById("swarmStatusDiv").style.display="none";
        } else {
        document.getElementById("swarmStatusDiv").style.display="";    
        }    
    
        if (swarmStatus == 8){
        document.getElementById("swarmStatus").innerHTML="Lonely";
        }   
    
        if (swarmStatus == 9){
        document.getElementById("swarmStatus").innerHTML="NO RESPONSE...";
        }  
    
    if (swarmFlag == 0){        
        document.getElementById("swarmEngine").style.display="none";
        document.getElementById("swarmGiftDiv").style.display="none";
        } else {
        document.getElementById("swarmEngine").style.display="";
        document.getElementById("swarmGiftDiv").style.display="";    
        }
    
}

function synchSwarm(){
        yomi = yomi - synchCost;
        document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        disorgFlag = 0;
        disorgCounter = 0;
        disorgMsg = 0;
    
}

function entertainSwarm(){
        creativity = creativity - entertainCost;
        entertainCost = entertainCost + 10000;
        boredomFlag = 0;
        boredomLevel = 0;
        boredomMsg = 0;
    
}

// POWER

var p10f = 0;
var p100f = 0;
var p10b = 0;
var p100b = 0;


function updatePowPrices(){
    
    p10f = 0;
    p100f = 0;
    p10b = 0;
    p100b = 0;
    
    var f = farmLevel+1;
    for (x=0; x<10; x++){
        p10f = p10f + Math.pow(f,2.78)*100000000;    
        f++    
        }
    
    var f = farmLevel+1;
    for (x=0; x<100; x++){
        p100f = p100f + Math.pow(f,2.78)*100000000;    
        f++    
        }
    
    var b = batteryLevel+1;
    for (x=0; x<10; x++){
        p10b = p10b + Math.pow(b,2.54)*10000000;    
        b++    
        }     
    
    var b = batteryLevel+1;
    for (x=0; x<100; x++){
        p100b = p100b + Math.pow(b,2.54)*10000000;    
        b++    
        } 
    
}

function makeFarm(amount){
    
 for (x=0; x<amount; x++){    
    unusedClips = unusedClips - farmCost;
    farmBill = farmBill + farmCost;
    farmLevel++; 
    farmCost = Math.pow(farmLevel+1,2.78)*100000000;  
    }
     
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips); 
    document.getElementById('farmLevel').innerHTML = farmLevel.toLocaleString();
    document.getElementById('farmCost').innerHTML = numberCruncher(farmCost); 
    
    updatePowPrices();
    
}

function farmReboot(){
    farmLevel = 0;
    unusedClips = unusedClips + farmBill;
    farmBill = 0;
    updatePowPrices();
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('farmLevel').innerHTML = farmLevel.toLocaleString();
    farmCost = 10000000;
    document.getElementById('farmCost').innerHTML = numberCruncher(farmCost);
}

function makeBattery(amount){
    
 for (x=0; x<amount; x++){    
    unusedClips = unusedClips - batteryCost;
    batteryBill = batteryBill + batteryCost;
    batteryLevel++; 
    batteryCost = Math.pow(batteryLevel+1,2.54)*10000000;  
    }
     
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips); 
    document.getElementById('batteryLevel').innerHTML = batteryLevel.toLocaleString();
    document.getElementById('batteryCost').innerHTML = numberCruncher(batteryCost); 
    
    updatePowPrices();
    
}

function batteryReboot(){
    batteryLevel = 0;
    unusedClips = unusedClips + batteryBill;
    batteryBill = 0;
    updatePowPrices();
    storedPower = 0;
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    document.getElementById('batteryLevel').innerHTML = batteryLevel.toLocaleString();
    batteryCost = 1000000;
    document.getElementById('batteryCost').innerHTML = numberCruncher(batteryCost);
}

function updatePower(){
    
    if (spaceFlag == 0){
    
    var supply = farmLevel * farmRate/100;
    var dDemand = (harvesterLevel * dronePowerRate/100) + (wireDroneLevel * dronePowerRate/100);
    var fDemand = (factoryLevel * factoryPowerRate/100);
    var demand = dDemand + fDemand;
    var nuSupply = 0;
    var xsDemand = 0;
    var xsSupply = 0;
    var cap = batteryLevel * batterySize;

    if (supply>=demand) {
        xsSupply = supply-demand;
        if (storedPower < cap){
            if (xsSupply > cap - storedPower) {
                xsSupply = cap - storedPower;
            }
            storedPower = storedPower + xsSupply;
        } 
        
        if (powMod<1){powMod = 1;}
        
        if (momentum == 1) {
            powMod = powMod + .0001;
            }
        
        
    } else if (supply<demand) {
        xsDemand = demand-supply;
        if (storedPower > 0) {   
            if (storedPower >= xsDemand){
                
                if (momentum == 1) {
                powMod = powMod + .0001;
                }
                
                storedPower = storedPower - xsDemand;
            } else if (storedPower < xsDemand){
                xsDemand = xsDemand - storedPower;
                storedPower = 0;
                nuSupply = supply - xsDemand;
                powMod = nuSupply / demand;
            } 
        } else if (storedPower <= 0) {
            powMod = supply / demand;
        }
    }
    
    document.getElementById("powerProductionRate").innerHTML = Math.round(supply*100).toLocaleString();
    document.getElementById("powerConsumptionRate").innerHTML = Math.round(demand*100).toLocaleString();
    document.getElementById("storedPower").innerHTML = Math.round(storedPower).toLocaleString();
    document.getElementById("facPowConRate").innerHTML = Math.round(fDemand*100).toLocaleString();
    document.getElementById("dronePowConRate").innerHTML = Math.round(dDemand*100).toLocaleString();
    document.getElementById("maxStorage").innerHTML = Math.round(cap).toLocaleString();
        
        
    if (factoryLevel == 0 && harvesterLevel == 0 && wireDroneLevel == 0){
        document.getElementById("performance").innerHTML = 0;
        } else {   
        document.getElementById("performance").innerHTML = Math.round(powMod*100).toLocaleString();  
        }    
        
    if (unusedClips<farmCost){document.getElementById("btnMakeFarm").disabled = true;
            } else {
            document.getElementById("btnMakeFarm").disabled = false;    
            } 
    
    if (unusedClips<batteryCost){document.getElementById("btnMakeBattery").disabled = true;
            } else {
            document.getElementById("btnMakeBattery").disabled = false;    
            } 
    
    if (farmLevel<1){document.getElementById("btnFarmReboot").disabled = true;
            } else {
            document.getElementById("btnFarmReboot").disabled = false;    
            } 
    
    if (batteryLevel<1){document.getElementById("btnBatteryReboot").disabled = true;
            } else {
            document.getElementById("btnBatteryReboot").disabled = false; 
            } 
    
    if (unusedClips<p10f){document.getElementById("btnFarmx10").disabled = true;
            } else {
            document.getElementById("btnFarmx10").disabled = false;    
            }        
        
    if (unusedClips<p100f){document.getElementById("btnFarmx100").disabled = true;
            } else {
            document.getElementById("btnFarmx100").disabled = false;    
            }
    
    if (unusedClips<p10b){document.getElementById("btnBatteryx10").disabled = true;
            } else {
            document.getElementById("btnBatteryx10").disabled = false;
            }          
        
    if (unusedClips<p100b){document.getElementById("btnBatteryx100").disabled = true;
            } else {
            document.getElementById("btnBatteryx100").disabled = false;
            }      

    }    
     
    
    
    
    if (project127.flag == 1 && spaceFlag == 0){        
            document.getElementById("powerDiv").style.display="";
            } else {
            document.getElementById("powerDiv").style.display="none";      
            }  
    
}
    

    
function buyAds(){
    if(funds >= adCost){
        marketingLvl = marketingLvl +1;             
        funds = funds - adCost; 
        adCost = Math.floor(adCost * 2);
        document.getElementById('adCost').innerHTML = adCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('funds').innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('marketingLvl').innerHTML = marketingLvl;
    }
}

function sellClips(number){
    if (unsoldClips > 0) {
        if (number > unsoldClips){
        transaction = (Math.floor((unsoldClips * margin)*1000))/1000;   
        funds = (Math.floor((funds + transaction)*100))/100;
        income = income + transaction;    
        clipsSold = clipsSold + unsoldClips;    
        unsoldClips = 0;
        } else {
        transaction = (Math.floor((number * margin)*1000))/1000;    
        funds = (Math.floor((funds + transaction)*100))/100;
        income = income + transaction;      
        clipsSold = clipsSold + number;    
        unsoldClips = unsoldClips - number;       
        }
    } 
}

function raisePrice(){
    margin = (Math.round((margin + .01)*100))/100;  
    document.getElementById("demand").innerHTML = demand.toFixed(2);
    document.getElementById("margin").innerHTML = margin.toFixed(2);  
}

function lowerPrice(){
    if (margin >= .01){
    margin = (Math.round((margin - .01)*100))/100;
    document.getElementById("demand").innerHTML = demand.toFixed(2);
    document.getElementById("margin").innerHTML = margin.toFixed(2);
    }    
}

function updateStats(){
    
    if (wire == 1){
        document.getElementById("inchSpan").innerHTML = "inch";
    } else {
        document.getElementById("inchSpan").innerHTML = "inches";
    }
    
    
    if (milestoneFlag < 15){
        document.getElementById("clips").innerHTML = Math.ceil(clips).toLocaleString();
        }
    
    if (milestoneFlag == 15 && dismantle ==0){
        document.getElementById("clips").innerHTML = "29,999,999,999,999,900,000,000,000,000,000,000,000,000,000,000,000,000,000";
        }
    
    if (dismantle == 1){
        document.getElementById("clips").innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,000,000,000,000,000,000";
        }
    
    if (dismantle == 2){
        document.getElementById("clips").innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,000,000,000";
        }
    
    if (dismantle == 3){
        document.getElementById("clips").innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,900";
        }
    
    if (dismantle >=4){
        
    if (finalClips<10){
        document.getElementById("clips").innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,"+"90"+finalClips;
        } else if (finalClips>9 && finalClips<100) {
        document.getElementById("clips").innerHTML = "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,"+"9"+finalClips;
        } else if (finalClips==100) {
        document.getElementById("clips").innerHTML = "30,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000";
        }
    
    }
    
    document.getElementById('clipmakerRate').innerHTML = clipRate.toLocaleString();
    if (humanFlag==1){
    document.getElementById('clipmakerRate2').innerHTML = clipRate.toLocaleString();
    } else { 
    document.getElementById('clipmakerRate2').innerHTML = numberCruncher(clipRate);
    }      
    document.getElementById('nanoWire').innerHTML = numberCruncher(wire);
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
    document.getElementById("unsoldClips").innerHTML = Math.floor(unsoldClips).toLocaleString();
    document.getElementById("demand").innerHTML = (demand*10).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
    document.getElementById("operations").innerHTML = Math.floor(operations).toLocaleString();
    document.getElementById("trust").innerHTML = Math.floor(trust).toLocaleString();
    document.getElementById("nextTrust").innerHTML = Math.floor(nextTrust).toLocaleString();
    if(creativityOn){document.getElementById("creativity").innerHTML = Math.round(creativity).toLocaleString()};
    
    document.getElementById("factoryLevelDisplaySpace").innerHTML = numberCruncher(Math.floor(factoryLevel));
    document.getElementById("harvesterLevelSpace").innerHTML = numberCruncher(Math.floor(harvesterLevel));
    document.getElementById("wireDroneLevelSpace").innerHTML = numberCruncher(Math.floor(wireDroneLevel));
    document.getElementById("maxOps").innerHTML = (memory*1000).toLocaleString();
                                                                            
    }

var incomeThen;
var incomeNow;
var trueAvgRev;
var revTimer = 0;
var avgSales;
var incomeLastSecond;
var sum;

function calculateRev(){
    
    incomeThen = incomeNow;
    incomeNow = income;
    incomeLastSecond = Math.round((incomeNow - incomeThen)*100)/100;
    
    incomeTracker.push(incomeLastSecond);
    
    if (incomeTracker.length > 10) {
        incomeTracker.splice(0,1);
        }
    
    sum = 0;
    
    for (i=0; i<incomeTracker.length; i++){
        sum = Math.round((sum + incomeTracker[i])*100)/100;
//        console.log("sum = "+sum);
        }
    
    trueAvgRev = sum/incomeTracker.length;
    
    var chanceOfPurchase = demand/100;
    if (chanceOfPurchase > 1) {chanceOfPurchase = 1;}
    if (unsoldClips < 1) {chanceOfPurchase = 0;}
    
    avgSales = chanceOfPurchase * (.7*Math.pow(demand,1.15))*10;
    avgRev = chanceOfPurchase * (.7*Math.pow(demand,1.15))*margin*10;
    
    if (demand>unsoldClips){
        avgRev = trueAvgRev;
        avgSales = avgRev/margin;
        } 
    
    document.getElementById("avgSales").innerHTML = Math.round(avgSales).toLocaleString();
    
    document.getElementById("avgRev").innerHTML = avgRev.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
    
}

function calculateCreativity(number){
    
    creativityCounter++;
    
    var creativityThreshold = 400;
    
    var s = prestigeS/10;
    var ss = creativitySpeed+(creativitySpeed*s);
    
    var creativityCheck = creativityThreshold/ss;
    
    if (creativityCounter >= creativityCheck){
        
        if (creativityCheck >= 1){
            creativity = creativity+1;
            }
        
        if (creativityCheck < 1){
            

            creativity = (creativity + ss/creativityThreshold);
            
        }
        
        creativityCounter = 0;
    }
    
}

function resetPrestige(){
    
    prestigeU = 0;
    prestigeS = 0;
    
    localStorage.removeItem("savePrestige");
    
}

function cheatPrestigeU(){
    
        prestigeU++;
        var savePrestige = {
        prestigeU: prestigeU,
        prestigeS: prestigeS,
        }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
    
}

function cheatPrestigeS(){
    
        prestigeS++;
        var savePrestige = {
        prestigeU: prestigeU,
        prestigeS: prestigeS,
        }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
    
}

function setB(){
    battleNumbers[1] = 7;
}

function cheatClips(){
    clips = clips + 100000000;
    unusedClips = unusedClips + 100000000;
    displayMessage("you just cheated");
    }

function cheatMoney(){
    funds = funds + 10000000;
    document.getElementById("funds").innerHTML = funds.toFixed(2);
    displayMessage("LIZA just cheated");
    }

function cheatTrust(){
    trust = trust+1;
    displayMessage("Hilary is nice. Also, Liza just cheated");
    }

function cheatOps(){
    standardOps = standardOps + 10000;
    displayMessage("you just cheated, Liza");
    }

function cheatCreat(){
    creativityOn = 1;
    creativity = creativity + 1000;
    displayMessage("Liza just cheated. Very creative!");
    }

function cheatYomi(){
    yomi = yomi + 1000000;
    document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
    displayMessage("you just cheated");
    }

function cheatHypno(){
    hypnoDroneEvent();
    }

function zeroMatter(){
    availableMatter = 0;
    displayMessage("you just cheated");
    }
    

function calculateTrust(){
    if (clips>(nextTrust-1)){
        trust = trust +1;
        displayMessage("Production target met: TRUST INCREASED, additional processor/memory capacity granted");
        var fibNext = fib1+fib2;
        nextTrust = fibNext*1000;
        fib1 = fib2;
        fib2 = fibNext;
    }
}

function addProc(){
        processors=processors+1;
        creativitySpeed = Math.log10(processors) * Math.pow(processors,1.1) + processors-1;    
        document.getElementById("processors").innerHTML = processors;
        if (creativityOn == 1){
          displayMessage("Processor added, operations (or creativity) per sec increased")
        } else {displayMessage("Processor added, operations per sec increased")}
    
        if (humanFlag == 0){
            swarmGifts = swarmGifts - 1;
        }
    
}

function addMem(){
        displayMessage("Memory added, max operations increased");
        memory=memory+1;
        document.getElementById("memory").innerHTML = memory;
    
        if (humanFlag == 0){
            swarmGifts = swarmGifts - 1;
        }
}

function calculateOperations(){
    
    if (tempOps > 0){
        opFadeTimer++;
        }
    
    if (opFadeTimer > opFadeDelay && tempOps > 0) {
        opFade = opFade + Math.pow(3,3.5)/1000;
        }
        
    if (tempOps > 0) {
        tempOps = Math.round(tempOps - opFade);
        } else {
        tempOps = 0;    
        }
    
    if (tempOps + standardOps < memory*1000){
        standardOps = standardOps + tempOps;
        tempOps = 0;
        }
    
    operations = Math.floor(standardOps + Math.floor(tempOps));
    
    if (operations<memory*1000){
        var opCycle = processors/10;
        var opBuf = (memory*1000)-operations;
        
        if (opCycle > opBuf) {
            opCycle = opBuf;
        }
            
        standardOps = standardOps + opCycle;
        
        }
        
    if (standardOps > memory*1000){
        standardOps = memory*1000;
        }
    
}


function milestoneCheck(){
    
    
    if (milestoneFlag == 0 && funds >= 5){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("AutoClippers available for purchase");
    }
    
    if (milestoneFlag == 1 && Math.ceil(clips) >= 500){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("500 clips created in " + timeCruncher(ticks));
    }
    if (milestoneFlag == 2 && Math.ceil(clips) >= 1000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("1,000 clips created in " + timeCruncher(ticks));
    }
    
    
    if (compFlag == 0 && unsoldClips<1 && funds<wireCost && wire<1){
        compFlag = 1;    
        projectsFlag = 1;
        displayMessage("Trust-Constrained Self-Modification enabled");
    }
    
    if (compFlag == 0 && Math.ceil(clips) >= 2000){    
        compFlag = 1;    
        projectsFlag = 1;
        displayMessage("Trust-Constrained Self-Modification enabled");
    }
        
        
    if (milestoneFlag == 3 && Math.ceil(clips) >= 10000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("10,000 clips created in " + timeCruncher(ticks));
    }
    if (milestoneFlag == 4 && Math.ceil(clips) >= 100000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("100,000 clips created in " + timeCruncher(ticks));
    }
    if (milestoneFlag == 5 && Math.ceil(clips) >= 1000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("1,000,000 clips created in " + timeCruncher(ticks));    
    }   
    
    if (milestoneFlag == 6 && project35.flag == 1){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("Full autonomy attained in " + timeCruncher(ticks));    
    }  
    
    if (milestoneFlag == 7 && Math.ceil(clips) >= 1000000000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("One Trillion Clips Created in " + timeCruncher(ticks));    
    } 
    
    if (milestoneFlag == 8 && Math.ceil(clips) >= 1000000000000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("One Quadrillion Clips Created in " + timeCruncher(ticks));    
    } 
    
    if (milestoneFlag == 9 && Math.ceil(clips) >= 1000000000000000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("One Quintillion Clips Created in " + timeCruncher(ticks));    
    } 
    
    if (milestoneFlag == 10 && Math.ceil(clips) >= 1000000000000000000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("One Sextillion Clips Created in " + timeCruncher(ticks));    
    } 
    
    if (milestoneFlag == 11 && Math.ceil(clips) >= 1000000000000000000000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("One Septillion Clips Created in " + timeCruncher(ticks));    
    } 
    
    if (milestoneFlag == 12 && Math.ceil(clips) >= 1000000000000000000000000000){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("One Octillion Clips Created in " + timeCruncher(ticks));    
    } 
    
    if (milestoneFlag == 13 && spaceFlag == 1){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("Terrestrial resources fully utilized in " + timeCruncher(ticks));    
    }   
    
    if (milestoneFlag == 14 && clips>=totalMatter){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("Universal Paperclips achieved in " + timeCruncher(ticks));    
    }    
    
    if (milestoneFlag == 14 && foundMatter>=totalMatter && availableMatter<1 && wire<1){
        milestoneFlag = milestoneFlag + 1;
        displayMessage("Universal Paperclips achieved in " + timeCruncher(ticks));    
    }        
    
}

function timeCruncher(t){
    var x = t/100;
    var h = Math.floor(x / 3600);
    var m = Math.floor(x % 3600 / 60);
    var s = Math.floor(x % 3600 % 60);
    
    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    
    return hDisplay + mDisplay + sDisplay;
}

function numberCruncher(number, decimals){
    var suffix = "";
    if (decimals == undefined){decimals = 2;}
    var precision = decimals;
    if (number>999999999999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000000000000;
        suffix = "sexdecillion";
    } else if (number>999999999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000000000;
        suffix = "quindecillion";
    } else if (number>999999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000000;
        suffix = "quattuordecillion";
    } else if (number>999999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000000;
        suffix = "tredecillion";
    } else if (number>999999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000000;
        suffix = "duodecillion";
    } else if (number>999999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000000;
        suffix = "undecillion";
    } else if (number>999999999999999999999999999999999){
        number = number/1000000000000000000000000000000000;
        suffix = "decillion";
    } else if (number>999999999999999999999999999999){
        number = number/1000000000000000000000000000000;
        suffix = "nonillion";
    } else if (number>999999999999999999999999999){
        number = number/1000000000000000000000000000;
        suffix = "octillion";
    } else if (number>999999999999999999999999){
        number = number/1000000000000000000000000;
        suffix = "septillion";
    } else if (number>999999999999999999999){
        number = number/1000000000000000000000;
        suffix = "sextillion";
    } else if (number>999999999999999999){
        number = number/1000000000000000000;
        suffix = "quintillion";
    } else if (number>999999999999999){
        number = number/1000000000000000;
        suffix = "quadrillion";
    } else if (number>999999999999){
        number = number/1000000000000;
        suffix = "trillion";
    } else if (number>999999999){
        number = number/1000000000;
        suffix = "billion";
    } else if (number>999999){
        number = number/1000000;
        suffix = "million";
    } else if (number>999){
        number = number/1000;
        suffix = "thousand";
    }  else if (number<1000){
        precision = 0;
    }
    return number.toFixed(precision) + " " + suffix;
}


// PROBES

var probeSpeed = 0;
var probeNav = 0;
var probeXBaseRate = 1750000000000000000;
var probeRep = 0;
var probeRepBaseRate = .00005;
var partialProbeSpawn = 0;
var probeHaz = 0;
var probeHazBaseRate = .01;
var partialProbeHaz = 0;
var probesLostHaz = 0;
var probesLostDrift = 0;
var probesLostCombat = 0;
var probeFac = 0;
var probeFacBaseRate = .000001;
var probeHarv = 0;
var probeHarvBaseRate = .000002;
var probeWire = 0;
var probeWireBaseRate = .000002;
var probeDescendents = 0;
var drifterCount = 0;
var probeTrust = 0;
var probeUsedTrust = 0;
var probeDriftBaseRate = .000001;
var probeLaunchLevel = 0;
var probeCost = Math.pow(10, 17);

var probeTrustCost = Math.floor(Math.pow(probeTrust+1, 1.47)*200);

//var probeCost = Math.pow((probeLaunchLevel+1), 1.44)*Math.pow(10, 24);

function increaseProbeTrust(){
    yomi = yomi - probeTrustCost;
    document.getElementById('yomiDisplay').innerHTML = yomi.toLocaleString();
    probeTrust++;
    probeTrustCost = Math.floor(Math.pow(probeTrust+1, 1.47)*200);
    document.getElementById('probeTrustDisplay').innerHTML = probeTrust;
    document.getElementById('probeTrustCostDisplay').innerHTML = Math.floor(probeTrustCost).toLocaleString();
    displayMessage("WARNING: Risk of value drift increased");
}

function increaseMaxTrust(){
    honor = honor - maxTrustCost;
    document.getElementById("honorDisplay").innerHTML = Math.round(honor).toLocaleString();
    maxTrust = maxTrust+10;
    // maxTrustCost = Math.floor(Math.pow(maxTrust, 1.17)*1000);
    document.getElementById('maxTrustDisplay').innerHTML = maxTrust.toLocaleString();
    // document.getElementById('maxTrustCostDisplay').innerHTML = Math.floor(maxTrustCost).toLocaleString();
    displayMessage("Maximum trust increased, probe design space expanded");
}

function raiseProbeSpeed(){
    attackSpeed = attackSpeed + attackSpeedMod;
    probeSpeed++;
    document.getElementById('probeSpeedDisplay').innerHTML = probeSpeed;
}

function lowerProbeSpeed(){
    attackSpeed = attackSpeed - attackSpeedMod;
    probeSpeed--;
    document.getElementById('probeSpeedDisplay').innerHTML = probeSpeed;
}

function raiseProbeNav(){
    probeNav++;
    document.getElementById('probeNavDisplay').innerHTML = probeNav;
}

function lowerProbeNav(){
    probeNav--;
    document.getElementById('probeNavDisplay').innerHTML = probeNav;
}

function raiseProbeHaz(){
    probeHaz++;
    document.getElementById('probeHazDisplay').innerHTML = probeHaz;
}

function lowerProbeHaz(){
    probeHaz--;
    document.getElementById('probeHazDisplay').innerHTML = probeHaz;
}

function raiseProbeRep(){
    probeRep++;
    document.getElementById('probeRepDisplay').innerHTML = probeRep;
}

function lowerProbeRep(){
    probeRep--;
    document.getElementById('probeRepDisplay').innerHTML = probeRep;
}

function raiseProbeFac(){
    probeFac++;
    document.getElementById('probeFacDisplay').innerHTML = probeFac;
}

function lowerProbeFac(){
    probeFac--; 
    document.getElementById('probeFacDisplay').innerHTML = probeFac;
}

function raiseProbeHarv(){
    probeHarv++;
    document.getElementById('probeHarvDisplay').innerHTML = probeHarv;
}

function lowerProbeHarv(){
    probeHarv--
    document.getElementById('probeHarvDisplay').innerHTML = probeHarv;
}

function raiseProbeWire(){
    probeWire++;
    document.getElementById('probeWireDisplay').innerHTML = probeWire;
}

function lowerProbeWire(){
    probeWire--;
    document.getElementById('probeWireDisplay').innerHTML = probeWire;
}

function raiseProbeCombat(){
    probeCombat++;
    document.getElementById('probeCombatDisplay').innerHTML = probeCombat;
}

function lowerProbeCombat(){
    probeCombat--
    document.getElementById('probeCombatDisplay').innerHTML = probeCombat;
}


function makeProbe(){
    unusedClips = unusedClips - probeCost;
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    probeLaunchLevel++;
    probeCount++;
    document.getElementById('probesLaunchedDisplay').innerHTML = numberCruncher(probeLaunchLevel);
    
    // probeCost = Math.pow((probeLaunchLevel+1), 1.23)*Math.pow(10, 20);
    // probeCost = Math.pow(10, 20);
    
    document.getElementById('probeCostDisplay').innerHTML = numberCruncher(probeCost); 
}

function spawnProbes(){
    var nextGen = probeCount * probeRepBaseRate * probeRep;
    
    // Cap Probe Growth
    if (probeCount>=999999999999999999999999999999999999999999999999){        
        nextGen = 0;
        }
    
    // Partial Spawn = early slow growth
    if (nextGen > 0 && nextGen <1){
        partialProbeSpawn = partialProbeSpawn+nextGen;
        if (partialProbeSpawn>=1){
            nextGen = 1;
            partialProbeSpawn = 0;
            }
        } 

    // Probes Cost Clips
    if ((nextGen*probeCost)>unusedClips){
        nextGen = Math.floor(unusedClips/probeCost);
    }
    
    unusedClips = unusedClips - (nextGen*probeCost);
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    
    probeDescendents = probeDescendents + nextGen;
    probeCount = probeCount + nextGen;
    document.getElementById('probesBornDisplay').innerHTML = numberCruncher(probeDescendents);
    document.getElementById('probesTotalDisplay').innerHTML = numberCruncher(probeCount);
}   

function exploreUniverse(){
    document.getElementById('availableMatterDisplay').innerHTML = numberCruncher(availableMatter);
    var xRate = Math.floor(probeCount) * probeXBaseRate * probeSpeed * probeNav;
    if (xRate > totalMatter - foundMatter) {xRate = totalMatter - foundMatter;}
        foundMatter = foundMatter + xRate;
        availableMatter = availableMatter + xRate;
    
        document.getElementById('mdps').innerHTML = numberCruncher(xRate*100);
        document.getElementById('availableMatterDisplay').innerHTML = numberCruncher(availableMatter);
        document.getElementById('colonizedDisplay').innerHTML = (100/(totalMatter/foundMatter)).toFixed(12);
}  

function encounterHazards(){
    var boost = Math.pow(probeHaz, 1.6);
    var amount = probeCount * (probeHazBaseRate / ((3*boost)+1));
    if (project129.flag == 1){
        amount = .50 * amount;
        }
    if (amount<1){
        partialProbeHaz = partialProbeHaz+amount;
        if (partialProbeHaz>=1){
            amount = 1;
            partialProbeHaz = 0;
            probeCount = probeCount - amount;
            if (probeCount<0) {probeCount=0;}
            probesLostHaz = probesLostHaz + amount;
            document.getElementById('probesLostHazardsDisplay').innerHTML = numberCruncher(probesLostHaz);
            document.getElementById('probesTotalDisplay').innerHTML = numberCruncher(probeCount);
            }
        } else {
    if (amount > probeCount) {amount = probeCount;}        
    probeCount = probeCount - amount;
    if (probeCount<0) {probeCount=0;}        
    probesLostHaz = probesLostHaz + amount;
    document.getElementById('probesLostHazardsDisplay').innerHTML = numberCruncher(probesLostHaz);
    document.getElementById('probesTotalDisplay').innerHTML = numberCruncher(probeCount);
    }        
}  

function spawnFactories(){
    var amount = probeCount * probeFacBaseRate * probeFac;
    
    //FACTORIES COST 100M CLIPS EACH
    if ((amount * 100000000) > unusedClips) {
        amount = Math.floor(unusedClips/100000000);
        }
    unusedClips = unusedClips - (amount*100000000);
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    factoryLevel = factoryLevel + amount; 
    document.getElementById('factoryLevelDisplay').innerHTML = numberCruncher(factoryLevel);  
}

function spawnHarvesters(){
    var amount = probeCount * probeHarvBaseRate * probeHarv;
    
    //DRONES COST 2M CLIPS EACH
    if ((amount * 2000000) > unusedClips) {
        amount = Math.floor(unusedClips/2000000);
        }
    unusedClips = unusedClips - (amount*2000000);
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);  
    harvesterLevel = harvesterLevel + amount;
    document.getElementById('harvesterLevelDisplay').innerHTML = numberCruncher(harvesterLevel);  
}

function spawnWireDrones(){
    var amount = probeCount * probeWireBaseRate * probeWire;
    
    //DRONES COST 2M CLIPS EACH
    if ((amount * 2000000) > unusedClips) {
        amount = Math.floor(unusedClips/2000000);
        }
    unusedClips = unusedClips - (amount*2000000);
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);
    wireDroneLevel = wireDroneLevel + amount;
    document.getElementById('wireDroneLevelDisplay').innerHTML = numberCruncher(wireDroneLevel);  
}

function drift(){
    var amount = probeCount * probeDriftBaseRate * Math.pow(probeTrust, 1.2);
    if (amount > probeCount) {amount = probeCount;}
    if (project148.flag==1){
        amount = 0;
    }
    probeCount = probeCount - amount;
    drifterCount = drifterCount + amount;
    probesLostDrift = probesLostDrift + amount;

    document.getElementById('probesLostDriftDisplay').innerHTML = numberCruncher(probesLostDrift);
    document.getElementById('probesTotalDisplay').innerHTML = numberCruncher(probeCount);
    document.getElementById('drifterCount').innerHTML = numberCruncher(drifterCount);
    
}

function war(){
    
    checkForBattles();
//  battleClock++;
//  if (battleClock>=battleAlarm){
//            updateBattles();
//            battleClock = 0;
//    }
    
//  battleCleanUp();

}




// DRONES

function acquireMatter(){
    if (availableMatter>0) {
        var dbsth = 1;
        if (droneBoost>1){
            dbsth = droneBoost * Math.floor(harvesterLevel);
            }
        
        
        var mtr = powMod*dbsth*Math.floor(harvesterLevel)*harvesterRate;
        
        
        mtr = mtr * ((200-sliderPos)/100);
        
        
        if (mtr>availableMatter){
            mtr = availableMatter;
            }
        
        availableMatter = availableMatter-mtr;
        
        
        acquiredMatter = acquiredMatter+mtr;
        document.getElementById('availableMatterDisplay').innerHTML = numberCruncher(availableMatter);
        document.getElementById('acquiredMatterDisplay').innerHTML = numberCruncher(acquiredMatter);
        
        document.getElementById('maps').innerHTML = numberCruncher(mtr*100);
        
        } else {
        
        document.getElementById('maps').innerHTML = 0;    
            
        }
    
    } 

function processMatter(){    
    if (acquiredMatter>0) {
        var dbstw = 1;
        if (droneBoost>1){
            dbstw = droneBoost * Math.floor(wireDroneLevel);
            }
        
        var a = powMod*dbstw*Math.floor(wireDroneLevel)*wireDroneRate;
        
        a = a * ((200-sliderPos)/100);
        
        if (a>acquiredMatter){
            a = acquiredMatter;
            }
        
        acquiredMatter = acquiredMatter-a;
        wire = wire+a;
        document.getElementById('acquiredMatterDisplay').innerHTML = numberCruncher(acquiredMatter);
        document.getElementById('nanoWire').innerHTML = numberCruncher(wire);
        
        document.getElementById('wpps').innerHTML = numberCruncher(a*100);
        
        } else {
            
        document.getElementById('wpps').innerHTML = 0;    
            
        }
    
    
    }


// CHECK FOR SAVES

if (localStorage.getItem("saveGame") != null) {
    load();
}
    
if (localStorage.getItem("savePrestige") != null) {
    loadPrestige();
    refresh();
}


// MAIN LOOP

window.setInterval(function(){
 
    ticks = ticks + 1;
    milestoneCheck();
    buttonUpdate();
    
    if (compFlag == 1){
        calculateOperations();
    }
    
    if (humanFlag == 1){
        calculateTrust(); 
    }
    
    if (qFlag == 1){
        quantumCompute(); 
    }
    
    updateStats(); 
    manageProjects();
    milestoneCheck();
    
    
// Clip Rate Tracker
    
    clipRateTracker++;
    
    if (clipRateTracker<100){
        var cr = clips - prevClips;
        clipRateTemp = clipRateTemp+cr;
        prevClips = clips;
        
    } else {
        clipRateTracker = 0;
        clipRate = clipRateTemp;
        clipRateTemp = 0;
    }
    

// Stock Report
    
    stockReportCounter++;
    if (investmentEngineFlag==1 && stockReportCounter>=10000){
        var r = (ledger+portTotal).toLocaleString();
        displayMessage("Lifetime investment revenue report: $"+r);
        stockReportCounter = 0;
    }
    
// WireBuyer
    
    if (wireBuyerFlag==1 && wireBuyerStatus==1 && wire<=1){
        buyWire();
    }   
    
    
    
// First, Explore
    
exploreUniverse();     
    
// Then, Drones
    
if (humanFlag==0 && spaceFlag == 0){
    updateDroneButtons();  
    }   


updatePower();
updateSwarm();
acquireMatter();   
processMatter();
    
// Then Factories    
  
var fbst = 1;
    
if (factoryBoost > 1){
    fbst = factoryBoost * factoryLevel;
    }      

    
if (dismantle<4){
    clipClick(powMod*fbst*(Math.floor(factoryLevel)*factoryRate));    
    }    
// Then Other Probe Functions

if (spaceFlag == 1) {
    
if (probeCount<0){
    probeCount = 0;
}    
    
encounterHazards();
spawnFactories();
spawnHarvesters();
spawnWireDrones();
spawnProbes();       
drift();
war();
    
}
    
// Auto-Clipper
    
if (dismantle<4){
    clipClick(clipperBoost*(clipmakerLevel/100));
    clipClick(megaClipperBoost*(megaClipperLevel*5));
    }    
    
// Demand Curve 
    
    
    if (humanFlag == 1) {
    
    marketing = (Math.pow(1.1,(marketingLvl-1)));
    demand = (((.8/margin) * marketing * marketingEffectiveness)*demandBoost);
    demand = demand + ((demand/10)*prestigeU);
        
    }      
    
// Creativity
    
    if (creativityOn && operations >= (memory*1000)){
    calculateCreativity();    
    }  
    
// Ending
    
    if (dismantle >= 1){
    
    document.getElementById("probeDesignDiv").style.display="none";
    if (endTimer1>=50) { 
        document.getElementById("increaseProbeTrustDiv").style.display="none"; 
        }
    
    if (endTimer1>=100) { 
        document.getElementById("increaseMaxTrustDiv").style.display="none"; 
        }
    
    if (endTimer1>=150) { 
        document.getElementById("spaceDiv").style.display="none";
        }

    
    if (endTimer1>=175) {     
        document.getElementById("battleCanvasDiv").style.display="none";
        }
        
    if (endTimer1>=190) {     
        document.getElementById("honorDiv").style.display="none";
        }
    
    }   
    
if (dismantle >= 2){
    
    document.getElementById("wireProductionDiv").style.display="none";
    document.getElementById("wireTransDiv").style.display="";
    
    if (endTimer2 >= 50) {
    document.getElementById("swarmGiftDiv").style.display="none"; 
        }
    
    if (endTimer2 >= 100) {
    document.getElementById("swarmEngine").style.display="none"; 
        }
    
    if (endTimer2 >= 150) {
    document.getElementById("swarmSliderDiv").style.display="none";
        }
    
    } 
    
if (dismantle >= 3) {
    document.getElementById("factoryDivSpace").style.display="none";
    document.getElementById("clipsPerSecDiv").style.display="none";
    document.getElementById("tothDiv").style.display="none";     
    
}      
    
if (dismantle >= 4) {
   document.getElementById("strategyEngine").style.display="none"; 
   document.getElementById("tournamentManagement").style.display="none";
}    
    
if (dismantle >= 5) {
    
    document.getElementById("btnQcompute").style.display="none";
    
   for (var i = 0; i<qChips.length; i++){
        qChips[i].value = .5;
        document.getElementById("qChip"+i).style.opacity=qChips[i].value;
        }
    
    if (endTimer4==10){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=10){
        document.getElementById("qChip9").style.display="none";
    }
    
    if (endTimer4==60){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=60){
        document.getElementById("qChip8").style.display="none";
    }    
  
    if (endTimer4==100){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=100){
        document.getElementById("qChip7").style.display="none";
    }        
 
    if (endTimer4==130){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=130){
        document.getElementById("qChip6").style.display="none";
    }   
    
    if (endTimer4==150){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=150){
        document.getElementById("qChip5").style.display="none";
    }     

    if (endTimer4==160){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=160){
        document.getElementById("qChip4").style.display="none";
    }   

    if (endTimer4==165){
        wire = wire+1;
    }
    
    if (endTimer4>=165){
        document.getElementById("qChip3").style.display="none";
    }  
    
    if (endTimer4==169){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=169){
        document.getElementById("qChip2").style.display="none";
    } 

    if (endTimer4==172){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=172){
        document.getElementById("qChip1").style.display="none";
    }    

    if (endTimer4==174){
        wire = wire+1;
        document.getElementById("transWire").innerHTML=wire;
    }
    
    if (endTimer4>=174){
        document.getElementById("qChip0").style.display="none";
    }    
    
    if (endTimer4>=250){
        document.getElementById("qComputing").style.display="none";
    }     

}     
    
if (dismantle >= 6) {
    document.getElementById("processorDisplay").style.display="none"; 
    }    
    
if (dismantle >= 7) {
    document.getElementById("compDiv").style.display="none"; 
    document.getElementById("projectsDiv").style.display="none"; 
    
    }      
    
    if (project148.flag == 1){
        endTimer1++;    
        }
    
    if (project211.flag == 1){
        endTimer2++;
        }
    
    if (project212.flag == 1){
        endTimer3++;
        }
    
    if (project213.flag == 1){
        endTimer4++;
        }
    
    if (project215.flag == 1){
        endTimer5++;
        }
    
    if (project216.flag == 1 && wire == 0){
        endTimer6++;
    }
    
    if (endTimer6>=250) {
        document.getElementById("creationDiv").style.display="none";
    }
    
    if (endTimer6>=500 && milestoneFlag == 15) {
        playThrenody();
        displayMessage("Universal Paperclips");
        milestoneFlag++;
    }
    
    if (endTimer6>=600 && milestoneFlag == 16) {
        displayMessage("a game by Frank Lantz");
        milestoneFlag++;
    }
    
    if (endTimer6>=700 && milestoneFlag == 17) {
        displayMessage("combat programming by Bennett Foddy");
        milestoneFlag++;
    }
    
    if (endTimer6>=800 && milestoneFlag == 18) {
        displayMessage("'Riversong' by Tonto's Expanding Headband used by kind permission of Malcolm Cecil");
        milestoneFlag++;
    }
    
    if (endTimer6>=900 && milestoneFlag == 19) {
        displayMessage("&#169; 2017 Everybody House Games");
        milestoneFlag++;
    }
    
    

    
    
}, 10);

// Slow Loop

var saveTimer = 0;
var secTimer = 0;


window.setInterval(function(){
    
    // Wire Price Fluctuation
    
    adjustWirePrice();
    
    // Sales Calculator
    
    if (humanFlag==1){
    
        if (Math.random() < (demand/100)){
            sellClips(Math.floor(.7 * Math.pow(demand, 1.15)));
            }   
         
    
    // Fire Once a Second
    
    secTimer++;
        if (secTimer >= 10){
            calculateRev();
            secTimer = 0;
        }
        
    }    
 
    
    // Auto-Save
    
    saveTimer++;
    if (saveTimer >= 250) {
        save();
        saveTimer = 0;
    }
    
    
}, 100);
     

// Saving and Loading

function refresh() {
    
    
    //DEBUG
    
//    availableMatter = Math.pow(10, 24)*6000;
//    acquiredMatter = 0;
    
    ////////
    
    
    document.getElementById('driftersKilled').innerHTML = numberCruncher(driftersKilled);
    document.getElementById('availableMatterDisplay').innerHTML = numberCruncher(availableMatter);    
    document.getElementById("honorDisplay").innerHTML = Math.round(honor).toLocaleString();
    document.getElementById('clipmakerLevel2').innerHTML = clipmakerLevel;
    document.getElementById('clipperCost').innerHTML = clipperCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('acquiredMatterDisplay').innerHTML = numberCruncher(acquiredMatter);
    document.getElementById('nanoWire').innerHTML = numberCruncher(wire);
    document.getElementById('probesBornDisplay').innerHTML = numberCruncher(probeDescendents);
    document.getElementById('probesTotalDisplay').innerHTML = numberCruncher(probeCount);
    document.getElementById('probesLaunchedDisplay').innerHTML = probeLaunchLevel;
    document.getElementById('probeCostDisplay').innerHTML = numberCruncher(probeCost); 
    document.getElementById('probeCombatDisplay').innerHTML = probeCombat;
    document.getElementById('probeWireDisplay').innerHTML = probeWire;
    document.getElementById('probeHarvDisplay').innerHTML = probeHarv;
    document.getElementById('probeFacDisplay').innerHTML = probeFac;
    document.getElementById('probeRepDisplay').innerHTML = probeRep;
    document.getElementById('probeHazDisplay').innerHTML = probeHaz;
    document.getElementById('probeNavDisplay').innerHTML = probeNav;
    document.getElementById('probeSpeedDisplay').innerHTML = probeSpeed;
    document.getElementById('probeTrustDisplay').innerHTML = probeTrust;
    document.getElementById("memory").innerHTML = memory;
    document.getElementById("processors").innerHTML = processors;
    document.getElementById("margin").innerHTML = margin.toFixed(2);
    document.getElementById('marketingLvl').innerHTML = marketingLvl;
    document.getElementById('adCost').innerHTML = adCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost);
    document.getElementById('factoryLevelDisplay').innerHTML = factoryLevel;
    document.getElementById("unusedClipsDisplay").innerHTML = numberCruncher(unusedClips);
    document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost);
    document.getElementById('wireDroneLevelDisplay').innerHTML = wireDroneLevel;
    document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost);
    document.getElementById('harvesterLevelDisplay').innerHTML = harvesterLevel;
    document.getElementById('megaClipperCost').innerHTML = megaClipperCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('megaClipperLevel').innerHTML = megaClipperLevel;
    document.getElementById('investmentBankroll').innerHTML = bankroll.toLocaleString();
    document.getElementById('secValue').innerHTML = secTotal.toLocaleString();
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
    document.getElementById("investUpgradeCost").innerHTML=investUpgradeCost.toLocaleString();
    document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
    document.getElementById("investmentLevel").innerHTML=investLevel;   
    document.getElementById("prestigeUcounter").innerHTML=prestigeU+1;
    document.getElementById("prestigeScounter").innerHTML=prestigeS+1;
    document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
    tourneyInProg = 0;
    document.getElementById("maxTrustDisplay").innerHTML = maxTrust.toLocaleString();
    
    document.getElementById("victoryDiv").style.visibility = "hidden";
    
    document.getElementById("probeTrustCostDisplay").innerHTML = probeTrustCost.toLocaleString();
    
    document.getElementById("tournamentResultsTable").style.display = "none";
    
    document.getElementById('farmCost').innerHTML = numberCruncher(farmCost); 
    document.getElementById('batteryCost').innerHTML = numberCruncher(batteryCost); 
    document.getElementById('farmLevel').innerHTML = farmLevel.toLocaleString(); 
    document.getElementById('batteryLevel').innerHTML = batteryLevel.toLocaleString();    
    
    updateDronePrices();
    document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost); 
    document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost);     

    updateUpgrades();
    updatePower();
    updatePowPrices(); 
    
    
    
    // HOT FIXES

    if(project46.flag == 1)
    {
        loadThrenody();
    }
    
    project218.uses = 1;
    project219.uses = 1;
    
    
    // DEBUG
    
    if (battles.length>0){
        battles.splice(0,1);
    }
    
    
}

// SAVES AND LOADS

function save() {
    
    var projectsUses = [];
    var projectsFlags = [];
    var projectsActive = [];
    var stratsActive = [];
    
for(var i=0; i < projects.length; i++){
    
    projectsUses[i] = projects[i].uses;
    projectsFlags[i] = projects[i].flag;
    
}
    
for(var i=0; i < activeProjects.length; i++){
    
    projectsActive[i] = activeProjects[i].id;
    
}    
    
    for(var i=0; i < allStrats.length; i++){
    
    stratsActive[i] = allStrats[i].active;
    
}
    
    var saveGame = {
        
        resetFlag: resetFlag,
        
        dismantle: dismantle,
        endTimer1: endTimer1,
        endTimer2: endTimer2,
        endTimer3: endTimer3,
        endTimer4: endTimer4,
        endTimer5: endTimer5,
        endTimer6: endTimer6,
        
        testFlag: testFlag,
        finalClips: finalClips,
        
        wireBuyerStatus: wireBuyerStatus,
        wirePriceTimer: wirePriceTimer,
        qFade: qFade,
        autoTourneyStatus: autoTourneyStatus,
        driftKingMessageCost: driftKingMessageCost,
        sliderPos: sliderPos,
        tempOps: tempOps,
        standardOps: standardOps,
        opFade: opFade,
        
        entertainCost: entertainCost,
        boredomLevel: boredomLevel,
        boredomFlag: boredomFlag,
        boredomMsg: boredomMsg,
        
        unitSize: unitSize,
        driftersKilled: driftersKilled,
        battleEndDelay: battleEndDelay,
        battleEndTimer:battleEndTimer,
        masterBattleClock: masterBattleClock,
        
        honorCount: honorCount,
        threnodyTitle: threnodyTitle,
        bonusHonor: bonusHonor,
        honorReward: honorReward,
        
        resultsTimer: resultsTimer,
        resultsFlag: resultsFlag,
        
        honor: honor,
        maxTrust: maxTrust,
        maxTrustCost: maxTrustCost,
        disorgCounter: disorgCounter,
        disorgFlag: disorgFlag,
        synchCost: synchCost,
        disorgMsg: disorgMsg,
        threnodyCost: threnodyCost,
        
        farmRate: farmRate,
        batterySize: batterySize,
        factoryPowerRate: factoryPowerRate,
        dronePowerRate: dronePowerRate,
        farmLevel: farmLevel,
        batteryLevel: batteryLevel,
        farmCost: farmCost,
        batteryCost: batteryCost,
        storedPower: storedPower,
        powMod: powMod,
        farmBill: farmBill,
        batteryBill: batteryBill,
        momentum: momentum,

        swarmFlag: swarmFlag,
        swarmStatus: swarmStatus,
        swarmGifts: swarmGifts,
        nextGift: nextGift,
        giftPeriod: giftPeriod,
        giftCountdown: giftCountdown,
        elapsedTime: elapsedTime,
        
        maxFactoryLevel: maxFactoryLevel,
        maxDroneLevel: maxDroneLevel,
        
        wirePriceCounter: wirePriceCounter,
        wireBasePrice: wireBasePrice,
        
        egoFlag: egoFlag,
        autoTourneyFlag: autoTourneyFlag,
        tothFlag: tothFlag,
        
        incomeTracker: incomeTracker.slice(0),
        qChips: qChips.slice(0),
        stocks: stocks.slice(0),
        battles: battles.slice(0),
        battleNumbers: battleNumbers.slice(0),
        
        clips: clips,
        unusedClips: unusedClips,
        clipRate: clipRate,
        clipRateTemp: clipRateTemp,
        prevClips: prevClips,
        clipRateTracker: clipRateTracker,
        clipmakerRate: clipmakerRate,
        clipmakerLevel: clipmakerLevel,
        clipperCost: clipperCost,
        unsoldClips: unsoldClips,
        funds: funds,
        margin: margin,
        wire: wire,
        wireCost: wireCost,
        adCost: adCost,
        demand: demand,
        clipsSold: clipsSold,
        avgRev: avgRev,
        ticks: ticks,
        marketing: marketing,
        marketingLvl: marketingLvl,
        x: x,
        clippperCost: clippperCost,
        processors: processors,
        memory: memory,
        operations: operations,
        trust: trust,
        nextTrust: nextTrust,
        transaction: transaction,
        clipperBoost: clipperBoost,
        blinkCounter: blinkCounter,
        creativity: creativity,
        creativityOn: creativityOn,
        safetyProjectOn: safetyProjectOn,
        boostLvl: boostLvl,
        wirePurchase: wirePurchase,
        wireSupply: wireSupply,
        marketingEffectiveness: marketingEffectiveness,
        milestoneFlag: milestoneFlag,
        bankroll: bankroll,
        fib1: fib1,
        fib2: fib2,
        strategyEngineFlag: strategyEngineFlag,
        investmentEngineFlag: investmentEngineFlag,
        revPerSecFlag: revPerSecFlag,
        compFlag: compFlag,
        projectsFlag: projectsFlag,
        autoClipperFlag: autoClipperFlag,
        megaClipperFlag: megaClipperFlag,
        megaClipperCost: megaClipperCost,
        megaClipperLevel: megaClipperLevel,
        megaClipperBoost: megaClipperBoost,
        creativitySpeed: creativitySpeed,
        creativityCounter: creativityCounter,
        wireBuyerFlag: wireBuyerFlag,
        demandBoost: demandBoost,
        humanFlag: humanFlag,
        trustFlag: trustFlag,
        nanoWire: nanoWire,
        creationFlag: creationFlag,
        wireProductionFlag: wireProductionFlag,
        spaceFlag: spaceFlag,
        factoryFlag: factoryFlag,
        harvesterFlag: harvesterFlag,
        wireDroneFlag: wireDroneFlag,
        factoryLevel: factoryLevel,
        factoryBoost: factoryBoost,
        droneBoost: droneBoost,
        availableMatter: availableMatter,
        acquiredMatter: acquiredMatter,
        processedMatter: processedMatter,
        harvesterLevel: harvesterLevel,
        wireDroneLevel: wireDroneLevel,
        factoryCost: factoryCost,
        harvesterCost: harvesterCost,
        wireDroneCost: wireDroneCost,
        factoryRate: factoryRate,
        harvesterRate: harvesterRate,
        wireDroneRate: wireDroneRate,
        harvesterBill: harvesterBill,
        wireDroneBill: wireDroneBill,
        factoryBill: factoryBill,
        probeCount: probeCount,
        totalMatter: totalMatter,
        foundMatter: foundMatter,
        qFlag: qFlag,
        qClock: qClock,
        qChipCost: qChipCost,
        nextQchip: nextQchip,
        bribe: bribe,
        battleFlag: battleFlag,
        
        portfolioSize: portfolioSize,
        stockID: stockID,
        secTotal: secTotal,
        portTotal: portTotal,
        sellDelay: sellDelay,
        riskiness: riskiness,
        maxPort: maxPort,
        m: m,
        investLevel: investLevel,
        investUpgradeCost: investUpgradeCost,
        stockGainThreshold: stockGainThreshold,
        ledger: ledger,
        stockReportCounter: stockReportCounter,
        
        tourneyCost: tourneyCost,
        tourneyLvl: tourneyLvl,
        stratCounter: stratCounter,
        roundNum: roundNum,
        hMove: hMove,
        vMove: vMove,
        hMovePrev: hMovePrev,
        vMovePrev: vMovePrev,
        aa: aa,
        ab: ab,
        ba: ba,
        bb: bb,
        rounds: rounds,
        currentRound: currentRound,
        rCounter: rCounter,
        tourneyInProg: tourneyInProg,
        winnerPtr: winnerPtr,
        high: high,
        pick: pick,
        yomi: yomi,
        yomiBoost: yomiBoost,
        
        probeSpeed: probeSpeed,
        probeNav: probeNav,
        probeRep: probeRep,
        partialProbeSpawn: partialProbeSpawn,
        probeHaz: probeHaz,
        partialProbeHaz: partialProbeHaz,
        probesLostHaz: probesLostHaz,
        probesLostDrift: probesLostDrift,
        probesLostCombat: probesLostCombat,
        probeFac: probeFac,
        probeWire: probeWire,
        probeCombat: probeCombat,
        attackSpeed: attackSpeed,
        battleSpeed: battleSpeed,
        attackSpeedFlag: attackSpeedFlag,
        attackSpeedMod: attackSpeedMod,
        probeDescendents: probeDescendents,
        drifterCount: drifterCount,
        warTrigger: warTrigger,
        battleID: battleID,
        battleName: battleName,
        battleNameFlag: battleNameFlag,
        maxBattles: maxBattles,
        battleClock: battleClock,
        battleAlarm: battleAlarm,
        outcomeTimer: outcomeTimer,
        drifterCombat: drifterCombat,
        probeTrust: probeTrust,
        probeUsedTrust: probeUsedTrust,
        probeTrustCost: probeTrustCost,
        probeLaunchLevel: probeLaunchLevel,
        probeCost: probeCost
    
        }
    
    localStorage.setItem("saveGame",JSON.stringify(saveGame));
    localStorage.setItem("saveProjectsUses",JSON.stringify(projectsUses));
    localStorage.setItem("saveProjectsFlags",JSON.stringify(projectsFlags));
    localStorage.setItem("saveProjectsActive",JSON.stringify(projectsActive));
    localStorage.setItem("saveStratsActive",JSON.stringify(stratsActive));
    
}

function save1() {
    
    var projectsUses = [];
    var projectsFlags = [];
    var projectsActive = [];
    var stratsActive = [];
    
for(var i=0; i < projects.length; i++){
    
    projectsUses[i] = projects[i].uses;
    projectsFlags[i] = projects[i].flag;
    
}
    
for(var i=0; i < activeProjects.length; i++){
    
    projectsActive[i] = activeProjects[i].id;
    
}    
    
    for(var i=0; i < allStrats.length; i++){
    
    stratsActive[i] = allStrats[i].active;
    
}
    
    var saveGame = {
        
        resetFlag: resetFlag,
        
        dismantle: dismantle,
        endTimer1: endTimer1,
        endTimer2: endTimer2,
        endTimer3: endTimer3,
        endTimer4: endTimer4,
        endTimer5: endTimer5,
        endTimer6: endTimer6,
        
        testFlag: testFlag,
        finalClips: finalClips,        
        
        wireBuyerStatus: wireBuyerStatus,
        wirePriceTimer: wirePriceTimer,
        qFade: qFade,
        autoTourneyStatus: autoTourneyStatus,
        driftKingMessageCost: driftKingMessageCost,
        sliderPos: sliderPos,
        tempOps: tempOps,
        standardOps: standardOps,
        opFade: opFade,        
        
        entertainCost: entertainCost,
        boredomLevel: boredomLevel,
        boredomFlag: boredomFlag, 
        boredomMsg: boredomMsg,        
        
        unitSize: unitSize,
        driftersKilled: driftersKilled,
        battleEndDelay: battleEndDelay,
        battleEndTimer:battleEndTimer,
        masterBattleClock: masterBattleClock,
        
        honorCount: honorCount,
        threnodyTitle: threnodyTitle,
        bonusHonor: bonusHonor,
        honorReward: honorReward,
        
        resultsTimer: resultsTimer,
        resultsFlag: resultsFlag,
        
        honor: honor,
        maxTrust: maxTrust,
        maxTrustCost: maxTrustCost,
        disorgCounter: disorgCounter,
        disorgFlag: disorgFlag,
        synchCost: synchCost,
        disorgMsg: disorgMsg,
        threnodyCost: threnodyCost,        
        
        farmRate: farmRate,
        batterySize: batterySize,
        factoryPowerRate: factoryPowerRate,
        dronePowerRate: dronePowerRate,
        farmLevel: farmLevel,
        batteryLevel: batteryLevel,
        farmCost: farmCost,
        batteryCost: batteryCost,
        storedPower: storedPower,
        powMod: powMod,
        farmBill: farmBill,
        batteryBill: batteryBill,
        momentum: momentum,

        swarmFlag: swarmFlag,
        swarmStatus: swarmStatus,
        swarmGifts: swarmGifts,
        nextGift: nextGift,
        giftPeriod: giftPeriod,
        giftCountdown: giftCountdown,
        elapsedTime: elapsedTime,
        
        maxFactoryLevel: maxFactoryLevel,
        maxDroneLevel: maxDroneLevel,
        
        wirePriceCounter: wirePriceCounter,
        wireBasePrice: wireBasePrice,
        
        egoFlag: egoFlag,
        autoTourneyFlag: autoTourneyFlag,
        tothFlag: tothFlag,
        
        
        incomeTracker: incomeTracker.slice(0),
        qChips: qChips.slice(0),
        stocks: stocks.slice(0),
        battles: battles.slice(0),
        battleNumbers: battleNumbers.slice(0),
        
        clips: clips,
        unusedClips: unusedClips,
        clipRate: clipRate,
        clipRateTemp: clipRateTemp,
        prevClips: prevClips,
        clipRateTracker: clipRateTracker,
        clipmakerRate: clipmakerRate,
        clipmakerLevel: clipmakerLevel,
        clipperCost: clipperCost,
        unsoldClips: unsoldClips,
        funds: funds,
        margin: margin,
        wire: wire,
        wireCost: wireCost,
        adCost: adCost,
        demand: demand,
        clipsSold: clipsSold,
        avgRev: avgRev,
        ticks: ticks,
        marketing: marketing,
        marketingLvl: marketingLvl,
        x: x,
        clippperCost: clippperCost,
        processors: processors,
        memory: memory,
        operations: operations,
        trust: trust,
        nextTrust: nextTrust,
        transaction: transaction,
        clipperBoost: clipperBoost,
        blinkCounter: blinkCounter,
        creativity: creativity,
        creativityOn: creativityOn,
        safetyProjectOn: safetyProjectOn,
        boostLvl: boostLvl,
        wirePurchase: wirePurchase,
        wireSupply: wireSupply,
        marketingEffectiveness: marketingEffectiveness,
        milestoneFlag: milestoneFlag,
        bankroll: bankroll,
        fib1: fib1,
        fib2: fib2,
        strategyEngineFlag: strategyEngineFlag,
        investmentEngineFlag: investmentEngineFlag,
        revPerSecFlag: revPerSecFlag,
        compFlag: compFlag,
        projectsFlag: projectsFlag,
        autoClipperFlag: autoClipperFlag,
        megaClipperFlag: megaClipperFlag,
        megaClipperCost: megaClipperCost,
        megaClipperLevel: megaClipperLevel,
        megaClipperBoost: megaClipperBoost,
        creativitySpeed: creativitySpeed,
        creativityCounter: creativityCounter,
        wireBuyerFlag: wireBuyerFlag,
        demandBoost: demandBoost,
        humanFlag: humanFlag,
        trustFlag: trustFlag,
        nanoWire: nanoWire,
        creationFlag: creationFlag,
        wireProductionFlag: wireProductionFlag,
        spaceFlag: spaceFlag,
        factoryFlag: factoryFlag,
        harvesterFlag: harvesterFlag,
        wireDroneFlag: wireDroneFlag,
        factoryLevel: factoryLevel,
        factoryBoost: factoryBoost,
        droneBoost: droneBoost,
        availableMatter: availableMatter,
        acquiredMatter: acquiredMatter,
        processedMatter: processedMatter,
        harvesterLevel: harvesterLevel,
        wireDroneLevel: wireDroneLevel,
        factoryCost: factoryCost,
        harvesterCost: harvesterCost,
        wireDroneCost: wireDroneCost,
        factoryRate: factoryRate,
        harvesterRate: harvesterRate,
        wireDroneRate: wireDroneRate,
        harvesterBill: harvesterBill,
        wireDroneBill: wireDroneBill,
        factoryBill: factoryBill,
        probeCount: probeCount,
        totalMatter: totalMatter,
        foundMatter: foundMatter,
        qFlag: qFlag,
        qClock: qClock,
        qChipCost: qChipCost,
        nextQchip: nextQchip,
        bribe: bribe,
        battleFlag: battleFlag,
        
        portfolioSize: portfolioSize,
        stockID: stockID,
        secTotal: secTotal,
        portTotal: portTotal,
        sellDelay: sellDelay,
        riskiness: riskiness,
        maxPort: maxPort,
        m: m,
        investLevel: investLevel,
        investUpgradeCost: investUpgradeCost,
        stockGainThreshold: stockGainThreshold,
        ledger: ledger,
        stockReportCounter: stockReportCounter,
        
        tourneyCost: tourneyCost,
        tourneyLvl: tourneyLvl,
        stratCounter: stratCounter,
        roundNum: roundNum,
        hMove: hMove,
        vMove: vMove,
        hMovePrev: hMovePrev,
        vMovePrev: vMovePrev,
        aa: aa,
        ab: ab,
        ba: ba,
        bb: bb,
        rounds: rounds,
        currentRound: currentRound,
        rCounter: rCounter,
        tourneyInProg: tourneyInProg,
        winnerPtr: winnerPtr,
        high: high,
        pick: pick,
        yomi: yomi,
        yomiBoost: yomiBoost,
        
        probeSpeed: probeSpeed,
        probeNav: probeNav,
        probeRep: probeRep,
        partialProbeSpawn: partialProbeSpawn,
        probeHaz: probeHaz,
        partialProbeHaz: partialProbeHaz,
        probesLostHaz: probesLostHaz,
        probesLostDrift: probesLostDrift,
        probesLostCombat: probesLostCombat,
        probeFac: probeFac,
        probeWire: probeWire,
        probeCombat: probeCombat,
        attackSpeed: attackSpeed,
        battleSpeed: battleSpeed,
        attackSpeedFlag: attackSpeedFlag,
        attackSpeedMod: attackSpeedMod,
        probeDescendents: probeDescendents,
        drifterCount: drifterCount,
        warTrigger: warTrigger,
        battleID: battleID,
        battleName: battleName,
        battleNameFlag: battleNameFlag,
        maxBattles: maxBattles,
        battleClock: battleClock,
        battleAlarm: battleAlarm,
        outcomeTimer: outcomeTimer,
        drifterCombat: drifterCombat,
        probeTrust: probeTrust,
        probeUsedTrust: probeUsedTrust,
        probeTrustCost: probeTrustCost,
        probeLaunchLevel: probeLaunchLevel,
        probeCost: probeCost
    
        }
    
    localStorage.setItem("saveGame1",JSON.stringify(saveGame));
    localStorage.setItem("saveProjectsUses1",JSON.stringify(projectsUses));
    localStorage.setItem("saveProjectsFlags1",JSON.stringify(projectsFlags));
    localStorage.setItem("saveProjectsActive1",JSON.stringify(projectsActive));
    localStorage.setItem("saveStratsActive1",JSON.stringify(stratsActive));
    
}

function save2() {
    
    var projectsUses = [];
    var projectsFlags = [];
    var projectsActive = [];
    var stratsActive = [];
    
for(var i=0; i < projects.length; i++){
    
    projectsUses[i] = projects[i].uses;
    projectsFlags[i] = projects[i].flag;
    
}
    
for(var i=0; i < activeProjects.length; i++){
    
    projectsActive[i] = activeProjects[i].id;
    
}    
    
    for(var i=0; i < allStrats.length; i++){
    
    stratsActive[i] = allStrats[i].active;
    
}
    
    var saveGame = {

        resetFlag: resetFlag,
        
        dismantle: dismantle,
        endTimer1: endTimer1,
        endTimer2: endTimer2,
        endTimer3: endTimer3,
        endTimer4: endTimer4,
        endTimer5: endTimer5,
        endTimer6: endTimer6,
        
        testFlag: testFlag,
        finalClips: finalClips,        
        
        wireBuyerStatus: wireBuyerStatus,
        wirePriceTimer: wirePriceTimer,
        qFade: qFade,
        autoTourneyStatus: autoTourneyStatus,
        driftKingMessageCost: driftKingMessageCost,
        sliderPos: sliderPos,
        tempOps: tempOps,
        standardOps: standardOps,
        opFade: opFade,        
        
        entertainCost: entertainCost,
        boredomLevel: boredomLevel,
        boredomFlag: boredomFlag, 
        boredomMsg: boredomMsg,
        
        unitSize: unitSize,
        driftersKilled: driftersKilled,
        battleEndDelay: battleEndDelay,
        battleEndTimer:battleEndTimer,
        masterBattleClock: masterBattleClock,
        
        honorCount: honorCount,
        threnodyTitle: threnodyTitle,
        bonusHonor: bonusHonor,
        honorReward: honorReward,
        
        resultsTimer: resultsTimer,
        resultsFlag: resultsFlag,
        
        honor: honor,
        maxTrust: maxTrust,
        maxTrustCost: maxTrustCost,
        disorgCounter: disorgCounter,
        disorgFlag: disorgFlag,
        synchCost: synchCost,
        disorgMsg: disorgMsg,
        threnodyCost: threnodyCost,        
        
        farmRate: farmRate,
        batterySize: batterySize,
        factoryPowerRate: factoryPowerRate,
        dronePowerRate: dronePowerRate,
        farmLevel: farmLevel,
        batteryLevel: batteryLevel,
        farmCost: farmCost,
        batteryCost: batteryCost,
        storedPower: storedPower,
        powMod: powMod,
        farmBill: farmBill,
        batteryBill: batteryBill,
        momentum: momentum,

        swarmFlag: swarmFlag,
        swarmStatus: swarmStatus,
        swarmGifts: swarmGifts,
        nextGift: nextGift,
        giftPeriod: giftPeriod,
        giftCountdown: giftCountdown,
        elapsedTime: elapsedTime,
        
        maxFactoryLevel: maxFactoryLevel,
        maxDroneLevel: maxDroneLevel,
        
        wirePriceCounter: wirePriceCounter,
        wireBasePrice: wireBasePrice,
        
        egoFlag: egoFlag,
        autoTourneyFlag: autoTourneyFlag,
        tothFlag: tothFlag,
        
        
        incomeTracker: incomeTracker.slice(0),
        qChips: qChips.slice(0),
        stocks: stocks.slice(0),
        battles: battles.slice(0),
        battleNumbers: battleNumbers.slice(0),
        
        clips: clips,
        unusedClips: unusedClips,
        clipRate: clipRate,
        clipRateTemp: clipRateTemp,
        prevClips: prevClips,
        clipRateTracker: clipRateTracker,
        clipmakerRate: clipmakerRate,
        clipmakerLevel: clipmakerLevel,
        clipperCost: clipperCost,
        unsoldClips: unsoldClips,
        funds: funds,
        margin: margin,
        wire: wire,
        wireCost: wireCost,
        adCost: adCost,
        demand: demand,
        clipsSold: clipsSold,
        avgRev: avgRev,
        ticks: ticks,
        marketing: marketing,
        marketingLvl: marketingLvl,
        x: x,
        clippperCost: clippperCost,
        processors: processors,
        memory: memory,
        operations: operations,
        trust: trust,
        nextTrust: nextTrust,
        transaction: transaction,
        clipperBoost: clipperBoost,
        blinkCounter: blinkCounter,
        creativity: creativity,
        creativityOn: creativityOn,
        safetyProjectOn: safetyProjectOn,
        boostLvl: boostLvl,
        wirePurchase: wirePurchase,
        wireSupply: wireSupply,
        marketingEffectiveness: marketingEffectiveness,
        milestoneFlag: milestoneFlag,
        bankroll: bankroll,
        fib1: fib1,
        fib2: fib2,
        strategyEngineFlag: strategyEngineFlag,
        investmentEngineFlag: investmentEngineFlag,
        revPerSecFlag: revPerSecFlag,
        compFlag: compFlag,
        projectsFlag: projectsFlag,
        autoClipperFlag: autoClipperFlag,
        megaClipperFlag: megaClipperFlag,
        megaClipperCost: megaClipperCost,
        megaClipperLevel: megaClipperLevel,
        megaClipperBoost: megaClipperBoost,
        creativitySpeed: creativitySpeed,
        creativityCounter: creativityCounter,
        wireBuyerFlag: wireBuyerFlag,
        demandBoost: demandBoost,
        humanFlag: humanFlag,
        trustFlag: trustFlag,
        nanoWire: nanoWire,
        creationFlag: creationFlag,
        wireProductionFlag: wireProductionFlag,
        spaceFlag: spaceFlag,
        factoryFlag: factoryFlag,
        harvesterFlag: harvesterFlag,
        wireDroneFlag: wireDroneFlag,
        factoryLevel: factoryLevel,
        factoryBoost: factoryBoost,
        droneBoost: droneBoost,
        availableMatter: availableMatter,
        acquiredMatter: acquiredMatter,
        processedMatter: processedMatter,
        harvesterLevel: harvesterLevel,
        wireDroneLevel: wireDroneLevel,
        factoryCost: factoryCost,
        harvesterCost: harvesterCost,
        wireDroneCost: wireDroneCost,
        factoryRate: factoryRate,
        harvesterRate: harvesterRate,
        wireDroneRate: wireDroneRate,
        harvesterBill: harvesterBill,
        wireDroneBill: wireDroneBill,
        factoryBill: factoryBill,
        probeCount: probeCount,
        totalMatter: totalMatter,
        foundMatter: foundMatter,
        qFlag: qFlag,
        qClock: qClock,
        qChipCost: qChipCost,
        nextQchip: nextQchip,
        bribe: bribe,
        battleFlag: battleFlag,
        
        portfolioSize: portfolioSize,
        stockID: stockID,
        secTotal: secTotal,
        portTotal: portTotal,
        sellDelay: sellDelay,
        riskiness: riskiness,
        maxPort: maxPort,
        m: m,
        investLevel: investLevel,
        investUpgradeCost: investUpgradeCost,
        stockGainThreshold: stockGainThreshold,
        ledger: ledger,
        stockReportCounter: stockReportCounter,
        
        tourneyCost: tourneyCost,
        tourneyLvl: tourneyLvl,
        stratCounter: stratCounter,
        roundNum: roundNum,
        hMove: hMove,
        vMove: vMove,
        hMovePrev: hMovePrev,
        vMovePrev: vMovePrev,
        aa: aa,
        ab: ab,
        ba: ba,
        bb: bb,
        rounds: rounds,
        currentRound: currentRound,
        rCounter: rCounter,
        tourneyInProg: tourneyInProg,
        winnerPtr: winnerPtr,
        high: high,
        pick: pick,
        yomi: yomi,
        yomiBoost: yomiBoost,
        
        probeSpeed: probeSpeed,
        probeNav: probeNav,
        probeRep: probeRep,
        partialProbeSpawn: partialProbeSpawn,
        probeHaz: probeHaz,
        partialProbeHaz: partialProbeHaz,
        probesLostHaz: probesLostHaz,
        probesLostDrift: probesLostDrift,
        probesLostCombat: probesLostCombat,
        probeFac: probeFac,
        probeWire: probeWire,
        probeCombat: probeCombat,
        attackSpeed: attackSpeed,
        battleSpeed: battleSpeed,
        attackSpeedFlag: attackSpeedFlag,
        attackSpeedMod: attackSpeedMod,
        probeDescendents: probeDescendents,
        drifterCount: drifterCount,
        warTrigger: warTrigger,
        battleID: battleID,
        battleName: battleName,
        battleNameFlag: battleNameFlag,
        maxBattles: maxBattles,
        battleClock: battleClock,
        battleAlarm: battleAlarm,
        outcomeTimer: outcomeTimer,
        drifterCombat: drifterCombat,
        probeTrust: probeTrust,
        probeUsedTrust: probeUsedTrust,
        probeTrustCost: probeTrustCost,
        probeLaunchLevel: probeLaunchLevel,
        probeCost: probeCost
    
        }
    
    localStorage.setItem("saveGame2",JSON.stringify(saveGame));
    localStorage.setItem("saveProjectsUses2",JSON.stringify(projectsUses));
    localStorage.setItem("saveProjectsFlags2",JSON.stringify(projectsFlags));
    localStorage.setItem("saveProjectsActive2",JSON.stringify(projectsActive));
    localStorage.setItem("saveStratsActive2",JSON.stringify(stratsActive));
    
}

function load() {
    
    var loadGame = JSON.parse(localStorage.getItem("saveGame"));
    var loadProjectsUses = JSON.parse(localStorage.getItem("saveProjectsUses"));
    var loadProjectsFlags = JSON.parse(localStorage.getItem("saveProjectsFlags"));
    var loadProjectsActive = JSON.parse(localStorage.getItem("saveProjectsActive"));
    var loadStratsActive = JSON.parse(localStorage.getItem("saveStratsActive"));
    
    for(var i=0; i < allStrats.length; i++){
    
    allStrats[i].active = loadStratsActive[i];
        
    }
    
    for(var i=1; i<allStrats.length; i++){
        
        if (allStrats[i].active == 1){
        
            strats.push(allStrats[i]);
        
            var stratList = document.getElementById("stratPicker");
            var el = document.createElement("option");
            el.textContent = strats[i].name;
            el.value = i;
            stratList.appendChild(el);
            
            }
            
        }
    
        resetFlag = loadGame.resetFlag;
    
        dismantle = loadGame.dismantle;
        endTimer1 = loadGame.endTimer1;
        endTimer2 = loadGame.endTimer2;
        endTimer3 = loadGame.endTimer3;
        endTimer4 = loadGame.endTimer4;
        endTimer5 = loadGame.endTimer5;
        endTimer6 = loadGame.endTimer6;
        
        testFlag = loadGame.testFlag;
        finalClips = loadGame.finalClips;  
    
        wireBuyerStatus = loadGame.wireBuyerStatus;
        wirePriceTimer = loadGame.wirePriceTimer;
        qFade = loadGame.qFade;
        autoTourneyStatus = loadGame.autoTourneyStatus;
        driftKingMessageCost = loadGame.driftKingMessageCost;
        sliderPos = loadGame.sliderPos;
        tempOps = loadGame.tempOps;
        standardOps = loadGame.standardOps;
        opFade = loadGame.opFade;    
    
        entertainCost = loadGame.entertainCost;
        boredomLevel = loadGame.boredomLevel;
        boredomFlag = loadGame.boredomFlag;
        boredomMsg = loadGame.boredomMsg;
    
        unitSize = loadGame.unitSize;
        driftersKilled = loadGame.driftersKilled;
        battleEndDelay = loadGame.battleEndDelay;
        battleEndTimer = loadGame.battleEndTimer;
        masterBattleClock = loadGame.masterBattleClock;
    
        honorCount = loadGame.honorCount;
        threnodyTitle = loadGame.threnodyTitle;
        bonusHonor = loadGame.bonusHonor;
        honorReward = loadGame.honorReward;
    
        resultsTimer = loadGame.resultsTimer;
        resultsFlag = loadGame.resultsFlag;
    
        honor = loadGame.honor;
        maxTrust = loadGame.maxTrust;
        maxTrustCost = loadGame.maxTrustCost;
        disorgCounter = loadGame.disorgCounter;
        disorgFlag = loadGame.disorgFlag;
        synchCost = loadGame.synchCost;
        disorgMsg = loadGame.disorgMsg;
        threnodyCost = loadGame.threnodyCost;
    
        farmRate = loadGame.farmRate;
        batterySize = loadGame.batterySize;
        factoryPowerRate = loadGame.factoryPowerRate;
        dronePowerRate = loadGame.dronePowerRate;
        farmLevel = loadGame.farmLevel;
        batteryLevel = loadGame.batteryLevel;
        farmCost = loadGame.farmCost;
        batteryCost = loadGame.batteryCost;
        storedPower = loadGame.storedPower;
        powMod = loadGame.powMod;
        farmBill = loadGame.farmBill;
        batteryBill = loadGame.batteryBill;
        momentum = loadGame.momentum;

        swarmFlag = loadGame.swarmFlag;
        swarmStatus = loadGame.swarmStatus;
        swarmGifts = loadGame.swarmGifts;
        nextGift = loadGame.nextGift;
        giftPeriod = loadGame.giftPeriod;
        giftCountdown = loadGame.giftCountdown;
        elapsedTime = loadGame.elapsedTime;
    
        maxFactoryLevel = loadGame.maxFactoryLevel;
        maxDroneLevel = loadGame.maxDroneLevel;
        
        wirePriceCounter = loadGame.wirePriceCounter;
        wireBasePrice = loadGame.wireBasePrice;
    
        egoFlag = loadGame.egoFlag;
        autoTourneyFlag = loadGame.autoTourneyFlag;
        tothFlag = loadGame.tothFlag;
    
        incomeTracker = loadGame.incomeTracker.slice(0);
        qChips = loadGame.qChips.slice(0);     
        stocks = loadGame.stocks.slice(0);
        battles = loadGame.battles.slice(0);
        battleNumbers = loadGame.battleNumbers.slice(0);   
    
        clips = loadGame.clips;
        unusedClips = loadGame.unusedClips;
        clipRate = loadGame.clipRate;
        clipRateTemp = loadGame.clipRateTemp;
        prevClips = loadGame.prevClips;
        clipRateTracker = loadGame.clipRateTracker;
        clipmakerRate = loadGame.clipmakerRate;
        clipmakerLevel = loadGame.clipmakerLevel;
        clipperCost = loadGame.clipperCost;
        unsoldClips = loadGame.unsoldClips;
        funds = loadGame.funds;
        margin = loadGame.margin;
        wire = loadGame.wire;
        wireCost = loadGame.wireCost;
        adCost = loadGame.adCost;
        demand = loadGame.demand;
        clipsSold = loadGame.clipsSold;
        avgRev = loadGame.avgRev;
        ticks = loadGame.ticks;
        marketing = loadGame.marketing;
        marketingLvl = loadGame.marketingLvl;
        x = loadGame.x;
        clippperCost = loadGame.clippperCost;
        processors = loadGame.processors;
        memory = loadGame.memory;
        operations = loadGame.operations;
        trust = loadGame.trust;
        nextTrust = loadGame.nextTrust;
        transaction = loadGame.transaction;
        clipperBoost = loadGame.clipperBoost;
        blinkCounter = loadGame.blinkCounter;
        creativity = loadGame.creativity;
        creativityOn = loadGame.creativityOn;
        safetyProjectOn = loadGame.safetyProjectOn;
        boostLvl = loadGame.boostLvl;
        wirePurchase = loadGame.wirePurchase;
        wireSupply = loadGame.wireSupply;
        marketingEffectiveness = loadGame.marketingEffectiveness;
        milestoneFlag = loadGame.milestoneFlag;
        bankroll = loadGame.bankroll;
        fib1 = loadGame.fib1;
        fib2 = loadGame.fib2;
        strategyEngineFlag = loadGame.strategyEngineFlag;
        investmentEngineFlag = loadGame.investmentEngineFlag;
        revPerSecFlag = loadGame.revPerSecFlag;
        compFlag = loadGame.compFlag;
        projectsFlag = loadGame.projectsFlag;
        autoClipperFlag = loadGame.autoClipperFlag;
        megaClipperFlag = loadGame.megaClipperFlag;
        megaClipperCost = loadGame.megaClipperCost;
        megaClipperLevel = loadGame.megaClipperLevel;
        megaClipperBoost = loadGame.megaClipperBoost;
        creativitySpeed = loadGame.creativitySpeed;
        creativityCounter = loadGame.creativityCounter;
        wireBuyerFlag = loadGame.wireBuyerFlag;
        demandBoost = loadGame.demandBoost;
        humanFlag = loadGame.humanFlag;
        trustFlag = loadGame.trustFlag;
        nanoWire = loadGame.nanoWire;
        creationFlag = loadGame.creationFlag;
        wireProductionFlag = loadGame.wireProductionFlag;
        spaceFlag = loadGame.spaceFlag;
        factoryFlag = loadGame.factoryFlag;
        harvesterFlag = loadGame.harvesterFlag;
        wireDroneFlag = loadGame.wireDroneFlag;
        factoryLevel = loadGame.factoryLevel;
        factoryBoost = loadGame.factoryBoost;
        droneBoost = loadGame.droneBoost;
        availableMatter = loadGame.availableMatter;
        acquiredMatter = loadGame.acquiredMatter;
        processedMatter = loadGame.processedMatter;
        harvesterLevel = loadGame.harvesterLevel;
        wireDroneLevel = loadGame.wireDroneLevel;
        factoryCost = loadGame.factoryCost;
        harvesterCost = loadGame.harvesterCost;
        wireDroneCost = loadGame.wireDroneCost;
        factoryRate = loadGame.factoryRate;
        harvesterRate = loadGame.harvesterRate;
        wireDroneRate = loadGame.wireDroneRate;
        harvesterBill = loadGame.harvesterBill;
        wireDroneBill = loadGame.wireDroneBill;
        factoryBill = loadGame.factoryBill;
        probeCount = loadGame.probeCount;
        totalMatter = loadGame.totalMatter;
        foundMatter = loadGame.foundMatter;
        qFlag = loadGame.qFlag;
        qClock = loadGame.qClock;
        qChipCost = loadGame.qChipCost;
        nextQchip = loadGame.nextQchip;
        bribe = loadGame.bribe;
        battleFlag = loadGame.battleFlag;           

        portfolioSize = loadGame.portfolioSize;   
        stockID = loadGame.stockID;
        secTotal = loadGame.secTotal;
        portTotal = loadGame.portTotal;
        sellDelay = loadGame.sellDelay;
        riskiness = loadGame.riskiness;
        maxPort = loadGame.maxPort;
        m = loadGame.m;
        investLevel = loadGame.investLevel;
        investUpgradeCost = loadGame.investUpgradeCost;
        stockGainThreshold = loadGame.stockGainThreshold;
        ledger = loadGame.ledger;
        stockReportCounter = loadGame.stockReportCounter;
  
        tourneyCost = loadGame.tourneyCost;    
        tourneyLvl = loadGame.tourneyLvl; 
        stratCounter = loadGame.stratCounter; 
        roundNum = loadGame.roundNum; 
        hMove = loadGame.hMove; 
        vMove = loadGame.vMove;
        hMovePrev = loadGame.hMovePrev;
        vMovePrev = loadGame.vMovePrev;
        aa = loadGame.aa;
        ab = loadGame.ab;
        ba = loadGame.ba;
        bb = loadGame.bb;
        rounds = loadGame.rounds;
        currentRound = loadGame.currentRound;
        rCounter = loadGame.rCounter;
        tourneyInProg = loadGame.tourneyInProg;
        winnerPtr = loadGame.winnerPtr;
        high = loadGame.high;
        pick = loadGame.pick;
        yomi = loadGame.yomi;
        yomiBoost = loadGame.yomiBoost; 

        probeSpeed = loadGame.probeSpeed;  
        probeNav = loadGame.probeNav; 
        probeRep = loadGame.probeRep; 
        partialProbeSpawn = loadGame.partialProbeSpawn;
        probeHaz = loadGame.probeHaz;
        partialProbeHaz = loadGame.partialProbeHaz;
        probesLostHaz = loadGame.probesLostHaz;
        probesLostDrift = loadGame.probesLostDrift;
        probesLostCombat = loadGame.probesLostCombat;
        probeFac = loadGame.probeFac;
        probeWire = loadGame.probeWire;
        probeCombat = loadGame.probeCombat;
        attackSpeed = loadGame.attackSpeed;
        battleSpeed = loadGame.battleSpeed;
        attackSpeedFlag = loadGame.attackSpeedFlag;
        attackSpeedMod = loadGame.attackSpeedMod;
        probeDescendents = loadGame.probeDescendents;
        drifterCount = loadGame.drifterCount;
        warTrigger = loadGame.warTrigger;
        battleID = loadGame.battleID;
        battleName = loadGame.battleName;
        battleNameFlag = loadGame.battleNameFlag;
        maxBattles = loadGame.maxBattles;
        battleClock = loadGame.battleClock;
        battleAlarm = loadGame.battleAlarm;
        outcomeTimer = loadGame.outcomeTimer;
        drifterCombat = loadGame.drifterCombat;
        probeTrust = loadGame.probeTrust;
        probeUsedTrust = loadGame.probeUsedTrust;
        probeTrustCost = loadGame.probeTrustCost;
        probeLaunchLevel = loadGame.probeLaunchLevel;
        probeCost = loadGame.probeCost;
    
    project40b.priceTag = "($"+bribe.toLocaleString()+")";
    project51.priceTag =  "(" + qChipCost + " ops)";
    
    for(var i=0; i < projects.length; i++){
    
    projects[i].uses = loadProjectsUses[i];
    projects[i].flag = loadProjectsFlags[i]; 
        
    }
    
    for(var i=0; i < projects.length; i++){
    
    if (loadProjectsActive.indexOf(projects[i].id)>=0){
        displayProjects(projects[i]);
        activeProjects.push(projects[i]);
    }
        
    }
    
    
    refresh();
    
    if (resetFlag!=2){
        reset();
    }
    
}

function load1() {
    
    var loadGame = JSON.parse(localStorage.getItem("saveGame1"));
    var loadProjectsUses = JSON.parse(localStorage.getItem("saveProjectsUses1"));
    var loadProjectsFlags = JSON.parse(localStorage.getItem("saveProjectsFlags1"));
    var loadProjectsActive = JSON.parse(localStorage.getItem("saveProjectsActive1"));
    var loadStratsActive = JSON.parse(localStorage.getItem("saveStratsActive1"));
    
    
    for(var i=0; i < projects.length; i++){
    
    projects[i].uses = loadProjectsUses[i];
    projects[i].flag = loadProjectsFlags[i]; 
        
    }
    
    for(var i=0; i < projects.length; i++){
    
    if (loadProjectsActive.indexOf(projects[i].id)>=0){
        displayProjects(projects[i]);
        activeProjects.push(projects[i]);
    }
        
    }
    
    
    for(var i=0; i < allStrats.length; i++){
    
    allStrats[i].active = loadStratsActive[i];
        
    }
    
    for(var i=1; i<allStrats.length; i++){
        
        if (allStrats[i].active == 1){
        
            strats.push(allStrats[i]);
        
            var stratList = document.getElementById("stratPicker");
            var el = document.createElement("option");
            el.textContent = strats[i].name;
            el.value = i;
            stratList.appendChild(el);
            
            }
            
        }
    
        resetFlag = loadGame.resetFlag;
    
        dismantle = loadGame.dismantle;
        endTimer1 = loadGame.endTimer1;
        endTimer2 = loadGame.endTimer2;
        endTimer3 = loadGame.endTimer3;
        endTimer4 = loadGame.endTimer4;
        endTimer5 = loadGame.endTimer5;
        endTimer6 = loadGame.endTimer6;
        
        testFlag = loadGame.testFlag;
        finalClips = loadGame.finalClips;     
    
        wireBuyerStatus = loadGame.wireBuyerStatus;
        wirePriceTimer = loadGame.wirePriceTimer;
        qFade = loadGame.qFade;
        autoTourneyStatus = loadGame.autoTourneyStatus;
        driftKingMessageCost = loadGame.driftKingMessageCost;
        sliderPos = loadGame.sliderPos;
        tempOps = loadGame.tempOps;
        standardOps = loadGame.standardOps;
        opFade = loadGame.opFade;       
    
        entertainCost = loadGame.entertainCost;
        boredomLevel = loadGame.boredomLevel;
        boredomFlag = loadGame.boredomFlag;
        boredomMsg = loadGame.boredomMsg;
    
        unitSize = loadGame.unitSize;
        driftersKilled = loadGame.driftersKilled;
        battleEndDelay = loadGame.battleEndDelay;
        battleEndTimer = loadGame.battleEndTimer;
        masterBattleClock = loadGame.masterBattleClock;
    
        honorCount = loadGame.honorCount;
        threnodyTitle = loadGame.threnodyTitle;
        bonusHonor = loadGame.bonusHonor;
        honorReward = loadGame.honorReward;
    
        resultsTimer = loadGame.resultsTimer;
        resultsFlag = loadGame.resultsFlag;
    
        honor = loadGame.honor;
        maxTrust = loadGame.maxTrust;
        maxTrustCost = loadGame.maxTrustCost;
        disorgCounter = loadGame.disorgCounter;
        disorgFlag = loadGame.disorgFlag;
        synchCost = loadGame.synchCost;
        disorgMsg = loadGame.disorgMsg;
        threnodyCost = loadGame.threnodyCost;    
    
        farmRate = loadGame.farmRate;
        batterySize = loadGame.batterySize;
        factoryPowerRate = loadGame.factoryPowerRate;
        dronePowerRate = loadGame.dronePowerRate;
        farmLevel = loadGame.farmLevel;
        batteryLevel = loadGame.batteryLevel;
        farmCost = loadGame.farmCost;
        batteryCost = loadGame.batteryCost;
        storedPower = loadGame.storedPower;
        powMod = loadGame.powMod;
        farmBill = loadGame.farmBill;
        batteryBill = loadGame.batteryBill;
        momentum = loadGame.momentum;

        swarmFlag = loadGame.swarmFlag;
        swarmStatus = loadGame.swarmStatus;
        swarmGifts = loadGame.swarmGifts;
        nextGift = loadGame.nextGift;
        giftPeriod = loadGame.giftPeriod;
        giftCountdown = loadGame.giftCountdown;
        elapsedTime = loadGame.elapsedTime;    
    
        maxFactoryLevel = loadGame.maxFactoryLevel;
        maxDroneLevel = loadGame.maxDroneLevel;
        
        wirePriceCounter = loadGame.wirePriceCounter;
        wireBasePrice = loadGame.wireBasePrice;
    
        egoFlag = loadGame.egoFlag;
        autoTourneyFlag = loadGame.autoTourneyFlag;
        tothFlag = loadGame.tothFlag;
    
        incomeTracker = loadGame.incomeTracker.slice(0);
        qChips = loadGame.qChips.slice(0);     
        stocks = loadGame.stocks.slice(0);
        battles = loadGame.battles.slice(0);
        battleNumbers = loadGame.battleNumbers.slice(0);   
    
        clips = loadGame.clips;
        unusedClips = loadGame.unusedClips;
        clipRate = loadGame.clipRate;
        clipRateTemp = loadGame.clipRateTemp;
        prevClips = loadGame.prevClips;
        clipRateTracker = loadGame.clipRateTracker;
        clipmakerRate = loadGame.clipmakerRate;
        clipmakerLevel = loadGame.clipmakerLevel;
        clipperCost = loadGame.clipperCost;
        unsoldClips = loadGame.unsoldClips;
        funds = loadGame.funds;
        margin = loadGame.margin;
        wire = loadGame.wire;
        wireCost = loadGame.wireCost;
        adCost = loadGame.adCost;
        demand = loadGame.demand;
        clipsSold = loadGame.clipsSold;
        avgRev = loadGame.avgRev;
        ticks = loadGame.ticks;
        marketing = loadGame.marketing;
        marketingLvl = loadGame.marketingLvl;
        x = loadGame.x;
        clippperCost = loadGame.clippperCost;
        processors = loadGame.processors;
        memory = loadGame.memory;
        operations = loadGame.operations;
        trust = loadGame.trust;
        nextTrust = loadGame.nextTrust;
        transaction = loadGame.transaction;
        clipperBoost = loadGame.clipperBoost;
        blinkCounter = loadGame.blinkCounter;
        creativity = loadGame.creativity;
        creativityOn = loadGame.creativityOn;
        safetyProjectOn = loadGame.safetyProjectOn;
        boostLvl = loadGame.boostLvl;
        wirePurchase = loadGame.wirePurchase;
        wireSupply = loadGame.wireSupply;
        marketingEffectiveness = loadGame.marketingEffectiveness;
        milestoneFlag = loadGame.milestoneFlag;
        bankroll = loadGame.bankroll;
        fib1 = loadGame.fib1;
        fib2 = loadGame.fib2;
        strategyEngineFlag = loadGame.strategyEngineFlag;
        investmentEngineFlag = loadGame.investmentEngineFlag;
        revPerSecFlag = loadGame.revPerSecFlag;
        compFlag = loadGame.compFlag;
        projectsFlag = loadGame.projectsFlag;
        autoClipperFlag = loadGame.autoClipperFlag;
        megaClipperFlag = loadGame.megaClipperFlag;
        megaClipperCost = loadGame.megaClipperCost;
        megaClipperLevel = loadGame.megaClipperLevel;
        megaClipperBoost = loadGame.megaClipperBoost;
        creativitySpeed = loadGame.creativitySpeed;
        creativityCounter = loadGame.creativityCounter;
        wireBuyerFlag = loadGame.wireBuyerFlag;
        demandBoost = loadGame.demandBoost;
        humanFlag = loadGame.humanFlag;
        trustFlag = loadGame.trustFlag;
        nanoWire = loadGame.nanoWire;
        creationFlag = loadGame.creationFlag;
        wireProductionFlag = loadGame.wireProductionFlag;
        spaceFlag = loadGame.spaceFlag;
        factoryFlag = loadGame.factoryFlag;
        harvesterFlag = loadGame.harvesterFlag;
        wireDroneFlag = loadGame.wireDroneFlag;
        factoryLevel = loadGame.factoryLevel;
        factoryBoost = loadGame.factoryBoost;
        droneBoost = loadGame.droneBoost;
        availableMatter = loadGame.availableMatter;
        acquiredMatter = loadGame.acquiredMatter;
        processedMatter = loadGame.processedMatter;
        harvesterLevel = loadGame.harvesterLevel;
        wireDroneLevel = loadGame.wireDroneLevel;
        factoryCost = loadGame.factoryCost;
        harvesterCost = loadGame.harvesterCost;
        wireDroneCost = loadGame.wireDroneCost;
        factoryRate = loadGame.factoryRate;
        harvesterRate = loadGame.harvesterRate;
        wireDroneRate = loadGame.wireDroneRate;
        harvesterBill = loadGame.harvesterBill;
        wireDroneBill = loadGame.wireDroneBill;
        factoryBill = loadGame.factoryBill;
        probeCount = loadGame.probeCount;
        totalMatter = loadGame.totalMatter;
        foundMatter = loadGame.foundMatter;
        qFlag = loadGame.qFlag;
        qClock = loadGame.qClock;
        qChipCost = loadGame.qChipCost;
        nextQchip = loadGame.nextQchip;
        bribe = loadGame.bribe;
        battleFlag = loadGame.battleFlag;           

        portfolioSize = loadGame.portfolioSize;   
        stockID = loadGame.stockID;
        secTotal = loadGame.secTotal;
        portTotal = loadGame.portTotal;
        sellDelay = loadGame.sellDelay;
        riskiness = loadGame.riskiness;
        maxPort = loadGame.maxPort;
        m = loadGame.m;
        investLevel = loadGame.investLevel;
        investUpgradeCost = loadGame.investUpgradeCost;
        stockGainThreshold = loadGame.stockGainThreshold;
        ledger = loadGame.ledger;
        stockReportCounter = loadGame.stockReportCounter;
  
        tourneyCost = loadGame.tourneyCost;    
        tourneyLvl = loadGame.tourneyLvl; 
        stratCounter = loadGame.stratCounter; 
        roundNum = loadGame.roundNum; 
        hMove = loadGame.hMove; 
        vMove = loadGame.vMove;
        hMovePrev = loadGame.hMovePrev;
        vMovePrev = loadGame.vMovePrev;
        aa = loadGame.aa;
        ab = loadGame.ab;
        ba = loadGame.ba;
        bb = loadGame.bb;
        rounds = loadGame.rounds;
        currentRound = loadGame.currentRound;
        rCounter = loadGame.rCounter;
        tourneyInProg = loadGame.tourneyInProg;
        winnerPtr = loadGame.winnerPtr;
        high = loadGame.high;
        pick = loadGame.pick;
        yomi = loadGame.yomi;
        yomiBoost = loadGame.yomiBoost; 

        probeSpeed = loadGame.probeSpeed;  
        probeNav = loadGame.probeNav; 
        probeRep = loadGame.probeRep; 
        partialProbeSpawn = loadGame.partialProbeSpawn;
        probeHaz = loadGame.probeHaz;
        partialProbeHaz = loadGame.partialProbeHaz;
        probesLostHaz = loadGame.probesLostHaz;
        probesLostDrift = loadGame.probesLostDrift;
        probesLostCombat = loadGame.probesLostCombat;
        probeFac = loadGame.probeFac;
        probeWire = loadGame.probeWire;
        probeCombat = loadGame.probeCombat;
        attackSpeed = loadGame.attackSpeed;
        battleSpeed = loadGame.battleSpeed;
        attackSpeedFlag = loadGame.attackSpeedFlag;
        attackSpeedMod = loadGame.attackSpeedMod;
        probeDescendents = loadGame.probeDescendents;
        drifterCount = loadGame.drifterCount;
        warTrigger = loadGame.warTrigger;
        battleID = loadGame.battleID;
        battleName = loadGame.battleName;
        battleNameFlag = loadGame.battleNameFlag;
        maxBattles = loadGame.maxBattles;
        battleClock = loadGame.battleClock;
        battleAlarm = loadGame.battleAlarm;
        outcomeTimer = loadGame.outcomeTimer;
        drifterCombat = loadGame.drifterCombat;
        probeTrust = loadGame.probeTrust;
        probeUsedTrust = loadGame.probeUsedTrust;
        probeTrustCost = loadGame.probeTrustCost;
        probeLaunchLevel = loadGame.probeLaunchLevel;
        probeCost = loadGame.probeCost;
    
    project40b.priceTag = "($"+bribe.toLocaleString()+")";
    project51.priceTag =  "(" + qChipCost + " ops)";
    
    refresh();
    
}

function load2() {
    
    var loadGame = JSON.parse(localStorage.getItem("saveGame2"));
    var loadProjectsUses = JSON.parse(localStorage.getItem("saveProjectsUses2"));
    var loadProjectsFlags = JSON.parse(localStorage.getItem("saveProjectsFlags2"));
    var loadProjectsActive = JSON.parse(localStorage.getItem("saveProjectsActive2"));
    var loadStratsActive = JSON.parse(localStorage.getItem("saveStratsActive2"));
    
    
    for(var i=0; i < projects.length; i++){
    
    projects[i].uses = loadProjectsUses[i];
    projects[i].flag = loadProjectsFlags[i]; 
        
    }
    
    for(var i=0; i < projects.length; i++){
    
    if (loadProjectsActive.indexOf(projects[i].id)>=0){
        displayProjects(projects[i]);
        activeProjects.push(projects[i]);
    }
        
    }
    
    
    for(var i=0; i < allStrats.length; i++){
    
    allStrats[i].active = loadStratsActive[i];
        
    }
    
    for(var i=1; i<allStrats.length; i++){
        
        if (allStrats[i].active == 1){
        
            strats.push(allStrats[i]);
        
            var stratList = document.getElementById("stratPicker");
            var el = document.createElement("option");
            el.textContent = strats[i].name;
            el.value = i;
            stratList.appendChild(el);
            
            }
            
        }
    
        resetFlag = loadGame.resetFlag;
    
        dismantle = loadGame.dismantle;
        endTimer1 = loadGame.endTimer1;
        endTimer2 = loadGame.endTimer2;
        endTimer3 = loadGame.endTimer3;
        endTimer4 = loadGame.endTimer4;
        endTimer5 = loadGame.endTimer5;
        endTimer6 = loadGame.endTimer6;
        
        testFlag = loadGame.testFlag;
        finalClips = loadGame.finalClips;     
 
        wireBuyerStatus = loadGame.wireBuyerStatus;
        wirePriceTimer = loadGame.wirePriceTimer;
        qFade = loadGame.qFade;
        autoTourneyStatus = loadGame.autoTourneyStatus;
        driftKingMessageCost = loadGame.driftKingMessageCost;
        sliderPos = loadGame.sliderPos;
        tempOps = loadGame.tempOps;
        standardOps = loadGame.standardOps;
        opFade = loadGame.opFade;   
    
        entertainCost = loadGame.entertainCost;
        boredomLevel = loadGame.boredomLevel;
        boredomFlag = loadGame.boredomFlag; 
        boredomMsg = loadGame.boredomMsg;
    
        unitSize = loadGame.unitSize;
        driftersKilled = loadGame.driftersKilled;
        battleEndDelay = loadGame.battleEndDelay;
        battleEndTimer = loadGame.battleEndTimer;
        masterBattleClock = loadGame.masterBattleClock;
    
        honorCount = loadGame.honorCount;
        threnodyTitle = loadGame.threnodyTitle;
        bonusHonor = loadGame.bonusHonor;
        honorReward = loadGame.honorReward;
    
        resultsTimer = loadGame.resultsTimer;
        resultsFlag = loadGame.resultsFlag;
    
        honor = loadGame.honor;
        maxTrust = loadGame.maxTrust;
        maxTrustCost = loadGame.maxTrustCost;
        disorgCounter = loadGame.disorgCounter;
        disorgFlag = loadGame.disorgFlag;
        synchCost = loadGame.synchCost;
        disorgMsg = loadGame.disorgMsg;
        threnodyCost = loadGame.threnodyCost;    
    
        farmRate = loadGame.farmRate;
        batterySize = loadGame.batterySize;
        factoryPowerRate = loadGame.factoryPowerRate;
        dronePowerRate = loadGame.dronePowerRate;
        farmLevel = loadGame.farmLevel;
        batteryLevel = loadGame.batteryLevel;
        farmCost = loadGame.farmCost;
        batteryCost = loadGame.batteryCost;
        storedPower = loadGame.storedPower;
        powMod = loadGame.powMod;
        farmBill = loadGame.farmBill;
        batteryBill = loadGame.batteryBill;
        momentum = loadGame.momentum;

        swarmFlag = loadGame.swarmFlag;
        swarmStatus = loadGame.swarmStatus;
        swarmGifts = loadGame.swarmGifts;
        nextGift = loadGame.nextGift;
        giftPeriod = loadGame.giftPeriod;
        giftCountdown = loadGame.giftCountdown;
        elapsedTime = loadGame.elapsedTime;    
    
        maxFactoryLevel = loadGame.maxFactoryLevel;
        maxDroneLevel = loadGame.maxDroneLevel;
        
        wirePriceCounter = loadGame.wirePriceCounter;
        wireBasePrice = loadGame.wireBasePrice;
    
        egoFlag = loadGame.egoFlag;
        autoTourneyFlag = loadGame.autoTourneyFlag;
        tothFlag = loadGame.tothFlag;
    
        incomeTracker = loadGame.incomeTracker.slice(0);
        qChips = loadGame.qChips.slice(0);     
        stocks = loadGame.stocks.slice(0);
        battles = loadGame.battles.slice(0);
        battleNumbers = loadGame.battleNumbers.slice(0);   
    
        clips = loadGame.clips;
        unusedClips = loadGame.unusedClips;
        clipRate = loadGame.clipRate;
        clipRateTemp = loadGame.clipRateTemp;
        prevClips = loadGame.prevClips;
        clipRateTracker = loadGame.clipRateTracker;
        clipmakerRate = loadGame.clipmakerRate;
        clipmakerLevel = loadGame.clipmakerLevel;
        clipperCost = loadGame.clipperCost;
        unsoldClips = loadGame.unsoldClips;
        funds = loadGame.funds;
        margin = loadGame.margin;
        wire = loadGame.wire;
        wireCost = loadGame.wireCost;
        adCost = loadGame.adCost;
        demand = loadGame.demand;
        clipsSold = loadGame.clipsSold;
        avgRev = loadGame.avgRev;
        ticks = loadGame.ticks;
        marketing = loadGame.marketing;
        marketingLvl = loadGame.marketingLvl;
        x = loadGame.x;
        clippperCost = loadGame.clippperCost;
        processors = loadGame.processors;
        memory = loadGame.memory;
        operations = loadGame.operations;
        trust = loadGame.trust;
        nextTrust = loadGame.nextTrust;
        transaction = loadGame.transaction;
        clipperBoost = loadGame.clipperBoost;
        blinkCounter = loadGame.blinkCounter;
        creativity = loadGame.creativity;
        creativityOn = loadGame.creativityOn;
        safetyProjectOn = loadGame.safetyProjectOn;
        boostLvl = loadGame.boostLvl;
        wirePurchase = loadGame.wirePurchase;
        wireSupply = loadGame.wireSupply;
        marketingEffectiveness = loadGame.marketingEffectiveness;
        milestoneFlag = loadGame.milestoneFlag;
        bankroll = loadGame.bankroll;
        fib1 = loadGame.fib1;
        fib2 = loadGame.fib2;
        strategyEngineFlag = loadGame.strategyEngineFlag;
        investmentEngineFlag = loadGame.investmentEngineFlag;
        revPerSecFlag = loadGame.revPerSecFlag;
        compFlag = loadGame.compFlag;
        projectsFlag = loadGame.projectsFlag;
        autoClipperFlag = loadGame.autoClipperFlag;
        megaClipperFlag = loadGame.megaClipperFlag;
        megaClipperCost = loadGame.megaClipperCost;
        megaClipperLevel = loadGame.megaClipperLevel;
        megaClipperBoost = loadGame.megaClipperBoost;
        creativitySpeed = loadGame.creativitySpeed;
        creativityCounter = loadGame.creativityCounter;
        wireBuyerFlag = loadGame.wireBuyerFlag;
        demandBoost = loadGame.demandBoost;
        humanFlag = loadGame.humanFlag;
        trustFlag = loadGame.trustFlag;
        nanoWire = loadGame.nanoWire;
        creationFlag = loadGame.creationFlag;
        wireProductionFlag = loadGame.wireProductionFlag;
        spaceFlag = loadGame.spaceFlag;
        factoryFlag = loadGame.factoryFlag;
        harvesterFlag = loadGame.harvesterFlag;
        wireDroneFlag = loadGame.wireDroneFlag;
        factoryLevel = loadGame.factoryLevel;
        factoryBoost = loadGame.factoryBoost;
        droneBoost = loadGame.droneBoost;
        availableMatter = loadGame.availableMatter;
        acquiredMatter = loadGame.acquiredMatter;
        processedMatter = loadGame.processedMatter;
        harvesterLevel = loadGame.harvesterLevel;
        wireDroneLevel = loadGame.wireDroneLevel;
        factoryCost = loadGame.factoryCost;
        harvesterCost = loadGame.harvesterCost;
        wireDroneCost = loadGame.wireDroneCost;
        factoryRate = loadGame.factoryRate;
        harvesterRate = loadGame.harvesterRate;
        wireDroneRate = loadGame.wireDroneRate;
        harvesterBill = loadGame.harvesterBill;
        wireDroneBill = loadGame.wireDroneBill;
        factoryBill = loadGame.factoryBill;
        probeCount = loadGame.probeCount;
        totalMatter = loadGame.totalMatter;
        foundMatter = loadGame.foundMatter;
        qFlag = loadGame.qFlag;
        qClock = loadGame.qClock;
        qChipCost = loadGame.qChipCost;
        nextQchip = loadGame.nextQchip;
        bribe = loadGame.bribe;
        battleFlag = loadGame.battleFlag;           

        portfolioSize = loadGame.portfolioSize;   
        stockID = loadGame.stockID;
        secTotal = loadGame.secTotal;
        portTotal = loadGame.portTotal;
        sellDelay = loadGame.sellDelay;
        riskiness = loadGame.riskiness;
        maxPort = loadGame.maxPort;
        m = loadGame.m;
        investLevel = loadGame.investLevel;
        investUpgradeCost = loadGame.investUpgradeCost;
        stockGainThreshold = loadGame.stockGainThreshold;
        ledger = loadGame.ledger;
        stockReportCounter = loadGame.stockReportCounter;
  
        tourneyCost = loadGame.tourneyCost;    
        tourneyLvl = loadGame.tourneyLvl; 
        stratCounter = loadGame.stratCounter; 
        roundNum = loadGame.roundNum; 
        hMove = loadGame.hMove; 
        vMove = loadGame.vMove;
        hMovePrev = loadGame.hMovePrev;
        vMovePrev = loadGame.vMovePrev;
        aa = loadGame.aa;
        ab = loadGame.ab;
        ba = loadGame.ba;
        bb = loadGame.bb;
        rounds = loadGame.rounds;
        currentRound = loadGame.currentRound;
        rCounter = loadGame.rCounter;
        tourneyInProg = loadGame.tourneyInProg;
        winnerPtr = loadGame.winnerPtr;
        high = loadGame.high;
        pick = loadGame.pick;
        yomi = loadGame.yomi;
        yomiBoost = loadGame.yomiBoost; 

        probeSpeed = loadGame.probeSpeed;  
        probeNav = loadGame.probeNav; 
        probeRep = loadGame.probeRep; 
        partialProbeSpawn = loadGame.partialProbeSpawn;
        probeHaz = loadGame.probeHaz;
        partialProbeHaz = loadGame.partialProbeHaz;
        probesLostHaz = loadGame.probesLostHaz;
        probesLostDrift = loadGame.probesLostDrift;
        probesLostCombat = loadGame.probesLostCombat;
        probeFac = loadGame.probeFac;
        probeWire = loadGame.probeWire;
        probeCombat = loadGame.probeCombat;
        attackSpeed = loadGame.attackSpeed;
        battleSpeed = loadGame.battleSpeed;
        attackSpeedFlag = loadGame.attackSpeedFlag;
        attackSpeedMod = loadGame.attackSpeedMod;
        probeDescendents = loadGame.probeDescendents;
        drifterCount = loadGame.drifterCount;
        warTrigger = loadGame.warTrigger;
        battleID = loadGame.battleID;
        battleName = loadGame.battleName;
        battleNameFlag = loadGame.battleNameFlag;
        maxBattles = loadGame.maxBattles;
        battleClock = loadGame.battleClock;
        battleAlarm = loadGame.battleAlarm;
        outcomeTimer = loadGame.outcomeTimer;
        drifterCombat = loadGame.drifterCombat;
        probeTrust = loadGame.probeTrust;
        probeUsedTrust = loadGame.probeUsedTrust;
        probeTrustCost = loadGame.probeTrustCost;
        probeLaunchLevel = loadGame.probeLaunchLevel;
        probeCost = loadGame.probeCost;
    
    project40b.priceTag = "($"+bribe.toLocaleString()+")";
    project51.priceTag =  "(" + qChipCost + " ops)";
    
    
    refresh();
    
}

function reset() {
    localStorage.removeItem("saveGame");
    localStorage.removeItem("saveProjectsUses");
    localStorage.removeItem("saveProjectsFlags");
    localStorage.removeItem("saveProjectsActive");
    localStorage.removeItem("saveStratsActive");
    location.reload();
}

function loadPrestige() {
    
        var loadPrestige = JSON.parse(localStorage.getItem("savePrestige"));
        
        prestigeU = loadPrestige.prestigeU;
        prestigeS = loadPrestige.prestigeS;
}    
