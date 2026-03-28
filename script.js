function startLove() {
  const love = document.querySelector(".love-btn");

  love.style.transition = "1s";
  love.style.transform = "translateY(600px) scale(0.5)";
  love.style.opacity = "0";

  setTimeout(() => {
    document.getElementById("screen1").style.display = "none";
    startTree();
  }, 1000);
}

function startTree() {
  const container = document.getElementById("treeScene");
  container.style.display = "block";

  // trunk
  const trunk = document.createElement("div");
  trunk.className = "trunk";
  container.appendChild(trunk);

  // 💖 HEART SHAPE FORMULA
  let i = 0;
  const total = 200;

  const interval = setInterval(() => {
    if (i > total) {
      clearInterval(interval);
      moveTree();
      return;
    }

    // heart shape equation
    const t = i * 0.1;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

    const heart = document.createElement("div");
    heart.className = "heart";

    // 💖 iOS style emoji feel
    heart.innerText = "💖";

    heart.style.left = (x * 8) + "px";
    heart.style.top = (y * 8 - 150) + "px";

    container.appendChild(heart);

    i++;
  }, 20);
}

function moveTree() {
  const tree = document.getElementById("treeScene");

  tree.style.transition = "2s";
  tree.style.left = "70%";

  setTimeout(() => {
    document.getElementById("wishText").style.opacity = "1";
  }, 2000);
}