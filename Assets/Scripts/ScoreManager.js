#pragma strict

function get_answer(){
	var my_answer : int;
	my_answer = GameObject.FindWithTag("GameManager").GetComponent(GetAnswer).get_answer();
	return my_answer;
}

function Start () {
	GetComponent(TextMesh).text = "Score: " + 0;
}

function get_current_score(){
	var my_object : String = GetComponent(TextMesh).text;
	var split : String[] = my_object.Split(" "[0]);
	
	var current_score : int = parseInt(split[1]); 
	//Debug.Log("Current score: " + current_score);
	return current_score;
}

function add_score(value : int){
	var current_score = get_current_score();
	var score : int = current_score + value;
	GetComponent(TextMesh).text = "Score: " + score;
}

function game_over(){
	transform.parent.gameObject.AddComponent("GameOverScript");

}

function Update () {
	var current_score = get_current_score();
	if (Input.GetMouseButtonDown(0))
     {
        var answer_int : int = get_answer();
        var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
        if(hitm.collider != null)
       {
       	 var splitter : String[] = hitm.collider.gameObject.GetComponentInChildren(TextMesh).text.Split("+"[0]);
       	 var value1 : int = parseInt(splitter[0]);
       	 var value2 : int = parseInt(splitter[1]);
       	 var my_answer : int = value1 + value2;
       	 
         if(answer_int == my_answer){
         	//Debug.Log("Answer: " + answer_int);
         	//Debug.Log("Problem value: " + my_answer);
         	add_score(1);
         }
       }
    }
    if (current_score > 9){
    	game_over();
    }
}