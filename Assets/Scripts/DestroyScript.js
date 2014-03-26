#pragma strict


function get_answer(){
	var my_answer : int;
	my_answer = GameObject.FindWithTag("GameManager").GetComponent(GetAnswer).get_answer();
	return my_answer;
}

//function get_mouse_posn(){
//	var mouse_posn : RayRaycastHit2D = GameObject.FindWithTag("GameManager").GetComponent(GetMousePosn).get_mouse_posn();
//	return mouse_posn
//
//}

function remove_objects_off_screen(){
	var threshold_y : int = -12;
    var y_posn : float = transform.position.y;
    if (threshold_y > y_posn){
    	Destroy(this.gameObject);
    }
}
function Update () {
	if (Input.GetMouseButtonDown(0))
     {
        var answer_int : int = get_answer();
        var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
        if(hitm.collider != null)
       {
       	 var splitter : String[] = hitm.collider.gameObject.GetComponentInChildren(TextMesh).text.Split("+"[0]);
       	 var value1 : int = parseInt(splitter[0]);
       	 var value2 : int = parseInt(splitter[1]);
       	 var my_answer : int = value1 + value2;
       	 
         if(answer_int == my_answer){
         	Destroy (hitm.collider.gameObject);
         }
       }
    }
    remove_objects_off_screen();
}