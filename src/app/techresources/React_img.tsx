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

export function React_img() {
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
            url="react.dev"
            className="size-full"
            imageSrc="WebsitePictures/React.png"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">React</CardTitle>
        <CardDescription>
          Well known JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable UI components and manage the state of their applications efficiently.
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href="https://react.dev/" target="_blank" className="rounded-lg bg-orange-500">
          <Button>Let&apos;s go</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
