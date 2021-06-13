import Project from "api/Project.model";

export type TRole = "Chief Executive Officer" | "Chief Marketing Officer" | "Chief Technology Officer" | "Project Manager" | "Software Engineer" | "UX/UI Designer";

export interface IMember {
    first_name: string;
    last_name: string;
    nickname?: string;
    photo_url?: string;
    role: TRole;
    project?: Project;
    contact: TMemberContact[];
}

export type TMemberContactLabel = "email" | "phone" | "github" | "twitter" | "website" | "facebook" | "linkedin" | "telegram";

export type TMemberContact = {
    label: TMemberContactLabel;
    name: string;
    value: string;
}
