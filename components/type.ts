// import { Client, Account, Databases, Users } from 'appwrite'

// const client = new Client()
//   .setEndpoint('https://[APPWRITE-ENDPOINT]')
//   .setProject('[PROJECT_ID]')

// export const account = new Account(client)
// export const databases = new Databases(client)
// export const users = new Users(client)

// // Example helpers
// export const createSession = (email: string, password: string) =>
//   account.createEmailSession(email, password)

// export const createAdmin = (email: string, password: string, name: string) =>
//   account.create('unique()', email, password, name)

// export const getDatabase = (databaseId: string) =>
//   databases.listCollections(databaseId)


// export const logout = () => account.deleteSession('current')

// export const getCurrentUser = () => account.get()

// export const createDocument = (dbId: string, collectionId: string, data: any) =>
//   databases.createDocument(dbId, collectionId, 'unique()', data)

// export const updateDocument = (dbId: string, collectionId: string, docId: string, data: any) =>
//   databases.updateDocument(dbId, collectionId, docId, data)

// export const deleteDocument = (dbId: string, collectionId: string, docId: string) =>
//   databases.deleteDocument(dbId, collectionId, docId)

