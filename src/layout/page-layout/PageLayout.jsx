import Navbar from "../navbar/Navbar";
import Footer from "../footer/components/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout;