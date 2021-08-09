function display(val) {
    document.getElementById("dis").value += val;
  }
  function ans() {
    let x = document.getElementById("dis").value;
    let y = eval(x);
    document.getElementById("dis").value = y;
  }
  function clr() {
    document.getElementById("dis").value = "";
  }