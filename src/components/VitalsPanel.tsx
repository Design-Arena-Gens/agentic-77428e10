const vitals = [
  {
    title: "Cohérence cardiaque",
    value: "92%",
    description: "Résonance optimale entre respiration guidée et projections lumineuses.",
  },
  {
    title: "Alignement neural",
    value: "87%",
    description: "Synchronisation des ondes gamma avant dialogue clinique.",
  },
  {
    title: "Indice de confort",
    value: "9.6/10",
    description: "Score moyen rapporté par les patients lors des 30 derniers cycles.",
  },
  {
    title: "Temps d&apos;attente",
    value: "3 min",
    description: "Réduction grâce aux prédictions de flux en salle holo-interactive.",
  },
];

export function VitalsPanel() {
  return (
    <section className="screen-section">
      <p className="section-heading">Biométries en direct</p>
      <div
        className="card-grid"
        style={{
          marginTop: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        {vitals.map((item) => (
          <article
            className="card"
            key={item.title}
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="blur-orb"
              style={{
                top: "-40%",
                right: "-30%",
                width: "220px",
                height: "220px",
                background: "rgba(55, 209, 166, 0.25)",
              }}
            />
            <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.14em" }}>
              Indicateur
            </div>
            <h3 style={{ fontSize: "1.4rem" }}>{item.title}</h3>
            <div style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--color-accent)", margin: "0.6rem 0" }}>
              {item.value}
            </div>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
