
function OnGUI()
{
	var buttonWidth = 120;
	var buttonHeight = 60;
	
	if (GUI.Button(new Rect(Screen.width / 2 - (buttonWidth / 2) -60,(2.8 * Screen.height / 3) - (buttonHeight / 2),buttonWidth,buttonHeight),"Play Again!"))
	{
		// Reload the level
		Application.LoadLevel("Scene1");
	}
	
	if (GUI.Button(new Rect(Screen.width / 2 - (buttonWidth / 2) + buttonWidth -30,(2.8 * Screen.height / 3) - (buttonHeight / 2),buttonWidth,buttonHeight),"Back to menu"))
	{
		// Reload the level
		Application.LoadLevel("Menu");
	}
}

function get_summary_text(){
	var my_summary_text : TextMesh;
	my_summary_text = GameObject.FindWithTag("Summary").GetComponent(TextMesh);
	return my_summary_text;
}

function Start(){
	var summary_text : TextMesh = get_summary_text();
	summary_text.text = "Hello";
}