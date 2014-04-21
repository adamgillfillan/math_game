#pragma strict

// Used to handle the student's lives in the game
// If a student clicks an enemy whose problem does not match the answer, -1 life

function get_answer(){
	var my_answer : int;
	my_answer = GameObject.FindWithTag("GameManager").GetComponent(GetAnswer).get_answer();
	return my_answer;
}
var incorrect_answer_list = new Array();
function Start () {
	GetComponent(TextMesh).text = "Lives: " + 3;
	Invoke("initialize", 1);
}
function initialize(){
	var answer_int : int = get_answer();
	incorrect_answer_list.push(answer_int);
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

// Ends the game if called
function game_over(){
	transform.parent.gameObject.AddComponent("GameOverScript");
	//Application.LoadLevel("Summary"); 
}

// Save the incorrect answer choice for the student model
function save_incorrect_answer(incorrect_answer_list : Array, math_answer : String){
	incorrect_answer_list.push(math_answer);
	Debug.Log(incorrect_answer_list);
	//return incorrect_answer_list;
}

function Update () {
	var current_lives = get_current_lives();
	if (Input.GetMouseButtonDown(0))
     {
     	var answer_int : int = get_answer();
        var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
        if(hitm.collider != null)
        {
        // Must parse the text, for example "4 + 5" separate to int values and remove the "+"
         var my_text_answer : String = hitm.collider.gameObject.GetComponentInChildren(TextMesh).text;
       	 var splitter : String[] = hitm.collider.gameObject.GetComponentInChildren(TextMesh).text.Split("+"[0]);
       	 var value1 : int = parseInt(splitter[0]);
       	 var value2 : int = parseInt(splitter[1]);
       	 var my_answer : int = value1 + value2;
       	 
       	 // Remove the life
         if(answer_int != my_answer){
         	//Debug.Log("Answer: " + answer_int);
         	//Debug.Log("Problem value: " + my_answer);
         	remove_life();
         	save_incorrect_answer(incorrect_answer_list, my_text_answer);
         }
        }
    }
    if (current_lives < 1){
    	//my_list = save_incorrect_answer(incorrect_answer_list, 0);
    	game_over();
    }
    
}
