import axios from 'axios';
import React, { useState } from 'react';
import { FaIdCard, FaUser, FaCalendarAlt, FaAddressCard } from 'react-icons/fa';

function SignUpInvestor() {
    const [formData, setFormData] = useState({
        aadhar: '',
        pan: '',
        name: '',
        dob: ''
    });

    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState({ aadhar: false, pan: false });
    const [verified, setVerified] = useState({ aadhar: false, pan: false });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setError('');
        setResult('');
    };

    const verifyAadhar = async () => {
        setLoading(prev => ({ ...prev, aadhar: true }));
        setError('');
        setResult('');

        try {
            const res = await axios.post("http://localhost:5000/api/aadhaar/verifyAadhaar", {
                aadhaar_number: formData.aadhar
            });

            const data = res.data?.data;
            const entry = Array.isArray(data) ? data[0] : null;

            const taskStatus = entry?.status;
            const sourceOutput = entry?.result?.source_output;

            console.log("source_output:", JSON.stringify(sourceOutput, null, 2));

            // ✅ Change this condition based on actual response content
            const isVerified = taskStatus === 'completed' && sourceOutput?.status === 'id_found';

            if (isVerified) {
                setVerified(prev => ({ ...prev, aadhar: true }));
                setResult('Aadhaar verification successful!');
                console.log("Full Aadhaar Response:", JSON.stringify(res.data, null, 2));
                console.log("source_output:", JSON.stringify(res.data?.data?.[0]?.result?.source_output, null, 2));

            } else {
                setVerified(prev => ({ ...prev, aadhar: false }));
                const msg = entry?.message || "Aadhaar verification failed. Please check your Aadhaar number.";
                setError(msg);
            }

        } catch (err) {
            setVerified(prev => ({ ...prev, aadhar: false }));
            setError("Aadhaar verification failed. Please try again.");
        } finally {
            setLoading(prev => ({ ...prev, aadhar: false }));
        }
    };

const verifyPAN = async () => {
    setLoading(prev => ({ ...prev, pan: true }));
    setError('');
    setResult('');

    try {
        // Normalize name before sending
        const cleanedName = formData.name
            .trim()
            .replace(/\s+/g, ' ') // collapse multiple spaces
            .toUpperCase()
            .replace(/[^\w\s]/g, '') // remove special characters (optional)
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const res = await axios.post("http://localhost:5000/api/pan/verifyPan", {
            id_number: formData.pan,
            full_name: cleanedName,
            dob: formData.dob
        });

        console.log("PAN Verification Response:", JSON.stringify(res.data, null, 2));

        const data = res.data?.data;
        const entry = Array.isArray(data) ? data[0] : null;

        const taskStatus = entry?.status;
        const sourceOutput = entry?.result?.source_output;

        const isVerified =
            taskStatus === 'completed' &&
            sourceOutput?.status === 'id_found' &&
            sourceOutput?.name_match === true;

        if (isVerified) {
            setVerified(prev => ({ ...prev, pan: true }));
            setResult("PAN verification successful!");
        } else {
            setVerified(prev => ({ ...prev, pan: false }));

            const expected = sourceOutput?.input_details?.input_name;
            const entered = formData.name.trim().toLowerCase();
            const expectedNormalized = expected?.trim().toLowerCase();

            console.log("Entered name:", entered);
            console.log("Expected name:", expectedNormalized);

            const msg =
                sourceOutput?.name_match === false
                    ? `PAN name verification failed. Please ensure the name exactly matches the one on your PAN card.`
                    : entry?.message || "PAN verification failed. Please check your details.";

            setError(msg);
        }

    } catch (err) {
        console.error("PAN verification error:", err);
        setVerified(prev => ({ ...prev, pan: false }));
        setError("PAN verification failed. Please try again.");
    } finally {
        setLoading(prev => ({ ...prev, pan: false }));
    }
};



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 px-4 py-2">
            <div className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-teal-100 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal-500 rounded-full p-3 shadow-lg">
                    <FaIdCard className="text-white text-3xl" />
                </div>
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 mt-8 tracking-tight">Investor Verification</h2>
                <div className="space-y-6">

                    {/* Aadhaar Verification */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-1">
                            <FaAddressCard className="text-teal-600" />
                            <span className="font-semibold text-gray-700">Aadhaar Card</span>
                        </div>
                        <input
                            name="aadhar"
                            value={formData.aadhar}
                            onChange={handleChange}
                            placeholder="Aadhaar Number"
                            disabled={verified.aadhar}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 text-gray-800 placeholder-gray-400"
                        />
                        <button
                            onClick={verifyAadhar}
                            disabled={loading.aadhar || verified.aadhar}
                            className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 transition font-semibold shadow-md mt-1"
                        >
                            {loading.aadhar ? "Verifying..." : verified.aadhar ? "✓ Aadhaar Verified" : "Verify Aadhaar"}
                        </button>
                    </div>

                    {/* PAN Verification */}
                    {verified.aadhar && (
                        <div className="space-y-2 pt-2 border-t border-dashed border-teal-200">
                            <div className="flex items-center gap-2 mb-1">
                                <FaUser className="text-teal-600" />
                                <span className="font-semibold text-gray-700">PAN Card</span>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 text-gray-800 placeholder-gray-400"
                                />
                                <input
                                    name="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 text-gray-800"
                                />
                            </div>
                            <input
                                name="pan"
                                value={formData.pan}
                                onChange={handleChange}
                                placeholder="PAN Number"
                                disabled={verified.pan}
                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 text-gray-800 placeholder-gray-400"
                            />
                            <button
                                onClick={verifyPAN}
                                disabled={loading.pan || verified.pan}
                                className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 transition font-semibold shadow-md mt-1"
                            >
                                {loading.pan ? "Verifying..." : verified.pan ? "✓ PAN Verified" : "Verify PAN"}
                            </button>
                        </div>
                    )}

                    {result && !error && (
                        <p className="text-green-600 text-center mt-4 font-semibold">{result}</p>
                    )}


                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default SignUpInvestor;
