function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = page.id === pageId ? "block" : "none";
    });
}
