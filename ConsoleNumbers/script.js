const button = document.getElementById("runButton");

button.addEventListener("click", () => {
    const step = 0.5;
    let output = "";
    for (let i = 20; i <= 30; i += step) {
        output += i + " ";
    }
    console.log(output.trim());
});
