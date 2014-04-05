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
//var coordinates = Vector2(.4, .2);
//PlayerPrefsX.SetVector2 ("Coords", coordinates);
//Debug.Log(PlayerPrefsX.GetVector2("Coords"));

function get_incorrect_summary_text(){
	var my_summary_text : TextMesh;
	my_summary_text = GameObject.FindWithTag("SummaryIncorrect").GetComponent(TextMesh);
	return my_summary_text;
}
function get_incorrect_summary_list(){
	var my_object : Component;
	my_object = GameObject.FindWithTag("Lives").GetComponent("LivesManager");
	return my_object.incorrect_answer_list;
}
//var my_incorrect_answer_list2 : Array;
//function save_incorrect_list(){
//	my_incorrect_answer_list2 = get_incorrect_summary_list();
//	//var list_length = my_incorrect_answer_list.length();
//	var temp : String = "";
//	for (var i=0; i < my_incorrect_answer_list2.length;i++){
//		if(i!=my_incorrect_answer_list2.length-1){
//		
//			temp+=my_incorrect_answer_list2[i].ToString()+"*";
//    	}
//    	else{
//    		temp+=my_incorrect_answer_list2[i].ToString();
//    	}
//	}
//	PlayerPrefs.SetString("IncorrectAnswers", temp);
//	Debug.Log(my_incorrect_answer_list2);
//	//PlayerPrefsX.SetStringArray("IncorrectAnswers", my_incorrect_answer_list);
//}
//function load_incorrect_answer_list(){
//	//var my_script : GameOverScript;
//	var temp : String = PlayerPrefs.GetString("IncorrectAnswers");
//	var tempArray = temp.Split("*".ToCharArray());
//	var newArray : Array;
//	//var tempArray : String[] = temp.Split("*".ToCharArray());
//	//Debug.Log(tempArray);
//	//return tempArray;
//	//Debug.Log(temp);
////	return temp;
//	
// 
//	for (var i=0; i < temp.length;i++){
//	   newArray.Add(tempArray[i]);
//	}
//	return newArray;
////	return my_script.my_incorrect_answer_list2;
//}
function create_incorrect_summary_text(){
	var my_incorrect_answer_list : Array = get_incorrect_summary_list();
	var final_text : String;
	
	final_text = "Incorrect Answers for: " + my_incorrect_answer_list[0].ToString();
	// 82 + 52 + 52 + 5
	for (var i=1; i < my_incorrect_answer_list.length;i++){
		final_text += ("\n" + my_incorrect_answer_list[i]);
	}
	
	return final_text;
}

function get_correct_summary_text(){
	var my_summary_text : TextMesh;
	my_summary_text = GameObject.FindWithTag("SummaryCorrect").GetComponent(TextMesh);
	return my_summary_text;
}

function get_correct_summary_list(){
	var my_object : Component;
	my_object = GameObject.FindWithTag("Score").GetComponent("ScoreManager");
	return my_object.correct_answer_list;
}

function create_correct_summary_text(){
	var my_correct_answer_list : Array = get_correct_summary_list();
	var final_text : String;
	
	final_text = "Correct Answers for: " + my_correct_answer_list[0].ToString();
	// 82 + 52 + 52 + 5
	for (var i=1; i < my_correct_answer_list.length;i++){
		final_text += ("\n" + my_correct_answer_list[i]);
	}
	
	return final_text;
}

function Start(){
	var incorrect_summary_text : TextMesh = get_incorrect_summary_text();
	var incorrect_final_text : String = create_incorrect_summary_text();
	incorrect_summary_text.text = incorrect_final_text;
	
	
	var correct_summary_text : TextMesh = get_correct_summary_text();
	var correct_final_text : String = create_correct_summary_text();
	correct_summary_text.text = correct_final_text;
	
	
	//save_incorrect_list();
	//load_incorrect_answer_list();
}
