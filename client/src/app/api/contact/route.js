import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill out all required fields.' },
        { status: 400 }
      );
    }

    // Forward to FormSubmit for direct email delivery to aishwaryadas0803@gmail.com
    await fetch('https://formsubmit.co/ajax/aishwaryadas0803@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio Contact: Message from ${name}`,
        _template: 'table'
      })
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully to aishwaryadas0803@gmail.com!'
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Failed to process message request.' },
      { status: 500 }
    );
  }
}
