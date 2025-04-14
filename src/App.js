import { useState } from "react";

function RacingLifeSim() {
  const [stage, setStage] = useState("intro");
  const [stats, setStats] = useState({
    speed: 2,
    iq: 1,
    charisma: 0,
    feedback: 0,
    reputation: 10,
    teamRep: 50,
    cash: 15000,
    location: "F3",
  });

  const handleChoice = (choice) => {
    let updatedStats = { ...stats };

    if (stage === "intro") {
      setStage("testing");
    } else if (stage === "testing") {
      if (choice === "long") {
        updatedStats.iq += 1;
        updatedStats.teamRep += 15;
        updatedStats.reputation += 5;
      }
      setStats(updatedStats);
      setStage("race1");
    } else if (stage === "race1") {
      if (choice === "aggressive") {
        updatedStats.reputation += 20;
        updatedStats.teamRep += 10;
        updatedStats.cash += 7000;
        updatedStats.iq += 1;
      }
      setStats(updatedStats);
      setStage("offweek1");
    } else if (stage === "offweek1") {
      if (choice === "fitness") {
        updatedStats.iq += 1;
      } else if (choice === "agent") {
        updatedStats.reputation += 5;
      } else if (choice === "sim") {
        updatedStats.iq += 2;
      }
      setStats(updatedStats);
      setStage("comingsoon");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>🏁 Michael's Racing Journey</h2>
      <p><strong>Location:</strong> {stats.location}</p>
      <p><strong>Reputation:</strong> {stats.reputation}</p>
      <p><strong>Team Relationship:</strong> {stats.teamRep}</p>
      <p><strong>Cash:</strong> ${stats.cash.toLocaleString()}</p>
      <p><strong>Speed:</strong> {stats.speed}</p>
      <p><strong>Race IQ:</strong> {stats.iq}</p>
      <p><strong>Charisma:</strong> {stats.charisma}</p>
      <p><strong>Feedback:</strong> {stats.feedback}</p>

      <div style={{ marginTop: "30px" }}>
        {stage === "intro" && (
          <>
            <p>Welcome to Formula 3, Michael! You’ve joined Vortex GP. Time for pre-season testing. What do you focus on?</p>
            <button onClick={() => handleChoice("long")}>🛠 Long Runs</button>
          </>
        )}

        {stage === "testing" && (
          <>
            <p>Testing complete. Race 1 at Silver. What's your race strategy?</p>
            <button onClick={() => handleChoice("aggressive")}>🏁 Aggressive Start</button>
          </>
        )}

        {stage === "race1" && (
          <>
            <p>P2 finish! Amazing race. Time to prepare for the next one. What’s your focus?</p>
            <button onClick={() => handleChoice("fitness")}>🏋️ Driver Fitness</button>
            <button onClick={() => handleChoice("agent")}>🤝 Agent Meeting</button>
            <button onClick={() => handleChoice("sim")}>💻 Sim Time</button>
          </>
        )}

        {stage === "offweek1" && (
          <>
            <p>Great off-week. More content coming soon — full season arc, F2 promotion path, and rivalries in development!</p>
          </>
        )}
      </div>
    </div>
  );
}

export default RacingLifeSim;