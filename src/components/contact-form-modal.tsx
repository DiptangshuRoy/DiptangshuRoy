"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, Mail, MessageSquare } from "lucide-react";

import { useModalStore } from "@/stores/modalStore";
import confetti from "canvas-confetti";
import { toast } from "@/hooks/use-toast";
import { Description } from "@radix-ui/react-dialog";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactFormModal() {
  const { isOpen, closeModal } = useModalStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email.trim()))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast({
        variant: "destructive",
        title: "Please correct the highlighted fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkbqez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        closeModal();
        toast({ description: result.message || "Message sent!" });
        triggerConfetti();
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast({
          variant: "destructive",
          title: result.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "An error occurred while sending the message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-md rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-left">
            Contact Me
          </DialogTitle>
          <Description className="text-sm text-muted-foreground pl-1">
            I typically respond quickly, so feel free to reach out anytime!
          </Description>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name Field */}
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`pl-10 pr-4 py-2 w-full text-sm ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`pl-10 pr-4 py-2 w-full text-sm ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message"
              className={`pl-10 pr-4 py-2 w-full text-sm ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={4}
            />
            <MessageSquare
              className="absolute left-3 top-3 text-muted-foreground"
              size={18}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 pl-1">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex justify-between">
            <DialogClose asChild>
              <Button variant={"outline"}>Close</Button>
            </DialogClose>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
