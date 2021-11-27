function add_user() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="Talk_Table_Project_2.html"
}