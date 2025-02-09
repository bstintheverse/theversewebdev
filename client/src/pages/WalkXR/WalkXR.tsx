// styling
import "./WalkXR.scss";

// data
import { walkInfo } from "../../data/walkXR";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function WalkXRPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | WalkXR
                </title>
            </Helmet>

            <section className="walkxr">
                {walkInfo.headers.map((header) => (
                    <div className="walkxr__container">
                        <h2 className="walkxr__header" key={header.id}>
                            {header.title}
                        </h2>

                        {/* renders first string in content array if applicable */}
                        {header.content && header.content[0] && (
                            <p className="walkxr__text">
                                {header.content[0]}
                            </p>
                        )}

                        {/* renders list items if applicable */}
                        {header.items && header.items.length > 0 && (
                            <ul className="walkxr__list">
                                {header.items.map((item) => (
                                    <li className="walkxr__list-item walkxr__text" key={item.id}>
                                        {item.content}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* renders second string in content array if applicable */}
                        {header.content && header.content[1] && (
                            <p className="walkxr__text">{header.content[1]}</p>
                        )}

                        {/* renders subheaders and its contents if applicable */}
                        {header.subheaders?.map((subheader) => (
                            <div className="walkxr__container">
                                <h3 className="walkxr__subheader" key={subheader.id}>
                                    {subheader.title}
                                </h3>

                                <p className="walkxr__text" key={subheader.id}>
                                    {subheader.content}
                                </p>
                            </div>
                        ))}

                        {/* renders assets */}
                        {header.assets && header.assets.length > 0 && (
                            <div className="walkxr__container">
                                {header.assets.map((asset) => {
                                    if (asset.type === "image" && header.id != 2 ) {
                                        return (
                                            <img
                                                key={asset.id}
                                                src={asset.src}
                                                alt={asset.alt}
                                                className="walkxr__image"
                                            />
                                        );
                                    } else if (asset.type === "video") {
                                        return (
                                            <video
                                                key={asset.id}
                                                controls
                                                className="walkxr__video"
                                                poster={header.assets?.[1]?.src} 
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