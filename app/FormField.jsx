"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function FormField() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = (formData) => {
    let newErrors = {};

    if (formData.get("name").trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.get("email"))) {
      newErrors.email = "Invalid email format";
    }

    if (formData.get("message").trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    // Submit form data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/mvgkbqez", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        event.target.reset();
        setErrors({});
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="relative overflow-hidden text-white w-[43vw] max-md:w-[85vw]">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Fill out the form and I will get back to you</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Your name here"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Your email address"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Write your message..."
              required
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Success Message */}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-80"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
