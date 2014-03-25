#pragma strict

function Start () {
	var randomnumber1 = Random.Range(2, 10);

	GetComponent(TextMesh).text = randomnumber1.ToString();
}