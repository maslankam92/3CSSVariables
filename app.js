const CSSVariables = (function(){
	const inputs = document.querySelectorAll('input');

	function handleUpdate() {
		let sizing = this.dataset.sizing || '';
		document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
	}

	inputs.forEach(input => input.addEventListener('input', handleUpdate));

})();