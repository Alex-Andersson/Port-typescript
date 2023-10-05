interface ProjectType {
    image: string;
    name: string;
    tech: string[];
    links: {
        GitHub?: string;
        Live?: string;
    };
    about: string;
}

export type { ProjectType };
