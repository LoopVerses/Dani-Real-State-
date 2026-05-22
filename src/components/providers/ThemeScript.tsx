import { THEME_STORAGE_KEY } from "@/lib/theme";

/** Runs before paint to avoid theme flash */
export default function ThemeScript() {
  const script = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var d=document.documentElement;var t=localStorage.getItem(k);if(t==='light'||t==='dark'){d.setAttribute('data-theme',t);}else{d.setAttribute('data-theme','dark');}d.style.colorScheme=d.getAttribute('data-theme')||'dark';}catch(e){document.documentElement.setAttribute('data-theme','dark');document.documentElement.style.colorScheme='dark';}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
