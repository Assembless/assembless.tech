import { makeProjectData } from "api/Project.model";

const projects = [
    makeProjectData({
        name: "Circles Web",
        logoUrl: "https://i.imgur.com/VzOVjUy.png",
        description: "Circles is a messaging app designed with family ties in mind. It makes sure that you not forget to catch up with a family member and never forget about their birthday ever again. Thanks to this app, your family relationships will be better than ever!",
        url: "https://circles.assembless.space/",
        repo_url: "https://github.com/Assembless/circles-web"
    }),
    makeProjectData({
        name: "Circles Server",
        logoUrl: "https://i.imgur.com/VzOVjUy.png",
        description: "Circles is a messaging app designed with family ties in mind. It makes sure that you not forget to catch up with a family member and never forget about their birthday ever again. Thanks to this app, your family relationships will be better than ever!",
        url: "https://circles.assembless.space/",
        repo_url: "https://github.com/Assembless/circles-server"
    }),
    makeProjectData({
        name: "Circles Express",
        logoUrl: "https://i.imgur.com/VzOVjUy.png",
        description: "Circles is a messaging app designed with family ties in mind. It makes sure that you not forget to catch up with a family member and never forget about their birthday ever again. Thanks to this app, your family relationships will be better than ever!",
        url: "https://circles.assembless.space/",
        repo_url: "https://github.com/Assembless/circles-express"
    }),
]

export default projects;