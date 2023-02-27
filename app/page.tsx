"use client"
import { useState } from "react"

export default function Page() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState("")

    const handleFile = (e: any) => {
        const file = e.target.files[0]
        if(!file) return setError("No file selected")
        if(file.name.includes(".dem")){
            setFile(file)
        } else {
            setError("File is not a demo file")
        }
    }


    const uploadFile = (file: any) => {
        fetch("/api/demo/parse", {
            method: "POST",
            body: "sex"
        })
        console.log("Form data: ", file)
    }

    return (
        <div className="md:container md:mx-auto">
            <h1 className="title">Import your demo file from CSGO</h1>
            <input type="file" id="file" onChange={(e) => {
                handleFile(e)
            }}/>
            {error ? <p className="error">{error}</p> : null}
            <button className="button" onClick={() => {
                uploadFile(file)
            }}>Upload</button>
        </div>
    )
}