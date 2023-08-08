import ChangePageIcon from "./components/ChangePageIcon";
import AboutSection from "./pages/AboutSection";
import ContactSection from "./pages/ContactSection";
import MainSection from "./pages/MainSection";
import ProjectsSection from "./pages/ProjectsSection";

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
