import header from "./header.js";

header.addSelectSectionHandler(function (sectionName) {
  const section = document.querySelector(sectionName);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});

header.addClickHamburgerHandler(() => header.toggleHiddenNavLinks());
