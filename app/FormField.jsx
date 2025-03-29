// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// export function FormField() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateForm = (formData) => {
//     let newErrors = {};

//     if (formData.get("name").trim().length < 3) {
//       newErrors.name = "Name must be at least 3 characters";
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.get("email"))) {
//       newErrors.email = "Invalid email format";
//     }

//     if (formData.get("message").trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(event.target);
//     const formErrors = validateForm(formData);

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       setIsSubmitting(false);
//       return;
//     }

//     // Submit form to Netlify
//     try {
//       await fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams([...formData]),
//         redirect: "follow",
//       });
//       alert("Form submitted successfully!");
//       event.target.reset();
//       setErrors({});
//     } catch (error) {
//       console.error("Form submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card className="relative overflow-hidden text-white w-[43vw]">
//       <CardHeader>
//         <CardTitle>Contact Us</CardTitle>
//         <CardDescription>Fill out the form and we will get back to you</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form
//           name="contact"
//           method="POST"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           className="space-y-4"
//           onSubmit={handleSubmit}
//           netlify
//         >
//           {/* Netlify Hidden Fields */}
//           <input type="hidden" name="form-name" value="contact" />
//           <p className="hidden">
//             <label>
//               Don’t fill this out if you’re human: <input name="bot-field" />
//             </label>
//           </p>

//           {/* Name Field */}
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               type="text"
//               name="name"
//               className="bg-gray-800 border-gray-700 text-white"
//               placeholder="Your name here"
//               required
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           {/* Email Field */}
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               name="email"
//               className="bg-gray-800 border-gray-700 text-white"
//               placeholder="Your email address"
//               required
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Message Field */}
//           <div className="grid gap-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               name="message"
//               className="bg-gray-800 border-gray-700 text-white"
//               placeholder="Write your message..."
//               required
//             />
//             {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-80"
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter></CardFooter>
//     </Card>
//   );
// }
