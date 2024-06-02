// pages/hello.tsx
'use client'
import { NavMenu } from '@/components/Navs/NavMenu';
import { Icons } from '@/components/icons';
import FlexCards from '@/components/specials/FlexCards';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import { Label } from '@radix-ui/react-label';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Link } from 'lucide-react';
import React from 'react';


import Cardy from '@/components/specials/Card'


const HelloWorldPage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">


    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" aria-labelledby='wlcm-redeemer' tabIndex={0}>Welcome back Redeemer!</h1>
      <p id="wlcm-redeemer" className="max-w-[700px] text-lg text-muted-foreground">
      Please select the option that you are looking for
      </p>
    </div>
    <Separator />

    <div className="flex justify-between  gap-3">
      <Cardy title="Quit<br/>Smoking" href="/dashboard/quit-smoking" icon={<Icons.quitSmoking className="mb-3 h-6 w-6" />} />
      <Cardy title="Build<br/>Reputation" href="/dashboard/power-reputation-strategies" icon={<Icons.relieveStress className="mb-3 h-6 w-6" />} />
      <Cardy title="Relieve<br/>Solitude" href="/dashboard/navigating-through-solitude" icon={<Icons.improveSleep className="mb-3 h-6 w-6" />} />
    </div>


  </section>
  );
};

export default HelloWorldPage;
