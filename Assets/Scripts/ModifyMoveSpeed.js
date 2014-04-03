//#pragma strict
//
//function get_score(){
//	var my_score : int;
//	my_score = GameObject.FindWithTag("Score").GetComponent(ScoreManager).get_current_score();
//	return my_score;
//}
//
//
//function Update () {
//	var my_score : int = get_score();
//	var my_fly : GameObject;
//	my_fly = GameObject.FindWithTag("fly").GetComponent(MoveScript);
//	if (my_score > 20){
//		my_fly.speed = 5;
//	}
//}