// NetlifyCMS
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Add prefetch links or speculation rules
document.addEventListener("DOMContentLoaded", (_) => {
  if (
    HTMLScriptElement.supports &&
    HTMLScriptElement.supports("speculationrules")
  ) {
    const specScript = document.createElement("script");
    specScript.type = "speculationrules";
    const specRules = {
      prefetch: [
        {
          source: "document",
          where: { href_matches: "/*" },
        },
      ],
    };
    specScript.textContent = JSON.stringify(specRules);
    document.body.append(specScript);
  } else {
    Array.from(document.querySelectorAll("a"))
      .map((a) => a.href)
      .filter((a) => a.startsWith(document.location.origin))
      .forEach((href) => {
        const linkElem = document.createElement("link");
        linkElem.rel = "prefetch";
        linkElem.href = href;
        document.head.append(linkElem);
      });
  }
});
