import StoreProvider from "../contexts/storeContext";
import "../styles/global.css";



function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
