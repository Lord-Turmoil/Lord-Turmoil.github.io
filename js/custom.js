
// custom title name
const TITLE_MAP = {
    "/archives": "Archives",
    "/categories": "Categories",
    "/tags": "Tags",
    "/gallery": "Gallery",
    "/link": "Links & Projects",
    "/support": "Support Me",
    "/about": "About Me",
    "/404": "404 Not Found",
    "/": "Tony's Studio"
};

var t = document.getElementById('site-title');
if (t != null) {
    var router = window.location.pathname;
    for (var key in TITLE_MAP) {
        if (router.startsWith(key)) {
            t.innerHTML = TITLE_MAP[key];
            break;
        }
    }
}

// custom style for author
var c = document.getElementById("footer-wrap").getElementsByClassName("copyright")[0];
if (c != null) {
    c.innerHTML = c.innerHTML.replace('Tony Skywalker', '<span class="author">Tony Skywalker</span>');
}
