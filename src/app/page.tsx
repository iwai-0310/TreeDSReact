"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree";
import AddChildModal from "@/components/AddChildModal";
import { Modal } from "react-responsive-modal";

//dynamically import the tree
const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});
export default function Home() {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: "root",
    children: [],
  });
  const [node, setNode] = useState<undefined | TreeNodeDatum>(undefined);
  const [open, setOpen] = useState(false);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="h-screen w-screen">
      <Tree
        data={tree}
        rootNodeClassName="node__root rd3t-label__title "
        onNodeClick={() => setOpen(true)}
        translate={{
          x: 200,
          y: 200,
        }}
      />
      <AddChildModal open={open} setOpen={setOpen} />
    </div>
    // </main>
  );
}
