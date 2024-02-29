// menyiapkan canvas
const myCanvas = document.querySelector("#my-canvas");

// mengatur ukuran canvas
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// tentukan context
const c = myCanvas.getContext("2d");

// manimpulasi canvas

// membuat kotak / rectangle / rect
c.fillStyle = "pink";
c.strokeStyle = "#999";
c.lineWidth = "5";

c.rect(50, 50, 300, 300);
c.fill();
c.stroke();

// membuat lingkaran / circle / arc
c.fillStyle = "lightgreen";
c.beginPath();
c.arc(550, 200, 150, 0, 2 * Math.PI);
c.fill();
c.stroke();

// membuat path (segitiga)
c.fillStyle = "lightblue";
c.beginPath();
c.moveTo(900, 50);
c.lineTo(1050, 350);
c.lineTo(750, 350);
c.closePath();
c.fill();
c.stroke();
