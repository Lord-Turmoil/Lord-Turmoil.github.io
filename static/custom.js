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

const ANNOUNCEMENT = `
<div>
It won't be long before the armies of the Republic track us here.<br>
You can visit this site at:
<li><a href="http://blog.tonys-studio.top/" target="_blank">Main Site</a></li>
<li><a href="http://blog.zhengyaoliu.com/" target="_blank">Vercel Mirror Site</a></li>
<li><a href="https://lord-turmoil.github.io/" target="_blank">Github Mirror Site</a></li>
</div>
`;

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

    document.querySelectorAll('div.announcement_content').forEach(function (element) {
        element.innerHTML = ANNOUNCEMENT;
    });
});
