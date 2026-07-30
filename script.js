function searchMedicine() {

    let medicine = document.querySelector("input").value;

    if (medicine === "") {
        alert("Please enter a medicine name.");
        return;
    }

    alert("You searched for: " + medicine);

}
