
var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6",
	primary : "#3a62a3",
	secondary : "#64a33a"
}
var threadStyle =
[
	"#000000",
	"#3a62a3",
	"#64a33a",
	"#ce0a38"

];
var threadId = 1;

function main()
{
	// Setup
	setup();

	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Queue and Thread
	var display = new Display( virtualgrid );
	var thread = new Thread( virtualgrid );


	/*

		Queue stores threads.
		Thread is a data object for a particular thread.
		Display displays the output of thread.

	*/

	// Display
	var background = new Background( virtualgrid );	
	var cursor = new Cursor( virtualgrid );
	var drawing = new createjs.Container();

	// Input
	var input = new Input( virtualgrid, drawing, background, display, thread);

	// Add Children
	container.addChild( drawing );	
	drawing.addChild( background, display, thread, cursor );	
}

/*

	TODO
	- fix background being off
	- fix colors and line rendering
	- add additional colors
	- animate thread removal
	- try random thread weighting to make it more realistic
	- add insert/exit points
	- add thread 'drop shadow'
	- tweak colors
	- show backing threads
	- cut thread
	- design initial dealyo
	- load initial dealyo
	- save
	- load	

*/
