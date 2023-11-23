import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

export default function HomePage() {

    function onClick() {
        window.location = "/comic-strip";
    }

    return (
        <>
            <div class="min-h-screen">
                <div class="row-span-1 h-[10%]">
                    <Navbar />
                </div>
                <div class="md:flex">
                    <div class="md:w-1/2 p-4 my-auto">
                        <div class="mt-40 inline-block">
                            <p className="text-gray-300 mx-2 text-5xl font-bubblegum tracking-wide font-extrabold md:text-left lg:text-8xl md:text-12xl">
                                Ignite creativity with Titan Comics !
                            </p>
                        </div>
                        <div class="text-xl md:text-left mx-2 font-bubblegum text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3 lg:text-4xl md:text-2xl">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Ignite your artistic spark!",
                                        "Sculpt the canvas of your dreams!",
                                        "Create wonders at the speed of thought!"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>
                    </div>
                    <img src="/aot.png" class="md:mx-2 mx-auto" />
                </div>
                <div>
                    <div class="mx-5 mt-24 mb-8 text-3xl font-bubblegum text-white">
                        Embark on your comic creation journey – click below to weave your visual tale!
                    </div>
                    <div class="px-8 pt-2 pb-4 max-w-screen-md mx-auto">
                        <button 
                            onClick={onClick} 
                            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Let's Start
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}