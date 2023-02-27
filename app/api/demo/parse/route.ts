import { NextRequest } from "next/server";
import fs from "fs";
import { DemoFile } from "demofile";

export async function POST(request: NextRequest){
    const body = await request.json();
    const demo = new DemoFile();
    console.log(body);
    /*demo.on("start", () => {
        console.log("Demo started!");
    })

    demo.gameEvents.on("round_start", e => {
        console.log("Round started!");
    })
    
    demo.gameEvents.on("round_end", e => {
        console.log("Round ended!");
    })
*/
}