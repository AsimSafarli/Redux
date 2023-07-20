import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import {TbTruckDelivery} from 'react-icons/tb'
import { BiCartAlt, BiSearch } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { PiCirclesFourFill } from "react-icons/pi";

function DetailComponent({ productDetail }) {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  return (
    <div className="flex flex-row mx-auto container gap-x-10 ">
      <div className="w-1/2">
        <img src={productDetail.image} className="w-[500px]  h-[600px]" />
      </div>
      <div className="flex flex-col gap-y-7 w-1/2">
        <div className="text-2xl font-semibold ">{productDetail.title}</div>
        <div className="flex flex-row gap-x-7 items-center text-2xl">
        {productDetail.rating.rate}
          <Rate
            defaultValue={4}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <div className="text-2xl gap-x-7 flex flex-row">
          <div>Sold :</div>
          {productDetail.rating.count}
        </div>
        <div className="text-center">{productDetail.description}</div>
        <div>
          <div className="flex flex-row justify-start items-center gap-x-10">
            <div className="p-1 border border-solid border-gray-300 rounded text-gray-200">
              <GrFavorite className="text-2xl " />
            </div>
            <div className="flex flex-row justify-center items-center bg-red-500 w-screen p-1 rounded hover:text-red-500 hover:bg-white  text-white hover:border hover:border-solid hover:border-red-500">
              <BiCartAlt className="text-2xl " />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row items-center w-full h-max p-4 border border-solid border-gray-500 gap-x-4 rounded">
            <div><TbTruckDelivery className="text-5xl"/></div>
            <div>
              <div className="text-base font-medium ">Free Delivery</div>
              <div className="text-xs font-medium">Enter your postal code for Delivery Availability</div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full h-max p-4 border border-solid border-gray-500 gap-x-4 rounded">
            <div><PiCirclesFourFill className="text-5xl"/></div>
            <div>
              <div className="text-base font-medium ">Return Delivery</div>
              <div className="text-xs font-medium">Free 30 Days Delivery Returns. Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
