import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    
    <div className="layout">
      <Header />
        <main className="container">{children}</main>
      <Footer />
      </div>
    
  );
}