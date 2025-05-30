import React, { useState } from 'react';
import axios from 'axios';
import { FaBuilding } from 'react-icons/fa';

function SignUpStartup() {
    const [formData, setFormData] = useState({ cin: '' });
    const [verificationStatus, setVerificationStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setResult(null);
        setVerificationStatus(false);
    };

    const verifyCIN = async () => {
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const res = await axios.post("http://localhost:5000/api/company/verifyCompany", {
                cin: formData.cin.trim().toUpperCase()
            });

            const task = res.data?.data?.[0];
            const companyInfo = task?.result?.source_output;

            console.log("🎯 CIN Verification Response:", companyInfo);

            if (task?.status === 'completed' && companyInfo?.status === 'id_found') {
                setVerificationStatus(true);
                setResult(companyInfo);
            } else {
                setError("CIN not found or verification failed.");
                setVerificationStatus(false);
            }
        } catch (err) {
            console.error("Verification error:", err);
            setError("Something went wrong. Please check the CIN or try again.");
            setVerificationStatus(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 px-4 py-2">
            <div className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-teal-100 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal-500 rounded-full p-3 shadow-lg">
                    <FaBuilding className="text-white text-3xl" />
                </div>
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 mt-8 tracking-tight">Startup CIN Verification</h2>
                <div className="space-y-6">
                    {/* Input */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-1">
                            <FaBuilding className="text-teal-600" />
                            <span className="font-semibold text-gray-700">CIN Number</span>
                        </div>
                        <input
                            name="cin"
                            value={formData.cin}
                            onChange={handleInputChange}
                            placeholder="Enter CIN Number"
                            disabled={verificationStatus}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 text-gray-800 placeholder-gray-400"
                        />
                        <button
                            onClick={verifyCIN}
                            disabled={loading || verificationStatus}
                            className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 transition font-semibold shadow-md mt-1"
                        >
                            {loading ? 'Verifying...' : verificationStatus ? '✓ CIN Verified' : 'Verify CIN'}
                        </button>
                    </div>

                    {/* Result / Error */}
                    {error && (
                        <p className="text-red-500 mt-2 text-center font-medium">{error}</p>
                    )}

                    {result && result.status === 'id_found' && (
                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-4 text-sm text-gray-700">
                            <p><strong>Company Name:</strong> {result.company_name || 'N/A'}</p>
                            <p><strong>CIN:</strong> {result.cin || 'N/A'}</p>
                            <p><strong>Status:</strong> {result.company_status || 'N/A'}</p>
                            <p><strong>Incorporated:</strong> {result.date_of_incorporation || 'N/A'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SignUpStartup;
