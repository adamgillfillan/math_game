#pragma strict

var enemy_fly : GameObject;

//function load_incorrect_answer_list(){
//	var my_script : GameOverScript;
//	var temp : String = PlayerPrefs.GetString("InventoryItems");
//	var tempArray : String[] = temp.Split("*".ToCharArray());
// 
//	for (var i=1; i < tempArray.length;i++){
//	   my_script.my_incorrect_answer_list2[i]=System.Int32.Parse(tempArray[i]);
//	}
//	Debug.Log(my_script.my_incorrect_answer_list2);
//}

//function Start() {

	//Invoke("load_incorrect_answer_list", .5);

//}

function spawn_enemy () {
	var x : float = Random.Range(-8.8, 8.8);
	var y : float = 13.0;
	Instantiate(enemy_fly, new Vector3(x, y, 0), Quaternion.identity);
	Debug.Log("ive been called");
}


function get_score(){
	var my_score : int;
	my_score = GameObject.FindWithTag("Score").GetComponent(ScoreManager).get_current_score();
	return my_score;
}

function update_interval () {
	var my_score : int = get_score();
	var my_time : float;
	//if (my_score > 0 && my_score <= 3){
	if (my_score > 40){
		my_time = .15;
		InvokeRepeating("spawn_enemy", 0, my_time);
		Debug.Log("My time should be 0.02: " + my_time);
	}
	if (my_score > 20){
		my_time = .2;
		InvokeRepeating("spawn_enemy", 0, my_time);
		Debug.Log("My time should be 0.01: " + my_time);
	}
	if (my_score > 5){
		my_time = .3;
		InvokeRepeating("spawn_enemy", 0, my_time);
		Debug.Log("My time should be .1: " + my_time);
	}
	if (my_score >= 0){
		my_time = .4;
		InvokeRepeating("spawn_enemy", 0, my_time);
		Debug.Log("My time should be .5: " + my_time);
	}
}

//Invoke("update_interval", 0.5);

var begin : boolean = false;
var canceled : boolean = false;
var canceled2 : boolean = false;
var canceled3 : boolean = false;

function Update(){
	var my_score : int = get_score();
	if (begin == false){
		begin = true;
		Invoke("update_interval", 0.5);
	}
	if (my_score == 6){
		if (canceled == false){
			canceled = true;
			Debug.Log("I've been canceled1");
			CancelInvoke("spawn_enemy");
			Invoke("update_interval", 0.5);
		}
	}
	if (my_score == 21){
		if (canceled2 == false){
			canceled2 = true;
			Debug.Log("I've been canceled2");
			CancelInvoke("spawn_enemy");
			Invoke("update_interval", 0.5);
		}
	}
	if (my_score == 41){
		if (canceled3 == false){
			canceled3 = true;
			Debug.Log("I've been canceled3");
			CancelInvoke("spawn_enemy");
			Invoke("update_interval", 0.5);
		}
	}
}