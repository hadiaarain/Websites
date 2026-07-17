document.addEventListener("DOMContentLoaded", function () {
    // Look for the select element inside the page
    const phaseSelect = document.getElementById("select");

    if (phaseSelect) {
        // Listen for value changes on the drop-down menu
        phaseSelect.addEventListener("change", function () {
            const selectedTargetPage = this.value;

            if (selectedTargetPage) {
                // Navigate seamlessly to the respective phase file 
                window.location.href = selectedTargetPage;
            }
        });
    }
});