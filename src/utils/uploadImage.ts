export async function uploadImage(file: string): Promise<string> {
    const data = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ file: file }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const json = await data.json() as any;
    return json.url as string;
}