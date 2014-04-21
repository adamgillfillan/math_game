#pragma strict

// Script used to spawn enemies.
// Includes difficulty scaffolding. As the score increases, so to does the rate of enemies spawning and their falling speed.

var enemy_fly : GameObject;


// Function to instantiate the enemy
function spawn_enemy () {
	var x : float = Random.Range(-8.8, 8.8);
	var y : float = 13.0;
	Instantiate(enemy_fly, new Vector3(x, y, 0), Quaternion.identity);
	//Debug.Log("ive been called");
}


function get_score(){
	var my_score : int;
	my_score = GameObject.FindWithTag("Score").GetComponent(ScoreManager).get_current_score();
	return my_score;
}


// Depending upon the score of the game, spawn enemies at differing rates as well as increase their falling speed
function update_interval () {
	var my_score : int = get_score();
	var my_time : float;
	if (my_score > 19){
		my_time = .24;
		InvokeRepeating("spawn_enemy", 0, my_time);
		//Debug.Log("My time should be 0.24: " + my_time);
	}
	if (my_score > 9){
		my_time = .28;
		InvokeRepeating("spawn_enemy", 0, my_time);
		//Debug.Log("My time should be 0.28: " + my_time);
	}
	if (my_score > 4){
		my_time = .3;
		InvokeRepeating("spawn_enemy", 0, my_time);
		//Debug.Log("My time should be .3: " + my_time);
	}
	if (my_score >= 0){
		my_time = .4;
		InvokeRepeating("spawn_enemy", 0, my_time);
		//Debug.Log("My time should be .4: " + my_time);
	}
}

var begin : boolean = false;
var canceled : boolean = false;
var canceled2 : boolean = false;
var canceled3 : boolean = false;

// Needed to cancel the previous invoke repeating functions
function Update(){
	var my_score : int = get_score();
	if (begin == false){
		begin = true;
		Invoke("update_interval", 0.5);
	}
	if (my_score == 5){
		if (canceled == false){
			canceled = true;
			//Debug.Log("I've been canceled1");
			CancelInvoke("spawn_enemy");
			Invoke("update_interval", 0.5);
		}
	}
	if (my_score == 10){
		if (canceled2 == false){
			canceled2 = true;
			//Debug.Log("I've been canceled2");
			CancelInvoke("spawn_enemy");
			Invoke("update_interval", 0.5);
		}
	}
	if (my_score == 20){
		if (canceled3 == false){
			canceled3 = true;
			//Debug.Log("I've been canceled3");
			CancelInvoke("spawn_enemy");
			Invoke("update_interval", 0.5);
		}
	}
}