function getData() {

    var usersAPI = "https://api.github.com/users/";
    var inputData = document.getElementById("search").value;


    if (inputData) {


        user = usersAPI + inputData;

        fetch(user)
            .then(function(data) {
                return data.json();
            }).then(function(respone) {
                obj = respone;

                if (obj.login === undefined) {
                    alert("TRY AGAIN")
                } else {
                    show();

                }

            })


    } else {
        alert("Try again");
    }


    document.getElementById("search").value = "";






}

function show() {


    var searchBox = document.getElementById("searchBox");
    searchBox.classList.add("hide")

    var profileCard = document.getElementById("profileCard");
    profileCard.classList.remove("hide")





    var avatar_img = document.getElementById("avatar_img");
    var userName = document.getElementById("userName");
    var location = document.getElementById("location");
    var bio = document.getElementById("bio");
    var Followers = document.getElementById("Followers");
    var Respository = document.getElementById("Respository");
    var Following = document.getElementById("Following");

    // profileCard


    avatar_img.src = obj.avatar_url;
    userName.innerHTML = obj.name;
    bio.innerHTML = obj.bio;
    location.innerHTML = obj.location;
    Followers.innerHTML = obj.followers;
    Respository.innerHTML = obj.public_repos;
    Following.innerHTML = obj.following;

}