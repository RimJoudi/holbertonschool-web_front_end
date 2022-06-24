function changeMode(size, weight, transform, background, color) {
    document.documentElement.style["font-size"] = size;
    document.documentElement.style["font-weight"] = weight;
    document.documentElement.style["text-transform"] = transform;
    document.documentElement.style["background-color"] = background;
    document.documentElement.style["color"] = color;
};
function main(){    
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    var p = document.createElement("p");
    p.innerHTML = "Welcome Holberton!";
    document.body.appendChild(p);

    var btn = document.createElement("button");
    btn.innerHTML = "Spooky";
    document.body.appendChild(btn);
    btn.onclick = () => { spooky() };

    var element = document.createElement("button");
    element.innerHTML = "Dark mode";
    document.body.appendChild(element);
    element.onclick = () => { darkMode() };

    var scream = document.createElement("button");
    element.innerHTML = "scream mode";
    document.body.appendChild(scream);
    scream.onclick = () => { screamMode () };

};      
main();
