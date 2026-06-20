var users = [
    {
    "name" : "John Doe",
    "gender" : "male",
    "image" : "/images/john.png"
    },
    {
    "name" : "Jane Doe",
    "gender" : "female",
    "image" : "/images/john-female.png"
    }
]
var curID = 0;

function toggle() {
    curID = (curID + 1) % 2;

    //toggle the rendered user details

    var user = users[curID];
    document.getElementById("user-img").src = user.image;

    // update the name and gender
    //name
    document.getElementById("user-name").innerText = user.name;
    
    //gender
    document.getElementById("user-gender").innerText = user.gender;

}


