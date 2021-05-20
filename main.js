// Floating action button
const elemnsBtns = document.querySelectorAll('.fixed-action-btn');
const floatingBtn = M.FloatingActionButton.init(elemnsBtns, {
    direction: "left",
    //hoverEnabled: false // cancela a ação de exibir ao passar por cima, tem que clicar
});

// Navbar
const elemnsDropdown = document.querySelectorAll('.dropdown-trigger');
const instancesDropdown = M.Dropdown.init(elemnsDropdown, {
    coverTrigger: false // exibir dropdown para baixo para nao ficar acima do menu
})

const elemsSidenav = document.querySelectorAll('.sidenav');
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});

// Modal
const elemnsModal = document.querySelectorAll('.modal');
const instancesModal = M.Modal.init(elemsModal);

// Toast
const elemnsToast = document.querySelector("#toast");
const instanceToast = () => {
    M.toast( {
        html: "Também sou uma notificação",
        classes: "rounded"
    })
}

elemnsToast.addEventListener("click", () => {
    instanceToast();
});