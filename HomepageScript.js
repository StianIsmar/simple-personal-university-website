window.onscroll = function() {
    console.log(window.pageYOffset);
    var profilePicture = document.getElementById('picture');
    var headerGrid = document.getElementById('headerGrid');
    if (window.pageYOffset > 50) {
        profilePicture.classList.add("changeProfilePic");
        headerGrid.classList.add("minimizeGridRows")
    } else {
        profilePicture.classList.remove("changeProfilePic");
        headerGrid.classList.remove("minimizeGridRows")

    }
}



//let profileElem = document.getElementById("profilePicture");
//let projectSection = document.getElementById("profilePicture");