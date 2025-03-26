"use client";

import "@fontsource/rubik/latin.css";
import "@fontsource/raleway/latin.css";
import "@fontsource/red-hat-text/latin.css";
import "@fontsource/barlow/latin.css";
import "@fontsource/heebo/latin.css";
import "@fontsource/open-sans/latin.css";
import "@fontsource/mukta/latin.css";
import "@/assets/vendors/tolak-icons/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "react-circular-progressbar/dist/styles.css";
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/icofont/icofont.min.css";
import "@/assets/vendors/tolak-icons-two/style.css";
import ThemeProvider from "@/Provider/ThemeProvider";
import "aos/dist/aos.css";
import "@/assets/css/tolak.css";
import "@/assets/css/tolak-dark.css";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Precompute the theme state to avoid mismatches between SSR and CSR
  const themeState = useMemo(() => {
    return ["/Appxperts-dark", "/home2-dark", "/home3-dark", "/home4-dark"].includes(pathname)
      ? "dark"
      : "light";
  }, [pathname]);

  // Precompute the className to avoid hydration mismatch
  const computedClassName = useMemo(() => {
    const homeMap = {
      "/home5": "home5",
      "/home5-one": "home5",
      "/home6": "home6",
      "/home6-one": "home6",
      "/home7": "home7",
      "/home7-one": "home7",
      "/home-boxed": "boxed-wrapper",
    };

    return `custom-cursor ${homeMap[pathname] || ""} ${themeState}`;
  }, [pathname, themeState]);

  return (
    <html lang="en">
      <body className={computedClassName}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
