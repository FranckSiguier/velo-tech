import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

export type SendEmailData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  captchaToken: string;
};

export const sendEmail = createServerFn({
  method: "POST",
})
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().min(1),
      service: z.string().min(1),
      message: z.string().min(1),
      captchaToken: z.string().min(1, "Captcha token is required"),
    })
  )
  .handler(async ({ data }) => {
    const { name, email, phone, service, message, captchaToken } = data;

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: captchaToken,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      throw new Error("Captcha verification failed");
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chris@velotechcentre.com.au",
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;

    let configOptions = {
      from: "chris@velotechcentre.com.au",
      to: "chris@velotechcentre.com.au",
      subject: "New contact form submission",
      text,
    };

    await transporter.sendMail(configOptions);

    return { success: true };
  });
