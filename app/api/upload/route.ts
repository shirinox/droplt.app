import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { env } from '@/lib/getenv';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export const POST = async (req: NextRequest, res: NextResponse) => {
	const session = await getServerSession(authOptions);
	if (!session) return NextResponse.json({ success: false });
	const { user } = session;
	const data = await req.formData();

	const files: File[] | null = data.getAll('files') as unknown as File[];
	console.log(data);

	if (!files) {
		return NextResponse.json({ success: false });
	}

	files.map(async (file) => {
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);
		const command = new PutObjectCommand({
			Bucket: 'droplt',
			Key: `${user?.email}/${file.name}`,
			ContentType: file.type,
			Body: buffer,
		});
		try {
			const response = await client.send(command);
			console.log(response);
		} catch (err) {
			console.error(err);
		}
	});
	const client = new S3Client({
		region: env.AWS_REGION,
		credentials: {
			accessKeyId: env.AWS_S3_ACCESS,
			secretAccessKey: env.AWS_S3_SECRET,
		},
	});

	return NextResponse.json({ success: true });
};

