
interface ContactFormEmailProps {
  firstName: string
  lastName: string
  email: string
  website: string
  message: string
}

export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  website,
  message,
}: ContactFormEmailProps) {
  return (
    <html>
      <head>
        <style>
          {`
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
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>🔺 New Contact Form Submission</h1>
          </div>
          <div className="content">
            <div className="field">
              <div className="field-label">Contact Name</div>
              <div className="field-value">{firstName} {lastName}</div>
            </div>

            <div className="field">
              <div className="field-label">Email</div>
              <div className="field-value">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>

            <div className="field">
              <div className="field-label">Website</div>
              <div className="field-value">
                <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
              </div>
            </div>

            <div className="field">
              <div className="field-label">Message</div>
              <div className="message-box">{message}</div>
            </div>
          </div>
          <div className="footer">
            <p>This email was sent from the Overleaf AI contact form</p>
          </div>
        </div>
      </body>
    </html>
  )
}
