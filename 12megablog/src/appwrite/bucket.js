import { Client, Storage, ID, Databases, Query } from "appwrite";
import conf from "../conf/conf.js";


export class Service {

    client = new Client()
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.bucket = new Storage(this.client);
    }
    //uploadFile
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error::", error);
            return false;
        }
    }
    // deleteFile
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ID.unique(),
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error::", error);
            return false;
        }
    }
    //getFilePreview
    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: error::", error);
            return false;
        }
    }
}

const bucketService = new Service()

export default bucketService;



