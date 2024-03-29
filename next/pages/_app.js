import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/cyberbtn.scss";
import "../styles/bio.scss";
import "../styles/ButtonForm.scss";
import "../styles/contact.scss";
import "../styles/footer.scss";
import "../styles/home.scss";
import "../styles/HoverInput.scss";
import "../styles/ImproveForm.scss";
import "../styles/landing.scss";
import "../styles/Navigation.scss";
import "../styles/portfolio.scss";
import "../styles/PostProject.scss";
import "../styles/tech.scss";
import "../styles/MoneyApp.scss";
import Navigation from "../components/Navigation";
function MyApp({ Component, pageProps }) {
  return (
    // <Navigation>
    <Component {...pageProps} />
    // </Navigation>
  );
}

export default MyApp;
