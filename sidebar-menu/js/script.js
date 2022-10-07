var node_list = document.querySelectorAll(".sidebar-link-dropdown");

/*console.log(node_list);

console.log(node_list[0]);*/

for (let node = 0; node < node_list.length; node++) {
	node_list[node].addEventListener("click", function () {
		console.log("click en nodo: " + node);

		node_list[node].classList.toggle("toggle");
		
		let toggle_status = node_list[node].classList[1];
		console.log(toggle_status);

		// obtiene su hijo icono
		//console.log(node_list[node].children);

		if (toggle_status == "toggle") {
			// cuando el elemento contiene la clase toggle el icono rota 180° y muestra el dropdown menu

			// rota el icono
			console.log("rota icono");

			// muestra dropdown menu
			console.log("muestra dropdown menu");
		} else {
			// rota el icono en su pocición original
			console.log("rota icono en su posición original");

			// oculta dropdown menu
			console.log("oculta dropdown menu");
		}
	});
}