#pragma strict


var speed : Vector2 = Vector2(0 , 2);
var direction : Vector2 = Vector2(0, -1);
var movement : Vector3;

function get_score(){
	var my_score : int;
	my_score = GameObject.FindWithTag("Score").GetComponent(ScoreManager).get_current_score();
	return my_score;
}

function Update () {
	var my_score : int = get_score();
	movement = Vector3(speed.x * direction.x, speed.y * direction.y, 0);
	
	if (my_score > 20){
		movement *= Time.deltaTime+ .02;
		transform.Translate(movement);
	}
	if (my_score > 10){
		movement *= Time.deltaTime + .012;
		transform.Translate(movement);
	}
	if (my_score > 5){
		movement *= Time.deltaTime + .008;
		transform.Translate(movement);
	}
	if (my_score >= 0){
		movement *= Time.deltaTime;
		transform.Translate(movement);
	}
	Debug.Log("My speed is: " + speed);
}