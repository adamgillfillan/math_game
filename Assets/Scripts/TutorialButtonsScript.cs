using UnityEngine;

/// <summary>
/// Title screen script
/// </summary>
public class TutorialButtonsScript : MonoBehaviour
{
	
	private GUISkin skin;
	
	void Start()
	{
		skin = Resources.Load ("GUISkin") as GUISkin;
	}
	void OnGUI()
	{
		const int buttonWidth = 84;
		const int buttonHeight = 60;
		
		GUI.skin = skin;
		// Draw a button to start the game
		if (
			GUI.Button(
			// Center in X, 2/3 of the height in Y
			new Rect(
			Screen.width / 2 - (buttonWidth / 2),
			(2 * Screen.height / 4) - (buttonHeight / 2),
			buttonWidth,
			buttonHeight
			),
			"Next!"
			)
			)
		{
			// On Click, load the first level.
			// "Stage1" is the name of the first scene we created.
			Application.LoadLevel("Tutorial1");
		}
	}
}