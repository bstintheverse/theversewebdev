//styling
import "./Experiences.scss";

export default function ExperiencesPage() {
    return (
        <section className="experiences">
            <article className="experience_cards">
                <ul className="experience__card-list">
                    <li className="experience__card-item">
                        <h2 className="experience__header">
                            WalkXR
                        </h2>

                        <div className="experience__video-description">
                            <video className="experience__video" controls>
                                <source src="/assets/videos/placeholder-video.mp4" />
                            </video>

                            <p className="experience__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
                                metus in odio condimentum eleifend at et urna. Donec sit amet nunc 
                                nec felis tincidunt fermentum non id elit. Mauris malesuada, odio 
                                nec facilisis ullamcorper, velit arcu consequat elit, a aliquam 
                                libero ante vel lectus. Integer ac dolor et leo suscipit venenatis. 
                                Integer ultricies urna non volutpat tempor. Integer scelerisque id 
                                metus nec tincidunt. Integer malesuada dui id ante condimentum, sit 
                                amet ultricies lorem tincidunt.
                            </p>

                            <p className="experience__button">
                                Learn More
                            </p>
                        </div>
                    </li>

                    <li className="experience__card-item">
                        <h2 className="experience__header">
                            Karma The Six Realms Game
                        </h2>

                        <div className="experience__video-description">
                            <video className="experience__video" controls>
                                <source src="/assets/videos/placeholder-video.mp4" />
                            </video>

                            <p className="experience__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
                                metus in odio condimentum eleifend at et urna. Donec sit amet nunc 
                                nec felis tincidunt fermentum non id elit. Mauris malesuada, odio 
                                nec facilisis ullamcorper, velit arcu consequat elit, a aliquam 
                                libero ante vel lectus. Integer ac dolor et leo suscipit venenatis. 
                                Integer ultricies urna non volutpat tempor. Integer scelerisque id 
                                metus nec tincidunt. Integer malesuada dui id ante condimentum, sit 
                                amet ultricies lorem tincidunt.
                            </p>

                            <p className="experience__button">
                                Learn More
                            </p>
                        </div>
                    </li>

                    <li className="experience__card-item">
                        <h2 className="experience__header">
                            Adventures in Breath (AiB)
                        </h2>

                        <div className="experience__video-description">
                            <video className="experience__video" controls>
                                <source src="/assets/videos/placeholder-video.mp4" />
                            </video>

                            <p className="experience__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
                                metus in odio condimentum eleifend at et urna. Donec sit amet nunc 
                                nec felis tincidunt fermentum non id elit. Mauris malesuada, odio 
                                nec facilisis ullamcorper, velit arcu consequat elit, a aliquam 
                                libero ante vel lectus. Integer ac dolor et leo suscipit venenatis. 
                                Integer ultricies urna non volutpat tempor. Integer scelerisque id 
                                metus nec tincidunt. Integer malesuada dui id ante condimentum, sit 
                                amet ultricies lorem tincidunt.
                            </p>

                            <p className="experience__button">
                                Learn More
                            </p>
                        </div>
                    </li>
                </ul>
            </article>
        </section>
    )
};