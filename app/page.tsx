import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Analytics } from "@vercel/analytics/react"

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  <Analytics/>
  return <SliceZone slices={page.data.slices} components={components} />;
  
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    
  };
}
