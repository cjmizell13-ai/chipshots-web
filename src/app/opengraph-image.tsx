import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt =
  "Chip Shots Indoor Golf Club — golf, food and drinks in Henderson, NV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const photo = readFileSync(
    join(process.cwd(), "public/images/exterior-storefront.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0f2a18",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            width: "720px",
          }}
        >
          <div
            style={{
              color: "#c9a84c",
              fontSize: "24px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Veteran-Owned · Henderson, NV
          </div>
          <div
            style={{
              color: "#fbf8f0",
              fontSize: "66px",
              lineHeight: 1.05,
              marginTop: "24px",
              fontWeight: 700,
            }}
          >
            Golf, food &amp; drinks under one roof.
          </div>
          <div
            style={{
              color: "#d8be74",
              fontSize: "30px",
              marginTop: "28px",
            }}
          >
            Chip Shots Indoor Golf Club
          </div>
        </div>
        <div style={{ display: "flex", width: "480px", height: "630px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={480}
            height={630}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
