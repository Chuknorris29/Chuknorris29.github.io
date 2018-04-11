var currentIndex =0, items = $("section.products div.productContainer div"), itemAmt = items.length;

function cycleItems() {
	var item = $("section.products div.productContainer div").eq(currentIndex);
	items.hide();
	item.css('display', "block");
}


$("#next").click(function() {
	currentIndex +=1;
	if ( currentIndex > itemAmt - 1) {
		currentIndex = 0;
	}
	cycleItems();
});

$("#previous").click(function() {
	currentIndex -=1;
	if (currentIndex < 0) {
		currentIndex = itemAmt - 1;
	}
	cycleItems();
});
