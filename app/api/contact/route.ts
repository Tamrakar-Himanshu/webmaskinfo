import { NextRequest, NextResponse } from 'next/server';
import { uploadContactForm } from '@/lib/s3-utils';
import { validateEnvironment } from '@/lib/config';

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!validateEnvironment()) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare the data to be stored
    const contactData = {
      ...formData,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Upload to S3 using utility function
    const filename = await uploadContactForm(contactData);

    // Optional: Send email notification or webhook
    // You can add additional integrations here
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        filename: filename 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process contact form',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
