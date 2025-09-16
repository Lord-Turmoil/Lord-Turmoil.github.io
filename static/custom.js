// https://minify-js.com/

const TITLE_MAP = {
    "/archives": "ARCHIVE",
    "/categories": "CATEGORIES",
    "/tags": "TAGS",
    "/gallery": "GALLERY",
    "/link": "FRIENDS & LINKS",
    "/support": "SUPPORT",
    "/about": "ABOUT ME",
    "/404": "404 NOT FOUND",
    "/": "TONY's STUDIO"
};

document.addEventListener("DOMContentLoaded", function () {
    function shouldCapitalize(char) {
        return /[A-Z]/.test(char);
    }

    var siteTitle = document.getElementById('site-title');
    if (siteTitle != null) {
        var router = window.location.pathname;
        for (var key in TITLE_MAP) {
            if (router.startsWith(key)) {
                const title = TITLE_MAP[key];
                siteTitle.innerHTML = title.replace(/\b\w/g, function (char) {
                    // if first letter is capital and not a number, wrap it in a span
                    if (shouldCapitalize(char)) {
                        return '<span class="first-letter">' + char + '</span>';
                    }
                    return char;
                });
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
