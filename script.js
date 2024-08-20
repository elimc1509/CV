document.addEventListener('DOMContentLoaded', function () {
    var tooltips = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    var tooltipList = tooltips.map(function (tooltip) {
        return new bootstrap.Tooltip(tooltip, {
            placement: 'bottom'
        });
    });
});

// Texte SLIDES 1
$(document).ready(function() {
  let togg1 = $("#togg1");
  let d1 = $("#d1");

  // Vérifiez si l'état est stocké dans le localStorage
  let isD1Visible = localStorage.getItem("isD1Visible") === "true";

  // Appliquez l'état initial
  d1.slideToggle(0);  // Utilisez slideToggle pour initialiser correctement l'état
  togg1.toggleClass("fa-rotate-180", isD1Visible); // Ajoutez une classe pour inverser la flèche

  togg1.click(function() {
      d1.slideToggle();
      togg1.toggleClass("fa-rotate-180"); // Inverse la classe pour l'effet de rotation
      // Enregistrez l'état dans le localStorage
      localStorage.setItem("isD1Visible", d1.is(":visible"));
  });
});


// Texte SLIDES 2
$(document).ready(function() {
  let togg2 = $("#togg2");
  let d2 = $("#d2");

  // Vérifiez si l'état est stocké dans le localStorage
  let isD2Visible = localStorage.getItem("isD2Visible") === "true";

  // Appliquez l'état initial
  d2.slideToggle(0);  // Utilisez slideToggle pour initialiser correctement l'état
  togg2.toggleClass("fa-rotate-180", isD2Visible); // Ajoutez une classe pour inverser la flèche

  togg2.click(function() {
      d2.slideToggle();
      togg2.toggleClass("fa-rotate-180"); // Inverse la classe pour l'effet de rotation
      // Enregistrez l'état dans le localStorage
      localStorage.setItem("isD2Visible", d2.is(":visible"));
  });
});

// Texte SLIDES 3
$(document).ready(function() {
  let togg3 = $("#togg3");
  let d3 = $("#d3");

  // Vérifiez si l'état est stocké dans le localStorage
  let isD3Visible = localStorage.getItem("isD3Visible") === "true";

  // Appliquez l'état initial
  d3.slideToggle(0);  // Utilisez slideToggle pour initialiser correctement l'état
  togg3.toggleClass("fa-rotate-180", isD3Visible); // Ajoutez une classe pour inverser la flèche

  togg3.click(function() {
      d3.slideToggle();
      togg3.toggleClass("fa-rotate-180"); // Inverse la classe pour l'effet de rotation
      // Enregistrez l'état dans le localStorage
      localStorage.setItem("isD3Visible", d3.is(":visible"));
  });
});

// Texte SLIDES 4
$(document).ready(function() {
  let togg4 = $("#togg4");
  let d4 = $("#d4");

  // Vérifiez si l'état est stocké dans le localStorage
  let isD4Visible = localStorage.getItem("isD4Visible") === "true";

  // Appliquez l'état initial
  d4.slideToggle(0);  // Utilisez slideToggle pour initialiser correctement l'état
  togg4.toggleClass("fa-rotate-180", isD4Visible); // Ajoutez une classe pour inverser la flèche

  togg4.click(function() {
      d4.slideToggle();
      togg4.toggleClass("fa-rotate-180"); // Inverse la classe pour l'effet de rotation
      // Enregistrez l'état dans le localStorage
      localStorage.setItem("isD4Visible", d4.is(":visible"));
  });
});

// Texte SLIDES 5
$(document).ready(function() {
  let togg5 = $("#togg5");
  let d5 = $("#d5");

  // Vérifiez si l'état est stocké dans le localStorage
  let isD5Visible = localStorage.getItem("isD3Visible") === "true";

  // Appliquez l'état initial
  d5.slideToggle(0);  // Utilisez slideToggle pour initialiser correctement l'état
  togg5.toggleClass("fa-rotate-180", isD5Visible); // Ajoutez une classe pour inverser la flèche

  togg5.click(function() {
      d5.slideToggle();
      togg5.toggleClass("fa-rotate-180"); // Inverse la classe pour l'effet de rotation
      // Enregistrez l'état dans le localStorage
      localStorage.setItem("isD1Visible", d5.is(":visible"));
  });
});