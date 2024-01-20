function scrollDown() {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollAmount = documentHeight * 0.2;

  document.documentElement.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
}
