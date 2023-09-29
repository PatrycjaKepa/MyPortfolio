let toggle = document.getElementById("mode");

toggle.addEventListener('click', () => {
    var SetTheme = document.body;

    SetTheme.classList.toggle("light")

    var theme;

    if(SetTheme.classList.contains("light")){
        theme = "LIGHT"
    }else{
        theme = "DARK"
    }

    localStorage.setItem("PageTheme", JSON.stringify(theme));

})

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme === "LIGHT"){
    document.body.classList = "light"
}
