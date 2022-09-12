// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const  sideBarBtn = document.querySelector("#menu-sidebar");
const  appSideBar = document.querySelector("#app-sidebar");


sideBarBtn.addEventListener("click", ()=> {
    appSideBar.classList.toggle("show");

    
})