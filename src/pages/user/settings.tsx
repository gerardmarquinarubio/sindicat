import { useState } from "react";
import { Uploader } from "~/components/Uploader";

export default function User() {

    function handleUpload(url: string) {
        console.log(url);
    }

    return (
        <>
            <Uploader onUpload={handleUpload}/>
        </>
    )
}