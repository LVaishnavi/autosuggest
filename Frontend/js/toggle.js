let isMale = true;

function toggleUser() {
    const name = document.getElementById("userName");
    const gender = document.getElementById("userGender");
    const image = document.getElementById("userImage");

    if (isMale) {
        name.textContent = "Jane Doe";
        gender.textContent = "Female";
        image.src = "../images/john-female.png";
    } else {
        name.textContent = "John Doe";
        gender.textContent = "Male";
        image.src = "../images/john.png";
    }

    isMale = !isMale;
}