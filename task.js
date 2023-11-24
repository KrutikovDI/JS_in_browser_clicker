const img = document.getElementById("cookie")
let clickCount = 0
img.onclick = () => {document.getElementById("clicker__counter").textContent = clickCount +=1
  if (clickCount % 2 != 0) {
    img.width += 15;
    img.height += 15;
  }
  else{
    img.width -= 15;
    img.height -= 15;
  }
}