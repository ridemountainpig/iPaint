var drawing = false;
var context;

window.onload = function () {
  // 清除按鈕
  document.getElementById("btnClear").addEventListener(
    "click",
    function () {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      refreshPage();
      alert("畫布清除成功");
    },
    false
  );
  
  function refreshPage(){
    window.location.href = window.location.href;
  }

  // 筆寬
  document.getElementById("lineWidth").addEventListener(
    "change",
    function () {
      context.lineWidth = document.getElementById("lineWidth").value;
    },
    false
  );

  // 畫筆顏色
  document.getElementById("colorChange").addEventListener(
    "change",
    function () {
      context.strokeStyle = document.getElementById("colorChange").value;
    },
    false
  );

  document.getElementById("all").addEventListener("click", 
    function () {
      let color = document.getElementById("colorChange").value;
      document.getElementById("myCanvas").style.backgroundColor = color;
    }
  );


  // 畫布大小
  context = document.getElementById("myCanvas").getContext("2d");
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight - 60;

  // 滑鼠移動
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleDown;
  document.onmouseup = handleUp;

  // 設定線風格
  context.strokeStyle = "#000";
  context.lineJoin = "round";
  context.lineWidth = 5;
};

function handleMouseMove(e) {
  console.log(e.clientX);
  console.log(e.clientY);
  if (drawing) {
    context.lineTo(e.clientX, e.clientY);
    context.closePath();
    context.stroke();
    context.moveTo(e.clientX, e.clientY);
  } else {
    context.moveTo(e.clientX, e.clientY);
  }
}

function handleDown(e) {
  drawing = !drawing;
  console.log(drawing);
  context.moveTo(e.clientX, e.clientY);
  context.beginPath();
}

function handleUp() {
  drawing = !drawing;
  console.log(drawing);
}
