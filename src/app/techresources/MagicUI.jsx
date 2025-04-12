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

export function MagicUI() {
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
            url="magicui.design"
            className="size-full"
            imageSrc="WebsitePictures/MagicUI.png"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">Magic UI</CardTitle>
        <CardDescription>
          UI library that provides a set of customizable and reusable components for building user interfaces in web applications. It is designed to be flexible and easy to use, allowing developers to create beautiful and responsive UIs quickly.
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href="https://magicui.design" target="_blank" className="rounded-lg bg-orange-500">
          <Button>Let&apos;s go</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
