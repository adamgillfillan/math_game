#pragma strict
// Script to change the answer of the game. Chooses answers based on a weighted probability dependent upon the student's progress.
// If a student has completed easier answers like "2" or "3", for example, those answers are not likely to come up again.
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
}

function Start () {
	// Create answer randomly
	var randomnumber1 = Random.Range(2, 10);
	
	var threshold_23 : float = 0.80;
	var threshold_45 : float = 0.60;
	var randomnumber2 = Random.Range(0.0, 1.0);
	var randomnumber3 = Random.Range(6, 10);
	Debug.Log("Number 1: " + randomnumber1);
	Debug.Log("Number 2: " + randomnumber2);
	Debug.Log("Number 3: " + randomnumber3);
	
	load_saved_variable();
	
	// Select only the answer that we want, based on the student model.
	if (randomnumber1 == 2){
		if(level_2 != 0){
			Debug.Log("2 works!");
			if (randomnumber2 > threshold_23){
				Debug.Log("Random float" + randomnumber2);
				GetComponent(TextMesh).text = randomnumber1.ToString();
			}
			else{
				Debug.Log("I am less than my threshold!");
				GetComponent(TextMesh).text = randomnumber3.ToString();
			}
		}
		else{
			GetComponent(TextMesh).text = randomnumber1.ToString();
		}
	}
	if (randomnumber1 == 3){
		if(level_3 != 0){
			Debug.Log("3 works!");
			if (randomnumber2 > threshold_23){
				Debug.Log("Random float" + randomnumber2);
				GetComponent(TextMesh).text = randomnumber1.ToString();
			}
			else{
				Debug.Log("I am less than my threshold!");
				GetComponent(TextMesh).text = randomnumber3.ToString();
			}
		}
		else{
			GetComponent(TextMesh).text = randomnumber1.ToString();
		}
	}
	if (randomnumber1 == 4){
		if(level_4 != 0){
			Debug.Log("4 works!");
			if (randomnumber2 > threshold_45){
				Debug.Log("Random float" + randomnumber2);
				GetComponent(TextMesh).text = randomnumber1.ToString();
			}
			else{
				Debug.Log("I am less than my threshold!");
				GetComponent(TextMesh).text = randomnumber3.ToString();
			}
		}
		else{
			GetComponent(TextMesh).text = randomnumber1.ToString();
		}
	}
	if (randomnumber1 == 5){
		if(level_5 != 0){
			Debug.Log("5 works!");
			if (randomnumber2 > threshold_45){
				Debug.Log("Random float" + randomnumber2);
				GetComponent(TextMesh).text = randomnumber1.ToString();
			}
			else{
				Debug.Log("I am less than my threshold!");
				GetComponent(TextMesh).text = randomnumber3.ToString();
			}
		}
		else{
			GetComponent(TextMesh).text = randomnumber1.ToString();
		}
	}
	if (randomnumber1 == 6){
		GetComponent(TextMesh).text = randomnumber1.ToString();
	}
	if (randomnumber1 == 7){
		GetComponent(TextMesh).text = randomnumber1.ToString();
	}
	if (randomnumber1 == 8){
		GetComponent(TextMesh).text = randomnumber1.ToString();
	}
	if (randomnumber1 == 9){
		GetComponent(TextMesh).text = randomnumber1.ToString();
	}
}