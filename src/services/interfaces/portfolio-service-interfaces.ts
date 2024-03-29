export interface CarouselImageData {
    linkTitle: string,
    type: string,
    label: string,
}

export interface CarouselImage {
    imgURL: string,
    height: number,
    width: number,
    data: CarouselImageData,
}

export interface ImageObject {
    imgURL: string,
    width: number,
    height: number,
}

export interface BasicInfoResponse {
    email: string,
    cvLink: string,
    aboutMe: string,
    partners: ImageObject[],
    carousel: CarouselImage[],
}

export interface BasicUserInfo extends BasicInfoResponse {
    id: number,
}

export interface PartnersUpdateResponse {
    partners: string[],
}

export interface CarouselsUpdateResponse {
    carousel_images: ImageObject[],
}

export interface JobsUpdateResponse {
    job_images: ImageObject[],
}

export interface ProjectsUpdateResponse {
    project_images: ImageObject[],
}

export interface AboutMeResponse {
    techStack: string[],
    softSkills: string[],
    hobbies: string[],
}

export interface AboutMeRequest {
    techStack: string[],
    softSkills: string[],
    hobbies: string[],
    id: number,
}
export interface JobsAndProjectsResponse {
    jobs: JobDetails[],
    projects: ProjectsDetails[],
}

export interface SocialsResponse {
    socialMedia: SocialMedia
}

export interface LoginResponse {
    token?: string,
    errors?: string,
}

export interface AuthData {
    username: string,
    password: string,
}

export interface SocialMedia {
    facebook: string,
    linkedIn: string,
    github: string,
    email: string,
}

export interface SocialMediaInput {
    facebook: string,
    linkedIn: string,
    github: string,
    email: string,
    id: number,
}

export interface JobsAndDetailsInput {
    id: number,
    jobs: JobDetails[],
    projects: ProjectsDetails[],
}

export interface JobsAndProjectsInput {
    data: JobsAndDetailsInput,
    authToken: string,
}

export interface JobDetails {
    company: string,
    images: ImageObject[],
    title: string,
    started_at: Date,
    ended_at: Date | null,
    concept: string,
    achievements: string[],
    techStack: string[],
}

export interface ProjectsDetails {
    title: string,
    images: ImageObject[],
    startedAt: Date,
    endedAt: Date | null,
    description: string,
    link: string,
    repository: string,
    summary: string,
    techStack: string[],
}

export interface AnalyticsFilter {
    query: 'today' | 'yesterday' | 'last7days' | 'last30days' | 'last90days' | 'lastYear' | number
}

export interface AnalyticsResponse {
    results: Analytic[],
    totalVisitationsCount: number,
    mostPopularCountry: string,
    mostPopularDevice: string,
    visitationsByCountry: CountryValues[],
    visitationsByBrowser: BrowserValues[],
    visitationsByDevice: DeviceValues[],
}

interface Analytic {
    date: Date,
    deviceType: string,
    originCountry: string,
    ipAddress: string,
}

export interface Visitation {
    ipAddress?: string,
    originCountry?: string,
    deviceType: string,
}

export interface VisitationCountResponse {
    count: number,
}

export interface AnalyticData extends AnalyticsResponse {
    todayVisitationCount: number,
}

export interface CountryValues {
    country: string,
    code: string,
    count: number,
}

export interface BrowserValues {
    browser: string,
    count: number,
}

export interface DeviceValues {
    device: string,
    count: number,
}

export interface CountryValuesResponse {
    analytics: CountryValues[]
}

export interface BrowserValuesResponse {
    analytics: BrowserValues[]
}

export interface DeviceValuesResponse {
    analytics: DeviceValues[]
}