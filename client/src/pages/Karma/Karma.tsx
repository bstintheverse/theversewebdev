// styling
import "./Karma.scss";

// data
import { karmaInfo } from "../..//data/karma";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function KarmaPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Karma The Six Realms
                </title>
            </Helmet>

            <section className="karma">
                {karmaInfo.headers.map((header) => (
                    <div className={`karma__container karma__container--${header.id}`} key={header.id}>
                        <h2 className="karma__header">
                            {header.title}
                        </h2>

                        {/* renders content if applicable */}
                        <p className="karma__text">
                            {header.content}
                        </p>
                        
                        {/* renders subheaders if applicable */}
                        {header.subheaders?.map((subheader) => (
                            <div className="karma__container" key={subheader.id}>
                                <h3 className="karma__subheader">
                                    {subheader.title}
                                </h3>

                                <div 
                                    className={`karma__image-list-container--${subheader.id}`}
                                >
                                    {/* Grouping images together if there are multiple */}
                                    {subheader.assets && subheader.assets.length > 0 && subheader.assets.some(asset => asset.type === "image") && (
                                        <div className={`karma__image-group karma__image-group--${subheader.id}`}>
                                            {subheader.assets.filter(asset => asset.type === "image").map((asset) => (
                                                <img
                                                    className={`karma__image--${subheader.id}`}
                                                    key={asset.id}
                                                    src={asset.src}
                                                    alt={asset.alt}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* renders list items if applicable */}
                                    <ul className="karma__list">
                                        {subheader.items?.map((item) => (
                                            <li className="karma__list-item karma__text">
                                                {item.content}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* renders assets */}
                        {header.assets && header.assets.length > 0 && (
                            <div className={`karma__assets-container--${header.id}`}>
                                {header.assets.map((asset) => {
                                    if (asset.type === "image") {
                                        return (
                                            <div 
                                                className={`karma__image-wrapper karma__image-wrapper--${header.id}`}
                                                key={asset.id}
                                            >
                                                <img
                                                    src={asset.src}
                                                    alt={asset.alt}
                                                    className={`karma__image karma__image--${header.id}`}
                                                />
                                            </div>
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
                    </div>
                ))}
            </section>
        </HelmetProvider>
    );
};