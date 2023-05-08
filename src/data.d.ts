export interface DataType {
  contact: Contact[];
  projects: Project[];
  knownTechs: KnownTech[];
}

export interface Contact {
  via: string;
  link: string;
}

export interface KnownTech {
  id: string;
  name: string;
  messageId: string;
  image: string;
}

export interface Project {
  imgSrc: string;
  cardText: string;
  techsIcons: TechsIcon[];
  urlToCode: string;
  urlToDemo: string;
}

export interface TechsIcon {
  src: string;
  alt: string;
}
