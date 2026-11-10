function init(){
//add your javascrip between these two lines of 
    const button = document.getElementById("entrybutton");

    function myFunction() {
        const message = document.getElementById("entryinput").value;

        alert("Miguel: " + message);
        document.getElementById("textoutput").textContent = message;
    }
    button.addEventListener("click", myFunction);

}

window.addEventListener('load', init);
