

//ham menü func
function hamMenuFunc() {
    var x = document.querySelector(".ham-menu-Nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    console.log("sss")
}


////opacity ayarı
//document.addEventListener('DOMContentLoaded', (event) => {
//    const dropdown = document.querySelector('.dropdown');
//    const pageContent = document.querySelector('.page-content');

//    dropdown.addEventListener('mouseover', () => {
//        pageContent.style.opacity = '0.2';
//    });

//    dropdown.addEventListener('mouseout', () => {
//        pageContent.style.opacity = '1';
//    });
//});