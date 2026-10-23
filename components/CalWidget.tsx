"use client";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#10b981" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full min-h-[1000px] md:min-h-[700px] my-8 rounded-lg overflow-hidden shadow-sm">
      <Cal 
        calLink="sharon/consulta" 
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
      />
    </div>
  );
}