'use client'

import { AddLiqidity } from "@/components/addLiqidity";
import { Head } from "@/components/head";
import { OpenBook } from "@/components/openBook";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
        <div className="p-8">
           <Head />
           <OpenBook />
           <AddLiqidity/>
        </div>
  );
}
