import Project from "api/Project.model";
import projects from "../Projects/list";
import { IMember, TMemberContact, TRole, TMemberContactLabel } from "./types";

export class MemberItem {
    // @ts-ignore
    details: IMember = {};

    constructor(first_name: string, last_name: string, role: TRole, contact: TMemberContact[], nickname?: string, project?: Project, photo_url?: string) {
        this.details.first_name = first_name;
        this.details.last_name = last_name;
        this.details.role = role;
        this.details.nickname = nickname;
        this.details.photo_url = photo_url;
        this.details.project = project;
        this.details.contact = contact;
    }

    get name() {
        const nickName = this.details.nickname ? ` ${this.details.nickname} ` : " "

        return `${this.details.first_name}${nickName}${this.details.last_name}`;
    }

    get contact() {
        return this.details.contact.map(ct => ({ ...ct, value: makeLink(ct.label, ct.value) }))
    }

    get initials() {
        return `${this.details.first_name[0]}${this.details.last_name[0]}`
    }

    getContact(label: TMemberContactLabel): TMemberContact | null {
        return this.contact.find(ct => ct.label === label) ?? null;
    }
}

const makeLink = (label: TMemberContactLabel, value: string) => {
    switch (label) {
        case "email":
            return `mailto://${value}`

        case "phone":
            return `tel://${value}`

        case "twitter":
            return `https://twitter.com/${value}`;

        case "github":
            return `https://github.com/${value}`

        case "linkedin":
            return `https://www.linkedin.com/in/${value}/`

        case "telegram":
            return `https://t.me/${value}`

        default:
            return value;
    }
}

const contacts: TMemberContact[][] = [
    [
        {
            label: "email",
            name: "E-Mail",
            value: "mike@assembless.tech"
        },
        {
            label: "phone",
            name: "Phone",
            value: "+48 450 010 420"
        },
        {
            label: "twitter",
            name: "Twitter",
            value: "@DRFR0ST"
        },
        {
            label: "github",
            name: "GitHub",
            value: "DRFR0ST"
        }
    ],
    [
        {
            label: "email",
            name: "E-Mail",
            value: "rafal.cichocki@assembless.tech"
        },
    ],
    [
        {
            label: "email",
            name: "E-Mail",
            value: "karolina.falkowska@assembless.tech"
        },
        {
            label: "website",
            name: "Website",
            value: "https://karutek.com/"
        }
    ],
    [
        {
            label: "email",
            name: "E-Mail",
            value: "przemyslawcieslik@smartoakprojects.com"
        },
        {
            label: "phone",
            name: "Phone",
            value: "+44 7526151139"
        },
        {
            label: "github",
            name: "GitHub",
            value: "cieslikprzemyslaw"
        },
        {
            label: "facebook",
            name: "Facebook",
            value: "https://www.facebook.com/profile.php?id=100000375258188"
        },
        {
            label: "linkedin",
            name: "LinkedIn",
            value: "przemyslaw-cieslik-b90457169"
        },
    ]
];

const list: MemberItem[] = [
    new MemberItem("Mike", "Eling", "Chief Executive Officer", contacts[0], undefined, undefined, "https://pbs.twimg.com/profile_images/1350106852814704641/w_BmuLjD_400x400.jpg"),
    new MemberItem("Rafał", "Cichocki", "Software Engineer", contacts[1], undefined, undefined),
    new MemberItem("Karolina", "Falkowska", "UX/UI Designer", contacts[2], undefined, undefined, "https://i.ibb.co/Nyxy5JX/106993419-4489704961099888-1937973486739651086-n.jpg"),
    new MemberItem("Przemysław", "Cieślik", "Project Manager", contacts[3], undefined, projects[0]),
]

export const iconsMap: { [key: string]: string } = {
    email: "fas fa-envelope",
    phone: "fas fa-phone",
    github: "fab fa-github",
    twitter: "fab fa-twitter",
    linkedin: "fab fa-linkedin",
    facebook: "fab fa-facebook",
    telegram: "fab fa-telegram",
    website: "fas fa-globe",
}

export default list;
