"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { RawNodeDatum, TreeNodeDatum} from "react-d3-tree";
//import HierarchyPointNode from "react-d3-tree";
import AddChildModal from "@/components/AddChildModal";
import { Modal } from "react-responsive-modal";

//dynamically import the tree
const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});
export default function Home() {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: "DLC",
    children: [],
  });
  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };

  const [node, setNode] = useState<TreeNodeDatum | undefined>(undefined);
  // const [open, setOpen] = useState(false);
   //change state from close to open when open clicked
  // const onOpenModal = () => setOpen(true);
  //change state from open to close when close clicked
  // const onCloseModal = () => setOpen(false);
  const onCloseModal = () => setNode(undefined);
  //add functin to handle the modal add submission
  const handleSubmit=(name:string)=>{
    setTree(orgChart)
  };
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="h-screen w-screen">
      <Tree
        data={tree}
        onNodeClick={(datum) => setNode(datum.data)}
        translate={{
          x: 200,
          y: 200,
        }}
      />
      <AddChildModal  onOpen={Boolean(node)} onClose={onCloseModal}
      onSubmit={handleSubmit}
      />
    </div>
    // </main>
  );
}
