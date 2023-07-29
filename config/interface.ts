import mongoose from "mongoose"

interface iAuthor {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    avatarID?: string;
    article?: {}[];
}
export interface iAuthorData extends iAuthor, mongoose.Document {}