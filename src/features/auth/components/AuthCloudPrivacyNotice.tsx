import { env } from "@/src/env.mjs";

export const CloudPrivacyNotice = ({ action }: { action: string }) =>
  env.NEXT_PUBLIC_LANGFUSE_CLOUD_REGION !== undefined ? (
    <div className="mt-10 text-center text-xs text-gray-500">
      By {action} you are agreeing to our{" "}
      <a
        href="https://langfuse.com/tos"
        target="_blank"
        rel="noopener noreferrer"
        className="italic"
      >
        Terms of Service
      </a>
      ,{" "}
      <a
        href="https://langfuse.com/privacy"
        rel="noopener noreferrer"
        className="italic"
      >
        Privacy Policy
      </a>
      , and{" "}
      <a
        href="https://langfuse.com/cookie-policy"
        rel="noopener noreferrer"
        className="italic"
      >
        Cookie Policy
      </a>
    </div>
  ) : null;