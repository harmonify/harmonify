import { SkillInterface } from "./SkillInterface";
import { ProjectInterface } from "./ProjectInterface";
import { SocialInterface } from "./SocialInterface";
import { ExperienceInterface } from "./ExperienceInterface";

export interface AuthorInterface {
  name: string;
  roles: string[];
  nationality: string;
  about: string[];
  avatar: string;
  email: string;
  experiences?: ExperienceInterface[];
  socials: SocialInterface;
  projects: ProjectInterface[];
  skills: SkillInterface[];
}
