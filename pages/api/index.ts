import "reflect-metadata";
import { resolvers } from '@generated/type-graphql';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiHandler } from "next";
import { buildSchemaSync } from 'type-graphql';
import prisma from "../../prisma";

export const config = { api: { bodyParser: false } };

const schema = buildSchemaSync({ resolvers })

const apollo = new ApolloServer({
    schema,
    context: { prisma }
});

const handler: NextApiHandler = async (req, res) => {
    await apollo.start();
    return apollo.createHandler({
        path: "/api"
    })(req, res)
};

export default handler;
