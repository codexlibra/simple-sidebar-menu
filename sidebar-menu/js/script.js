
// toggle dropdown menu and submenu
var node_list = document.querySelectorAll(".sidebar-link-dropdown");

/*console.log(node_list);

console.log(node_list[0]);*/

for (let node = 0; node < node_list.length; node++) {
	node_list[node].addEventListener("click", function () {
		//console.log("click en nodo: " + node);

		// obtiene el padre al que pertenece el elemento para agregarle la clase toggle y posteriormente poder realizar las funciones
		parent_element = node_list[node].parentElement;
		//console.log(parent_element.classList.add("parent"));

		if (node == 0) {
			parent_element.classList.toggle("toggle");
			//console.log(parent_element);
		}

		if (node == 1) {
			parent_element.classList.toggle("submenu-toggle");
			//console.log(parent_element);
		}
	});
}

// toggle sidebar
var toggler_icon = document.querySelector(".toggler-icon");
var sidebar = document.querySelector(".sidebar-list");
var overlay = document.querySelector(".overlay");

toggler_icon.addEventListener("click", function () {
	sidebar.classList.toggle("toggle");
});

overlay.addEventListener("click", function () {
	sidebar.classList.remove("toggle");
});