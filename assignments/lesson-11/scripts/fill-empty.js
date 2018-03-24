$(function(){
	// jQuery Code goes here
	var nameVal = $('input[name="nameVal"]');

	function fillEmpty(){
		if( nameVal.val() == "") {
			nameVal.val('John Doe');
		}
	}
	$('#ReqAQuoteBtn').click(fillEmpty);
})
