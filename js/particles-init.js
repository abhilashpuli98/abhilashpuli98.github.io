document.addEventListener('DOMContentLoaded', function() {
	particleground(document.getElementById('particles'), {
		dotColor: '#d3d3d3',
		lineColor: '#d3d3d3'
	});
	var intro = document.getElementById('intro');
	intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = function() {
		return false;
	};
} else {
	document.onmouseup = function(e) {
		if (e != null && e.type == "mouseup") {
			if (e.which == 2 || e.which == 3) {
				return false;
			}
		}
	};
}
document.oncontextmenu = function() {
	return false;
};
