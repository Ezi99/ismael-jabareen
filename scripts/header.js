class Header {
  _headerElement = document.querySelector(".header");
  _headerSentinel = document.querySelector(".header-sentinel");

  addSelectSectionHandler(handler) {
    this._headerElement.addEventListener("click", function (event) {
      event.preventDefault();
      const link = event.target.closest(".nav-links a");
      if (link) {
        handler(link.getAttribute("href"));
      }
    });
  }

  _stickyHeader(entries) {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      this._headerElement.classList.add("sticky");
    } else {
      this._headerElement.classList.remove("sticky");
    }
  }

  ActivateStickyObserver() {
    const headerObserver = new IntersectionObserver(
      this._stickyHeader.bind(this),
      {
        root: null,
        threshold: 0,
        rootMargin: `-${this._headerSentinel.getBoundingClientRect().height}px`,
      }
    );

    headerObserver.observe(this._headerSentinel);
  }
}

export default new Header();
