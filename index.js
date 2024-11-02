const canvas = document.querySelector('#game');
const context = canvas.getContext("2d");
const fps = 60;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



function draw(el) {
  context.fillStyle = "blue";
  context.fillRect(el.x, el.y, el.width, el.height);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

const obj = new Player(100, window.innerHeight - 100, 50, 100);
const stair = new Stair(300, 800, 150, 20);

function update(obj) {
  //очищаем канвас
  clearCanvas();
  //обновляем данные
  obj.update();
  //Рисуем с обновлёнными данными
  draw(obj);
  draw(stair);

  if (
    obj.y + obj.height <= stair.y &&
    obj.x + obj.width / 2 > stair.x &&
    obj.x + obj.width / 2 < stair.x + stair.width
  ) {
    obj.y = stair.y - obj.height;
    obj.jump();
    console.log(true);
  }
}

setInterval(() => {
  update(obj);
}, 1000 / fps);

window.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (obj.canJump) {
      obj.jump();
      obj.canJump = false;
    }
  }
  //передвинуть на лево
  if (event.key === 'd') {
    obj.vx = 10;
  }
  //передвинуть на лево
  if (event.key === 'a') {
    obj.vx = -10;
  }
  //остановить
  if (event.key === 's') {
    obj.vx = 0;
  }
});