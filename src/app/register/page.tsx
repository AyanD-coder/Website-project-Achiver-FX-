"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import BrandLogo from "@/components/ui/brand-logo";

const REGISTER_URL = "https://client.achieverfinancials.com/accounts/signUp";
const registerRedirectKey = "achiever-register-redirected";

export default function RegisterPage() {
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const handlePageShow = () => {
      setHasRedirected(
        window.sessionStorage.getItem(registerRedirectKey) === "1",
      );
    };

    window.addEventListener("pageshow", handlePageShow);
    const syncFrameId = window.requestAnimationFrame(handlePageShow);

    let redirectTimeoutId: number | undefined;

    if (window.sessionStorage.getItem(registerRedirectKey) !== "1") {
      window.sessionStorage.setItem(registerRedirectKey, "1");
      redirectTimeoutId = window.setTimeout(() => {
        window.location.assign(REGISTER_URL);
      }, 350);
    }

    return () => {
      if (redirectTimeoutId) {
        window.clearTimeout(redirectTimeoutId);
      }

      window.cancelAnimationFrame(syncFrameId);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_30%),#050914] px-6 py-16 text-white [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_30%),#f8fbff] [.light_&]:text-slate-950">
      <section className="w-full max-w-md text-center">
        <Link href="/" className="mb-10 inline-flex justify-center" aria-label="Go to home page">
          <BrandLogo className="w-[220px] [.light_&]:brightness-[0.18] [.light_&]:contrast-[1.35]" priority />
        </Link>

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200 [.light_&]:text-blue-700">
          {hasRedirected ? "Registration Portal" : "Opening Registration"}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
          {hasRedirected ? "Return to Achiever FX" : "Taking you to signup"}
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-300 [.light_&]:text-slate-600">
          {hasRedirected
            ? "Use the button below to go back to the website, or continue to the registration portal again."
            : "The secure client registration portal is opening in this tab."}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 [.light_&]:border-slate-200 [.light_&]:text-slate-900 [.light_&]:hover:bg-blue-50"
          >
            Back to Website
          </Link>
          <a
            href={REGISTER_URL}
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)] transition-transform hover:-translate-y-0.5"
          >
            Continue Registration
          </a>
        </div>
      </section>
    </main>
  );
}
