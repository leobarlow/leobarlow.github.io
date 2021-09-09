const emailElement = document.getElementById("email-anchor");
emailElement.onclick = () => {
  emailElement.href = [
    "om",
    ".c",
    "low",
    "bar",
    "o@s",
    ":le",
    "lto",
    "mai",
  ]
    .reverse()
    .join("");
  return true;
};
