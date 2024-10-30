"use strict";
(self["webpackChunkblockons"] = self["webpackChunkblockons"] || []).push([[948],{

/***/ 9948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createTooltipComponent: () => (/* binding */ createTooltipComponent),
  initializeTooltips: () => (/* binding */ initializeTooltips)
});

// EXTERNAL MODULE: ./node_modules/@wordpress/i18n/build-module/index.js
var build_module = __webpack_require__(9575);
;// CONCATENATED MODULE: ./src/backend/helpers.js


/*
 * Convert Text to slug
 */
var blockonsConvertToSlug = function blockonsConvertToSlug(text) {
  return text.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "_");
};
function blockonsStringReplaceForLink(inputString) {
  return inputString.replace(/\((.*?)\[\*?(https?:\/\/[^\]]+)\]\)/g, function (match, linkText, url) {
    // Check if the original text contains the star indicating a new tab target
    var hasStar = match.includes("[*");
    // Construct the anchor tag with or without the target="_blank" attribute
    return "<a href=\"".concat(url, "\"").concat(hasStar ? ' target="_blank"' : "", ">").concat(linkText, "</a>");
  });
}

/*
 * Setting for the Blocks settings displayed in the admin dashboard
 */
var blockListSettings = {
  accordions: {
    desc: (0,build_module.__)("Display content in smaller areas with collapsible lists", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  count_down_timer: {
    desc: (0,build_module.__)("Add a count down block for specials, sales, events, etc", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  content_selector: {
    desc: (0,build_module.__)("Let your viewers select which content they want to read.", "blockons"),
    pluginSpecific: false,
    isNew: (0,build_module.__)("NEW", "blockons")
  },
  content_toggler: {
    desc: (0,build_module.__)("Show / Hide sections of long content with a toggle button", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  icon_list: {
    desc: (0,build_module.__)("Visually, more attractive list items with icons", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  image_comparison: {
    desc: (0,build_module.__)("Use a neat action slider to compare 2 images", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  image_gallery: {
    desc: (0,build_module.__)("A more advanced gallery with 3 beautiful layouts", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  image_carousel: {
    desc: (0,build_module.__)("Display multiple images in a neat carousel", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  line_heading: {
    desc: (0,build_module.__)("More advanced and customizable line headings", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  marketing_button: {
    desc: (0,build_module.__)("An attractive, more trendy customizable call-to-action", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  progress_bars: {
    desc: (0,build_module.__)("Show progress with beautiful, animated bars", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  slider: {
    desc: (0,build_module.__)("A slider to display custom content or WC products", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  search: {
    desc: (0,build_module.__)("A search bar/icon with drop down or popup search", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  tabs: {
    desc: (0,build_module.__)("Display your site information in tabbed content", "blockons"),
    pluginSpecific: false,
    isNew: (0,build_module.__)("NEW", "blockons")
  },
  // table_of_contents: {
  // 	desc: __("Display a neat table of contents", "blockons"),
  // 	pluginSpecific: false,
  // 	isNew: __("NEW", "blockons"),
  // },
  testimonials: {
    desc: (0,build_module.__)("Display client testimonials in a slider or carousel", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  video_slider: {
    desc: (0,build_module.__)("Display multiple videos in a neat video slider", "blockons"),
    pluginSpecific: false,
    isNew: false
  },
  wc_account_icon: {
    desc: (0,build_module.__)("A simple icon linking to a users WC Account", "blockons"),
    pluginSpecific: "WooCommerce",
    isNew: false
  },
  wc_featured_product: {
    desc: (0,build_module.__)("Display a WC featured product with multple layouts", "blockons"),
    pluginSpecific: "WooCommerce",
    isNew: false
  },
  wc_mini_cart: {
    desc: (0,build_module.__)("A simple WC cart icon with a full cart drop down", "blockons"),
    pluginSpecific: "WooCommerce",
    isNew: false
  }
};
var blockonsGroupSettings = function blockonsGroupSettings() {
  var groupBtns = document.querySelectorAll(".blockons-group-btn");
  if (groupBtns) {
    groupBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var btnParent = btn.parentElement;
        groupBtns.forEach(function (btnItem) {
          btnItem.parentElement.removeAttribute("id", "openGroup");
          btnItem.parentElement.classList.remove("blockons-show");
        });

        // Add / Remove .blockons-show class
        if (btnParent.classList.contains("blockons-show")) {
          btnParent.removeAttribute("id", "openGroup");
          btnParent.classList.remove("blockons-show");
        } else {
          btnParent.setAttribute("id", "openGroup");
          btnParent.classList.add("blockons-show");
        }
      });
    });
  }

  // Close on click outside
  window.addEventListener("click", function (e) {
    var openGroup = document.getElementById("openGroup");
    if (openGroup) {
      if (!e.target == openGroup || !openGroup.contains(e.target)) {
        openGroup.removeAttribute("id");
        openGroup.classList.remove("blockons-show");
      }
    }
  });
};
;// CONCATENATED MODULE: ./src/frontend/extensions/tooltips.js

var isPremium = Boolean(blockonsFrontendObj.isPremium);
function createTooltipComponent(theme, title, text, image, pcolor, pfcolor) {
  var tooltipComponent = document.createElement("div");
  tooltipComponent.classList.add("blockons-tooltip");
  if (isPremium && theme === "custom") {
    tooltipComponent.style.backgroundColor = pcolor;
    tooltipComponent.style.color = pfcolor;
  }
  if (isPremium && tooltipComponent) {
    tooltipComponent === null || tooltipComponent === void 0 || tooltipComponent.classList.add(theme);
  } else {
    tooltipComponent === null || tooltipComponent === void 0 || tooltipComponent.classList.add("one");
  }
  tooltipComponent.innerHTML = "\n\t\t<div class=\"blockons-tooltip-popup\">\n\t\t\t".concat(isPremium && image ? "<img src=\"".concat(image, "\" alt=\"").concat(title, "\" />") : "", "\n\n\t\t\t<h6 class=\"blockons-tooltip-title\">").concat(title, "</h6>\n\t\t\t<p class=\"blockons-tooltip-text\">").concat(isPremium ? blockonsStringReplaceForLink(text) : text, "</p>\n\n\t\t\t<span class=\"blockons-tooltip-angle\" ").concat(isPremium && theme === "custom" ? "style='border-top-color: " + pcolor + "'" : "", "></span>\n\t\t</div>");
  return tooltipComponent;
}
function initializeTooltips() {
  var tooltipDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var blockonsTooltips = document.querySelectorAll(".blockons-inline-tooltip");
  if (blockonsTooltips.length > 0) {
    blockonsTooltips.forEach(function (tooltip) {
      var style = tooltip.getAttribute("data-style") || tooltipDefaults.style;
      var theme = tooltip.getAttribute("data-theme") || tooltipDefaults.theme;
      var title = tooltip.getAttribute("data-title");
      var text = tooltip.getAttribute("data-text");
      var icon = tooltip.getAttribute("data-icon") || "";
      var image = tooltip.getAttribute("data-image") || "";
      var color = tooltip.getAttribute("data-color") || tooltipDefaults.color;
      var fcolor = tooltip.getAttribute("data-fcolor") || tooltipDefaults.fcolor;
      var pcolor = tooltip.getAttribute("data-pcolor") || tooltipDefaults.pcolor;
      var pfcolor = tooltip.getAttribute("data-pfcolor") || tooltipDefaults.pfcolor;
      if (title || text) {
        var tooltipComponent = createTooltipComponent(theme, title, text, image, pcolor, pfcolor);
        tooltip.append(tooltipComponent);
        tooltip.classList.add(style);
        if (isPremium && fcolor) tooltip.style.color = fcolor;
        if (isPremium && style !== "highlight" && color) tooltip.style.borderBottomColor = color;
        if (isPremium && icon) {
          tooltip.classList.add("icon");
          var tooltipIcon = document.createElement("span");
          tooltipIcon.classList.add("tooltip-icon", icon.split(" ")[0], icon.split(" ")[1]);
          if (color) tooltipIcon.style.color = color;
          tooltip.appendChild(tooltipIcon);
        }
        tooltip.addEventListener("mouseover", function () {
          tooltip.classList.add("active");
        });
        tooltip.addEventListener("mouseout", function () {
          tooltip.classList.remove("active");
        });
      }
    });
  }
}

/***/ })

}]);