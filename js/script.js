import put from "./modules/play.js";

const d = document,
	$audio = d.querySelector("audio"),
	$modal = d.getElementById("modal"),
	$burger = d.getElementById("burger");
console.log($modal);
d.addEventListener("DOMContentLoaded", (e) => {
	put($audio);
});

d.addEventListener("click", (e) => {
	if (e.target.matches(".box-burger") || e.target.matches(".box-burger *")) {
		$modal.classList.toggle("is-active");
	}
	if (e.target.matches(".modal a")) {
		$modal.classList.toggle("is-active");
	}
});
