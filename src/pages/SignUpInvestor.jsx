import React, { useState } from 'react';

function SignUpInvestor() {
    const [formData, setFormData] = useState({
        aadhar: '',
        name: '',
        dob: '',
        pan: ''
    });
    const [verificationStatus, setVerificationStatus] = useState({
        aadhar: false,
        pan: false
    });
    const [loading, setLoading] = useState({
        aadhar: false,
        pan: false
    });
    const [error, setError] = useState({
        aadhar: '',
        pan: ''
    });

    const [step, setStep] = useState(1); // 1 for Aadhar, 2 for PAN

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError({
            ...error,
            [e.target.name]: ''
        });
    };

    const simulateLoading = async (callback, field) => {
        setLoading(prev => ({ ...prev, [field]: true }));
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(prev => ({ ...prev, [field]: false }));
        callback();
    };

    const verifyAadhar = () => {
        simulateLoading(() => {
            if (formData.aadhar === '123456789012') {
                setVerificationStatus(prev => ({ ...prev, aadhar: true }));
                setError(prev => ({ ...prev, aadhar: '' }));
                setStep(2);
            } else {
                setError(prev => ({ ...prev, aadhar: 'Invalid Aadhar number' }));
            }
        }, 'aadhar');
    };

    const verifyPAN = () => {
        simulateLoading(() => {
            if (formData.pan === 'ABCDE1234F') {
                setVerificationStatus(prev => ({ ...prev, pan: true }));
                setError(prev => ({ ...prev, pan: '' }));
            } else {
                setError(prev => ({ ...prev, pan: 'Invalid PAN number' }));
            }
        }, 'pan');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-2">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-[95%] sm:max-w-[85%] md:max-w-md border border-gray-100">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Investor Verification</h2>

                <div className="space-y-4">
                    {/* Aadhar Verification */}
                    <div className={`space-y-2 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 ${step !== 1 && verificationStatus.aadhar ? 'opacity-60' : ''}`}>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-700 flex items-center">
                            <span className="bg-teal-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center mr-2">1</span>
                            Aadhar Verification
                        </h3>
                        <input
                            type="text"
                            name="aadhar"
                            value={formData.aadhar}
                            onChange={handleInputChange}
                            placeholder="Enter Aadhar Number"
                            className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                            disabled={verificationStatus.aadhar}
                        />
                        {error.aadhar && <p className="text-red-500 text-xs sm:text-sm mt-1">{error.aadhar}</p>}
                        <button
                            onClick={verifyAadhar}
                            disabled={loading.aadhar || verificationStatus.aadhar}
                            className="w-full p-2 sm:p-3 text-sm sm:text-base bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 font-medium"
                        >
                            {loading.aadhar ? 'Verifying...' : verificationStatus.aadhar ? '✓ Verified' : 'Verify Aadhar'}
                        </button>
                    </div>

                    {/* PAN Verification - Only show after Aadhar is verified */}
                    {verificationStatus.aadhar && (
                        <div className="space-y-2 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <h3 className="text-sm sm:text-base font-semibold text-gray-700 flex items-center">
                                <span className="bg-teal-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center mr-2">2</span>
                                PAN Card Details
                            </h3>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all mb-2"
                            />
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                                className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all mb-2"
                            />
                            <input
                                type="text"
                                name="pan"
                                value={formData.pan}
                                onChange={handleInputChange}
                                placeholder="Enter PAN Number"
                                className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                disabled={verificationStatus.pan}
                            />
                            {error.pan && <p className="text-red-500 text-xs sm:text-sm mt-1">{error.pan}</p>}
                            <button
                                onClick={verifyPAN}
                                disabled={loading.pan || verificationStatus.pan}
                                className="w-full p-2 sm:p-3 text-sm sm:text-base bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 font-medium"
                            >
                                {loading.pan ? 'Verifying...' : verificationStatus.pan ? '✓ Verified' : 'Verify PAN'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SignUpInvestor;