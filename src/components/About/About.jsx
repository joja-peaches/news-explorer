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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          officiis, corporis ad iste commodi incidunt consequatur fugit
          consequuntur voluptate, neque eveniet? Fuga hic velit eaque, eos amet
          ad sequi modi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia cupiditate a saepe. Sit culpa perspiciatis sed,
          accusantium tenetur, aspernatur dolorum laudantium voluptate totam
          laboriosam aliquam? Necessitatibus laborum aliquid nobis. Doloribus?
          Lore
        </p>
      </section>
    </article>
  );
}

export default About;
