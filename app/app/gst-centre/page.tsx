"use client";

import Image from "next/image";
import { useState } from "react";

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: Date;
}

const documentTypes = [
  {
    title: "GST Return PDF",
    description: "IR 1065 GST return document",
    accept: ".pdf",
  },
  {
    title: "Xero Management Report",
    description: "Exported financial statements from Xero",
    accept: ".pdf,.xlsx,.xls",
  },
  {
    title: "Trial Balance",
    description: "General ledger trial balance report",
    accept: ".pdf,.xlsx,.xls,.csv",
  },
  {
    title: "Working Papers",
    description: "Supporting documentation and schedules",
    accept: ".pdf,.xlsx,.xls,.docx",
  },
];

const workflowStages = [
  { id: 1, label: "Files Uploaded", status: "Files Uploaded" },
  { id: 2, label: "AI Reviewing", status: "AI Reviewing" },
  { id: 3, label: "GST Summary", status: "GST Summary" },
  { id: 4, label: "Risks Identified", status: "Risks Identified" },
  { id: 5, label: "GST Payment Report", status: "GST Payment Report" },
  { id: 6, label: "Export to Syft", status: "Export to Syft" },
];

interface APIResponse {
  status: string;
  message: string;
}

export default function GSTCentre() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<APIResponse | null>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    documentType: string
  ) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const newFile: UploadedFile = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: documentType,
          size: file.size,
          uploadedAt: new Date(),
        };
        setUploadedFiles((prev) => [newFile, ...prev]);
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-NZ", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleGenerateReview = async () => {
    setIsProcessing(true);
    setCurrentStage(1);
    setApiResponse(null);

    // Simulate workflow progression through stages
    const stageTimings = [2000, 3000, 2500, 3500, 2000, 2000]; // ms per stage

    let cumulativeDelay = 0;
    workflowStages.forEach((stage, index) => {
      cumulativeDelay += stageTimings[index];
      setTimeout(() => {
        setCurrentStage(stage.id);
      }, cumulativeDelay);
    });

    // Call API after workflow completes
    setTimeout(async () => {
      try {
        const response = await fetch("/api/gst-review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileCount: uploadedFiles.length,
          }),
        });

        const data = await response.json();
        setApiResponse(data);
      } catch (error) {
        console.error("Error generating review:", error);
        setApiResponse({
          status: "error",
          message: "Failed to generate review",
        });
      } finally {
        setIsProcessing(false);
      }
    }, cumulativeDelay);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-b border-slate-800 bg-slate-950/60 px-6 py-8 lg:w-72 lg:border-b-0 lg:border-r">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/murphy-hughes-logo.png"
                alt="Murphy Hughes logo"
                width={320}
                height={120}
                priority
                className="h-auto w-auto max-w-full"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {[
                "Dashboard",
                "Clients",
                "AI Team",
                "GST Centre",
                "Board Reports",
                "Financial Reviews",
                "Tax Planning",
                "Knowledge Base",
                "Settings",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition duration-200 ${
                    item === "GST Centre"
                      ? "bg-sky-500/15 text-sky-200 hover:bg-sky-500/20"
                      : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-100"
                  }`}
                >
                  <span>{item}</span>
                </button>
              ))}
            </nav>

            {/* Focus Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-800/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                GST Processing
              </p>
              <p className="mt-3 text-sm font-semibold text-white">
                Upload 4 documents
              </p>
              <p className="mt-1.5 text-xs text-slate-400">
                Complete GST return review package
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-3">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              GST Centre
            </h1>
            <p className="text-lg font-medium text-slate-300">
              Upload and review GST return documentation
            </p>
            <p className="text-sm text-slate-500">
              Complete compliance package for comprehensive GST analysis
            </p>
          </div>

          {/* Upload Grid */}
          <section className="mb-10 grid gap-6 lg:grid-cols-2">
            {documentTypes.map((doc, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-700"
              >
                <h3 className="text-sm font-semibold text-white">
                  {doc.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{doc.description}</p>

                {/* Upload Area */}
                <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-700 bg-slate-800/20 p-8 transition hover:border-slate-600 hover:bg-slate-800/40">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-8 w-8 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p className="mt-2 text-sm font-medium text-slate-300">
                      Click to upload
                    </p>
                    <p className="text-xs text-slate-500">
                      or drag and drop
                    </p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept={doc.accept}
                    onChange={(e) => handleFileUpload(e, doc.title)}
                    className="hidden"
                  />
                </label>

                {/* Files for this type */}
                <div className="mt-4 space-y-2">
                  {uploadedFiles
                    .filter((file) => file.type === doc.title)
                    .map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/20 px-3 py-2 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4 text-slate-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4 4a2 2 0 012-2h6a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6z" />
                          </svg>
                          <div>
                            <p className="font-medium text-slate-100">
                              {file.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-slate-500 hover:text-red-400 transition"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </section>

          {/* Files List */}
          {uploadedFiles.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Uploaded Documents
              </h2>
              <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-800/20">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400">
                          File Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400">
                          Document Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400">
                          File Size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400">
                          Uploaded
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-semibold text-slate-400">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {uploadedFiles.map((file) => (
                        <tr
                          key={file.id}
                          className="hover:bg-slate-800/20 transition"
                        >
                          <td className="px-6 py-3 text-sm text-slate-100">
                            {file.name}
                          </td>
                          <td className="px-6 py-3 text-sm text-slate-400">
                            {file.type}
                          </td>
                          <td className="px-6 py-3 text-sm text-slate-400">
                            {formatFileSize(file.size)}
                          </td>
                          <td className="px-6 py-3 text-sm text-slate-400">
                            {formatDate(file.uploadedAt)}
                          </td>
                          <td className="px-6 py-3 text-right">
                            <button
                              onClick={() => removeFile(file.id)}
                              className="text-xs text-slate-500 hover:text-red-400 transition font-medium"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Generate Review Button */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleGenerateReview}
              className={`flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-semibold transition duration-200 ${
                uploadedFiles.length > 0 && !isProcessing
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/20"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
              disabled={uploadedFiles.length === 0 || isProcessing}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {isProcessing ? "Processing..." : "Generate Murphy Hughes GST Review"}
            </button>
            <button className="rounded-xl border border-slate-700 bg-slate-800/30 px-8 py-4 font-semibold text-slate-200 transition hover:bg-slate-800/50">
              Save as Template
            </button>
          </div>

          {/* Workflow Progress */}
          {isProcessing && (
            <div className="my-10 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/40 to-slate-800/20 p-8">
              <h3 className="mb-8 text-xl font-bold text-white">GST Review Processing</h3>
              
              {/* Workflow stages */}
              <div className="space-y-6">
                {workflowStages.map((stage, index) => {
                  const isCompleted = stage.id < currentStage;
                  const isActive = stage.id === currentStage;
                  const isUpcoming = stage.id > currentStage;

                  return (
                    <div key={stage.id}>
                      <div className="flex items-center gap-4">
                        {/* Stage indicator */}
                        <div className="flex items-center gap-4 flex-1">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition duration-300 ${
                              isCompleted
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : isActive
                                ? "bg-sky-500/20 text-sky-400 border border-sky-500/50 animate-pulse"
                                : "bg-slate-700/40 text-slate-500 border border-slate-600/30"
                            }`}
                          >
                            {isCompleted ? (
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : isActive ? (
                              <div className="h-2 w-2 bg-sky-400 rounded-full animate-pulse" />
                            ) : (
                              index + 1
                            )}
                          </div>

                          <div className="flex-1">
                            <p
                              className={`font-semibold transition duration-300 ${
                                isCompleted
                                  ? "text-emerald-400"
                                  : isActive
                                  ? "text-sky-300"
                                  : "text-slate-500"
                              }`}
                            >
                              {stage.label}
                            </p>
                            {isActive && (
                              <p className="text-xs text-slate-400 mt-1">
                                Processing...
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Connector line */}
                      {index < workflowStages.length - 1 && (
                        <div className="ml-5 h-6 border-l border-slate-700/40" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Completion message */}
              {currentStage === 6 && !isProcessing && (
                <div className="mt-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-sm text-emerald-300 font-medium">
                    ✓ GST review complete. Your report is ready.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* API Response Display */}
          {apiResponse && (
            <div
              className={`my-10 rounded-xl border p-6 ${
                apiResponse.status === "success"
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-red-500/30 bg-red-500/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                    apiResponse.status === "success"
                      ? "bg-emerald-500/20"
                      : "bg-red-500/20"
                  }`}
                >
                  {apiResponse.status === "success" ? (
                    <svg
                      className="h-5 w-5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-semibold ${
                      apiResponse.status === "success"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {apiResponse.status === "success"
                      ? "Review Generated Successfully"
                      : "Error Generating Review"}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      apiResponse.status === "success"
                        ? "text-emerald-300"
                        : "text-red-300"
                    }`}
                  >
                    {apiResponse.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/20 p-6">
            <h3 className="font-semibold text-white">About GST Review</h3>
            <p className="mt-2 text-sm text-slate-400">
              Upload the four required documents to generate a comprehensive GST
              review. Our AI audit team will analyse your GST return against
              supporting documentation to identify compliance issues and provide
              strategic recommendations for tax optimisation.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Automated compliance checking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Risk identification and prioritisation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Detailed audit report generation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Strategic tax planning opportunities</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
