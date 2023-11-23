import Container from "../../Shared/Container";
import Icons from "../Icons/Icons";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <Container>
        <footer className="footer p-10  text-base-content">
          <aside>
            <h1 className="text-4xl font-cinzel font-bold  ">
              Sur<span className="text-primary_Colors text-5xl">v</span>ey
            </h1>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title text-primary_Colors ">
              Services
            </header>
            <a className="link hover:text-primary_Colors link-hover   ">
              Branding
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Design
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Marketing
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Advertisement
            </a>
          </nav>
          <nav>
            <header className="footer-title text-primary_Colors ">
              Company
            </header>
            <a className="link hover:text-primary_Colors link-hover  ">
              About us
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Contact
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">Jobs</a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Press kit
            </a>
          </nav>
          <nav>
            <header className="footer-title text-primary_Colors ">Legal</header>
            <a className="link hover:text-primary_Colors link-hover  ">
              Terms of use
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Privacy policy
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Cookie policy
            </a>
          </nav>
          <nav>
            <header className="footer-title text-primary_Colors ">Legal</header>
            <a className="link hover:text-primary_Colors link-hover  ">
              Terms of use
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Privacy policy
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Cookie policy
            </a>
          </nav>
          <nav>
            <header className="footer-title text-primary_Colors ">Legal</header>
            <a className="link hover:text-primary_Colors link-hover  ">
              Terms of use
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Privacy policy
            </a>
            <a className="link hover:text-primary_Colors link-hover  ">
              Cookie policy
            </a>
          </nav>
        </footer>
        <div className="text-center text-3xl  mx-auto w-[400px] text-primary_Colors my-10">
          <Icons></Icons>
        </div>
        <div className="footer footer-center p-4  text-base-content border-t">
          <aside>
            <p className="">
              Copyright © 2023 - All right reserved by ACME Industries Ltd
            </p>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
