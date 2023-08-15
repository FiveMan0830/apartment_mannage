function text2html(text) {
	let t = document.createElement('template');
	t.innerHTML = text;
	return t.content.firstChild;
}