import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaFileAlt, FaMapMarkerAlt, FaIndustry, FaMoneyBillWave } from 'react-icons/fa';
// Example hardcoded data (should match the marketplace)
const startups = [
    {
        cin: 'U12345RJ2020PTC012345',
        name: 'GreenTech Innovations',
        industry: 'Clean Energy',
        location: 'Jaipur, Rajasthan',
        fundingRequired: 120,
        pitchDeckUrl: 'https://example.com/greentech-pitch.pdf',
        performance: [
            { month: 'Jan', value: 10 },
            { month: 'Feb', value: 20 },
            { month: 'Mar', value: 30 },
            { month: 'Apr', value: 40 },
            { month: 'May', value: 60 },
            { month: 'Jun', value: 80 },
        ],
    },
    {
        cin: 'U54321MH2019PTC054321',
        name: 'Healthify Solutions',
        industry: 'Healthcare',
        location: 'Mumbai, Maharashtra',
        fundingRequired: 200,
        pitchDeckUrl: 'https://example.com/healthify-pitch.pdf',
        performance: [
            { month: 'Jan', value: 15 },
            { month: 'Feb', value: 18 },
            { month: 'Mar', value: 25 },
            { month: 'Apr', value: 35 },
            { month: 'May', value: 55 },
            { month: 'Jun', value: 70 },
        ],
    },
    // ...add other startups with performance data...
];

function StartupDetails() {
    const { cin } = useParams();
    const navigate = useNavigate();
    const startup = startups.find(s => s.cin === cin);

    if (!startup) {
        return <div className="min-h-screen flex items-center justify-center text-xl text-red-600">Startup not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 px-4 py-8 flex flex-col items-center">
            <button onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 text-teal-700 hover:underline font-medium text-sm"><FaArrowLeft /> Back to Marketplace</button>
            <div className="bg-white/90 rounded-2xl shadow-xl border border-teal-100 max-w-2xl w-full p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-2">{startup.name}</h1>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
                    <span className="flex items-center gap-2"><FaFileAlt className="text-teal-400" /> <span className="font-medium">CIN:</span> {startup.cin}</span>
                    <span className="flex items-center gap-2"><FaIndustry className="text-teal-400" /> <span className="font-medium">Industry:</span> {startup.industry}</span>
                    <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-teal-400" /> <span className="font-medium">Location:</span> {startup.location}</span>
                    <span className="flex items-center gap-2"><FaMoneyBillWave className="text-teal-400" /> <span className="font-medium">Funding Required:</span> <span className="font-semibold text-teal-700">₹{startup.fundingRequired} Lakhs</span></span>
                </div>
                {startup.pitchDeckUrl && (
                    <a href={startup.pitchDeckUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-700 hover:underline text-xs font-medium mb-4">
                        <FaFileAlt /> View Pitch Deck
                    </a>
                )}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-2 text-teal-800">Performance Overview</h2>
                    {/* Placeholder for a graph - replace with a real chart if recharts is installed */}
                    <div className="w-full h-64 bg-teal-50 border border-teal-100 rounded-lg flex items-center justify-center text-teal-400">
                        {/* Example: <LineChart data={startup.performance} ... /> */}
                        <span>Graph Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartupDetails;
