import React from "react";

export default function WarningMessage() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        boxSizing: "border-box",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
      className="bg-white min-h-screen w-full flex flex-col items-center justify-center p-6"
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
          padding: "2.5rem 2rem",
        }}
        className="max-w-xl w-full text-center bg-white rounded-xl border border-gray-200 shadow-sm p-8"
      >
        {/* Warning Icon */}
        <div
          style={{
            margin: "0 auto 1.5rem auto",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "#fef3c7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ width: "36px", height: "36px", color: "#d97706" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Warning Label Badge */}
        <div style={{ marginBottom: "1rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.85rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              borderRadius: "9999px",
            }}
          >
            Warning • Service Alert
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "1.65rem",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "1.25rem",
            letterSpacing: "-0.025em",
          }}
        >
          Website Temporarily Unreachable
        </h1>

        {/* Exact Warning Message */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "#374151",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          This Website is temporarily unreacheable, Please contact the server
          administrators or the hosting company of you are the owner of the
          website.
        </p>

        {/* Subtle technical footer line */}
        <div
          style={{
            borderTop: "1px solid #f3f4f6",
            paddingTop: "1.25rem",
            marginTop: "1.25rem",
            fontSize: "0.85rem",
            color: "#6b7280",
            lineHeight: 1.5,
          }}
        >
          <p>
            HTTP 503 • Service Temporarily Unavailable
          </p>
        </div>
      </div>
    </div>
  );
}
