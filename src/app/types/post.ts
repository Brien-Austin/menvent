
export interface Post {
    id : string;
    isAnonymous : boolean;
    likedData : Like[] | null;
    userId : string | undefined;
    username: string ;
    postText: string ;
    profileUrl: string ;
    postedTime: Date ;
    likes: number |undefined;

    comments: number | undefined ;
}

interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    username: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
}

interface Like {
    id: string;
    userId: string;
    postId: string;
    createdAt: Date;
}

interface Comment {
    id: string;
    text: string | null;
    userId: string;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
}

interface PostType {
    id: string;
    isAnonymous : boolean
    userId: string;
    postText: string | null;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    likes: Like[] | null;
    comments: Comment[] | null;
}

export type { PostType, User, Like, Comment };