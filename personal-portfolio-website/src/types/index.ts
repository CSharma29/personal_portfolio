// This file exports TypeScript interfaces and types used throughout the application, providing type safety for props and state.

export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    repoUrl: string;
}

export interface Skill {
    id: number;
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}