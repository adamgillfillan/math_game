#pragma strict

var enemy_fly : GameObject;

function Start () {
	InvokeRepeating("spawn_enemy", 1, 0.2);
}

function spawn_enemy () {
	var x : float = Random.Range(-8.8, 8.8);
	var y : float = 13.0;
	Instantiate(enemy_fly, new Vector3(x, y, 0), Quaternion.identity);

}