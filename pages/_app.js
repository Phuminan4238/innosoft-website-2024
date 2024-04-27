import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../components/LanguageContext"; // Import LanguageProvider
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        {/* Wrap your application with LanguageProvider */}
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
