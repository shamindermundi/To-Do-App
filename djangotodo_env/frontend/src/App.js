import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const showDate = (data) => {
        // get a new date (locale machine date time)
        const date = new Date();
        // get the date as a string
        const _date = date.toDateString();
        // get the time as a string
        // const time = date.toLocaleTimeString();

        return _date;
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get("/api/todos/")
            .then(({ data }) => setData(data))
            .catch((err) => console.log(err));
        setLoading(false);
    }, []);

    if (loading)
        return (
            <div className="App flex justify-center items-center w-full h-full">
                Loading...Please wait...
            </div>
        );

    console.log("data is", data);

    return (
        <div className="App flex items-center w-full h-full flex-col">
            <h1 className="text-4xl mt-3">ToDo App</h1>

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
                                                // checked={item.is_done}
                                                className="cursor-pointer"
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
