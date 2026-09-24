import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      lga,
      currentTown,
      gender,
      ageGroup,
      educationLevel,
      selectedTrack,
      skillLevel,
      deviceCategory,
      motivation,
      agreement,
    } = body;

    // Basic validation
    if (!fullName || !email || !phone || !lga || !selectedTrack) {
      return NextResponse.json(
        { error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    if (!agreement) {
      return NextResponse.json(
        { error: "Program commitment agreement must be accepted." },
        { status: 400 }
      );
    }

    // Generate unique Application ID
    const appId =
      "EBOTECH-" +
      Math.floor(100000 + Math.random() * 900000).toString();

    const submissionDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    // Check if SMTP credentials are configured
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE === "false" ? false : true;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || smtpUser;
    const fromName = process.env.SMTP_FROM_NAME || "Ebotech Digital Skills Project";
    const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;

    let emailSent = false;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Email to Portal Administrators
      const adminMailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
        to: adminEmail,
        replyTo: `"${fullName}" <${email}>`,
        subject: `[New Candidate Application] ${appId} - ${fullName} (${lga} LGA)`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #dfdad0; border-radius: 4px; overflow: hidden; color: #1e1b18;">
            <div style="background-color: #058c9a; color: white; padding: 18px 24px;">
              <h2 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.5px;">Ebo-Tech Digital Skills Training Project</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">New Candidate Application Dossier</p>
            </div>
            
            <div style="padding: 24px; background-color: #ffffff;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #058c9a; padding-bottom: 12px; margin-bottom: 18px;">
                <div>
                  <span style="font-size: 12px; color: #78716c; text-transform: uppercase;">Application Reference:</span><br/>
                  <strong style="font-size: 18px; color: #058c9a; font-family: monospace;">${appId}</strong>
                </div>
                <div style="text-align: right;">
                  <span style="font-size: 12px; color: #78716c;">Submitted On:</span><br/>
                  <span style="font-size: 12px; font-weight: bold;">${submissionDate}</span>
                </div>
              </div>

              <h3 style="font-size: 14px; text-transform: uppercase; color: #44403c; border-bottom: 1px solid #e7e5e4; padding-bottom: 6px; margin-top: 18px;">1. Personal & Origin Information</h3>
              <table style="width: 100%; font-size: 13px; line-height: 1.6; border-collapse: collapse;">
                <tr><td style="width: 35%; color: #78716c; padding: 4px 0;">Full Name:</td><td><strong>${fullName}</strong></td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Email:</td><td><a href="mailto:${email}" style="color: #058c9a;">${email}</a></td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Phone / WhatsApp:</td><td><a href="tel:${phone}" style="color: #058c9a;">${phone}</a></td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Ebonyi LGA:</td><td><strong>${lga} LGA</strong></td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Current Town / Location:</td><td>${currentTown || "Not specified"}</td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Gender / Age Group:</td><td>${gender} | ${ageGroup}</td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Highest Education:</td><td>${educationLevel}</td></tr>
              </table>

              <h3 style="font-size: 14px; text-transform: uppercase; color: #44403c; border-bottom: 1px solid #e7e5e4; padding-bottom: 6px; margin-top: 24px;">2. Program Track & Device Access</h3>
              <table style="width: 100%; font-size: 13px; line-height: 1.6; border-collapse: collapse;">
                <tr><td style="width: 35%; color: #78716c; padding: 4px 0;">Requested Track:</td><td><strong style="color: #058c9a; font-size: 14px;">${selectedTrack}</strong></td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Current Skill Level:</td><td>${skillLevel}</td></tr>
                <tr><td style="color: #78716c; padding: 4px 0;">Device Category:</td><td><strong>${deviceCategory}</strong></td></tr>
              </table>

              <h3 style="font-size: 14px; text-transform: uppercase; color: #44403c; border-bottom: 1px solid #e7e5e4; padding-bottom: 6px; margin-top: 24px;">3. Candidate Motivation & Statement</h3>
              <div style="background-color: #fcfbf7; border: 1px solid #e7e5e4; padding: 12px; font-size: 13px; line-height: 1.6; border-radius: 4px; font-style: italic;">
                "${motivation ? motivation.replace(/\n/g, "<br/>") : "No statement provided."}"
              </div>

              <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #e7e5e4; font-size: 12px; color: #78716c; text-align: center;">
                Ebotech Digital Media • Free Digital Skills Training Project for Ebonyi State Indigenes
              </div>
            </div>
          </div>
        `,
      };

      // 2. Email Acknowledgement to the Applicant
      const applicantMailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
        to: email,
        subject: `Application Received: Ebo-Tech Digital Skills Training Project (${appId})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #dfdad0; border-radius: 4px; overflow: hidden; color: #1e1b18;">
            <div style="background-color: #058c9a; color: white; padding: 20px 24px;">
              <h2 style="margin: 0; font-size: 20px; font-weight: bold;">Ebo-Tech Digital Skills Training Project</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Application Acknowledgement & Next Steps</p>
            </div>
            
            <div style="padding: 24px; background-color: #ffffff;">
              <p style="font-size: 14px; line-height: 1.6;">Dear <strong>${fullName}</strong>,</p>
              
              <p style="font-size: 14px; line-height: 1.6;">
                Thank you for applying to the <strong>Ebo-Tech Free Digital Skills Training Project</strong> for indigenes of Ebonyi State. We have successfully logged your candidacy.
              </p>

              <div style="background-color: #f0fdf4; border: 1px solid #86efac; border-radius: 4px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #166534; text-transform: uppercase; font-weight: bold;">Your Official Application Reference:</p>
                <div style="font-size: 22px; font-weight: bold; font-family: monospace; color: #15803d;">${appId}</div>
                <p style="margin: 8px 0 0 0; font-size: 13px; color: #166534;">
                  <strong>Assigned Track:</strong> ${selectedTrack}<br/>
                  <strong>LGA of Origin:</strong> ${lga} LGA
                </p>
              </div>

              <h3 style="font-size: 14px; color: #1e1b18; margin-top: 20px;">What Happens Next?</h3>
              <ol style="font-size: 13px; line-height: 1.6; color: #44403c; padding-left: 20px;">
                <li><strong>Classification & Screening:</strong> Our admissions committee is evaluating applications.</li>
                <li><strong>Orientation Link:</strong> Shortlisted applicants will receive WhatsApp and email invitations to the project orientation session.</li>
                <li><strong>Practical Hub Access:</strong> Partner learning hubs and online classroom schedules will be shared before classes commence.</li>
              </ol>

              <p style="font-size: 13px; line-height: 1.6; color: #78716c; margin-top: 24px; border-top: 1px solid #f5f2eb; pt: 16px;">
                If you have questions, reply directly to this email or reach our administrative desk.
              </p>

              <p style="font-size: 13px; font-weight: bold; color: #058c9a; margin-top: 16px;">
                Ebo-Tech Project Directorate<br/>
                <span style="font-size: 12px; color: #78716c; font-weight: normal;">Ebotech Digital Media • Veritas, Innovatio & Futurum</span>
              </p>
            </div>
          </div>
        `,
      };

      try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(applicantMailOptions);
        emailSent = true;
      } catch (mailError) {
        console.error(" error:", mailError);
        // We log the error but still return success with the App ID so the applicant gets their confirmation slip
      }
    } else {
      console.warn(
        "SMTP credentials are not yet configured in .env.local. Skipping live email dispatch."
      );
    }

    return NextResponse.json({
      success: true,
      appId,
      emailSent,
      message: "Application submitted successfully.",
    });
  } catch (error: any) {
    console.error("Scholarship application submission error:", error);
    return NextResponse.json(
      { error: error?.message || String(error) || "An unexpected error occurred while processing your application." },
      { status: 500 }
    );
  }
}
