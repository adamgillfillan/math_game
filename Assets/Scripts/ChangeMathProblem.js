#pragma strict

function get_answer(){
	var my_answer : int;
	my_answer = GameObject.FindWithTag("GameManager").GetComponent(GetAnswer).get_answer();
	return my_answer;
}

//function load_incorrect_answer_list(){
//	var my_script : GameOverScript;
//	var temp : String = PlayerPrefs.GetString("IncorrectAnswers");
//	var tempArray : String[] = temp.Split("*".ToCharArray());
// 
//	for (var i=1; i < tempArray.length;i++){
//	   my_script.my_incorrect_answer_list2[i]=System.Int32.Parse(tempArray[i]);
//	}
//	return my_script.my_incorrect_answer_list2;
//}

function Start () {
	var answer_int : int = get_answer();

	//Generate random numbers for math problem
	var randomnumber1 = Random.Range(1, 10);
	var randomnumber2 = Random.Range(1, 10);
	var sum = randomnumber1 + randomnumber2;
	
	//Math problems that are correct should appear more often than those that are incorrect.
	var my_rand = Random.Range(0.0, 1.0);
	var threshold : float = 0.85;
	//Debug.Log(my_rand);

	GetComponent(TextMesh).text = randomnumber1 + " + " + randomnumber2;
	if (answer_int != sum)
	{
		if (my_rand < threshold){
			Destroy(this.transform.parent.gameObject);
		}
	}
	//Debug.Log(load_incorrect_answer_list());
	//Make function to handle 1, 2, 3
}