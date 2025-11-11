const phases = [
  {
    label: "Pré-consultation",
    eta: "J-2",
    description:
      "Collecte automatisée des données préventives et calibrage des capteurs biométriques portés à domicile.",
  },
  {
    label: "Arrivée immersive",
    eta: "Jour J",
    description:
      "Accueil par drone d&apos;orientation, scan volumétrique instantané et adaptation lumineuse à votre rythme cardiaque.",
  },
  {
    label: "Dialogue symbiotique",
    eta: "+18 min",
    description:
      "Entretien en duo avec le docteur robot et l&apos;avatar empathique. Hypothèses générées et validées en direct.",
  },
  {
    label: "Plan quantifié",
    eta: "+32 min",
    description:
      "Synthèse personnalisée, prescription intelligente et configuration des routines de suivi autonome.",
  },
];

export function ProtocolTimeline() {
  return (
    <section className="screen-section" id="protocoles">
      <p className="section-heading">Protocoles</p>
      <div
        className="card"
        style={{
          margin: "0 auto",
          maxWidth: "var(--max-content-width)",
          padding: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        <div style={{ display: "grid", gap: "2.4rem" }}>
          {phases.map((phase, index) => (
            <div
              key={phase.label}
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "minmax(120px, 160px) 1fr",
                alignItems: "start",
              }}
            >
              <div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", letterSpacing: "0.12em" }}>
                  ETAPE {index + 1}
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>{phase.label}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--color-secondary)", marginTop: "0.2rem" }}>
                  {phase.eta}
                </div>
              </div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {phase.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
