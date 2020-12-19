import Footer from "components/Footer";
import Nav from "components/Nav";
import FixedLinks from "components/FixedLinks";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <Nav />
    <FixedLinks />
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
