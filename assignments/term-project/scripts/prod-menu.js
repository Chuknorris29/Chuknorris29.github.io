var currentIndex =0, products = $("section.products div.productContainer div"), productsAmount = products.length;

function cycleItems() {
	var product = $("section.products div.productContainer div").eq(currentIndex);
	products.hide();
	product.css('display', "block");
}


$("#next").click(function() {
	currentIndex +=1;
	if ( currentIndex > productsAmount - 1) {
		currentIndex = 0;
	}
	cycleItems();
});

$("#previous").click(function() {
	currentIndex -=1;
	if (currentIndex < 0) {
		currentIndex = productsAmount - 1;
	}
	cycleItems();
});
