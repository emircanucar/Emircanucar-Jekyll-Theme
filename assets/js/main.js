let sideNavWrapper = document.querySelector(".sidenav-wrapper");
let sideNavCloseBtn = document.querySelector(".sidenav-close-btn");
let sideNavShowBtn = document.querySelector(".sidenav-show-btn");

function hideShowSideNav() {
  sideNavWrapper.classList.toggle("show-sidenav");
}

sideNavCloseBtn.addEventListener("click", hideShowSideNav);
sideNavShowBtn.addEventListener("click", hideShowSideNav);
