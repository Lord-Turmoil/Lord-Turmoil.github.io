// https://minify-js.com/

const TITLE_MAP = {
    "/archives": "Archives",
    "/categories": "Categories",
    "/tags": "Tags",
    "/gallery": "Gallery",
    "/link": "Friends & Links",
    "/support": "Support",
    "/about": "About Me",
    "/404": "404 Not Found",
    "/": "Tony's Studio"
};

document.addEventListener("DOMContentLoaded", function () {
    var siteTitle = document.getElementById('site-title');
    if (siteTitle != null) {
        var router = window.location.pathname;
        for (var key in TITLE_MAP) {
            if (router.startsWith(key)) {
                siteTitle.innerHTML = TITLE_MAP[key]
                break;
            }
        }
    }

    var footer = document.getElementById("footer");
    var copyright = footer.getElementsByClassName("copyright")[0];
    if (copyright != null) {
        copyright.innerHTML = copyright.innerHTML.replace('Tony Lewis', '<span class="author">Tony Lewis</span>');
    }
    var badges = document.getElementById("ghbdages");   // bad spelling >:(
    var footerOther = footer.getElementsByClassName("footer-other")[0];
    footerOther.appendChild(badges);
});
