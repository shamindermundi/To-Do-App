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
        axios
            .post("/api/todos/", form)
            .then((res) => console.log("res is", res))
            .catch((err) => console.log(err));
        closeModel();
    };

    console.log("form is", form);

    return (
        <div
            className="fixed flex w-full h-full px-5 py-5 rounded justify-center items-center"
            style={{ backgroundColor: "rgba(225,225,225,0.8)" }}
        >
            <div className="relative w-96">
                <span
                    className="absolute top-0 right-0 cursor-pointer"
                    onClick={() => closeModel()}
                >
                    X
                </span>

                <h6></h6>
                <form onsubmit={(e) => handleSubmit(e)} method="post">
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
