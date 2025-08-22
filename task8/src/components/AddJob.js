import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";

const AddJob = () => {
  const navigate = useNavigate();
  const { addJob } = useContext(JobContext);

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    status: "Applied",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.company && formData.title) {
      addJob(formData);
      navigate("/");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg border">
        <div className="px-6 py-4 border-b">
          <h1 className="text-2xl font-bold">Add New Job Application</h1>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Company *</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="mt-1 w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Job Title *</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="mt-1 w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="mt-1 w-full border px-3 py-2 rounded bg-white"
              >
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="mt-1 w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Notes</label>
            <textarea
              rows={4}
              name="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="mt-1 w-full border px-3 py-2 rounded resize-none"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 border rounded bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
