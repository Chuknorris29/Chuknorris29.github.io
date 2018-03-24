$(function(){
	// jQuery Code goes here
	var box1 = $('.box1');
	var box2 = $('.box2');

	function LeftToRight() {
		if(box2.html() == ""){
			// Get content from box1 and put it in box2
			//Empty out box2
			box2.html( box1.html());
			box1.html( "" );
		}
	}
	$('#LeftToRight').click(LeftToRight);

	function RightToLeft() {
		if(box1.html() == ""){
			// Get content from box2 and put it in box1
			// Empty out box2
			box1.html( box2.html() );
			box2.html( "" );
		}
	}

	$("#RightToLeft").click( RightToLeft );
})
