// const navigation = document.getElementById("hamburger");
// const navigationX = document.getElementById("cancel");

// navigation.addEventListener('click', function () {
//     if (navigation.classList.contains('dropdown-menu')) {
//         navigation.classList.remove('dropdown-menu');
//     } else {
//         navigation.classList.add('dropdown-menu');
//     }
// });

// navigationX.addEventListener('click', function () {
//     if (navigation.classList.contains('dropdown-menu')) {
//         navigation.classList.remove('dropdown-menu');
//     } else {
//         navigation.classList.add('dropdown-menu');
//     }
// });
const navigation = document.getElementById("hamburger");
const navigationX = document.getElementById("cancel");

// (function(params){
//     params.addEventListener('click', function(){
//         if(navigation.classList.contains('dropdown-menu')){
//             navigation.classList.remove('dropdown-menu');
//             navigation.classList.add('.dropdown-menu')
//         }else{
//             navigation.classList.add('dropdown-menu')
//         }
//     })
// })(navigation)
(function(params){
    params.addEventListener('click', function(){
        if(navigationX.classList.contains('dropdown-menu')){
            navigationX.classList.remove('dropdown-menu');
            navigationX.classList.add('.dropdown-menu')
        }else{
            navigationX.classList.add('dropdown-menu')
        }
    })
})(navigationX)