import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Services from "../components/service";
import Projects from "../components/project";
import Peoples from "../components/people";
import Customers from "../components/customer";
import Blogs from "../components/blog";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Innosoft KMUTT</title>
        <meta name="description" content="Innosoft KMUTT" />
        <link rel="icon" type="image/png" href="/img/innosoft-logo.png" />
      </Head>

      <Navbar />

      <div className="py-8"></div>

      <Hero />

      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      <div className="py-8"></div>

      <Services />

      {/* <div className="py-8"></div> */}

      <Projects />

      <Peoples />

      <Customers />

      <Blogs />

      <div className="py-8"></div>
      {/* <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      {/*  */}

      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />  */}

      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
