
	function showContent () {
		let contentTitle = document.querySelectorAll('.faq__right-block .faq__right-block-title');

		for (let i = 0; i < contentTitle.length; i++){
			contentTitle[i].addEventListener('click', function(e){
				if (e.target.classList.contains('active')) {
					this.classList.remove('active');
				} else {
					this.classList.add('active');
				}	
			}	
			)}
		}
		showContent();

