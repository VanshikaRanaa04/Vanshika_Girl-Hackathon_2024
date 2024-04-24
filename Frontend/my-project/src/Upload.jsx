import React, { useState } from 'react';

const Upload = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="bg-[#83A16C] min-h-screen flex items-center justify-center">
            <div className="text-center bg-white rounded-lg p-12 shadow-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-9">Wildfire Prediction</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="file" name="file" className="p-3 mr-3 border border-gray-300 rounded" accept=".jpg, .jpeg, .png" required />
                    <br />
                    <br/>
                    <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">PREDICT</button>
                </form>
                {message && <p className="mt-9 text-xl text-gray-800">{message}</p>}
            </div>
        </div>
    );
};

export default Upload;

