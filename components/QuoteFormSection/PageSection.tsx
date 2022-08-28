function PageSection({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <!-- prort page section --> */}
      <section className="prort_page_sec">
        <div className="container">
          {/* <!-- heading --> */}
          <div className="row">
            <div className="col_6">
              <div className="heading">
                <h1>GET CUSTOM QUOTE</h1>
              </div>
            </div>
            <div className="col_6">
              <p className="heading_text">
                All of our packaging solutions are designed, printed &amp;
                manufactured in USA in our in-house vicinity. We don’t outsource
                any service, material or labor. Due to all these factors, Emenac
                Packaging provides custom boxes and custom printed packaging
                solutions at most competitive &amp; reasonable rates. No one can
                beat our quote for sure.
              </p>
            </div>
          </div>
          {/* <!-- quote service --> */}
          <div className="row quote_service">
            <div className="col_3">
              <div className="qs_card">
                <span>
                  <h2>1.</h2>
                </span>
                <div className="qs_card_meta">
                  <h5>Choose Your Style</h5>
                  <p>
                    Select your box style from the available range, from tuck
                    end to mailer and displays all a are available here.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className="qs_card">
                <span>
                  <h2>2.</h2>
                </span>
                <div className="qs_card_meta">
                  <h5>Choose Your Size</h5>
                  <p>
                    Share your box dimensions according to your product size to
                    give it a perfect fit and ensure its protection
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className="qs_card">
                <span>
                  <h2>3.</h2>
                </span>
                <div className="qs_card_meta">
                  <h5>Upload Your Artwork</h5>
                  <p>
                    Upload your design file, or your brand logo, or if you need
                    help in the designing process, we are here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end prort page section --> */}

      {children}

      {/* <!-- quote work section --> */}
      <section className="quote_work_sec">
        <div className="container">
          {/* <!-- heading --> */}
          <div className="row">
            <div className="col_12">
              <h3 className="ws_heading">How we help you?</h3>
            </div>
          </div>
          {/* <!-- work service  --> */}
          <div className="row">
            <div className="col_3">
              <div className=" work_service_card">
                <div className="wsc_img">
                  <img
                    src="/assets/icnImg/design_assistance.webp"
                    alt="design_assistance"
                  />
                </div>
                <div className="work_service_card_meta">
                  <h5>Design Assistance</h5>
                  <p>
                    We have inhouse packaging specialists designer who are ready
                    to assist you with your artwork for free of cost.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className=" work_service_card">
                <div className="wsc_img">
                  <img
                    src="/assets/icnImg/Artwork_Guidance.webp"
                    alt="Artwork_Guidance."
                  />
                </div>
                <div className="work_service_card_meta">
                  <h5>Artwork Guidance.</h5>
                  <p>
                    Before moving forward to the production we will show the
                    final artwork for your approval.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className="work_service_card">
                <div className="wsc_img">
                  <img
                    src="/assets/icnImg/Suitable_Suggestions.webp"
                    alt="Suitable_Suggestions"
                  />
                </div>
                <div className="work_service_card_meta">
                  <h5>Suitable Suggestions</h5>
                  <p>
                    We suggest you the best box style, stock and box size
                    according to your product to make sure the safety of your
                    product.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className=" work_service_card">
                <div className="wsc_img">
                  <img
                    src="/assets/icnImg/design_mockups.webp"
                    alt="design_mockups."
                  />
                </div>
                <div className="work_service_card_meta">
                  <h5>Design Mock-ups</h5>
                  <p>
                    We will make realistic 3D mockup according to your artwork,
                    you can use on your social media for the branding purpose.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className=" work_service_card">
                <div className="wsc_img">
                  <img
                    src="/assets/icnImg/Timely_Alterations.webp"
                    alt="Timely_Alterations"
                  />
                </div>
                <div className="work_service_card_meta">
                  <h5>Timely Alterations</h5>
                  <p>
                    If you need any changes in your already existing design, you
                    can change it according to your need.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className=" work_service_card">
                <div className="wsc_img">
                  <img src="/assets/icnImg/feedbacks.webp" alt="feedbacks." />
                </div>
                <div className="work_service_card_meta">
                  <h5>Feedbacks</h5>
                  <p>
                    We are always open to the construcive feedback from our
                    customers to improve ourselves from time to time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- quote work section end --> */}
    </>
  );
}

export default PageSection;
