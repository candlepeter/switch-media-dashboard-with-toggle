const checkbox = document.querySelector(".checkbox");

function toggle() {
    let themeStyle = document.querySelector("#themeStyle");
    if (themeStyle.href.match("styledark.css")) {
        themeStyle.href = "stylelite.css";    
    }
    else {
        themeStyle.href = "styledark.css";  
    }
}

checkbox.addEventListener("change", toggle);


