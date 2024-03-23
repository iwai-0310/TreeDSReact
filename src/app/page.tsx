"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { AddChildrenFunction, RawNodeDatum, TreeNodeDatum} from "react-d3-tree";
//import HierarchyPointNode from "react-d3-tree";
import AddChildModal from "@/components/AddChildModal";
import { Modal } from "react-responsive-modal";

//dynamically import the tree
const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});
const containerStyles = {
  width: "100vw",
  height: "100vh"
};
//turn the svg into a sqr
const renderSqrSvgNode=({nodeDatum,toggleNode})=>(
  <g>
  <rect width="20" height="20" x="-10" onClick={toggleNode} />
  <text fill="black" strokeWidth="1" x="20">
    {nodeDatum.name}
  </text>
  {/* {nodeDatum.attributes?.department && (
    <text fill="black" x="20" dy="20" strokeWidth="1">
      Department: {nodeDatum.attributes?.department}
    </text>
  )} */}
</g>
)


export default function Home() {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
      name: 'DLC',
    children: [
      {
        name: 'Research',
        attributes: { },
        children: [],
      },
      {
        name: 'Planning',
        attributes: { },
        children: [],
      },
      {
        name: 'Designing',
        attributes: { },
        children: [],
      },
      {
        name: 'Manufacturing',
        attributes: { },
        children: [],
      },{
        name:'Sales/Manufacturing',
        attributes:{},
        children:[],
      }
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
  const onCloseModal = () => setNode(undefined);
  //add functin to handle the modal add submission
  const handleSubmit=(name:string)=>{
    setTree(tree);
    console.log("so you typed and handleSubmit was fired with --"+name);
  };
  const nodeSize={x:150,y:150};
  const foreignObjectProps = { width: (nodeSize.x)-50, height: nodeSize.y, x: 20,y: 20 };
  //create a funciton to set height at which the tree renders
  const heightScreen =window.innerHeight;
  const height=heightScreen/2;
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="h-screen w-screen">
      <Tree
        data={tree}
        onNodeClick={(datum) => {setNode(datum.data);
        console.log('you clicked -> '+datum.data.name)}}
        // renderCustomNodeElement={renderSqrSvgNode}
        orientation="horizontal"
        // pathFunc="step"
        translate={{x:100,y:height}}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps)=>
        renderForeignObjectNode({...rd3tProps,foreignObjectProps})
        }
      />
      <AddChildModal  onOpen={Boolean(node)} onClose={onCloseModal}
      onSubmit={handleSubmit}
      />
    </div>
    // </main>
  );
}
//let try and create a custom node layout
const renderForeignObjectNode=({
  nodeDatum,foreignObjectProps,toggleNode
})=>(
<g>
    <circle r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);
