const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Md Tahmidur Rahman is an exceptional marketing manager. His creative strategies and leadership skills have been vital in ensuring successful collaborations between our teams. Highly recommended for any marketing role. "
              </span>
              <span className="person">Rayhan Hossen</span>
              <span className="job">Software Development Lead</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " He is an outstanding marketing manager who understands visual storytelling. His guidance has been invaluable in creating compelling content. His passion, professionalism, and collaborative approach make him a pleasure to work with. Highly recommended. "
              </span>
              <span className="person">Fahad Ahmed Jan</span>
              <span className="job">Creative Director</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
