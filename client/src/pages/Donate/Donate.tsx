//styling
import "./Donate.scss";

export default function DonatePage() {
    return (
        <section className="donate">
            <div className="donate__container">
                <h2 className="donate__subheader">
                    Coming Soon
                </h2>

                <p className="donate__text--white">
                    Our donation page is launching soon! We're working hard to make it easy for you to 
                    support our cause. Thank you for your interest in supporting our mission!
                </p>
            </div>

            <div className="donate__content">
                <img 
                    className="donate__wip-gif"
                    src="/assets/images/wip.gif"
                    alt="Animated textbox with WIP text"
                />
            </div>
        </section>
    )
};