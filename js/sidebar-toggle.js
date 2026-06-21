document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".bs-sidebar");
  if (!sidebar) return;

  const items = sidebar.querySelectorAll("li");

  items.forEach(function (item) {
    const directSublist = Array.from(item.children).find(function (child) {
      return child.tagName === "UL";
    });

    const directLink = Array.from(item.children).find(function (child) {
      return child.tagName === "A";
    });

    if (!directSublist || !directLink) return;
    if (directSublist.children.length === 0) return;

    item.classList.add("has-children");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "sidebar-toggle-btn";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Expand section");
    button.innerHTML = '<span class="sidebar-caret"></span>';

    directLink.insertAdjacentElement("afterend", button);

    const isActiveBranch =
      item.classList.contains("active") ||
      item.querySelector("li.active, a.active, .active") !== null;

    if (isActiveBranch) {
      item.classList.add("is-expanded");
      directSublist.style.display = "block";
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Collapse section");
    } else {
      item.classList.add("is-collapsed");
      directSublist.style.display = "none";
    }

    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const expanded = item.classList.contains("is-expanded");

      if (expanded) {
        item.classList.remove("is-expanded");
        item.classList.add("is-collapsed");
        directSublist.style.display = "none";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Expand section");
      } else {
        item.classList.remove("is-collapsed");
        item.classList.add("is-expanded");
        directSublist.style.display = "block";
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Collapse section");
      }
    });
  });
});