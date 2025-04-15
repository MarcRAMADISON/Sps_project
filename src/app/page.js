import Image from "next/image";
import styles from "./page.module.css";
import MenuBar from "./components/menuBar/page";
import Welcome from "./components/welcome/page";
import Services from "./components/services/page";
import Presentation from "./components/presentation/page";
import Devis from "./components/devis/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <MenuBar/>
      <Welcome/>
      <Services/>
      <Presentation/>
      <Devis/>
      <Footer/>
    </div>
  );
}
