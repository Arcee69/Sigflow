import { appUrls } from "../services/urls";

export function isObjectEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}


export function debounce(func) {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, 800);
    };
};

export const uploadImageToS3Bucket = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
    const response = await api.post(appUrls.S3BUCKETUPLOAD_URL, formData)
    return response;
};

export const selectStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "#FFF6DC",
        minHeight: 56,
        borderColor: "#FCB900",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#FCB900",
            outlineColor: "#FCB900"
        }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#FCB900" : "#FFF",
            color: isFocused ? "#FFF" : "#000",
            cursor: isDisabled ? "not-allowed" : "default",
        };
    },
}

