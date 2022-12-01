import { IRequiredSkill, } from "./skill.model";

export interface IJobLangContent {
    "languageId": number,
    "abbreviation": string,
    "language": string,
    "publicDescription": null | string,
    "publicTitle": null | string,
    "publishedOnJobBoard": string
};

export interface IJob {
    jobId: string,
    createdDate: string,
    updatedDate: string,
    industry: string,
    customerWeeklyHourEngagement?: null | string | number,
    publishedOnJobBoard: string,
    requiredSkills: IRequiredSkill[],
    role: string,
    publicTitle: string,
    isActive: boolean,
    jobLanguageContent: IJobLangContent[],
    companySize: number,
    company?: string,
    description?: string,
}
