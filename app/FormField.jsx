"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function FormField() {
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card className="relative overflow-hidden text-white w-[43vw]">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form and we will get back to you</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-4"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          {/* Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              {...register("name")}
              name="name"
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              name="email"
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="name@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...register("message")}
              name="message"
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Write your message..."
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

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
// import { ShineBorder } from "@/components/magicui/shine-border";

// export function FormField() {
//   return (
//     <Card className="relative overflow-hidden md:w-[42vw] max-md:w-[78vw]">
//       {/* <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className='max-md:hidden'/> */}
//       {/* <ShineBorder shineColor={["#fffae6"]} className='max-md:hidden' /> */}
//       <CardHeader>
//         <CardTitle>Login</CardTitle>
//         <CardDescription>
//           Enter your credentials to access your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" placeholder="name@example.com" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <Button className="w-full">Sign In</Button>
//       </CardFooter>
//     </Card>
//   );
// }
