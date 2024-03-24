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
        attributes: {
          data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
          color: "blue",
        },
        children: [
          {
            name: "External",
            attributes: {
              data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
              color: "blue",
            },
            children: [
              {
                name: "B2C",
                attributes: {
                  data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
                  color: "blue",
                },
                children: [
                  {
                    name: "Online",
                    attributes: {
                      data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
                      color: "blue",
                    },
                    children: [],
                  },
                  {
                    name: "Interview",
                    attributes: {
                      data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
                      color: "blue",
                    },
                    children: [],
                  },
                  {
                    name: "Public Data",
                    attributes: {
                      data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
                      color: "blue",
                    },
                    children: [],
                  },
                  {
                    name: "Health",
                    attributes: {
                      data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
                      color: "blue",
                    },
                    children: [],
                  },
                ],
              },
              {
                name: "B2C",
                attributes: {
                  data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
                  color: "blue",
                },
                children: [],
              },
            ],
          },
          {
            name: "Internal",
            attributes: {
              data: "Gather information on market trends, customer preferences, and competitor analysis. This includes data on demographics, purchasing behavior, and market size",
              color: "blue",
            },
            children: [],
          },
        ],
      },
      {
        name: "Planning",
        attributes: {
          data: "List of components and raw materials needed for production,Data on available resources (machinery, labor, etc.) and their utilization. Time required for procurement, production, and delivery",
          color: "aqua",
        },
        children: [
          {
            name: "PRD",
            attributes: {
              data: "List of components and raw materials needed for production,Data on available resources (machinery, labor, etc.) and their utilization. Time required for procurement, production, and delivery",
              color: "aqua",
            },
            children: [],
          },
          {
            name: "Specs",
            attributes: {
              data: "List of components and raw materials needed for production,Data on available resources (machinery, labor, etc.) and their utilization. Time required for procurement, production, and delivery",
              color: "aqua",
            },
            children: [],
          },
        ],
      },
      {
        name: "Designing",
        attributes: {
          data: "Detailed specifications for the product, including dimensions, materials, and features,Measurements, CAD files, and design iterations",
          color: "orange",
        },
        children: [
          {
            name: "Hardware",
            attributes: {
              data: "Detailed specifications for the product, including dimensions, materials, and features,Measurements, CAD files, and design iterations",
              color: "orange",
            },
            children: [],
          },
          {
            name: "Software",
            attributes: {
              data: "Detailed specifications for the product, including dimensions, materials, and features,Measurements, CAD files, and design iterations",
              color: "orange",
            },
            children: [],
          },
        ],
      },
      {
        name: "Manufacturing",
        attributes: {
          data: "Cycle Times: Time taken for each manufacturing step. Quality Control Metrics: Defect rates, yield, and rework data",
          color: "pink",
        },
        children: [
          {
            name: "Material",
            attributes: {
              data: "Cycle Times: Time taken for each manufacturing step. Quality Control Metrics: Defect rates, yield, and rework data",
              color: "pink",
            },
            children: [],
          },
          {
            name: "Production",
            attributes: {
              data: "Cycle Times: Time taken for each manufacturing step. Quality Control Metrics: Defect rates, yield, and rework data",
              color: "pink",
            },
            children: [],
          },
        ],
      },
      {
        name: "Sales/Manufacturing",
        attributes: {
          data: "Customer Orders: Details of products ordered, quantities, and delivery dates.Invoices: Billing information.",
          color: "violet",
        },
        children: [
          {
            name: "Online",
            attributes: {
              data: "Customer Orders: Details of products ordered, quantities, and delivery dates.Invoices: Billing information.",
              color: "violet",
            },
            children: [],
          },
          {
            name: "Dealership",
            attributes: {
              data: "Customer Orders: Details of products ordered, quantities, and delivery dates.Invoices: Billing information.",
              color: "violet",
            },
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
  const handleNodeClick = (nodeDatum) => {
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
  const elem=document.getElementById("#pannel");
  const bound=elem?.getBoundingClientRect();
  const xCenter=0;
  const yCenter=0;
  if(bound){
  const xCenter=(bound.left + bound.right) / 2;
  const yCenter=(bound.top + bound.bottom) / 2;
}
  //create a funciton to set height at which the tree renders
  const heightScreen = typeof window !== "undefined" ? window.innerHeight : 0;
  const heightForTranslate = heightScreen / 2;

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="h-screen w-screen " id="pannel">
      <Tree
        data={tree}
        // onNodeClick={(datum) => {
        //   {
        //     setNode(datum.data);
        //   }
        // }}
        orientation="horizontal"
        pathFunc="step"
        translate={{ x: xCenter, y: yCenter }}
        nodeSize={nodeSize}
        dimensions={{width: 1400,height:500}}
        //collapsible={false}
        renderCustomNodeElement={(r3dtProps) =>
          renderNodeWithCustomEvents({ ...r3dtProps, handleNodeClick })
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
        />
      )}
      {/* <Card dataAttibutes={node?.attributes} onOpen={Boolean(node)} onClose={onCloseModal}/> */}
    </div>
    // </main>
  );
}
//let try and create a custom node layout
const renderNodeWithCustomEvents = ({
  nodeDatum,
  toggleNode,
  handleNodeClick,
}) => (
  <g>
    {/* <circle r="5" onClick={() => handleNodeClick(nodeDatum)} /> */}
    <rect
      width="20"
      height="20"
      y="-10"
      fill={nodeDatum?.attributes?.color}
      onClick={() => handleNodeClick(nodeDatum)}
    />
    <text
      className="rectangle"
      fill="black"
      strokeWidth="1"
      x="-20"
      y="30"
      onClick={toggleNode}
    >
      {nodeDatum.name}
    </text>
  </g>
);
