export default {
  mounted: (el: HTMLImageElement): void => {
    function loadImage() {
      if (el.nodeName !== "IMG") return;
      el.src = el.dataset.url || "/images/covers/placeholder.png";
    }

    function handleIntersect(
      entries: Array<IntersectionObserverEntry>,
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0,
        rootMargin: "0px",
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    createObserver();
  },
};
