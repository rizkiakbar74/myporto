"use client";

import { useEffect, useRef } from "react";

type IntroLoaderProps = {
  onComplete: () => void;
};

const HUD_MARKUP = `<main class="scene" aria-label="Futuristic HUD intro animation">
    <div class="bg-grid"></div>
    <div class="crt"></div>
    <div class="noise"></div>
    <div class="scan"></div>

    <section class="stage stage-identify active" id="stageIdentify">
      <div class="auth-card">
        <div class="auth-frame"></div>
        <h1>PLEASE IDENTIFY YOURSELF</h1>
        <div class="auth-input"><span id="identifyText"></span><i></i></div>
        <p>AUTHENTICATION REQUEST / USER ACCESS</p>
      </div>
    </section>

    <section class="stage stage-password" id="stagePassword">
      <div class="auth-card">
        <div class="auth-frame"></div>
        <h1>ENTER PASSWORD</h1>
        <div class="auth-input"><span id="passwordText"></span><i></i></div>
        <p>SECURITY LAYER / ENCRYPTED ACCESS</p>
      </div>
    </section>

    <section class="stage stage-target" id="stageTarget">
      <div class="mini-target">
        <div class="target-square"></div>
        <div class="target-scan"></div>
        <div class="target-corner a"></div>
        <div class="target-corner b"></div>
        <div class="target-corner c"></div>
        <div class="target-corner d"></div>
      </div>
    </section>

    <section class="stage stage-welcome" id="stageWelcome">
      <div class="welcome-screen">
        <h2 id="helloText"></h2>
        <div class="bio-frame">
          <div class="bio-corner a"></div>
          <div class="bio-corner b"></div>
          <div class="bio-corner c"></div>
          <div class="bio-corner d"></div>
          <div class="bio-scan"></div>
          <div class="bio-avatar photo-avatar">
            <img src="/images/hud-rizki-photo.png" alt="Muhammad Rizki Akbar" />
            <div class="photo-overlay"></div>
          </div>
        </div>
        <h3 id="welcomeText"></h3>
      </div>
    </section>

    <section class="stage stage-dashboard" id="stageDashboard">
      <div class="cross x1"></div>
      <div class="cross x2"></div>
      <div class="cross x3"></div>
      <div class="cross x4"></div>
      <div class="cross x5"></div>
      <div class="cross x6"></div>

      <header class="hud-date">
        <div class="date-inner">
          <span id="dateMonth"></span>
          <strong id="dateYear"></strong>
          <b id="dateDay"></b>
          <time id="dateTime" aria-label="Current time"></time>
        </div>
      </header>

      <aside class="side side-left">
        <div class="hud-module">
          <div class="radar-mini"></div>
          <div class="module-table"><i></i><i></i><i></i></div>
        </div>
        <div class="data-strip"><span style="--w:82%"></span><b>83.82%</b></div>
        <div class="readout">
          <p>CHECK UPLOAD</p>
          <em>TYPE01 351.82</em><em>TYPE02 292.18</em><em>TYPE03 759.88</em>
          <div class="bar-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </div>

        <div class="hud-module">
          <div class="radar-mini"></div>
          <div class="module-table"><i></i><i></i><i></i></div>
        </div>
        <div class="data-strip"><span style="--w:64%"></span><b>64.11%</b></div>
        <div class="readout">
          <p>SYSTEM LOAD</p>
          <em>WEBDEV 213.64</em><em>UIFLOW 420.12</em><em>OPSNET 171.90</em>
          <div class="bar-chart alt"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </div>

        <div class="hud-module compact">
          <div class="radar-mini"></div>
          <div class="module-table"><i></i><i></i></div>
        </div>
      </aside>

      <aside class="side side-right">
        <div class="hud-module">
          <div class="radar-mini"></div>
          <div class="module-table"><i></i><i></i><i></i></div>
        </div>
        <div class="data-strip"><span style="--w:91%"></span><b>91.63%</b></div>
        <div class="readout">
          <p>CONTACT LINK</p>
          <em>INSTAGRAM OK</em><em>GITHUB OK</em><em>LINKEDIN OK</em>
          <div class="bar-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </div>

        <div class="hud-module">
          <div class="radar-mini"></div>
          <div class="module-table"><i></i><i></i><i></i></div>
        </div>
        <div class="data-strip"><span style="--w:72%"></span><b>72.29%</b></div>
        <div class="readout">
          <p>MOTION CALIB</p>
          <em>FRAME 78.12</em><em>RENDER 62.90</em><em>SYNC 91.33</em>
          <div class="bar-chart alt"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </div>

        <div class="power-buttons">
          <button></button><button></button><button></button><button></button><button></button>
        </div>
      </aside>

      <div class="corner-panel cp-left-top">
        <b>NETWORK</b>
        <span>packet 0294</span>
        <i></i>
      </div>
      <div class="corner-panel cp-right-top">
        <b>SECURITY</b>
        <span>verified</span>
        <i></i>
      </div>
      <div class="corner-panel cp-left-bottom">
        <b>BUILD</b>
        <span>stable</span>
        <i></i>
      </div>
      <div class="corner-panel cp-right-bottom">
        <b>DEPLOY</b>
        <span>ready</span>
        <i></i>
      </div>

      <section class="central-hud">
        <div class="hex-grid-layer">
          <i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="outer-arc"></div>
        <div class="outer-arc second"></div>
        <div class="segment-ring"></div>
        <div class="dash-ring"></div>
        <div class="inner-ring"></div>
        <div class="cpu-ring"></div>
        <div class="cpu">
          <span>CPU</span>
          <b id="cpuText">1%</b>
        </div>

        <div class="small-grid g1"></div>
        <div class="small-grid g2"></div>
        <div class="small-grid g3"></div>
        <div class="small-grid g4"></div>

        <div class="orb orb-a"><span>A</span><i>973.48</i></div>
        <div class="orb orb-b"><span>B</span><i>815.69</i></div>
        <div class="orb orb-c"><span>C</span><i>311.08</i></div>
        <div class="orb orb-d"><span>D</span><i>612.87</i></div>
        <div class="orb orb-e"><span>E</span><i>918.00</i></div>

        <div class="mini-read mr1">ACTIVE<br />MODEL</div>
        <div class="mini-read mr2">SYSTEM<br />UPTIME 15</div>
        <div class="mini-read mr3">DATA<br />PROCESS</div>

        <div class="metric-orbit mo1"><span>WEB</span><b>92%</b></div>
        <div class="metric-orbit mo2"><span>UI</span><b>88%</b></div>
        <div class="metric-orbit mo3"><span>OPS</span><b>81%</b></div>
        <div class="metric-orbit mo4"><span>DB</span><b>76%</b></div>
      </section>

      <div class="terminal-ribbon">
        <span>root@portfolio:~$</span>
        <b id="terminalText">initializing hero transition</b>
      </div>

      <footer class="hud-bottom">
        <div class="equalizer">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="media">
          <span></span><span></span><span></span><span></span>
        </div>
      </footer>
    </section>
  </main>`;

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const timers: number[] = [];
    const intervals: number[] = [];

    const setTimer = (callback: () => void, delay: number) => {
      const id = window.setTimeout(callback, delay);
      timers.push(id);
      return id;
    };

    const setIntervalSafe = (callback: () => void, delay: number) => {
      const id = window.setInterval(callback, delay);
      intervals.push(id);
      return id;
    };

    const query = <T extends Element>(selector: string) => root.querySelector<T>(selector);

    const stages = {
      identify: query<HTMLElement>("#stageIdentify"),
      password: query<HTMLElement>("#stagePassword"),
      target: query<HTMLElement>("#stageTarget"),
      welcome: query<HTMLElement>("#stageWelcome"),
      dashboard: query<HTMLElement>("#stageDashboard"),
    };

    const identifyText = query<HTMLElement>("#identifyText");
    const passwordText = query<HTMLElement>("#passwordText");
    const helloText = query<HTMLElement>("#helloText");
    const welcomeText = query<HTMLElement>("#welcomeText");
    const cpuText = query<HTMLElement>("#cpuText");
    const dateMonth = query<HTMLElement>("#dateMonth");
    const dateYear = query<HTMLElement>("#dateYear");
    const dateDay = query<HTMLElement>("#dateDay");
    const dateTime = query<HTMLTimeElement>("#dateTime");

    const setStage = (name: keyof typeof stages) => {
      Object.values(stages).forEach((stage) => stage?.classList.remove("active"));
      stages[name]?.classList.add("active");
    };

    const typeText = (element: HTMLElement | null, text: string, speed = 55, callback: () => void = () => {}) => {
      if (!element) {
        callback();
        return;
      }

      element.textContent = "";
      let index = 0;

      const intervalId = setIntervalSafe(() => {
        element.textContent = text.slice(0, index + 1);
        index += 1;

        if (index >= text.length) {
          window.clearInterval(intervalId);
          callback();
        }
      }, speed);
    };

    const typePassword = (element: HTMLElement | null, count = 11, speed = 55, callback: () => void = () => {}) => {
      if (!element) {
        callback();
        return;
      }

      element.textContent = "";
      let index = 0;

      const intervalId = setIntervalSafe(() => {
        element.textContent += "•";
        index += 1;

        if (index >= count) {
          window.clearInterval(intervalId);
          callback();
        }
      }, speed);
    };

    const runCpu = () => {
      if (!cpuText) return;

      let value = 1;
      const intervalId = setIntervalSafe(() => {
        value += Math.ceil(Math.random() * 6);
        if (value >= 99) value = 99;
        cpuText.textContent = `${value}%`;

        if (value >= 99) {
          window.clearInterval(intervalId);
        }
      }, 85);
    };

    const cycleTerminal = () => {
      const terminal = query<HTMLElement>("#terminalText");
      if (!terminal) return;

      const messages = [
        "initializing hero transition",
        "loading profile section",
        "connecting social modules",
        "checking motion system",
        "portfolio interface ready",
      ];

      let index = 0;
      terminal.textContent = messages[index];

      const intervalId = setIntervalSafe(() => {
        index += 1;
        if (index >= messages.length) {
          window.clearInterval(intervalId);
          return;
        }
        terminal.textContent = messages[index];
      }, 850);
    };

    const updateDateTime = () => {
      const now = new Date();

      if (dateMonth) {
        dateMonth.textContent = new Intl.DateTimeFormat("en-US", { month: "long" }).format(now).toUpperCase();
      }
      if (dateYear) dateYear.textContent = String(now.getFullYear());
      if (dateDay) dateDay.textContent = String(now.getDate()).padStart(2, "0");
      if (dateTime) {
        dateTime.dateTime = now.toISOString();
        dateTime.textContent = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
      }
    };

    const finishIntroQuickly = () => {
      root.classList.add("hud-intro-overlay--leaving");
      setTimer(onComplete, 620);
    };

    const boot = () => {
      setStage("identify");

      typeText(identifyText, "MUHAMMAD RIZKI AKBAR", 58, () => {
        setTimer(() => {
          setStage("password");

          typePassword(passwordText, 12, 48, () => {
            setTimer(() => {
              setStage("target");

              setTimer(() => {
                setStage("welcome");

                typeText(helloText, "HELLO, BUDDIES", 54, () => {
                  setTimer(() => {
                    typeText(welcomeText, "WELCOME TO MY PORTFOLIO", 48, () => {
                      setTimer(() => {
                        setStage("dashboard");
                        runCpu();
                        cycleTerminal();

                        setTimer(finishIntroQuickly, 6500);
                      }, 850);
                    });
                  }, 280);
                });
              }, 1450);
            }, 620);
          });
        }, 800);
      });
    };

    updateDateTime();
    setIntervalSafe(updateDateTime, 1000);
    boot();

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="hud-intro-overlay"
      dangerouslySetInnerHTML={{ __html: HUD_MARKUP }}
    />
  );
}
