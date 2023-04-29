/* 
TO DO LIST
	- Make all orb colors functional.
	- Add ability to sell ores.
	- Add ability to buy Orbs form shop.
*/

console.log("You broke an rule!")
console.log("Expect an punishment (:<.")


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

let _chromeCacheData_ = -1;
function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function () {
    $("#seconds").html(pad(++_chromeCacheData_ % 60));
    $("#minutes").html(pad(parseInt(_chromeCacheData_ / 60, 10) % 60));
    $("#hours").html(pad(parseInt(_chromeCacheData_ / 3600, 10)));
}, 1000);


let sfxActivated = true

let buttonClick = new Audio("audio/button.wav")

const buttons = document.querySelectorAll('button');

// Loop through each button and add the event listener
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
	if (sfxActivated == true) {
		buttonClick.play()
	}
  });
});

let popAudio = new Audio("audio/popup.wav")
//popup vars
let guideModel = null
let settingModel = null
let normalMapModel = null
let greenMapModel = null
let redMapModel = null
let normSolv = null
let buyBox = null
let buyBoxFail = null
let ranTresurelootPop = null
let rocketmoonLootPop = null

function popups(name) {
	if (sfxActivated == true) {
		popAudio.play()
	}
	if (name == 'guide') {
		if (guideModel === null) {
			document.getElementById("guideBox").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			guideModel = true
		} else {
			document.getElementById("guideBox").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			guideModel = null
		}
	}
    if (name == 'setting') {
		if (settingModel === null) {
			document.getElementById("settingbox").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			settingModel = true
		} else {
			document.getElementById("settingbox").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			settingModel = null
		}
	}
	if (name == 'maps') {
		if (normalMapModel === null) {
			document.getElementById("mapRiddleBox").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			normalMapModel = true
		} else {
			document.getElementById("mapRiddleBox").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			normalMapModel = null
		}
	}
	if (name == 'mapsSov') {
		if (normSolv === null) {
			document.getElementById("MapBoxSolv").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			normSolv = true
		} else {
			document.getElementById("MapBoxSolv").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			normSolv = null
		}
	}
	if (name == 'buySucces') {
		if (buyBox === null) {
			document.getElementById("buyBox").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			buyBox = true
		} else {
			document.getElementById("buyBox").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			buyBox = null
		}
	}
	if (name == 'buyFail') {
		if (buyBoxFail === null) {
			document.getElementById("buyBoxFail").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			buyBoxFail = true
		} else {
			document.getElementById("buyBoxFail").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			buyBoxFail = null
		}
	}
	if (name == 'openChest') {
		if (ranTresurelootPop === null) {
			document.getElementById("ranTresureLoot").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			ranTresurelootPop = true
		} else {
			document.getElementById("ranTresureLoot").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			ranTresurelootPop = null
		}
	}
	if (name == 'rocketLootBox') {
		if (rocketmoonLootPop === null) {
			document.getElementById("rocketLootBox").style.display = "block"
			document.getElementById("popup-overlay").style.display = "block"
			rocketmoonLootPop = true
		} else {
			document.getElementById("rocketLootBox").style.display = "none"
			document.getElementById("popup-overlay").style.display = "none"
			rocketmoonLootPop = null
		}
	}
	if (name == 'overLayOff') {
		document.getElementById("buyBoxFail").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		buyBoxFail = null

		document.getElementById("buyBox").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		buyBox = null

		document.getElementById("MapBoxSolv").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		normSolv = null

		document.getElementById("mapRiddleBox").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		normalMapModel = null

		document.getElementById("settingbox").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		settingModel = null

		document.getElementById("guideBox").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		guideModel = null

		document.getElementById("ranTresureLoot").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		ranTresurelootPop = null

		document.getElementById("rocketLootBox").style.display = "none"
		document.getElementById("popup-overlay").style.display = "none"
		rocketmoonLootPop = null
	}
}

popups('guide')

function sfxToggole() {
	if (sfxActivated == true) {
		sfxActivated = false
		document.getElementById("sfxButton").innerHTML = "SFX - OFF"
	} else if (sfxActivated == false) {
		sfxActivated = true
		document.getElementById("sfxButton").innerHTML = "SFX - ON"
	}
}

let clickTimes = 0

function clickBigRock() {
    if (clickTimes <= 25) {
        clickTimes++
        if (clickTimes >= 25) {
            document.getElementById("arrow-mining-guide").style.display = "none"
        }
    }
    let mineAudio = new Audio("audio/pick.mp3")
	if (sfxActivated == true) {
		mineAudio.play()
	}
}

let audioOn = false
let audioBg = new Audio("audio/Cipher.mp3")

function turnOnAudio() {
    if (audioOn == false) {
        audioOn = true
        document.getElementById("audioButton").innerHTML = "AUDIO - ON"
        audioBg.play()
        audioBg.loop = true
    } else if (audioOn == true) {
        audioOn = false
        document.getElementById("audioButton").innerHTML = "AUDIO - OFF"
        audioBg.pause()
        audioBg.loop = true
    }
}


function mainNavTabs(evt, tabName) {
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontents")
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none"
	}
	tablinks = document.getElementsByClassName("tablinks")
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "")
	}
	document.getElementById(tabName).style.display = "block"
	evt.currentTarget.className += " active"
}

let lightMode = false

function toggleZoomScreen() {
	document.body.style.zoom = "80%";
} 
toggleZoomScreen()
/*
function punishmentForHack() {
	document.getElementById("mainmianmian").style.display = "none"
	_chromeCacheData_ += 1000000000000000
	document.getElementById("hacker").style.display = "block"
 sleep(60000).then(() => {
		console.log("Well your still here I guess You slould go.")
 })
 sleep(3600000).then(() => {
		console.log("How are you still Here. An hour has ticked by!")
 })
 sleep(86400000).then(() => {
		console.log("Its been a day!")
 })
 sleep(31556952000).then(() => {
		console.log("Fine you can go back into the game!")
		console.log("You thought!")
		console.log("Its been an year!")
 })
}
console.log(Object.defineProperties(new Error, {
	toString: {value() {(new Error).stack.includes('toString@') && alert('Safari devtools')}},
	message: {get() {
		alert('That skill of your for hacking this game is exelent. Here is a gift')
		setInterval(punishmentForHack, 1)
		alert('YOU THOUGHT.')
		alert('HAW HAW HAW')
		alert('So Long sucker')
		document.getElementById("hacker").style.display = "block"
}},
  }));
*/














//Gameplay Main
let coin = 100
//ore
let stone = 0
let copper = 0
let iron = 0
let silver = 0
let gold = 0
let promethium = 0
let titanium = 0
let anceintOre = 0
let dragonOre = 0
let bloodStone = 0


function getOre() {
	let stoneChance = Math.floor(Math.random() * 4)
	let copperChance = Math.floor(Math.random() * 15)
	let ironChance = Math.floor(Math.random() * 25)
	let silverChance = Math.floor(Math.random() * 50)
	let goldChance = Math.floor(Math.random() * 100)
	let potChance = Math.floor(Math.random() * 500)
	let titChance = Math.floor(Math.random() * 1500)
	let ancChance = Math.floor(Math.random() * 5000)
	let dragonChance = Math.floor(Math.random() * 12500)
	let bloodChance = Math.floor(Math.random() * 100000)
	if (stoneChance == 3) {
		stone += 1  * pickaxeBleOrbEffect * empRockOrbGreenEffect
		document.getElementById("stoneAmt").innerHTML = stone
	}

	if (copperChance == 8) {
		copper += 1  * pickaxeBleOrbEffect
		document.getElementById("copperAmt").innerHTML = copper
	}

	if (ironChance == 2) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}

	if (silverChance == 27) {
		silver += 1  * pickaxeBleOrbEffect
		document.getElementById("silverAmt").innerHTML = silver
	}

	if (goldChance == 99) {
		gold += 1  * pickaxeBleOrbEffect
		document.getElementById("goldAmt").innerHTML = gold
	}

	if (potChance == 433) {
		promethium += 1  * pickaxeBleOrbEffect
		document.getElementById("potAmt").innerHTML = promethium
	}

	if (titChance == 624) {
		titanium += 1  * pickaxeBleOrbEffect
		document.getElementById("titanAmt").innerHTML = titanium
	}
	if (ancChance == 4685) {
		anceintOre += 1  * pickaxeBleOrbEffect
		document.getElementById("ancientAmt").innerHTML = anceintOre
	}
	if (dragonChance == 8467) {
		dragonOre += 1  * pickaxeBleOrbEffect
		document.getElementById("dragonAmt").innerHTML = dragonOre
	}
	if (bloodChance == 84627) {
		bloodStone += 1  * pickaxeBleOrbEffect
		document.getElementById("bloodAmt").innerHTML = bloodStone
	}
}

function clickRock() {
	stone += 1  * pickaxeBleOrbEffect
	document.getElementById("stoneAmt").innerHTML = stone
	getOre()
}


let minerAmt = 0
let minerCost = 100

function getOreMiner() {
	let stoneChance = Math.floor(Math.random() * 4)
	let copperChance = Math.floor(Math.random() * 15)
	let ironChance = Math.floor(Math.random() * 25)
	if (stoneChance == 3) {
		stone += 1  * pickaxeBleOrbEffect * empRockOrbGreenEffect
		document.getElementById("stoneAmt").innerHTML = stone
	}

	if (copperChance == 8) {
		copper += 1  * pickaxeBleOrbEffect
		document.getElementById("copperAmt").innerHTML = copper
	}

	if (ironChance == 2) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}
}

let septil = 1000000000000000000000000

function buyMiner() {
	if (coin >= minerCost) {
		popups('buySucces')
		if (minerCost >= septil) {
			minerCost = septil
		} else {
			minerCost = Math.ceil((minerCost * 0.05) + minerCost)
		}
		if (minerAmt == 0) {
			document.getElementById("miner1").style.display = "inline-block"
		}
		minerAmt++
		coin -= minerCost
		document.getElementById("mine1Cost").innerHTML = minerCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("minerAmt").innerHTML = minerAmt
		setInterval(getOreMiner, 1000)
	} else {
		popups('buyFail')
	}
}


let drillAmt = 0
let drillCost = 250

function getOreDrill() {
	let stoneChance = Math.floor(Math.random() * 4)
	let copperChance = Math.floor(Math.random() * 15)
	let ironChance = Math.floor(Math.random() * 25)
	let silverChance = Math.floor(Math.random() * 50)
	if (stoneChance == 3) {
		stone += 1  * pickaxeBleOrbEffect * empRockOrbGreenEffect
		document.getElementById("stoneAmt").innerHTML = stone
	}

	if (copperChance == 8) {
		copper += 1  * pickaxeBleOrbEffect
		document.getElementById("copperAmt").innerHTML = copper
	}

	if (ironChance == 2) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}

	if (silverChance == 27) {
		silver += 1  * pickaxeBleOrbEffect
		document.getElementById("silverAmt").innerHTML = silver
	}
}

function buyDrill() {
	if (coin >= drillCost) {
		popups('buySucces')
		if (drillCost >= septil) {
			drillCost = septil
		} else {
			drillCost = Math.ceil((drillCost * 0.05) + drillCost)
		}
		if (drillAmt == 0) {
			document.getElementById("drill").style.display = "inline-block"
		}
		drillAmt++
		coin -= drillCost
		document.getElementById("drillCost").innerHTML = drillCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("drillAmt").innerHTML = drillAmt
		setInterval(getOreDrill, 800)
	} else {
		popups('buyFail')
	}
}



let gDrillAmt = 0
let gDrillCost = 750

function getOregDrill() {
	let stoneChance = Math.floor(Math.random() * 4)
	let copperChance = Math.floor(Math.random() * 15)
	let ironChance = Math.floor(Math.random() * 25)
	let silverChance = Math.floor(Math.random() * 50)
	let goldChance = Math.floor(Math.random() * 100)
	if (stoneChance == 3) {
		stone += 1  * pickaxeBleOrbEffect * empRockOrbGreenEffect
		document.getElementById("stoneAmt").innerHTML = stone
	}

	if (copperChance == 8) {
		copper += 1  * pickaxeBleOrbEffect
		document.getElementById("copperAmt").innerHTML = copper
	}

	if (ironChance == 2) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}

	if (silverChance == 27) {
		silver += 1  * pickaxeBleOrbEffect
		document.getElementById("silverAmt").innerHTML = silver
	}

	if (goldChance == 99) {
		gold += 1  * pickaxeBleOrbEffect
		document.getElementById("goldAmt").innerHTML = gold
	}
}

function buygDrill() {
	if (coin >= gDrillCost) {
		popups('buySucces')
		if (gDrillCost >= septil) {
			gDrillCost = septil
		} else {
			gDrillCost = Math.ceil((gDrillCost * 0.05) + gDrillCost)
		}
		coin -= gDrillCost
		if (gDrillAmt == 0) {
			document.getElementById("giantDrill").style.display = "inline-block"
		}
		gDrillAmt++
		document.getElementById("gDrillCost").innerHTML = gDrillCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("gDrillAmt").innerHTML = gDrillAmt
		setInterval(getOregDrill, 750)
	} else {
		popups('buyFail')
	}
}


let exuAmt = 0
let exuCost = 1500

function getOreExu() {
	let stoneChance = Math.floor(Math.random() * 2)
	let copperChance = Math.floor(Math.random() * 10)
	let ironChance = Math.floor(Math.random() * 15)
	let silverChance = Math.floor(Math.random() * 20)
	let goldChance = Math.floor(Math.random() * 75)
	let potChance = Math.floor(Math.random() * 350)

	if (stoneChance == 1) {
		stone += 1  * pickaxeBleOrbEffect * empRockOrbGreenEffect
		document.getElementById("stoneAmt").innerHTML = stone
	}

	if (copperChance == 5) {
		copper += 1  * pickaxeBleOrbEffect
		document.getElementById("copperAmt").innerHTML = copper
	}

	if (ironChance == 8) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}

	if (silverChance == 15) {
		silver += 1  * pickaxeBleOrbEffect
		document.getElementById("silverAmt").innerHTML = silver
	}

	if (goldChance == 53) {
		gold += 1  * pickaxeBleOrbEffect
		document.getElementById("goldAmt").innerHTML = gold
	}

	if (potChance == 232) {
		promethium += 1  * pickaxeBleOrbEffect
		document.getElementById("potAmt").innerHTML = promethium
	}
}

function buyExu() {
	if (coin >= exuCost) {
		popups('buySucces')
		if (exuCost >= septil) {
			exuCost = septil
		} else {
			exuCost = Math.ceil((exuCost * 0.05) + exuCost)
		}
		coin -= exuCost
		if (exuAmt == 0) {
			document.getElementById("excuvator").style.display = "inline-block"
		}
		exuAmt++
		document.getElementById("exuCost").innerHTML = exuCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("exuAmt").innerHTML = exuAmt
		setInterval(getOreExu, 1200)
	} else {
		popups('buyFail')
	}
}


let gExuAmt = 0
let gExuCost = 10000

function getOregExu() {
	let copperChance = Math.floor(Math.random() * 5)
	let ironChance = Math.floor(Math.random() * 10)
	let silverChance = Math.floor(Math.random() * 15)
	let goldChance = Math.floor(Math.random() * 50)
	let potChance = Math.floor(Math.random() * 200)
	let titChance = Math.floor(Math.random() * 1500)

	stone += 5  * pickaxeBleOrbEffect * empRockOrbGreenEffect
	document.getElementById("stoneAmt").innerHTML = stone

	if (copperChance == 3) {
		copper += 1  * pickaxeBleOrbEffect
		document.getElementById("copperAmt").innerHTML = copper
	}

	if (ironChance == 5) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}

	if (silverChance == 10) {
		silver += 1  * pickaxeBleOrbEffect
		document.getElementById("silverAmt").innerHTML = silver
	}

	if (goldChance == 25) {
		gold += 1  * pickaxeBleOrbEffect
		document.getElementById("goldAmt").innerHTML = gold
	}

	if (potChance == 99) {
		promethium += 1  * pickaxeBleOrbEffect
		document.getElementById("potAmt").innerHTML = promethium
	}

	if (titChance == 624) {
		titanium += 1  * pickaxeBleOrbEffect
		document.getElementById("titanAmt").innerHTML = titanium
	}
}

function buygExu() {
	if (coin >= gExuCost) {
		popups('buySucces')
		if (gExuCost >= septil) {
			gExuCost = septil
		} else {
			gExuCost = Math.ceil((gExuCost * 0.05) + gExuCost)
		}
		coin -= gExuCost
		if (gExuAmt == 0) {
			document.getElementById("giantExcuvator").style.display = "inline-block"
		}
		gExuAmt++
		document.getElementById("gExuCost").innerHTML = gExuCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("gExuAmt").innerHTML = gExuAmt
		setInterval(getOregExu, 500)
	} else {
		popups('buyFail')
	}
}


let bHDrillAmt = 0
let bHDrillCost = 50000

function getOrebHDrill() {
	let ironChance = Math.floor(Math.random() * 4)
	let silverChance = Math.floor(Math.random() * 10)
	let goldChance = Math.floor(Math.random() * 25)
	let potChance = Math.floor(Math.random() * 50)
	let titChance = Math.floor(Math.random() * 1000)
	let ancChance = Math.floor(Math.random() * 5000)
	stone  += 10  * pickaxeBleOrbEffect * empRockOrbGreenEffect
	document.getElementById("stoneAmt").innerHTML = stone

	copper += 1  * pickaxeBleOrbEffect
	document.getElementById("copperAmt").innerHTML = copper

	if (ironChance == 2) {
		iron += 1  * pickaxeBleOrbEffect
		document.getElementById("ironAmt").innerHTML = iron
	}

	if (silverChance == 3) {
		silver += 1  * pickaxeBleOrbEffect
		document.getElementById("silverAmt").innerHTML = silver
	}

	if (goldChance == 15) {
		gold += 1  * pickaxeBleOrbEffect
		document.getElementById("goldAmt").innerHTML = gold
	}

	if (potChance == 22) {
		promethium += 1  * pickaxeBleOrbEffect
		document.getElementById("potAmt").innerHTML = promethium
	}

	if (titChance == 522) {
		titanium += 1  * pickaxeBleOrbEffect
		document.getElementById("titanAmt").innerHTML = titanium
	}
	if (ancChance == 4685) {
		anceintOre += 1  * pickaxeBleOrbEffect
		document.getElementById("ancientAmt").innerHTML = anceintOre
	}
}

function buyBHDrill() {
	if (coin >= bHDrillCost) {
		popups('buySucces')
		if (bHDrillCost >= septil) {
			bHDrillCost = septil
		} else {
			bHDrillCost = Math.ceil((bHDrillCost * 0.05) + bHDrillCost)
		}
		coin -= bHDrillCost
		if (bHDrillAmt == 0) {
			document.getElementById("blastholeDrill").style.display = "inline-block"
		}
		bHDrillAmt++
		document.getElementById("bHDrillCost").innerHTML = bHDrillCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("bHDrillAmt").innerHTML = bHDrillAmt
		setInterval(getOrebHDrill, 2500)
	} else {
		popups('buyFail')
	}
}


let AIminerlAmt = 0
let AIminerlCost = 3000000

function getOreAIminer() {
	let ancChance = Math.floor(Math.random() * 100)
	let dragonChance = Math.floor(Math.random() * 1000)
	let bloodChance = Math.floor(Math.random() * 50000)

	stone += 1000000 * pickaxeBleOrbEffect * empRockOrbGreenEffect
	document.getElementById("stoneAmt").innerHTML = stone

	copper += 500000 * pickaxeBleOrbEffect
	document.getElementById("copperAmt").innerHTML = copper

	iron += 100000 * pickaxeBleOrbEffect
	document.getElementById("ironAmt").innerHTML = iron

	silver += 50000 * pickaxeBleOrbEffect
	document.getElementById("silverAmt").innerHTML = silver

	gold += 1000 * pickaxeBleOrbEffect
	document.getElementById("goldAmt").innerHTML = gold

	promethium += 10 * pickaxeBleOrbEffect
	document.getElementById("potAmt").innerHTML = promethium

	titanium += 1 * pickaxeBleOrbEffect
	document.getElementById("titanAmt").innerHTML = titanium

	if (ancChance == 56) {
		anceintOre += 1  * pickaxeBleOrbEffect
		document.getElementById("ancientAmt").innerHTML = anceintOre
	}
	if (dragonChance == 427) {
		dragonOre += 1  * pickaxeBleOrbEffect
		document.getElementById("dragonAmt").innerHTML = dragonOre
	}
	if (bloodChance == 28636) {
		bloodStone += 1  * pickaxeBleOrbEffect
		document.getElementById("bloodAmt").innerHTML = bloodStone
	}
}

function buyAIminer() {
	if (coin >= AIminerlCost) {
		popups('buySucces')
		if (AIminerlCost >= septil) {
			AIminerlCost = septil
		} else {
			AIminerlCost = Math.ceil((AIminerlCost * 0.05) + AIminerlCost)
		}
		coin -= AIminerlCost
		if (AIminerlAmt == 0) {
			document.getElementById("AIminer").style.display = "inline-block"
		}
		AIminerlAmt++
		document.getElementById("AIminerlCost").innerHTML = AIminerlCost
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("AIminerlAmt").innerHTML = AIminerlAmt
		setInterval(getOreAIminer, 1000)
	} else {
		popups('buyFail')
	}
}

let hasRocket = false
let rocketType = null
let wind = null
let rain = null
let clear = null
let distance = null
let goHomeDistance = null
let speed = null


function rocketState() {
	if (rocketType == 1 && hasRocket == true) {
		let rocketArray = ['img/rocket/rocket1.jpg', 'img/rocket/rokcet3.jpg','img/rocket/rokcet4.png', 'img/rocket/rokcet5.png', 'img/rocket/rokcet6.png', 'img/rocket/rokcet7.png']
		let randomRocketstate =  Math.ceil(Math.random() * 6) - 1
		document.getElementById("rocketState").src = rocketArray[randomRocketstate]
		let stateNum = randomRocketstate
		wind = Math.ceil(Math.random() * 5)
		document.getElementById("Wind").innerHTML = "WIND SPEED (mph): " + wind
		if (Math.ceil(Math.random() * 25) == 3) {
			wind = Math.ceil(Math.random() * 25)
			document.getElementById("Wind").innerHTML ="WIND SPEED (mph): " + wind
			rain = true
			clear = false
			document.getElementById("Clear").innerHTML = "CLOUDS: " + clear
			document.getElementById("Rain").innerHTML = "RAINING: " + rain
		} else {
			wind = Math.ceil(Math.random() * 5)
			document.getElementById("Wind").innerHTML ="WIND SPEED (mph): " + wind
			rain = false
			clear = true
			document.getElementById("Clear").innerHTML = "CLOUDS: " + clear
			document.getElementById("Rain").innerHTML = "RAINING: " + rain
		}

		if (Math.ceil(Math.random() * 10) == 2) {
			clear = false
			document.getElementById("Clear").innerHTML = "CLOUDS: " + clear
		} else {
			clear = true
			document.getElementById("Clear").innerHTML = "CLOUDS: " + clear
		}


		distance = Math.floor(Math.random() * 500000) + 200000 
		document.getElementById("Distance").innerHTML = "DISTANCE TO THE MOON (mi): " +  distance

		goHomeDistance = distance

		speed = ((Math.floor(Math.random() * 50000) + 10000) - (wind * 100)) * blueRocketRobEffect
		document.getElementById("Speed").innerHTML = "SPEED (mps): " + speed
	}
}
let lauchTocketr = null
function lauchRocketr() {
	document.getElementById("lauchButton").style.display = "none"
	lauchTocketr = setInterval(lauchRocket, 1000)
}

let isFlying = false
let moonstoneAmt = 0
let shootingStarAmt = 0
let UltraShootingStarAmt = 0
let meteorAmt = 0
let ultraMeteorAmt = 0
let randomRocketstateMoon = null
let ranRocketArray = null
let moonImgs = ['img/rocket/moon/moon1.png', 'img/rocket/moon/moon2.png', 'img/rocket/moon/moon3.png', 'img/rocket/moon/moon4.png', 'img/rocket/moon/moon5.png', 'img/rocket/moon/moon6.png', 'img/rocket/moon/moon7.png', 'img/rocket/moon/moon8.png', 'img/rocket/moon/moon9.png', 'img/rocket/moon/moon10.png', 'img/rocket/moon/moon11.png', 'img/rocket/moon/moon12.png', 'img/rocket/moon/moon13.png', 'img/rocket/moon/moon14.png', 'img/rocket/moon/moon15.png']
function lauchRocket() {
	let ranRainExplode = Math.ceil(Math.random() * 5)
	let ranExplode = Math.ceil(Math.random() * 1000)
	document.getElementById("rocketState").src = "img/rocket/rocket_fly.png"
	distance -= speed
	document.getElementById("Distance").innerHTML = "DISTANCE LEFT TO MOON: " + distance
	isFlying = true
	document.getElementById("rocketStatus").innerHTML = "Flying"
	if (ranExplode == 500) {
		isFlying = false
		document.getElementById("lauchButton").style.display = "block"
		document.getElementById("rocketState").src = "img/rocket/rokcet2.jpg"
		document.getElementById("rocketStatus").innerHTML = "Blew Up"
		document.getElementById("rocketStatus").innerHTML = "Reparing"
		clearInterval(lauchTocketr)
	}
	if (rain == true && ranRainExplode == 2) {
		isFlying = false
		document.getElementById("lauchButton").style.display = "block"
		document.getElementById("rocketState").src = "img/rocket/rokcet2.jpg"
		document.getElementById("rocketStatus").innerHTML = "Blew Up"
		document.getElementById("rocketStatus").innerHTML = "Reparing"
		clearInterval(lauchTocketr)
	}

	if (distance <= 0) {
		distance = 0
		document.getElementById("Distance").innerHTML = "HUSTON THE EAGLE HAS LANDED."
		isFlying = false
		document.getElementById("collectLootButtonMoon").style.display = "block"
		clearInterval(lauchTocketr)
		clearInterval(rocketStateInter)
		randomRocketstateMoon = Math.ceil(Math.random() * 15) - 1
		ranRocketArray = moonImgs[randomRocketstateMoon]
		document.getElementById("rocketState").src = ranRocketArray
	}	
}

function lotDefineMoon(moonstoneAmtG, shootingStarAmtg, meterorAmrG) {
	document.getElementById("moonstoneAmtMoonLoot").innerHTML = "Moonstone: " + (moonstoneAmtG * empRockOrbGreenEffect)
	document.getElementById("shootingStarAmtMoonLoot").innerHTML = "Shooting Star: " + shootingStarAmtg
	document.getElementById("meteorAmtMoonLoot").innerHTML = "Meteor: " + meterorAmrG
}

function displayLootMoon(truefalse, truefalse2, truefalse3, truefalse4, truefalse5) {
	if (truefalse == true) {
		document.getElementById("moonstoneAmtMoonLoot").style.display = "block"
	} else {
		document.getElementById("moonstoneAmtMoonLoot").style.display = "none"
	}

	if (truefalse2 == true) {
		document.getElementById("shootingStarAmtMoonLoot").style.display = "block"
	} else {
		document.getElementById("shootingStarAmtMoonLoot").style.display = "none"
	}

	if (truefalse3 == true) {
		document.getElementById("ultraShootingStarAmtMoonLoot").style.display = "block"
	} else {
		document.getElementById("ultraShootingStarAmtMoonLoot").style.display = "none"
	}

	if (truefalse4 == true) {
		document.getElementById("meteorAmtMoonLoot").style.display = "block"
	} else {
		document.getElementById("meteorAmtMoonLoot").style.display = "none"
	}

	if (truefalse5 == true) {
		document.getElementById("ultraMeteorAmtMoonLoot").style.display = "block"
	} else {
		document.getElementById("ultraMeteorAmtMoonLoot").style.display = "none"
	}
}

let leaveToearthInterval = null

function leaveMoonYay() {
	leaveToearthInterval = setInterval(goHomeToEarth, 1000)
}


function collectLootMoon() {
	popups('rocketLootBox')
	if (randomRocketstateMoon == 0) {
		moonstoneAmt += 9 * empRockOrbGreenEffect
		shootingStarAmt += 7
		meteorAmt += 20
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(9, 7, 20)
	} else if (randomRocketstateMoon == 1) {
		moonstoneAmt += 9 * empRockOrbGreenEffect
		shootingStarAmt += 4
		meteorAmt += 20
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(9, 4, 20)
	} else if (randomRocketstateMoon == 2) {
		moonstoneAmt += 9 * empRockOrbGreenEffect
		shootingStarAmt += 7
		meteorAmt += 7
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(9, 7, 7)
	} else if (randomRocketstateMoon == 3) {
		moonstoneAmt += 9 * empRockOrbGreenEffect
		shootingStarAmt += 4
		meteorAmt += 7
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(9, 4, 7)
	} else if (randomRocketstateMoon == 4) {
		moonstoneAmt += 9 * empRockOrbGreenEffect
		shootingStarAmt += 3
		meteorAmt += 6
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(9, 3, 6)
	} else if (randomRocketstateMoon == 5) {
		moonstoneAmt += 6 * empRockOrbGreenEffect
		shootingStarAmt += 2
		meteorAmt += 3
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(6, 2, 3)
	} else if (randomRocketstateMoon == 6) {
		moonstoneAmt += 5 * empRockOrbGreenEffect
		shootingStarAmt += 2
		meteorAmt += 1
		displayLootMoon(true, true, false, true, false)
		lotDefineMoon(5, 2, 1)
	} else if (randomRocketstateMoon == 7) {
		moonstoneAmt += 5 * empRockOrbGreenEffect
		shootingStarAmt += 2
		document.getElementById("moonstoneAmtMoonLoot").innerHTML = "Moonstone: 5"
		document.getElementById("shootingStarAmtMoonLoot").innerHTML = "Shooting Star: 2"
		displayLootMoon(true, true, false, false, false)
	} else if (randomRocketstateMoon == 8) {
		moonstoneAmt += 5 * empRockOrbGreenEffect
		shootingStarAmt += 1
		document.getElementById("moonstoneAmtMoonLoot").innerHTML = "Moonstone: 5"
		document.getElementById("shootingStarAmtMoonLoot").innerHTML = "Shooting Star: 1"
		displayLootMoon(true, true, false, false, false)
	} else if (randomRocketstateMoon == 9) {
		moonstoneAmt += 22 * empRockOrbGreenEffect
		document.getElementById("moonstoneAmtMoonLoot").innerHTML = "Moonstone: 22"
		displayLootMoon(true, false, false, false, false)
	} else if (randomRocketstateMoon == 10) {
		moonstoneAmt += 1 * empRockOrbGreenEffect
		document.getElementById("moonstoneAmtMoonLoot").innerHTML = "Moonstone: 1"
		displayLootMoon(true, false, false, false, false)
	} else if (randomRocketstateMoon == 11) {
		shootingStarAmt += 24
		document.getElementById("shootingStarAmtMoonLoot").innerHTML = "Shooting Star: 24"
		displayLootMoon(false, true, false, false, false)
	}  else if (randomRocketstateMoon == 12) {
		meteorAmt += 19
		document.getElementById("meteorAmtMoonLoot").innerHTML = "Meteor: 19"
		displayLootMoon(false, false, false, true, false)
	} else if (randomRocketstateMoon == 13) {
		ultraMeteorAmt++
		document.getElementById("ultraMeteorAmtMoonLoot").innerHTML = "!YOU FOUND AN ULTRA METEOR!"
		displayLootMoon(false, false, false, false, true)
	} else if (randomRocketstateMoon == 14) {
		UltraShootingStarAmt++
		document.getElementById("ultraShootingStarAmtMoonLoot").innerHTML = "!YOU FOUND AN ULTRA SHOOTING STAR!"
		displayLootMoon(false, false, true, true, false)
	} else {
		console.log("NOPERS")
	}
	document.getElementById("moonstoneAmt").innerHTML = moonstoneAmt
	document.getElementById("shootingStarAmt").innerHTML = shootingStarAmt
	document.getElementById("ultraShootingStarAmt").innerHTML = UltraShootingStarAmt
	document.getElementById("meteorAmt").innerHTML = meteorAmt
	document.getElementById("ultraMetorAmt").innerHTML = ultraMeteorAmt
	document.getElementById("collectLootButtonMoon").style.display = "none"
	leaveMoonYay()
}

function goHomeToEarth() {
	document.getElementById("rocketState").src = "img/rocket/rocket_fly.png"
	goHomeDistance -= speed
	document.getElementById("Distance").innerHTML = "DISTANCE LEFT TO HOME: " + goHomeDistance
	isFlying = true
	document.getElementById("rocketStatus").innerHTML = "Flying"

	if (goHomeDistance <= 0) {
		rocketState()
		document.getElementById("lauchButton").style.display = "block"
		clearInterval(leaveToearthInterval)
		activateRocketNewStatte()
	}	
}


let rocketStateInter = null
function activateRocketNewStatte() {
	rocketStateInter = setInterval(rocketState, 60000)
}


coin=Infinity
function buyRocket() {
	if (coin >= 10000000) {
		hasRocket = true
		coin -= 10000000
		rocketType = 1
		document.getElementById("rocketa").style.display = "none"
		document.getElementById("rocketTab").style.display = "block"
		document.getElementById("rocketStatus").innerHTML = "On earth"
		rocketState()
		activateRocketNewStatte()
	}
}


let randomRiddle = null
let riddleAwnser = null
let normalChest = 0
let greenChest = 0
let redChest = 0

let normalMap = 0
let greenMap = 0
let redMap = 0
let mapTyper = null

let hasMono = false
let hasTitMono = false

function buyMone() {
	if (coin >= 150000) {
		popups('buySucces')
		coin -= 150000
		hasMono = true
		document.getElementById("spyGlass").style.display = "none"
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("spyGlas").style.display = "inline-block"
	} else {
		popups('buyFail')
	}
}


function buyTitone() {
	if (coin >= 900000) {
		popups('buySucces')
		coin -= 900000
		hasTitMono = true
		document.getElementById("spyGlassPlus").style.display = "none"
		document.getElementById("coin-count").innerHTML = coin
		document.getElementById("titspyGlas").style.display = "inline-block"
	} else {
		popups('buyFail')
	}
}


function mapRiddle(mapType) {
	let rannumAQ = Math.floor(Math.random() * 12)
	let riddles = ["I am the most common of all", "Arr And Eye", "There are three versions of my Matchine.", "Beep Boop!", "A glowing ball of magic.", "You can buy 100 of my living types", "Blue, Green, Red", "Shiney circles", "This ore came from a dragon", "A grey Sack", "I present you the game guide", "legendary dark _ _ _ _ _"]
	let awnser = ["stone", "pirate", "drill", "ai miner", "orb", "pirate", "orb", "coin", "dragon ore", "item", "knight", "sword"]
	randomRiddle = riddles[rannumAQ]
	riddleAwnser = awnser[rannumAQ]
	document.getElementById("randomRiddle").innerHTML = randomRiddle
	if (mapType == 'normal') {
		mapTyper = 1
		document.getElementById("mapType").src = "img/pirate/normal/treasureMap.png"
		document.getElementById("mapTypes").src = "img/pirate/normal/treasureMap.png"
	}
	if (mapType == 'green') {
		mapTyper = 2
		document.getElementById("mapType").src = "img/pirate/green/greenTreasureMap.png"
		document.getElementById("mapTypes").src = "img/pirate/green/greenTreasureMap.png"
	}
	if (mapType == 'red') {
		mapTyper = 3
		document.getElementById("mapType").src = "img/pirate/red/redTreasureMap.png"
		document.getElementById("mapTypes").src = "img/pirate/red/redTreasureMap.png"
	}
}



let rocketOrbBlue = false
let blueRocketRobEffect = 1
let pickAxeOrbBlue = false
let pickaxeBleOrbEffect = 1
let rocketOrbGreen = false
let empRockOrbGreen = false
let empRockOrbGreenEffect = 1
let rocketOrbRed = false
let lootOrbRed = false


function openChest(typeOfChest) {
	if (typeOfChest == 1) {
		document.getElementById("green3").style.display = "none"
		document.getElementById("red4").style.display = "none"
		document.getElementById("tresure").src = "img/pirate/normal/treasureChestOpen.png"
		normalChest--
		let normalOrbChance = Math.floor(Math.random() * 3)
		if (normalOrbChance == 2) {
			let randBlueOrb = Math.floor(Math.random() * 2)
			if (randBlueOrb == 1 && rocketOrbBlue == false) {
				rocketOrbBlue = true
				blueRocketRobEffect = 2
				document.getElementById("rocketOrbBlue").style.display = "inline-block"
				document.getElementById("normal1").innerHTML = "<img src='img/pirate/normal/orb/rocket.png' width='25'> !BLUE ROCKET ORB!"
			} else {
				if (pickAxeOrbBlue == false) {
					pickAxeOrbBlue = true
					pickaxeBleOrbEffect = 3
					document.getElementById("pickAxeOrbBlue").style.display = "inline-block"
					document.getElementById("normal1").innerHTML = "<img src='img/pirate/normal/orb/BluePickaxeOrb.webp' width='25'> !BLUE PICKAXE ORB!"
				}
			}
		} else {
			let ranTitaniumAmt = Math.floor(Math.random() * 10000000000)
			titanium += ranTitaniumAmt
			document.getElementById("titanAmt").innerHTML = titanium
			document.getElementById("normal1").innerHTML = "<img src='img/mining/ore/titanium.webp' width='25'> !" + String(ranTitaniumAmt) + " TITANIUM!"
		}
		sleep(1000).then(() => {
			console.log("Done")
		})
		let normalOrbChance1 = Math.floor(Math.random() * 3)
		if (normalOrbChance1 == 1) {
			let randBlueOrb = Math.floor(Math.random() * 2)
			if (randBlueOrb == 1 && rocketOrbBlue == false) {
				rocketOrbBlue = true
				document.getElementById("normal2").innerHTML = "<img src='img/pirate/normal/orb/rocket.png' width='25'> !BLUE ROCKET ORB!"
			} else {
				if (pickAxeOrbBlue == false) {
					pickAxeOrbBlue = true
					document.getElementById("normal2").innerHTML = "<img src='img/pirate/normal/orb/BluePickaxeOrb.webp' width='25'> !BLUE PICKAXE ORB!"
				}
			}
		} else {
			let ranAnceintOreAmt = Math.floor(Math.random() * 10000)
			anceintOre += ranAnceintOreAmt
			document.getElementById("ancientAmt").innerHTML = anceintOre
			document.getElementById("normal2").innerHTML = "<img src='img/mining/ore/ancient.webp' width='25'> !" + String(ranAnceintOreAmt) + " ANCEINT ORE!"
		}


		popups('openChest')
	} else if (typeOfChest == 2) {
		document.getElementById("green3").style.display = "inline-block"
		document.getElementById("red4").style.display = "none"
		document.getElementById("tresure").src = "img/pirate/green/greenTreasureChestOpen.png"
		let ranAnceintOreAmt = Math.floor(Math.random() * 100000000)
		anceintOre += ranAnceintOreAmt
		document.getElementById("ancientAmt").innerHTML = anceintOre
		document.getElementById("normal1").innerHTML = "<img src='img/mining/ore/ancient.webp' width='25'> !" + String(ranAnceintOreAmt) + " ANCEINT ORE!"

		let ranDragonOreAmt = Math.floor(Math.random() * 10000)
		dragonOre += ranDragonOreAmt
		document.getElementById("dragonAmt").innerHTML = dragonOre
		document.getElementById("normal2").innerHTML = "<img src='img/mining/ore/dragon.webp' width='25'> !" + String(ranDragonOreAmt) + " DRAGON ORE!"
		greenChest--


		let greenOrbChance = Math.floor(Math.random() * 5)
		if (greenOrbChance == 3) {
			let randGreenOrb = Math.floor(Math.random() * 2)
			if (randGreenOrb == 1 && rocketOrbGreen == false) {
				rocketOrbGreen = true
				document.getElementById("green3").innerHTML = "<img src='img/pirate/green/orb/GreenRocketOrb.webp' width='25'> !GREEN ROCKET ORB!"
			} else {
				if (empRockOrbGreen == false) {
					empRockOrbGreen = true
					empRockOrbGreenEffect = 10
					document.getElementById("empRockOrbGreen").style.display = "inline-block"
					document.getElementById("green3").innerHTML = "<img src='img/pirate/green/orb/GreenEmpoweredRockOrb.webp' width='25'> !GREEN EMPOWERED ROCK ORB!"
				}
			}
		} else {
			let ranBloodStoneAmt = Math.floor(Math.random() * 10)
			bloodStone += ranBloodStoneAmt
			document.getElementById("bloodAmt").innerHTML = bloodStone
			document.getElementById("green3").innerHTML = "<img src='img/mining/ore/bloodstone.gif' width='25'> !" + String(ranBloodStoneAmt) + " BLOOD STONE!"
		}

		popups('openChest')
	} else if (typeOfChest == 3) {
		redChest--
		document.getElementById("green3").style.display = "inline-block"
		document.getElementById("red4").style.display = "inline-block"
		document.getElementById("tresure").src = "img/pirate/green/greenTreasureChestOpen.png"
		let ranAnceintOreAmt = Math.floor(Math.random() * 100000000)
		anceintOre += ranAnceintOreAmt
		document.getElementById("ancientAmt").innerHTML = anceintOre
		document.getElementById("normal1").innerHTML = "<img src='img/mining/ore/ancient.webp' width='25'> !" + String(ranAnceintOreAmt) + " ANCEINT ORE!"

		let ranDragonOreAmt = Math.floor(Math.random() * 10000)
		dragonOre += ranDragonOreAmt
		document.getElementById("dragonAmt").innerHTML = dragonOre
		document.getElementById("normal2").innerHTML = "<img src='img/mining/ore/dragon.webp' width='25'> !" + String(ranDragonOreAmt) + " DRAGON ORE!"

		let ranBloodStoneAmt = Math.floor(Math.random() * 10)
		bloodStone += ranBloodStoneAmt
		document.getElementById("bloodAmt").innerHTML = bloodStone
		document.getElementById("green3").innerHTML = "<img src='img/mining/ore/bloodstone.gif' width='25'> !" + String(ranBloodStoneAmt) + " BLOOD STONE!"

		let redOrbChance = Math.floor(Math.random() * 10)
		if (redOrbChance == 5) {
			let randRedOrb = Math.floor(Math.random() * 2)
			if (randRedOrb == 1 && rocketOrbRed == false) {
				rocketOrbRed = true
				document.getElementById("red4").innerHTML = "<img src='img/pirate/red/orb/RedRocketOrb.webp' width='25'> !RED ROCKET ORB!"
			} else {
				if (lootOrbRed == false) {
					lootOrbRed = true
					document.getElementById("red4").innerHTML = "<img src='img/pirate/red/orb/RedCombatLootOrb.webp' width='25'> !RED LOOT ORB!"
				}
			}
		} else {
			let ranCoinAmt = Math.floor(Math.random() * 22342409280489238429)
			coin += ranCoinAmt
			document.getElementById("coin-count").innerHTML = coin
			document.getElementById("red4").innerHTML = "<img src='img/Coins.webp' width='25'> !" + String(ranCoinAmt) + " COINS!"
		}
		popups('openChest')
	} else {
		console.log("No chest type found!")
	}
}

function submitRiddle() {
	if ((document.getElementById("riddleAwnser").value.toLowerCase()) == riddleAwnser) {
		if (mapTyper == 1) {
			normalChest++
			normalMap--
			document.getElementById("normalChestAmt").innerHTML = normalChest
			document.getElementById("normalMapAmt").innerHTML = normalMap
			document.getElementById("solveType").innerHTML = "SOLVED"
			popups('mapsSov')
		} else if (mapTyper == 2) {
			greenChest++
			greenMap--
			document.getElementById("greenChestAmt").innerHTML = greenChest
			document.getElementById("greenMapAmt").innerHTML = greenMap
			document.getElementById("solveType").innerHTML = "SOLVED"
			popups('mapsSov')
		} else if (mapTyper == 3) {
			redChest++
			redMap--
			document.getElementById("redChestAmt").innerHTML = redChest
			document.getElementById("redMapAmt").innerHTML = redMap
			document.getElementById("solveType").innerHTML = "SOLVED"
			popups('mapsSov')
		}
	} else {
		document.getElementById("solveType").innerHTML = "TRY AGAIN"
		popups('mapsSov')
	}
}

function findMaps() {
	let normalMapChance = Math.ceil(Math.random() * 100000)
	let greenMapChance = Math.ceil(Math.random() * 500000)
	let redMapChance = Math.ceil(Math.random() * 1000000)

	if (normalMapChance == 32843) {
		normalMap++
		document.getElementById("normalMapAmt").innerHTML = normalMap
	}

	if (greenMapChance == 320843 && hasMono == true) {
		greenMap++
		document.getElementById("greenMapAmt").innerHTML = greenMap
	}

	if (redMapChance == 722821 && hasTitMono == true) {
		redMap++
		document.getElementById("redMapAmt").innerHTML = redMap
	}
}

let pirateAmt = 0
let pirateCost = 5000
function buyPirate() {
	if (pirateAmt <= 99 && coin >= pirateCost) {
		popups('buySucces')
		if (pirateAmt == 0) {
			document.getElementById("pirates").style.display = "inline-block"
		}
		pirateCost = Math.ceil((pirateCost * 3) + pirateCost)
		if (pirateAmt >= 99) {
			document.getElementById("pirate").style.display = "none"
		}
		pirateAmt++
		document.getElementById("pirateCost").innerHTML = pirateCost
		document.getElementById("pirateShopAmtLeft").innerHTML = 100 - pirateAmt
		document.getElementById("pirateAmt").innerHTML = pirateAmt
		setInterval(findMaps, 1000)
	} else {
		popups('buyFail')
	}
}

function checkReq() {
	const materials = [
		{
		  name: 'stone',
		  amount: stone
		},
		{
		  name: 'copper',
		  amount: copper
		},
		{
		  name: 'iron',
		  amount: iron
		},
		{
			name: 'silver',
			amount: silver
		},
		{
		  name: 'gold',
		  amount: gold
		},
		{
		  name: 'pot',
		  amount: promethium
		},
		{
		  name: 'titan',
		  amount: titanium
		},
		{
		  name: 'ancient',
		  amount: anceintOre
		},
		{
		  name: 'dragon',
		  amount: dragonOre
		},
		{
		  name: 'blood',
		  amount: bloodStone
		},
		{
		  name: 'normalMap',
		  amount: normalMap
		},
		{
		  name: 'greenMap',
		  amount: greenMap
		},
		{
		  name: 'redMap',
		  amount: redMap
		},
		{
			name: 'normalChest',
			amount: normalChest
		},
		{
			name: 'greenChest',
			amount: greenChest
		},
		{
			name: 'redChest',
			amount: redChest
		},
		{
			name: 'moonstoneBox',
			amount: moonstoneAmt
		},
		{
			name: 'shootingStar',
			amount: shootingStarAmt
		},
		{
			name: 'ultraShootingStar',
			amount: UltraShootingStarAmt
		},
		{
			name: 'metor',
			amount: meteorAmt
		},
		{
			name: 'ultraMetor',
			amount: ultraMeteorAmt
		}
		]
		
		for (const material of materials) {
		  if (material.amount <= 0) {
			material.amount = 00;;;
			document.getElementById(material.name).style.display = "none";
		  } else {
			document.getElementById(material.name).style.display = 'inline-block';
		  }
		}

	if (coin < 0) {
		coin = 0
		document.getElementById("coin-count").innerHTML = coin
	}
}
setInterval(checkReq, 1000)