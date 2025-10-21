import { useEffect } from "react";

interface AdSpaceProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export const AdSpace = ({ slot, format = "auto", responsive = true, className = "" }: AdSpaceProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`ad-space my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3435950227164410"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};
