import React, { useState } from 'react';

const SendMoney = () => {
    const [formData, setFormData] = useState({
        senderFirstName: '',
        senderLastName: '',
        receiverFirstName: '',
        receiverLastName: '',
        receiverBank: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="lg:container flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-left w-2/3">Sender First Name:</label>
                <input
                    type="text"
                    name="senderFirstName"
                    value={formData.senderFirstName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-2 py-1 w-3/4"
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-left w-2/3">Sender Last Name:</label>
                <input
                    type="text"
                    name="senderLastName"
                    value={formData.senderLastName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-2 py-1 w-3/4"
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-left w-2/3">Receiver First Name:</label>
                <input
                    type="text"
                    name="receiverFirstName"
                    value={formData.receiverFirstName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-2 py-1 w-3/4"
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-left w-2/3">Receiver Last Name:</label>
                <input
                    type="text"
                    name="receiverLastName"
                    value={formData.receiverLastName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-2 py-1 w-3/4"
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-left w-2/3">Receiver Bank:</label>
                <input
                    type="text"
                    name="receiverBank"
                    value={formData.receiverBank}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-2 py-1 w-3/4"
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-left w-2/3">Amount to Send:</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-2 py-1 w-3/4"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Send Money
            </button>
        </form>
    );
};

export default SendMoney;