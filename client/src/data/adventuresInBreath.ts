interface Header {
    id: number;
    title: string;
    subheader?: Subheader[];
    content?: string;
    assets?: Asset[];
};

interface Subheader {
    id: number;
    title: string;
    content: string;
    assets?: Asset[];
};

interface Asset {
    id: number;
    type: "image" | "video";
    src: string;
    alt?: string;
};

interface AdventuresInBreathInfoProp {
    headers: Header[];
};

export const AdventuresInBreathInfo: AdventuresInBreathInfoProp = {

};