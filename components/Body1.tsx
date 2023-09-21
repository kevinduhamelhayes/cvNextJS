import React from "react";

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="w-full rounded-none flex flex-row h-[500px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/programing/foto2.avif"
          width={270}
        />
      </CardBody>
    </Card>
  );
}