import React, { useState, useEffect } from "react";
import axios from "axios";

import AddModel from "./Components/AddModel";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [addModel, setAddModel] = useState(false);

    const showDate = (data) => {
        // get a new date (locale machine date time)
        const date = new Date();
        // get the date as a string
        const _date = date.toDateString();
        // get the time as a string
        // const time = date.toLocaleTimeString();

        return _date;
    };

    const getData = () => {
        axios
            .get("/api/todos/")
            .then(({ data }) => setData(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    }, [addModel]);

    const handleDone = (e, item) => {
        const value = e.target.checked;
        let _item = item;
        _item.is_done = value;

        setLoading(true);

        axios
            .put(`/api/todos/${item.id}/`, _item)
            .then(() => getData())
            .catch((err) => console.log(err));

        getData();
        setLoading(false);
    };

    if (loading)
        return (
            <div className="App flex justify-center items-center w-full h-full">
                Loading...Please wait...
            </div>
        );

    return (
        <div className="App flex items-center w-full h-full flex-col">
            <h1 className="text-4xl mt-3">ToDo App</h1>

            <button
                className="mt-5 border bg-green-600 text-white px-4 py-2 rounded text-base"
                onClick={() => setAddModel(true)}
            >
                + Add new Task
            </button>

            {addModel && <AddModel closeModel={() => setAddModel(false)} />}
            {/* // todo table */}
            {data.length > 0 && (
                <div className="overflow-hidden rounded-lg shadow-xs w-full mt-5 max-w-2xl">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date Added</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                {data.map((item, index) => (
                                    <tr key={index} className="text-gray-700">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{item.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-xs cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={item.is_done}
                                                className="cursor-pointer"
                                                onChange={(e) => handleDone(e, item)}
                                            />
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {showDate(item.data_added)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
