/* eslint-disable @next/next/no-img-element */

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import Link from "next/link";
import { Safari } from "@/components/magicui/safari";

export function Tailwind() {
  return (
    <Card className="relative max-w-[45vw] shadow-none max-md:max-w-[90vw]">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <Safari
            url="tailwindcss.com"
            className="size-full"
            imageSrc="WebsitePictures/Tailwind.png"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">Tailwind css</CardTitle>
        <CardDescription>
          Popular React framework for building server-side rendered (SSR) and static web applications.
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href="https://tailwindcss.com/" target="_blank" className="rounded-lg bg-orange-500">
          <Button>Let&apos;s go</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
