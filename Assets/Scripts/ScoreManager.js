#pragma strict


var score : int;
//var score_text_object : GameObject;
//var score_text : String;
//score_text_object = GameObject.FindWithTag("Score");
//score_text = score_text_object.GetComponent(TextMesh).text;

function Start () {
	GetComponent(TextMesh).text = "Score: " + 0;
}

function add_score(value : int){
	score += value;
	GetComponent(TextMesh).text = "Score: " + score;
}