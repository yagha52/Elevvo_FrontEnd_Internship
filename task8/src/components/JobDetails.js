import React, { useEffect, useState, useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { jobs, updateJob, deleteJob } = useContext(JobContext);
    const [isEditing, setIsEditing] = useState(false);

    const job = jobs.find(j => j.id === id);

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        status: 'Applied',
        date: '',
        notes: ''
    });

    useEffect(() => {
        if (job) {
            setFormData(job);
        }
    }, [job]);

    if (!job) {
        return (
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center bg-white rounded-lg shadow border border-gray-200 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-500 mt-4 inline-flex items-center"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (formData.company && formData.title) {
            updateJob(formData);
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this job application?')) {
            deleteJob(job.id);
            navigate('/');
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            'Applied': 'bg-blue-100 text-blue-800',
            'Interviewing': 'bg-yellow-100 text-yellow-800',
            'Offer': 'bg-green-100 text-green-800',
            'Rejected': 'bg-red-100 text-red-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Job Details</h1>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            <Edit className="w-4 h-4 mr-1" />
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                        <button
                            onClick={handleDelete}
                            className="inline-flex items-center px-3 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded text-red-700 bg-white hover:bg-red-50 transition-colors"
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                        </button>
                    </div>
                </div>

                <div className="px-6 py-6">
                    {isEditing ? (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Status
                                    </label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border bg-white"
                                    >
                                        <option value="Applied">Applied</option>
                                        <option value="Interviewing">Interviewing</option>
                                        <option value="Offer">Offer</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Application Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Notes
                                </label>
                                <textarea
                                    rows={4}
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border resize-none"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleUpdate}
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                                >
                                    Update Application
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Company</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{job.company}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{job.title}</dd>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                                    <dd className="mt-1">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                                            {job.status}
                                        </span>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Application Date</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{job.date}</dd>
                                </div>
                            </div>

                            {job.notes && (
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Notes</dt>
                                    <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{job.notes}</dd>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="px-6 py-4 border-t border-gray-200">
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-500 text-sm font-medium inline-flex items-center transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;