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
    <div className="100vw 100vh">
      <Tree data={tree}/>
    </div> 
    // </main>
  );
}
