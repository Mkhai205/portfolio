"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { fadeInUp } from "@/utils/motion";
import RECAPTCHA from "react-google-recaptcha";

// Zod schema for form validation
const contactFormSchema = z.object({
    fullName: z
        .string()
        .min(2, {
            message: "Full name must be at least 2 characters.",
        })
        .max(100, {
            message: "Full name must not exceed 100 characters.",
        }),
    email: z.email({
        message: "Please enter a valid email address.",
    }),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(1000, {
            message: "Message must not exceed 1000 characters.",
        }),
    recaptcha: z.string().min(1, {
        message: "Please complete the reCAPTCHA.",
    }),
});

// Type inference from Zod schema
type ContactFormValues = z.infer<typeof contactFormSchema>;

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize form with react-hook-form and Zod resolver
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            message: "",
            recaptcha: "",
        },
    });

    const recaptchaValue = watch("recaptcha");

    // Form submission handler
    async function onSubmit(values: ContactFormValues) {
        setIsSubmitting(true);

        try {
            // Check if required environment variables are available
            if (!serviceId || !templateId || !publicKey || !recaptchaSiteKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: values.fullName,
                from_email: values.email,
                message: values.message,
            };

            // Send email using EmailJS
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

            if (response.status === 200) {
                toast.success("Message sent successfully!", {
                    description: "Thank you for your message. We'll get back to you soon.",
                });

                // Reset form after successful submission
                reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Error sending email:", error);

            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again later.";

            toast.error("Error sending message", {
                description: errorMessage,
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div id="contact" className="flex flex-col items-center justify-center px-4">
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                className="header-section"
            >
                Contact Me
            </motion.h2>
            <Card className="w-full max-w-lg mx-auto bg-transparent backdrop-blur-[1px] border border-gray-200">
                <CardHeader className="text-white text-center">
                    <CardTitle className="text-lg font-semibold">
                        Let’s Build Something Great
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                        Whether it’s a collaboration, a question, or just a friendly chat, drop me a
                        message and I’ll respond shortly.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-white">
                                Full Name
                            </Label>
                            <Input
                                id="fullName"
                                placeholder="Enter your full name"
                                disabled={isSubmitting}
                                className="text-white"
                                {...register("fullName")}
                            />
                            {errors.fullName && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                disabled={isSubmitting}
                                className="text-white"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-white">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Enter your message"
                                className="min-h-[120px] resize-none text-white"
                                disabled={isSubmitting}
                                {...register("message")}
                            />
                            {errors.message && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                            <RECAPTCHA
                                sitekey={recaptchaSiteKey!}
                                onChange={(value: string | null) => {
                                    setValue("recaptcha", value || "");
                                }}
                            />
                            {errors.recaptcha && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.recaptcha.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-primary hover:from-purple-600 
                            hover:to-cyan-600 transition-colors cursor-pointer"
                            disabled={isSubmitting || recaptchaValue === ""}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
