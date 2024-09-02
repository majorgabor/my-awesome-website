import { useState } from "react";
import ImageLoader from "../components/image_loader";
import ImageClassifier from "../components/image_classifier";

const ImageClassifierPage = () => {

    const [imageUrl, setImageUrl] = useState<string>("");

    return (
        <>
            <h1 style={{textAlign: "center", margin:"20px"}}>
                Bonjour!
            </h1>
            <p style={{textAlign: "center"}}>
                This website classifies images with ml5 &#127881;
            </p>
            {!imageUrl ?
                <ImageLoader setImageUrl={setImageUrl} />
                :
                <ImageClassifier imageUrl={imageUrl} resetImageUrl={() => setImageUrl("")}/>
            }

        </>
    );
}

export default ImageClassifierPage;