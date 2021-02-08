import { IProject } from "./Project.model";

export interface ICareerRole {
    role: string;
    project?: IProject;
    description: string;
    icon: string;
    requirements?: IRoleRequirements[];
}

export interface IRoleRequirements {
    label: string;
    level: 1 | 2 | 3 | 4;
    description?: string;
}

class CareerRole implements ICareerRole {
    public role: string;
    public project?: IProject;
    public description: string;
    public icon: string;
    public requirements?: IRoleRequirements[];

    constructor(role: string, description: string, icon: string, requirements?: IRoleRequirements[], project?: IProject) {
        this.role = role;
        this.project = project;
        this.description = description;
        this.icon = icon;
        this.requirements = requirements;
    }
}

export default CareerRole;