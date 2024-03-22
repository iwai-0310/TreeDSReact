'use client'
import Image from "next/image";
import React,{useState} from "react";
import {RawNodeDatum, Tree} from 'react-d3-tree'
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
