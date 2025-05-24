import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaMapMarkerAlt, FaIndustry, FaMoneyBillWave, FaFileAlt, FaHandHoldingUsd } from 'react-icons/fa';

function StartupMarketplace() {
    const [startups] = useState([
        {
            cin: 'U12345RJ2020PTC012345',
            name: 'GreenTech Innovations',
            industry: 'Clean Energy',
            location: 'Jaipur, Rajasthan',
            fundingRequired: 120,
            pitchDeckUrl: 'https://example.com/greentech-pitch.pdf',
        },
        {
            cin: 'U54321MH2019PTC054321',
            name: 'Healthify Solutions',
            industry: 'Healthcare',
            location: 'Mumbai, Maharashtra',
            fundingRequired: 200,
            pitchDeckUrl: 'https://example.com/healthify-pitch.pdf',
        },
        {
            cin: 'U67890DL2018PTC067890',
            name: 'EduNext',
            industry: 'EdTech',
            location: 'Delhi',
            fundingRequired: 80,
            pitchDeckUrl: '',
        },
        {
            cin: 'U98765KA2021PTC098765',
            name: 'AgroSmart',
            industry: 'Agriculture',
            location: 'Bangalore, Karnataka',
            fundingRequired: 150,
            pitchDeckUrl: 'https://example.com/agrosmart-pitch.pdf',
        },
        {
            cin: 'U24680TN2022PTC024680',
            name: 'FinBridge',
            industry: 'FinTech',
            location: 'Chennai, Tamil Nadu',
            fundingRequired: 300,
            pitchDeckUrl: '',
        },
        {
            cin: 'U13579GJ2023PTC013579',
            name: 'UrbanEats',
            industry: 'FoodTech',
            location: 'Ahmedabad, Gujarat',
            fundingRequired: 60,
            pitchDeckUrl: 'https://example.com/urbaneats-pitch.pdf',
        },
    ]);
    const [loading] = useState(false);
    const [error] = useState('');

    return (
        <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#e6f4f1] via-white to-[#e6f4f1] px-2 sm:px-6 py-8 flex flex-col">
            <div className="max-w-7xl w-full mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-teal-900 mb-12 tracking-tight flex items-center justify-center gap-2">
                    <FaRocket className="inline-block text-teal-600 mb-1" />
                    Startup Marketplace
                </h1>
                {loading ? (
                    <p className="text-center text-gray-500">Loading startups...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {startups.map((startup) => (
                            <div key={startup.cin} className="bg-white/70 backdrop-blur-lg border border-teal-100 shadow-xl rounded-lg p-6 flex flex-col transition hover:shadow-2xl">
                                <div className="flex items-center justify-between mb-2">
                                    <Link to={`/marketplace/${startup.cin}`} className="text-lg font-semibold text-teal-800 hover:underline truncate transition-colors duration-200" title={startup.name}>{startup.name}</Link>
                                    <span className="text-xs text-teal-700 bg-teal-50 px-2 py-1 rounded font-medium border border-teal-100">{startup.industry}</span>
                                </div>
                                <div className="flex flex-col gap-1 text-sm text-gray-700 mb-3">
                                    <div className="flex items-center gap-2"><FaFileAlt className="text-teal-400" /><span className="font-medium">CIN:</span> <span className="truncate">{startup.cin}</span></div>
                                    <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-teal-400" /><span className="font-medium">Location:</span> {startup.location}</div>
                                    <div className="flex items-center gap-2"><FaMoneyBillWave className="text-teal-400" /><span className="font-medium">Funding Required:</span> <span className="font-semibold text-teal-700">₹{startup.fundingRequired} Lakhs</span></div>
                                </div>
                                {startup.pitchDeckUrl && (
                                    <a href={startup.pitchDeckUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-700 hover:underline mt-2 text-xs font-medium">
                                        <FaFileAlt /> View Pitch Deck
                                    </a>
                                )}
                                <div className="flex-1" />
                                <button className="mt-6 w-full py-2 bg-gradient-to-r from-teal-700 to-teal-500 text-white rounded-md font-semibold shadow-sm transition text-base flex items-center justify-center gap-2 hover:from-teal-800 hover:to-teal-600 active:scale-95 cursor-pointer">
                                    <FaHandHoldingUsd className="text-base" />
                                    Invest
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default StartupMarketplace;
