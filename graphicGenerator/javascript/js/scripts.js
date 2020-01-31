/*
 * ===================================================================
 * Script:	drawLEDs2()
 * Purpose:	function to create div for displaying LEDs with
 *					'onclick' event to switch LED on (red) of off (grey)	
 * Author:	Mark Fletcher
 * Date:		21.11.2019
 * 
 * Input:			
 *				- default = 'grey' rgb(51,51,51)
 * 
 * Output:
 * 
 * Notes:
 *
 * ==================================================================
*/
function drawLEDs2() {
	//create LED rows
	for (x=0; x<=4; x++) {
  	//create line break element
  	var childBr = document.createElement("br");
    //create LED columns
  	for (y=0; y<=4; y++) {
    	//create LED id
    	var divId = '('+x+','+y+')';
      //get existing parent div
      var parentDiv = document.getElementById('leds');
      //create child div
      var childDiv = document.createElement("div");
      //add LED id
      childDiv.id = 'led'+divId;
      //add LED class
      childDiv.className = 'ledz';
      //add event listener 'click'
      childDiv.addEventListener('click', ledOnOff.bind(null,event,x,y));
      //append child LEDs to parent div
      parentDiv.appendChild(childDiv);
    }
    //append br to end of each LED row
    parentDiv.appendChild(childBr);
	}
}

/*
 * ===================================================================
 * Script:	drawLEDs()
 * Purpose:	function to create div for displaying LEDs with
 *					'onclick' event to switch LED on (red) of off (grey)
 * Author:	Mark Fletcher
 * Date:		21.11.2019
 * 
 * Input:			
 *				- default = 'grey' rgb(51,51,51)
 * 
 * Output:
 * 
 * Notes:
 *
 * ==================================================================
*/
function drawLEDs() {
	//create LED rows
	for (x=0; x<=4; x++) {
  	//create LED columns
  	for (y=0; y<=4; y++) {
    	//create LED id
    	var divId = '('+x+','+y+')';
      //create LED div
    	document.write('<div id="led'+divId+'" class="ledz" onclick="ledOnOff'+divId+'"></div>');
    }
    document.write('<br />');
	}
}

/*
 * ===================================================================
 * Script:	ledOnOff()
 * Purpose:	function to switch LED on (red) or off (grey)
 * Author:	Mark Fletcher
 * Date:		21.11.2019
 * 
 * Input:
 *	event	-
 *	x			- LED row number
 *	y			-	LED column number	
 *				- default = 'grey' rgb(128,128,128)
 * 
 * Output:
 * 
 * Notes:
 *
 * ==================================================================
*/
function ledOnOff(event,x,y) {
	//set brightness to off (0)
	var brightness = 0;
  //set current LED
	var currentLED = document.getElementById('led('+x+','+y+')');
  var LEDTest = window.getComputedStyle(currentLED, null).getPropertyValue('background-color');
  //if LED off then switch on (turn red)
  if (LEDTest == 'rgb(128, 128, 128)') {
  	currentLED.style.backgroundColor = 'red'; //rgb(255, 0, 0)
    //set brightness to max (9)
    brightness = 9;
  }
  //if LED not off then switch off (grey)
  if (LEDTest != 'rgb(128, 128, 128)') {
  	currentLED.style.backgroundColor = 'grey'; //rgb(51, 51, 51)
    //set brightness to off (0)
    brightness = 0;
  } 
}
