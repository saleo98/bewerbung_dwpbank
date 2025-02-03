document.getElementById("trainee-position").addEventListener("click", function () {
    this.classList.add("checked");
    setTimeout(() => {
        window.location.href = "countdown/countdown.html";
    }, 500);
});