import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { env } from '@/lib/getenv';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: env.GITHUB_CLIENT,
			clientSecret: env.GITHUB_SECRET,
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
