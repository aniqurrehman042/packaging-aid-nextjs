const Process = () => {
    return (
        <section id="process-section">
            <h2 className="section-heading color-white no-margin">Simplify your packaging procurement</h2>
            <h2 className="section-heading color-white no-top-margin">In three steps</h2>
            <div className="steps-row">
                <div className="step-box">
                    <div className="step-no-icon">
                        <img className="step-img" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_share_your_idea.svg?alt=media" alt="Share Your Box Idea" />
                    </div>
                    <div className="step-content">
                        <h3 className="step-heading">Share Your Box Idea</h3>
                        <p className="step-description">Communicate the preferred box specifications to us by talking to our Packaging Experts, over the live
                            chat, phone or send an email at sales@packagingaid.com.com</p>
                    </div>
                </div>
                <div className="step-box">
                    <div className="step-no-icon">
                        <img className="step-img" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_artwork_approval.svg?alt=media" alt="Quotation &amp; Artwork Approval" />
                    </div>
                    <div className="step-content">
                        <h3 className="step-heading">Quotation &amp; Artwork Approval</h3>
                        <p className="step-description">Get instantaneous price quotes for your box idea to place your order. We provide a 3D digital
                            illustration of the box to help you get an idea of the final product.</p>
                    </div>
                </div>
                <div className="step-box">
                    <div className="step-no-icon">
                        <img className="step-img" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_box_shipping.svg?alt=media" alt="Box Construction &amp; Shipment" />
                    </div>
                    <div className="step-content">
                        <h3 className="step-heading">Box Construction &amp; Shipment</h3>
                        <p className="step-description">Your satisfaction with the concept leads to putting your box idea into construction. Followed by
                            testing of each unit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;