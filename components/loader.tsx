import { GridBackground } from "./bg-patterns";

export function Loader() {
    return (
        <GridBackground
            element="div"
            spotlight
            className="h-[100dvh] flex items-center"
            mask
        >
            <div className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl">
                <div className="bg-[#333] flex items-center p-[5px] text-whitec relative py-2">
                    <div className="flex absolute left-3">
                        <span className="h-4 w-4 bg-[#ff605c] rounded-xl mr-2"></span>
                        <span className="h-4 w-4 bg-[#ffbd44] rounded-xl mr-2"></span>
                        <span className="h-4 w-4 bg-[#00ca4e] rounded-xl"></span>
                    </div>
                    <div className="flex-1 text-center text-white text-4xl font-bold animate-pulse">
                        Status
                    </div>
                </div>
                <div className="py-5 px-3 text-[#0f0]">
                    <div className="text-3xl">
                        <span className="mr-1 animate-[pulse_1s_ease-in-out_infinite]">
                            Loading
                        </span>
                        <span className="animate-[ping_1s_0.5s_ease-in-out_infinite]">
                            .
                        </span>
                        <span className="animate-[ping_1s_0.7s_ease-in-out_infinite]">
                            .
                        </span>
                        <span className="animate-[ping_1s_0.9s_ease-in-out_infinite]">
                            .
                        </span>
                    </div>
                    <div className="flex-col gap-4 w-full flex items-center justify-center mt-5">
                        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </GridBackground>
    );
}
