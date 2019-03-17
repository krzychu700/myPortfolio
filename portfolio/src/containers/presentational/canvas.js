import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount() {
    this.canvasStars();
  }
  canvasStars = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    canvas.width = 1200;
    canvas.height = 645;

    var starsHolder = [],
      FPS = 30,
      x = canvas.width * 5;

    for (var i = 0; i < x; i++) {
      starsHolder.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5
      });
    }
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighten";

      for (var i = 0, x = starsHolder.length; i < x; i++) {
        var s = starsHolder[i];

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    function updatePosition() {
      for (var i = 0, x = starsHolder.length; i < x; i++) {
        var s = starsHolder[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.x = -s.x;
        if (s.y < 0 || s.y > canvas.height) s.y = -s.y;
      }
    }

    function tick() {
      drawStars();
      updatePosition();
      requestAnimationFrame(tick);
    }

    tick();
  };
  render() {
    return (
      <div>
        <canvas ref="canvas" id="canvas" />
      </div>
    );
  }
}
export default Canvas;
