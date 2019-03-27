// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
	// setup the counter
	let counter = 0;
	// select buttons
	const btn = document.querySelectorAll(".btn");

	btn.forEach(function(btn) {
		btn.addEventListener("click", function(event){
			// get event target
			let value = event.target;
			console.log(value);
			// for the clicking the button on the left
			if(value.classList.contains("btn-left")) {
				counter--;
				if(counter < 0) {
					counter = pictures.length - 1;
				}
				console.log(counter);
				document.querySelector(
					".img-container"
					).style.backgroundImage = `url(img/${pictures[counter]}.jpeg)`;
			}
			// for clicking the button on the right
			if(value.classList.contains("btn-right")) {
				counter++;
				if(counter > pictures.length - 1) {
					counter = 0;
				}
				console.log(counter);
				document.querySelector(".img-container").style.backgroundImage = `url(img/${pictures[counter]}.jpeg)`;
			}
		});
	});	

})();
