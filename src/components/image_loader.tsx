import { useRef } from "react";

type Props = {
    setImageUrl : React.Dispatch<React.SetStateAction<string>>
}

const ImageLoader = ({ setImageUrl } : Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const dropHandler = (event: React.DragEvent<HTMLDivElement>): void => {

        event.preventDefault();

        if (event.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            setImageUrl(URL.createObjectURL(event.dataTransfer.items[0].getAsFile() as File));
        } else {
            // Use DataTransfer interface to access the file(s)
            setImageUrl(URL.createObjectURL(event.dataTransfer.files[0]));
        }
    }

    const uploadButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {

        event.preventDefault();

        if (inputRef && inputRef.current) {
            inputRef.current.click();
        }
    }

    const fileInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
            setImageUrl(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div style={{textAlign: "center", padding: "20px", margin:"20px", border: "2px solid", borderRadius: "15spx"}} onDrop={dropHandler} onDragOver={(e: React.DragEvent) => { e.preventDefault() }}>
            <p>Drag and drop an image here!</p>
            <form>
                <button onClick={uploadButtonClickHandler}>Upload File</button>
                <input ref={inputRef} type='file' accept="image/*" hidden onChange={fileInputHandler} />
            </form>
        </div>
    );
}

export default ImageLoader;