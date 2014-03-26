#pragma strict

function get_answer(){
	var my_answer : int;
	my_answer = GameObject.FindWithTag("GameManager").GetComponent(GetAnswer).get_answer();
	return my_answer;
}

function Start () {
	GetComponent(TextMesh).text = "Lives: " + 3;
}

function get_current_lives(){
	var my_object : String = GetComponent(TextMesh).text;
	var split : String[] = my_object.Split(" "[0]);
	
	var current_lives : int = parseInt(split[1]); 
	//Debug.Log("Current lives: " + current_lives);
	return current_lives;
}

function remove_life(){
	var current_lives = get_current_lives();
	var lives : int = current_lives - 1;
	GetComponent(TextMesh).text = "Lives: " + lives;
}

function game_over(){
	Application.LoadLevel("Summary"); 
}

function Update () {
	var current_lives = get_current_lives();
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
       	 
         if(answer_int != my_answer){
         	//Debug.Log("Answer: " + answer_int);
         	//Debug.Log("Problem value: " + my_answer);
         	remove_life();
         }
        }
    }
    if (current_lives < 1){
    	game_over();
    }
    
}