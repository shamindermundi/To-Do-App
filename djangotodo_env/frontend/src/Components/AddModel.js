import React, { useState } from "react";
import axios from "axios";

const AddModel = ({ closeModel }) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        is_done: false,
    });

    const handleChange = (field, e) => {
        let _form = { ...form };
        _form[field] = e.target.value;
        setForm(_form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title) return;
        axios
            .post("/api/todos/", form)
            .then((res) => console.log("res is", res))
            .catch((err) => console.log(err));
        closeModel();
    };

    return (
        <div
            className="fixed flex w-full h-full px-5 py-5 rounded justify-center items-center"
            style={{ backgroundColor: "rgba(225,225,225,0.8)" }}
        >
            <div className="relative w-96 border border-gray-500 bg-blue-50 px-10 py-5 rounded">
                <div>
                    <h6 className="my-3 text-center text-2xl">Add new task</h6>
                    <span
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={() => closeModel()}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.60023 6.25431L12.0001 10.6538L16.4 6.26764C16.4866 6.1795 16.5906 6.1103 16.7053 6.0644C16.8201 6.01851 16.9431 5.99692 17.0666 6.00101C17.309 6.01669 17.5374 6.12005 17.7091 6.29178C17.8809 6.46351 17.9843 6.69187 17.9999 6.93422C18.0012 7.05338 17.9781 7.17155 17.9323 7.28155C17.8865 7.39155 17.8188 7.49109 17.7333 7.57414L13.3201 12.0003L17.7333 16.4264C17.9066 16.5944 18.0026 16.8263 17.9999 17.0663C17.9843 17.3087 17.8809 17.537 17.7091 17.7087C17.5374 17.8805 17.309 17.9838 17.0666 17.9995C16.9431 18.0036 16.8201 17.982 16.7053 17.9361C16.5906 17.8902 16.4866 17.821 16.4 17.7329L12.0001 13.3468L7.61356 17.7329C7.52693 17.821 7.42296 17.8902 7.30821 17.9361C7.19346 17.982 7.07043 18.0036 6.94691 17.9995C6.70001 17.9867 6.46663 17.8828 6.29181 17.708C6.11699 17.5332 6.01312 17.2998 6.00027 17.053C5.99907 16.9338 6.02208 16.8156 6.06792 16.7056C6.11376 16.5956 6.18146 16.4961 6.26693 16.413L10.6801 12.0003L6.2536 7.57414C6.17054 7.48997 6.10529 7.38992 6.06177 7.27998C6.01824 7.17003 5.99733 7.05244 6.00027 6.93422C6.01596 6.69187 6.11932 6.46351 6.29107 6.29178C6.46282 6.12005 6.6912 6.01669 6.93358 6.00101C7.05614 5.99519 7.17859 6.01467 7.29328 6.05825C7.40798 6.10183 7.51246 6.16857 7.60023 6.25431Z"
                                fill="#666666"
                            />
                        </svg>
                    </span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} method="post">
                    <div className="block text-base mb-6">
                        <span className="text-gray-700 dark:text-gray-300">Title:</span>
                        <input
                            type="text"
                            value={form.title}
                            className="p-2 rounded block w-full mt-1 border border-gray-400"
                            placeholder="e.g. - pollution"
                            onChange={(e) => handleChange("title", e)}
                        />
                    </div>
                    <div className="block text-base mb-6">
                        <span className="text-gray-700 dark:text-gray-300">Description:</span>
                        <input
                            type="text"
                            value={form.description}
                            onChange={(e) => handleChange("description", e)}
                            className="p-2 rounded block w-full mt-1 border border-gray-400"
                            placeholder="e.g. - Get safari car pollution certificate"
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full px-4 py-2 mt-4 text-base font-medium leading-5 text-center text-white bg-blue-500 border border-transparent rounded-lg  hover:bg-blue-400"
                    >
                        Add task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddModel;
