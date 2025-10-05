import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { s3Config } from './config';

// Initialize S3 client
const s3Client = new S3Client({
  region: s3Config.region,
  credentials: s3Config.credentials,
});

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt?: string;
  ip?: string;
  userAgent?: string;
}

export async function uploadContactForm(data: ContactFormData): Promise<string> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `contact-form-${timestamp}.json`;
  
  const contactData: ContactFormData = {
    ...data,
    submittedAt: new Date().toISOString(),
  };

  const command = new PutObjectCommand({
    Bucket: s3Config.bucketName,
    Key: `contact-forms/${filename}`,
    Body: JSON.stringify(contactData, null, 2),
    ContentType: 'application/json',
    Metadata: {
      'contact-name': data.name,
      'contact-email': data.email,
      'contact-subject': data.subject,
    },
  });

  await s3Client.send(command);
  return filename;
}

export async function getContactForm(key: string): Promise<ContactFormData | null> {
  try {
    const command = new GetObjectCommand({
      Bucket: s3Config.bucketName,
      Key: key,
    });

    const response = await s3Client.send(command);
    const body = await response.Body?.transformToString();
    
    if (!body) return null;
    
    return JSON.parse(body);
  } catch (error) {
    console.error('Error retrieving contact form:', error);
    return null;
  }
}

