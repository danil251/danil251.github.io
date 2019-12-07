
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors)	{
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})

}


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

