import "./style.css";

const Education = () => {
  return (
    <div className="education">
      <div className="education__item">
        <div className="education__image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pup.png"
            alt="Polytechnic University of the Philippines logo"
            className="education__image"
          />
        </div>
        <div className="education__detail-wrapper">
          <h3 className="education__school">Polytechnic University of the Philippines</h3>
          <p className="education__course">Bachelor of Science in Information Technology</p>
          <p className="education__year">2015-2019</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
