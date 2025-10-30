let TITLE_MAP={"/archives":"Archives","/categories":"Categories","/tags":"Tags","/gallery":"Gallery","/link":"Friends & Links","/support":"Support","/about":"About Me","/404":"404 Not Found","/":"Tony's Studio"},ANNOUNCEMENT=`
<div>
It won't be long before the armies of the Republic track us here.<br>
You can visit this site at:
<li><a href="https://blog.tonys-studio.top{}" target="_blank">Main Site</a></li>
<li><a href="https://blog.zhengyaoliu.com{}" target="_blank">Vercel Mirror Site</a></li>
<li><a href="https://lord-turmoil.github.io{}" target="_blank">Github Mirror Site</a></li>
</div>
`;document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("site-title");if(null!=e){var t,n=window.location.pathname;for(t in TITLE_MAP)if(n.startsWith(t)){e.innerHTML=TITLE_MAP[t];break}}var o=document.getElementById("footer"),i=o.getElementsByClassName("copyright")[0],i=(null!=i&&(i.innerHTML=i.innerHTML.replace("Tony Lewis",'<span class="author">Tony Lewis</span>')),document.getElementById("ghbdages"));o.getElementsByClassName("footer-other")[0].appendChild(i),document.querySelectorAll("div.announcement_content").forEach(function(e){var t=window.location.pathname+window.location.search+window.location.hash;e.innerHTML=ANNOUNCEMENT.replace(/{}/g,t)})});