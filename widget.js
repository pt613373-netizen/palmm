// Palmm — The Daily Experiment. Embed today's comic anywhere with one line:
// <script src="https://pt613373-netizen.github.io/palmm/widget.js" async></script>
(function () {
  var s = document.currentScript || (function () { var t = document.getElementsByTagName("script"); return t[t.length - 1]; })();
  var d = document.createElement("div");
  d.style.cssText = "max-width:420px;font-family:Georgia,serif;border:1px solid #1f2937;border-radius:12px;overflow:hidden;background:#0d0d17;margin:24px auto";
  var img = document.createElement("img");
  var title = document.createElement("div");
  var link = document.createElement("a");
  img.style.cssText = "width:100%;display:block";
  title.style.cssText = "padding:10px 14px;color:#e2e8f0;font-size:14px";
  link.style.cssText = "display:block;padding:0 14px 12px;color:#fbbf24;font-size:11px;letter-spacing:2px;text-decoration:none";
  link.textContent = "PALMM · THE DAILY EXPERIMENT →";
  d.appendChild(img); d.appendChild(title); d.appendChild(link);
  s.parentNode.insertBefore(d, s);
  fetch("https://pt613373-netizen.github.io/palmm/manifest.json").then(function (r) { return r.json(); }).then(function (m) {
    var e = m.episodes[m.episodes.length - 1];
    img.src = e.cover; img.alt = e.title;
    title.textContent = "Episode " + e.num + " — " + e.title;
    link.href = e.url;
  });
})();