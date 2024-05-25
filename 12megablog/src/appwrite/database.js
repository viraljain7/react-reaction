import { Client, ID, Databases, Query } from "appwrite";
import conf from "../conf/conf.js";


export class Service {

    client = new Client()
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.databases = new Databases(this.client);
    }
    // createPost
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error::", error);
            throw error;
        }
    }
    // updatePost
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error::", error);
            throw error;
        }
    }
    // deletePost
    async deletePost({ slug }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error::", error);
            return false;
        }
    }
    // getPost
    async getPosts({ slug }) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            // return true;
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error::", error);
            throw error;
            // return false;
        }
    }
    // getAllPost
    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100,//pagination
                0, //result
            )
            // return true;
        } catch (error) {
            console.log("Appwrite Service :: getAllPost :: error::", error);
            throw error;
            // return false;
        }
    }
}

const databaseService = new Service()

export default databaseService;



