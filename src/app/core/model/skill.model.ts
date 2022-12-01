export interface IRequiredSkill {
    name: string,
    id: number,
}

export interface ISkill {
    name: string,
    value: string,
    ids?: number[],
    selected?: boolean,
}

export const SKILLS: ISkill[] = [
    { name: "React", value: "react", ids: [ 2031, 2101 ] },
    { name: "AWS", value: "aws", ids: [ 433,1827,857,1012,1403,836,234,1013,720 ] },
    { name: "Python", value: "python", ids: [ 25,20,1466,710,1467,2050 ] },
    { name: "Node.js", value: "nodejs", ids: [ 120 ] },
    { name: "Typescript", value: "typescript", ids: [ 158 ] },
    { name: "JavaScript", value: "javaScript", ids: [ 452,93,598,314 ] },
    { name: "SQL", value: "sql", ids: [ 1946,1821,2061,1185,1186,114,1595,115,470,1436 ] },
    { name: "CSS", value: "css", ids: [ 107,597,309,591,590,589,592,594 ] },
    { name: "Java", value: "java", ids: [ 2068,567,800,29,1688,1609,89 ] },
    { name: "HTML", value: "html", ids: [ 387,588,308,313 ] },
    { name: "Docker", value: "docker", ids: [ 55 ] },
    { name: "Kubernetes", value: "kubernetes", ids: [ 61 ] },
    { name: "PostgreSQL", value: "postgresql", ids: [ 86 ] },
    { name: "React Native", value: "reactnative", ids: [ 160 ] },
    { name: "GraphQL", value: "graphql", ids: [ 159 ] },
    { name: "MongoDB", value: "mongodb", ids: [ 116 ] },
    { name: "PHP", value: "php", ids: [ 939,358,165,2087,2049 ] },
    { name: "Go/Golang", value: "golang", ids: [ 2096,26 ] },
    { name: "Ruby on Rails", value: "rubyonrails", ids: [ 30 ] },
    { name: "Angular", value: "angular", ids: [ 2036,1855,1873,1397 ] },
    { name: "DevOps", value: "devops", ids: [ 836,1943,54 ] },
]
