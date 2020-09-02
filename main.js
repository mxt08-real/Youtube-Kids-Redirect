if(localStorage.getItem("a") != 1) {
    alert("You might configure youtube kids before using it.");
    localStorage.setItem("a", "1");}

location.assign("https://www.youtubekids.com");
