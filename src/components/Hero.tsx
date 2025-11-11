import Link from "next/link";

const pulseData = [
  { label: "Patients assistés", value: "12 480", trend: "+18%" },
  { label: "Précision diagnostique", value: "99.2%", trend: "+0.4%" },
  { label: "Latence de réponse", value: "0.8s", trend: "-35%" },
];

export function Hero() {
  return (
    <section className="screen-section" id="contact">
      <div
        className="blur-orb"
        style={{ top: "-10%", right: "-15%", width: "420px", height: "420px", background: "rgba(128, 148, 255, 0.25)" }}
      />
      <div
        className="blur-orb"
        style={{ bottom: "-12%", left: "-10%", width: "320px", height: "320px", background: "rgba(55, 209, 166, 0.25)" }}
      />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "var(--max-content-width)",
          display: "grid",
          gap: "var(--grid-gap)",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <div style={{ display: "grid", gap: "1.4rem" }}>
          <span className="chip">Clinique Synapse - Médecine augmentée</span>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 7vw, 4rem)",
              lineHeight: "1.05",
              fontWeight: 700,
            }}
          >
            Je vais aller voir un <span style={{ color: "var(--color-accent)" }}>docteur robot</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.1vw, 1.2rem)",
              color: "var(--color-text-muted)",
            }}
          >
            Préparez votre consultation dans un environnement holographique, explorez les protocoles de prise en charge
            neuronale et configurez les modules d&apos;assistance avant votre arrivée.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Link className="primary-cta" href="#reservation">
              Programmer ma session
            </Link>
            <Link className="secondary-cta" href="#experiences">
              Explorer le parcours augmenté
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.2rem",
            }}
          >
            {pulseData.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--border-radius-sm)",
                  background: "rgba(8, 24, 50, 0.85)",
                  border: "1px solid rgba(128, 148, 255, 0.2)",
                  minWidth: "180px",
                }}
              >
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginBottom: "0.35rem" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>{item.value}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-accent)" }}>{item.trend}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "relative",
            borderRadius: "var(--border-radius-lg)",
            border: "1px solid rgba(108, 236, 201, 0.35)",
            padding: "2.2rem",
            background:
              "linear-gradient(155deg, rgba(8, 24, 50, 0.85) 0%, rgba(13, 38, 73, 0.92) 55%, rgba(21, 53, 105, 0.88) 100%)",
            boxShadow: "var(--shadow-sharp)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
            }}
          >
            Console de préparation
          </div>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: "0.85rem 0 1.2rem" }}>
            Briefing patient augmenté
          </h2>
          <ul style={{ listStyle: "none", display: "grid", gap: "1rem", margin: 0, padding: 0 }}>
            <li>
              <strong>Alignement cognitif</strong>
              <p style={{ color: "var(--color-text-muted)", marginTop: "0.3rem", fontSize: "0.9rem" }}>
                Synchronisation neuronale anticipée pour optimiser la compréhension des recommandations.
              </p>
            </li>
            <li>
              <strong>Avatars de suivi</strong>
              <p style={{ color: "var(--color-text-muted)", marginTop: "0.3rem", fontSize: "0.9rem" }}>
                Choisissez un compagnon virtuel pour reformuler les diagnostics et piloter les rappels.
              </p>
            </li>
            <li>
              <strong>Mode empathique</strong>
              <p style={{ color: "var(--color-text-muted)", marginTop: "0.3rem", fontSize: "0.9rem" }}>
                Analyse émotionnelle continue avec modulation de la voix synthétique adaptée à votre situation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
