import "./About.css";
import georgia from "../../assets/georgia-lloyd-headshot.jpg";

function About() {
  return (
    <article className="about">
      <img
        src={georgia}
        alt="Headshot of Georgia Lloyd"
        className="about__portrait"
      />
      <section className="about__description">
        <h1 className="about__title">About the author</h1>
        <p className="about__text">
          Georgia Lloyd is a full stack web developer with a love for clean
          design and beautiful aesthetics. With a background in event and
          fashion photography, Georgia recently dove into the world of tech to
          blend her artistic flair with her desire to build helpful, usable
          products.
          <br />
          <br />
          She currently resides just outside Austin, Texas and spends her free
          time with her cat and dog, playing piano, and making art.
        </p>
      </section>
    </article>
  );
}

export default About;
