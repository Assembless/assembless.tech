/* eslint-disable camelcase */
type TProjectName =
  | 'Circles Web'
  | 'Circles Server'
  | 'Circles Express'
  | 'Flava'
  | 'React Littera'
  | null;

export interface IProject {
  name: TProjectName;
  logoUrl?: string;
  description: string;
  url: string;
  repo_url?: string;
}

class Project {
  public name: TProjectName;

  public logoUrl?: string;

  public description: string;

  public url: string;

  public repo_url?: string;

  constructor(
    name: TProjectName,
    description: string,
    url: string,
    repo_url?: string,
    logoUrl?: string,
  ) {
    this.name = name;
    this.logoUrl = logoUrl;
    this.description = description;
    this.url = url;
    this.repo_url = repo_url;
  }

  open() {
    window.open(this.url, `_blank`);
  }
}

export const makeProjectData = (data: IProject) =>
  new Project(
    data.name,
    data.description,
    data.url,
    data.repo_url,
    data.logoUrl,
  );

export default Project;
