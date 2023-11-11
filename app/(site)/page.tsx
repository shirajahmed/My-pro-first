import { Metadata } from "next";

import Contact from "@/components/Contact";


export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Shiraj SaaS Boilerplate",
  description: "This is Home for Shiraj Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
   
   <div className="pb-20 pt-40">
      <Contact />
    </div>
    
    </main>
  );
}

