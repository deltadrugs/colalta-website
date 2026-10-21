export function ShareCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3ebdf",
        color: "#38281e",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#545838",
        }}
      >
        Pasadena, California
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1, letterSpacing: -1 }}>
          ColAlta Pharmacy
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 24, color: "#64503e" }}>
          2498 East Colorado Blvd, Pasadena
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#545838" }}>
        Since 1951 · Headley’s, then Glendale Pharmacy
      </div>
    </div>
  );
}
