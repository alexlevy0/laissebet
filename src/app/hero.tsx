import React from "react"

export function HeroLayout() {
        return (
                <div className="flex flex-col relative shrink-0 box-border min-h-[100px] w-full h-screen mx-auto p-5 max-md:h-screen max-md:w-full max-md:self-stretch">
                        <section className="flex flex-col relative shrink-0 box-border min-h-[100px] w-full h-screen self-stretch grow max-w-[1200px] items-stretch mx-auto p-5 max-md:h-screen max-md:w-full max-md:self-stretch">
                                <div className="flex flex-col relative shrink-0 box-border h-auto grow-0 w-full self-stretch gap-9 mt-12 mb-auto mx-auto max-md:w-full max-md:self-stretch max-md:m-auto">
                                        <div className="flex flex-col relative shrink-0 box-border justify-center items-center w-full self-stretch h-auto grow-0 mt-12 mx-auto max-md:w-screen max-md:ml-[calc(50%_-_50vw)] max-md:px-6 max-sm:px-4">
                                                <div className="flex flex-col max-w-[860px] justify-start items-start">
                                                        <div className="max-w-[860px] text-zinc-800 text-6xl leading-[76.8px] tracking-tight text-center font-bold mx-auto max-md:text-5xl max-sm:text-4xl max-sm:tracking-normal max-sm:w-auto max-sm:self-stretch">
                                                                {" "}
                                                                Customisable Hero Layout{" "}
                                                        </div>
                                                        <div className="max-w-[860px] text-zinc-800 text-2xl tracking-normal text-center font-light leading-7 mt-2 max-md:text-neutral-600 max-md:font-light max-sm:text-base max-sm:leading-5">
                                                                {" "}
                                                                Describe your product value here. Also, customise the layout as per your
                                                                brand guidelines and hit publish on the top right.{" "}
                                                        </div>
                                                </div>
                                                <div className="w-4/5 self-center flex flex-row gap-4 items-center mt-6 mx-auto">
                                                        <button
                                                                className="relative shrink-0 box-border appearance-none bg-[black] text-[white] rounded text-center cursor-pointer w-auto grow max-w-[30%] ml-auto mt-5 p-6 border-2 border-solid border-black max-sm:max-w-full max-sm:py-4"
                                                                aria-label="Buy Now"
                                                                type="button"
                                                        >
                                                                Buy Now
                                                        </button>
                                                        <button
                                                                className="relative shrink-0 box-border appearance-none text-black rounded text-center cursor-pointer w-auto grow max-w-[30%] mr-auto mt-5 p-6 border-2 border-solid border-black max-sm:max-w-full max-sm:py-4"
                                                                aria-label="Explore"
                                                                type="button"
                                                        >
                                                                Explore
                                                        </button>
                                                </div>
                                        </div>
                                        <div className="relative shrink-0 box-border flex flex-col items-stretch gap-6 w-full mt-9 mx-auto">
                                                <img
                                                        loading="lazy"
                                                        srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F90b131eb46604654875e4fb58ffb5c0a"
                                                        className="aspect-[1.54] object-contain object-top w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden h-auto grow-0 self-stretch max-w-[1000px] mx-auto rounded-2xl max-md:h-auto max-md:grow-0 max-md:rounded-2xl"
                                                        alt="Product"
                                                />
                                        </div>
                                </div>
                        </section>
                </div>
        )
}

export default HeroLayout
