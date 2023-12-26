"use client"
import React from "react"
import { Card, Image, Button, CardFooter, CardHeader } from "@nextui-org/react"

export function BigCard() {
        const [liked, setLiked] = React.useState(false)

        return (
                <div className="max-w-screen mx-20 mt-10 align-center flex items-center justify-center">
                        <Card
                                isBlurred
                                shadow="sm"
                                className="border-none bg-background/50 dark:bg-default-100/50"
                        >
                                <div className="m-10 gap-10 grid grid-cols-12 grid-rows-2 border-none">
                                        <Card
                                                isPressable
                                                className="col-span-12 sm:col-span-4 h-[300px]"
                                        >
                                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                                        <p className="text-tiny text-white/60 uppercase font-bold">
                                                                1.
                                                        </p>
                                                        <h4 className="text-white font-medium text-large">
                                                                PLAY
                                                        </h4>
                                                </CardHeader>
                                                <Image
                                                        removeWrapper
                                                        alt="Card background"
                                                        className="z-0 w-full h-full object-cover"
                                                        src="/images/card-example-4.jpeg"
                                                />
                                        </Card>
                                        <Card
                                                isPressable
                                                className="col-span-12 sm:col-span-4 h-[300px]"
                                        >
                                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                                        <p className="text-tiny text-white/60 uppercase font-bold">
                                                                2.
                                                        </p>
                                                        <h4 className="text-white font-medium text-large">
                                                                WIN
                                                        </h4>
                                                </CardHeader>
                                                <Image
                                                        removeWrapper
                                                        alt="Card background"
                                                        className="z-0 w-full h-full object-cover"
                                                        src="/images/card-example-3.jpeg"
                                                />
                                        </Card>
                                        <Card
                                                isPressable
                                                className="col-span-12 sm:col-span-4 h-[300px]"
                                        >
                                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                                        <p className="text-tiny text-white/60 uppercase font-bold">
                                                                3.
                                                        </p>
                                                        <h4 className="text-white font-medium text-large">
                                                                COLLECT
                                                        </h4>
                                                </CardHeader>
                                                <Image
                                                        removeWrapper
                                                        alt="Card background"
                                                        className="z-0 w-full h-full object-cover"
                                                        src="/images/card-example-2.jpeg"
                                                />
                                        </Card>
                                        <Card
                                                // isPressable
                                                isFooterBlurred
                                                className="w-full h-[300px] col-span-12 sm:col-span-5"
                                        >
                                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                        <p className="text-tiny text-white/60 uppercase font-bold">
                                                                Game On!
                                                        </p>
                                                        <h4 className="text-black font-medium text-2xl">
                                                                Boss Anybody!
                                                        </h4>
                                                </CardHeader>
                                                <Image
                                                        removeWrapper
                                                        alt="Card example background"
                                                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                                        src="/images/card-example-6.jpeg"
                                                />
                                                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                                        <div>
                                                                <p className="text-black text-tiny">
                                                                        Available
                                                                        soon.
                                                                </p>
                                                                <p className="text-black text-tiny">
                                                                        Get
                                                                        notified.
                                                                </p>
                                                        </div>
                                                        <Button
                                                                className="text-tiny"
                                                                color="primary"
                                                                radius="full"
                                                                size="sm"
                                                        >
                                                                Notify Me
                                                        </Button>
                                                </CardFooter>
                                        </Card>
                                        <Card
                                                isFooterBlurred
                                                className="w-full h-[300px] col-span-12 sm:col-span-7"
                                        >
                                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                        <p className="text-tiny text-white/60 uppercase font-bold">
                                                                Our motto:
                                                        </p>
                                                        <h4 className="text-white/90 font-medium text-xl">
                                                                No Bet Regret
                                                        </h4>
                                                </CardHeader>
                                                <Image
                                                        removeWrapper
                                                        alt="Relaxing app background"
                                                        className="z-0 w-full h-full object-cover"
                                                        src="/images/card-example-5.jpeg"
                                                />
                                                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                                        <div className="flex flex-grow gap-2 items-center">
                                                                <div className="flex flex-col">
                                                                        <p className="text-tiny text-white/60">
                                                                                Join
                                                                                us
                                                                                and
                                                                        </p>
                                                                        <p className="text-tiny text-white/60">
                                                                                Make
                                                                                Music
                                                                                Social
                                                                        </p>
                                                                </div>
                                                        </div>
                                                        <Button
                                                                radius="full"
                                                                size="sm"
                                                        >
                                                                Get MeloCaps
                                                        </Button>
                                                </CardFooter>
                                        </Card>
                                </div>
                        </Card>
                </div>
        )
}
