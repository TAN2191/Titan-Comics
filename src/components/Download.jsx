import html2canvas from "html2canvas";
import { toast } from "react-toastify";


export default function ComicDownload() {
    async function downloadComicStrip() {
        let imageElement = document.getElementById("strip-panel");
        console.log(imageElement);
        const canvas = await html2canvas(imageElement);
        const dataURL = canvas.toDataURL("image/png", 1.0);
        console.log(dataURL);
        const link = document.createElement('a');
        link.href = dataURL;
        link.setAttribute('download', 'strip-comic.png');
        link.click();
        URL.revokeObjectURL(dataURL);
    }
    return <>
        <div class="px-8 pt-6 pb-4 max-w-screen-md mx-auto">
        <button onClick={downloadComicStrip} class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Download
        </button>
        </div>
    </>;
}