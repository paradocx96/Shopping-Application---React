import React, {useState} from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {Button, CardImg} from "react-bootstrap";
import image from "../../assets/images/loading.webp";
import placeHolderImg from "../../assets/images/placehoderimg.png";
import axios from "axios";


type ImgCropProps = {
    setImageUrl: (url: string) => void;
    setIsImageUploading: (stateOfButton: boolean) => void;
}

const ImgUpload: React.FC<ImgCropProps> = (props) => {
    const {setImageUrl, setIsImageUploading} = props;
    const [src, setSrc] = useState<any>(null);
    const [cropper, setCropper] = useState<any>();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [uploadedImg, setUploadedImg] = useState(null);

    const onChange = (e: any) => {
        setIsVisible(true);
        props.setIsImageUploading(true);
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setSrc(reader.result);
        };
        reader.readAsDataURL(files[0]);
    }

    const convertDataUrlToBlob = (dataUrl: string): Blob => {
        const arr = dataUrl.split(',');
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: "png"});
    }

    const cropImage = async () => {
        if (typeof cropper !== "undefined") {
            setIsVisible(false);
        }
        setIsLoading(true);

        const fileCropped = await new File([convertDataUrlToBlob(cropper.getCroppedCanvas().toDataURL())],
            "croppedImg.jpeg", {type: `image/jpeg`});

        const data = new FormData();
        data.append('file', fileCropped);

        data.append('upload_preset', 'sliit_shoping_application_react')

        axios.post("https://api.cloudinary.com/v1_1/djvpvdfqp/image/upload", data)
            .then(function (response) {

                setImageUrl(response.data.secure_url);
                setUploadedImg(response.data.secure_url);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                setIsImageUploading(false);
                setIsLoading(false);
            });
    }

    return (
        <div>
            <label className="pt-3">Product Image</label><br/>
            {
                isLoading &&
                <div className="text-center pt-2"><img width={270} src={image} alt='....'/><p>Loading...</p></div>
            }
            {
                !isLoading && !isVisible && uploadedImg &&
                <div className="text-center pt-2"><CardImg style={{width: '270px'}} className="image-preview py-2"
                                                           variant="top"
                                                           src={uploadedImg ? uploadedImg + "" : placeHolderImg}/></div>
            }

            <input className="pb-3" type="file" onChange={(e) => onChange(e)} accept="image/*"/>
            <br/>
            {
                isVisible &&
                <div>
                    <Cropper
                        className='negation'
                        aspectRatio={1}
                        preview=".img-preview"
                        guides={false}
                        src={src}
                        viewMode={1}
                        dragMode="move"
                        cropBoxMovable={false}
                        onInitialized={(instance) => {
                            setCropper(instance);
                        }}
                    />
                    {
                        isVisible &&
                            <React.Fragment>
                                <Button className='custom-primary-button float-right mt-2' onClick={cropImage}>Crop Image</Button>

                                <br/>
                                <br/>
                            </React.Fragment>
                    }
                </div>
            }
        </div>
    );
}

export default ImgUpload;
