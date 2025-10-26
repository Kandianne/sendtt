import { CardElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import Checkout from './Checkout';

const GetInfo = () => {
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [readyToCheckout, setReadyToCheckout] = useState(false);
    const [formData, setFormData] = useState({
        senderFirstName: '',
        senderLastName: '',
        receiverFirstName: '',
        receiverLastName: '',
        receiverBank: '',
        amount: ''
    });

    const editDetails = () => {
        setDataSubmitted(false);
    };

    const handleCheckout = () => {
        setReadyToCheckout(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitInfo = (e) => {
        e.preventDefault();
        setDataSubmitted(true);
        console.log(formData);
    };

    return (
        <div className="lg:container flex flex-col">
            {dataSubmitted && 
                <>
                    <div className='text-green-700 m-6'>Review details before checkout</div>
                    {Object.entries(formData).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center mb-4 lg:container">
                            <span className="text-sm font-medium text-left w-3/4">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                            <span className="text-left w-3/4 ml-4">{value}</span>
                        </div>
                    ))}
                    <button onClick={editDetails}>Edit Details</button>
                    <button onClick={handleCheckout}>Continue to Checkout</button>
                </>
            }
            {!dataSubmitted && <form onSubmit={handleSubmitInfo} className="lg:container flex flex-col">
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
            </form>}
            {readyToCheckout &&
                <Checkout amount={formData.amount} />
            }
        </div>
    );
};

export default GetInfo;