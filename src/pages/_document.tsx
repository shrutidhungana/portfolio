import { Html, Head, Main, NextScript } from "next/document";

const noFlashThemeScript = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      var favicon = document.querySelector("link[rel='icon'][type='image/svg+xml']");
      if (favicon) favicon.href = "/favicon-dark.svg";
    }
  } catch (e) {}
})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
