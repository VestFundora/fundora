import React, { useState } from 'react';

function SignUpStartup() {
    const [formData, setFormData] = useState({
        aadhar: '',
        pan: '',
        cin: ''
    });
    const [verificationStatus, setVerificationStatus] = useState({
        aadhar: false,
        pan: false,
        cin: false
    });
    const [loading, setLoading] = useState({
        aadhar: false,
        pan: false,
        cin: false
    });
    const [error, setError] = useState({
        aadhar: '',
        pan: '',
        cin: ''
    });

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

    const verifyCIN = () => {
        simulateLoading(() => {
            if (formData.cin === 'L12345AB1234ABC123456') {
                setVerificationStatus(prev => ({ ...prev, cin: true }));
                setError(prev => ({ ...prev, cin: '' }));
            } else {
                setError(prev => ({ ...prev, cin: 'Invalid CIN number' }));
            }
        }, 'cin');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-2">
            <div className="bg-white p-4 rounded-xl shadow-2xl w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Startup Verification</h2>

                <div className="space-y-4">
                    <div className="space-y-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <h3 className="text-base font-semibold text-gray-700 flex items-center">
                            <span className="bg-teal-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center mr-2">1</span>
                            Aadhar Verification
                        </h3>
                        <input
                            type="text"
                            name="aadhar"
                            value={formData.aadhar}
                            onChange={handleInputChange}
                            placeholder="Enter Aadhar Number"
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                            disabled={verificationStatus.aadhar}
                        />
                        {error.aadhar && <p className="text-red-500 text-xs mt-1">{error.aadhar}</p>}
                        <button
                            onClick={verifyAadhar}
                            disabled={loading.aadhar || verificationStatus.aadhar}
                            className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 disabled:bg-gray-300 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 font-medium text-sm"
                        >
                            {loading.aadhar ? 'Verifying...' : verificationStatus.aadhar ? '✓ Verified' : 'Verify Aadhar'}
                        </button>
                    </div>

                    <div className="space-y-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <h3 className="text-base font-semibold text-gray-700 flex items-center">
                            <span className="bg-teal-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center mr-2">2</span>
                            PAN Verification
                        </h3>
                        <input
                            type="text"
                            name="pan"
                            value={formData.pan}
                            onChange={handleInputChange}
                            placeholder="Enter PAN Number"
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                            disabled={verificationStatus.pan}
                        />
                        {error.pan && <p className="text-red-500 text-xs mt-1">{error.pan}</p>}
                        <button
                            onClick={verifyPAN}
                            disabled={loading.pan || verificationStatus.pan}
                            className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 disabled:bg-gray-300 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 font-medium text-sm"
                        >
                            {loading.pan ? 'Verifying...' : verificationStatus.pan ? '✓ Verified' : 'Verify PAN'}
                        </button>
                    </div>

                    <div className="space-y-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <h3 className="text-base font-semibold text-gray-700 flex items-center">
                            <span className="bg-teal-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center mr-2">3</span>
                            CIN Verification
                        </h3>
                        <input
                            type="text"
                            name="cin"
                            value={formData.cin}
                            onChange={handleInputChange}
                            placeholder="Enter CIN Number"
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                            disabled={verificationStatus.cin}
                        />
                        {error.cin && <p className="text-red-500 text-xs mt-1">{error.cin}</p>}
                        <button
                            onClick={verifyCIN}
                            disabled={loading.cin || verificationStatus.cin}
                            className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 disabled:bg-gray-300 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 font-medium text-sm"
                        >
                            {loading.cin ? 'Verifying...' : verificationStatus.cin ? '✓ Verified' : 'Verify CIN'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpStartup;