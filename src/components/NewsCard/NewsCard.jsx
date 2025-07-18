import "./NewsCard.css";
import georgia from "../../assets/georgia-lloyd-headshot.jpg";
import bookmark from "../../assets/bookmark.svg";
function NewsCard() {
  return (
    <section className="news-card">
      {/* <img src={bookmark} alt="Simple lined image for bookmarking" className="news-card___save-button" /> */}
      <button className="news-card__save-button" />
      <button className="news-card__sign-in-button">
        Sign in to save articles
      </button>
      <img src={georgia} alt="" className="news-card__image" />
      <div className="news-card__container">
        <p className="news-card__container__date">Date</p>
        <h3 className="news-card__container__title">
          Grand Teton Renews Historic Crest Trail Long Long Title
        </h3>
        <p className="news-card__container__text">
          “The linking together of the Cascade and Death Canyon trails, at their
          heads, took place on October 1, 1933, and marked the first step in the
          realization of a plan whereby the hiker will be able to traverse the
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah
        </p>
        <h4 className="news-card__container__source">National Geographic</h4>
      </div>
    </section>
  );
}

export default NewsCard;
