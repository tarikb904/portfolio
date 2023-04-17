const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Md Tahmidur Rahman</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-tahmidur-rahman-378790214/"
          >
            Tahmid
          </a>
        </span>
        <ul className="social">
              <li>
                <a href="https://www.linkedin.com/in/md-tahmidur-rahman-378790214/">
                  <i class="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tahmid_tarik/">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Tarik1200pk">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yours.tarik/">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
            </ul>
      </div>
    </section>
  );
};
export default Copyright;
