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

export default function ScholarshipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    appId: string;
    fullName: string;
    email: string;
    phone: string;
    lga: string;
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
    currentTown: "",
    gender: "Female",
    ageGroup: "18-24",
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
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("Please accept the program commitment agreement.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/scholarship/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
                <strong>Applicant:</strong> {submittedData.fullName} ({submittedData.lga} LGA)
              </p>
              <p>
                <strong>Assigned Track:</strong> {submittedData.trackTitle}
              </p>
              <p>
                <strong>Device Access:</strong> {submittedData.deviceCategory}
              </p>
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
                1. Personal & Indigene Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Full Legal Name *
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
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
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
                    Age Bracket
                  </label>
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleInputChange}
                    className="w-full bg-[#fbf9f4] border border-[#1e1b18] p-2 text-xs text-black rounded-xs focus:outline-none"
                  >
                    <option value="Under 18">Under 18</option>
                    <option value="18-24">18 - 24 years</option>
                    <option value="25-30">25 - 30 years</option>
                    <option value="31-35">31 - 35 years</option>
                    <option value="36+">36+ years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Track & Device Assessment */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1e1b18] border-b border-[#dfdad0] pb-1 mb-3">
                2. Track Selection & Device Access
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#292524] mb-1">
                    Choose Your Preferred Course Track (1 Track Only) *
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
