import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="home">
          <div className="home__salute">
            <div>
              <div className="thick-line"></div>
              <div className="rrss">
                <a
                  href="https://github.com/fedeemilo"
                  className="github"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/fede-milone/"
                  className="linkedin"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href=""></a>
              </div>
            </div>
            <h1>
              <span>Hi there, I'm Fede.</span>
              <span>
                FullStack{" "}
                <span className="milo-red">Web Developer.</span>
              </span>
              <span></span>
            </h1>
          </div>
        </div>
        <div className="portfolio">
          <Portfolio />
        </div>
      </div>
    </Layout>
  );
}
