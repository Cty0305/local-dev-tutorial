!(function () {
  var callback,
    nav = document.querySelector(".header__navigation"),
    langSwitcher = document.querySelector(".header__language-switcher"),
    search = document.querySelector(".header__search"),
    allToggles = document.querySelectorAll(".header--toggle"),
    navToggle = document.querySelector(".header__navigation--toggle"),
    langToggle = document.querySelector(".header__language-switcher--toggle"),
    searchToggle = document.querySelector(".header__search--toggle"),
    closeToggle = document.querySelector(".header__close--toggle"),
    allElements = document.querySelectorAll(
      ".header--element, .header--toggle"
    ),
    emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle("hide");
    }),
      nav.classList.toggle("open"),
      navToggle.classList.toggle("open"),
      closeToggle.classList.toggle("show");
  }
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle("hide");
    }),
      langSwitcher.classList.toggle("open"),
      langToggle.classList.toggle("open"),
      closeToggle.classList.toggle("show");
  }
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle("hide");
    }),
      search.classList.toggle("open"),
      searchToggle.classList.toggle("open"),
      closeToggle.classList.toggle("show");
  }
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove("hide", "open");
    }),
      closeToggle.classList.remove("show");
  }
  function toggleDisabled() {
    document
      .querySelectorAll("#email-prefs-form .item")
      .forEach(function (item) {
        var emailSubItemInput = item.querySelector("input");
        emailGlobalUnsub.checked
          ? (item.classList.add("disabled"),
            emailSubItemInput.setAttribute("disabled", "disabled"),
            (emailSubItemInput.checked = !1))
          : (item.classList.remove("disabled"),
            emailSubItemInput.removeAttribute("disabled"));
      });
  }
  (callback = function () {
    document.body &&
      (langSwitcher && langToggle.addEventListener("click", toggleLang),
      navToggle && navToggle.addEventListener("click", toggleNav),
      searchToggle && searchToggle.addEventListener("click", toggleSearch),
      closeToggle && closeToggle.addEventListener("click", closeAll),
      emailGlobalUnsub &&
        emailGlobalUnsub.addEventListener("change", toggleDisabled));
  }),
    ["interactive", "complete"].indexOf(document.readyState) >= 0
      ? callback()
      : document.addEventListener("DOMContentLoaded", callback);
})();
//# sourceURL=https://cdn2.hubspot.net/hub/40046267/hub_generated/template_assets/175429106973/1723880639358/lalamove/js/main.js
