/**
 * First-Term Exam Preparation Dataset
 * Sourced directly from KMC Exam Papers (2078, 2079, 2080, 2081, 2082, 2083 Hostel Test & Subject Syllabus)
 */

const STUDY_DATA = {
  // ==========================================
  // SECTION 1: TOPICS BY REPETITION FREQUENCY
  // ==========================================
  topics: {
    physics: [
      {
        id: "phy-shm",
        title: "Simple Harmonic Motion (SHM) & Oscillations",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Set A", "2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "8 - 11 Marks",
        summary: "Covers differential equation of SHM, velocity/acceleration relations, kinetic and potential energy conservation ($E = \\frac{1}{2}m\\omega^2 A^2$), simple pendulum time period behavior on the Moon, and mass-spring systems.",
        keyConcepts: [
          "Displacement: $y = A \\sin(\\omega t)$, Velocity: $v = \\omega \\sqrt{A^2 - y^2}$, Acceleration: $a = -\\omega^2 y$",
          "Total Energy: $E = KE + PE = \\frac{1}{2}m\\omega^2(A^2 - y^2) + \\frac{1}{2}m\\omega^2 y^2 = \\frac{1}{2}m\\omega^2 A^2$ (Constant throughout motion)",
          "Simple Pendulum on Moon: $T = 2\\pi\\sqrt{l/g}$. Since $g_{moon} = g_{earth}/6$, $T$ increases by $\\sqrt{6}$ times $\\implies$ Pendulum clock slows down (loses time)!",
          "Spring Pendulum on Moon: $T = 2\\pi\\sqrt{m/k}$. Independent of $g$, so spring watch time period remains UNCHANGED on the Moon!"
        ],
        questions: [
          {
            type: "Short Question [2M]",
            year: "2083 Hostel & 2082 Set A",
            question: "A simple pendulum is taken to the Moon. Will it gain or lose time? Explain why. What happens to a spring clock under the same conditions?",
            answer: "The time period of a simple pendulum is $T = 2\\pi\\sqrt{l/g}$. On the moon, acceleration due to gravity is $g/6$, which is lower than on Earth. Therefore, the time period $T$ increases. A longer time period means the pendulum takes longer for each oscillation, so it runs slow and LOSES time. In contrast, a spring clock has time period $T = 2\\pi\\sqrt{m/k}$, which is independent of acceleration due to gravity $g$. Thus, a spring clock keeps correct time and remains unaffected."
          },
          {
            type: "Derivation & Graph [4M]",
            year: "2078 Set 1 & 2083 Hostel",
            question: "Find an expression for the total energy of a particle in simple harmonic motion and show that it obeys the law of conservation of energy. Sketch the variation of K.E. and P.E. with displacement.",
            answer: "At displacement $y$ from mean position: Velocity $v = \\omega\\sqrt{A^2 - y^2}$, so $K.E. = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2(A^2 - y^2)$. Restoring force $F = ky = m\\omega^2 y$, so $P.E. = \\int_0^y ky\,dy = \\frac{1}{2}m\\omega^2 y^2$. Total Energy $E = K.E. + P.E. = \\frac{1}{2}m\\omega^2 A^2$. Since $m, \\omega, A$ are constants, total energy is constant at all points. At $y=0$ (mean), $K.E. = E$ and $P.E. = 0$. At $y=\\pm A$ (extremes), $K.E. = 0$ and $P.E. = E$. The graph of K.E. is an inverted parabola while P.E. is an upright parabola, summing to a horizontal line $E$."
          },
          {
            type: "Numerical [3M]",
            year: "2082 Set A & 2083 Hostel",
            question: "A body of mass 2 kg is suspended from a vertical spring of negligible mass and stretches the spring by 0.1 m. Find the force constant of the spring and its time period of oscillation when slightly displaced.",
            answer: "Given: $m = 2\\text{ kg}$, extension $x = 0.1\\text{ m}$, $g = 9.8\\text{ m/s}^2$. Restoring force $F = kx = mg \\implies k = \\frac{mg}{x} = \\frac{2 \\times 9.8}{0.1} = 196\\text{ N/m}$. Time period $T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{2}{196}} = 2\\pi\\sqrt{\\frac{1}{98}} \\approx 0.634\\text{ s}$."
          }
        ]
      },
      {
        id: "phy-rot",
        title: "Rotational Dynamics & Moment of Inertia",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Set A", "2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "7 - 10 Marks",
        summary: "Moment of inertia of rigid bodies, radius of gyration, rotational kinetic energy derivation, torque relation ($\\tau = I\\alpha$), and the principle of conservation of angular momentum ($L = I\\omega = \\text{const}$).",
        keyConcepts: [
          "Moment of Inertia: $I = \\sum m_i r_i^2 = M k^2$, where $k$ is radius of gyration. Depends on mass, mass distribution, axis of rotation.",
          "Rotational Kinetic Energy: $K_{rot} = \\frac{1}{2}I\\omega^2$. Total KE of rolling body without slipping: $K = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}Mv^2(1 + \\frac{k^2}{R^2})$.",
          "Torque: $\\tau = I\\alpha = \\frac{dL}{dt}$, Work done: $W = \\tau\\theta = F R \\theta$.",
          "Conservation of Angular Momentum: If external torque $\\tau_{ext} = 0$, $L = I_1\\omega_1 = I_2\\omega_2 = \\text{constant}$. If Earth shrinks to half radius, $I = \\frac{2}{5}MR^2$ becomes $I/4$, so $\\omega$ increases 4x $\\implies$ Length of day becomes $24 / 4 = 6\\text{ hours}$!"
        ],
        questions: [
          {
            type: "Conceptual Question [2M]",
            year: "2083 Hostel & 2078 Set 1",
            question: "If the Earth were to shrink suddenly to half of its present radius without any change in its mass, what would happen to the duration of the day? Justify your answer.",
            answer: "Earth is assumed to be a uniform sphere with moment of inertia $I = \\frac{2}{5}MR^2$. When its radius becomes $R' = R/2$, its new moment of inertia is $I' = \\frac{2}{5}M(R/2)^2 = \\frac{I}{4}$. By conservation of angular momentum: $I\\omega = I'\\omega' \\implies I\\left(\\frac{2\\pi}{T}\\right) = \\frac{I}{4}\\left(\\frac{2\\pi}{T'}\\right) \\implies T' = \\frac{T}{4}$. Since current day duration $T = 24\\text{ hours}$, the new day duration will be $T' = 24 / 4 = 6\\text{ hours}$."
          },
          {
            type: "Derivation [3M]",
            year: "2078 Set 1 & 2083 Hostel",
            question: "Derive an expression for the moment of inertia of a thin uniform rod of mass M and length L about an axis passing through its centre of mass and perpendicular to its length.",
            answer: "Mass per unit length $\\lambda = M/L$. Consider a small element $dx$ at distance $x$ from the centre of the rod ($-L/2 \\le x \\le L/2$). Mass of element $dm = \\lambda\,dx = (M/L)dx$. Moment of inertia of this element about the central transverse axis is $dI = dm \\cdot x^2 = (M/L)x^2\,dx$. Integrating from $-L/2$ to $+L/2$: $I = \\int_{-L/2}^{L/2} \\frac{M}{L}x^2\,dx = \\frac{M}{L}\\left[\\frac{x^3}{3}\\right]_{-L/2}^{L/2} = \\frac{M}{3L}\\left(\\frac{L^3}{8} - \\left(-\\frac{L^3}{8}\\right)\\right) = \\frac{1}{12}ML^2$."
          },
          {
            type: "Numerical [3M]",
            year: "2083 Hostel",
            question: "A ballet dancer spins at 2.4 rev/s with her arms outstretched, when the moment of inertia about the axis of rotation is I. With her arms folded, the moment of inertia about the same axis becomes 0.6I. Calculate the new rate of spin.",
            answer: "Given: $I_1 = I$, $f_1 = 2.4\\text{ rev/s}$, $I_2 = 0.6I$, $f_2 = ?$. By conservation of angular momentum: $I_1\\omega_1 = I_2\\omega_2 \\implies I_1(2\\pi f_1) = I_2(2\\pi f_2) \\implies I \\times 2.4 = 0.6I \\times f_2 \\implies f_2 = \\frac{2.4}{0.6} = 4\\text{ rev/s}$."
          }
        ]
      },
      {
        id: "phy-photo",
        title: "Photoelectric Effect & Quantum Physics",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Set A", "2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "8 - 12 Marks",
        summary: "Einstein's photoelectric equation ($h\\nu = \\phi + KE_{max}$), work function, threshold frequency $\\nu_0$, stopping potential $V_0$, stopping potential vs frequency graphs (slope = $h/e$), and photon properties ($p = h/\\lambda = E/c$).",
        keyConcepts: [
          "Photon Properties: Rest mass = 0, Energy $E = h\\nu = hc/\\lambda$, Momentum $p = h/\\lambda = E/c$. Photons are electrically neutral (not deflected by E or B fields).",
          "Einstein's Equation: $E = \\phi + eV_0 \\implies h\\nu = h\\nu_0 + \\frac{1}{2}mv_{max}^2 = h\\nu_0 + eV_0$.",
          "Stopping Potential Graph: $V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi}{e}$. Slope of $V_0$ vs $\\nu$ is universal ($h/e$), independent of metal type!",
          "Intensity vs Frequency: Intensity determines number of photons emitted per second (photoelectric current). Frequency determines kinetic energy and stopping potential of electrons."
        ],
        questions: [
          {
            type: "Conceptual & Graphical [3M]",
            year: "2083 Hostel & 2078 Set 1",
            question: "Sketch graphs showing the variation of stopping potential with frequency of incident radiation for three photosensitive materials A, B, and C with threshold frequencies $f_1 > f_2 > f_3$. (i) In which case is stopping potential greater for radiation of given frequency? (ii) Does the slope depend on the nature of the material?",
            answer: "(i) Stopping potential is $V_0 = \\frac{h}{e}(\\nu - \\nu_0)$. For a given incident frequency $\\nu$, the metal with the smallest threshold frequency ($C$ with $f_3$) has the largest difference $(\\nu - \\nu_0)$, hence $V_0$ is greatest for material C. (ii) No, the slope of the $V_0$ vs $\\nu$ line is $\\frac{h}{e}$, which consists of universal constants (Planck's constant $h$ and elementary charge $e$). It is strictly identical for all photosensitive materials."
          },
          {
            type: "Numerical [3M]",
            year: "2083 Hostel",
            question: "A clean nickel surface with a work function of 5.1 eV is exposed to light of wavelength 235 nm. What is the maximum speed of the photoelectrons emitted from its surface?",
            answer: "Incident energy $E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{235 \\times 10^{-9}\\text{ J}} = \\frac{1.989 \\times 10^{-19}}{2.35 \\times 10^{-7}} = 8.464 \\times 10^{-19}\\text{ J} = \\frac{8.464 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 5.29\\text{ eV}$. Kinetic energy $K_{max} = E - \\phi = 5.29\\text{ eV} - 5.10\\text{ eV} = 0.19\\text{ eV} = 0.19 \\times 1.6 \\times 10^{-19} = 3.04 \\times 10^{-20}\\text{ J}$. Maximum velocity: $v_{max} = \\sqrt{\\frac{2 K_{max}}{m_e}} = \\sqrt{\\frac{2 \\times 3.04 \\times 10^{-20}}{9.1 \\times 10^{-31}}} = \\sqrt{6.68 \\times 10^{10}} \\approx 2.58 \\times 10^5\\text{ m/s}$."
          }
        ]
      },
      {
        id: "phy-electron",
        title: "Electrons, Thomson's Experiment & Millikan's Method",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Set A", "2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "8 - 11 Marks",
        summary: "Determination of specific charge ($e/m$) of an electron by J.J. Thomson's crossed field method, Millikan's oil drop experiment for quantization of charge ($q = ne$), motion of charged particles in uniform electric and magnetic fields, and Hall Effect.",
        keyConcepts: [
          "Crossed Fields / Velocity Selector: Electric force $F_e = qE$, Magnetic force $F_b = qvB$. When forces balance: $qE = qvB \\implies v = \\frac{E}{B}$.",
          "Specific Charge of Electron: $e/m = 1.76 \\times 10^{11}\\text{ C/kg}$. In magnetic field alone, path is circular: $r = \\frac{mv}{qB}$.",
          "Millikan's Oil Drop Experiment: Terminal velocity in air $v_1 = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}$. With electric field applied upwards to balance drop: $qE = mg \\implies q = \\frac{mg}{E}$. Confirmed quantization of electric charge: $q = \\pm ne$.",
          "Hall Effect: Hall voltage across conductor of thickness $t$ carrying current $I$ in magnetic field $B$: $V_H = \\frac{IB}{net}$."
        ],
        questions: [
          {
            type: "Long Question [5M]",
            year: "2083 Hostel & 2078 Set 1",
            question: "Describe Millikan's oil drop experiment to determine the charge of an electron. Explain how this experiment proved that electric charge is quantized.",
            answer: "Setup: Two parallel horizontal metal plates separated by distance $d$ in a chamber. An atomizer sprays fine oil drops, which enter the space between plates through a pinhole. Air is ionized by X-rays, imparting charge to oil drops. (1) Motion under gravity alone: Drop falls with steady terminal velocity $v_1$. Gravitational force balances viscous force (Stokes' Law): $6\\pi\\eta r v_1 = mg = \\frac{4}{3}\\pi r^3(\\rho - \\sigma)g$, giving drop radius $r$. (2) Motion under electric field: Electric field $E = V/d$ is applied. Upward electric force $qE$ opposes weight. If drop moves upwards with terminal velocity $v_2$: $qE - mg = 6\\pi\\eta r v_2 \\implies q = \\frac{mg(v_1 + v_2)}{E v_1}$. Repeating for multiple drops, Millikan found $q$ is always an integral multiple of elementary charge: $q = ne$, where $e = 1.602 \\times 10^{-19}\\text{ C}$."
          }
        ]
      },
      {
        id: "phy-waves",
        title: "Waves, Speed of Sound & Organ Pipes",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Set A", "2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "7 - 10 Marks",
        summary: "Newton's formula for speed of sound, Laplace's adiabatic correction ($v = \\sqrt{\\frac{\\gamma P}{\\rho}}$), factors affecting speed of sound (temperature, pressure, humidity), standing waves in open and closed organ pipes, and end correction.",
        keyConcepts: [
          "Newton's Assumption: Sound propagation is isothermal ($PV = \\text{const}, E_T = P$). Formula: $v = \\sqrt{P/\\rho} = 280\\text{ m/s}$ (16% error from experimental 332 m/s).",
          "Laplace's Correction: Sound propagation is rapid adiabatic compression/rarefaction ($PV^\\gamma = \\text{const}, E_S = \\gamma P$). Formula: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = 332.5\\text{ m/s}$ (perfect agreement!).",
          "Effect of Pressure & Temperature: Pressure has NO effect on speed of sound at constant temperature (since $P/\\rho = \\text{const}$). Speed is directly proportional to square root of absolute temperature: $v \\propto \\sqrt{T}$.",
          "Organ Pipes: Closed pipe produces ONLY odd harmonics ($f_1 : f_3 : f_5 = 1 : 3 : 5$), fundamental $f_1 = \\frac{v}{4L}$. Open pipe produces ALL harmonics ($f_1 : f_2 : f_3 = 1 : 2 : 3$), fundamental $f_1 = \\frac{v}{2L}$."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2083 Hostel & 2078 Set 1",
            question: "Why was Newton's assumption about the velocity of sound in a gaseous medium wrong? Discuss the correction made by Laplace.",
            answer: "Newton assumed sound travels through a gas by isothermal processes because heat conducted would instantly equalize temperature. Under this assumption, bulk modulus $K = P$, giving $v = \\sqrt{P/\\rho} = 280\\text{ m/s}$, which is 16% lower than the experimental value 332 m/s. Laplace corrected this by pointing out that compressions and rarefactions occur very rapidly and air is a poor conductor of heat. Hence, there is no time for heat exchange, making the process ADIABATIC, not isothermal. Under adiabatic conditions, bulk modulus $K = \\gamma P$ (where $\\gamma = C_p/C_v = 1.4$ for air). Thus, $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{1.4} \\times 280 \\approx 331.3\\text{ m/s}$, matching experimental results."
          }
        ]
      },
      {
        id: "phy-mag",
        title: "Magnetic Fields & Biot-Savart / Ampere's Law",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Set A", "2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "7 - 10 Marks",
        summary: "Biot-Savart law ($dB = \\frac{\\mu_0}{4\\pi}\\frac{I dl \\sin\\theta}{r^2}$), magnetic field at center/axis of circular coil, Ampere's circuital law ($\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enclosed}$), field inside solenoid ($B = \\mu_0 n I$), force between parallel current-carrying wires ($F/l = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$), and definition of 1 Ampere.",
        keyConcepts: [
          "Biot-Savart Law: Vector field $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I(d\\vec{l} \\times \\hat{r})}{r^2}$. Center of circular loop: $B = \\frac{\\mu_0 I}{2R}$.",
          "Ampere's Circuital Law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}$. Inside long solenoid: $B = \\mu_0 n I$, where $n = N/L$.",
          "Parallel Conductors: Same direction currents ATTRACT each other; opposite direction currents REPEL each other.",
          "Definition of 1 Ampere: Steady current which, when maintained in two straight parallel conductors of infinite length and negligible cross-section placed 1 metre apart in vacuum, produces a force of $2 \\times 10^{-7}\\text{ N/m}$ between them."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2083 Hostel & 2078 Set 1",
            question: "Two long parallel conductors X and Y placed in air at distance R carry currents $I_1$ and $I_2$. (i) Find the force per unit length between them. (ii) What is the nature of force when currents flow in the same direction vs opposite directions? (iii) Define one ampere of current on this basis.",
            answer: "(i) Force per unit length is $\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi R}$. (ii) When currents flow in the same direction, the force is ATTRACTIVE. When currents flow in opposite directions, the force is REPULSIVE. (iii) One ampere is that constant current which, if maintained in two straight, parallel, infinitely long conductors of negligible circular cross-section placed 1 metre apart in vacuum, produces between these conductors a force equal to $2 \\times 10^{-7}$ newtons per metre of length."
          }
        ]
      },
      {
        id: "phy-bohr",
        title: "Bohr's Model of Hydrogen Atom & Spectra",
        repetitionCount: 4,
        years: ["2082 Set A", "2081 Set B", "2079 Set B", "Hostel 2083"],
        weightage: "5 - 8 Marks",
        summary: "Bohr's postulates of atomic structure, quantization of orbital angular momentum ($L = n\\hbar$), radius ($r_n \\propto n^2$), orbital velocity ($v_n \\propto 1/n$), total energy ($E_n = -13.6/n^2\\text{ eV} \\implies E_n \\propto 1/L_n^2$), and hydrogen spectral series.",
        keyConcepts: [
          "Bohr Postulate: Electrons revolve in non-radiating stationary orbits where angular momentum is quantized: $mvr = \\frac{nh}{2\\pi}$.",
          "Energy Relation: $E_n = -\\frac{13.6}{n^2}\\text{ eV}$. Since angular momentum $L_n = n\\hbar \\implies n = L_n/\\hbar$, total energy $E_n \\propto -\\frac{1}{L_n^2}$!",
          "Spectral Series: Lyman (UV, $n_1=1$), Balmer (Visible, $n_1=2$), Paschen (IR, $n_1=3$), Brackett (IR, $n_1=4$), Pfund (IR, $n_1=5$)."
        ],
        questions: [
          {
            type: "MCQ & Justification [2M]",
            year: "2082 Set A",
            question: "$E_n$ and $L_n$ denote the magnitude of total energy and angular momentum of an electron in the nth orbit of a Bohr atom. How are $E_n$ and $L_n$ related?",
            answer: "According to Bohr's quantization condition, angular momentum is $L_n = \\frac{nh}{2\\pi}$, so $n = \\frac{2\\pi L_n}{h} \\implies n \\propto L_n$. Total energy in the nth orbit is $E_n = -\\frac{m e^4}{8\\varepsilon_0^2 h^2 n^2} \\implies E_n \\propto \\frac{1}{n^2}$. Substituting $n \\propto L_n$ yields $E_n \\propto \\frac{1}{L_n^2}$."
          }
        ]
      }
    ],

    chemistry: [
      {
        id: "chem-vol",
        title: "Volumetric Analysis & Stoichiometry",
        repetitionCount: 6,
        years: ["2083 Hostel", "2082 Sol", "2081 Sol", "2080 Set A", "2080 Set B", "2080 Re-exam"],
        weightage: "8 - 12 Marks",
        summary: "Equivalent weights of oxidants/reductants ($KMnO_4, K_2Cr_2O_7$), normality vs molarity, primary vs secondary standards, percentage purity titrations, and mixture solution calculations ($N_1 V_1 + N_2 V_2 = N_3 V_3$).",
        keyConcepts: [
          "Equivalent Weight: $E = \\frac{\\text{Molecular Weight}}{\\text{Change in Oxidation Number}}$ or $\\frac{\\text{Mol. Wt}}{\\text{Acidity/Basicity}}$.",
          "Equivalent Weight of $KMnO_4$ (Mol. Wt = 158): Acidic medium: $Mn^{+7} \\to Mn^{+2}$ (change = 5) $\\implies E = 158/5 = 31.6$. Neutral/Weakly alkaline: $Mn^{+7} \\to Mn^{+4}$ (change = 3) $\\implies E = 158/3 = 52.67$. Strongly alkaline: $Mn^{+7} \\to Mn^{+6}$ (change = 1) $\\implies E = 158/1 = 158$.",
          "Primary Standards: Available in pure dry state, stable in air, known exact composition, high molecular mass. Examples: Hydrated Oxalic acid ($H_2C_2O_4\\cdot 2H_2O$), Anhydrous $Na_2CO_3$.",
          "Secondary Standards: Deliquescent ($NaOH$), volatile ($HCl$), or undergo decomposition ($KMnO_4$). Concentration must be standardized before use."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2080 Set A, Set B & 2082 Solution",
            question: "Calculate the equivalent weight of $KMnO_4$ in acidic, neutral, and strongly alkaline mediums with balanced chemical reactions.",
            answer: "1) In Acidic Medium: $2KMnO_4 + 3H_2SO_4 \\to K_2SO_4 + 2MnSO_4 + 3H_2O + 5[O]$. Change in oxidation number of Mn = $+7 - (+2) = 5$. Equivalent weight = $\\frac{\\text{Mol. wt}}{5} = \\frac{158}{5} = 31.6$.\n2) In Neutral/Faintly Alkaline Medium: $2KMnO_4 + H_2O \\to 2KOH + 2MnO_2 + 3[O]$. Change in O.N. of Mn = $+7 - (+4) = 3$. Equivalent weight = $\\frac{158}{3} = 52.67$.\n3) In Strongly Alkaline Medium: $2KMnO_4 + 2KOH \\to 2K_2MnO_4 + H_2O + [O]$. Change in O.N. of Mn = $+7 - (+6) = 1$. Equivalent weight = $\\frac{158}{1} = 158$."
          },
          {
            type: "Numerical [3M]",
            year: "2080 Set A & Set B",
            question: "1.5 g of a $CaCO_3$ sample required 40 ml of N/2 HCl for complete neutralization. Calculate the percentage purity of $CaCO_3$ in the sample.",
            answer: "Given: $V_{HCl} = 40\\text{ ml}$, $N_{HCl} = 0.5\\text{ N}$. Equivalent wt of $CaCO_3 = \\frac{100}{2} = 50$. Gram equivalent of HCl used = $\\frac{N \\times V}{1000} = \\frac{0.5 \\times 40}{1000} = 0.02\\text{ eq}$. Mass of pure $CaCO_3 = \\text{Gram equivalent} \\times E = 0.02 \\times 50 = 1.0\\text{ g}$. Percentage purity = $\\frac{\\text{Mass of pure } CaCO_3}{\\text{Mass of sample}} \\times 100\% = \\frac{1.0}{1.5} \\times 100\% = 66.67\%$."
          }
        ]
      },
      {
        id: "chem-ionic",
        title: "Ionic Equilibrium & Common Ion Effect",
        repetitionCount: 6,
        years: ["2083 Hostel", "2081 Sol", "2080 Set A", "2080 Set B", "2080 Re-exam", "2079 Set B"],
        weightage: "8 - 12 Marks",
        summary: "Common ion effect definition and applications in qualitative salt analysis (Group II & Group III cations), Ostwald's dilution law, solubility product ($K_{sp}$) and precipitation criteria, calculation of pH for ultra-dilute acids/bases ($10^{-7}$M NaOH, $10^{-8}$M HCl), and buffer action.",
        keyConcepts: [
          "Common Ion Effect: Suppression of ionization of a WEAK electrolyte by adding a STRONG electrolyte containing a common ion. E.g., $CH_3COOH \\rightleftharpoons CH_3COO^- + H^+$; adding $CH_3COONa$ increases $[CH_3COO^-]$ and shifts equilibrium backwards.",
          "Crucial Trap: Common ion effect does NOT apply between two strong electrolytes ($HCl + H_2SO_4$), because neither suppresses the other's ionization (both dissociate 100%)!",
          "Group II Qualitative Analysis: $H_2S$ (weak acid) passed in presence of dil. $HCl$ (strong acid). High $[H^+]$ suppresses ionization of $H_2S$, keeping $[S^{2-}]$ low so only Group II cations with very low $K_{sp}$ (like $Cu^{2+}, Pb^{2+}$) precipitate as sulphides.",
          "Group III Qualitative Analysis: $NH_4OH$ passed in presence of $NH_4Cl$. Common ion $NH_4^+$ suppresses $[OH^-]$ so only Group III hydroxides ($Fe(OH)_3, Al(OH)_3, Cr(OH)_3$) precipitate without precipitating higher group cations.",
          "pH of $10^{-7}$M NaOH: Must consider $[OH^-]$ from water auto-ionization ($10^{-7}$): Total $[OH^-] = 10^{-7} + x$. Total $[OH^-] = 1.618 \\times 10^{-7}\\text{ M} \\implies pOH = 6.79 \\implies pH = 14 - 6.79 = 7.21$ (NEVER 7.0 or below!)."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2080 Set A, Set B & 2079 Set B",
            question: "(a) What is common ion effect? (b) Explain why water is both a Lewis base and a Bronsted acid. (c) Calculate the pH of $10^{-7}$ M NaOH solution.",
            answer: "(a) Common ion effect is the phenomenon of suppression of degree of dissociation of a weak electrolyte by the addition of a strong electrolyte having an ion in common with it.\n(b) Water molecule has lone pairs on oxygen, which it can donate to an electron-deficient species (Lewis base). It can also donate a proton ($H^+$) to a stronger base, making it a Bronsted-Lowry acid.\n(c) In $10^{-7}$ M NaOH: $[OH^-]_{NaOH} = 10^{-7}\\text{ M}$. Since water also ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = x$, so $[OH^-]_{total} = 10^{-7} + x$. $K_w = [H^+][OH^-] = x(10^{-7} + x) = 1.0 \\times 10^{-14}$. Solving quadratic: $x^2 + 10^{-7}x - 10^{-14} = 0 \\implies x = 0.618 \\times 10^{-7}\\text{ M}$. Total $[OH^-] = 1.618 \\times 10^{-7}\\text{ M}$. $pOH = -\\log(1.618 \\times 10^{-7}) = 6.791 \\implies pH = 14 - 6.791 = 7.21$."
          }
        ]
      },
      {
        id: "chem-trans",
        title: "Transition Elements & Heavy Metals",
        repetitionCount: 5,
        years: ["2083 Hostel", "2082 Sol", "2080 Set A", "2080 Set B", "2080 Re-exam"],
        weightage: "5 - 8 Marks",
        summary: "Characteristics of transition elements: paramagnetism (unpaired d-electrons), color of coordination complexes (d-d electron transition), variable oxidation states, why $Zn^{2+}$ salts are colorless ($3d^{10}$ full subshell), and greater stability of $Fe^{3+}$ over $Fe^{2+}$.",
        keyConcepts: [
          "Zinc Compounds Colorless: $Zn$ is $[Ar]3d^{10}4s^2$, and $Zn^{2+}$ is $[Ar]3d^{10}$. Since the 3d-subshell is completely filled, no d-d electron transition is possible, so all $Zn^{2+}$ compounds are colorless and diamagnetic.",
          "Paramagnetism: Transition metals contain unpaired electrons in d-orbitals which have permanent magnetic moments aligned by external magnetic fields.",
          "Fe3+ vs Fe2+ Stability: $Fe^{2+}$ is $[Ar]3d^6$, whereas $Fe^{3+}$ is $[Ar]3d^5$. The half-filled $3d^5$ subshell is symmetrical and possesses extra exchange energy stability, making $Fe^{3+}$ more stable than $Fe^{2+}$.",
          "Color of $[Fe(H_2O)_6]^{2+}$: In the presence of $H_2O$ ligands, degenerate d-orbitals split into $t_{2g}$ and $e_g$ levels. Promotion of an electron from $t_{2g}$ to $e_g$ absorbs light in the visible spectrum; the complementary color is observed."
        ],
        questions: [
          {
            type: "Short Reasoning Set [5M]",
            year: "2080 Set A, Set B & 2080 Re-exam",
            question: "(a) Explain why compounds of zinc are colourless. (b) Mention the possible oxidation numbers of Mn. (c) Most transition elements show paramagnetic behavior, why? (d) $Fe^{3+}$ is more stable than $Fe^{2+}$, why? (e) Explain why $[Fe(H_2O)_6]^{2+}$ ion is coloured.",
            answer: "(a) In $Zn^{2+}$, the 3d subshell is completely filled ($3d^{10}$). Because there are no vacant or half-filled d-orbitals, d-d electron transitions cannot occur upon absorbing visible light, so compounds are colourless.\n(b) Manganese ($[Ar]3d^5 4s^2$) shows oxidation states: $+2, +3, +4, +5, +6, \\text{and } +7$.\n(c) Most transition metals have one or more unpaired electrons in their (n-1)d orbitals, which produce individual magnetic moments resulting in paramagnetic attraction.\n(d) Electronic configuration of $Fe^{2+}$ is $[Ar]3d^6$, while $Fe^{3+}$ is $[Ar]3d^5$. The half-filled $3d^5$ configuration has higher exchange energy and symmetrical charge distribution, making $Fe^{3+}$ much more stable.\n(e) In the octahedral complex $[Fe(H_2O)_6]^{2+}$, water molecules split the five 3d orbitals into lower $t_{2g}$ and higher $e_g$ sets. Visible light excites an electron across this energy gap ($d-d$ transition), and the non-absorbed complementary light gives the ion its characteristic pale green colour."
          }
        ]
      },
      {
        id: "chem-cu",
        title: "Copper Metallurgy & Chemistry of Blue Vitriol",
        repetitionCount: 5,
        years: ["2083 Hostel", "2080 Set A", "2080 Set B", "2080 Re-exam", "2079 Set B"],
        weightage: "5 - 8 Marks",
        summary: "Extraction of copper from copper pyrites ($CuFeS_2$), smelting, formation of matte ($Cu_2S + FeS$), Bessemerization, blister copper ($98\%$ pure, blistered by escaping $SO_2$ gas), and chemistry of Blue Vitriol ($CuSO_4\\cdot 5H_2O$) including action of heat and Schweitzer's reagent.",
        keyConcepts: [
          "Matte: Molten mixture of cuprous sulphide and ferrous sulphide ($Cu_2S + FeS$) obtained after smelting.",
          "Blister Copper: The solidified copper obtained from Bessemer converter containing $\\approx 98\%$ Cu. Its blistered surface appearance is caused by dissolved $SO_2$ gas escaping during cooling.",
          "Action of Heat on Blue Vitriol: $CuSO_4 \\cdot 5H_2O \\xrightarrow{100^\\circ C} CuSO_4 \\cdot H_2O \\xrightarrow{230^\\circ C} \\text{Anhydrous } CuSO_4 \\text{ (White)} \\xrightarrow{720^\\circ C} CuO + SO_2 + O_2$.",
          "Schweitzer's Reagent: Deep blue tetraamminecopper(II) hydroxide $[Cu(NH_3)_4](OH)_2$ formed by adding excess ammonia to $CuSO_4$. Used as a solvent for cellulose in rayon manufacture."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2080 Set A, Set B & 2083 Hostel",
            question: "(a) Write a short note on 'Chemistry of Blue Vitriol' including action of heat. (b) What is blister copper? Explain why it gets blisters.",
            answer: "(a) Blue vitriol is copper(II) sulphate pentahydrate ($CuSO_4\\cdot 5H_2O$). Four water molecules are coordinated to $Cu^{2+}$ and one is hydrogen bonded to sulphate. On heating at $100^\\circ C$, it loses 4 molecules of water to form pale blue monohydrate $CuSO_4\\cdot H_2O$. At $230^\\circ C$, it loses all water of crystallization to yield anhydrous white $CuSO_4$. On heating above $720^\\circ C$, it decomposes into black cupric oxide ($CuO$), $SO_2$ and $O_2$.\n(b) Blister copper is crude copper ($\\approx 98\\%$ pure) obtained at the end of Bessemerization during copper extraction. As molten copper solidifies, dissolved sulphur dioxide ($SO_2$) gas escapes vigorously from the interior, forming bubbles and blisters on the surface of the solidified metal ingot."
          }
        ]
      },
      {
        id: "chem-halo",
        title: "Haloalkanes & Haloarenes",
        repetitionCount: 5,
        years: ["2083 Hostel", "2080 Set A", "2080 Set B", "2080 Re-exam", "2079 Set B"],
        weightage: "7 - 10 Marks",
        summary: "Chloroform reactions (preparation, oxidation into phosgene $COCl_2$ and storage with $1\%$ ethanol, tear gas chloropicrin $Cl_3C-NO_2$, chloretone, Reimer-Tiemann reaction), chlorobenzene low reactivity towards nucleophilic substitution, Dow process, Sandmeyer reaction, and Wurtz-Fittig reaction.",
        keyConcepts: [
          "Chlorobenzene Low Reactivity: (1) Resonance effect: Delocalization of lone pair of chlorine gives partial double bond character to C-Cl bond. (2) $sp^2$ hybrid carbon: More electronegative than $sp^3$, holding C-Cl bond shorter and tighter. (3) Instability of phenyl cation.",
          "Chloroform Storage: Chloroform slowly oxidizes in air and sunlight into highly poisonous phosgene ($2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$). It is stored in dark amber, airtight bottles filled to the brim with $1\%$ ethanol, which retards oxidation and converts any phosgene into harmless diethyl carbonate: $COCl_2 + 2C_2H_5OH \\to (C_2H_5O)_2CO + 2HCl$.",
          "Tear Gas (Chloropicrin): Chloroform heated with conc. $HNO_3$: $CHCl_3 + HNO_3 \\to Cl_3C-NO_2 + H_2O$.",
          "Chloretone (Hypnotic Drug): Chloroform reacts with acetone in presence of $KOH$: $CH_3COCH_3 + CHCl_3 \\to (CH_3)_2C(OH)CCl_3$."
        ],
        questions: [
          {
            type: "Reaction & Conversion Set [5M]",
            year: "2083 Hostel & 2079 Set B",
            question: "(a) Chlorobenzene is less reactive than chloroethane towards nucleophilic substitution. Why? (b) An organic compound (A) reacts with acetone to produce a sleep-inducing drug. (i) Identify (A). (ii) Why is (A) stored in airtight bottle by adding 1% ethanol? (iii) What happens when (A) is heated with conc. $HNO_3$?",
            answer: "(a) In chlorobenzene, the lone pair on chlorine enters into resonance with the benzene ring, imparting partial double bond character to the C-Cl bond, making it shorter and much stronger than the pure single C-Cl bond in chloroethane. Additionally, the carbon atom attached to chlorine is $sp^2$ hybridized (more electronegative), strengthening the bond further.\n(b) (i) Compound (A) is Chloroform ($CHCl_3$). It condenses with acetone in KOH to form Chloretone, a hypnotic (sleep-inducing) drug.\n(ii) In sunlight and air, chloroform oxidizes to poisonous phosgene gas ($COCl_2$). Adding $1\%$ ethanol retards oxidation and converts any traces of formed phosgene into non-toxic diethyl carbonate.\n(iii) When heated with concentrated $HNO_3$, chloroform undergoes nitration to form Chloropicrin (tear gas, $CCl_3NO_2$): $CHCl_3 + HNO_3 \\to CCl_3NO_2 + H_2O$."
          }
        ]
      },
      {
        id: "chem-alc",
        title: "Alcohols & Victor Meyer's Method",
        repetitionCount: 3,
        years: ["2083 Hostel", "2081 Sol", "2079 Set B"],
        weightage: "5 - 7 Marks",
        summary: "Distinction of primary ($1^\\circ$), secondary ($2^\\circ$), and tertiary ($3^\\circ$) alcohols using Victor Meyer's method (Red, Blue, Colorless - RBC mnemonic), Lucas test, Saytzeff rule, and Williamson's ether synthesis.",
        keyConcepts: [
          "Victor Meyer's Method: Alcohol $\\xrightarrow{P/I_2}$ Alkyl iodide $\\xrightarrow{AgNO_2}$ Nitroalkane $\\xrightarrow{HNO_2}$ Treated with alkali ($NaOH$).",
          "$1^\\circ$ Alcohol $\\to$ Nitrolic acid $\\to$ Blood RED color with $NaOH$.",
          "$2^\\circ$ Alcohol $\\to$ Pseudonitrol $\\to$ Deep BLUE color with $NaOH$.",
          "$3^\\circ$ Alcohol $\\to$ No reaction with $HNO_2$ (lacks $\\alpha$-hydrogen) $\\to$ COLORLESS.",
          "Williamson's Ether Synthesis: Alkyl halide + sodium alkoxide $\\to$ Ether ($R-X + R'-ONa \\to R-O-R' + NaX$)."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2083 Hostel & 2079 Set B",
            question: "How can you distinguish ethanol (1°), propan-2-ol (2°), and 2-methylpropan-2-ol (3°) by Victor Meyer's method?",
            answer: "Step 1: Convert each alcohol to alkyl iodide using $P + I_2$.\nStep 2: React with $AgNO_2$ to form the corresponding nitroalkane.\nStep 3: Treat with nitrous acid ($NaNO_2 + dil. HCl$) and make alkaline with $NaOH$.\nResults:\n- Ethanol ($1^\\circ$) forms nitrolic acid, which with NaOH produces a distinct BLOOD RED colour.\n- Propan-2-ol ($2^\\circ$) forms pseudonitrol, which gives an intense BLUE colour with NaOH.\n- 2-Methylpropan-2-ol ($3^\\circ$) has no hydrogen on the carbinol carbon, does not react with $HNO_2$, and remains completely COLOURLESS."
          }
        ]
      }
    ],

    biology: [
      {
        id: "bio-vasc",
        title: "Plant Anatomy & Vascular Bundles",
        repetitionCount: 3,
        years: ["2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "6 - 8 Marks",
        summary: "Classification of vascular bundles (Radial, Collateral open/closed, Bicollateral, Concentric: Amphicribal/Amphivasal), anatomy of dicot and monocot roots, xylem development (Exarch vs Endarch).",
        keyConcepts: [
          "Radial: Xylem and phloem lie on separate alternate radii separated by non-conducting tissue. Universal characteristic of ROOTS.",
          "Exarch Xylem: Protoxylem lies toward periphery and metaxylem toward the center (characteristic of roots). Endarch has protoxylem toward center (stems).",
          "Concentric Bundles: One vascular tissue completely surrounds the other.\n- Amphicribal (Hadrocentric): Phloem completely surrounds central xylem (Ferns).\n- Amphivasal (Leptocentric): Xylem completely surrounds central phloem (Dracaena, Yucca).",
          "Bicollateral: Phloem on both outer and inner sides of central xylem, separated by two cambium strips (Cucurbita / Cucurbitaceae)."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2081 Set B & 2078 Set 1",
            question: "What is a vascular bundle? Describe the various types of vascular bundles with neat diagrams and examples.",
            answer: "A vascular bundle is a strand of conducting vessels consisting essentially of xylem (for water transport) and phloem (for food transport).\n1) Radial: Xylem and phloem occur in separate patches along different radii (e.g., Dicot and monocot roots).\n2) Conjoint Collateral:\n   - Open: Cambium present between outer phloem and inner xylem (e.g., Dicot stem, capable of secondary growth).\n   - Closed: Cambium is absent (e.g., Monocot stem, no secondary growth).\n3) Bicollateral: Outer phloem, outer cambium, central xylem, inner cambium, and inner phloem (e.g., Cucurbita).\n4) Concentric:\n   - Amphicribal: Central xylem surrounded by phloem (Fern rhizome).\n   - Amphivasal: Central phloem surrounded by xylem (Dracaena stem)."
          }
        ]
      },
      {
        id: "bio-tiss",
        title: "Plant & Animal Tissues (Histology)",
        repetitionCount: 3,
        years: ["2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "6 - 9 Marks",
        summary: "Meristematic vs permanent plant tissues (parenchyma, collenchyma, sclerenchyma), animal epithelial tissues (squamous, cuboidal, columnar, ciliated), connective tissue (bone vs cartilage, adipose), and neuron structure.",
        keyConcepts: [
          "Plant Tissues: Parenchyma (living, thin-walled, isodiametric, intercellular spaces), Collenchyma (living, pectin thickenings at corners, flexible mechanical support), Sclerenchyma (dead, lignified thick walls).",
          "Myelin Sheath Formation: Formed by Schwann cells in the Peripheral Nervous System (PNS), and by OLIGODENDROCYTES in the Central Nervous System (CNS)!",
          "Bone vs Cartilage: Bone has hard, inflexible matrix containing ossein and calcium phosphate, rich blood supply, Haversian canals. Cartilage has flexible matrix containing chondrin, no blood vessels (avascular)."
        ],
        questions: [
          {
            type: "Short Question [4M]",
            year: "2079 Set B & 2078 Set 1",
            question: "Differentiate between: (a) Parenchyma and Collenchyma. (b) Bone and Cartilage.",
            answer: "(a) Parenchyma vs Collenchyma:\n- Parenchyma cells are uniformly thin-walled (cellulose) with abundant intercellular spaces, functioning primarily in photosynthesis and storage.\n- Collenchyma cells have localized cellulose and pectin thickening at cell corners, lack intercellular spaces, and provide tensile mechanical support to young growing stems and petioles.\n\n(b) Bone vs Cartilage:\n- Bone has a rigid, hard, non-pliable matrix impregnated with calcium salts and ossein protein, organized into Haversian systems with rich vascular supply.\n- Cartilage has a firm but pliable, semi-solid matrix containing chondrin protein, devoid of blood vessels and Haversian systems."
          }
        ]
      },
      {
        id: "bio-gen",
        title: "Genetics, DNA Replication & Genetic Code",
        repetitionCount: 3,
        years: ["2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "7 - 10 Marks",
        summary: "Semi-conservative DNA replication mechanism (Meselson-Stahl experiment), nucleotide structure vs nucleoside, properties of genetic code (triplet, commaless, universal, degenerate, unambiguous), and monohybrid crosses.",
        keyConcepts: [
          "Properties of Genetic Code:\n- Triplet: Each codon consists of 3 nitrogenous bases.\n- Commaless: No punctuation between codons.\n- Degenerate: A single amino acid can be specified by multiple codons.\n- Universal: The same codon specifies the same amino acid in all organisms.\n- UNAMBIGUOUS: One specific codon codes for ONE and ONLY ONE amino acid (never ambiguous!).",
          "Incomplete Dominance in Mirabilis jalapa: When red (RR) is crossed with white (rr), F1 is pink (Rr). In F2 generation, phenotypic ratio is 1 Red : 2 Pink : 1 White. If asked red:white:pink, the ratio is 1 : 1 : 2!",
          "Semi-Conservative Replication: Each daughter DNA duplex retains one parental strand and synthesizes one new complementary strand (proven by Meselson and Stahl using 15N isotope)."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2081 Set B & 2079 Set B",
            question: "Define genetic code. Mention any four major characteristics of the genetic code.",
            answer: "The genetic code is the sequence of nitrogenous bases in mRNA that dictates the specific sequence of amino acids during polypeptide protein synthesis.\n1) Triplet code: A group of three adjacent nitrogenous bases codes for one specific amino acid.\n2) Universal: The same codon codes for the exact same amino acid in all living organisms from bacteria to humans.\n3) Commaless: Read continuously from 5' to 3' without commas or skipping bases.\n4) Non-overlapping & Unambiguous: Adjacent codons do not overlap, and each particular codon codes for only one specific amino acid.\n5) Degenerate: Most amino acids are coded by more than one codon (61 sense codons for 20 amino acids)."
          }
        ]
      },
      {
        id: "bio-dig",
        title: "Human Digestive System & Enzyme Action",
        repetitionCount: 3,
        years: ["2081 Set B", "2079 Set B", "2078 Set 1"],
        weightage: "6 - 9 Marks",
        summary: "Histology of alimentary canal, gastric secretion and regulation, digestion of proteins and carbohydrates, infant gastric juice (Prorennin, pepsinogen, gastric lipase), and protective role of Paneth cells.",
        keyConcepts: [
          "Gastric Cells & Secretions:\n- Oxyntic / Parietal cells: Secrete HCl ($pH \\approx 1.5 - 2.0$) and Castle's Intrinsic Factor (for $B_{12}$ absorption).\n- Chief / Zymogen / Peptic cells: Secrete inactive proenzymes Pepsinogen and Prorennin.\n- Goblet / Mucous neck cells: Secrete protective alkaline mucus.",
          "Infant Gastric Juice: Contains Pepsinogen, Rennin (Prorennin activated by HCl to curdle milk casein), and gastric lipase. Does NOT contain amylase or maltase!",
          "Crypts of Lieberkühn: Paneth cells secrete antibacterial lysozyme to destroy bacterial cell walls in intestinal mucosa."
        ],
        questions: [
          {
            type: "Long Question [5M]",
            year: "2079 Set B & 2078 Set 1",
            question: "Describe the process of digestion of proteins in the human alimentary canal. Mention the enzymes involved, their site of secretion, and the final products.",
            answer: "1) In Stomach:\n- Gastric juice contains inactive Pepsinogen, activated by HCl to Pepsin.\n- $\\text{Proteins} \\xrightarrow{\\text{Pepsin}} \\text{Proteoses} + \\text{Peptones}$. In infants, Rennin curdles casein to calcium paracaseinate.\n2) In Small Intestine (Pancreatic juice):\n- Trypsinogen is activated by enterokinase into Trypsin, which then activates Chymotrypsinogen and Procarboxypeptidase.\n- $\\text{Proteins/Peptones} \\xrightarrow{\\text{Trypsin/Chymotrypsin}} \\text{Small Peptides}$.\n- Carboxypeptidase splits terminal peptide bonds from carboxyl end.\n3) In Small Intestine (Intestinal juice / Succus entericus):\n- Aminopeptidase and Dipeptidase cleave peptides into free Amino Acids."
          }
        ]
      },
      {
        id: "bio-water",
        title: "Plant Water Relations & Transpiration",
        repetitionCount: 2,
        years: ["2081 Set B", "2079 Set B"],
        weightage: "5 - 8 Marks",
        summary: "Diffusion Pressure Deficit (DPD), Osmotic Pressure (OP), Turgor Pressure (TP), Dixon & Joly's Cohesion-Tension theory of ascent of sap, and stomatal opening/closing mechanism.",
        keyConcepts: [
          "DPD Formula: $DPD = OP - TP$.",
          "Fully Turgid Cell: Inward water flow makes $TP = OP$. Therefore $DPD = OP - TP = 0$. No further net water intake!",
          "Flaccid Cell: $TP = 0$, so $DPD = OP$. Cell has maximum suction capacity.",
          "Ascent of Sap (Dixon & Joly): Cohesion between water molecules, adhesion to xylem tracheary walls, and transpiration pull created by continuous evaporation generate an uninterrupted unbroken water column."
        ],
        questions: [
          {
            type: "Long Question [5M]",
            year: "2079 Set B",
            question: "Who proposed the Transpiration Pull and Cohesion-Tension Theory? Explain the mechanism of upward movement of water and minerals with the help of this theory.",
            answer: "The Cohesion-Tension Theory was proposed by Dixon and Joly in 1894.\nKey Features:\n1) Continuous Water Column: Water forms an unbroken column within xylem vessels from roots to leaf mesophyll cells.\n2) Cohesive & Adhesive Forces: High mutual attraction between water molecules (cohesion via H-bonds) and attraction between water and xylem cell walls (adhesion) give high tensile strength preventing column rupture (cavitation).\n3) Transpiration Pull: Mesophyll cells lose water by transpiration, increasing their DPD and drawing water from adjoining xylem veins. This generates a massive negative hydrostatic suction pressure (pull) that pulls water upwards from roots."
          }
        ]
      },
      {
        id: "bio-frog",
        title: "Embryology of Frog & Reproduction",
        repetitionCount: 2,
        years: ["2081 Set B", "2079 Set B"],
        weightage: "4 - 6 Marks",
        summary: "Types of cleavage in frog (unequal holoblastic), prevention of polyspermy (fertilization membrane), coelom formation during organogenesis, and surgical contraception (vasectomy, tubectomy).",
        keyConcepts: [
          "Frog Cleavage: Unequal and holoblastic due to moderate telolecithal yolk concentrated in the vegetal hemisphere. Cleavage furrows divide the entire egg, creating smaller micromeres at animal pole and larger macromeres at vegetal pole.",
          "Polyspermy Prevention: Fast block (membrane depolarization) followed by slow block cortical reaction that elevates vitelline membrane into an impenetrable fertilization membrane.",
          "Contraception: Vasectomy involves cutting and ligating the vas deferens in males; Tubectomy involves cutting and ligating Fallopian tubes in females."
        ],
        questions: [
          {
            type: "Short Question [3M]",
            year: "2081 Set B & 2079 Set B",
            question: "Describe the type of cleavage in frog's egg. What prevents polyspermy during fertilization?",
            answer: "Cleavage in frog's zygote is unequal and holoblastic. It is holoblastic because the cleavage furrow completely divides the entire egg from animal to vegetal pole. It is unequal because the heavy concentration of yolk in the vegetal hemisphere slows down cleavage, producing smaller cells (micromeres) at the animal pole and larger, yolk-laden cells (macromeres) at the vegetal pole. Polyspermy is prevented by two sequential blocks: (1) Fast electrical block where sperm entry causes instant depolarization of the egg plasma membrane. (2) Slow mechanical block where cortical granules release enzymes into the perivitelline space, lifting and hardening the vitelline membrane into a tough fertilization membrane."
          }
        ]
      }
    ]
  },

  // ==========================================
  // SECTION 2: MCQS (TYPE 1 & TYPE 2)
  // ==========================================
  mcqs: {
    // TYPE 1: Authentic 1-Mark Exam MCQs
    exam: [
      // --- PHYSICS MCQS ---
      {
        id: "phy-ex-1",
        subject: "Physics",
        topic: "SHM & Oscillations",
        year: "KMC 2082 Set A",
        question: "A watch based on an oscillating spring gives correct time on Earth. If it is taken to the Moon, then it:",
        options: [
          "Becomes fast",
          "Becomes slow",
          "Remains unaffected",
          "Stops"
        ],
        correct: 2,
        explanation: "The time period of a spring oscillator is $T = 2\\pi\\sqrt{m/k}$, which depends solely on mass $m$ and spring constant $k$, and is completely independent of acceleration due to gravity $g$. Hence, its rate remains unaffected."
      },
      {
        id: "phy-ex-2",
        subject: "Physics",
        topic: "Bohr's Atomic Model",
        year: "KMC 2082 Set A",
        question: "If $E_n$ and $L_n$ denote the magnitude of total energy and angular momentum of an electron in the nth orbit of a Bohr atom, then:",
        options: [
          "$E_n \\propto L_n$",
          "$E_n \\propto \\frac{1}{L_n}$",
          "$E_n \\propto L_n^2$",
          "$E_n \\propto \\frac{1}{L_n^2}$"
        ],
        correct: 3,
        explanation: "By Bohr's postulate, $L_n = \\frac{nh}{2\\pi} \\implies n \\propto L_n$. Total energy in nth orbit is $E_n = -\\frac{13.6}{n^2}\\text{ eV} \\implies E_n \\propto \\frac{1}{n^2}$. Substituting $n \\propto L_n$ gives $E_n \\propto \\frac{1}{L_n^2}$."
      },
      {
        id: "phy-ex-3",
        subject: "Physics",
        topic: "Waves & Sound",
        year: "KMC 2082 Set A",
        question: "An empty vessel is being filled with water. Its natural frequency will:",
        options: [
          "Go on increasing",
          "Go on decreasing",
          "Remains unchanged",
          "Insufficient information"
        ],
        correct: 0,
        explanation: "An empty vessel filled with water acts as a closed organ pipe whose length $L$ of vibrating air column decreases as water rises. Fundamental frequency $f = \\frac{v}{4L}$. As $L$ decreases, the pitch/frequency goes on increasing."
      },
      {
        id: "phy-ex-4",
        subject: "Physics",
        topic: "Photoelectric Effect",
        year: "KMC 2078 Set 1",
        question: "A charged particle is released from rest in a region of steady and uniform magnetic and electric fields which are parallel to each other. The particle will move in a:",
        options: [
          "Straight line",
          "Circle",
          "Helix",
          "Cycloid"
        ],
        correct: 0,
        explanation: "Since the particle starts from rest, its initial velocity is zero. The magnetic force $\\vec{F}_B = q(\\vec{v} \\times \\vec{B}) = 0$. The electric force $\\vec{F}_E = q\\vec{E}$ accelerates it along the direction of $\\vec{E}$. Once moving parallel to $\\vec{B}$, the angle between $\\vec{v}$ and $\\vec{B}$ is $0^\\circ$, so magnetic force remains zero. The particle continues in a straight line."
      },
      {
        id: "phy-ex-5",
        subject: "Physics",
        topic: "Rotational Dynamics",
        year: "KMC 2078 Set 1",
        question: "A flywheel of moment of inertia $4\\text{ kg}\\cdot\\text{m}^2$ rotating about an axis with 120 rev/min is brought to rest in 5 s. The torque needed is:",
        options: [
          "5 Nm",
          "10 Nm",
          "20 Nm",
          "40 Nm"
        ],
        correct: 1,
        explanation: "Initial angular velocity $\\omega_0 = 120\\text{ rpm} = \\frac{120 \\times 2\\pi}{60} = 4\\pi \\approx 12.57\\text{ rad/s}$. Angular acceleration $\\alpha = \\frac{\\omega_0}{t} = \\frac{4\\pi}{5} = 2.513\\text{ rad/s}^2$. Required torque $\\tau = I\\alpha = 4 \\times \\frac{4\\pi}{5} = 3.2\\pi \\approx 10.05\\text{ Nm}$."
      },
      {
        id: "phy-ex-6",
        subject: "Physics",
        topic: "Waves & Sound",
        year: "KMC 2078 Set 1",
        question: "Two sound waves are represented by $y_1 = a\\sin(\\omega t - kx)$ and $y_2 = b\\cos(\\omega t - kx)$. The phase difference between the two waves is:",
        options: [
          "$\\pi$",
          "$\\frac{\\pi}{4}$",
          "$\\frac{3\\pi}{4}$",
          "$\\frac{\\pi}{2}$"
        ],
        correct: 3,
        explanation: "Using trigonometric identity, $y_2 = b\\cos(\\omega t - kx) = b\\sin\\left(\\omega t - kx + \\frac{\\pi}{2}\\right)$. The phase difference is $\\phi = \\frac{\\pi}{2}$."
      },
      {
        id: "phy-ex-7",
        subject: "Physics",
        topic: "Modern Physics",
        year: "KMC 2078 Set 1",
        question: "Which of the following is NOT deflected by both electric and magnetic fields?",
        options: [
          "$\\alpha$-particle",
          "$\\beta$-particle",
          "Photon",
          "Proton"
        ],
        correct: 2,
        explanation: "Photons are neutral quanta of electromagnetic radiation with zero net electric charge. Hence, neither electric ($\\vec{F} = q\\vec{E}$) nor magnetic ($\\vec{F} = q\\vec{v}\\times\\vec{B}$) fields exert any deflecting force on them."
      },
      {
        id: "phy-ex-8",
        subject: "Physics",
        topic: "Waves & Sound",
        year: "KMC 2082 Set A",
        question: "When a long steel pipe is tapped at one end, a listener at the other end hears two distinct sounds:",
        options: [
          "Of the same intensity, at the same time",
          "Of the same intensity, one after another",
          "Less intense first, more intense later",
          "More intense first, less intense later"
        ],
        correct: 3,
        explanation: "Sound travels much faster in solids (steel, $\\approx 5000\\text{ m/s}$) than in air ($\\approx 330\\text{ m/s}$) and attenuates less. Therefore, the sound wave through the steel arrives first and with higher intensity, followed later by the less intense sound wave travelling through air."
      },

      // --- CHEMISTRY MCQS ---
      {
        id: "chem-ex-1",
        subject: "Chemistry",
        topic: "Ionic Equilibrium",
        year: "KMC 2080 Set A & Re-exam",
        question: "Common ion effect is NOT applicable for which of the following pairs?",
        options: [
          "$HCl$ & $H_2SO_4$",
          "$H_2S$ & $HCl$",
          "$NH_4OH$ & $NH_4Cl$",
          "$CH_3COOH$ & $CH_3COONa$"
        ],
        correct: 0,
        explanation: "The common ion effect is defined specifically as the suppression of dissociation of a WEAK electrolyte by adding a strong electrolyte containing a common ion. Both $HCl$ and $H_2SO_4$ are strong electrolytes that dissociate virtually 100%, so common ion suppression does not occur."
      },
      {
        id: "chem-ex-2",
        subject: "Chemistry",
        topic: "Ionic Equilibrium",
        year: "KMC 2080 Re-exam & 2079 Set B",
        question: "Which of the following 0.1 M solutions has a basic pH ($> 7$)?",
        options: [
          "$NH_4Cl$",
          "$CH_3COONa$",
          "$CH_3COONH_4$",
          "$(NH_4)_2SO_4$"
        ],
        correct: 1,
        explanation: "$CH_3COONa$ is a salt of a weak acid ($CH_3COOH$) and a strong base ($NaOH$). In aqueous solution, the acetate ion ($CH_3COO^-$) undergoes anionic hydrolysis: $CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$, generating excess $OH^-$ ions and making the solution basic (pH > 7)."
      },
      {
        id: "chem-ex-3",
        subject: "Chemistry",
        topic: "Haloalkanes & Haloarenes",
        year: "KMC 2080 Re-exam & 2079 Set B",
        question: "The chemical compound used as tear gas (Chloropicrin) is:",
        options: [
          "$Cl_3C-NO_2$",
          "$CH_3CH_2OH$",
          "$C_6H_5COCH_3$",
          "$C_6H_5CH_2CH_2OH$"
        ],
        correct: 0,
        explanation: "Chloropicrin ($Cl_3C-NO_2$, trichloronitromethane) is synthesized by heating chloroform ($CHCl_3$) with concentrated nitric acid ($HNO_3$) and is widely utilized as a potent tear gas / riot control agent."
      },
      {
        id: "chem-ex-4",
        subject: "Chemistry",
        topic: "Haloalkanes & Haloarenes",
        year: "KMC 2080 Re-exam & 2079 Set B",
        question: "The hybridization state of the carbon atom attached to halogen in haloarene (chlorobenzene) is:",
        options: [
          "$sp$",
          "$sp^2$",
          "$sp^3$",
          "$dsp^2$"
        ],
        correct: 1,
        explanation: "In haloarenes such as chlorobenzene, the halogen atom is directly bonded to an aromatic ring carbon. Every carbon atom in the planar benzene ring is $sp^2$ hybridized with $33.3\%$ s-character."
      },
      {
        id: "chem-ex-5",
        subject: "Chemistry",
        topic: "Copper Metallurgy",
        year: "KMC 2080 Set A",
        question: "Schweitzer's reagent, used as a solvent for dissolving cellulose in rayon production, is:",
        options: [
          "$CuSO_4 \\cdot 5H_2O$",
          "$CuSO_4 \\cdot H_2O$",
          "$[Cu(NH_3)_4]SO_4 \\cdot 4H_2O$",
          "$[Cu(NH_3)_4](OH)_2$"
        ],
        correct: 2,
        explanation: "Schweitzer's reagent is tetraamminecopper(II) sulphate or hydroxide, formulated as $[Cu(NH_3)_4]SO_4 \\cdot 4H_2O$ or $[Cu(NH_3)_4](OH)_2$, characterized by its deep azure-blue color."
      },
      {
        id: "chem-ex-6",
        subject: "Chemistry",
        topic: "Zinc Metallurgy",
        year: "KMC 2080 Set B",
        question: "A blast furnace cannot be utilized for the industrial extraction of zinc because:",
        options: [
          "Low melting point of zinc",
          "Low boiling point of zinc (907 °C)",
          "High reactivity of zinc",
          "High malleability of zinc"
        ],
        correct: 1,
        explanation: "The reduction temperature of zinc oxide by carbon inside a blast furnace is around 1100 °C to 1400 °C, which is significantly higher than zinc's boiling point of 907 °C. Zinc would volatilize into vapor and instantly re-oxidize back to ZnO by $CO_2$ in the upper furnace stack."
      },
      {
        id: "chem-ex-7",
        subject: "Chemistry",
        topic: "Volumetric Analysis",
        year: "KMC 2079 Set B",
        question: "The pH of a neutral aqueous solution at 50 °C ($pK_w = 13.26$) is:",
        options: [
          "6.0",
          "7.0",
          "6.63",
          "7.13"
        ],
        correct: 2,
        explanation: "Neutrality means $[H^+] = [OH^-]$. Since $pH + pOH = pK_w = 13.26$, for a neutral solution $2pH = 13.26 \\implies pH = 13.26 / 2 = 6.63$. At elevated temperatures, water dissociation increases, lowering the neutral pH below 7.0!"
      },
      {
        id: "chem-ex-8",
        subject: "Chemistry",
        topic: "Copper Metallurgy",
        year: "KMC 2079 Set B",
        question: "In copper smelting, 'Matte' is a molten mixture primarily consisting of:",
        options: [
          "$Cu_2S$",
          "$FeS$",
          "$Cu_2S + FeS$",
          "$Cu_2S + FeO$"
        ],
        correct: 2,
        explanation: "During smelting of roasted copper pyrites in a reverberatory furnace, a heavy molten sulphide layer termed 'Matte' forms, containing approximately $45-50\% Cu_2S$ and $FeS$."
      },

      // --- BIOLOGY MCQS ---
      {
        id: "bio-ex-1",
        subject: "Biology",
        topic: "Plant Anatomy",
        year: "KMC 2079 Set B",
        question: "Vascular bundles of a monocot root are characterized as:",
        options: [
          "Open, collateral, endarch",
          "Radial with exarch xylem",
          "Closed, collateral, endarch",
          "Radial with endarch xylem"
        ],
        correct: 1,
        explanation: "All roots possess radial vascular bundles (xylem and phloem on separate alternating radii) with exarch xylem (protoxylem facing outward towards the periphery, metaxylem towards the centre). Monocot roots are polyarch radial exarch."
      },
      {
        id: "bio-ex-2",
        subject: "Biology",
        topic: "Genetics & Molecular Biology",
        year: "KMC 2081 Set B",
        question: "When red and white flowered plants of Mirabilis jalapa are crossed, the phenotypic ratio of red : white : pink in the F2 generation is:",
        options: [
          "1 : 2 : 1",
          "2 : 1 : 1",
          "1 : 1 : 2",
          "3 : 1 : 0"
        ],
        correct: 2,
        explanation: "Mirabilis jalapa displays incomplete dominance. Crossing red ($RR$) with white ($rr$) yields pink ($Rr$) in F1. In F2, the genotypic and phenotypic ratios are 1 Red ($RR$) : 2 Pink ($Rr$) : 1 White ($rr$). The question specifically asks for Red : White : Pink $\\implies$ 1 : 1 : 2!"
      },
      {
        id: "bio-ex-3",
        subject: "Biology",
        topic: "Plant Water Relations",
        year: "KMC 2081 Set A",
        question: "When a plant cell becomes fully turgid, its Diffusion Pressure Deficit (DPD) is equal to:",
        options: [
          "$OP$",
          "0",
          "$TP$",
          "$OP + TP$"
        ],
        correct: 1,
        explanation: "Diffusion Pressure Deficit $DPD = OP - TP$. When a cell is fully turgid, maximum endosmosis occurs until turgor pressure equals osmotic pressure ($TP = OP$). Hence, $DPD = OP - OP = 0$. The cell has zero suction capacity."
      },
      {
        id: "bio-ex-4",
        subject: "Biology",
        topic: "Infectious Diseases",
        year: "KMC 2081 Set B",
        question: "A very popular serological diagnostic test called the Widal test is employed for the detection of:",
        options: [
          "Cholera",
          "AIDS",
          "Typhoid",
          "Tuberculosis"
        ],
        correct: 2,
        explanation: "The Widal test is an agglutination test specifically detecting serum antibodies against O (somatic) and H (flagellar) antigens of Salmonella typhi, the causative bacterium of Typhoid fever."
      },
      {
        id: "bio-ex-5",
        subject: "Biology",
        topic: "Embryology of Frog",
        year: "KMC 2081 Set A",
        question: "Due to the amount and distribution of yolk, cleavage in a frog's egg is:",
        options: [
          "Equal and holoblastic",
          "Unequal and holoblastic",
          "Meroblastic and discoidal",
          "Meroblastic and superficial"
        ],
        correct: 1,
        explanation: "The frog's egg is mesolecithal and moderately telolecithal (moderate yolk concentrated at vegetal pole). Cleavage furrows pass through the entire egg (holoblastic), but the vegetal yolk retards division, producing unequal blastomeres (smaller micromeres at animal pole and larger macromeres at vegetal pole)."
      },
      {
        id: "bio-ex-6",
        subject: "Biology",
        topic: "Human Digestive System",
        year: "KMC 2081 Set A",
        question: "In infants feeding on mother's milk, the enzyme Prorennin is secreted by which gastric cells?",
        options: [
          "Oxyntic cells",
          "Zymogen (Chief) cells",
          "Parietal cells",
          "Goblet cells"
        ],
        correct: 1,
        explanation: "Chief cells (zymogen or peptic cells) in the gastric glands secrete the inactive proenzymes pepsinogen and prorennin. Oxyntic/parietal cells secrete $HCl$ and intrinsic factor."
      },
      {
        id: "bio-ex-7",
        subject: "Biology",
        topic: "Animal Tissues",
        year: "KMC 2078 Set 1",
        question: "The myelin sheath around nerve fibers in the Central Nervous System (CNS) is produced and maintained by:",
        options: [
          "Astrocytes",
          "Microglia",
          "Schwann cells",
          "Oligodendrocytes"
        ],
        correct: 3,
        explanation: "In the Central Nervous System (brain and spinal cord), myelin is synthesized by Oligodendrocytes. In the Peripheral Nervous System (PNS), myelin is produced by Schwann cells."
      },
      {
        id: "bio-ex-8",
        subject: "Biology",
        topic: "Excretion & Physiology",
        year: "KMC 2081 Set B",
        question: "Which of the following pairs of organism and primary nitrogenous excretory product is INCORRECT?",
        options: [
          "Bony fishes - Ammonotelic",
          "Whale - Ureotelic",
          "Cartilaginous fishes - Ammonotelic",
          "Pigeon - Uricotelic"
        ],
        correct: 2,
        explanation: "Marine cartilaginous fishes (sharks and rays) retain urea in their blood for osmoregulation and are UREOTELIC, not ammonotelic. Bony fishes are ammonotelic, mammals (including whales) are ureotelic, and birds are uricotelic."
      }
    ],

    // TYPE 2: Rapid-Fire Concept Clearing Question Set (Confusion Busters)
    rapidFire: [
      // --- PHYSICS CONFUSION BUSTERS ---
      {
        id: "rf-p1",
        subject: "Physics",
        trapTitle: "Simple Pendulum vs Spring Clock on the Moon",
        confusion: "Does a spring watch also lose time on the Moon like a pendulum does?",
        question: "A simple pendulum and a watch based on an oscillating spring are both taken to the Moon. Which statement is strictly true?",
        options: [
          "Both clocks run slow and lose time",
          "The pendulum loses time, but the spring watch maintains correct time",
          "The spring watch loses time, but the pendulum maintains correct time",
          "Both clocks maintain exactly correct time"
        ],
        correct: 1,
        whyStudentsFail: "Students mix up the two time period formulas. They assume all mechanical clocks are affected by gravity.",
        goldenRule: "Pendulum: $T = 2\\pi\\sqrt{l/g}$ (depends on $g$, so slows down when $g$ decreases). Spring: $T = 2\\pi\\sqrt{m/k}$ (completely independent of $g$, stays unchanged everywhere!)."
      },
      {
        id: "rf-p2",
        subject: "Physics",
        trapTitle: "Sound Velocity vs Frequency",
        confusion: "If a tuning fork's frequency is quadrupled, does sound velocity become 4v?",
        question: "The frequency of a sound wave in air is $f$ and its velocity is $v$. If the frequency is increased to $4f$, what is the new velocity in the same air medium?",
        options: [
          "$4v$",
          "$2v$",
          "$v$ (unchanged)",
          "$v/4$"
        ],
        correct: 2,
        whyStudentsFail: "Students look at $v = f\\lambda$ and incorrectly assume that increasing $f$ will increase $v$.",
        goldenRule: "Velocity of sound depends ONLY on medium properties (temperature, density, elasticity $\\sqrt{\\gamma P/\\rho}$). Frequency is determined by the source. Increasing $f$ by 4x merely shortens the wavelength $\\lambda$ to $\\lambda/4$, keeping $v$ constant!"
      },
      {
        id: "rf-p3",
        subject: "Physics",
        trapTitle: "Photon Rest Mass vs Momentum",
        confusion: "How can a particle with zero rest mass possess momentum?",
        question: "A photon has zero rest mass ($m_0 = 0$). Does it possess momentum?",
        options: [
          "No, zero mass implies zero momentum ($p = mv = 0$)",
          "Yes, its relativistic momentum is $p = h/\\lambda = E/c$",
          "Only when traveling through a glass medium",
          "Only if its frequency is in the X-ray spectrum"
        ],
        correct: 1,
        whyStudentsFail: "Students rely on classical Newtonian formula $p = mv$. For light, relativistic relation $E^2 = p^2 c^2 + m_0^2 c^4$ applies. With $m_0 = 0$, $E = pc \\implies p = E/c$.",
        goldenRule: "Photons carry momentum $p = \\frac{h}{\\lambda} = \\frac{E}{c}$ despite zero rest mass. They exert radiation pressure upon reflection or absorption!"
      },
      {
        id: "rf-p4",
        subject: "Physics",
        trapTitle: "Electron in Parallel Fields",
        confusion: "What happens when an electron travels parallel to both electric and magnetic fields?",
        question: "An electron is moving with velocity $v$ parallel to both uniform electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields. What is the magnetic force on it?",
        options: [
          "$evB$",
          "$eE/B$",
          "Zero",
          "$-evB$"
        ],
        correct: 2,
        whyStudentsFail: "Students assume magnetic field always deflects a moving charge.",
        goldenRule: "Magnetic Lorentz force is $\\vec{F}_B = q(\\vec{v} \\times \\vec{B}) = qvB\\sin\\theta$. When $\\vec{v}$ is parallel to $\\vec{B}$, $\\theta = 0^\\circ \\implies \\sin 0^\\circ = 0$, so magnetic force is ZERO! Only electric force acts."
      },
      {
        id: "rf-p5",
        subject: "Physics",
        trapTitle: "Stopping Potential Slope Dependency",
        confusion: "Does the slope of stopping potential vs frequency graph change for different metals?",
        question: "Stopping potential ($V_0$) is plotted against incident frequency ($\\nu$) for Caesium (low $\\phi$) and Platinum (high $\\phi$). What is the ratio of their slopes?",
        options: [
          "$\\phi_{Cs} / \\phi_{Pt}$",
          "1 : 1 (Both slopes are identical)",
          "Depends on light intensity",
          "Zero"
        ],
        correct: 1,
        whyStudentsFail: "Students think different metals with different work functions will give lines with different slopes.",
        goldenRule: "Einstein's photoelectric equation: $eV_0 = h\\nu - \\phi \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi}{e}$. The slope is ALWAYS $\\frac{h}{e}$, a ratio of universal constants! The lines for all metals are strictly PARALLEL."
      },
      {
        id: "rf-p6",
        subject: "Physics",
        trapTitle: "Energy vs Angular Momentum in Bohr Atom",
        confusion: "Is total energy proportional to $L_n$, $1/L_n$, or $1/L_n^2$?",
        question: "In a Bohr atom, how is the total energy $E_n$ related to the orbital angular momentum $L_n$?",
        options: [
          "$E_n \\propto L_n$",
          "$E_n \\propto 1/L_n$",
          "$E_n \\propto 1/L_n^2$",
          "$E_n \\propto L_n^2$"
        ],
        correct: 2,
        whyStudentsFail: "Students confuse $E \\propto 1/n$ vs $E \\propto 1/n^2$, and forget that $L_n = n\\hbar \\implies n \\propto L_n$.",
        goldenRule: "$L_n = n\\hbar \\implies n \\propto L_n$. Since $E_n = -13.6/n^2\\text{ eV}$, substituting $n$ gives $E_n \\propto 1/L_n^2$."
      },

      // --- CHEMISTRY CONFUSION BUSTERS ---
      {
        id: "rf-c1",
        subject: "Chemistry",
        trapTitle: "Common Ion Effect Applicability",
        confusion: "Does adding $HCl$ to $H_2SO_4$ cause a common ion effect?",
        question: "Which mixture will NOT demonstrate the common ion effect?",
        options: [
          "$CH_3COOH + CH_3COONa$",
          "$NH_4OH + NH_4Cl$",
          "$HCl + H_2SO_4$",
          "$H_2S + HCl$"
        ],
        correct: 2,
        whyStudentsFail: "Students spot the common ion ($H^+$) in $HCl$ and $H_2SO_4$ and forget the fundamental definition.",
        goldenRule: "Common ion effect requires at least ONE WEAK electrolyte whose equilibrium can be shifted. Since both $HCl$ and $H_2SO_4$ are 100% dissociated strong acids, neither suppresses the other!"
      },
      {
        id: "rf-c2",
        subject: "Chemistry",
        trapTitle: "The $10^{-7}$ M and $10^{-8}$ M pH Traps",
        confusion: "Can a basic $10^{-7}$ M NaOH solution have a neutral pH of 7.0?",
        question: "What is the true pH of a $10^{-7}$ M NaOH solution at 25 °C?",
        options: [
          "7.00 (Neutral)",
          "6.79",
          "7.21 (Slightly basic)",
          "8.00"
        ],
        correct: 2,
        whyStudentsFail: "Calculating $-\\log(10^{-7}) = 7$ leads students to conclude pH = 7. But adding a base to water CANNOT produce a neutral or acidic solution!",
        goldenRule: "Water itself contributes $[OH^-] = 10^{-7}\\text{ M}$. Total $[OH^-] = 10^{-7} + x$. Solving $x(10^{-7}+x) = 10^{-14}$ yields total $[OH^-] = 1.618 \\times 10^{-7}\\text{ M} \\implies pOH = 6.79 \\implies pH = 14 - 6.79 = 7.21$."
      },
      {
        id: "rf-c3",
        subject: "Chemistry",
        trapTitle: "Equivalent Weight of KMnO4 Across Media",
        confusion: "Why does KMnO4 equivalent weight change from 31.6 to 52.67 to 158?",
        question: "In strongly alkaline medium, what is the equivalent weight of $KMnO_4$ (Molar mass = $M$)?",
        options: [
          "$M / 5 = 31.6$",
          "$M / 3 = 52.67$",
          "$M / 1 = 158$",
          "$M / 2 = 79$"
        ],
        correct: 2,
        whyStudentsFail: "Students memorize $M/5 = 31.6$ for acidic medium and use it everywhere.",
        goldenRule: "Acidic: $Mn^{+7} \\to Mn^{+2}$ (gain of 5 $e^-$) $\\implies E = M/5$. Neutral/Weak base: $Mn^{+7} \\to Mn^{+4}$ (gain of 3 $e^-$) $\\implies E = M/3$. Strongly alkaline: $Mn^{+7} \\to Mn^{+6}$ ($MnO_4^{2-}$, gain of 1 $e^-$) $\\implies E = M/1 = 158$!"
      },
      {
        id: "rf-c4",
        subject: "Chemistry",
        trapTitle: "Primary vs Secondary Standards",
        confusion: "Why isn't NaOH a primary standard even though it's available in pure solid pellets?",
        question: "Why cannot standard NaOH solution be prepared by direct weighing?",
        options: [
          "NaOH is insoluble in water",
          "NaOH is deliquescent and absorbs atmospheric $CO_2$",
          "NaOH has a very low molar mass",
          "NaOH decomposes explosively in light"
        ],
        correct: 1,
        whyStudentsFail: "Students think being a solid is sufficient for primary standard qualification.",
        goldenRule: "Primary standards must have constant, indefinite composition in air. Solid NaOH is hygroscopic (absorbs moisture from air) and reacts with atmospheric $CO_2$ to form $Na_2CO_3$, making exact weighing impossible."
      },
      {
        id: "rf-c5",
        subject: "Chemistry",
        trapTitle: "Chlorobenzene Reactivity in Nucleophilic Substitution",
        confusion: "Why doesn't chlorobenzene undergo nucleophilic substitution like chloroethane?",
        question: "Why is chlorobenzene extremely inert towards nucleophilic substitution compared to chloroethane?",
        options: [
          "Because benzene ring attracts nucleophiles",
          "Resonance imparts partial double bond character to C-Cl bond and carbon is $sp^2$ hybridized",
          "Because chlorine atom is too small",
          "Because it is an electrovalent compound"
        ],
        correct: 1,
        whyStudentsFail: "Students think haloalkanes and haloarenes undergo identical substitution reactions.",
        goldenRule: "Resonance delocalizes lone pairs from Cl into the benzene ring, giving C-Cl partial double bond character. Furthermore, $sp^2$ carbon has higher s-character (33.3%), making the bond shorter and harder to break."
      },
      {
        id: "rf-c6",
        subject: "Chemistry",
        trapTitle: "Color of Zinc vs Iron Complexes",
        confusion: "Why are Fe3+ compounds colored but Zn2+ compounds completely colorless?",
        question: "Why are all hydrated salts of $Zn^{2+}$ colorless in aqueous solution?",
        options: [
          "Zinc has an incomplete d-subshell",
          "Zinc has a completely filled $3d^{10}$ subshell, preventing d-d electron transition",
          "Zinc absorbs all visible light",
          "Zinc ions form only covalent bonds"
        ],
        correct: 1,
        whyStudentsFail: "Students assume all transition metal compounds are colored.",
        goldenRule: "Color in transition metal complexes arises from excitation of d-electrons between split $t_{2g}$ and $e_g$ levels ($d-d$ transition). In $Zn^{2+}$ ($3d^{10}$), all d-orbitals are fully occupied, leaving no vacant orbital for promotion. Hence, colorless!"
      },

      // --- BIOLOGY CONFUSION BUSTERS ---
      {
        id: "rf-b1",
        subject: "Biology",
        trapTitle: "DPD in Turgid vs Flaccid Cells",
        confusion: "When a plant cell is fully turgid, is its DPD zero or maximum?",
        question: "When a plant cell is placed in pure water and becomes fully turgid, its Diffusion Pressure Deficit (DPD) becomes:",
        options: [
          "Equal to Osmotic Pressure ($OP$)",
          "Equal to Turgor Pressure ($TP$)",
          "Zero",
          "Maximum"
        ],
        correct: 2,
        whyStudentsFail: "Students confuse turgor pressure (which is maximum in a turgid cell) with suction force / DPD (which is zero).",
        goldenRule: "Formula: $DPD = OP - TP$. When fully turgid, wall pressure / turgor pressure equals osmotic pressure ($TP = OP$). Hence, $DPD = OP - OP = 0$. The cell is full and has ZERO demand for additional water!"
      },
      {
        id: "rf-b2",
        subject: "Biology",
        trapTitle: "Incomplete Dominance Ratio Order Trap",
        confusion: "Exam trick: 1:2:1 vs 1:1:2 in Mirabilis jalapa",
        question: "In a cross of red and white Mirabilis jalapa, what is the ratio of Red : White : Pink flowers in the F2 generation?",
        options: [
          "1 : 2 : 1",
          "1 : 1 : 2",
          "3 : 1",
          "2 : 1 : 1"
        ],
        correct: 1,
        whyStudentsFail: "Almost 80% of students reflexively pick '1:2:1' because they memorize the order Red : Pink : White without reading the question prompt order!",
        goldenRule: "Read the prompt order carefully! Standard ratio is Red ($1$) : Pink ($2$) : White ($1$). When asked Red : White : Pink, it MUST be 1 : 1 : 2!"
      },
      {
        id: "rf-b3",
        subject: "Biology",
        trapTitle: "Genetic Code Ambiguity Trap",
        confusion: "Is the genetic code ambiguous or unambiguous?",
        question: "Which of the following is NOT a property of the universal genetic code?",
        options: [
          "Triplet in nature",
          "Commaless",
          "Degenerate",
          "Ambiguous"
        ],
        correct: 3,
        whyStudentsFail: "Students confuse 'degenerate' (multiple codons code for 1 amino acid) with 'ambiguous' (one codon codes for multiple amino acids).",
        goldenRule: "The genetic code is strictly UNAMBIGUOUS: One codon codes for ONLY ONE specific amino acid (e.g., UUU codes only for Phenylalanine). It is never ambiguous!"
      },
      {
        id: "rf-b4",
        subject: "Biology",
        trapTitle: "Myelin Sheath Producer: CNS vs PNS",
        confusion: "Do Schwann cells myelinate the brain and spinal cord?",
        question: "Which glial cells produce the myelin sheath around axons inside the Central Nervous System (brain and spinal cord)?",
        options: [
          "Schwann cells",
          "Oligodendrocytes",
          "Astrocytes",
          "Microglia"
        ],
        correct: 1,
        whyStudentsFail: "Textbooks emphasize Schwann cells when introducing neurons, so students forget oligodendrocytes in the CNS.",
        goldenRule: "PNS = Schwann cells (one cell wraps one axon segment). CNS = Oligodendrocytes (one cell sends processes to myelinate up to 50 axon segments!)."
      },
      {
        id: "rf-b5",
        subject: "Biology",
        trapTitle: "Infant Gastric Juice Constituents",
        confusion: "Does infant gastric juice contain amylase or pepsinogen?",
        question: "Which enzyme is NOT present in the gastric juice of human infants?",
        options: [
          "Pepsinogen",
          "Prorennin (Rennin)",
          "Gastric Amylase",
          "Gastric Lipase"
        ],
        correct: 2,
        whyStudentsFail: "Students think carbohydrate digestion begins in the stomach.",
        goldenRule: "Gastric juice has NO amylase or carbohydrate-splitting enzymes (salivary amylase is inactivated by acid). Infant gastric juice contains Pepsinogen, Prorennin, and weak Gastric Lipase."
      },
      {
        id: "rf-b6",
        subject: "Biology",
        trapTitle: "Nitrogenous Waste in Aquatic Mammals (Whale)",
        confusion: "Since whales live in the ocean, are they ammonotelic?",
        question: "What is the primary nitrogenous excretory product of marine whales?",
        options: [
          "Ammonia (Ammonotelic)",
          "Urea (Ureotelic)",
          "Uric Acid (Uricotelic)",
          "Guanine (Guanotelic)"
        ],
        correct: 1,
        whyStudentsFail: "Students assume that because a whale lives in water, it excretes ammonia like bony fish.",
        goldenRule: "Whales are mammals! All mammals possess a functional ornithine/urea cycle in the liver and are UREOTELIC (excrete urea), regardless of whether they live in water or on land."
      }
    ]
  }
};
