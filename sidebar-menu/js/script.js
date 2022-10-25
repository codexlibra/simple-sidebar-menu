/*!
 * Simple Sidebar Menu  v1.0.1
 * Copyright 2022 Codex Libra
 * Licensed under MIT (https://github.com/codexlibra/simple-sidebar-menu/blob/master/README.md)
 */
let sidebar = document.querySelector(".sidebar-list");
let overlay = document.querySelector(".overlay");
let screen_width = window.innerWidth;
let x_icon = document.querySelector(".bx-x");
let toggler_menu_icon = document.querySelector(".bx-menu.toggler-icon");
let sidebar_links_dropdown = document.querySelectorAll(".sidebar-link-dropdown");
let link_dropdown_menu = sidebar_links_dropdown[0];
let link_dropdown_submenu = sidebar_links_dropdown[1];
let parent_element;
let loop1 = true;
let loop2 = true;

if (screen_width >= 576) {
	toggler_menu_icon.addEventListener('click', showSidebarOverlay);
	overlay.addEventListener('click', hideSidebarOverlay);
	link_dropdown_menu.addEventListener('click', toggleDropdownMenu);
	link_dropdown_submenu.addEventListener('click', toggleDropdownSubmenu);
} else {
	x_icon.addEventListener('click', hideSidebar);
	toggler_menu_icon.addEventListener('click', showSidebar);
	link_dropdown_menu.addEventListener('click', toggleDropdownMenu);
	link_dropdown_submenu.addEventListener('click', toggleDropdownSubmenu);
}

window.addEventListener("resize", resizeListener);

function resizeListener() {
	screen_width = window.innerWidth;
	
	if (screen_width >= 576 && loop1) {
		if (loop1) {
			// When the screen is being resized, the methods are called again, that is, every time the screen changes a pixel, the events found in this conditional are executed again, to avoid this the variables loop1 and loop2 are used so that data is only called once
			loop1 = false;
			loop2 = true;

			// Remove the events that should not be executed here
			x_icon.removeEventListener('click', hideSidebar);
			toggler_menu_icon.removeEventListener('click', showSidebar);

			// Only execute the event for this screen width
			toggler_menu_icon.addEventListener('click', showSidebarOverlay);
			overlay.addEventListener('click', hideSidebarOverlay);
			link_dropdown_menu.addEventListener('click', toggleDropdownMenu);
			link_dropdown_submenu.addEventListener('click', toggleDropdownSubmenu);

			// If when changing the width of the screen the sidebar was visible, it hides it again to prevent it from being hidden because the overlay would not be shown
			let sidebar_status = sidebar.classList[1];
			if (sidebar_status == "toggle") {
				sidebar.classList.remove("toggle");
			}
		}
	}
	if (screen_width < 576 && loop2) {
		if (loop2) {
			// Similar to the previous case, allows procedures belonging to this screen width to be executed only once
			loop2 = false;
			loop1 = true;
			
			// Remove the events that should not be executed here
			overlay.removeEventListener('click', hideSidebarOverlay);
			toggler_menu_icon.removeEventListener('click', showSidebarOverlay);

			// Only execute the event for this screen width
			x_icon.addEventListener('click', hideSidebar);
			toggler_menu_icon.addEventListener('click', showSidebar);
			link_dropdown_menu.addEventListener('click', toggleDropdownMenu);
			link_dropdown_submenu.addEventListener('click', toggleDropdownSubmenu);

			// If the overlay was visible it hides it again
			let overlay_status = overlay.classList[1];
			if (overlay_status == "show") {
				overlay.classList.remove("show");
			}
		}
	}
}

function hideSidebar() {
	// Close sidebar
	sidebar.classList.remove("toggle");
}

function showSidebar() {
	// Show sidebar
	sidebar.classList.toggle("toggle");
}

function showSidebarOverlay() {
	// Show sidebar and overlay
	sidebar.classList.toggle("toggle");
	overlay.classList.add("show");
}

function hideSidebarOverlay() {
	// Close sidebar and overlay by touching the overlay
	sidebar.classList.remove("toggle");
	overlay.classList.remove("show");
}

function toggleDropdownMenu() {
	// Show / hide dropdown menu
	parent_element = link_dropdown_menu.parentElement;
	parent_element.classList.toggle("toggle");
}

function toggleDropdownSubmenu() {
	// Show / hide dropdown submenu
	parent_element = link_dropdown_submenu.parentElement;
	parent_element.classList.toggle("submenu-toggle");
}