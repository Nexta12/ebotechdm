"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { SCHOLARSHIP_TRACKS } from "@/data/newspaperData";
import {
  GraduationCap,
  CheckCircle2,
  Send,
  Printer,
  UploadCloud,
  FileCheck,
  X,
} from "lucide-react";

const EBONYI_LGAS = [
  "Abakaliki",
  "Afikpo North",
  "Afikpo South (Edda)",
  "Ebonyi",
  "Ezza North",
  "Ezza South",
  "Ikwo",
  "Ishielu",
  "Ivo",
  "Izzi",
  "Ohaozara",
  "Ohaukwu",
  "Onicha",
];

export const EBONYI_HOMETOWNS: Record<string, string[]> = {
  "Abakaliki": [
    "Azuiyiokwu",
    "Nkaliki",
    "Kpirikpiri",
    "Azumini",
    "Ishieke",
    "Izzi Unuhu",
    "Amike Aba",
    "Sharon",
    "Abakpa",
    "Edda (Abakaliki)",
  ],
  "Afikpo North": [
    "Ehugbo (Afikpo)",
    "Ozizza",
    "Unwana",
    "Itim",
    "Ohaisu",
    "Ndukwe",
    "Kpoghirikpo",
    "Ugwuegu",
    "Amasiri",
  ],
  "Afikpo South (Edda)": [
    "Nguzu Edda",
    "Ebunwana Edda",
    "Owutu Edda",
    "Ekoli Edda",
    "Amangwu Edda",
    "Oso Edda",
    "Libolo Edda",
    "Ogbu Edda",
  ],
  "Ebonyi": [
    "Ugbodo",
    "Abakpa",
    "Kpirikpiri",
    "Nkaliki",
    "Sharon",
    "Agbaja",
    "Mgbabo",
    "Ishieke",
  ],
  "Ezza North": [
    "Umuoghara",
    "Oriuzor",
    "Ekka",
    "Ogboji",
    "Oshiri",
    "Achara",
    "Okposhi",
    "Inyere",
    "Umuezeoka",
  ],
  "Ezza South": [
    "Onueke",
    "Amana",
    "Amagu",
    "Idembia",
    "Igbegu",
    "Echara",
    "Amaezekwe",
  ],
  "Ikwo": [
    "Echara Ikwo",
    "Alike",
    "Agubia",
    "Ndufu Alike",
    "Enyibichiri",
    "Noyo",
    "Inyimagu",
    "Ekpelu",
    "Okpuitumo",
    "Igboji",
  ],
  "Ishielu": [
    "Ezillo",
    "Ntezi",
    "Nkalaha",
    "Iyionu",
    "Okpoto",
    "Ezzagu",
    "Agba",
    "Azuinyaba",
    "Amazu",
  ],
  "Ivo": [
    "Ishiagu",
    "Akaeze",
    "Ameke",
    "Ihie",
    "Okue",
    "Ngwogwo",
    "Ogwor",
  ],
  "Izzi": [
    "Iboko",
    "Ndieze",
    "Igbeagu",
    "Agbaja",
    "Ezza Inyimagu",
    "Ndiebor",
    "Ndiogbu",
  ],
  "Ohaozara": [
    "Okposi",
    "Uburu",
    "Ugwulangwu",
    "Enu-Uburu",
    "Obiozara",
  ],
  "Ohaukwu": [
    "Ezzamgbo",
    "Ngbo",
    "Effium",
    "Umuogudu Akpu",
    "Ukwagba",
    "Okwo Ngbo",
    "Ndulo Ngbo",
  ],
  "Onicha": [
    "Isu",
    "Onicha Igboeze",
    "Oshiri",
    "Ukawu",
    "Aba Omege",
    "Agbabor",
  ],
};

export default function ScholarshipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    appId: string;
    fullName: string;
    email: string;
    phone: string;
    lga: string;
    hometown: string;
    idFileName?: string | null;
    trackTitle: string;
    deviceCategory: string;
    date: string;
  } | null>(null);

  // Form State matching the Ebo-Tech blueprint
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    lga: "Abakaliki",
    hometown: "",
    customHometown: "",
    currentTown: "",
    gender: "Female",
    educationLevel: "Undergraduate",
    selectedTrack: SCHOLARSHIP_TRACKS[0].title,
    skillLevel: "Level 1 – Basic User",
    deviceCategory: "A – Smartphone Only",
    motivation: "",
    agreement: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "lga") {
      setFormData((prev) => ({
        ...prev,
        lga: value,
        hometown: "",
        customHometown: "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit. Please choose a smaller file.");
      e.target.value = "";
      return;
    }

    setIdFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resolvedHometown =
      formData.hometown === "Other"
        ? formData.customHometown.trim()
        : (formData.hometown.trim() || formData.customHometown.trim());

    if (!resolvedHometown) {
      alert("Please select or enter your Hometown / Autonomous Community.");
      return;
    }

    if (!formData.agreement) {
      alert("Please accept the program commitment agreement.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      ...formData,
      hometown: resolvedHometown,
    };

    const submitFormData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      submitFormData.append(key, String(value));
    });
    if (idFile) {
      submitFormData.append("idDocument", idFile);
    }

    try {
      const res = await fetch("/api/scholarship/apply", {
        method: "POST",
        body: submitFormData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application. Please check your details.");
      }

      const submitted = {
        appId: data.appId || "EBOTECH-" + Math.floor(100000 + Math.random() * 900000),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        lga: formData.lga,
        hometown: resolvedHometown,
        idFileName: idFile ? idFile.name : null,
        trackTitle: formData.selectedTrack,
        deviceCategory: formData.deviceCategory,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };

      setSubmittedData(submitted);

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#058c9a", "#04727d", "#10b981", "#1e1b18"],
        });
      } catch (err) {
        console.error(err);
      }

      window.scrollTo({ top: 120, behavior: "smooth" });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message || "An unexpected error occurred while submitting. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#fcfbf7] min-h-screen py-8 font-ui">
      {/* Top Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-4">
        <div className="flex items-center space-x-2 text-xs font-serif text-[#78716c]">
          <Link href="/" className="hover:text-[#058c9a] underline">
            Ebotech Front Page
          </Link>
          <span>/</span>
          <span className="text-[#141414] font-bold">
            Free Digital Skills Project
          </span>
        </div>
      </div>

      {/* Scanty, Focused Header Summary */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-8">
        <div className="border-2 border-[#1e1b18] bg-[#fffdfa] p-6 sm:p-8 rounded-xs shadow-xs">
         

          <h1 className="font-headline text-2xl sm:text-3xl font-black text-[#141414] leading-tight text-center">
            Ebotech Digital Media Free Digital Skills Training Initiative
          </h1>

          <p className="font-body text-xs sm:text-sm text-[#44403c] mt-2 leading-relaxed">
            A practical 1-month skills initiative designed to equip Ebonyi indigenes with
            in-demand capabilities for employment, freelancing, and remote work.
          </p>

          {/* Key Facts Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-[#dfdad0] text-xs">
            <div className="bg-[#f5f2eb] p-2.5 rounded-xs border border-[#dfdad0]">
              <span className="text-[10px] font-bold text-[#78716c] block uppercase">
                Duration
              </span>
              <span className="font-bold text-[#1e1b18]">4 Weeks Max</span>
            </div>
            <div className="bg-[#f5f2eb] p-2.5 rounded-xs border border-[#dfdad0]">
              <span className="text-[10px] font-bold text-[#78716c] block uppercase">
                Tuition
              </span>
              <span className="font-bold text-[#058c9a]">100% Free</span>
            </div>
            <div className="bg-[#f5f2eb] p-2.5 rounded-xs border border-[#dfdad0]">
              <span className="text-[10px] font-bold text-[#78716c] block uppercase">
                Delivery
              </span>
              <span className="font-bold text-[#1e1b18]">Online + Hubs</span>
            </div>
          
          </div>

        
        </div>
      </section>

      {/* Confirmation Slip */}
      {submittedData && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-8 animate-in fade-in duration-300">
          <div className="border-2 border-emerald-800 bg-[#f0fdf4] p-5 sm:p-6 rounded-xs shadow-sm">
            <div className="flex items-center justify-between border-b border-emerald-800/40 pb-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <h3 className="font-headline text-lg font-bold text-emerald-950">
                  Application Logged Successfully
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">
                {submittedData.appId}
              </span>
            </div>

            <div className="mt-3 text-xs space-y-1 font-body text-emerald-900">
              <p>
                <strong>Applicant:</strong> {submittedData.fullName}
              </p>
              <p>
                <strong>Origin:</strong> {submittedData.hometown ? `${submittedData.hometown}, ` : ""}{submittedData.lga} LGA, Ebonyi State
              </p>
              <p>
                <strong>Assigned Track:</strong> {submittedData.trackTitle}
              </p>
              <p>
                <strong>Device Access:</strong> {submittedData.deviceCategory}
              </p>
              {submittedData.idFileName && (
                <p>
                  <strong>Means of ID:</strong> Attached ({submittedData.idFileName})
                </p>
              )}
              <p className="text-[11px] text-emerald-800 pt-1">
                Admissions notifications and orientation links will be sent via WhatsApp and Email to <strong>{submittedData.phone}</strong>.
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-emerald-800/30 flex justify-end">
              <button
                onClick={() => window.print()}
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Slip</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* THE APPLICATION FORM */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="border-2 border-[#1e1b18] bg-[#fffdfa] p-6 sm:p-8 rounded-xs shadow-xs">
          <div className="border-b-2 border-[#1e1b18] pb-3 mb-6">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-[#058c9a]" />
              <h2 className="font-headline text-xl sm:text-2xl font-black text-[#141414] uppercase tracking-tight">
                Candidate Application Form
              </h2>
            </div>
            <p className="font-body text-xs text-[#57534e] mt-1">
              Fill in your details accurately. Training and materials are 100% free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 1. Identity & Origin */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1e1b18] border-b border-[#dfdad0] pb-1 mb-3">
                1. Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="First & Last Name"
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none focus:ring-1 focus:ring-[#058c9a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none focus:ring-1 focus:ring-[#058c9a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 08012345678"
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none focus:ring-1 focus:ring-[#058c9a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Ebonyi LGA of Origin *
                  </label>
                  <select
                    name="lga"
                    value={formData.lga}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none font-medium"
                  >
                    {EBONYI_LGAS.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga} LGA
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Hometown*
                  </label>
                  <select
                    required
                    name="hometown"
                    value={formData.hometown}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
                  >
                    <option value="">-- Select Community in {formData.lga} --</option>
                    {(EBONYI_HOMETOWNS[formData.lga] || []).map((town) => (
                      <option key={town} value={town}>
                        {town}
                      </option>
                    ))}
                    <option value="Other">Other (Specify village/community)...</option>
                  </select>
                  {formData.hometown === "Other" && (
                    <input
                      type="text"
                      required
                      name="customHometown"
                      value={formData.customHometown}
                      onChange={handleInputChange}
                      placeholder="Specify your village or autonomous community"
                      className="mt-2 w-full bg-[#fbf9f4] border border-[#058c9a] p-2 text-xs text-black rounded-xs focus:outline-none focus:ring-1 focus:ring-[#058c9a]"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Current Town / Residence
                  </label>
                  <input
                    type="text"
                    name="currentTown"
                    value={formData.currentTown}
                    onChange={handleInputChange}
                    placeholder="e.g. Abakaliki, Afikpo, Enugu, Lagos..."
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none focus:ring-1 focus:ring-[#058c9a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Highest Education Level
                  </label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
                  >
                    <option value="Secondary / SSCE">Secondary / SSCE Candidate</option>
                    <option value="Undergraduate">Undergraduate Student</option>
                    <option value="Graduate / HND / BSc">Graduate (HND / BSc)</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Vocational / Other">Vocational / Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Means of Identification <span className="font-normal text-[#78716c]">(Recommended: NIN Slip, Voter&apos;s Card, Student ID, LGA Certificate of Origin, Driver&apos;s License)</span>
                  </label>
                  
                  {!idFile ? (
                    <label className="border-2 border-dashed border-[#dfdad0] hover:border-[#058c9a] bg-[#fbf9f4] hover:bg-[#f0f9fa] transition-colors rounded-xs p-4 flex flex-col items-center justify-center cursor-pointer text-center group">
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <UploadCloud className="w-6 h-6 text-[#78716c] group-hover:text-[#058c9a] mb-1.5 transition-colors" />
                      <span className="text-xs font-bold text-[#1e1b18] group-hover:text-[#058c9a]">
                        Click Here
                      </span>
                      <span className="text-[11px] text-[#78716c] mt-0.5">
                        Supports PDF, PNG, JPG, or JPEG (Max 5MB)
                      </span>
                    </label>
                  ) : (
                    <div className="flex items-center justify-between bg-[#f0f9fa] border border-[#058c9a]/40 p-2.5 rounded-xs">
                      <div className="flex items-center space-x-2.5 overflow-hidden">
                        <FileCheck className="w-5 h-5 text-[#058c9a] shrink-0" />
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-[#1e1b18] truncate">
                            {idFile.name}
                          </p>
                          <p className="text-[10px] text-[#78716c]">
                            {(idFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to attach to application
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIdFile(null)}
                        className="text-[#78716c] hover:text-red-600 p-1 text-xs font-bold transition-colors ml-2 shrink-0 flex items-center space-x-1"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                        <span className="text-[11px]">Remove</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Track & Device Assessment */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1e1b18] border-b border-[#dfdad0] pb-1 mb-3">
                2. Select Course
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Choose Your Preferred Course (1 Course Only) *
                  </label>
                  <select
                    required
                    name="selectedTrack"
                    value={formData.selectedTrack}
                    onChange={handleInputChange}
                    className="w-full bg-[#f5f2eb] border border-[#1e1b18] p-2.5 text-xs font-bold text-[#1e1b18] rounded-xs focus:outline-none focus:border-[#058c9a]"
                  >
                    {SCHOLARSHIP_TRACKS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title} ({t.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Device You Have Access To *
                  </label>
                  <select
                    name="deviceCategory"
                    value={formData.deviceCategory}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
                  >
                    <option value="A – Smartphone Only">Category A – Smartphone Only</option>
                    <option value="B – Shared/Occasional Laptop">Category B – Shared/Occasional Laptop</option>
                    <option value="C – Personal Laptop">Category C – Personal Functional Laptop</option>
                    <option value="D – Laptop + Smartphone">Category D – Both Laptop & Smartphone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Existing Skill Level
                  </label>
                  <select
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
                  >
                    <option value="Level 0 – Digital Beginner">Level 0 – Complete Beginner</option>
                    <option value="Level 1 – Basic User">Level 1 – Basic User (Browsing, Email)</option>
                    <option value="Level 2 – Intermediate">Level 2 – Intermediate (Used tools before)</option>
                    <option value="Level 3 – Experienced">Level 3 – Experienced (Prior training)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Goal & Agreement */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1e1b18] border-b border-[#dfdad0] pb-1 mb-3">
                3. Career Goal & Commitment
              </h3>
              <div>
                <label className="block text-xs font-bold text-[#292524] mb-1">
                  Why do you want to learn this skill? *
                </label>
                <textarea
                  required
                  rows={3}
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Briefly state how you plan to use this skill (e.g. for freelance work, job search, business support, content creation)..."
                  className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2.5 text-xs text-black rounded-xs focus:outline-none focus:ring-1 focus:ring-[#058c9a] font-body"
                />
              </div>

              <div className="mt-3.5 flex items-start space-x-2 bg-[#f5f2eb] p-3 border border-[#dfdad0] rounded-xs">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  className="mt-0.5 accent-[#058c9a] w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor="agreement"
                  className="text-xs text-[#292524] font-body cursor-pointer leading-snug"
                >
                  <strong>Commitment Agreement:</strong> I confirm I am an indigene of Ebonyi State
                  and agree to dedicate time to complete live/recorded sessions, weekly practical tasks, and the final capstone project.
                </label>
              </div>
            </div>

            {/* Error Feedback */}
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
                <strong>Submission Error:</strong> {errorMessage}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#058c9a] hover:bg-[#04727d] text-white py-3 px-6 rounded-xs font-bold uppercase text-xs tracking-wider transition-colors shadow-xs flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Application</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
