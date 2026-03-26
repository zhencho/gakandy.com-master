import { useEffect } from 'react';
import { AUDIT_TOOL_URL } from '../constants/links';

export default function AuditToolRedirectPage() {
  useEffect(() => {
    window.location.replace(AUDIT_TOOL_URL);
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 pt-24 text-center">
      <div className="max-w-xl rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.92)] px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
        <h1 className="text-3xl font-bold text-[#f4fbff]">Opening Audit Tool</h1>
        <p className="mt-4 text-lg text-[#9db0c3]">
          Redirecting you to the Audit Tool CRM. If nothing happens, use the button below.
        </p>
        <a
          href={AUDIT_TOOL_URL}
          target="_self"
          className="mt-8 inline-flex items-center rounded-full bg-[#FFC635] px-8 py-4 font-semibold text-[#06131f] transition-all duration-300 hover:scale-105 hover:bg-[#ffd86a]"
        >
          Open Audit Tool
        </a>
      </div>
    </div>
  );
}
