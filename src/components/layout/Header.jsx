import Navbar from "./Navbar";
<<<<<<< HEAD

function Header() {
  return (
    <>
      <Navbar />
    </>
=======
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Topbar />
      <Navbar />
    </header>
>>>>>>> origin/ujjwal_dev
  );
}