const Reviews = () => {
    return (
        <section id="reviewsSection">
            <h2 className="section-heading">What our customers say</h2>
            <div className="reviews-row">
                <div className="review-box">
                    <i className="ic-quote fa fa-quote-right"></i>
                    <p className="review-text">
                        I really like how my boxes turn around. I did not have much time to provide my artwork as my own
                        timeline is a little bit tight. Excellent work
                        from the PackagingAid. They did not only deliver me the snack boxes but they provide me full packaging
                        assistance and turned our packaging vision and ideas into a reality.
                    </p>
                    <img className="reviewer-photo"
                        src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/simon.webp?alt=media"
                        alt="Reviewer Photo" />
                    <p className="reviewer-name no-bottom-margin">Simon Trumbly</p>
                </div>
                <div className="review-box">
                    <i className="ic-quote fa fa-quote-right"></i>
                    <p className="review-text">
                        I had some ideas on what I wanted but they worked with me every step of the way. Even helping me on
                        aspects of the project I didn't have answers for or understood. They brought life to my brand. From
                        artwork to the production of boxes. Everything is so flawless and excellent.
                    </p>
                    <img className="reviewer-photo"
                        src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/shannon.webp?alt=media"
                        alt="Reviewer Photo" />
                    <p className="reviewer-name no-bottom-margin">Shannon Yawkey</p>
                </div>
                <div className="review-box">
                    <i className="ic-quote fa fa-quote-right"></i>
                    <p className="review-text">
                        PackagingAid is the best to do it!! Customer service always on point, easily accessible with quick
                        turnaround times and great quality of packaging! I am so glad that I found them.You will never regret hiring them for placing your
                        orders. They are one of the absolute best in their field!!
                    </p>
                    <img className="reviewer-photo"
                        src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/deanna.webp?alt=media"
                        alt="Reviewer Photo" />
                    <p className="reviewer-name no-bottom-margin">Deanna Outsen</p>
                </div>
            </div>
        </section>
    );
}

export default Reviews;