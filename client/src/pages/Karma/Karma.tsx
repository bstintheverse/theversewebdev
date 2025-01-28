// styling
import "./Karma.scss";

// data
import { karmaInfo } from "../..//data/karma";

export default function KarmaPage() {
    return (
        <section className="karma">
            {karmaInfo.headers.map((header) => (
                <div className="karma__container" key={header.id}>
                    <h2 className="karma__header">
                        {header.title}
                    </h2>

                    {/* renders content if applicable */}
                    <p className="karma__text">
                        {header.content}
                    </p>
                    
                    {/* renders subheaders if applicable */}
                    {header.subheaders?.map((subheader) => (
                        <div className="karma__container">
                            <h3 className="karma__subheader">
                                {subheader.title}
                            </h3>
                            
                            {/* renders list items if applicable */}
                            <ul className="karma__list">
                                {subheader.items?.map((item) => (
                                    <li className="karma__list-item karma__text">
                                        {item.content}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* renders assets */}
                    {header.assets && header.assets.length > 0 && (
                        <div className="karma__container">
                            {header.assets.map((asset) => {
                                if (asset.type === "image") {
                                    return (
                                        <img
                                            key={asset.id}
                                            src={asset.src}
                                            alt={asset.alt}
                                            className="karma__image"
                                        />
                                    );
                                } else if (asset.type === "video") {
                                    return (
                                        <video
                                            key={asset.id}
                                            controls
                                            className="karma__video"
                                        >
                                            <source src={asset.src} type="video/mp4" />
                                        </video>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                    
                    {/* renders play button */}
                    {header.id === 2 && (
                        <p className="karma__button">
                            Play
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
};