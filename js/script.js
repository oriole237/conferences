const btn_theme = document.getElementById("theme-toggle");

console.log(btn_theme, "btn_theme");

btn_theme.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");

    //enregistrer le choix de l'utilisateur pour toutes les pages
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
