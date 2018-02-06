	var data = {
				'a': {color:'ff3333', sound:'bubbles'},
				'b': {color:'ff6633', sound:'clay'},
				'c': {color:'ff9933', sound:'confetti'},
				'd': {color:'ffcc33', sound:'corona'},
				'e': {color:'ffff33', sound:'dotted-spiral'},
				'f': {color:'ccff33', sound:'flash-1'},
				'g': {color:'99ff33', sound:'flash-2'},
				'h': {color:'66ff33', sound:'flash-3'},
				'i': {color:'33ff33', sound:'glimmer'},
				'j': {color:'33ff66', sound:'moon'},
				'k': {color:'33ff99', sound:'pinwheel'},
				'l': {color:'33ffcc', sound:'piston-1'},
				'm': {color:'33ffff', sound:'piston-2'},
				'n': {color:'33ccff', sound:'piston-3'},
				'o': {color:'3399ff', sound:'prism-1'},
				'p': {color:'3366ff', sound:'prism-2'},
				'q': {color:'3333ff', sound:'prism-3'},
				'r': {color:'6633ff', sound:'splits'},
				's': {color:'9933ff', sound:'squiggle'},
				't': {color:'cc33ff', sound:'strike'},
				'u': {color:'ff33ff', sound:'suspension'},
				'v': {color:'ff33cc', sound:'timer'},
				'w': {color:'ff3399', sound:'ufo'},
				'x': {color:'ff3366', sound:'veil'},
				'y': {color:'ff3333', sound:'wipe'},
				'z': {color:'f9f9f9', sound:'zig-zag'}
			}

	var circles = [];

	var text = new PointText(new Point(view.center.x-130, view.center.y));
	text.fillColor = 'white';
	text.fontSize = '25';
	text.content = 'Touchez votre clavier ...';

	function onKeyUp(event) {
		text.remove();
		var sound = data[event.key].sound;
		var color = data[event.key].color;

		var newPoint = new Point(view.size.width, view.size.height) * Point.random();
		var newCircle = new Path.Circle(newPoint, 500);
		newCircle.fillColor = '#' + color;
		circles.push(newCircle);

		var sound = new Howl({
		  src: ['sounds/' + sound + '.mp3']
		});

		sound.play();

	}

	function onFrame(event) {

		for(var i = 0; i < circles.length; i++) {
			circles[i].scale(0.9);
		}
	}