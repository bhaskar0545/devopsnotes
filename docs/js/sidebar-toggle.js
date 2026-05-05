document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".bs-sidebar, .navbar + .container .col-md-3, .col-md-3[role='complementary']");
  if (!sidebar) return;

  const lists = sidebar.querySelectorAll("li > ul");
  lists.forEach(function (sublist) {
    const parentLi = sublist.parentElement;
    const trigger = parentLi.querySelector(":scope > a");
    if (!trigger) return;

    parentLi.classList.add("has-children");
    parentLi.classList.add("is-collapsed");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "sidebar-toggle-btn";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Expand section");
    button.innerHTML = '<span class="sidebar-caret"></span>';

    trigger.insertAdjacentElement("afterend", button);
    sublist.style.display = "none";

    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const expanded = parentLi.classList.toggle("is-expanded");
      parentLi.classList.toggle("is-collapsed", !expanded);
      sublist.style.display = expanded ? "block" : "none";
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
      button.setAttribute("aria-label", expanded ? "Collapse section" : "Expand section");
    });

    if (parentLi.classList.contains("active") || parentLi.querySelector(".active")) {
      parentLi.classList.add("is-expanded");
      parentLi.classList.remove("is-collapsed");
      sublist.style.display = "block";
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Collapse section");
    }
  });
});