const phoneInput = document.getElementsByClassName("phone");

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value;

  value = value.replace(/\D/g, "");

  if (value.length > 11) value = value.slice(0, 11);

  let formatted = "+56 ";

  if (value.length > 0) {
    formatted += "(" + value.substring(0, 3);
  }

  if (value.length >= 4) {
    formatted += ") " + value.substring(3, 6);
  }

  if (value.length >= 7) {
    formatted += "-" + value.substring(6, 9);
  }

  e.target.value = formatted;
});
