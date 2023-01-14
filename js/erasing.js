const ClearData = () => {
	if (window.confirm("現在のデータをクリアして，はじめからやり直しますか？")) {
		Reset.setAttribute("disabled", true);
		Input.removeAttribute("disabled");
		CheckList.setAttribute("disabled", true);
		Input.value = "";

		document.getElementById("name").value = "";
		document.getElementById("AdventLv").value = "";

		for (let i = 0; i < ScoreBox.length; i++) {
			ScoreBox[i].value = "";
			AddScoreBox[i].value = "";
			BonusBox[i].value = "";
		}

		for (let i = 0; i < WarSkillBox.length; i++) {
			WarSkillBox[i].value = "";
		}

		for (let i = 0; i < MagicSkillBox.length; i++) {
			MagicSkillBox[i].value = "";
		}

		for (let i = 0; i < OtherSkillBox.length; i++) {
			OtherSkillBox[i].value = "";
		}

		for (let i = 0; i < CommonSkillNameBox.length; i++) {
			ind = i + 1;
			CommonSkillNameBox[i].value = "一般技能" + ind;
			CommonSkillLvBox[i].value = "";
		}

		for (let i = 0; i < FeatureBox.length; i++) {
			FeatureBox[i].value = "";
		}
		stats = "";

		for (let i = 0; i < CheckBox.length; i++) {
			CheckBox[i].checked = false;
		}

		Generate.setAttribute("disabled", true);

		def.value = "";
		org.value = "";

		org.setAttribute("disabled", true);

		Secret.setAttribute("disabled", true);
		Secret.checked = false;
		Invisible.setAttribute("disabled", true);
		Invisible.checked = false;
		HideStatus.setAttribute("disabled", true);
		HideStatus.checked = false;

		copy.setAttribute("disabled", true);
		ccfolia.setAttribute("disabled", true);
	}
}

Reset.addEventListener('click', ClearData);