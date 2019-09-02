window.onscroll = function() {
    console.log(window.pageYOffset);
    var profilePicture = document.getElementById('picture');
    var headerGrid = document.getElementById('headerGrid');
    if (window.pageYOffset > 400) {
        profilePicture.classList.add("changeProfilePic");
        headerGrid.classList.add("minimizeGridRows")
    } else {
        profilePicture.classList.remove("changeProfilePic");
        headerGrid.classList.remove("minimizeGridRows")

    }
}

function bodyOnLoad() {
    var leftImg = document.getElementById('image2');
    console.log("Change CSS")
    leftImg.classList.add("changeLeftImg")

}

window.onload = bodyOnLoad;


//let profileElem = document.getElementById("profilePicture");
//let projectSection = document.getElementById("profilePicture");