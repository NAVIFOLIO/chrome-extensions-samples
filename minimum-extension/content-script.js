const titles = document.querySelectorAll('h3');

if (titles){
    for (var i = 0; i < titles.length; i ++){
        titles[i].style.color = 'red';
    }
}