document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded!");

    // Make active nav link highlight properly
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelectorAll("nav ul li a").forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
