enchant();

var core;

window.onload = function() {
	core = new Core(320, 320);
	core.fps = 24;	// ここの値を24からたとえば2へ変更してみることで違いがわかります。
	core.touched = false;
	core.preload([
		'images/chara1.png'
	]);

	core.onload = function() {
		core.currentScene.backgroundColor = 'rgb(239, 228, 202)';
		
		// 歩くクマ１の表示
		var bear = new Sprite(32, 32);
		bear.image = core.assets['images/chara1.png'];
		bear.x = 0;
		bear.y = 32;
		bear.on('enterframe', function(e) {
			var walker = e.target;
			walker.x += 4;
			walker.frame = Math.floor(walker.age % 3);
			if (walker.x >= 320) {
				walker.x = 0;
			}
		})
		core.currentScene.addChild(bear);

		var ageCounter = new Label();
		ageCounter.x = 4;
		ageCounter.y = 4;
		ageCounter.text = 'age: ' + bear.age;
		ageCounter.on('enterframe', function(){
			this.text = 'age: ' + bear.age;	// ここで参照しているのはbearのageです。
		});
		core.currentScene.addChild(ageCounter);
		
	};

	core.start();
};
