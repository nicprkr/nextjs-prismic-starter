import Footer from "components/Footer";
import Nav from "components/Nav";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <Nav />
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
