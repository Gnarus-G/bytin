import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Adapters from "next-auth/adapters";
import prisma from "../../../prisma";

export default NextAuth({
    adapter: Adapters.Prisma.Adapter({ prisma }),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn(user, account) {
            if (account.provider !== "github") return

            // https://developer.github.com/v3/users/emails/#list-email-addresses-for-the-authenticated-user
            const res = await fetch('https://api.github.com/user/emails', {
                headers: { 'Authorization': `token ${account.accessToken}` }
            })

            const emails = await res.json()
            if (!emails || emails.length === 0) return

            // Sort by primary email - the user may have several emails, but only one of them will be primary
            const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
            user.email = sortedEmails[0].email
        },

        session: async (session, user) => (session.user.id = user.sub, session)
    },
})