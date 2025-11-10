import { lazy, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  // Waitlist form state
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_SCRIPT_URL as string, {
        method: "POST",
        body: new URLSearchParams({
          email: email,
        }),
      });
      
      const data = await response.text();
      console.log("Response:", data); // Check console output
      
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to join waitlist");
    }
  };

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/* Waitlist Section */}
      <section className="w-full flex justify-center my-12">
        <div className="w-full max-w-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-md px-6 py-8 flex flex-col items-center">
          <h2 id="waitlist" className="text-2xl font-semibold mb-1 text-blue-900 text-center">
            Join the Waitlist
          </h2>
          <p className="mb-5 text-gray-500 text-center text-base">
            Be the first to know when we launch!
          </p>
          {submitted ? (
            <div
              style={{
                color: "#27ae60",
                background: "rgba(39, 174, 96, 0.08)",
                border: "1px solid #27ae60",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                fontWeight: 600,
                fontFamily: "'Motiva Sans Bold', serif",
                fontSize: "20px",
                textAlign: "center",
                marginTop: "0.5rem",
                boxShadow: "0 2px 8px 0 rgba(39, 174, 96, 0.08)",
              }}
            >
              Thank you for joining the waitlist!
            </div>
          ) : (
            <form
              className="w-full flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
            >
              <input
                className="flex-1 border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-800 transition"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <button
                type="submit"
                style={{
                  background: "#2E186A",
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "1rem 2.5rem",
                  fontWeight: 600,
                  fontFamily: "'Motiva Sans Bold', serif",
                  fontSize: "21px",
                  boxShadow: "0 2px 8px 0 rgba(24, 33, 109, 0.08)",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.background = "#18216d")}
                onMouseOut={e => (e.currentTarget.style.background = "#2E186A")}
              >
                Join
              </button>
            </form>
          )}
        </div>
      </section>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <MiddleBlock
        id="middle" // add this id so the header can scroll to it
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
