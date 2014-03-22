#pragma strict

function Update () {
	if (Input.GetMouseButtonDown(0))
     {
       Debug.Log(Camera.main.ScreenPointToRay(Input.mousePosition));
       //make sure you have a camera in the scene tagged as 'MainCamera'
       var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
       if(hitm.collider != null)
       {
           Debug.Log ("Target Position: " + hitm.collider.gameObject.transform.position);
         Destroy (hitm.collider.gameObject);
       }
     }
}