export interface IProject {
  id: number;
  name: string;
  description: string;
  imageName: string;
  fullDescription: string;
  bgImage: string;
  subheading: string;
  subdescription: string;
  facts: { title: string; description: string; }[];
  features: { title: string; description: string; }[];
}