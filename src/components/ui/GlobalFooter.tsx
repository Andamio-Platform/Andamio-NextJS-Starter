import Image from "next/image";

export default function GlobalFooter() {
  return (
    <footer className="footer px-24 py-10 bg-primary text-primary-content mt-12">
      <Image src="/andamio.png" width={150} height={150} alt="andamio" className="rounded-full" />
      <nav>
        <header className="footer-title">Andamio</header>
        <a className="link link-hover">Discord</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Whitepaper</a>
        <a className="link link-hover">Roadmap</a>
        <a className="link link-hover">AndamioJS Documentation</a>
      </nav>
      <nav>
        <header className="footer-title">ODIN</header>
        <a className="link link-hover">Discord</a>
        <a className="link link-hover">Linktree</a>
      </nav>
      <nav>
        <header className="footer-title">Gimbalabs</header>
        <a className="link link-hover">gimbalabs.com</a>
        <a className="link link-hover">Discord</a>
        <a className="link link-hover">Twitter</a>
      </nav>
    </footer>
  );
}
