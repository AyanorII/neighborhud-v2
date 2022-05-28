import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
