"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import {
  AddChildrenFunction,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree";
//import HierarchyPointNode from "react-d3-tree";
import AddChildModal from "@/components/AddChildModal";
import { Modal } from "react-responsive-modal";
import Card from "@/components/Card";
import ShowParentDataModal from "@/components/showParentDataModal";

//dynamically import the tree
const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});
const containerStyles = {
  width: "100vw",
  height: "100vh",
};

export default function Home() {

  
  
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: "DLC",
    children: [
      {
        name: "Research",
        attributes: { data: "michael jackson was here" },
        children: [
          {
            name: "External",
            attributes: {},
            children: [],
          },
          {
            name: "Internal",
            attributes: {},
            children: [],
          },
        ],
      },
      {
        name: "Planning",
        attributes: {},
        children: [
          {
            name: "PRD",
            attributes: {},
            children: [],
          },
          {
            name: "Specs",
            attributes: {},
            children: [],
          },
        ],
      },
      {
        name: "Designing",
        attributes: {},
        children: [
          {
            name: "Hardware",
            attributes: {},
            children: [],
          },
          {
            name: "Software",
            attributes: {},
            children: [],
          },
        ],
      },
      {
        name: "Manufacturing",
        attributes: {},
        children: [
          {
            name: "Material",
            attributes: {},
            children: [],
          },
          {
            name: "Production",
            attributes: {},
            children: [],
          },
        ],
      },
      {
        name: "Sales/Manufacturing",
        attributes: {},
        children: [
          {
            name: "Online",
            attributes: {},
            children: [],
          },
          {
            name: "Dealership",
            attributes: {},
            children: [],
          },
        ],
      },
    ],
  });
  // const orgChart = {
  //   name: 'DLC',
  //   children: [
  //     {
  //       name: 'Research',
  //       attributes: { },
  //       children: [],
  //     },
  //     {
  //       name: 'Planning',
  //       attributes: { },
  //       children: [],
  //     },
  //     {
  //       name: 'Designing',
  //       attributes: { },
  //       children: [],
  //     },
  //     {
  //       name: 'Manufacturing',
  //       attributes: { },
  //       children: [],
  //     },{
  //       name:'Sales/Manufacturing',
  //       attributes:{},
  //       children:[],
  //     }
  //   ],
  // };

  const [node, setNode] = useState<TreeNodeDatum | undefined>(undefined);
  const handleNodeClick=(nodeDatum)=>{
    setNode(nodeDatum);
  };
  const onCloseModal = () => setNode(undefined);
  //add functin to handle the modal add submission
  const handleSubmit = (name: string) => {
    setTree(tree);
    console.log("so you typed and handleSubmit was fired with --" + name);
  };
  const nodeSize = { x: 200, y: 50 };
  const foreignObjectProps = {
    width: nodeSize.x - 100,
    height: nodeSize.y,
    x: 10,
    y: 10,
  };
  //create a funciton to set height at which the tree renders
  const heightScreen = typeof window !== "undefined" ? window.innerHeight : 0;
  const height = heightScreen / 2;

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="h-screen w-screen">
      <Tree
        data={tree}
        // onNodeClick={(datum) => {
        //   {
        //     setNode(datum.data);
        //   }
        // }}
        orientation="horizontal"
        pathFunc="step"
        translate={{ x: 100, y: height }}
        nodeSize={nodeSize}
        //collapsible={false}
        renderCustomNodeElement={(r3dtProps)=>
          renderNodeWithCustomEvents({...r3dtProps,handleNodeClick})
        }
      />
      {/* <AddChildModal nameParent={node?.name}  onOpen={Boolean(node)} onClose={onCloseModal}
      onSubmit={handleSubmit}/> */}
      {node && (
      <ShowParentDataModal
        nodeName={node?.name}
        onOpen={Boolean(node)}
        onClose={onCloseModal}
        nodeAtt={node?.attributes?.data}
      />)}
      {/* <Card dataAttibutes={node?.attributes} onOpen={Boolean(node)} onClose={onCloseModal}/> */}
    </div>
    // </main>
  );
}
//let try and create a custom node layout
const renderNodeWithCustomEvents = ({
  nodeDatum,
  toggleNode,
  handleNodeClick
}) => (
  <g>
    <circle r="5" onClick={() => handleNodeClick(nodeDatum)} />
    <text fill="black" strokeWidth="1" x="-20" y="30" onClick={toggleNode}>
      {nodeDatum.name}
    </text>
  </g>
);