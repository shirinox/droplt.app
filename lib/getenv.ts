import z from 'zod';

const envSchema = z.object({
	DATABASE_URL: z.string({ required_error: 'DATABASE_URL is required.' }),
	NEXTAUTH_URL: z.string({ required_error: 'NEXTAUTH_URL is required.' }).url(),
	NEXTAUTH_SECRET: z.string({ required_error: 'NEXTAUTH_SECRET is required.' }),
	GITHUB_CLIENT: z.string({ required_error: 'GITHUB_CLIENT is required.' }),
	GITHUB_SECRET: z.string({ required_error: 'GITHUB_SECRET is required.' }),
	AWS_S3_ACCESS: z.string({ required_error: 'AWS_S3_ACCESS is required.' }),
	AWS_S3_SECRET: z.string({ required_error: 'AWS_S3_SECRET is required.' }),
	AWS_REGION: z.string({ required_error: 'AWS_REGION is required.' }),
});

export const env = envSchema.parse({
	DATABASE_URL: process.env.DATABASE_URL,
	NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	GITHUB_CLIENT: process.env.GITHUB_CLIENT,
	GITHUB_SECRET: process.env.GITHUB_SECRET,
	AWS_S3_ACCESS: process.env.AWS_S3_ACCESS,
	AWS_S3_SECRET: process.env.AWS_S3_SECRET,
	AWS_REGION: process.env.AWS_REGION,
});
