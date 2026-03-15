import { useEffect } from 'react';
import { AUDIT_TOOL_URL } from '../constants/links';

export default function AuditToolRedirectPage() {
  useEffect(() => {
    window.location.replace(AUDIT_TOOL_URL);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-24 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-indigoDye-primary">Opening Audit Tool</h1>
        <p className="mt-4 text-lg text-gray-600">
          Redirecting you to our audit tool portal. If nothing happens, use the button below.
        </p>
        <a
          href={AUDIT_TOOL_URL}
          target="_self"
          className="mt-8 inline-flex items-center rounded-full bg-[#FFC635] px-8 py-4 font-semibold text-[#00204A] transition-all duration-300 hover:scale-105 hover:bg-[#FFD700]"
        >
          Open Audit Tool
        </a>
      </div>
    </div>
  );
}
