#pragma strict

function return_text(){
	var my_text : String = GetComponent(TextMesh).text;
	return my_text;
	//GetComponent(TextMesh).text = "Hello";
}