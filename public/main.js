getCSS.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.send();
  request.onload = () => {
    let style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
    console.log(request.status);
  };
};

getJS.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.send();
  request.onload = () => {
    let script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
};

getHTML.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.send();
  request.onreadystatechange = () => {
    //加载完
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载失败");
      }
    }
  };
};

getJSON.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("get", "/4.json");
  request.send();
  request.onreadystatechange = () => {
    //加载完毕
    if (request.readyState === 4) {
      //加载的状态是成功
      if (request.status >= 200 && request.status < 300) {
        let obj = JSON.parse(request.response);
        myName.innerText = obj.name;
      }
    }
  };
};

let n = 2;
getPage.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("get", "/page" + n);
  request.send();
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let arr = JSON.parse(request.response);
      arr.forEach((v) => {
        let li = document.createElement("li");
        li.innerText = v.id;
        xxx.appendChild(li);
      });
      n++;
    } else if (request.readyState === 4 && request.status === 404) {
      alert("没有更多了");
    }
  };
};
