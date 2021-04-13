function preLoader() {
  let $input = document.querySelector(".lists"),
    $ul = document.querySelector("ul.todos");
  contentLoad();
  let $basket = document.querySelectorAll(".todos span");
  ($save = document.querySelector("button.save")),
    ($clear = document.querySelector("button.clear")),
    ($tips = document.querySelector("button.tips")),
    ($pencil = document.querySelector("#pencil")),
    ($showTips = document.querySelector("button.tipBtn")),
    ($overlay = document.querySelector("#overlay")),
    ($hideTips = document.querySelector(".closebtn"));
  $li_items = document.querySelectorAll(".todos li");
  function deleteItem() {
    for (let i = 0; i < $basket.length; i++) {
      $basket[i].addEventListener("click", function () {
        this.parentElement.remove();
      });
    }
  }
  deleteItem();

  $input.addEventListener("keypress", function (key) {
    if (key.which == 13) {
      let value = this.value.trim();
      this.value = "";
      if (value) {
        let $li = document.createElement("li"),
          $span = document.createElement("span"),
          $icon = document.createElement("i");
        $icon.classList.add("fas", "fa-trash-alt");
        $li.textContent = value;
        $span.insertAdjacentElement("afterbegin", $icon);
        $li.insertAdjacentElement("afterbegin", $span);
        $ul.insertAdjacentElement("afterbegin", $li);
        $basket = document.querySelectorAll(".todos span");
      }
    }
  });
  $ul.addEventListener("click", (event) => {
    if ((event.target.tagName = "li")) {
      event.target.classList.toggle("checked");
    }
  });
  $clear.addEventListener("click", () => {
    window.localStorage.setItem("list", ($ul.innerHTML = ""));
  });
  $save.addEventListener("click", (event) => {
    window.localStorage.setItem("list", $ul.innerHTML);
  });
  $pencil.addEventListener("click", () => {
    $input.classList.toggle("display");
  });
  $showTips.addEventListener("click", () => {
    overlay.style.height = "100vh";
  });
  $hideTips.addEventListener("click", () => {
    overlay.style.height = "0vh";
  });

  function contentLoad() {
    let $list = localStorage.getItem("list").trim();
    if ($list) {
      $ul.innerHTML = $list;
    }
  }
}
document.addEventListener("DOMContentLoaded", preLoader);
