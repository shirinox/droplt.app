import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

export async function createFolder(Bucket: string, Key: string) {
	const client = new S3Client();
	const command = new PutObjectCommand({ Bucket, Key: `${Key}/` });
	return client.send(command);
}

export async function existsFolder(Bucket: string, Key: string) {
	const client = new S3Client();
	const command = new HeadObjectCommand({ Bucket, Key });

	try {
		await client.send(command);
		return true;
	} catch (error: any) {
		if (error.name === 'NotFound') {
			return false;
		} else {
			throw error;
		}
	}
}
