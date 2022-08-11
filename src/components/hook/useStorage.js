import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import { storage } from "../../config";

const useStorage = (image) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = ref(storage, image.name);
        
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on("state_changed", (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            setUrl(url)
        })
    }, [image])

    return { progress, error, url }
}

export default useStorage;