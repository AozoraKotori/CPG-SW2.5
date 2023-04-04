alert("まずは「ゆとシートⅡ」でキャラクターのjsonファイルをダウンロードしましょう。（「出力」＞「JSON 形式」よりダウンロードできます）")

if (window.confirm("「ゆとシートⅡ」を開きますか？")) {
	window.open('https://yutorize.2-d.jp/ytsheet/sw2.5/');
}

/* テキストボックスの取得 */
Dex = document.getElementById("A");
Agi = document.getElementById("B");
Str = document.getElementById("C");
Vit = document.getElementById("D");
Int = document.getElementById("E");
Mnd = document.getElementById("F");

AddD = document.getElementById("AddA");
AddA = document.getElementById("AddB");
AddS = document.getElementById("AddC");
AddV = document.getElementById("AddD");
AddI = document.getElementById("AddE");
AddM = document.getElementById("AddF");

DexB = document.getElementById("AB");
AgiB = document.getElementById("BB");
StrB = document.getElementById("CB");
VitB = document.getElementById("DB");
IntB = document.getElementById("EB");
MndB = document.getElementById("FB");

ScoreName = ["器用度", "敏捷度", "筋力", "生命力", "知力", "精神力"];
ScoreBox = [Dex, Agi, Str, Vit, Int, Mnd];
AddScoreBox = [AddD, AddA, AddS, AddV, AddI, AddM];
BonusBox = [DexB, AgiB, StrB, VitB, IntB, MndB];

Fig = document.getElementById("Fig");
Gra = document.getElementById("Gra");
Bat = document.getElementById("Bat");
Fen = document.getElementById("Fen");
Sho = document.getElementById("Sho");

WarSkillName = ["ファイター", "グラップラー", "バトルダンサー", "フェンサー", "シューター"];
WarSkillBox = [Fig, Gra, Bat, Fen, Sho];

Sor = document.getElementById("Sor");
Con = document.getElementById("Con");
Pri = document.getElementById("Pri");
Mag = document.getElementById("Mag");
Fai = document.getElementById("Fai");
Dru = document.getElementById("Dru");
Dem = document.getElementById("Dem");
Wiz = document.getElementById("Wiz");

MagicSkillName = ["ソーサラー", "コンジャラー", "プリースト", "マギテック", "フェアリーテイマー", "ドルイド", "デーモンルーラー", "ウィザード"];
MagicName = ["真語魔法", "操霊魔法", "神聖魔法", "魔動機術", "妖精魔法", "森羅魔法", "召異魔法", "深智魔法"];
MagicSkillBox = [Sor, Con, Pri, Mag, Fai, Dru, Dem, Wiz];

Sco = document.getElementById("Sco");
Ran = document.getElementById("Ran");
Sag = document.getElementById("Sag");
Enh = document.getElementById("Enh");
Bar = document.getElementById("Bar");
Rid = document.getElementById("Rid");
Alc = document.getElementById("Alc");
Geo = document.getElementById("Geo");
War = document.getElementById("War");

OtherSkillName = ["スカウト", "レンジャー", "セージ", "エンハンサー", "バード", "ライダー", "アルケミスト", "ジオマンサー", "ウォーリーダー"];
OtherSkillBox = [Sco, Ran, Sag, Enh, Bar, Rid, Alc, Geo, War];

c01 = document.getElementById("C01");
c02 = document.getElementById("C02");
c03 = document.getElementById("C03");
c04 = document.getElementById("C04");
c05 = document.getElementById("C05");
c06 = document.getElementById("C06");
c07 = document.getElementById("C07");
c08 = document.getElementById("C08");
c09 = document.getElementById("C09");
c10 = document.getElementById("C10");

c01Lv = document.getElementById("C01Lv");
c02Lv = document.getElementById("C02Lv");
c03Lv = document.getElementById("C03Lv");
c04Lv = document.getElementById("C04Lv");
c05Lv = document.getElementById("C05Lv");
c06Lv = document.getElementById("C06Lv");
c07Lv = document.getElementById("C07Lv");
c08Lv = document.getElementById("C08Lv");
c09Lv = document.getElementById("C09Lv");
c10Lv = document.getElementById("C10Lv");

CommonSkillNameBox = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10];
CommonSkillLvBox = [c01Lv, c02Lv, c03Lv, c04Lv, c05Lv, c06Lv, c07Lv, c08Lv, c09Lv, c10Lv];

Feat01 = document.getElementById("F01");
Feat02 = document.getElementById("F02");
Feat03 = document.getElementById("F03");
Feat04 = document.getElementById("F04");
Feat05 = document.getElementById("F05");
Feat06 = document.getElementById("F06");
Feat07 = document.getElementById("F07");
Feat08 = document.getElementById("F08");
Feat09 = document.getElementById("F09");
Feat10 = document.getElementById("F10");
Feat11 = document.getElementById("F11");

FeatureBox = [Feat01, Feat02, Feat03, Feat04, Feat05, Feat06, Feat07, Feat08, Feat09, Feat10, Feat11];