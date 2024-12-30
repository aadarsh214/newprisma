import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string, password : string, firstName : string, lastName : string, email : string){
    await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
}

insertUser('test', 'test', 'test', 'test', 'test')