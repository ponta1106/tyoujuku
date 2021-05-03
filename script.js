  let jouge;
  let sayuu;
  let touch = false;
  
  // マウス座標を取得する関数
  function mousePoint(e) {
    jouge = (e.clientY - 50) + "px";
    sayuu = (e.clientX - 50) + "px";
  };

  // 超熟を生成する関数
  function makeTyoujuku(e) {
    const div = document.createElement("div");
      div.setAttribute("class", "tyoujuku");
      document.body.appendChild(div);
      // マウス座標を取得
      mousePoint(e);
      div.style.top = jouge;
      div.style.left = sayuu;
  }

  document.addEventListener('mousedown', (e)=> {
    makeTyoujuku(e);
    touch = true;
  });

  document.addEventListener('mouseup', (e)=> {
    touch = false;
  });
  
  document.addEventListener('mousemove', (e)=> {
    if(touch === true) {
      makeTyoujuku(e);
    }
  });
