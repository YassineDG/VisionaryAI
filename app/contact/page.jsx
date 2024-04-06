"use client";

import React from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { toast, ToastContainer } from "react-toastify";

function ContactPage() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ltgc0o",
        "template_14xsvn4",
        e.target,
        "5fS7OqpNSMR6Jqt2a"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
        }
      );

    e.target.reset(); // Reset form fields after submission
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <main className="w-full max-w-3xl p-4 mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="text-gray-600 dark:text-gray-400">
              I&apos;d love to hear from you. Here&apos;s how you can reach
              me...❤️
            </p>
          </div>
          <div className="flex justify-center">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Yassine Dorgâa</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Full-Stack Developer
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  className="text-blue-500"
                  href="https://twitter.com/yassinedorgaa"
                >
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="https://github.com/YassineDG"
                >
                  <GithubIcon className="h-6 w-6" />
                </Link>
                <Link
                  className="text-blue-700"
                  href="https://www.linkedin.com/in/yassinedorgaa/"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Send me a message</h2>
              <p className="text-gray-500 dark:text-gray-400 ">
                Fill out the form below, and I&apos;ll get back to you as soon
                as possible.
              </p>
            </div>
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="from_name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="from_email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  className="min-h-[100px]"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="relative px-8 py-3 font-bold text-gray bg-gray-600 rounded-md overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out"></span>
                <span className="relative">Send message</span>
              </button>
            </form>
          </div>
        </main>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default ContactPage;
