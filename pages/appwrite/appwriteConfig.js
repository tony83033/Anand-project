import { Client, Account, ID , Databases} from 'appwrite';

const client = new Client();

client.setEndpoint("http://127.0.0.1/v1").setProject("63cd1a32094608afb9e1");


export const databases = new Databases(client,process.env.Database);
export const account = new Account(client);


