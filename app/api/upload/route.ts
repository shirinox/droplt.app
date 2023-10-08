import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { env } from '@/lib/getenv';

export const POST = async (req: NextRequest, res: NextResponse) => {
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
			Key: file.name,
			ContentType: 'application/zip',
			Body: buffer,
		});
		try {
			const response = await client.send(command);
			console.log(response);
		} catch (err) {
			console.error(err);
		}
	});
	// const body: FormData = data.body.getAll('files');
	// console.log(body);
	const client = new S3Client({
		region: env.AWS_REGION,
		credentials: {
			accessKeyId: env.AWS_S3_ACCESS,
			secretAccessKey: env.AWS_S3_SECRET,
		},
	});

	return NextResponse.json({ success: true });
};

// if (!files) {
// 	return NextResponse.json({ success: false });
// }
// const client = new S3Client({});
// const zip = new JSZip();

// if (files.length > 1) {
// files.map((file) => zip.file(file.name, file));
// zip.generateAsync({ type: 'blob' }).then(async (content) => {
//
// });
