'use client';

import { bytesToSize } from '@/lib/utils';
import { FolderUp, Loader2, MousePointerClick } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ScrollArea } from './ui/scroll-area';
import JSZip from 'jszip';

type DropFile = File & { preview: string };

const UploadComponent = () => {
	const [files, setFiles] = useState<DropFile[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const onDrop = useCallback(async (acceptedFiles: any) => {
		setIsLoading(true);
		const files = new FormData();
		acceptedFiles.forEach((file: File) => {
			files.append('files', file);
		});
		console.log(files);
		fetch('/api/upload', {
			method: 'POST',
			body: files,
		});

		setIsLoading(false);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className='max-w-2xl mx-auto'>
			<div
				className='bg-primary/30 rounded border-2 text-primary font-medium border-dashed border-primary'
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<div className='p-6 transition'>
						<MousePointerClick className='h-16 w-16 mx-auto' />
						<p className='text-xl mt-2'>Drop your file</p>
					</div>
				) : (
					<div className='p-6 transition cursor-pointer'>
						<FolderUp className='h-16 w-16 mx-auto' />
						<p className='text-xl mt-2'>Drag and drop your file</p>
						<p className='text-sm'>or simply click to upload</p>
					</div>
				)}
			</div>
			<p className='text-xs text-right text-primary my-0.5'>You can upload up to 50MB without being logged in</p>
		</div>
	);
};

export default UploadComponent;
