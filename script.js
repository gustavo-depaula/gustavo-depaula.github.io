document.getElementsByTagName("header")[0].innerHTML = `
  <h1 id="site-title"><a href="/">Gustavo's webpages</a></h1>
`;

for (var links = document.links, i = 0, a; (a = links[i]); i++) {
  if (a.host !== location.host) {
    a.target = "_blank";
  }
}

var analyticsScript = document.createElement('script')
analyticsScript.src = 'https://scripts.withcabin.com/hello.js'
analyticsScript.async = true
analyticsScript.defer = true

document.body.appendChild(analyticsScript)
