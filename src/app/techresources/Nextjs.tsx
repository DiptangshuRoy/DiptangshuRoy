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

export function Nextjs() {
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
            url="nextjs.org"
            className="size-full"
            imageSrc="WebsitePictures/Next.js.png"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">Next js</CardTitle>
        <CardDescription>
          {/* Popular React framework for building server-side rendered (SSR) and static web applications. */}
          A powerful React framework for building fast, scalable, and SEO-friendly web applications — with server-side rendering, static site generation, and more.
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href="https://nextjs.org/" target="_blank" className="rounded-lg">
          <Button className="group">Let&apos;s go<ChevronRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
