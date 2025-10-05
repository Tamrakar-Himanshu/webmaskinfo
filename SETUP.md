# Contact Form with S3 Integration Setup

This project now includes a contact form that stores submissions in AWS S3 as JSON files.

## Setup Instructions

### 1. AWS S3 Configuration

Create a `.env.local` file in your project root with the following variables:

```env
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_access_key_here
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=your-bucket-name-here
```

### 2. AWS S3 Bucket Setup

1. Create an S3 bucket in your AWS account
2. Configure the bucket permissions to allow your AWS credentials to upload files
3. Update the `AWS_S3_BUCKET_NAME` in your `.env.local` file

### 3. AWS IAM Permissions

Your AWS user/role needs the following permissions:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

### 4. File Structure

Contact form submissions will be stored in S3 with the following structure:
```
your-bucket/
└── contact-forms/
    ├── contact-form-2024-01-15T10-30-00-000Z.json
    ├── contact-form-2024-01-15T11-45-00-000Z.json
    └── ...
```

### 5. JSON Format

Each contact form submission is stored as a JSON file with the following structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "subject": "Inquiry about services",
  "message": "I would like to know more about your services...",
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "ip": "192.168.1.1",
  "userAgent": "Mozilla/5.0..."
}
```

### 6. Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section on your website
3. Fill out and submit the contact form
4. Check your S3 bucket for the uploaded JSON file

### 7. Additional Integrations

You can extend the API route (`app/api/contact/route.ts`) to:
- Send email notifications
- Trigger webhooks
- Store in a database
- Send to external services

## Features

- ✅ Responsive contact form with validation
- ✅ Form data stored as JSON in S3
- ✅ Error handling and user feedback
- ✅ Loading states and success messages
- ✅ Mobile-friendly design
- ✅ Integration with existing navigation

## Troubleshooting

- Ensure your AWS credentials are correct
- Verify your S3 bucket exists and has proper permissions
- Check the browser console for any JavaScript errors
- Verify the API route is accessible at `/api/contact`

