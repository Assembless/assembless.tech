import { IProject } from './Project.model';

export interface ICareerRole {
  role: string;
  project?: IProject;
  location?: string;
  description: string;
  icon: string;
  requirements?: IRoleRequirements[];
}

interface IRoleRequirements {
  label: string;
  level: 1 | 2 | 3 | 4;
  description?: string;
}

class CareerRole implements ICareerRole {
  public role: string;

  public project?: IProject;

  public location?: string;

  public description: string;

  public icon: string;

  public requirements?: IRoleRequirements[];

  constructor(
    role: string,
    description: string,
    icon: string,
    requirements?: IRoleRequirements[],
    project?: IProject,
    location?: string,
  ) {
    this.role = role;
    this.project = project;
    this.description = description;
    this.icon = icon;
    this.requirements = requirements;
    this.location = location;
  }
}

export default CareerRole;
