#pragma strict

var level_2 : int;
var level_3 : int;
var level_4 : int;
var level_5 : int;
var level_6 : int;
var level_7 : int;
var level_8 : int;
var level_9 : int;
var level_10 : int;

function load_saved_variable(){
	level_2 = PlayerPrefs.GetInt("2");
	level_3 = PlayerPrefs.GetInt("3");
	level_4 = PlayerPrefs.GetInt("4");
	level_5 = PlayerPrefs.GetInt("5");
	level_6 = PlayerPrefs.GetInt("6");
	level_7 = PlayerPrefs.GetInt("7");
	level_8 = PlayerPrefs.GetInt("8");
	level_9 = PlayerPrefs.GetInt("9");
	level_10 = PlayerPrefs.GetInt("10");
	if(level_2 != 0){
		Debug.Log("2 works!");
	}
	if(level_3 != 0){
		Debug.Log("3 works!");
	}
	if(level_4 != 0){
		Debug.Log("4 works!");
	}
	if(level_5 != 0){
		Debug.Log("5 works!");
	}
	if(level_6 != 0){
		Debug.Log("6 works!");
	}
	if(level_7 != 0){
		Debug.Log("7 works!");
	}
	if(level_8 != 0){
		Debug.Log("8 works!");
	}
	if(level_9 != 0){
		Debug.Log("9 works!");
	}
	if(level_10 != 0){
		Debug.Log("10 works!");
	}
}

function Start () {
	var randomnumber1 = Random.Range(2, 10);

	GetComponent(TextMesh).text = randomnumber1.ToString();
	load_saved_variable();
}