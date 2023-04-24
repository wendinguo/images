var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mario = {
	x: 50,
	y: canvas.height - 100,
	width: 50,
	height: 50,
	speed: 5,
	jump: false,
	jumpHeight: 100,
	jumpSpeed: 8,
	jumpCount: 0
};
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowLeft") {
		mario.speed = -5; // 向左移动
	} else if (event.key === "ArrowRight") {
		mario.speed = 5; // 向右移动
	}
});

document.addEventListener("keyup", function(event) {
	if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
		mario.speed = 0; // 停止移动
	}
});
setInterval(function() {
	if (mario.jump) {
		if (mario.jumpCount < mario.jumpHeight) { // 判断是否达到最高跳跃点
			mario.y -= mario.jumpSpeed; // 上升
			mario.jumpCount += mario.jumpSpeed;
		} else if (mario.jumpCount >= mario.jumpHeight && mario.jumpCount < mario.jumpHeight * 2) {
			mario.y += mario.jumpSpeed; // 下降
			mario.jumpCount += mario.jumpSpeed;
		} else {
			mario.jump = false; // 重置跳跃状态
			mario.jumpCount = 0;
		}
	}

	mario.x += mario.speed; // 水平移动

	// 绘制马里奥
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.rect(mario.x, mario.y, mario.width, mario.height);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();

	requestAnimationFrame(draw);
}, 10);

function draw() {
	// 绘制背景
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}