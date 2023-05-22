// custom title name
var t = document.getElementById('site-title');
if (t != null) {
    t.innerHTML = "Tony's Studio";
}

// custom style for author
var c = document.getElementById("footer-wrap").getElementsByClassName("copyright")[0];
if (c != null) {
    c.innerHTML = c.innerHTML.replace('Tony Skywalker', '<span class="author">Tony Skywalker</span>');
}
