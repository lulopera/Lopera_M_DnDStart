(() => {
	// set up the puzzle pieces and boards
	
	const puzzleSelectors = document.querySelectorAll ("#buttonHolder img"),
		  dropZoneContainer = document.querySelector(".puzzle-board");

    function changeBGImage() {

    	let currentImage = this.dataset.imageref;

    	dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;
		
    }

    puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

    changeBGImage.call(puzzleSelectors[0]);
})();
