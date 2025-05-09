// app/api/send-sms/route.js
import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  const { to, message } = await req.json();

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
      to: to,
    });

    return NextResponse.json({ success: true, sid: response.sid });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
