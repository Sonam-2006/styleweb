function contact() {
    alert("We will contact you shortly! Or WhatsApp us at +91 9876543210");
}
<script>
window.addEventListener("scroll", reveal);
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
</script>
