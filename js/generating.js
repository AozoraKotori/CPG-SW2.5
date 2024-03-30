weapon = document.getElementById("weapon");
tool = document.getElementById("tool");
shield = document.getElementById("shield");
trigger = document.getElementById("trigger");
holy = document.getElementById("holy");
magisphere = document.getElementById("magisphere");
jewelry = document.getElementById("jewelry");
instrument = document.getElementById("instrument");
drag = document.getElementById("drag");
amulet = document.getElementById("amulet");

CheckBox = [weapon, tool, shield, trigger, holy, magisphere, jewelry, instrument, drag, amulet];

Option = document.getElementById("Option");

Secret = document.getElementById("Secret");
Invisible = document.getElementById("Invisible");
HideStatus = document.getElementById("HideStatus");

Generate = document.getElementById("generate");
def = document.getElementById("default");
org = document.getElementById("original");

copy = document.getElementById("copy");
ccfolia = document.getElementById("ccfolia");

const GenerateCP = () => {
	alert("チャットパレットを生成しました。");
	org.removeAttribute("disabled");
	Option.removeAttribute("disabled");
	copy.removeAttribute("disabled");
	ccfolia.removeAttribute("disabled");

	def.value = OutPut(false, false);
	org.value = Basic(false);
}

const Copying = () => {
	navigator.clipboard.writeText(OutPut(false, true));
	alert("チャットパレットをクリップボードにコピーしました。");
}

const Output = () => {
	hp = parseInt(document.getElementById("AdventLv").value) * 3 + parseInt(Vit.value) + parseInt(AddD.value) + parseInt(stats.hpAddTotal);
	mp = (parseInt(Sor.value) + parseInt(Con.value) + parseInt(Pri.value) + parseInt(Mag.value) + parseInt(Fai.value) + parseInt(Dru.value) + parseInt(Dem.value)) * 3 + parseInt(Mnd.value) + parseInt(AddM.value) + parseInt(stats.mpAddTotal);

	navigator.clipboard.writeText(
		'{' +
		'"kind": "character", ' +
		'"data":{' +
		'"name": "' + stats.characterName + '", ' +
		'"externalUrl": "https://yutorize.2-d.jp/ytsheet/sw2.5/?id=' + stats.id + '", ' +
		'"status": [' +
		'{"label": "HP", "value": "' + hp + '", "max": "' + hp + '"}, ' +
		'{"label": "MP", "value": "' + mp + '", "max": "' + mp + '"}' +
		'],' +
		'"params": [], "faces": [], ' +
		'"x": 0, "y": 0, "z": 0, ' +
		'"angle": 0, "width": 4, "height": 4, ' +
		/* secret: ステータスを非公開にする invisible: 発言時キャラクターを表示しない hideStatus: 盤面キャラクター一覧に表示しない */
		'"secret": "' + Secret.checked.toString() + '", "invisible": "' + Invisible.checked.toString() + '", "hideStatus": "' + HideStatus.checked.toString() + '",' +
		'"commands": "' + OutPut(true, true) + '"' +
		'}' +
		'}'
	);

	alert("ココフォリア用のコマデータをクリップボードにコピーしました。\nココフォリアでペーストすることでキャラクターが生成されます。");
}

Generate.addEventListener('click', GenerateCP);

copy.addEventListener('click', Copying);
ccfolia.addEventListener('click', Output);

function OutPut(KOMA, CLIP) {
	op = "";
	if (KOMA) {
		NL = "\\n";
	} else {
		NL = "\n";
	}
	op += "◆冒険者判定" + NL + "2d6+{冒険者レベル}+{知力ボーナス} [真偽判定]" + NL + "2d6+{冒険者レベル}+{敏捷度ボーナス}>=10 [跳躍判定]" + NL + "2d6+{冒険者レベル}+{筋力ボーナス}>=10 [登攀判定:冒険者判定]" + NL + "2d6+{冒険者レベル}+{筋力ボーナス} [腕力判定]" + NL;
	op += NL + "■行動判定■" + NL + "※行動判定はすべて行為判定に含まれる" + NL;

	if (Sco.value > 0) {
		op += NL + "◆スカウト技能" + NL + "1.スカウト技巧判定パッケージ" + NL + "2d6+{技巧:SC} [スリ判定]" + NL + "2d6+{技巧:SC} [変装判定]" + NL + "2d6+{技巧:SC} [隠蔽判定:スカウト技能]" + NL + "2d6+{技巧:SC} [解除判定:スカウト技能]" + NL + "2d6+{技巧:SC} [罠設置判定:スカウト技能]" + NL;
		if (tool.checked) {
			op += "2d6+{技巧:SC[専用]} [解除判定:スカウト技能]〈[専用]スカウト用ツール〉" + NL + "2d6+{技巧:SC[専用]} [罠設置判定:スカウト技能]〈[専用]スカウト用ツール〉" + NL;
		}
		op += "2.スカウト運動判定パッケージ" + NL + "2d6+{運動:SC} [先制判定:スカウト技能]" + NL + "2d6+{運動:SC} [受け身判定:スカウト技能]" + NL + "2d6+{運動:SC} [隠密判定:スカウト技能]" + NL + "2d6+{運動:SC} [軽業判定:スカウト技能]" + NL + "2d6+{運動:SC} [登攀判定:スカウト技能]" + NL + "2d6+{運動:SC} [尾行判定:スカウト技能]" + NL;
		op += "3.スカウト観察判定パッケージ" + NL + "2d6+{観察:SC} [足跡追跡判定:スカウト技能]" + NL + "2d6+{観察:SC} [異常感知判定:スカウト技能]" + NL + "2d6+{観察:SC} [聞き耳判定:スカウト技能]" + NL + "2d6+{観察:SC} [危険感知判定:スカウト技能]" + NL + "2d6+{観察:SC} [探索判定:スカウト技能]" + NL + "2d6+{観察:SC} [天候予測判定:スカウト技能]" + NL + "2d6+{観察:SC} [罠回避判定:スカウト技能]" + NL + "2d6+{観察:SC} [地図作製判定:スカウト技能]" + NL + "2d6+{観察:SC} [宝物鑑定判定:スカウト技能]" + NL;
	}

	if (Ran.value > 0) {
		op += NL + "◆レンジャー技能" + NL;
		op += "1.レンジャー技巧判定パッケージ" + NL + "2d6+{技巧:RA} [応急手当判定]" + NL + "2d6+{技巧:RA} [隠蔽判定:レンジャー技能]" + NL + "2d6+{技巧:RA} [解除判定:レンジャー技能※自然環境下]" + NL + "2d6+{技巧:RA} [罠設置判定:レンジャー技能※自然環境下]" + NL;
		op += "2.レンジャー運動判定パッケージ" + NL + "2d6+{運動:RA} [受け身判定:レンジャー技能]" + NL + "2d6+{運動:RA} [隠密判定:レンジャー技能]" + NL + "2d6+{運動:RA} [軽業判定:レンジャー技能]" + NL + "2d6+{運動:RA}>=10 [登攀判定:レンジャー技能]" + NL + "2d6+{運動:RA} [尾行判定:レンジャー技能]" + NL;
		op += "3.レンジャー観察判定パッケージ" + NL + "2d6+{観察:RA} [足跡追跡判定:レンジャー技能]" + NL + "2d6+{観察:RA} [異常感知判定:レンジャー技能※自然環境下]" + NL + "2d6+{観察:RA} [聞き耳判定:レンジャー技能]" + NL + "2d6+{観察:RA} [危険感知判定:レンジャー技能]" + NL + "2d6+{観察:RA} [探索判定:レンジャー技能※自然環境下]" + NL + "2d6+{観察:RA} [天候予測判定:レンジャー技能]" + NL + "2d6+{観察:RA} [罠回避判定:レンジャー技能※自然環境下]" + NL + "2d6+{観察:RA} [病気知識判定:レンジャー技能]" + NL + "2d6+{観察:RA} [薬品学判定:レンジャー技能]" + NL + "2d6+{観察:RA} [地図作製判定:レンジャー技能※自然環境下]" + NL;
	}

	if (Sag.value > 0) {
		op += NL + "◆セージ技能" + NL + "1.セージ知識判定パッケージ" + NL + "2d6+{知識:SA} [見識判定:セージ技能]" + NL + "2d6+{知識:SA} [文献判定:セージ技能]" + NL + "2d6+{知識:SA} [魔物知識判定:セージ技能／知名度:，弱点値:]" + NL + "2d6+{知識:SA} [文明鑑定判定]" + NL + "2d6+{知識:SA} [地図作製判定:セージ技能]" + NL + "2d6+{知識:SA} [宝物鑑定判定:セージ技能]" + NL + "2d6+{知識:SA} [病気知識判定:セージ技能]" + NL + "2d6+{知識:SA} [薬品学判定:セージ技能]" + NL;
	}

	if (Alc.value > 0) {
		op += NL + "◆アルケミスト技能" + NL + "1.アルケミスト知識判定パッケージ" + NL + "2d6+{知識:AL} [見識判定:アルケミスト技能]" + NL + "2d6+{知識:AL} [文献判定:アルケミスト技能]" + NL + "2d6+{知識:AL} [薬品学判定:アルケミスト技能]" + NL;
	}

	if (Rid.value > 0) {
		op += NL + "◆ライダー技能" + NL + "1.ライダー運動判定" + NL + "2d6+{運動:RI} [受け身判定:ライダー技能]" + NL + "2d6+{運動:RI} [騎乗判定]" + NL;
		op += "2.ライダー観察判定　※騎芸【探索命令】習得前提" + NL + "2d6+{観察:RI} [足跡追跡判定:ライダー技能]" + NL + "2d6+{観察:RI} [異常感知判定:ライダー技能]" + NL + "2d6+{観察:RI} [危険感知判定:ライダー技能]" + NL + "2d6+{観察:RI} [探索判定:ライダー技能]" + NL + "2d6+{観察:RI} [罠回避判定:ライダー技能]" + NL;
		op += "3.ライダー知識判定" + NL + "2d6+{知識:RI} [弱点隠蔽判定]" + NL + "2d6+{知識:RI} [地図作成判定:ライダー技能]" + NL + "2d6+{知識:RI} [魔物知識判定:ライダー技能／知名度:，弱点値:不可]" + NL;
	}

	if (Geo.value > 0) {
		op += NL + "◆ジオマンサー技能" + NL + "1.ジオマンサー観察判定" + NL + "2d6+{観察:GE} [探索判定:ジオマンサー技能]" + NL + "2d6+{観察:GE} [天候予測判定:ジオマンサー技能]" + NL;
	}

	op += NL + "◆回避力判定" + NL;
	for (let k = 0; k < 4; k++) {
		if (WarSkillBox[k].value > 0) {
			op += "2d6+{" + WarSkillName[k] + "技能レベル}+{敏捷度ボーナス}+{《回避行動》} [回避力判定:" + WarSkillName[k] + "技能]" + NL;
		}
	}

	shooter = true;
	if (Sho.value > 0) {
		for (let k = 0; k < FeatureBox.length; k++) {
			if (FeatureBox[k].value == "射手の体術") {
				op += "2d6+{シューター技能レベル}+{敏捷度ボーナス}+{《回避行動》} [回避力判定:シューター技能《射手の体術》]" + NL;
			} else if (k == FeatureBox.length - 1) {
				shooter = false;
			}
		}
	}

	WarLvSum = parseInt(Fig.value) + parseInt(Gra.value) + parseInt(Bat.value) + parseInt(Fen.value);
	if (!shooter && WarLvSum == 0) {
		op += "2d6+0+{《回避行動》} [回避力判定:平目]" + NL;
	}

	op += NL + "◆魔法行使判定" + NL;
	for (let k = 0; k < MagicSkillBox.length; k++) {
		if (MagicSkillBox[k].value > 0) {
			op += "2d6+{魔力:" + MagicName[k] + "} [" + MagicName[k] + "行使判定]" + NL;
		}
	}

	op += NL + "◆その他の行動判定" + NL;
	if (Sco.value == 0) {
		op += "2d6+0 [スリ判定:平目]" + NL + "2d6+0 [変装判定:平目]" + NL;
		if (War.value == 0) {
			op += "2d6+0 [先制判定:平目]" + NL;
		}
	}

	if (Ran.value == 0) {
		op += "2d6+0 [応急手当判定:平目]" + NL;
	}

	if (Sag.value == 0) {
		op += "2d6+0 [見識判定:平目]" + NL + "2d6+0 [文明鑑定判定:平目]" + NL;
		if (Sco.value == 0) {
			op += "2d6+0 [宝物鑑定判定:平目]" + NL;
		}

		if (Ran.value == 0) {
			op += "2d6+0 [病気知識判定:平目]" + NL;
			if (Alc.value == 0) {
				op += "2d6+0 [薬品学判定:平目]" + NL;
			}
		}

		if (Alc.value == 0) {
			op += "2d6+0 [文献判定:平目]" + NL;
		}

		if (Rid.value == 0) {
			op += "2d6+0 [魔物知識判定:平目]" + NL;
		}
	}

	if (Rid.value == 0) {
		op += "2d6+0 [騎乗判定:平目]" + NL + "2d6+0 [弱点隠蔽判定:平目]" + NL;
	}

	if (parseInt(Sco.value) + parseInt(Ran.value) == 0) {
		op += "2d6+0 [隠蔽判定:平目]" + NL + "2d6+0 [解除判定:平目]" + NL + "2d6+0 [罠設置判定:平目]" + NL + "2d6+0 [隠密判定:平目]" + NL + "2d6+0 [軽業判定:平目]" + NL + "2d6+0 [尾行判定:平目]" + NL + "2d6+0 [聞き耳判定:平目]" + NL;
		if (Rid.value == 0) {
			op += "2d6+0 [受け身判定]" + NL + "2d6+0 [足跡追跡判定:平目]" + NL + "2d6+0 [異常感知判定:平目]" + NL + "2d6+0 [危険感知判定:平目]" + NL + "2d6+0 [罠回避判定:平目]" + NL;
			if (Geo.value == 0) {
				op += "2d6+0 [探索判定:平目]" + NL;
			}

			if (Geo.value == 0) {
				op += "2d6+0 [天候予測判定:平目]" + NL;
			}

			if (Sag == 0) {
				op += "2d6+0 [地図作製判定:平目]" + NL;
			}
		}
	}

	if (War.value > 0) {
		op += "2d6+{ウォーリーダー技能レベル}+{敏捷度ボーナス} [先制判定:ウォーリーダー技能]" + NL;
		CraftCommand = [stats.craftCommand1, stats.craftCommand2, stats.craftCommand3, stats.craftCommand4, stats.craftCommand5, stats.craftCommand6, stats.craftCommand7, stats.craftCommand8, stats.craftCommand9, stats.craftCommand10, stats.craftCommand11, stats.craftCommand12, stats.craftCommand13, stats.craftCommand14, stats.craftCommand15, stats.craftCommand16, stats.craftCommand17, stats.craftCommand18, stats.craftCommand19, stats.craftCommand20];
		for (let k = 0; k < CraftCommand.length; k++) {
			if (CraftCommand[k] == "軍師の知略") {
				op += "2d6+{ウォーリーダー技能レベル}+{知力ボーナス}+1 [先制判定:ウォーリーダー技能【陣率：軍師の知略】]" + NL;
			}
		}
	}

	if (Bar.value > 0) {
		op += "2d6+{奏力} [演奏判定]" + NL;
	}

	if (Alc.value > 0) {
		op += "2d6+{アルケミスト技能レベル}+{知力ボーナス}+{《賦術強化》} [賦術判定]" + NL;
	}
	op += "2d6+{冒険者レベル}+{敏捷度ボーナス} [水泳判定]" + NL + "2d6+{任意の技能レベル}+{知力ボーナス} [聞き込み判定]" + NL;
	op += NL + "■その他の行為判定■" + NL;
	op += "2d6+{冒険者レベル}+{生命力ボーナス} [生死判定]" + NL + "2d6+{生命抵抗力} [生命抵抗力判定]" + NL + "2d6+{精神抵抗力} [精神抵抗力判定]" + NL;
	op += NL + "■その他の判定■" + NL;
	op += "2d6+{戦利品獲得} [戦利品獲得]" + NL;
	op += NL + "■薬草・ポーション■" + NL;

	if (Ran.value > 0) {
		op += "K10[13]+{技巧:RA} 〈救命草「毒属性」〉" + NL + "K50[13]+{技巧:RA} 〈救難草「毒属性」〉" + NL + "K00[13]+{技巧:RA} 〈魔香草「毒属性」〉" + NL + "K10[13]+{技巧:RA} 〈魔海草「毒属性」〉" + NL + "K20[13]+{観察:RA} 〈ヒーリングポーション「毒属性」〉" + NL + "K20[13]+{観察:RA}+1 〈ヒーリングポーション+1「毒属性」〉" + NL + "K30[13]+{観察:RA} 〈トリートポーション「毒属性」〉" + NL + "c{観察:RA} 〈魔香水〉" + NL;
		if (drag.checked) {
			op += "K10[13]+{技巧:RA}TF4 〈救命草「毒属性」〉〈薬師道具セット〉" + NL + "K50[13]+{技巧:RA}TF4 〈救難草「毒属性」〉〈薬師道具セット〉" + NL + "K00[13]+{技巧:RA}TF4 〈魔香草「毒属性」〉〈薬師道具セット〉" + NL + "K10[13]+{技巧:RA}TF4 〈魔海草「毒属性」〉〈薬師道具セット〉" + NL;
		}
	} else {
		op += "K10[13] 〈救命草「毒属性」〉" + NL + "K50[13] 〈救難草「毒属性」〉" + NL + "K00[13] 〈魔香草「毒属性」〉" + NL + "K10[13] 〈魔海草「毒属性」〉" + NL + "K20[13] 〈ヒーリングポーション「毒属性」〉" + NL + "K20[13]+1 〈ヒーリングポーション+1「毒属性」〉" + NL + "K30[13] 〈トリートポーション「毒属性」〉" + NL + "c0 〈魔香水〉" + NL;
		if (drag.checked) {
			op += "K10[13]TF4 〈救命草「毒属性」〉〈薬師道具セット〉" + NL + "K50[13]TF4 〈救難草「毒属性」〉〈薬師道具セット〉" + NL + "K00[13]TF4 〈魔香草「毒属性」〉〈薬師道具セット〉" + NL + "K10[13]TF4 〈魔海草「毒属性」〉〈薬師道具セット〉" + NL;
		}
	}

	if (CLIP) {
		if (KOMA) {
			op += NL + org.value.replace(/\n/g, "\\n") + NL;
		} else {
			op += NL + org.value + NL;
		}
	}

	op += NL + "■パラメータ■" + NL;
	op += "1.能力値" + NL;
	for (let k = 0; k < ScoreBox.length; k++) {
		op += "//" + ScoreName[k] + "=(" + ScoreBox[k].value + "+{" + ScoreName[k] + "増強})" + NL;
	}

	op += NL + "2.能力値増強" + NL;
	for (let k = 0; k < AddScoreBox.length; k++) {
		op += "//" + ScoreName[k] + "増強=" + AddScoreBox[k].value + NL;
	}
	op += NL;
	op += "//HP増強=" + stats.hpAddTotal + NL + "//MP増強=" + stats.mpAddTotal + NL;
	op += NL;

	if (typeof stats.vitResistAdd === 'undefined') {
		op += "//生命抵抗力増強=0" + NL;
	} else {
		op += "//生命抵抗力増強=" + stats.vitResistAdd + NL;
	}
	if (typeof stats.mndResistAdd === 'undefined') {
		op += "//精神抵抗力増強=0" + NL;
	} else {
		op += "//精神抵抗力増強=" + stats.mndResistAdd + NL;
	}

	op += NL + "3.1.能力値ボーナス" + NL;
	for (let k = 0; k < BonusBox.length; k++) {
		op += "//" + ScoreName[k] + "ボーナス=({" + ScoreName[k] + "}/6F)" + NL;
	}
	op += NL + "3.2.専用アイテム用能力値ボーナス" + NL;

	Owned = ["//武器[専用]器用度ボーナス=(({器用度}+2)/6F)",
		"//スカウト用ツール[専用]器用度ボーナス=(({器用度}+2)/6F)",
		"//盾[専用]敏捷度ボーナス=(({敏捷度}+2)/6F)",
		"//発動体[専用]知力ボーナス=(({知力}+2)/6F)",
		"//聖印[専用]知力ボーナス=(({知力}+2)/6F)",
		"//マギスフィア[専用]知力ボーナス=(({知力}+2)/6F)",
		"//宝石ケース[専用]知力ボーナス=(({知力}+2)/6F)",
		"//楽器[専用]精神力ボーナス=(({精神力}+2)/6F)"];
	for (let k = 0; k < 8; k++) {
		if (CheckBox[k].checked) {
			op += Owned[k] + NL
		}
	}

	op += NL + "4.最大HPと最大MP" + NL;
	op += "c{冒険者レベル}*3+{生命力}+{HP増強} [最大HP]" + NL;
	op += "c({ソーサラー技能レベル}+{コンジャラー技能レベル}+{プリースト技能レベル}+{マギテック技能レベル}+{フェアリーテイマー技能レベル}+{ドルイド技能レベル}+{デーモンルーラー技能レベル})*3+{精神力}+{MP増強} [最大MP]" + NL;

	op += NL + "5.抵抗力" + NL;
	op += "//生命抵抗力={冒険者レベル}+{生命力ボーナス}+{生命抵抗力増強}" + NL;
	op += "//精神抵抗力={冒険者レベル}+{精神力ボーナス}+{精神抵抗力増強}" + NL;

	op += NL + "6.1.冒険者レベル" + NL;
	op += "//冒険者レベル=" + document.getElementById("AdventLv").value + NL;

	op += NL + "6.2.技能レベル" + NL;
	op += "A.戦士系技能" + NL;
	for (let k = 0; k < WarSkillBox.length; k++) {
		op += "//" + WarSkillName[k] + "技能レベル=" + WarSkillBox[k].value + NL;
	}
	op += "B.魔法使い系技能" + NL;
	for (let k = 0; k < MagicSkillBox.length; k++) {
		op += "//" + MagicSkillName[k] + "技能レベル=" + MagicSkillBox[k].value + NL;
	}
	op += "C.その他系技能" + NL;
	for (let k = 0; k < OtherSkillBox.length; k++) {
		op += "//" + OtherSkillName[k] + "技能レベル=" + OtherSkillBox[k].value + NL;
	}

	op += NL + "6.3.一般技能" + NL
	for (let k = 0; k < CommonSkillNameBox.length; k++) {
		num = k + 1;
		if (CommonSkillNameBox[k].value != "一般技能" + num) {
			op += "//" + CommonSkillNameBox[k].value + "技能レベル=" + CommonSkillLvBox[k].value + NL;
		}
	}

	op += NL + "7.魔力・奏力" + NL;
	for (let k = 0; k < MagicName.length; k++) {
		if (MagicSkillBox[k].value > 0) {
			if (k < 2 && trigger.checked) {
				op += "//魔力:" + MagicName[k] + "=({" + MagicSkillName[k] + "技能レベル}+{発動体[専用]知力ボーナス}+{《魔力強化》})" + NL;
			} else if (k == 3 && holy.checked) {
				op += "//魔力:" + MagicName[k] + "=({" + MagicSkillName[k] + "技能レベル}+{聖印[専用]知力ボーナス}+{《魔力強化》})" + NL;
			} else if (k == 4 && magisphere.checked) {
				op += "//魔力:" + MagicName[k] + "=({" + MagicSkillName[k] + "技能レベル}+{マギスフィア[専用]知力ボーナス}+{《魔力強化》})" + NL;
			} else if (k == 5 && jewelry.checked) {
				op += "//魔力:" + MagicName[k] + "=({" + MagicSkillName[k] + "技能レベル}+{宝石ケース[専用]知力ボーナス}+{《魔力強化》})" + NL;
			} else {
				op += "//魔力:" + MagicName[k] + "=({" + MagicSkillName[k] + "技能レベル}+{知力ボーナス}+{《魔力強化》})" + NL;
			}
		}
	}

	if (Bar.value > 0) {
		if (instrument.checked) {
			op += "//奏力={バード技能レベル}+{楽器[専用]精神力ボーナス}" + NL;
		} else {
			op += "//奏力={バード技能レベル}+{精神力ボーナス}" + NL;
		}
	}

	op += NL + "■判定パッケージ用パラメータ■" + NL;
	if (Sco.value > 0) {
		op += "◆スカウト技能パッケージ" + NL;
		op += "//技巧:SC={スカウト技能レベル}+{器用度ボーナス}" + NL + "//運動:SC={スカウト技能レベル}+{敏捷度ボーナス}" + NL + "//観察:SC={スカウト技能レベル}+{知力ボーナス}" + NL;
		if (tool.checked) {
			op += "//技巧:SC[専用]={スカウト技能レベル}+{スカウト用ツール[専用]器用度ボーナス}" + NL;
		}
	}

	if (Ran.value > 0) {
		op += "◆レンジャー技能パッケージ" + NL;
		op += "//技巧:RA={レンジャー技能レベル}+{器用度ボーナス}" + NL + "//運動:RA={レンジャー技能レベル}+{敏捷度ボーナス}" + NL + "//観察:RA={レンジャー技能レベル}+{知力ボーナス}" + NL;
	}

	if (Sag.value > 0) {
		op += "◆セージ技能パッケージ" + NL;
		op += "//知識:SA={セージ技能レベル}+{知力ボーナス}" + NL;
	}
	if (Alc.value > 0) {
		op += "◆アルケミスト技能パッケージ" + NL;
		op += "//知識:AL={アルケミスト技能レベル}+{知力ボーナス}" + NL;
	}

	if (Rid.value > 0) {
		op += "◆ライダー技能パッケージ" + NL;
		op += "//運動:RI={ライダー技能レベル}+{敏捷度ボーナス}" + NL + "//観察:RI={ライダー技能レベル}+{知力ボーナス}" + NL + "//知識:RI={ライダー技能レベル}+{知力ボーナス}" + NL;
	}

	if (Geo.value > 0) {
		op += "◆ジオマンサー技能パッケージ" + NL;
		op += "//観察:GE={ジオマンサー技能レベル}+{知力ボーナス}" + NL;
	}

	op += NL + "■戦闘特技■" + NL;
	WeaponName = ["ソード", "アックス", "スピア", "メイス", "スタッフ", "フレイル", "ウォーハンマー", "絡み", "格闘", "投擲", "ボウ", "クロスボウ", "ブロウガン", "ガン"];
	MasteryWeapon = [stats.masterySword, stats.masteryAxe, stats.masterySpear, stats.masteryMace, stats.masteryStaff, stats.masteryFlail, stats.masteryHammer, stats.masteryEntangle, stats.masteryGrapple, stats.masteryThrow, stats.masteryBow, stats.masteryCrossbow, stats.masteryBlowgun, stats.masteryGun];

	for (let k = 0; k < WeaponName.length; k++) {
		for (let i = 0; i < FeatureBox.length; i++) {
			if (FeatureBox[i].value == "武器習熟Ａ／" + WeaponName[k]) {
				op += "//《武器習熟／" + WeaponName[k] + "》=" + MasteryWeapon[k] + NL;
			}
		}
	}

	ArmorName = ["非金属鎧", "金属鎧", "盾"];
	MasteryArmor = [stats.masteryNonMetalArmour, stats.masteryMetalArmour, stats.masteryShield];
	for (let k = 0; k < ArmorName.length; k++) {
		for (let i = 0; i < FeatureBox.length; i++) {
			if (FeatureBox[i].value == "防具習熟Ａ／" + ArmorName[k]) {
				op += "//《防具習熟習熟／" + ArmorName[k] + "》=" + MasteryArmor[k] + NL;
			}
		}
	}

	if (stats.magicPowerEnhance > 0) {
		op += "//《魔力強化》=" + stats.magicPowerEnhance + NL;
	} else {
		op += "//《魔力強化》=0" + NL;
	}

	for (let i = 0; i < FeatureBox.length; i++) {
		if (FeatureBox[i].value == "賦術強化Ⅰ") {
			op += "//《賦術強化》=1" + NL;
			break;
		} else if (FeatureBox[i].value == "賦術強化Ⅱ") {
			op += "//《賦術強化》=2" + NL;
			break;
		} else if (i == FeatureBox.length - 1) {
			op += "//《賦術強化》=0" + NL;
		}
	}

	for (let i = 0; i < FeatureBox.length; i++) {
		if (FeatureBox[i].value == "命中強化Ⅰ") {
			op += "//《命中強化》=1" + NL;
			break;
		} else if (FeatureBox[i].value == "命中強化Ⅱ") {
			op += "//《命中強化》=2" + NL;
			break;
		} else if (i == FeatureBox[i].length - 1) {
			op += "//《命中強化》=0" + NL;
		}
	}

	for (let i = 0; i < FeatureBox.length; i++) {
		if (FeatureBox[i].value == "回避行動Ⅰ") {
			op += "//《回避行動》=1" + NL;
			break;
		} else if (FeatureBox[i].value == "回避行動Ⅱ") {
			op += "//《回避行動》=2" + NL;
			break;
		} else if (i == FeatureBox.length - 1) {
			op += "//《回避行動》=0" + NL;
		}
	}

	Add = 0;
	if (amulet.checked) {
		Add++;
	}

	if (typeof stats.combatFeatsAuto !== 'undefined') {
		if (stats.combatFeatsAuto.indexOf("トレジャーハント") != -1) {
			Add++;
		}

		if (stats.combatFeatsAuto.indexOf("トレジャーマスター") != -1) {
			Add++;
		}

		if (stats.combatFeatsAuto.indexOf("鋭い目") != -1) {
			Add++;
		}
	}
	op += NL + "//戦利品獲得=" + Add + NL;
	return op;
}

function Basic(KOMA) {
	base = "";
	if (KOMA) {
		NewL = "\\n";
	} else {
		NewL = "\n";
	}

	base += "■きほんのき■" + NewL;
	for (let k = 0; k < WarSkillName.length; k++) {
		if (WarSkillBox[k].value > 0) {
			base += "2d6+{" + WarSkillName[k] + "技能レベル}+{器用度ボーナス} [命中力判定:" + WarSkillName[k] + "技能]" + NewL;
			if (weapon.checked) {
				base += "2d6+{" + WarSkillName[k] + "技能レベル}+{武器[専用]器用度ボーナス} [命中力判定:" + WarSkillName[k] + "技能]" + NewL;
			}
			base += "Kxx[cc]+{" + WarSkillName[k] + "技能レベル}+{筋力ボーナス}+0 〈ダメージ／武器の名前〉" + NewL;
			if (k == 4) {
				base += "Kxx[cc]+{シューター技能レベル}+0 〈ダメージ／クロスボウの名前〉" + NewL;
			}
		}
	}

	for (let k = 0; k < MagicSkillName.length; k++) {
		if (MagicSkillBox[k].value > 0) {
			base += "Kxx[cc]+{魔力:" + MagicName[k] + "}+0 【ダメージ／" + MagicName[k] + "名】" + NewL;
			base += "Kxx+{魔力:" + MagicName[k] + "}H+(0) 【ダメージ(半減)／" + MagicName[k] + "名】" + NewL;
		}
	}

	if (!(typeof stats.chatPalette === 'undefined')) {
		base += NewL + stats.chatPalette.replace(/&lt;br&gt;/g, NewL);
	}

	return base;
}