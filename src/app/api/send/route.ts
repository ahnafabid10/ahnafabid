import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, role, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['abidnirob10@gmail.com'],
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.6;color:#333">
          <h1 style="color:#111;font-size:24px;margin-bottom:16px">New message from ${name}</h1>
          <div style="background:#f5f5f5;padding:16px;border-radius:8px;margin-bottom:16px">
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Role:</strong> ${role}</p>
          </div>
          <div style="background:#fafafa;padding:16px;border-radius:8px;border:1px solid #eee">
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
