import { useEffect, useState } from "react";
import githubMarkDark from "../assets/github-mark.svg";
import githubMarkWhite from "../assets/github-mark-white.svg";

export default function Nav() {
  const [theme, setTheme] = useState("light");
  const githubMark = theme === "light" ? githubMarkDark : githubMarkWhite;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          Home
        </a>
      </div>
      <div className="flex-none">
        <a
          className="btn btn-square btn-ghost"
          href="https://github.com/yoonthegoon/yoonthegoon.github.io"
        >
          {/* FIXME: Type {} is not assignable to type string | undefined */}
          <img src={githubMark} alt="Github Mark" width="24px" />
        </a>
      </div>
    </nav>
  );
}
