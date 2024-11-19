class Header {
  _headerElement = document.querySelector(".header");
  _headerSentinel = document.querySelector(".header-sentinel");
  _navLinks = document.querySelector(".nav-links");
  _hamburgerBtn = document.querySelector(".hamburger");

  addSelectSectionHandler(handler) {
    this._headerElement.addEventListener("click", (event) => {
      event.preventDefault();
      const link = event.target.closest(".nav-links a");
      if (link) {
        if (this._navLinks.classList.contains("show")) {
          this._navLinks.classList.remove("show");
        }
        handler(link.getAttribute("href"));
      }
    });
  }

  addClickHamburgerHandler(handler) {
    this._hamburgerBtn.addEventListener("click", (event) => handler());
  }

  toggleHiddenNavLinks() {
    this._navLinks.classList.toggle("show");
  }
}

export default new Header();
