/*!
 * Simple Sidebar Menu  v1.0.0
 * Copyright 2022 Codex Libra
 * Licensed under MIT (https://github.com/codexlibra/simple-sidebar-menu/blob/master/README.md)
 */
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

// toggle dropdown menu and submenu
var node_list = document.querySelectorAll(".sidebar-link-dropdown");

for (let node = 0; node < node_list.length; node++) {
	node_list[node].addEventListener("click", function () {
		parent_element = node_list[node].parentElement;
		if (node == 0) {
			// node 0 = dropdown menu
			parent_element.classList.toggle("toggle");
		}
		if (node == 1) {
			// node 1 = dropdown submenu
			parent_element.classList.toggle("submenu-toggle");
		}
	});
}

// hide sidebar when clicking bx-x icon
var x_icon = document.querySelector(".bx-x");
x_icon.addEventListener("click", function () {
	sidebar.classList.remove("toggle");
});