window.addEventListener('DOMContentLoaded',function(){
    add(items);
});

function add(json) {
    // ------------------ DIV ARTICLES -------------------------
    let articles = document.querySelector(".articles");
    for (let item in json) {
        // ------------------ DIV ARTICLE -------------------------
        let article = document.createElement("div")
        article.className = "article"
        articles.appendChild(article)

        // ------------------ DIV ARTICLE-TEXT -------------------------
        let article_text = document.createElement("div")
        article_text.className = "article-text"
        // ------------------ DIV LINKS-GEO -------------------------
        let links_geo = document.createElement("div")
        links_geo.className = "links-geo"
        // ------------------ LINES + PAYS + VILLE -------------------------
        let line_before = document.createElement("a")
        line_before.className = "line-before"
        line_before.innerHTML = json[item].titre  //* -------------- PAYS
        let spanPipe = document.createElement("span")
        spanPipe.innerHTML = "&nbsp;&#124;&nbsp;"
        let iconPin = document.createElement("span")
        iconPin.className = "material-symbols-outlined bounce"
        iconPin.innerHTML = "cloud"
        let line_after = document.createElement("a")
        line_after.className = "line-after"
        line_after.innerHTML = json[item].version //* --------------- LIEU

        links_geo.appendChild(line_before)
        links_geo.appendChild(spanPipe)
        links_geo.appendChild(iconPin)
        links_geo.appendChild(line_after)

        article_text.appendChild(links_geo)
        article.appendChild(article_text)

        // ------------------ TITRE (H1 + A) -------------------------
        let articleTitle = document.createElement("h1")
        let article_link = document.createElement("a")
        article_link.target = "_blank"
        article_link.className = "article-link"
        article_link.setAttribute("href", json[item].url)
        article_link.innerHTML = json[item].titre //* ------------------ TITRE
        articleTitle.appendChild(article_link)
        article_text.appendChild(articleTitle)

        // ------------------ CONTENT -------------------------
        let article_content = document.createElement("p")
        article_content.innerHTML = json[item].content //* ------------- CONTENU
        article_text.appendChild(article_content)

        // ------------------ BUTTON -------------------------
        let btn = document.createElement("a")
        btn.className = "btn"
        btn.href = json[item].url;
        btn.target = "_blank"
        btn.innerHTML = "<span>link</span>"

        article_text.appendChild(btn)

    }
}
