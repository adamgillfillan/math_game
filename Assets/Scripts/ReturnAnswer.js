#pragma strict

function get_math_problem_answer() {
	var math_answer_object : GameObject;
	var math_answer : int;
	var math_answer_object_text : String;
	
	math_answer_object_text = math_answer_object.GetComponent(TextMesh).text;
	var split : String[] = math_answer_object_text.Split("+"[0]);
	//var value1 : int = parseInt(split[0]);
	//var value2 : int = parseInt(split[1]);
	math_answer = parseInt(split[0]) + parseInt(split[1]); //+ value2;// + parseInt(split[1]);
	Debug.Log("Math answer: " + math_answer); //+ value2;// + parseInt(split[1]);
	return math_answer;

}