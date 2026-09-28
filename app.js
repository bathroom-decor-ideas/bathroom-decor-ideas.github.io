const pages = {
    about: {
        title: "About Bathroom Decor Ideas",
        content: "<p>Bathroom Decor Ideas is a practical source of inspiration for making everyday spaces feel calmer, more useful, and beautifully personal.</p><p>We explore approachable palettes, storage, lighting, materials, renter-friendly upgrades, and finishing details. Our aim is to explain why a room works so you can adapt the idea to your own space, needs, and budget.</p><h2>Our Approach</h2><p>Thoughtful bathroom design starts with safety and function. Every guide encourages realistic choices, moisture-aware materials, clear circulation, and professional help for plumbing or electrical work when required.</p><p>We hope you find an idea worth saving and a practical next step for your own bathroom.</p>"
    },
    privacy: {
        title: "Privacy Policy",
        content: "<p><strong>Last updated: September 28, 2026</strong></p><p>This Privacy Policy describes information that may be collected when you visit Bathroom Decor Ideas and how it may be used.</p><h2>Log Files</h2><p>Like many websites, this site may use log files. Information can include internet protocol addresses, browser type, internet service provider, date and time, referring or exit pages, and click counts. This data helps analyze trends and administer the site. It is not intended to identify individual visitors.</p><h2>Cookies and Advertising</h2><p>Cookies may store visitor preferences and help tailor site content. Third-party vendors, including Google, may use cookies to serve advertising based on prior visits to this and other websites. Visitors can manage personalized advertising in their Google Ads settings or through industry opt-out resources.</p><h2>Social Media</h2><p>Social features, including Pinterest save tools or analytics tags, may collect information such as an IP address and the page being viewed. Interactions with those features are governed by the provider's privacy policy.</p><h2>Children's Information</h2><p>We do not knowingly collect personally identifiable information from children under 13. A parent or guardian who believes a child supplied such information may contact us to request its removal.</p><h2>Your Choices</h2><p>You can disable cookies through your browser settings. Doing so may affect some site features.</p>"
    },
    terms: {
        title: "Terms of Service",
        content: "<p><strong>Effective date: September 28, 2026</strong></p><h2>Acceptance of Terms</h2><p>By accessing and using this website, you agree to these terms. If you do not agree, please discontinue use.</p><h2>Informational Content</h2><p>Content is provided for general inspiration and information. Always follow product instructions, building codes, moisture and slip-safety requirements, and appropriate professional guidance for plumbing, electrical, structural, waterproofing, and mounting work.</p><h2>Intellectual Property</h2><p>Unless otherwise stated, the site's original writing, layout, and graphics are protected by applicable copyright laws. Reproduction or redistribution requires written permission.</p><h2>Disclaimer</h2><p>The materials are provided on an as-is basis. We make no warranties regarding completeness, accuracy, reliability, or fitness for a particular purpose.</p><h2>External Links</h2><p>This site may link to third-party websites or services we do not control. We are not responsible for their content, availability, or privacy practices.</p>"
    },
    contact: {
        title: "Contact Us",
        content: "<p>Have a question, suggestion, or bathroom refresh to share? We would love to hear from you.</p><p><strong>Email:</strong> <a href='mailto:contact@carolynadamsulo-creator.github.io'>contact@carolynadamsulo-creator.github.io</a></p><p>We aim to respond within 48 to 72 hours. Please keep messages respectful and include the article title when your question relates to a specific guide.</p>"
    }
};

const app = document.getElementById("app");
const siteHero = document.getElementById("site-hero");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const avatarUrl = "./assets/blog-avatar.png";

function homeMarkup() {
    const cards = posts.map(function (post) {
        return "<article class='post-card'>" +
            "<a class='card-image-link' href='#" + post.id + "' data-route='post' data-id='" + post.id + "' aria-label='Read " + post.title + "'>" +
                "<img src='" + post.image + "' alt='" + post.alt + "' loading='lazy'>" +
            "</a>" +
            "<div class='card-copy'>" +
                "<div class='card-meta'><span>" + post.category + "</span><span>&middot;</span><span>" + post.date + "</span></div>" +
                "<h3><a href='#" + post.id + "' data-route='post' data-id='" + post.id + "'>" + post.title + "</a></h3>" +
                "<div class='card-summary'>" + post.excerpt + "</div>" +
                "<a class='read-link' href='#" + post.id + "' data-route='post' data-id='" + post.id + "'>Read the guide <span aria-hidden='true'>&rarr;</span></a>" +
            "</div>" +
        "</article>";
    }).join("");

    return "<section class='home-section' id='stories'>" +
        "<div class='section-heading'>" +
            "<p class='section-kicker'>The latest inspiration</p>" +
            "<h2>Four fresh ways to shape a beautiful bathroom.</h2>" +
            "<p>Explore image-led guides filled with practical palette, texture, lighting, storage, and styling ideas you can adapt to the bathroom you already have.</p>" +
        "</div>" +
        "<div class='post-grid'>" + cards + "</div>" +
    "</section>";
}

function renderHome(shouldScroll) {
    siteHero.hidden = false;
    document.title = "Bathroom Decor Ideas";
    app.innerHTML = homeMarkup();
    if (shouldScroll) {
        document.getElementById("stories").scrollIntoView({ behavior: "smooth" });
    } else {
        window.scrollTo(0, 0);
    }
}

function renderPost(postId) {
    const post = posts.find(function (item) { return item.id === postId; });
    siteHero.hidden = true;
    if (!post) {
        renderNotFound();
        return;
    }

    document.title = post.title + " | Bathroom Decor Ideas";
    app.innerHTML = "<div class='article-shell'>" +
        "<a class='back-button' href='#' data-route='home'>&larr; All bathroom ideas</a>" +
        "<article>" +
            "<header class='article-hero'>" +
                "<p class='post-kicker'>" + post.category + "</p>" +
                "<h1>" + post.title + "</h1>" +
                "<p class='article-meta'>" + post.date + " &middot; " + post.readTime + "</p>" +
            "</header>" +
            "<img class='article-cover' src='" + post.image + "' alt='" + post.alt + "'>" +
            "<div class='article-body'>" + post.content +
                "<div class='article-author'>" +
                    "<img src='" + avatarUrl + "' alt='Bathroom Decor Ideas editor'>" +
                    "<div><strong>Bathroom Decor Ideas</strong><span>Beautiful rituals and thoughtful rooms</span></div>" +
                "</div>" +
            "</div>" +
        "</article>" +
    "</div>";
    window.scrollTo(0, 0);
}

function renderPage(pageId) {
    const page = pages[pageId];
    siteHero.hidden = true;
    if (!page) {
        renderNotFound();
        return;
    }
    document.title = page.title + " | Bathroom Decor Ideas";
    app.innerHTML = "<div class='page-shell'>" +
        "<a class='back-button' href='#' data-route='home'>&larr; Back home</a>" +
        "<article class='page-card'><p class='post-kicker'>Bathroom Decor Ideas</p><h1>" + page.title + "</h1>" + page.content + "</article>" +
    "</div>";
    window.scrollTo(0, 0);
}

function renderNotFound() {
    siteHero.hidden = true;
    document.title = "Page Not Found | Bathroom Decor Ideas";
    app.innerHTML = "<div class='not-found'><p class='section-kicker'>404</p><h1>That room could not be found.</h1><p>The page may have moved, but there are more bathroom ideas waiting at home.</p><a class='back-button' href='#' data-route='home'>&larr; Return home</a></div>";
    window.scrollTo(0, 0);
}

function routeFromHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) {
        renderHome(false);
    } else if (pages[hash]) {
        renderPage(hash);
    } else {
        renderPost(hash);
    }
}

function goHome(scrollToStories) {
    if (window.location.hash) {
        history.pushState(null, "", window.location.pathname + window.location.search);
    }
    renderHome(Boolean(scrollToStories));
}

document.addEventListener("click", function (event) {
    const link = event.target.closest("[data-route]");
    if (!link) return;
    const route = link.dataset.route;
    const id = link.dataset.id;
    event.preventDefault();
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    if (route === "home") {
        goHome(link.classList.contains("hero-button"));
    } else if (id && window.location.hash.slice(1) !== id) {
        window.location.hash = id;
    } else if (route === "page") {
        renderPage(id);
    } else if (route === "post") {
        renderPost(id);
    }
});

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", routeFromHash);
window.addEventListener("popstate", routeFromHash);
document.getElementById("year").textContent = new Date().getFullYear();
routeFromHash();
