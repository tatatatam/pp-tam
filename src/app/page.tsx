// app/page.js - no directives needed
import Container from "@mui/material/Container";
import TopBanner from "./containers/top-banner";
import Navbar from "./containers/nav";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Container maxWidth="md">
        <section>
          <h1>Profile</h1>
          <p>
            Hello, I&apos;m [Your Name]. I&apos;m a [Your Profession] with a
            passion for [Your Interests].
          </p>
          <p>
            I have [X] years of experience in [Your Field] and have worked with
            [Notable Companies/Clients].
          </p>
          <p>Contact me at [Your Email] for inquiries.</p>
        </section>
        <section>
          <h1>About Me</h1>
          <p>
            I&apos;m a passionate and driven individual who loves [Your
            Interests/Hobbies].
          </p>
          <p>[More About Your Background, Education, and Personal Interests]</p>
        </section>
      </Container>
    </main>
  );
}
