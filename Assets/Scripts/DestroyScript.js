﻿#pragma strict

var answer_int : int;
answer_int = get_answer();

function get_answer(){
	var answer_object : GameObject;
	var my_answer : int;
	var answer_object_text : String;
	answer_object = GameObject.FindWithTag("Answer");
	answer_object_text = answer_object.GetComponent(TextMesh).text;
	
	my_answer = parseInt(answer_object_text);
	return my_answer;
}

function updateScore (){
	var score = GameObject.FindWithTag("Score").GetComponent(ScoreManager);
	var score_modifier: int = 1;
	score.add_score(score_modifier);
}
function Update () {
	if (Input.GetMouseButtonDown(0))
     {
       //Debug.Log(Camera.main.ScreenPointToRay(Input.mousePosition));
       //make sure you have a camera in the scene tagged as 'MainCamera'
       var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
       if(hitm.collider != null)
       
       {
       	 var splitter : String[] = hitm.collider.gameObject.GetComponentInChildren(TextMesh).text.Split("+"[0]);
       	 var value1 : int = parseInt(splitter[0]);
       	 var value2 : int = parseInt(splitter[1]);
       	 var my_answer : int = value1 + value2;
       	 
         if(answer_int == my_answer){
         	Debug.Log("Answer: " + answer_int);
         	Debug.Log("Problem value: " + my_answer);
         	Destroy (hitm.collider.gameObject);
         	updateScore();
         }
       }
    }
    var y : int = -12;
    var y_posn : float = transform.position.y;
    if (y > y_posn){
    	Destroy(this.gameObject);
    }
}



