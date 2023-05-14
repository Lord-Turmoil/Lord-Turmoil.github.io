// custom title name
var n = document.getElementById('site-title');
n.innerHTML = "Tony's Studio";
// custom style for author
var c = document.getElementsByClassName("copyright")[0];
c.innerHTML = c.innerHTML.replace('Tony Skywalker', '<span class="author">Tony Skywalker</span>');
