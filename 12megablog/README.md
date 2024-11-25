# React + Vite

```js
npm install @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
```

## Appwrite folder Structure
```js
├── Project
│ ├── overview (setting)
│ ├── Auth
│ ├── Database(permission)
│ │ ├── Collection
│ ├── Function
│ ├── Storage(Bucket) (permission)
```
## Appwrite Config and .env

```js
VITE_APPWRITE_URL;
VITE_APPWRITE_PROJECT_ID;
VITE_APPWRITE_DATABASE_ID;
VITE_APPWRITE_COLLECTION_ID;
VITE_APPWRITE_BUCKET_ID;
```

## src/conf/conf.js

```js
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
```

## appwrite/auth.js

```js
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }
  // createAccount

  // login

  // getCurrentUser

  // logOut
}

const authService = new AuthService();

export default authService;
```

##### createAccount

```js
 // createAccount
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another method and redirected to login page
        return this.login({ email, password });
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite Service :: createAccount :: error::", error);
      throw error;
    }
  }
```

##### login

```js
// login
async login({ email, password }) {
  try {
    return await this.account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.log("Appwrite Service :: login :: error::", error);
    throw error;
  }
}
```

##### getCurrentUser

```js
// getCurrentUser
async getCurrentUser() {
  try {
    return await this.account.get();
  } catch (error) {
    console.log("Appwrite Service :: getCurrentUser :: error::", error);

  }
  return null;
}
```

##### logout

```js
// logOut
async logOut() {
  try {
    return this.account.deleteSessions();
  } catch (error) {
    console.log("Appwrite Service :: logout :: error::", error);
    throw error;
  }
}
```

## appwrite/database.js

```js
import { Client,  Databases, Query } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(this.client);
  }
  // createPost

  // updatePost

  // deletePost

  // getPost

  // getAllPost
}

const databaseService = new Service();

export default databaseService;
```

##### createPost

```js
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
```

##### updatePost

```js
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
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: error::", error);
      throw error;
    }
  }

```

##### deletePost

```js

  // deletePost
  async deletePost(slug ) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: error::", error);
      return false;
    }
  }


```

##### getPost

```js

// getPost
  async getPost(slug ) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      // return true;
    } catch (error) {
      console.log("Appwrite Service :: getPost :: error::", error);
      throw error;
      // return false;
    }
  }


```

##### getAllPost

```js
  // getAllPost
  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
        100, //pagination
        0 //result
      );
      // return true;
    } catch (error) {
      console.log("Appwrite Service :: getAllPost :: error::", error);
      throw error;
      // return false;
    }
  }
```

## appwrite/bucket.js

```js
import { Client, Storage, ID,  } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.bucket = new Storage(this.client);
  }
  // uploadFile

  // deleteFile

  // getFilePreview
}

const bucketService = new Service();

export default bucketService;
```

##### uploadFile

```js
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


```

##### deleteFile

```js
 // deleteFile
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error::", error);
            return false;
        }
    }



```

##### getFilePreview

```js
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

```
