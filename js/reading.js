var Input = document.getElementById("Input");
var Reset = document.getElementById("Reset");
var CheckList = document.getElementById("CheckList");

var stats;

function ReadStatus() {
	note = "「" + stats.characterName + "」のデータを読み込みました。"
	alert(note);
	document.getElementById("name").value = stats.characterName;
	if (typeof stats.level === 'undefined') {
		document.getElementById("AdventLv").value = 0;
	} else {
		document.getElementById("AdventLv").value = stats.level;
	}

	Score = [stats.sttDex, stats.sttAgi, stats.sttStr, stats.sttVit, stats.sttInt, stats.sttMnd];
	AddScore = [stats.sttAddA, stats.sttAddB, stats.sttAddC, stats.sttAddD, stats.sttAddE, stats.sttAddF];
	for (let i = 0; i < ScoreBox.length; i++) {
		ScoreBox[i].value = Score[i];

		if (typeof AddScore[i] === 'undefined') {
			AddScoreBox[i].value = 0;
			BonusBox[i].value = parseFloat(Math.floor(Score[i] / 6));
		} else {
			AddScoreBox[i].value = AddScore[i];
			BonusBox[i].value = Math.floor((parseFloat(Score[i]) + parseFloat(AddScore[i])) / 6);
		}
	}

	WarSkillLv = [stats.lvFig, stats.lvGra, stats.lvBat, stats.lvFen, stats.lvSho];
	for (let i = 0; i < WarSkillBox.length; i++) {
		if (typeof WarSkillLv[i] === 'undefined') {
			WarSkillBox[i].value = 0;
		} else {
			WarSkillBox[i].value = WarSkillLv[i];
		}
	}

	MagicSkillLv = [stats.lvSor, stats.lvCon, stats.lvPri, stats.lvMag, stats.lvFai, stats.lvDru, stats.lvDem, stats.lvWiz];
	for (let i = 0; i < MagicSkillBox.length; i++) {
		if (typeof MagicSkillLv[i] === 'undefined') {
			MagicSkillBox[i].value = 0;
		} else {
			MagicSkillBox[i].value = MagicSkillLv[i];
		}
	}

	OtherSkillLv = [stats.lvSco, stats.lvRan, stats.lvSag, stats.lvEnh, stats.lvBar, stats.lvRid, stats.lvAlc, stats.lvGeo, stats.lvWar];
	for (let i = 0; i < OtherSkillBox.length; i++) {
		if (typeof OtherSkillLv[i] === 'undefined') {
			OtherSkillBox[i].value = 0;
		} else {
			OtherSkillBox[i].value = OtherSkillLv[i];
		}
	}

	CommonSkillName = [stats.commonClass1, stats.commonClass2, stats.commonClass3, stats.commonClass4, stats.commonClass5, stats.commonClass6, stats.commonClass7, stats.commonClass8, stats.commonClass9, stats.commonClass10];
	CommonSkillLv = [stats.lvCommon1, stats.lvCommon2, stats.lvCommon3, stats.lvCommon4, stats.lvCommon5, stats.lvCommon6, stats.lvCommon7, stats.lvCommon8, stats.lvCommon9, stats.lvCommon10];
	for (let i = 0; i < CommonSkillNameBox.length; i++) {
		index = i + 1;
		if (typeof CommonSkillName[i] === 'undefined' || CommonSkillName[i].value == "") {
			CommonSkillNameBox[i].value = "一般技能" + index;
			CommonSkillLvBox[i].value = 0;
		} else {
			CommonSkillNameBox[i].value = CommonSkillName[i];
			if (typeof CommonSkillLv[i] === 'undefined') {
				CommonSkillLvBox[i].value = 0;
			} else {
				CommonSkillLvBox[i].value = CommonSkillLv[i];
			}
		}
	}

	Features = [stats.combatFeatsLv1, stats.combatFeatsLv3, stats.combatFeatsLv5, stats.combatFeatsLv7, stats.combatFeatsLv9, stats.combatFeatsLv11, stats.combatFeatsLv13, stats.combatFeatsLv15, stats.combatFeatsLv16, stats.combatFeatsLv17];
	for (let i = 0; i < FeatureBox.length; i++) {
		if (typeof Features[i] === 'undefined') {
			FeatureBox[i].value = "";
		} else {
			FeatureBox[i].value = Features[i];
		}
	}

}

function ConvertJSON(file) {
	var reader = new FileReader();

	reader.readAsText(file);
	reader.addEventListener('load', function () {
		stats = JSON.parse(reader.result);
		ReadStatus();
	})
}

const FileInput = () => {
	var result = Input.files[0];

	if (result.name.match(".(json)$")) {
		Input.setAttribute("disabled", true);
		Reset.removeAttribute("disabled");
		CheckList.removeAttribute("disabled");
		Generate.removeAttribute("disabled");
		ConvertJSON(result);
	} else {
		alert("読み込んだファイルはJSONファイルではありません……")
	}
}

Input.addEventListener('change', FileInput);