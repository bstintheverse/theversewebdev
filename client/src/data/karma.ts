interface Header {
    id: number;
    title: string;
    subheaders?: Subheader[];
    content: string;
    assets?: Asset[];
};

interface Subheader {
    id: number;
    title: string;
    content?: string;
    items: ListItem;
    assets?: Asset[];
};

interface ListItem {
    id: number;
    content: string;
};

interface Asset {
    id: number;
    type: "image" | "video";
    src: string;
    alt?: string;
};