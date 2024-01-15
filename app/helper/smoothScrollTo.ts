const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY,
      left: 0,
      behavior: "smooth",
    });
  }
};

export { smoothScrollTo };
