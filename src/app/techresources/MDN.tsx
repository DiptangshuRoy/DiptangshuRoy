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
import { ChevronRightIcon } from "lucide-react";

export function MDN() {
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
            url="developer.mozilla.org"
            className="size-full"
            imageSrc="WebsitePictures/MDN.png"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">MDN_Web Docs</CardTitle>
        <CardDescription>
          The go-to resource for web developers, offering in-depth documentation on HTML, CSS, JavaScript, and more — straight from Mozilla.
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href="https://developer.mozilla.org/en-US/" target="_blank" className="rounded-lg">
        <Button className="group">Let&apos;s go<ChevronRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
