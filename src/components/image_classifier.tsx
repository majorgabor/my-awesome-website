import { useState, useEffect, useRef } from "react";
import { BeatLoader } from "react-spinners";

declare var ml5: any;
type Props = {
    imageUrl: string
    resetImageUrl: () => void
}
type Labels = { label: string, confidence: number }[];

const ImageClassifier = ({ imageUrl, resetImageUrl }: Props) => {

    const classifier = ml5.imageClassifier("mobilenet");

    const imageRef = useRef(null);
    const [labels, setLabels] = useState<Labels>();

    function gotResult(result: any): void {
        setLabels(result)
    };


    useEffect(() => {
        if (imageUrl) {
            async function classify(): Promise<void> {
                await classifier.classify(imageRef.current, gotResult);
            }
            classify();
        }
    }, []);

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <img ref={imageRef} id="image_screen" width="400" style={{ margin: "20px" }} src={imageUrl} />
            {!labels ?
                <>
                    <BeatLoader />
                    <p>Taking a good look on your image ...</p>
                </>
                :
                <>
                    <div id="output" style={{ margin: "20px" }}>
                        {labels?.map((label, i) => {
                            return <div key={i}> It is <b>{(label.confidence * 100).toFixed()}% </b>, that this picture is a(n) <b>{label.label}</b></div>
                        })}
                    </div>
                    <button style={{ margin: "20px" }} onClick={resetImageUrl}>Again!</button>
                </>
            }
        </div>
    );
}

export default ImageClassifier;