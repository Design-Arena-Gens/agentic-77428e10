'use client';

import { useMemo, useState } from "react";

type Reason = "bilan" | "urgence" | "suivi" | "coaching";

const reasons: { id: Reason; label: string; duration: string; pitch: string }[] = [
  {
    id: "bilan",
    label: "Bilan neuro-synaptique",
    duration: "45 min",
    pitch: "Analyse complète des signaux cérébraux et métaboliques pour une cartographie intégrale.",
  },
  {
    id: "urgence",
    label: "Intervention rapide",
    duration: "25 min",
    pitch: "Priorité absolue avec protocole de stabilisation robotisé et liaison directe avec l&apos;équipe humaine.",
  },
  {
    id: "suivi",
    label: "Suivi adaptatif",
    duration: "30 min",
    pitch: "Ajustement automatique des programmes prescrits et recalibrage des routines quotidiennes.",
  },
  {
    id: "coaching",
    label: "Coaching de longévité",
    duration: "50 min",
    pitch: "Optimisation de vos performances biologiques grâce à l&apos;IA prédictive.",
  },
];

const slots = ["09:15", "10:40", "13:05", "15:20", "17:45", "19:10"];

const synthesis = {
  bilan: "Préparez vos derniers résultats biologiques et votre historique de sommeil des 14 derniers jours.",
  urgence: "Notre protocole vous contactera sur canal sécurisé dans les 60 secondes suivant la validation.",
  suivi: "Importez les données recueillies depuis votre dernière session de monitoring autonome.",
  coaching: "Choisissez les piliers que vous souhaitez renforcer : cognition, récupération, mobilité ou nutrition.",
};

export function AppointmentScheduler() {
  const [selectedReason, setSelectedReason] = useState<Reason>("bilan");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(slots[3]);
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split("T")[0]);

  const highlightedReason = useMemo(() => reasons.find((item) => item.id === selectedReason)!, [selectedReason]);

  const formattedDate = useMemo(() => {
    try {
      return new Date(selectedDate).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
    } catch {
      return selectedDate;
    }
  }, [selectedDate]);

  return (
    <section className="screen-section" id="reservation">
      <p className="section-heading">Réservation</p>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "var(--max-content-width)",
          display: "grid",
          gap: "var(--grid-gap)",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        <article className="card" style={{ display: "grid", gap: "1.6rem" }}>
          <header>
            <div className="chip" style={{ marginBottom: "0.8rem" }}>
              <span aria-hidden="true">[cfg]</span> Module de planification
            </div>
            <h3>Composer ma session</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
              Sélectionnez le motif principal de votre visite pour que Docteur Robot configure la consultation à
              l&apos;avance.
            </p>
          </header>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            {reasons.map((reason) => {
              const active = reason.id === selectedReason;
              return (
                <button
                  key={reason.id}
                  type="button"
                  onClick={() => setSelectedReason(reason.id)}
                  className="scheduler-option"
                  aria-pressed={active}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{reason.label}</span>
                    <span style={{ color: "var(--color-secondary)", fontSize: "0.8rem" }}>{reason.duration}</span>
                  </div>
                  <p>{reason.pitch}</p>
                </button>
              );
            })}
          </div>
        </article>
        <article className="card" style={{ display: "grid", gap: "1.6rem" }}>
          <header>
            <div className="chip" style={{ marginBottom: "0.8rem" }}>
              <span aria-hidden="true">[cal]</span> Coordination temporelle
            </div>
            <h3>Synchroniser mon agenda</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
              Choisissez la fenêtre qui s&apos;aligne avec votre rythme circadien. Le module adaptatif ajustera
              l&apos;environnement lumineux.
            </p>
          </header>
          <div style={{ display: "grid", gap: "1rem" }}>
            <label className="scheduler-field">
              <span>Date immersive</span>
              <input
                type="date"
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </label>
            <div className="scheduler-slot-grid">
              {slots.map((slot) => {
                const active = slot === selectedSlot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`scheduler-slot ${active ? "scheduler-slot--active" : ""}`.trim()}
                    aria-pressed={active}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <div className="scheduler-summary">
              <h4>Briefing automatique</h4>
              <p>{synthesis[selectedReason]}</p>
              <dl>
                <div>
                  <dt>Motif</dt>
                  <dd>{highlightedReason.label}</dd>
                </div>
                <div>
                  <dt>Date</dt>
                  <dd>{formattedDate}</dd>
                </div>
                <div>
                  <dt>Créneau</dt>
                  <dd>{selectedSlot ?? "Sélectionner"}</dd>
                </div>
              </dl>
            </div>
            <button type="button" className="primary-cta" style={{ width: "100%", justifyContent: "center" }}>
              Valider ma consultation augmentée
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
