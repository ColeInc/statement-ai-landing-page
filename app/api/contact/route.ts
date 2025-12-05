import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid website URL"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

function createEmailHTML(firstName: string, lastName: string, email: string, website: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #BFE2E4 0%, #9fd5d8 50%, #7ec8cc 100%);
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #000;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 24px;
          }
          .field-label {
            font-weight: 600;
            color: #555;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
          }
          .field-value {
            color: #333;
            font-size: 16px;
            word-wrap: break-word;
          }
          .field-value a {
            color: #7ec8cc;
            text-decoration: none;
          }
          .field-value a:hover {
            text-decoration: underline;
          }
          .message-box {
            background-color: #f9f9f9;
            border-left: 4px solid #BFE2E4;
            padding: 16px;
            border-radius: 4px;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔺 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Contact Name</div>
              <div class="field-value">${firstName} ${lastName}</div>
            </div>

            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Website</div>
              <div class="field-value">
                <a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Overleaf AI contact form</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const validationResult = contactFormSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, website, message } = validationResult.data

    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    if (!process.env.RECIPIENT_EMAIL) {
      console.error("RECIPIENT_EMAIL is not configured")
      return NextResponse.json(
        { error: "Recipient email not configured" },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Overleaf AI <onboarding@resend.dev>",
      to: [process.env.RECIPIENT_EMAIL],
      subject: "🔺 New Contact Form Submission - Overleaf AI",
      html: createEmailHTML(firstName, lastName, email, website, message),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
