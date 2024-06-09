import React from 'react';
import boyImg from './boy.jpg';

const HomePage = () => {
  const draw = ctx => {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // window.innerWidth / 2, y: window.innerHeight / 2
    let x = window.innerWidth / 2 - 50;
    let y = window.innerHeight / 2 - 200;
    let dis = 50;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - dis, y + dis);
    ctx.lineTo(x + dis, y + dis);
    ctx.closePath();
    ctx.stroke();

    x = x - 50;
    y = y + 50 + 1;
    dis = dis + 50; // 100;
    ctx.moveTo(x, y);
    ctx.lineTo(x + dis, y);
    ctx.lineTo(x + dis + 50, y + 50);
    ctx.lineTo(x - 50, y + 50);
    ctx.lineTo(x, y);
    ctx.stroke();

    x = x - 50;
    y = y + 50 + 1;
    dis = dis + dis; // 200;
    ctx.moveTo(x, y);
    ctx.lineTo(x + dis, y);
    ctx.lineTo(x + dis + 50, y + 50);
    ctx.lineTo(x - 50, y + 50);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.fill();

    ctx.font = '48px serif';
    ctx.fillStyle = 'red';
    ctx.fillText('点击打开粽子', x - 50, y + 100);
  };

  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    draw(ctx, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    console.log('------restart');
  });

  const onClick = () => {
    var Heart = function () {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      this.ctx = ctx;
      this.x = window.innerWidth / 2 - 50;
      this.y = window.innerHeight / 2 - 200;
      this.a = 6;
      this.vertices = [];
      for (let i = 0; i < 50; i++) {
        var step = (i / 50) * (Math.PI * 2); //设置心上面两点之间的角度，具体分成多少份，好像需要去试。
        var vector = {
          x: this.a * (16 * Math.pow(Math.sin(step), 3)),
          y:
            this.a *
            (13 * Math.cos(step) -
              5 * Math.cos(2 * step) -
              2 * Math.cos(3 * step) -
              Math.cos(4 * step))
        };
        this.vertices.push(vector);
      }

      // const ctx = this.ctx;
      const x = this.x;
      const y = this.y;
      ctx.font = '48px serif';
      ctx.fillStyle = 'red';
      ctx.fillText('小天天祝小思佳端午安康', x - 250, y + 180);
    };
    Heart.prototype.draw = function () {
      this.ctx.beginPath();
      this.ctx.translate(this.x, this.y);
      this.ctx.rotate(Math.PI);
      for (let i = 0; i < 50; i++) {
        var vector = this.vertices[i];
        this.ctx.lineTo(vector.x, vector.y);
      }
      this.ctx.fillStyle = 'red';
      this.ctx.fill();
    };
    var heart = new Heart();
    heart.draw();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick={_ => {
          onClick();
        }}
      ></canvas>
      <img
        src={boyImg}
        style={{
          height: 40,
          width: 40,
          position: 'absolute'
        }}
      ></img>
    </div>
  );
};

export default HomePage;
