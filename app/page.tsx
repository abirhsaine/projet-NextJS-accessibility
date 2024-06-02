import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {NavMenu} from "@/components/Navs/NavMenu"

import dashboard from "./login/page"


export default dashboard;


// export default function IndexPage() {
//   return (
//     <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
//       <NavMenu className="m-auto"/>
//       <div className="flex max-w-[980px] flex-col items-start gap-2">
//         <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
//           Beautifully designed components <br className="hidden sm:inline" />
//           built with Radix UI and Tailwind CSS.
//         </h1>
//         <p className="max-w-[700px] text-lg text-muted-foreground">
//           Accessible and customizable components that you can copy and paste
//           into your apps. Free. Open Source. And Next.js 13 Ready.
//         </p>
//       </div>
//       <div className="flex gap-4">
//         <Link href={siteConfig.links.docs} target="_blank" rel="noreferrer">
//           <Button className={buttonVariants()}>
//             Documentation
//           </Button>
//         </Link>
//         <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
//           <Button className={buttonVariants({ variant: "outline" })}>
//             GitHub
//           </Button>
//         </Link>
//       </div>
//       <Tabs defaultValue="music" className="h-full space-y-6">
//         <div className="flex items-center justify-between">
//           <TabsList>
//             <TabsTrigger value="music">Music</TabsTrigger>
//             <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
//             <TabsTrigger value="live" >
//               Live
//             </TabsTrigger>
//           </TabsList>
//         </div>
//       </Tabs>
//     </section>
//   );
// }
