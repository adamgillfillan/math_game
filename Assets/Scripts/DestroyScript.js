#pragma strict


var answer_int : int;
answer_int = get_answer();

//var math_answer : int;
//math_answer = get_math_problem_answer();
function get_answer(){
	var answer_object : GameObject;
	var my_answer : int;
	var answer_object_text : String;
	answer_object = GameObject.FindWithTag("Answer");
	answer_object_text = answer_object.GetComponent(TextMesh).text;
	
	my_answer = parseInt(answer_object_text);
	return my_answer;
}

//function get_math_problem_answer() {
//	//var math_answer_object : GameObject;
//	var math_answer : int;
//	var math_answer_object_text : String;
//	
//	var my_object : TextMesh;
//	my_object = gameObject.GetComponentInChildren(TextMesh);
//	math_answer_object_text = my_object.text;
//	var split : String[] = math_answer_object_text.Split("+"[0]);
//	//var value1 : int = parseInt(split[0]);
//	//var value2 : int = parseInt(split[1]);
//	math_answer = parseInt(split[0]) + parseInt(split[1]); //+ value2;// + parseInt(split[1]);
//	//Debug.Log("Math answer: " + math_answer); //+ value2;// + parseInt(split[1]);
//	return math_answer;
//}

//var returnAnswer : ReturnAnswer;
//Debug.Log("ASDF " + other.get_math_problem_answer());
function Update () {
	if (Input.GetMouseButtonDown(0))
     {
       Debug.Log(Camera.main.ScreenPointToRay(Input.mousePosition));
       //make sure you have a camera in the scene tagged as 'MainCamera'
       var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
       if(hitm.collider != null)
       
       {
       	 var splitter : String[] = hitm.collider.gameObject.GetComponentInChildren(TextMesh).text.Split("+"[0]);
       	 var my_answer : int = parseInt(splitter[0]) + parseInt(splitter[1]);
       	 //Debug.Log(hitm.collider.gameObject.GetComponentInChildren(TextMesh).text);//.GetComponent
       	 //Debug.Log("TRUE ANSWER: " + my_answer);
       	 //Debug.Log("Answer: " + get_math_problem_answer());
         if(answer_int == my_answer){
         //Debug.Log ("Target Position: " + hitm.collider.gameObject.transform.position);
         	Destroy (hitm.collider.gameObject);
         }
       }
     }
}



