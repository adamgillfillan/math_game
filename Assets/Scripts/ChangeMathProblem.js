#pragma strict
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


function Start () {
	//Generate random numbers for math problem
	var randomnumber1 = Random.Range(1, 10);
	var randomnumber2 = Random.Range(1, 10);
	var sum = randomnumber1 + randomnumber2;
	
	//Math problems that are correct should appear more often than those that are incorrect.
	var my_rand = Random.Range(0.0, 1.0);
	var threshold : float = 0.8;
	//Debug.Log(my_rand);

	GetComponent(TextMesh).text = randomnumber1 + " + " + randomnumber2;
	if (answer_int != sum)
	{
		if (my_rand < threshold){
			Destroy(this.transform.parent.gameObject);
		}
	}
}