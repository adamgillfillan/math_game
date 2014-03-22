#pragma strict

function Start () {
	var randomnumber1 = Random.Range(1, 10);
	var randomnumber2 = Random.Range(1, 10);


	GetComponent(TextMesh).text = randomnumber1 + " + " + randomnumber2;
}