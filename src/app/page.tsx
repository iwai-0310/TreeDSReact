'use client'
import Image from "next/image";
import React,{useState} from "react";
import dynamic from "next/dynamic";

import {RawNodeDatum} from 'react-d3-tree'

//dynamically import the tree 
const Tree=dynamic(()=>import("react-d3-tree"),{
  ssr:false,
})
export default function Home() {
  const [tree,setTree]=useState< RawNodeDatum | RawNodeDatum[] >({
    name: 'root',
    children:[],
  });
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-screen  h-screen">
      <Tree data={tree}
      rootNodeClassName="
      node__root"/>
    </div> 
    // </main>
  );
}
