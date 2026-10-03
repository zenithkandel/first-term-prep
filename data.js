var STUDY_DATA = (typeof window !== 'undefined' ? window : globalThis).STUDY_DATA = {
  "topics": {
    "physics": [
      {
        "id": "phy-shm",
        "title": "Simple Harmonic Motion (SHM) & Oscillations",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "2078 Set 1"
        ],
        "weightage": "8 - 11 Marks",
        "summary": "Covers differential equation of SHM, velocity/acceleration relations, kinetic and potential energy conservation ($E = \\frac{1}{2}m\\omega^2 A^2$), simple pendulum time period behavior on the Moon, and mass-spring systems.",
        "keyConcepts": [
          "Displacement: $y = A \\sin(\\omega t)$, Velocity: $v = \\omega \\sqrt{A^2 - y^2}$, Acceleration: $a = -\\omega^2 y$",
          "Total Energy: $E = KE + PE = \\frac{1}{2}m\\omega^2(A^2 - y^2) + \\frac{1}{2}m\\omega^2 y^2 = \\frac{1}{2}m\\omega^2 A^2$ (Constant throughout motion)",
          "Simple Pendulum on Moon: $T = 2\\pi\\sqrt{l/g}$. Since $g_{moon} = g_{earth}/6$, $T$ increases by $\\sqrt{6}$ times $\\implies$ Pendulum clock slows down (loses time)!",
          "Spring Pendulum on Moon: $T = 2\\pi\\sqrt{m/k}$. Independent of $g$, so spring watch time period remains UNCHANGED on the Moon!"
        ],
        "questions": [
          {
            "type": "Short Question [2M]",
            "year": "2083 Hostel & 2082 Set A",
            "question": "A simple pendulum is taken to the Moon. Will it gain or lose time? Explain why. What happens to a spring clock under the same conditions?",
            "answer": "The time period of a simple pendulum is $T = 2\\pi\\sqrt{l/g}$. On the moon, acceleration due to gravity is $g/6$, which is lower than on Earth. Therefore, the time period $T$ increases. A longer time period means the pendulum takes longer for each oscillation, so it runs slow and LOSES time. In contrast, a spring clock has time period $T = 2\\pi\\sqrt{m/k}$, which is independent of acceleration due to gravity $g$. Thus, a spring clock keeps correct time and remains unaffected."
          },
          {
            "type": "Derivation & Graph [4M]",
            "year": "2078 Set 1 & 2083 Hostel",
            "question": "Find an expression for the total energy of a particle in simple harmonic motion and show that it obeys the law of conservation of energy. Sketch the variation of K.E. and P.E. with displacement.",
            "answer": "At displacement $y$ from mean position: Velocity $v = \\omega\\sqrt{A^2 - y^2}$, so $K.E. = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2(A^2 - y^2)$. Restoring force $F = ky = m\\omega^2 y$, so $P.E. = \\int_0^y ky,dy = \\frac{1}{2}m\\omega^2 y^2$. Total Energy $E = K.E. + P.E. = \\frac{1}{2}m\\omega^2 A^2$. Since $m, \\omega, A$ are constants, total energy is constant at all points. At $y=0$ (mean), $K.E. = E$ and $P.E. = 0$. At $y=\\pm A$ (extremes), $K.E. = 0$ and $P.E. = E$. The graph of K.E. is an inverted parabola while P.E. is an upright parabola, summing to a horizontal line $E$."
          },
          {
            "type": "Numerical [3M]",
            "year": "2082 Set A & 2083 Hostel",
            "question": "A body of mass 2 kg is suspended from a vertical spring of negligible mass and stretches the spring by 0.1 m. Find the force constant of the spring and its time period of oscillation when slightly displaced.",
            "answer": "Given: $m = 2\\text{ kg}$, extension $x = 0.1\\text{ m}$, $g = 9.8\\text{ m/s}^2$. Restoring force $F = kx = mg \\implies k = \\frac{mg}{x} = \\frac{2 \\times 9.8}{0.1} = 196\\text{ N/m}$. Time period $T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{2}{196}} = 2\\pi\\sqrt{\\frac{1}{98}} \\approx 0.634\\text{ s}$."
          }
        ]
      },
      {
        "id": "phy-rot",
        "title": "Rotational Dynamics & Moment of Inertia",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "2078 Set 1"
        ],
        "weightage": "7 - 10 Marks",
        "summary": "Moment of inertia of rigid bodies, radius of gyration, rotational kinetic energy derivation, torque relation ($\\tau = I\\alpha$), and the principle of conservation of angular momentum ($L = I\\omega = \\text{const}$).",
        "keyConcepts": [
          "Moment of Inertia: $I = \\sum m_i r_i^2 = M k^2$, where $k$ is radius of gyration. Depends on mass, mass distribution, axis of rotation.",
          "Rotational Kinetic Energy: $K_{rot} = \\frac{1}{2}I\\omega^2$. Total KE of rolling body without slipping: $K = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}Mv^2(1 + \\frac{k^2}{R^2})$.",
          "Torque: $\\tau = I\\alpha = \\frac{dL}{dt}$, Work done: $W = \\tau\\theta = F R \\theta$.",
          "Conservation of Angular Momentum: If external torque $\\tau_{ext} = 0$, $L = I_1\\omega_1 = I_2\\omega_2 = \\text{constant}$. If Earth shrinks to half radius, $I = \\frac{2}{5}MR^2$ becomes $I/4$, so $\\omega$ increases 4x $\\implies$ Length of day becomes $24 / 4 = 6\\text{ hours}$!"
        ],
        "questions": [
          {
            "type": "Conceptual Question [2M]",
            "year": "2083 Hostel & 2078 Set 1",
            "question": "If the Earth were to shrink suddenly to half of its present radius without any change in its mass, what would happen to the duration of the day? Justify your answer.",
            "answer": "Earth is assumed to be a uniform sphere with moment of inertia $I = \\frac{2}{5}MR^2$. When its radius becomes $R' = R/2$, its new moment of inertia is $I' = \\frac{2}{5}M(R/2)^2 = \\frac{I}{4}$. By conservation of angular momentum: $I\\omega = I'\\omega' \\implies I\\left(\\frac{2\\pi}{T}\\right) = \\frac{I}{4}\\left(\\frac{2\\pi}{T'}\\right) \\implies T' = \\frac{T}{4}$. Since current day duration $T = 24\\text{ hours}$, the new day duration will be $T' = 24 / 4 = 6\\text{ hours}$."
          },
          {
            "type": "Derivation [3M]",
            "year": "2078 Set 1 & 2083 Hostel",
            "question": "Derive an expression for the moment of inertia of a thin uniform rod of mass M and length L about an axis passing through its centre of mass and perpendicular to its length.",
            "answer": "Mass per unit length $\\lambda = M/L$. Consider a small element $dx$ at distance $x$ from the centre of the rod ($-L/2 \\le x \\le L/2$). Mass of element $dm = \\lambda,dx = (M/L)dx$. Moment of inertia of this element about the central transverse axis is $dI = dm \\cdot x^2 = (M/L)x^2,dx$. Integrating from $-L/2$ to $+L/2$: $I = \\int_{-L/2}^{L/2} \\frac{M}{L}x^2,dx = \\frac{M}{L}\\left[\\frac{x^3}{3}\\right]_{-L/2}^{L/2} = \\frac{M}{3L}\\left(\\frac{L^3}{8} - \\left(-\\frac{L^3}{8}\\right)\\right) = \\frac{1}{12}ML^2$."
          },
          {
            "type": "Numerical [3M]",
            "year": "2083 Hostel",
            "question": "A ballet dancer spins at 2.4 rev/s with her arms outstretched, when the moment of inertia about the axis of rotation is I. With her arms folded, the moment of inertia about the same axis becomes 0.6I. Calculate the new rate of spin.",
            "answer": "Given: $I_1 = I$, $f_1 = 2.4\\text{ rev/s}$, $I_2 = 0.6I$, $f_2 = ?$. By conservation of angular momentum: $I_1\\omega_1 = I_2\\omega_2 \\implies I_1(2\\pi f_1) = I_2(2\\pi f_2) \\implies I \\times 2.4 = 0.6I \\times f_2 \\implies f_2 = \\frac{2.4}{0.6} = 4\\text{ rev/s}$."
          }
        ]
      },
      {
        "id": "phy-photo",
        "title": "Photoelectric Effect & Quantum Physics",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "2078 Set 1"
        ],
        "weightage": "8 - 12 Marks",
        "summary": "Einstein's photoelectric equation ($h\\nu = \\phi + KE_{max}$), work function, threshold frequency $\\nu_0$, stopping potential $V_0$, stopping potential vs frequency graphs (slope = $h/e$), and photon properties ($p = h/\\lambda = E/c$).",
        "keyConcepts": [
          "Photon Properties: Rest mass = 0, Energy $E = h\\nu = hc/\\lambda$, Momentum $p = h/\\lambda = E/c$. Photons are electrically neutral (not deflected by E or B fields).",
          "Einstein's Equation: $E = \\phi + eV_0 \\implies h\\nu = h\\nu_0 + \\frac{1}{2}mv_{max}^2 = h\\nu_0 + eV_0$.",
          "Stopping Potential Graph: $V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi}{e}$. Slope of $V_0$ vs $\\nu$ is universal ($h/e$), independent of metal type!",
          "Intensity vs Frequency: Intensity determines number of photons emitted per second (photoelectric current). Frequency determines kinetic energy and stopping potential of electrons."
        ],
        "questions": [
          {
            "type": "Conceptual & Graphical [3M]",
            "year": "2083 Hostel & 2078 Set 1",
            "question": "Sketch graphs showing the variation of stopping potential with frequency of incident radiation for three photosensitive materials A, B, and C with threshold frequencies $f_1 > f_2 > f_3$. (i) In which case is stopping potential greater for radiation of given frequency? (ii) Does the slope depend on the nature of the material?",
            "answer": "(i) Stopping potential is $V_0 = \\frac{h}{e}(\\nu - \\nu_0)$. For a given incident frequency $\\nu$, the metal with the smallest threshold frequency ($C$ with $f_3$) has the largest difference $(\\nu - \\nu_0)$, hence $V_0$ is greatest for material C. (ii) No, the slope of the $V_0$ vs $\\nu$ line is $\\frac{h}{e}$, which consists of universal constants (Planck's constant $h$ and elementary charge $e$). It is strictly identical for all photosensitive materials."
          },
          {
            "type": "Numerical [3M]",
            "year": "2083 Hostel",
            "question": "A clean nickel surface with a work function of 5.1 eV is exposed to light of wavelength 235 nm. What is the maximum speed of the photoelectrons emitted from its surface?",
            "answer": "Incident energy $E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{235 \\times 10^{-9}\\text{ J}} = \\frac{1.989 \\times 10^{-19}}{2.35 \\times 10^{-7}} = 8.464 \\times 10^{-19}\\text{ J} = \\frac{8.464 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 5.29\\text{ eV}$. Kinetic energy $K_{max} = E - \\phi = 5.29\\text{ eV} - 5.10\\text{ eV} = 0.19\\text{ eV} = 0.19 \\times 1.6 \\times 10^{-19} = 3.04 \\times 10^{-20}\\text{ J}$. Maximum velocity: $v_{max} = \\sqrt{\\frac{2 K_{max}}{m_e}} = \\sqrt{\\frac{2 \\times 3.04 \\times 10^{-20}}{9.1 \\times 10^{-31}}} = \\sqrt{6.68 \\times 10^{10}} \\approx 2.58 \\times 10^5\\text{ m/s}$."
          }
        ]
      },
      {
        "id": "phy-electron",
        "title": "Electrons, Thomson's Experiment & Millikan's Method",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "2078 Set 1"
        ],
        "weightage": "8 - 11 Marks",
        "summary": "Determination of specific charge ($e/m$) of an electron by J.J. Thomson's crossed field method, Millikan's oil drop experiment for quantization of charge ($q = ne$), motion of charged particles in uniform electric and magnetic fields, and Hall Effect.",
        "keyConcepts": [
          "Crossed Fields / Velocity Selector: Electric force $F_e = qE$, Magnetic force $F_b = qvB$. When forces balance: $qE = qvB \\implies v = \\frac{E}{B}$.",
          "Specific Charge of Electron: $e/m = 1.76 \\times 10^{11}\\text{ C/kg}$. In magnetic field alone, path is circular: $r = \\frac{mv}{qB}$.",
          "Millikan's Oil Drop Experiment: Terminal velocity in air $v_1 = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}$. With electric field applied upwards to balance drop: $qE = mg \\implies q = \\frac{mg}{E}$. Confirmed quantization of electric charge: $q = \\pm ne$.",
          "Hall Effect: Hall voltage across conductor of thickness $t$ carrying current $I$ in magnetic field $B$: $V_H = \\frac{IB}{net}$."
        ],
        "questions": [
          {
            "type": "Long Question [5M]",
            "year": "2083 Hostel & 2078 Set 1",
            "question": "Describe Millikan's oil drop experiment to determine the charge of an electron. Explain how this experiment proved that electric charge is quantized.",
            "answer": "Setup: Two parallel horizontal metal plates separated by distance $d$ in a chamber. An atomizer sprays fine oil drops, which enter the space between plates through a pinhole. Air is ionized by X-rays, imparting charge to oil drops. (1) Motion under gravity alone: Drop falls with steady terminal velocity $v_1$. Gravitational force balances viscous force (Stokes' Law): $6\\pi\\eta r v_1 = mg = \\frac{4}{3}\\pi r^3(\\rho - \\sigma)g$, giving drop radius $r$. (2) Motion under electric field: Electric field $E = V/d$ is applied. Upward electric force $qE$ opposes weight. If drop moves upwards with terminal velocity $v_2$: $qE - mg = 6\\pi\\eta r v_2 \\implies q = \\frac{mg(v_1 + v_2)}{E v_1}$. Repeating for multiple drops, Millikan found $q$ is always an integral multiple of elementary charge: $q = ne$, where $e = 1.602 \\times 10^{-19}\\text{ C}$."
          }
        ]
      },
      {
        "id": "phy-waves",
        "title": "Waves, Speed of Sound & Organ Pipes",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "2078 Set 1"
        ],
        "weightage": "7 - 10 Marks",
        "summary": "Newton's formula for speed of sound, Laplace's adiabatic correction ($v = \\sqrt{\\frac{\\gamma P}{\\rho}}$), factors affecting speed of sound (temperature, pressure, humidity), standing waves in open and closed organ pipes, and end correction.",
        "keyConcepts": [
          "Newton's Assumption: Sound propagation is isothermal ($PV = \\text{const}, E_T = P$). Formula: $v = \\sqrt{P/\\rho} = 280\\text{ m/s}$ (16% error from experimental 332 m/s).",
          "Laplace's Correction: Sound propagation is rapid adiabatic compression/rarefaction ($PV^\\gamma = \\text{const}, E_S = \\gamma P$). Formula: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = 332.5\\text{ m/s}$ (perfect agreement!).",
          "Effect of Pressure & Temperature: Pressure has NO effect on speed of sound at constant temperature (since $P/\\rho = \\text{const}$). Speed is directly proportional to square root of absolute temperature: $v \\propto \\sqrt{T}$.",
          "Organ Pipes: Closed pipe produces ONLY odd harmonics ($f_1 : f_3 : f_5 = 1 : 3 : 5$), fundamental $f_1 = \\frac{v}{4L}$. Open pipe produces ALL harmonics ($f_1 : f_2 : f_3 = 1 : 2 : 3$), fundamental $f_1 = \\frac{v}{2L}$."
        ],
        "questions": [
          {
            "type": "Short Question [3M]",
            "year": "2083 Hostel & 2078 Set 1",
            "question": "Why was Newton's assumption about the velocity of sound in a gaseous medium wrong? Discuss the correction made by Laplace.",
            "answer": "Newton assumed sound travels through a gas by isothermal processes because heat conducted would instantly equalize temperature. Under this assumption, bulk modulus $K = P$, giving $v = \\sqrt{P/\\rho} = 280\\text{ m/s}$, which is 16% lower than the experimental value 332 m/s. Laplace corrected this by pointing out that compressions and rarefactions occur very rapidly and air is a poor conductor of heat. Hence, there is no time for heat exchange, making the process ADIABATIC, not isothermal. Under adiabatic conditions, bulk modulus $K = \\gamma P$ (where $\\gamma = C_p/C_v = 1.4$ for air). Thus, $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{1.4} \\times 280 \\approx 331.3\\text{ m/s}$, matching experimental results."
          }
        ]
      },
      {
        "id": "phy-mag",
        "title": "Magnetic Fields & Biot-Savart / Ampere's Law",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "2078 Set 1"
        ],
        "weightage": "7 - 10 Marks",
        "summary": "Biot-Savart law ($dB = \\frac{\\mu_0}{4\\pi}\\frac{I dl \\sin\\theta}{r^2}$), magnetic field at center/axis of circular coil, Ampere's circuital law ($\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enclosed}$), field inside solenoid ($B = \\mu_0 n I$), force between parallel current-carrying wires ($F/l = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$), and definition of 1 Ampere.",
        "keyConcepts": [
          "Biot-Savart Law: Vector field $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I(d\\vec{l} \\times \\hat{r})}{r^2}$. Center of circular loop: $B = \\frac{\\mu_0 I}{2R}$.",
          "Ampere's Circuital Law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}$. Inside long solenoid: $B = \\mu_0 n I$, where $n = N/L$.",
          "Parallel Conductors: Same direction currents ATTRACT each other; opposite direction currents REPEL each other.",
          "Definition of 1 Ampere: Steady current which, when maintained in two straight parallel conductors of infinite length and negligible cross-section placed 1 metre apart in vacuum, produces a force of $2 \\times 10^{-7}\\text{ N/m}$ between them."
        ],
        "questions": [
          {
            "type": "Short Question [3M]",
            "year": "2083 Hostel & 2078 Set 1",
            "question": "Two long parallel conductors X and Y placed in air at distance R carry currents $I_1$ and $I_2$. (i) Find the force per unit length between them. (ii) What is the nature of force when currents flow in the same direction vs opposite directions? (iii) Define one ampere of current on this basis.",
            "answer": "(i) Force per unit length is $\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi R}$. (ii) When currents flow in the same direction, the force is ATTRACTIVE. When currents flow in opposite directions, the force is REPULSIVE. (iii) One ampere is that constant current which, if maintained in two straight, parallel, infinitely long conductors of negligible circular cross-section placed 1 metre apart in vacuum, produces between these conductors a force equal to $2 \\times 10^{-7}$ newtons per metre of length."
          }
        ]
      },
      {
        "id": "phy-bohr",
        "title": "Bohr's Model of Hydrogen Atom & Spectra",
        "repetitionCount": 4,
        "years": [
          "2082 Set A",
          "2081 Set B",
          "2079 Set B",
          "Hostel 2083"
        ],
        "weightage": "5 - 8 Marks",
        "summary": "Bohr's postulates of atomic structure, quantization of orbital angular momentum ($L = n\\hbar$), radius ($r_n \\propto n^2$), orbital velocity ($v_n \\propto 1/n$), total energy ($E_n = -13.6/n^2\\text{ eV} \\implies E_n \\propto 1/L_n^2$), and hydrogen spectral series.",
        "keyConcepts": [
          "Bohr Postulate: Electrons revolve in non-radiating stationary orbits where angular momentum is quantized: $mvr = \\frac{nh}{2\\pi}$.",
          "Energy Relation: $E_n = -\\frac{13.6}{n^2}\\text{ eV}$. Since angular momentum $L_n = n\\hbar \\implies n = L_n/\\hbar$, total energy $E_n \\propto -\\frac{1}{L_n^2}$!",
          "Spectral Series: Lyman (UV, $n_1=1$), Balmer (Visible, $n_1=2$), Paschen (IR, $n_1=3$), Brackett (IR, $n_1=4$), Pfund (IR, $n_1=5$)."
        ],
        "questions": [
          {
            "type": "MCQ & Justification [2M]",
            "year": "2082 Set A",
            "question": "$E_n$ and $L_n$ denote the magnitude of total energy and angular momentum of an electron in the nth orbit of a Bohr atom. How are $E_n$ and $L_n$ related?",
            "answer": "According to Bohr's quantization condition, angular momentum is $L_n = \\frac{nh}{2\\pi}$, so $n = \\frac{2\\pi L_n}{h} \\implies n \\propto L_n$. Total energy in the nth orbit is $E_n = -\\frac{m e^4}{8\\varepsilon_0^2 h^2 n^2} \\implies E_n \\propto \\frac{1}{n^2}$. Substituting $n \\propto L_n$ yields $E_n \\propto \\frac{1}{L_n^2}$."
          }
        ]
      }
    ],
    "chemistry": [
      {
        "id": "chem-vol",
        "title": "Volumetric Analysis & Stoichiometry",
        "repetitionCount": 6,
        "years": [
          "2083 Hostel",
          "2082 Sol",
          "2081 Sol",
          "2080 Set A",
          "2080 Set B",
          "2080 Re-exam"
        ],
        "weightage": "8 - 12 Marks",
        "summary": "Equivalent weights of oxidants/reductants ($KMnO_4, K_2Cr_2O_7$), normality vs molarity, primary vs secondary standards, percentage purity titrations, and mixture solution calculations ($N_1 V_1 + N_2 V_2 = N_3 V_3$).",
        "keyConcepts": [
          "Equivalent Weight: $E = \\frac{\\text{Molecular Weight}}{\\text{Change in Oxidation Number}}$ or $\\frac{\\text{Mol. Wt}}{\\text{Acidity/Basicity}}$.",
          "Equivalent Weight of $KMnO_4$ (Mol. Wt = 158): Acidic medium: $Mn^{+7} \\to Mn^{+2}$ (change = 5) $\\implies E = 158/5 = 31.6$. Neutral/Weakly alkaline: $Mn^{+7} \\to Mn^{+4}$ (change = 3) $\\implies E = 158/3 = 52.67$. Strongly alkaline: $Mn^{+7} \\to Mn^{+6}$ (change = 1) $\\implies E = 158/1 = 158$.",
          "Primary Standards: Available in pure dry state, stable in air, known exact composition, high molecular mass. Examples: Hydrated Oxalic acid ($H_2C_2O_4\\cdot 2H_2O$), Anhydrous $Na_2CO_3$.",
          "Secondary Standards: Deliquescent ($NaOH$), volatile ($HCl$), or undergo decomposition ($KMnO_4$). Concentration must be standardized before use."
        ],
        "questions": [
          {
            "type": "Short Question [3M]",
            "year": "2080 Set A, Set B & 2082 Solution",
            "question": "Calculate the equivalent weight of $KMnO_4$ in acidic, neutral, and strongly alkaline mediums with balanced chemical reactions.",
            "answer": "1) In Acidic Medium: $2KMnO_4 + 3H_2SO_4 \\to K_2SO_4 + 2MnSO_4 + 3H_2O + 5[O]$. Change in oxidation number of Mn = $+7 - (+2) = 5$. Equivalent weight = $\\frac{\\text{Mol. wt}}{5} = \\frac{158}{5} = 31.6$.\n2) In Neutral/Faintly Alkaline Medium: $2KMnO_4 + H_2O \\to 2KOH + 2MnO_2 + 3[O]$. Change in O.N. of Mn = $+7 - (+4) = 3$. Equivalent weight = $\\frac{158}{3} = 52.67$.\n3) In Strongly Alkaline Medium: $2KMnO_4 + 2KOH \\to 2K_2MnO_4 + H_2O + [O]$. Change in O.N. of Mn = $+7 - (+6) = 1$. Equivalent weight = $\\frac{158}{1} = 158$."
          },
          {
            "type": "Numerical [3M]",
            "year": "2080 Set A & Set B",
            "question": "1.5 g of a $CaCO_3$ sample required 40 ml of N/2 HCl for complete neutralization. Calculate the percentage purity of $CaCO_3$ in the sample.",
            "answer": "Given: $V_{HCl} = 40\\text{ ml}$, $N_{HCl} = 0.5\\text{ N}$. Equivalent wt of $CaCO_3 = \\frac{100}{2} = 50$. Gram equivalent of HCl used = $\\frac{N \\times V}{1000} = \\frac{0.5 \\times 40}{1000} = 0.02\\text{ eq}$. Mass of pure $CaCO_3 = \\text{Gram equivalent} \\times E = 0.02 \\times 50 = 1.0\\text{ g}$. Percentage purity = $\\frac{\\text{Mass of pure } CaCO_3}{\\text{Mass of sample}} \\times 100% = \\frac{1.0}{1.5} \\times 100% = 66.67%$."
          }
        ]
      },
      {
        "id": "chem-ionic",
        "title": "Ionic Equilibrium & Common Ion Effect",
        "repetitionCount": 6,
        "years": [
          "2083 Hostel",
          "2081 Sol",
          "2080 Set A",
          "2080 Set B",
          "2080 Re-exam",
          "2079 Set B"
        ],
        "weightage": "8 - 12 Marks",
        "summary": "Common ion effect definition and applications in qualitative salt analysis (Group II & Group III cations), Ostwald's dilution law, solubility product ($K_{sp}$) and precipitation criteria, calculation of pH for ultra-dilute acids/bases ($10^{-7}$M NaOH, $10^{-8}$M HCl), and buffer action.",
        "keyConcepts": [
          "Common Ion Effect: Suppression of ionization of a WEAK electrolyte by adding a STRONG electrolyte containing a common ion. E.g., $CH_3COOH \\rightleftharpoons CH_3COO^- + H^+$; adding $CH_3COONa$ increases $[CH_3COO^-]$ and shifts equilibrium backwards.",
          "Crucial Trap: Common ion effect does NOT apply between two strong electrolytes ($HCl + H_2SO_4$), because neither suppresses the other's ionization (both dissociate 100%)!",
          "Group II Qualitative Analysis: $H_2S$ (weak acid) passed in presence of dil. $HCl$ (strong acid). High $[H^+]$ suppresses ionization of $H_2S$, keeping $[S^{2-}]$ low so only Group II cations with very low $K_{sp}$ (like $Cu^{2+}, Pb^{2+}$) precipitate as sulphides.",
          "Group III Qualitative Analysis: $NH_4OH$ passed in presence of $NH_4Cl$. Common ion $NH_4^+$ suppresses $[OH^-]$ so only Group III hydroxides ($Fe(OH)_3, Al(OH)_3, Cr(OH)_3$) precipitate without precipitating higher group cations.",
          "pH of $10^{-7}$M NaOH: Must consider $[OH^-]$ from water auto-ionization ($10^{-7}$): Total $[OH^-] = 10^{-7} + x$. Total $[OH^-] = 1.618 \\times 10^{-7}\\text{ M} \\implies pOH = 6.79 \\implies pH = 14 - 6.79 = 7.21$ (NEVER 7.0 or below!)."
        ],
        "questions": [
          {
            "type": "Short Question [3M]",
            "year": "2080 Set A, Set B & 2079 Set B",
            "question": "(a) What is common ion effect? (b) Explain why water is both a Lewis base and a Bronsted acid. (c) Calculate the pH of $10^{-7}$ M NaOH solution.",
            "answer": "(a) Common ion effect is the phenomenon of suppression of degree of dissociation of a weak electrolyte by the addition of a strong electrolyte having an ion in common with it.\n(b) Water molecule has lone pairs on oxygen, which it can donate to an electron-deficient species (Lewis base). It can also donate a proton ($H^+$) to a stronger base, making it a Bronsted-Lowry acid.\n(c) In $10^{-7}$ M NaOH: $[OH^-]_{NaOH} = 10^{-7}\\text{ M}$. Since water also ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = x$, so $[OH^-]_{total} = 10^{-7} + x$. $K_w = [H^+][OH^-] = x(10^{-7} + x) = 1.0 \\times 10^{-14}$. Solving quadratic: $x^2 + 10^{-7}x - 10^{-14} = 0 \\implies x = 0.618 \\times 10^{-7}\\text{ M}$. Total $[OH^-] = 1.618 \\times 10^{-7}\\text{ M}$. $pOH = -\\log(1.618 \\times 10^{-7}) = 6.791 \\implies pH = 14 - 6.791 = 7.21$."
          }
        ]
      },
      {
        "id": "chem-trans",
        "title": "Transition Elements & Heavy Metals",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2082 Sol",
          "2080 Set A",
          "2080 Set B",
          "2080 Re-exam"
        ],
        "weightage": "5 - 8 Marks",
        "summary": "Characteristics of transition elements: paramagnetism (unpaired d-electrons), color of coordination complexes (d-d electron transition), variable oxidation states, why $Zn^{2+}$ salts are colorless ($3d^{10}$ full subshell), and greater stability of $Fe^{3+}$ over $Fe^{2+}$.",
        "keyConcepts": [
          "Zinc Compounds Colorless: $Zn$ is $[Ar]3d^{10}4s^2$, and $Zn^{2+}$ is $[Ar]3d^{10}$. Since the 3d-subshell is completely filled, no d-d electron transition is possible, so all $Zn^{2+}$ compounds are colorless and diamagnetic.",
          "Paramagnetism: Transition metals contain unpaired electrons in d-orbitals which have permanent magnetic moments aligned by external magnetic fields.",
          "Fe3+ vs Fe2+ Stability: $Fe^{2+}$ is $[Ar]3d^6$, whereas $Fe^{3+}$ is $[Ar]3d^5$. The half-filled $3d^5$ subshell is symmetrical and possesses extra exchange energy stability, making $Fe^{3+}$ more stable than $Fe^{2+}$.",
          "Color of $[Fe(H_2O)_6]^{2+}$: In the presence of $H_2O$ ligands, degenerate d-orbitals split into $t_{2g}$ and $e_g$ levels. Promotion of an electron from $t_{2g}$ to $e_g$ absorbs light in the visible spectrum; the complementary color is observed."
        ],
        "questions": [
          {
            "type": "Short Reasoning Set [5M]",
            "year": "2080 Set A, Set B & 2080 Re-exam",
            "question": "(a) Explain why compounds of zinc are colourless. (b) Mention the possible oxidation numbers of Mn. (c) Most transition elements show paramagnetic behavior, why? (d) $Fe^{3+}$ is more stable than $Fe^{2+}$, why? (e) Explain why $[Fe(H_2O)_6]^{2+}$ ion is coloured.",
            "answer": "(a) In $Zn^{2+}$, the 3d subshell is completely filled ($3d^{10}$). Because there are no vacant or half-filled d-orbitals, d-d electron transitions cannot occur upon absorbing visible light, so compounds are colourless.\n(b) Manganese ($[Ar]3d^5 4s^2$) shows oxidation states: $+2, +3, +4, +5, +6, \\text{and } +7$.\n(c) Most transition metals have one or more unpaired electrons in their (n-1)d orbitals, which produce individual magnetic moments resulting in paramagnetic attraction.\n(d) Electronic configuration of $Fe^{2+}$ is $[Ar]3d^6$, while $Fe^{3+}$ is $[Ar]3d^5$. The half-filled $3d^5$ configuration has higher exchange energy and symmetrical charge distribution, making $Fe^{3+}$ much more stable.\n(e) In the octahedral complex $[Fe(H_2O)_6]^{2+}$, water molecules split the five 3d orbitals into lower $t_{2g}$ and higher $e_g$ sets. Visible light excites an electron across this energy gap ($d-d$ transition), and the non-absorbed complementary light gives the ion its characteristic pale green colour."
          }
        ]
      },
      {
        "id": "chem-cu",
        "title": "Copper Metallurgy & Chemistry of Blue Vitriol",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2080 Set A",
          "2080 Set B",
          "2080 Re-exam",
          "2079 Set B"
        ],
        "weightage": "5 - 8 Marks",
        "summary": "Extraction of copper from copper pyrites ($CuFeS_2$), smelting, formation of matte ($Cu_2S + FeS$), Bessemerization, blister copper ($98%$ pure, blistered by escaping $SO_2$ gas), and chemistry of Blue Vitriol ($CuSO_4\\cdot 5H_2O$) including action of heat and Schweitzer's reagent.",
        "keyConcepts": [
          "Matte: Molten mixture of cuprous sulphide and ferrous sulphide ($Cu_2S + FeS$) obtained after smelting.",
          "Blister Copper: The solidified copper obtained from Bessemer converter containing $\\approx 98%$ Cu. Its blistered surface appearance is caused by dissolved $SO_2$ gas escaping during cooling.",
          "Action of Heat on Blue Vitriol: $CuSO_4 \\cdot 5H_2O \\xrightarrow{100^\\circ C} CuSO_4 \\cdot H_2O \\xrightarrow{230^\\circ C} \\text{Anhydrous } CuSO_4 \\text{ (White)} \\xrightarrow{720^\\circ C} CuO + SO_2 + O_2$.",
          "Schweitzer's Reagent: Deep blue tetraamminecopper(II) hydroxide $[Cu(NH_3)_4](OH)_2$ formed by adding excess ammonia to $CuSO_4$. Used as a solvent for cellulose in rayon manufacture."
        ],
        "questions": [
          {
            "type": "Short Question [3M]",
            "year": "2080 Set A, Set B & 2083 Hostel",
            "question": "(a) Write a short note on 'Chemistry of Blue Vitriol' including action of heat. (b) What is blister copper? Explain why it gets blisters.",
            "answer": "(a) Blue vitriol is copper(II) sulphate pentahydrate ($CuSO_4\\cdot 5H_2O$). Four water molecules are coordinated to $Cu^{2+}$ and one is hydrogen bonded to sulphate. On heating at $100^\\circ C$, it loses 4 molecules of water to form pale blue monohydrate $CuSO_4\\cdot H_2O$. At $230^\\circ C$, it loses all water of crystallization to yield anhydrous white $CuSO_4$. On heating above $720^\\circ C$, it decomposes into black cupric oxide ($CuO$), $SO_2$ and $O_2$.\n(b) Blister copper is crude copper ($\\approx 98\\%$ pure) obtained at the end of Bessemerization during copper extraction. As molten copper solidifies, dissolved sulphur dioxide ($SO_2$) gas escapes vigorously from the interior, forming bubbles and blisters on the surface of the solidified metal ingot."
          }
        ]
      },
      {
        "id": "chem-halo",
        "title": "Haloalkanes & Haloarenes",
        "repetitionCount": 5,
        "years": [
          "2083 Hostel",
          "2080 Set A",
          "2080 Set B",
          "2080 Re-exam",
          "2079 Set B"
        ],
        "weightage": "7 - 10 Marks",
        "summary": "Chloroform reactions (preparation, oxidation into phosgene $COCl_2$ and storage with $1%$ ethanol, tear gas chloropicrin $Cl_3C-NO_2$, chloretone, Reimer-Tiemann reaction), chlorobenzene low reactivity towards nucleophilic substitution, Dow process, Sandmeyer reaction, and Wurtz-Fittig reaction.",
        "keyConcepts": [
          "Chlorobenzene Low Reactivity: (1) Resonance effect: Delocalization of lone pair of chlorine gives partial double bond character to C-Cl bond. (2) $sp^2$ hybrid carbon: More electronegative than $sp^3$, holding C-Cl bond shorter and tighter. (3) Instability of phenyl cation.",
          "Chloroform Storage: Chloroform slowly oxidizes in air and sunlight into highly poisonous phosgene ($2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$). It is stored in dark amber, airtight bottles filled to the brim with $1%$ ethanol, which retards oxidation and converts any phosgene into harmless diethyl carbonate: $COCl_2 + 2C_2H_5OH \\to (C_2H_5O)_2CO + 2HCl$.",
          "Tear Gas (Chloropicrin): Chloroform heated with conc. $HNO_3$: $CHCl_3 + HNO_3 \\to Cl_3C-NO_2 + H_2O$.",
          "Chloretone (Hypnotic Drug): Chloroform reacts with acetone in presence of $KOH$: $CH_3COCH_3 + CHCl_3 \\to (CH_3)_2C(OH)CCl_3$."
        ],
        "questions": [
          {
            "type": "Reaction & Conversion Set [5M]",
            "year": "2083 Hostel & 2079 Set B",
            "question": "(a) Chlorobenzene is less reactive than chloroethane towards nucleophilic substitution. Why? (b) An organic compound (A) reacts with acetone to produce a sleep-inducing drug. (i) Identify (A). (ii) Why is (A) stored in airtight bottle by adding 1% ethanol? (iii) What happens when (A) is heated with conc. $HNO_3$?",
            "answer": "(a) In chlorobenzene, the lone pair on chlorine enters into resonance with the benzene ring, imparting partial double bond character to the C-Cl bond, making it shorter and much stronger than the pure single C-Cl bond in chloroethane. Additionally, the carbon atom attached to chlorine is $sp^2$ hybridized (more electronegative), strengthening the bond further.\n(b) (i) Compound (A) is Chloroform ($CHCl_3$). It condenses with acetone in KOH to form Chloretone, a hypnotic (sleep-inducing) drug.\n(ii) In sunlight and air, chloroform oxidizes to poisonous phosgene gas ($COCl_2$). Adding $1%$ ethanol retards oxidation and converts any traces of formed phosgene into non-toxic diethyl carbonate.\n(iii) When heated with concentrated $HNO_3$, chloroform undergoes nitration to form Chloropicrin (tear gas, $CCl_3NO_2$): $CHCl_3 + HNO_3 \\to CCl_3NO_2 + H_2O$."
          }
        ]
      },
      {
        "id": "chem-alc",
        "title": "Alcohols & Victor Meyer's Method",
        "repetitionCount": 3,
        "years": [
          "2083 Hostel",
          "2081 Sol",
          "2079 Set B"
        ],
        "weightage": "5 - 7 Marks",
        "summary": "Distinction of primary ($1^\\circ$), secondary ($2^\\circ$), and tertiary ($3^\\circ$) alcohols using Victor Meyer's method (Red, Blue, Colorless - RBC mnemonic), Lucas test, Saytzeff rule, and Williamson's ether synthesis.",
        "keyConcepts": [
          "Victor Meyer's Method: Alcohol $\\xrightarrow{P/I_2}$ Alkyl iodide $\\xrightarrow{AgNO_2}$ Nitroalkane $\\xrightarrow{HNO_2}$ Treated with alkali ($NaOH$).",
          "$1^\\circ$ Alcohol $\\to$ Nitrolic acid $\\to$ Blood RED color with $NaOH$.",
          "$2^\\circ$ Alcohol $\\to$ Pseudonitrol $\\to$ Deep BLUE color with $NaOH$.",
          "$3^\\circ$ Alcohol $\\to$ No reaction with $HNO_2$ (lacks $\\alpha$-hydrogen) $\\to$ COLORLESS.",
          "Williamson's Ether Synthesis: Alkyl halide + sodium alkoxide $\\to$ Ether ($R-X + R'-ONa \\to R-O-R' + NaX$)."
        ],
        "questions": [
          {
            "type": "Short Question [3M]",
            "year": "2083 Hostel & 2079 Set B",
            "question": "How can you distinguish ethanol (1°), propan-2-ol (2°), and 2-methylpropan-2-ol (3°) by Victor Meyer's method?",
            "answer": "Step 1: Convert each alcohol to alkyl iodide using $P + I_2$.\nStep 2: React with $AgNO_2$ to form the corresponding nitroalkane.\nStep 3: Treat with nitrous acid ($NaNO_2 + dil. HCl$) and make alkaline with $NaOH$.\nResults:\n- Ethanol ($1^\\circ$) forms nitrolic acid, which with NaOH produces a distinct BLOOD RED colour.\n- Propan-2-ol ($2^\\circ$) forms pseudonitrol, which gives an intense BLUE colour with NaOH.\n- 2-Methylpropan-2-ol ($3^\\circ$) has no hydrogen on the carbinol carbon, does not react with $HNO_2$, and remains completely COLOURLESS."
          }
        ]
      }
    ],
    "maths": [
      {
        "id": "math-der-mvt",
        "title": "Derivatives, Tangents & Mean Value Theorems (Rolle's & LMVT)",
        "repetitionCount": 6,
        "years": [
          "KMC 2079 Set A",
          "KMC 2080 Set A",
          "KMC 2081 Set B",
          "KMC 2082 Set A",
          "KMC 2083 Hostel"
        ],
        "weightage": "12 - 16 Marks",
        "summary": "First principle derivatives of inverse trigonometric functions, tangents and normals ($y - y_1 = m(x - x_1)$), angle between intersecting curves, and geometric conditions for Rolle's Theorem and Lagrange's Mean Value Theorem (LMVT).",
        "keyConcepts": [
          "Derivative of Implicit Symmetry: If $x^p y^q = (x+y)^{p+q}$, then $\\frac{dy}{dx} = \\frac{y}{x}$ always, regardless of powers $p$ and $q$!",
          "Tangents parallel to x-axis occur where slope $m = \\frac{dy}{dx} = 0$. Parallel to y-axis where $\\frac{dx}{dy} = 0$.",
          "Angle between intersecting curves: Find slopes $m_1$ and $m_2$ at the intersection point. $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$. Orthogonal if $m_1 m_2 = -1$.",
          "Rolle's Theorem: $f(x)$ must be (1) continuous on $[a, b]$, (2) differentiable on $(a, b)$, and (3) $f(a) = f(b)$. Then there exists at least one $c \\in (a, b)$ where $f'(c) = 0$.",
          "Rolle's Trap: $f(x) = \\frac{1}{x^2-1}$ on $[-2, 2]$ has $f(-2) = f(2) = 1/3$, but Rolle's theorem CANNOT be applied because $f(x)$ is discontinuous at $x = \\pm 1$!"
        ],
        "questions": [
          {
            "type": "Short Question (3 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Find from first principles the derivative of $\\ln(\\cos^{-1} x)$.",
            "answer": "Let $y = \\ln(\\cos^{-1} x)$ and let $\\delta x$ produce increment $\\delta y$ in $y$:\n$y + \\delta y = \\ln(\\cos^{-1}(x + \\delta x))$.\n\nLet $u = \\cos^{-1} x \\implies x = \\cos u$, and $u + \\delta u = \\cos^{-1}(x + \\delta x) \\implies x + \\delta x = \\cos(u + \\delta u)$.\nSo $\\delta x = \\cos(u + \\delta u) - \\cos u = -2\\sin\\left(u + \\frac{\\delta u}{2}\\right)\\sin\\left(\\frac{\\delta u}{2}\\right)$.\nAs $\\delta x \\to 0$, $\\delta u \\to 0$.\n\n$\\frac{dy}{dx} = \\lim_{\\delta x \\to 0} \\frac{\\delta y}{\\delta x} = \\lim_{\\delta u \\to 0} \\frac{\\ln(u + \\delta u) - \\ln u}{\\delta u} \\times \\lim_{\\delta x \\to 0} \\frac{\\delta u}{\\delta x}$\n$= \\frac{1}{u} \\times \\lim_{\\delta u \\to 0} \\frac{\\delta u}{-2\\sin(u + \\delta u/2)\\sin(\\delta u/2)}$\n$= \\frac{1}{\\cos^{-1} x} \\times \\frac{-1}{\\sin u} = \\frac{-1}{\\cos^{-1} x \\cdot \\sqrt{1 - \\cos^2 u}} = -\\frac{1}{\\sqrt{1 - x^2}\\cos^{-1} x}$."
          },
          {
            "type": "Long Question (4 Marks)",
            "year": "KMC 2079 Set A & 2082 Set A",
            "question": "State Rolle's theorem and give its geometrical interpretation. Is Rolle's theorem applicable to the function $f(x) = \\frac{1}{x^2 - 1}$ in the interval $[-2, 2]$? Justify your answer.",
            "answer": "Statement: If a real-valued function $f(x)$ is:\n1) Continuous on the closed interval $[a, b]$,\n2) Differentiable on the open interval $(a, b)$, and\n3) $f(a) = f(b)$,\nthen there exists at least one point $c \\in (a, b)$ such that $f'(c) = 0$.\n\nGeometrical Interpretation: It means that between two points on a smooth continuous curve with equal heights, there is at least one point where the tangent line is completely horizontal (parallel to the x-axis).\n\nApplicability to $f(x) = \\frac{1}{x^2 - 1}$ on $[-2, 2]$:\nHere $f(-2) = \\frac{1}{4 - 1} = \\frac{1}{3}$ and $f(2) = \\frac{1}{4 - 1} = \\frac{1}{3}$, so $f(-2) = f(2)$.\nHowever, the denominator $x^2 - 1 = 0$ at $x = 1$ and $x = -1$, both of which lie strictly inside the interval $[-2, 2]$. Thus $f(x)$ is discontinuous and undefined at $x = \\pm 1$.\nSince the first hypothesis of continuity on $[-2, 2]$ fails, Rolle's theorem is NOT applicable."
          },
          {
            "type": "Short Question (3 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Find the angle of intersection of the curves $x^2 = y$ and $y^2 = x$.",
            "answer": "Step 1: Find points of intersection:\nSubstitute $y = x^2$ into $y^2 = x \\implies (x^2)^2 = x \\implies x^4 - x = 0 \\implies x(x^3 - 1) = 0$.\nSo $x = 0$ (giving $(0, 0)$) and $x = 1$ (giving $(1, 1)$).\n\nStep 2: Find derivatives (slopes):\nFor $y = x^2$: $m_1 = \\frac{dy}{dx} = 2x$.\nFor $y^2 = x$: $2y\\frac{dy}{dx} = 1 \\implies m_2 = \\frac{dy}{dx} = \\frac{1}{2y}$.\n\nAt $(0, 0)$: $m_1 = 0$ (horizontal tangent) and $m_2 = \\infty$ (vertical tangent). Hence the curves intersect at right angle: $\\theta = 90^\\circ = \\frac{\\pi}{2}$.\n\nAt $(1, 1)$: $m_1 = 2(1) = 2$ and $m_2 = \\frac{1}{2(1)} = \\frac{1}{2}$.\n$\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = \\left|\\frac{2 - 1/2}{1 + 2(1/2)}\\right| = \\left|\\frac{3/2}{2}\\right| = \\frac{3}{4} \\implies \\theta = \\tan^{-1}\\left(\\frac{3}{4}\\right)$."
          }
        ]
      },
      {
        "id": "math-bin-ser",
        "title": "Binomial Theorem & Exponential / Logarithmic Series",
        "repetitionCount": 5,
        "years": [
          "KMC 2079 Set A",
          "KMC 2080 Set B",
          "KMC 2081 Set A",
          "KMC 2082 Set A"
        ],
        "weightage": "8 - 12 Marks",
        "summary": "General and middle terms in binomial expansion, properties of binomial coefficients, and summation of infinite exponential ($e$) and logarithmic ($\\ln$) series.",
        "keyConcepts": [
          "Middle Term of $(x - 1/x)^{2n}$: Since power is even $2n$, there is one middle term: $T_{n+1} = \\binom{2n}{n}x^{2n-n}(-1/x)^n = \\frac{1 \\cdot 3 \\cdot 5 \\dots (2n-1)}{n!}(-2)^n$.",
          "Exponential Series: $e^x = 1 + \\frac{x}{1!} + \\frac{x^2}{2!} + \\dots$. So $\\frac{e + e^{-1}}{2} = 1 + \\frac{1}{2!} + \\frac{1}{4!} + \\dots$, and $\\frac{e - e^{-1}}{2} = \\frac{1}{1!} + \\frac{1}{3!} + \\frac{1}{5!} + \\dots$.",
          "Ratio identity: $\\frac{1/2! + 1/4! + 1/6! + \\dots}{1/1! + 1/3! + 1/5! + \\dots} = \\frac{\\cosh(1) - 1}{\\sinh(1)} = \\frac{e - 1}{e + 1}$.",
          "Logarithmic Series: $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots$ for $|x| < 1$. Also $\\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right) = x + \\frac{x^3}{3} + \\frac{x^5}{5} + \\dots$."
        ],
        "questions": [
          {
            "type": "Short Question (3 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Show that $1 + \\frac{1+3}{2!} + \\frac{1+3+5}{3!} + \\dots = 2e$.",
            "answer": "Step 1: Find the general $n^{\\text{th}}$ term $T_n$:\nThe numerator is the sum of first $n$ odd numbers: $1 + 3 + 5 + \\dots + (2n-1) = n^2$.\nThe denominator is $n!$.\nSo $T_n = \\frac{n^2}{n!} = \\frac{n(n-1) + n}{n!} = \\frac{n(n-1)}{n(n-1)(n-2)!} + \\frac{n}{n(n-1)!} = \\frac{1}{(n-2)!} + \\frac{1}{(n-1)!}$.\n\nStep 2: Sum from $n = 1$ to $\\infty$:\n$\\sum_{n=1}^\\infty T_n = \\sum_{n=2}^\\infty \\frac{1}{(n-2)!} + \\sum_{n=1}^\\infty \\frac{1}{(n-1)!}$\n$= \\left(1 + \\frac{1}{1!} + \\frac{1}{2!} + \\dots\\right) + \\left(1 + \\frac{1}{1!} + \\frac{1}{2!} + \\dots\\right) = e + e = 2e$."
          },
          {
            "type": "Long Question (4 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Show that the middle term in the expansion of $\\left(x - \\frac{1}{x}\\right)^{2n}$ is $\\frac{1 \\cdot 3 \\cdot 5 \\dots (2n-1)}{n!}(-2)^n$.",
            "answer": "In the expansion of $\\left(x - \\frac{1}{x}\\right)^{2n}$, the index $2n$ is even. Hence the number of terms is $2n + 1$ (odd), and there is exactly one middle term, which is the $\\left(\\frac{2n}{2} + 1\\right)^{\\text{th}} = (n + 1)^{\\text{th}}$ term.\n\n$T_{n+1} = \\binom{2n}{n} x^{2n - n} \\left(-\\frac{1}{x}\\right)^n = \\binom{2n}{n} x^n \\frac{(-1)^n}{x^n} = (-1)^n \\frac{(2n)!}{n! \\, n!}$.\n\nExpand $(2n)! = [1 \\cdot 3 \\cdot 5 \\dots (2n-1)] \\times [2 \\cdot 4 \\cdot 6 \\dots 2n]$\n$= [1 \\cdot 3 \\cdot 5 \\dots (2n-1)] \\times 2^n [1 \\cdot 2 \\cdot 3 \\dots n] = [1 \\cdot 3 \\cdot 5 \\dots (2n-1)] \\times 2^n \\, n!$.\n\nSubstitute back:\n$T_{n+1} = (-1)^n \\frac{[1 \\cdot 3 \\cdot 5 \\dots (2n-1)] \\times 2^n \\, n!}{n! \\, n!} = \\frac{1 \\cdot 3 \\cdot 5 \\dots (2n-1)}{n!} (-2)^n$."
          }
        ]
      },
      {
        "id": "math-3d-geom",
        "title": "3D Geometry & Vectors (Planes, Direction Cosines & Lines)",
        "repetitionCount": 5,
        "years": [
          "KMC 2079 Set A",
          "KMC 2080 Set A",
          "KMC 2081 Set A",
          "KMC 2083 Hostel"
        ],
        "weightage": "8 - 12 Marks",
        "summary": "Direction cosines ($l, m, n$) and direction ratios ($a, b, c$), angle between lines, equation of planes passing through given points or intercepts, and perpendicular distance from origin.",
        "keyConcepts": [
          "Direction Cosines: $l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma$. Always satisfy $l^2 + m^2 + n^2 = 1$.",
          "Line equally inclined to axes: $\\alpha = \\beta = \\gamma \\implies l = m = n$. Since $3l^2 = 1$, $l = m = n = \\pm \\frac{1}{\\sqrt{3}}$.",
          "Angle between lines with d.r. $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$: $\\cos\\theta = \\frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}}$.",
          "Plane with equal intercepts: $\\frac{x}{a} + \\frac{y}{a} + \\frac{z}{a} = 1 \\implies x + y + z = a$. Perpendicular distance from $(0, 0, 0)$ is $p = \\frac{|a|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{a}{\\sqrt{3}}$."
        ],
        "questions": [
          {
            "type": "Long Question (4 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Find the equation of the plane which makes equal intercepts on the coordinate axes and passes through the point $(2, 3, 4)$. Also find the length of the perpendicular from the origin to this plane.",
            "answer": "Step 1: Intercept form of plane equation:\nLet the equal intercepts on $x, y, z$ axes be $a$. Equation of the plane is:\n$\\frac{x}{a} + \\frac{y}{a} + \\frac{z}{a} = 1 \\implies x + y + z = a$.\n\nStep 2: Since it passes through $(2, 3, 4)$:\n$2 + 3 + 4 = a \\implies a = 9$.\nTherefore, equation of plane is $x + y + z = 9$ (or $x + y + z - 9 = 0$).\n\nStep 3: Length of perpendicular from origin $(0, 0, 0)$:\n$p = \\frac{|0 + 0 + 0 - 9|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}$ units."
          },
          {
            "type": "Short Question (2 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Find the equation of the plane passing through $(1, 1, 0)$, $(-2, 2, -1)$, and $(1, 2, 1)$.",
            "answer": "General equation of plane through $(x_1, y_1, z_1) = (1, 1, 0)$:\n$A(x - 1) + B(y - 1) + C(z - 0) = 0$ ... (1)\n\nPassing through $(-2, 2, -1)$:\n$A(-2 - 1) + B(2 - 1) + C(-1 - 0) = 0 \\implies -3A + B - C = 0$ ... (2)\n\nPassing through $(1, 2, 1)$:\n$A(1 - 1) + B(2 - 1) + C(1 - 0) = 0 \\implies 0A + B + C = 0 \\implies B = -C$ ... (3)\n\nFrom (2): $-3A - C - C = 0 \\implies -3A = 2C \\implies A = -\\frac{2}{3}C$.\n\nSubstitute into (1):\n$-\\frac{2}{3}C(x - 1) - C(y - 1) + C(z) = 0 \\implies -2(x - 1) - 3(y - 1) + 3z = 0$\n$-2x + 2 - 3y + 3 + 3z = 0 \\implies 2x + 3y - 3z - 5 = 0$."
          }
        ]
      },
      {
        "id": "math-conics",
        "title": "Conic Sections (Ellipse & Hyperbola)",
        "repetitionCount": 4,
        "years": [
          "KMC 2079 Set A",
          "KMC 2081 Set B",
          "KMC 2082 Set A"
        ],
        "weightage": "6 - 8 Marks",
        "summary": "Focus-directrix definition ($SP = e cdot PM$), condition for a line $y = mx + c$ to touch an ellipse ($c^2 = a^2 m^2 + b^2$), and standard equations of ellipse and hyperbola.",
        "keyConcepts": [
          "Conic Definition: Locus of point $P$ whose distance from focus $S$ bears a constant ratio $e$ (eccentricity) to distance from directrix $M$: $SP = e cdot PM$.",
          "Eccentricity values: Parabola $e = 1$; Ellipse $0 < e < 1$; Hyperbola $e > 1$; Circle $e = 0$.",
          "Condition for tangency to ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: The line $y = mx + c$ is a tangent if and only if $c = \\pm\\sqrt{a^2 m^2 + b^2}$."
        ],
        "questions": [
          {
            "type": "Long Question (4 Marks)",
            "year": "KMC 2079 Set A",
            "question": "Find the equation of the ellipse whose focus is $(2, 5)$, directrix is $x + y = 1$, and eccentricity is $e = \\frac{2}{3}$.",
            "answer": "Let $P(x, y)$ be any point on the ellipse.\nDistance from focus $S(2, 5)$:\n$SP = \\sqrt{(x - 2)^2 + (y - 5)^2} \\implies SP^2 = (x - 2)^2 + (y - 5)^2$.\n\nPerpendicular distance from directrix $x + y - 1 = 0$:\n$PM = \\frac{|x + y - 1|}{\\sqrt{1^2 + 1^2}} = \\frac{|x + y - 1|}{\\sqrt{2}} \\implies PM^2 = \\frac{(x + y - 1)^2}{2}$.\n\nBy definition of conic, $SP = e \\cdot PM \\implies SP^2 = e^2 \\cdot PM^2$:\n$(x - 2)^2 + (y - 5)^2 = \\left(\\frac{2}{3}\\right)^2 \\frac{(x + y - 1)^2}{2} = \\frac{4}{9} \\times \\frac{(x + y - 1)^2}{2} = \\frac{2}{9}(x + y - 1)^2$.\n\n$9[(x^2 - 4x + 4) + (y^2 - 10y + 25)] = 2[x^2 + y^2 + 1 + 2xy - 2x - 2y]$\n$9[x^2 + y^2 - 4x - 10y + 29] = 2x^2 + 2y^2 + 4xy - 4x - 4y + 2$\n$9x^2 + 9y^2 - 36x - 90y + 261 - 2x^2 - 2y^2 - 4xy + 4x + 4y - 2 = 0$\n$7x^2 - 4xy + 7y^2 - 32x - 86y + 259 = 0$."
          }
        ]
      },
      {
        "id": "math-perm-comb",
        "title": "Permutations & Combinations",
        "repetitionCount": 4,
        "years": [
          "KMC 2079 Set A",
          "KMC 2081 Set B",
          "KMC 2082 Set A"
        ],
        "weightage": "5 - 7 Marks",
        "summary": "Fundamental principle of counting, restricted permutations (vowels together / separate), committee selection under conditions, and relation between $P(n, r)$ and $C(n, r)$.",
        "keyConcepts": [
          "Relation: $P(n, r) = r! \\times C(n, r)$. Therefore $r! = \\frac{P(n, r)}{C(n, r)}$.",
          "Numbers with distinct digits: For a 9-digit number, first digit cannot be 0 (9 choices: 1-9). The remaining 8 digits are chosen from the remaining 9 digits (including 0): $P(9, 8) = 9!$. Total = $9 \\times 9!$."
        ],
        "questions": [
          {
            "type": "Short Question (2 Marks)",
            "year": "KMC 2079 Set A",
            "question": "In how many ways can a committee of 8 members be selected from 8 gentlemen and 6 ladies if the committee is to include at most two ladies?",
            "answer": "Total committee size = 8 members. 'At most two ladies' means 0 ladies, 1 lady, or 2 ladies:\n- Case 1: 0 Ladies and 8 Gentlemen: $\\binom{6}{0} \\times \\binom{8}{8} = 1 \\times 1 = 1$.\n- Case 2: 1 Lady and 7 Gentlemen: $\\binom{6}{1} \\times \\binom{8}{7} = 6 \\times 8 = 48$.\n- Case 3: 2 Ladies and 6 Gentlemen: $\\binom{6}{2} \\times \\binom{8}{6} = 15 \\times 28 = 420$.\n\nTotal number of ways = $1 + 48 + 420 = 469$ ways."
          }
        ]
      },
      {
        "id": "math-integ",
        "title": "Integration Techniques & Definite Integrals",
        "repetitionCount": 4,
        "years": [
          "KMC 2079 Set A",
          "KMC 2081 Set A",
          "KMC 2082 Set A"
        ],
        "weightage": "6 - 8 Marks",
        "summary": "Integration by substitution, integration by parts, relationship between differentiation and integration, and definite integral properties.",
        "keyConcepts": [
          "Fundamental Relationship: $\\int f'(x) [f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1} + C$.",
          "For $n = 1/2$: $\\int f'(x)\\sqrt{f(x)},dx = \\frac{2}{3}[f(x)]^{3/2} + C$.",
          "Symmetric limit shortcut: If $f(x)$ is odd, $\\int_{-a}^a f(x)dx = 0$."
        ],
        "questions": [
          {
            "type": "Short Question (2 Marks)",
            "year": "KMC 2079 Set A",
            "question": "What is the relationship between differentiation and integration? Evaluate $\\int f'(x)\\sqrt{f(x)},dx$.",
            "answer": "Relationship: Integration is the reverse process (anti-derivative) of differentiation. That is, if $\\frac{d}{dx}[F(x)] = f(x)$, then $\\int f(x),dx = F(x) + C$.\n\nEvaluation of $\\int f'(x)\\sqrt{f(x)},dx$:\nLet $u = f(x) \\implies du = f'(x),dx$.\n$\\int f'(x)\\sqrt{f(x)},dx = \\int \\sqrt{u},du = \\int u^{1/2},du = \\frac{u^{3/2}}{3/2} + C = \\frac{2}{3}[f(x)]^{3/2} + C$."
          }
        ]
      }
    ]
  },
  "mcqs": {
    "exam": [
      {
        "id": "phy-mcq-1",
        "subject": "Physics",
        "topic": "Simple Harmonic Motion",
        "year": "KMC 2083 Hostel",
        "question": "A particle executes SHM with amplitude $A$. At what displacement from the mean position is its kinetic energy equal to its potential energy?",
        "options": [
          "$y = A / 2$",
          "$y = A / \\sqrt{2}$",
          "$y = A / \\sqrt{3}$",
          "$y = A$"
        ],
        "correct": 1,
        "explanation": "Kinetic energy $KE = \\frac{1}{2}m\\omega^2(A^2 - y^2)$ and Potential energy $PE = \\frac{1}{2}m\\omega^2 y^2$. Setting $KE = PE$ gives $A^2 - y^2 = y^2 \\implies 2y^2 = A^2 \\implies y = \\frac{A}{\\sqrt{2}}$."
      },
      {
        "id": "phy-mcq-2",
        "subject": "Physics",
        "topic": "Simple Harmonic Motion",
        "year": "KMC 2082 Set A",
        "question": "The time period of a simple pendulum inside an elevator falling freely under gravity is:",
        "options": [
          "Zero",
          "Finite and non-zero",
          "Infinite",
          "Equal to $2\\pi\\sqrt{l/g}$"
        ],
        "correct": 2,
        "explanation": "During free fall, the effective acceleration due to gravity is $g_{eff} = g - g = 0$. Since $T = 2\\pi\\sqrt{l/g_{eff}}$, dividing by zero gives $T = \\infty$ (the pendulum does not oscillate)."
      },
      {
        "id": "phy-mcq-3",
        "subject": "Physics",
        "topic": "Rotational Dynamics",
        "year": "KMC 2081 Set B",
        "question": "A solid sphere and a hollow sphere of identical mass and radius roll down the same inclined plane without slipping. Which reaches the bottom first?",
        "options": [
          "The solid sphere",
          "The hollow sphere",
          "Both reach simultaneously",
          "Depends on the angle of inclination"
        ],
        "correct": 0,
        "explanation": "Linear acceleration on an incline is $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$. For a solid sphere, $I = \\frac{2}{5}mR^2$ ($a = \\frac{5}{7}g\\sin\\theta$). For a hollow sphere, $I = \\frac{2}{3}mR^2$ ($a = \\frac{3}{5}g\\sin\\theta$). Since $\\frac{5}{7} > \\frac{3}{5}$, the solid sphere has greater acceleration and reaches the bottom first."
      },
      {
        "id": "phy-mcq-4",
        "subject": "Physics",
        "topic": "Rotational Dynamics",
        "year": "KMC 2080 Set A",
        "question": "A ballet dancer folds her outstretched arms while spinning on frictionless toes. What happens to her angular velocity and kinetic energy?",
        "options": [
          "Angular velocity increases, kinetic energy increases",
          "Angular velocity increases, kinetic energy decreases",
          "Angular velocity decreases, kinetic energy remains constant",
          "Both angular velocity and kinetic energy remain constant"
        ],
        "correct": 0,
        "explanation": "By conservation of angular momentum ($L = I\\omega = \\text{const}$), folding arms decreases $I$, so $\\omega$ increases. Rotational kinetic energy is $K = \\frac{L^2}{2I}$. As $I$ decreases while $L$ is constant, $K$ increases because the dancer performs internal muscular work."
      },
      {
        "id": "phy-mcq-5",
        "subject": "Physics",
        "topic": "Wave Motion & Sound",
        "year": "KMC 2079 Set B",
        "question": "Laplace corrected Newton's formula for the speed of sound in a gas by assuming that sound propagation is:",
        "options": [
          "An isothermal process",
          "An adiabatic process",
          "An isobaric process",
          "An isochoric process"
        ],
        "correct": 1,
        "explanation": "Laplace pointed out that compressions and rarefactions occur so rapidly that heat does not have enough time to exchange with the surroundings, making the process strictly adiabatic. This replaced isothermal elasticity $P$ with adiabatic elasticity $\\gamma P$, giving $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$."
      },
      {
        "id": "phy-mcq-6",
        "subject": "Physics",
        "topic": "Acoustics & Organ Pipes",
        "year": "KMC 2082 Set B",
        "question": "An open organ pipe of length $L_1$ and a closed organ pipe of length $L_2$ vibrate in their respective fundamental modes with the same frequency. The ratio $L_1 : L_2$ is:",
        "options": [
          "$1 : 1$",
          "$2 : 1$",
          "$1 : 2$",
          "$4 : 1$"
        ],
        "correct": 1,
        "explanation": "Fundamental frequency for an open pipe is $f_o = \\frac{v}{2L_1}$. For a closed pipe, $f_c = \\frac{v}{4L_2}$. Given $f_o = f_c \\implies \\frac{v}{2L_1} = \\frac{v}{4L_2} \\implies 2L_1 = 4L_2 \\implies \\frac{L_1}{L_2} = \\frac{2}{1}$."
      },
      {
        "id": "phy-mcq-7",
        "subject": "Physics",
        "topic": "Physical Optics (Interference)",
        "year": "KMC 2083 Set A",
        "question": "In Young's double slit experiment, if the entire apparatus is immersed in water (refractive index $\\mu = 4/3$), the fringe width $\\beta$ will:",
        "options": [
          "Increase by 1.33 times",
          "Decrease to $3/4$ of its original value",
          "Remain completely unchanged",
          "Disappear completely"
        ],
        "correct": 1,
        "explanation": "Fringe width is $\\beta = \\frac{\\lambda D}{d}$. In water, the wavelength decreases: $\\lambda' = \\frac{\\lambda}{\\mu}$. Therefore, $\\beta' = \\frac{\\beta}{\\mu} = \\frac{\\beta}{4/3} = \\frac{3}{4}\\beta$."
      },
      {
        "id": "phy-mcq-8",
        "subject": "Physics",
        "topic": "Physical Optics (Diffraction)",
        "year": "KMC 2081 Set A",
        "question": "In single slit Fraunhofer diffraction, the angular half-width of the central maximum is:",
        "options": [
          "$\\lambda / a$",
          "$2\\lambda / a$",
          "$a / \\lambda$",
          "$\\lambda / (2a)$"
        ],
        "correct": 0,
        "explanation": "The first diffraction minimum occurs at $a\\sin\\theta = \\lambda$. For small angles, $\\sin\\theta \\approx \\theta = \\frac{\\lambda}{a}$. This is the angular half-width of the central bright maximum (the total angular width is $2\\theta = \\frac{2\\lambda}{a}$)."
      },
      {
        "id": "phy-mcq-9",
        "subject": "Physics",
        "topic": "Modern Physics (Photoelectric Effect)",
        "year": "KMC 2082 Set A",
        "question": "When the intensity of incident light on a photosensitive metal is doubled while keeping frequency constant, which of the following quantities doubles?",
        "options": [
          "Maximum kinetic energy of photoelectrons",
          "Stopping potential",
          "Photoelectric saturation current",
          "Threshold frequency"
        ],
        "correct": 2,
        "explanation": "Photoelectric current is directly proportional to the number of incident photons per second (intensity). Stopping potential and maximum kinetic energy depend solely on photon frequency ($hf - \\phi$), so they remain unchanged."
      },
      {
        "id": "phy-mcq-10",
        "subject": "Physics",
        "topic": "Modern Physics (De Broglie Waves)",
        "year": "KMC 2079 Set A",
        "question": "An electron and a proton have the same kinetic energy. The ratio of their de Broglie wavelengths $\\lambda_e / \\lambda_p$ is proportional to:",
        "options": [
          "$\\sqrt{m_p / m_e}$",
          "$\\sqrt{m_e / m_p}$",
          "$m_p / m_e$",
          "$1 : 1$"
        ],
        "correct": 0,
        "explanation": "The de Broglie wavelength in terms of kinetic energy is $\\lambda = \\frac{h}{\\sqrt{2mK}}$. For equal $K$, $\\lambda \\propto \\frac{1}{\\sqrt{m}}$. Therefore, $\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}}$."
      },
      {
        "id": "phy-mcq-11",
        "subject": "Physics",
        "topic": "Thermal Physics",
        "year": "KMC 2080 Set B",
        "question": "In an adiabatic expansion of an ideal gas, the work done by the gas ($W > 0$) is at the expense of its:",
        "options": [
          "Heat supplied from surroundings",
          "Internal energy",
          "Enthalpy only",
          "Pressure energy only"
        ],
        "correct": 1,
        "explanation": "From the first law of thermodynamics, $dQ = dU + dW$. In an adiabatic process, $dQ = 0 \\implies dW = -dU$. When the gas expands ($dW > 0$), internal energy decreases ($dU < 0$), causing the gas temperature to drop."
      },
      {
        "id": "phy-mcq-12",
        "subject": "Physics",
        "topic": "Thermal Physics",
        "year": "KMC 2083 Hostel",
        "question": "The efficiency of a Carnot engine operating between temperatures $T_1 = 500\\text{ K}$ and $T_2 = 300\\text{ K}$ is:",
        "options": [
          "$60\\%$",
          "$40\\%$",
          "$20\\%$",
          "$50\\%$"
        ],
        "correct": 1,
        "explanation": "Carnot efficiency is $\\eta = 1 - \\frac{T_2}{T_1} = 1 - \\frac{300}{500} = 1 - 0.6 = 0.40$ or $40\\%$."
      },
      {
        "id": "phy-mcq-13",
        "subject": "Physics",
        "topic": "Fluid Dynamics",
        "year": "KMC 2081 Set A",
        "question": "According to Bernoulli's equation for steady, non-viscous, incompressible fluid flow, which quantity remains constant along a streamline?",
        "options": [
          "$P + \\frac{1}{2}\\rho v^2 + \\rho g h$",
          "$P + \\rho v + \\rho g h$",
          "$P/\\rho + v^2 + g h$",
          "$P + \\rho v^2$"
        ],
        "correct": 0,
        "explanation": "Bernoulli's theorem states that the total energy per unit volume (static pressure energy $P$, kinetic energy $\\frac{1}{2}\\rho v^2$, and gravitational potential energy $\\rho g h$) is conserved along a streamline."
      },
      {
        "id": "phy-mcq-14",
        "subject": "Physics",
        "topic": "Fluid Dynamics (Viscosity)",
        "year": "KMC 2078 Set 1",
        "question": "A spherical rain drop falls through air. When it attains terminal velocity, its acceleration is:",
        "options": [
          "$g$",
          "$g / 2$",
          "Zero",
          "Increasing quadratically"
        ],
        "correct": 2,
        "explanation": "At terminal velocity, downward weight is completely balanced by the sum of upward buoyant force and viscous drag (Stokes' law: $6\\pi\\eta r v$). Net force is zero, hence acceleration is strictly zero."
      },
      {
        "id": "phy-mcq-15",
        "subject": "Physics",
        "topic": "Surface Tension",
        "year": "KMC 2082 Set B",
        "question": "Excess pressure inside a soap bubble of radius $R$ and surface tension $T$ suspended in air is:",
        "options": [
          "$2T / R$",
          "$4T / R$",
          "$T / R$",
          "$8T / R$"
        ],
        "correct": 1,
        "explanation": "A soap bubble has two free liquid-air surfaces (inner and outer). Excess pressure for each surface is $\\frac{2T}{R}$, giving total excess pressure $\\Delta P = \\frac{4T}{R}$."
      },
      {
        "id": "phy-mcq-16",
        "subject": "Physics",
        "topic": "Electrostatics",
        "year": "KMC 2080 Set A",
        "question": "The electric potential at any point inside a charged hollow spherical conductor of radius $R$ carrying charge $Q$ is:",
        "options": [
          "Zero",
          "$\\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{R}$",
          "$\\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r^2}$",
          "Variable depending on distance from centre"
        ],
        "correct": 1,
        "explanation": "Inside a charged hollow conductor, electric field $E = 0$. Since $E = -\\frac{dV}{dr} = 0$, potential $V$ is uniform throughout the interior and equals the potential at the surface: $V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{R}$."
      },
      {
        "id": "phy-mcq-17",
        "subject": "Physics",
        "topic": "Current Electricity",
        "year": "KMC 2081 Set B",
        "question": "A copper wire of resistance $R$ is stretched uniformly until its length is doubled ($L' = 2L$). Its new resistance is:",
        "options": [
          "$2R$",
          "$4R$",
          "$R / 2$",
          "$R / 4$"
        ],
        "correct": 1,
        "explanation": "When a wire is stretched, its volume $V = A L$ is constant. Doubling length ($L' = 2L$) halves cross-sectional area ($A' = A/2$). New resistance is $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{A/2} = 4\\rho \\frac{L}{A} = 4R$."
      },
      {
        "id": "phy-mcq-18",
        "subject": "Physics",
        "topic": "Magnetism",
        "year": "KMC 2079 Set A",
        "question": "A charged particle enters a uniform magnetic field perpendicularly. Which quantity remains constant during its circular motion?",
        "options": [
          "Velocity vector",
          "Linear momentum vector",
          "Kinetic energy",
          "Acceleration vector"
        ],
        "correct": 2,
        "explanation": "The magnetic Lorentz force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to velocity $\\vec{v}$. It does zero work ($W = 0$). Speed remains constant, so kinetic energy is strictly constant, even though velocity direction continuously changes."
      },
      {
        "id": "phy-mcq-19",
        "subject": "Physics",
        "topic": "Electromagnetic Induction",
        "year": "KMC 2082 Set A",
        "question": "Lenz's law of electromagnetic induction is a direct consequence of the law of conservation of:",
        "options": [
          "Charge",
          "Energy",
          "Linear momentum",
          "Angular momentum"
        ],
        "correct": 1,
        "explanation": "Lenz's law states that induced current opposes the change that produces it. Mechanical work done against this opposing magnetic force is transformed into electrical energy, satisfying the conservation of energy."
      },
      {
        "id": "phy-mcq-20",
        "subject": "Physics",
        "topic": "Alternating Current",
        "year": "KMC 2083 Set A",
        "question": "In a pure inductor circuit connected to an AC voltage $V = V_0\\sin(\\omega t)$, the current:",
        "options": [
          "Leads voltage by $\\pi/2$",
          "Lags voltage by $\\pi/2$",
          "Is in phase with voltage",
          "Lags voltage by $\\pi$"
        ],
        "correct": 1,
        "explanation": "In an inductive AC circuit, induced back-emf opposes current growth. The current equation is $I = I_0\\sin(\\omega t - \\pi/2)$, which means current lags behind voltage by a phase angle of $90^\\circ$ ($\\pi/2$ rad)."
      },
      {
        "id": "phy-mcq-21",
        "subject": "Physics",
        "topic": "Nuclear Physics",
        "year": "KMC 2080 Set B",
        "question": "The half-life of a radioactive isotope is 20 days. What fraction of the original sample remains undecayed after 60 days?",
        "options": [
          "$1 / 3$",
          "$1 / 6$",
          "$1 / 8$",
          "$1 / 16$"
        ],
        "correct": 2,
        "explanation": "Number of elapsed half-lives is $n = \\frac{60}{20} = 3$. Remaining fraction is $\\frac{N}{N_0} = \\left(\\frac{1}{2}\\right)^n = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$."
      },
      {
        "id": "phy-mcq-22",
        "subject": "Physics",
        "topic": "Semiconductors",
        "year": "KMC 2081 Set A",
        "question": "In an unbiased p-n junction diode, the depletion layer consists entirely of:",
        "options": [
          "Mobile electrons only",
          "Mobile holes only",
          "Immobile positive and negative donor/acceptor ions",
          "Neutral semiconductor atoms only"
        ],
        "correct": 2,
        "explanation": "Near the junction, electrons and holes diffuse and recombine across the boundary, leaving behind uncompensated immobile donor cations on the n-side and immobile acceptor anions on the p-side."
      },
      {
        "id": "phy-mcq-23",
        "subject": "Physics",
        "topic": "Rotational Dynamics (Moment of Inertia)",
        "year": "KMC 2082 Set B",
        "question": "The moment of inertia of a thin uniform rod of mass $M$ and length $L$ about an axis passing through one of its ends and perpendicular to its length is:",
        "options": [
          "$\\frac{1}{12} M L^2$",
          "$\\frac{1}{3} M L^2$",
          "$\\frac{1}{2} M L^2$",
          "$\\frac{2}{3} M L^2$"
        ],
        "correct": 1,
        "explanation": "By the parallel axis theorem: $I = I_{cm} + M d^2 = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2$."
      },
      {
        "id": "phy-mcq-24",
        "subject": "Physics",
        "topic": "Wave Motion (Doppler Effect)",
        "year": "KMC 2083 Hostel",
        "question": "A train blowing a whistle of frequency $f$ moves towards a stationary observer with speed $u_s$. If sound speed is $v$, observed frequency is:",
        "options": [
          "$f \\left(\\frac{v + u_s}{v}\\right)$",
          "$f \\left(\\frac{v - u_s}{v}\\right)$",
          "$f \\left(\\frac{v}{v - u_s}\\right)$",
          "$f \\left(\\frac{v}{v + u_s}\\right)$"
        ],
        "correct": 2,
        "explanation": "When the source approaches a stationary observer, sound waves are compressed in front of the source. Apparent wavelength shortens to $\\lambda' = \\frac{v - u_s}{f}$, giving apparent frequency $f' = \\frac{v}{\\lambda'} = f\\left(\\frac{v}{v - u_s}\\right) > f$."
      },
      {
        "id": "phy-mcq-25",
        "subject": "Physics",
        "topic": "Interference & Coherence",
        "year": "KMC 2081 Set B",
        "question": "Two independent monochromatic light bulbs cannot produce a steady interference pattern on a screen because:",
        "options": [
          "Their wavelengths are necessarily different",
          "Their amplitudes are too large",
          "They do not maintain a constant phase difference (incoherent sources)",
          "Light waves cannot overlap in air"
        ],
        "correct": 2,
        "explanation": "Independent sources emit light via spontaneous emission from different atoms. The initial phases undergo random fluctuations every $10^{-8}\\text{ s}$, destroying coherence and making sustained interference impossible."
      },
      {
        "id": "phy-mcq-26",
        "subject": "Physics",
        "topic": "Modern Physics (Bohr Model)",
        "year": "KMC 2080 Set A",
        "question": "In Bohr's model of the hydrogen atom, the orbital radius of the electron in the $n$-th stationary orbit is proportional to:",
        "options": [
          "$n$",
          "$n^2$",
          "$1 / n$",
          "$1 / n^2$"
        ],
        "correct": 1,
        "explanation": "Bohr's radius formula gives $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2}$. Hence, $r_n \\propto n^2$."
      },
      {
        "id": "phy-mcq-27",
        "subject": "Physics",
        "topic": "Heat Conduction",
        "year": "KMC 2079 Set B",
        "question": "In the steady state of heat conduction through a uniform metal bar insulated along its sides, which statement is correct?",
        "options": [
          "Temperature is identical at all points along the bar",
          "Temperature gradient is constant along the bar",
          "Heat current varies inversely with length",
          "No heat leaves the cold end"
        ],
        "correct": 1,
        "explanation": "In steady state, heat entering any section equals heat leaving it ($Q/t = \\text{const}$). With uniform cross-section and thermal conductivity, Fourier's law $\\frac{Q}{t} = -KA\\frac{dT}{dx}$ implies temperature gradient $\\frac{dT}{dx}$ is constant."
      },
      {
        "id": "phy-mcq-28",
        "subject": "Physics",
        "topic": "Electrostatics (Gauss Law)",
        "year": "KMC 2082 Set A",
        "question": "An electric dipole of dipole moment $p$ is placed inside a closed Gaussian cubical box. The net outward electric flux through the cube is:",
        "options": [
          "$p / \\varepsilon_0$",
          "$2q / \\varepsilon_0$",
          "Zero",
          "Depends on position of dipole"
        ],
        "correct": 2,
        "explanation": "By Gauss's law, total electric flux is $\\Phi = \\frac{q_{enclosed}}{\\varepsilon_0}$. An electric dipole consists of equal and opposite charges ($+q$ and $-q$). Total charge is $q_{net} = +q - q = 0$, so net flux is zero."
      },
      {
        "id": "phy-mcq-29",
        "subject": "Physics",
        "topic": "Electromagnetic Waves",
        "year": "KMC 2083 Set B",
        "question": "The ratio of the amplitude of electric field to magnetic field ($E_0 / B_0$) for an electromagnetic wave propagating in free space equals:",
        "options": [
          "Speed of light $c$",
          "$1 / c$",
          "$c^2$",
          "Permittivity $\\varepsilon_0$"
        ],
        "correct": 0,
        "explanation": "From Maxwell's electromagnetic equations, the relation between field amplitudes in vacuum is $E_0 = c B_0 \\implies \\frac{E_0}{B_0} = c = 3 \\times 10^8\\text{ m/s}$."
      },
      {
        "id": "phy-mcq-30",
        "subject": "Physics",
        "topic": "Wave Motion (Stationary Waves)",
        "year": "KMC 2081 Set B",
        "question": "In a standing wave on a stretched string, the distance between two consecutive nodes is:",
        "options": [
          "$\\lambda$",
          "$\\lambda / 2$",
          "$\\lambda / 4$",
          "$2\\lambda$"
        ],
        "correct": 1,
        "explanation": "Nodes occur where wave displacement is permanently zero. The spatial distance between any two adjacent nodes (or two adjacent antinodes) is exactly half of the wavelength: $\\lambda / 2$."
      },
      {
        "id": "chem-mcq-1",
        "subject": "Chemistry",
        "topic": "Volumetric Analysis",
        "year": "KMC 2083 Hostel",
        "question": "Which of the following substances can serve as a primary standard in acid-base titrations?",
        "options": [
          "Sodium hydroxide ($NaOH$)",
          "Anhydrous sodium carbonate ($Na_2CO_3$)",
          "Concentrated hydrochloric acid ($HCl$)",
          "Potassium permanganate ($KMnO_4$)"
        ],
        "correct": 1,
        "explanation": "Anhydrous $Na_2CO_3$ is non-hygroscopic, highly pure, stable in air, and has a known high equivalent weight. $NaOH$ absorbs moisture/$CO_2$, $HCl$ is a volatile gas in solution, and $KMnO_4$ is susceptible to photochemical reduction (all secondary standards)."
      },
      {
        "id": "chem-mcq-2",
        "subject": "Chemistry",
        "topic": "Volumetric Analysis",
        "year": "KMC 2082 Set A",
        "question": "The equivalent weight of hydrated oxalic acid ($(COOH)_2 \\cdot 2H_2O$, molar mass = 126) is:",
        "options": [
          "126",
          "63",
          "45",
          "90"
        ],
        "correct": 1,
        "explanation": "Oxalic acid is a dibasic acid (basicity = 2, yielding two ionizable protons). Equivalent weight = $\\frac{\\text{Molar mass}}{\\text{Basicity}} = \\frac{126}{2} = 63$."
      },
      {
        "id": "chem-mcq-3",
        "subject": "Chemistry",
        "topic": "Ionic Equilibrium",
        "year": "KMC 2081 Set B",
        "question": "What is the pH of a $10^{-8}\\text{ M } HCl$ aqueous solution at $25^\\circ\\text{C}$?",
        "options": [
          "8.0",
          "Between 6.95 and 7.00",
          "7.0 exactly",
          "6.0"
        ],
        "correct": 1,
        "explanation": "In extremely dilute acid, the self-ionization of water ($[H^+]_{w} = 10^{-7}\\text{ M}$) cannot be neglected. Total $[H^+] = 10^{-8} + x$. Solving $x(10^{-8}+x) = 10^{-14}$ gives total $[H^+] \\approx 1.05 \\times 10^{-7}\\text{ M} \\implies pH = -\\log(1.05 \\times 10^{-7}) \\approx 6.98$ (slightly acidic, never basic!)."
      },
      {
        "id": "chem-mcq-4",
        "subject": "Chemistry",
        "topic": "Ionic Equilibrium (Buffer Solutions)",
        "year": "KMC 2080 Set A",
        "question": "Which of the following mixtures behaves as an acidic buffer solution?",
        "options": [
          "$CH_3COOH + CH_3COONa$",
          "$NH_4OH + NH_4Cl$",
          "$HCl + NaCl$",
          "$NaOH + CH_3COONa$"
        ],
        "correct": 0,
        "explanation": "An acidic buffer consists of a weak acid and its salt with a strong base ($CH_3COOH + CH_3COONa$). $NH_4OH + NH_4Cl$ is a basic buffer, while $HCl + NaCl$ contains a strong acid and cannot act as a buffer."
      },
      {
        "id": "chem-mcq-5",
        "subject": "Chemistry",
        "topic": "Chemical Thermodynamics",
        "year": "KMC 2079 Set B",
        "question": "For a spontaneous chemical process at constant temperature and pressure, the change in Gibbs free energy ($\\Delta G$) must be:",
        "options": [
          "Positive ($\\Delta G > 0$)",
          "Negative ($\\Delta G < 0$)",
          "Zero ($\\Delta G = 0$)",
          "Equal to enthalpy change ($\\Delta G = \\Delta H$)"
        ],
        "correct": 1,
        "explanation": "By the second law of thermodynamics, a process is thermodynamically spontaneous under constant $T$ and $P$ if and only if $\\Delta G = \\Delta H - T\\Delta S < 0$."
      },
      {
        "id": "chem-mcq-6",
        "subject": "Chemistry",
        "topic": "Chemical Thermodynamics",
        "year": "KMC 2082 Set B",
        "question": "Hess's Law of constant heat summation is a direct manifestation of the principle of conservation of:",
        "options": [
          "Mass",
          "Energy",
          "Entropy",
          "Momentum"
        ],
        "correct": 1,
        "explanation": "Enthalpy is a state function. Enthalpy change depends only on initial and final states, not the path taken. This path-independence of enthalpy reflects the first law of thermodynamics (conservation of energy)."
      },
      {
        "id": "chem-mcq-7",
        "subject": "Chemistry",
        "topic": "Haloalkanes (SN1 vs SN2)",
        "year": "KMC 2083 Set A",
        "question": "The rate of an $S_N1$ nucleophilic substitution reaction of an alkyl halide depends directly on:",
        "options": [
          "Concentration of alkyl halide only",
          "Concentration of nucleophile only",
          "Concentration of both alkyl halide and nucleophile",
          "Dielectric constant of non-polar solvents"
        ],
        "correct": 0,
        "explanation": "$S_N1$ is unimolecular nucleophilic substitution. The rate-determining step is heterolytic cleavage forming a carbocation intermediate: $\\text{Rate} = k[R-X]^1$. The nucleophile attacks in a second, fast step."
      },
      {
        "id": "chem-mcq-8",
        "subject": "Chemistry",
        "topic": "Haloalkanes",
        "year": "KMC 2081 Set A",
        "question": "When 2-bromobutane is heated with alcoholic $KOH$, the major organic product formed is:",
        "options": [
          "But-1-ene",
          "But-2-ene",
          "Butan-2-ol",
          "Butane"
        ],
        "correct": 1,
        "explanation": "According to Saytzeff's rule (Zaitsev's rule), dehydrohalogenation of secondary alkyl halides yields predominantly the more highly substituted, thermodynamically stable alkene (but-2-ene with 6 $\\alpha$-hydrogens) over but-1-ene (2 $\\alpha$-hydrogens)."
      },
      {
        "id": "chem-mcq-9",
        "subject": "Chemistry",
        "topic": "Haloarenes",
        "year": "KMC 2080 Set B",
        "question": "Chlorobenzene is synthesized from benzene diazonium chloride by heating with $Cu_2Cl_2 / HCl$. This named reaction is known as:",
        "options": [
          "Wurtz-Fittig reaction",
          "Sandmeyer reaction",
          "Friedel-Crafts reaction",
          "Gattermann reaction"
        ],
        "correct": 1,
        "explanation": "Treatment of aryl diazonium salts with cuprous chloride dissolved in $HCl$ to yield aryl chlorides is the classic Sandmeyer reaction. (Using copper powder instead is Gattermann reaction)."
      },
      {
        "id": "chem-mcq-10",
        "subject": "Chemistry",
        "topic": "Haloarenes",
        "year": "KMC 2079 Set A",
        "question": "The reaction of chlorobenzene with methyl chloride in the presence of metallic sodium in dry ether to form toluene is:",
        "options": [
          "Wurtz reaction",
          "Fittig reaction",
          "Wurtz-Fittig reaction",
          "Frankland reaction"
        ],
        "correct": 2,
        "explanation": "Coupling an aryl halide with an alkyl halide using metallic sodium in dry ether to form an alkylbenzene is the Wurtz-Fittig reaction ($C_6H_5Cl + 2Na + CH_3Cl \\to C_6H_5CH_3 + 2NaCl$)."
      },
      {
        "id": "chem-mcq-11",
        "subject": "Chemistry",
        "topic": "Alcohols & Phenols",
        "year": "KMC 2082 Set A",
        "question": "In the Victor Meyer test, primary, secondary, and tertiary alcohols produce characteristic colors in the sequence:",
        "options": [
          "Blue, Red, Colorless",
          "Red, Blue, Colorless",
          "Colorless, Blue, Red",
          "Red, Colorless, Blue"
        ],
        "correct": 1,
        "explanation": "Primary alcohol forms nitrolic acid which turns blood-red with alkali. Secondary alcohol forms pseudonitrol which turns deep blue with alkali. Tertiary alcohol forms no nitrolic compound and remains colorless. Remember mnemonic: RBC (Red-Blue-Colorless)."
      },
      {
        "id": "chem-mcq-12",
        "subject": "Chemistry",
        "topic": "Alcohols & Phenols",
        "year": "KMC 2083 Hostel",
        "question": "Phenol is treated with chloroform and aqueous $NaOH$ followed by acid hydrolysis to give salicylaldehyde. This reaction is:",
        "options": [
          "Kolbe's reaction",
          "Reimer-Tiemann reaction",
          "Fries rearrangement",
          "Cannizzaro reaction"
        ],
        "correct": 1,
        "explanation": "Reaction of phenol with $CHCl_3 + NaOH$ introduces an ortho-formyl ($-CHO$) group into the aromatic ring, generating salicylaldehyde. The electrophile is dichlorocarbene ($:CCl_2$)."
      },
      {
        "id": "chem-mcq-13",
        "subject": "Chemistry",
        "topic": "Aldehydes & Ketones",
        "year": "KMC 2081 Set B",
        "question": "Which of the following compounds gives a positive iodoform test with $I_2 / NaOH$?",
        "options": [
          "Methanol ($CH_3OH$)",
          "Propan-1-ol ($CH_3CH_2CH_2OH$)",
          "Propan-2-one (Acetone)",
          "Benzaldehyde ($C_6H_5CHO$)"
        ],
        "correct": 2,
        "explanation": "The iodoform test requires a methyl carbonyl group ($CH_3-C=O$) or a methyl carbinol group ($CH_3-CH(OH)-$). Acetone contains two $CH_3-C=O$ groups, producing a yellow precipitate of iodoform ($CHI_3$)."
      },
      {
        "id": "chem-mcq-14",
        "subject": "Chemistry",
        "topic": "Aldehydes & Ketones",
        "year": "KMC 2080 Set A",
        "question": "Benzaldehyde on heating with concentrated $50\\%\\text{ }NaOH$ undergoes disproportionation to form benzyl alcohol and sodium benzoate. This is:",
        "options": [
          "Aldol condensation",
          "Cannizzaro reaction",
          "Perkin reaction",
          "Clemmensen reduction"
        ],
        "correct": 1,
        "explanation": "Aldehydes lacking $\\alpha$-hydrogen atoms (such as benzaldehyde and formaldehyde) undergo self-redox disproportionation in concentrated alkali to yield one alcohol molecule and one carboxylate salt (Cannizzaro reaction)."
      },
      {
        "id": "chem-mcq-15",
        "subject": "Chemistry",
        "topic": "Carboxylic Acids",
        "year": "KMC 2079 Set B",
        "question": "Which of the following organic acids exhibits reducing properties and reduces Tollens' reagent?",
        "options": [
          "Acetic acid ($CH_3COOH$)",
          "Formic acid ($HCOOH$)",
          "Benzoic acid ($C_6H_5COOH$)",
          "Oxalic acid ($(COOH)_2$)"
        ],
        "correct": 1,
        "explanation": "Formic acid contains both a carboxyl group ($-COOH$) and a formyl/aldehyde hydrogen ($H-C=O$). Because of this oxidizable aldehydic hydrogen, it readily reduces Tollens' reagent to metallic silver mirror."
      },
      {
        "id": "chem-mcq-16",
        "subject": "Chemistry",
        "topic": "Coordination Chemistry",
        "year": "KMC 2082 Set B",
        "question": "The IUPAC name of the coordination complex $[Co(NH_3)_5Cl]Cl_2$ is:",
        "options": [
          "Pentaamminechlorocobalt(III) chloride",
          "Pentaamminechlorocobalt(II) chloride",
          "Chloropentaamminecobalt(III) dichloride",
          "Pentaamminedichlorocobalt(III) chloride"
        ],
        "correct": 0,
        "explanation": "Ligands are named alphabetically: ammine before chloro. Oxidation state of $Co$: $x + 5(0) + (-1) + 2(-1) = 0 \\implies x = +3$. The correct IUPAC name is pentaamminechlorocobalt(III) chloride."
      },
      {
        "id": "chem-mcq-17",
        "subject": "Chemistry",
        "topic": "Transition Metals",
        "year": "KMC 2083 Set A",
        "question": "Which of the following first-row transition metal ions is diamagnetic?",
        "options": [
          "$Fe^{2+}$",
          "$Mn^{2+}$",
          "$Cu^{2+}$",
          "$Zn^{2+}$"
        ],
        "correct": 3,
        "explanation": "Zinc has configuration $[Ar]3d^{10}4s^2$. When ionized to $Zn^{2+}$, its electronic configuration is $[Ar]3d^{10}$. All ten 3d electrons are completely paired into five orbitals ($n = 0$), so it is diamagnetic (repelled by magnetic fields)."
      },
      {
        "id": "chem-mcq-18",
        "subject": "Chemistry",
        "topic": "Electrochemistry",
        "year": "KMC 2081 Set A",
        "question": "The quantity of electricity required to deposit one mole of copper from an aqueous $CuSO_4$ solution by electrolysis is:",
        "options": [
          "$1\\text{ Faraday } (96500\\text{ C})$",
          "$2\\text{ Faradays } (193000\\text{ C})$",
          "$0.5\\text{ Faraday}$",
          "$4\\text{ Faradays}$"
        ],
        "correct": 1,
        "explanation": "Reduction reaction: $Cu^{2+} + 2e^- \\to Cu(s)$. Deposition of 1 mole of $Cu$ atoms requires 2 moles of electrons, which corresponds to $2\\text{ Faradays} = 2 \\times 96500\\text{ C} = 193000\\text{ C}$."
      },
      {
        "id": "chem-mcq-19",
        "subject": "Chemistry",
        "topic": "Electrochemistry (Nernst Equation)",
        "year": "KMC 2080 Set B",
        "question": "At chemical equilibrium in a galvanic cell, which parameter becomes zero?",
        "options": [
          "Standard cell potential ($E^\\circ_{cell}$)",
          "Cell electromotive force ($E_{cell}$)",
          "Equilibrium constant ($K_{eq}$)",
          "Temperature of the cell"
        ],
        "correct": 1,
        "explanation": "At equilibrium, $\\Delta G = 0$. Since $\\Delta G = -nFE_{cell}$, the operating cell potential $E_{cell}$ becomes zero. $E^\\circ_{cell}$ is a thermodynamic constant at standard states and is non-zero ($E^\\circ_{cell} = \\frac{0.0591}{n}\\log K_{eq}$)."
      },
      {
        "id": "chem-mcq-20",
        "subject": "Chemistry",
        "topic": "Solid State",
        "year": "KMC 2079 Set A",
        "question": "In a face-centered cubic (FCC) unit cell, the total effective number of constituent atoms per unit cell is:",
        "options": [
          "1",
          "2",
          "4",
          "6"
        ],
        "correct": 2,
        "explanation": "Corners: $8 \\times \\frac{1}{8} = 1$ atom. Faces: $6 \\times \\frac{1}{2} = 3$ atoms. Total effective atoms $Z = 1 + 3 = 4$."
      },
      {
        "id": "chem-mcq-21",
        "subject": "Chemistry",
        "topic": "Chemical Kinetics",
        "year": "KMC 2082 Set A",
        "question": "The unit of rate constant for a second-order chemical reaction is:",
        "options": [
          "$s^{-1}$",
          "$mol\\cdot L^{-1}\\cdot s^{-1}$",
          "$L\\cdot mol^{-1}\\cdot s^{-1}$",
          "$L^2\\cdot mol^{-2}\\cdot s^{-1}$"
        ],
        "correct": 2,
        "explanation": "General formula for rate constant units: $(mol\\cdot L^{-1})^{1-n}\\cdot s^{-1}$. For $n = 2$: $(mol\\cdot L^{-1})^{-1}\\cdot s^{-1} = L\\cdot mol^{-1}\\cdot s^{-1}$."
      },
      {
        "id": "chem-mcq-22",
        "subject": "Chemistry",
        "topic": "Chemical Kinetics",
        "year": "KMC 2083 Hostel",
        "question": "If the half-life of a reaction is inversely proportional to the initial concentration ($t_{1/2} \\propto 1/a$), the order of the reaction is:",
        "options": [
          "Zero order",
          "First order",
          "Second order",
          "Third order"
        ],
        "correct": 2,
        "explanation": "Half-life depends on initial concentration as $t_{1/2} \\propto \\frac{1}{a^{n-1}}$. For $n=2$, $t_{1/2} \\propto \\frac{1}{a^{2-1}} = \\frac{1}{a}$. Hence, the reaction is second order."
      },
      {
        "id": "chem-mcq-23",
        "subject": "Chemistry",
        "topic": "Surface Chemistry",
        "year": "KMC 2081 Set B",
        "question": "According to the Hardy-Schulze rule, the coagulating power of an electrolyte for an arsenious sulphide ($As_2S_3$, negatively charged) sol increases in the order:",
        "options": [
          "$Na^+ < Ba^{2+} < Al^{3+}$",
          "$Al^{3+} < Ba^{2+} < Na^+$",
          "$Cl^- < SO_4^{2-} < PO_4^{3-}$",
          "$Ba^{2+} < Na^+ < Al^{3+}$"
        ],
        "correct": 0,
        "explanation": "For a negatively charged colloid ($As_2S_3$), coagulation is effected by cations. The Hardy-Schulze rule states that coagulating power increases sharply with higher valency of the active ion: $Na^+ (1) < Ba^{2+} (2) < Al^{3+} (3)$."
      },
      {
        "id": "chem-mcq-24",
        "subject": "Chemistry",
        "topic": "Amines",
        "year": "KMC 2080 Set A",
        "question": "When ethanamide ($CH_3CONH_2$) is heated with bromine and aqueous potassium hydroxide, methylamine ($CH_3NH_2$) is formed. This is:",
        "options": [
          "Carbylamine reaction",
          "Hofmann bromamide degradation reaction",
          "Gabriel phthalimide synthesis",
          "Schotten-Baumann reaction"
        ],
        "correct": 1,
        "explanation": "Hofmann bromamide reaction converts primary amides into primary amines containing one less carbon atom ($CH_3CONH_2 + Br_2 + 4KOH \\to CH_3NH_2 + K_2CO_3 + 2KBr + 2H_2O$)."
      },
      {
        "id": "chem-mcq-25",
        "subject": "Chemistry",
        "topic": "Amines (Carbylamine Test)",
        "year": "KMC 2079 Set B",
        "question": "The offensive foul-smelling gas produced when aniline is warmed with chloroform and alcoholic $KOH$ is:",
        "options": [
          "Phenyl cyanide ($C_6H_5CN$)",
          "Phenyl isocyanide / carbylamine ($C_6H_5NC$)",
          "Benzonitrile",
          "Chlorobenzene"
        ],
        "correct": 1,
        "explanation": "The carbylamine test is specific to primary amines. Heating aniline with $CHCl_3 + 3KOH$ forms phenyl isocyanide ($C_6H_5-N\\equiv C$), known for its extremely foul smell."
      },
      {
        "id": "chem-mcq-26",
        "subject": "Chemistry",
        "topic": "Biomolecules",
        "year": "KMC 2082 Set B",
        "question": "Glucose on oxidation with mild oxidizing agent bromine water ($Br_2 / H_2O$) gives exclusively:",
        "options": [
          "Gluconic acid",
          "Glucaric / Saccharic acid",
          "Sorbitol",
          "Fructose"
        ],
        "correct": 0,
        "explanation": "Bromine water is a selective mild oxidizing agent that oxidizes only the terminal aldehyde group ($-CHO$) to $-COOH$ without affecting secondary or primary alcohol groups, producing gluconic acid."
      },
      {
        "id": "chem-mcq-27",
        "subject": "Chemistry",
        "topic": "Extraction of Metals (Copper)",
        "year": "KMC 2083 Set A",
        "question": "In the extraction of copper from copper pyrites ($CuFeS_2$), the silica ($SiO_2$) added in the reverberatory furnace serves to:",
        "options": [
          "Reduce copper oxide to metallic copper",
          "Form a fusible slag of iron silicate ($FeSiO_3$) with basic $FeO$",
          "Oxidize sulphur to sulphur dioxide",
          "Act as a reducing agent"
        ],
        "correct": 1,
        "explanation": "Silica is an acidic flux. It reacts with the basic gangue ferrous oxide formed during roasting: $FeO + SiO_2 \\to FeSiO_3$ (slag), which floats on top of the copper matte and is easily skimmed off."
      },
      {
        "id": "chem-mcq-28",
        "subject": "Chemistry",
        "topic": "Extraction of Metals (Iron)",
        "year": "KMC 2081 Set A",
        "question": "In the blast furnace for extraction of iron, the primary chemical reducing agent in the upper reduction zone is:",
        "options": [
          "Solid Carbon (Coke)",
          "Carbon monoxide ($CO$)",
          "Carbon dioxide ($CO_2$)",
          "Limestone ($CaCO_3$)"
        ],
        "correct": 1,
        "explanation": "In the upper stack of the blast furnace ($400^\\circ - 700^\\circ\\text{C}$), gaseous carbon monoxide acts as the predominant reducing agent: $3Fe_2O_3 + CO \\to 2Fe_3O_4 + CO_2$, reducing hematite progressively down to spongy iron."
      },
      {
        "id": "chem-mcq-29",
        "subject": "Chemistry",
        "topic": "Heavy Metals (Mercury)",
        "year": "KMC 2080 Set B",
        "question": "When stannous chloride ($SnCl_2$) solution is added dropwise to mercuric chloride ($HgCl_2$), the observed precipitate changes color from:",
        "options": [
          "White to grey/black",
          "Black to white",
          "Red to yellow",
          "Blue to green"
        ],
        "correct": 0,
        "explanation": "Initial reaction forms a white precipitate of mercurous chloride (calomel): $2HgCl_2 + SnCl_2 \\to Hg_2Cl_2\\downarrow\\text{ (white)} + SnCl_4$. With excess $SnCl_2$, it is further reduced to finely divided metallic mercury: $Hg_2Cl_2 + SnCl_2 \\to 2Hg\\downarrow\\text{ (grey/black)} + SnCl_4$."
      },
      {
        "id": "chem-mcq-30",
        "subject": "Chemistry",
        "topic": "Polymers",
        "year": "KMC 2079 Set A",
        "question": "Bakelite is a thermosetting polymer synthesized by the condensation reaction of phenol with:",
        "options": [
          "Formaldehyde ($HCHO$)",
          "Acetaldehyde ($CH_3CHO$)",
          "Ethylene glycol",
          "Adipic acid"
        ],
        "correct": 0,
        "explanation": "Bakelite is phenol-formaldehyde resin formed by step-growth condensation of phenol with formaldehyde in the presence of an acid or base catalyst, yielding heavily cross-linked 3D polymer networks."
      },
      {
        "id": "math-mcq-1",
        "subject": "Maths",
        "topic": "Permutation & Combination",
        "year": "KMC 2079 Set A",
        "question": "If $P(n, 4) = 12 \\cdot P(n, 2)$, the value of $n$ is:",
        "options": [
          "4",
          "6",
          "8",
          "12"
        ],
        "correct": 1,
        "explanation": "$P(n, 4) = n(n-1)(n-2)(n-3)$ and $P(n, 2) = n(n-1)$. Since $n \\ge 4$, dividing both sides by $n(n-1)$ gives $(n-2)(n-3) = 12 \\implies n^2 - 5n + 6 = 12 \\implies n^2 - 5n - 6 = 0 \\implies (n-6)(n+1) = 0$. Since $n > 0$, $n = 6$."
      },
      {
        "id": "math-mcq-2",
        "subject": "Maths",
        "topic": "Binomial Theorem",
        "year": "KMC 2079 Set A",
        "question": "The total number of terms in the algebraic expansion of $(x + a)^{50} + (x - a)^{50}$ after simplification is:",
        "options": [
          "25",
          "26",
          "50",
          "51"
        ],
        "correct": 1,
        "explanation": "Expanding both: $(x+a)^{50} + (x-a)^{50} = 2\\left[\\binom{50}{0}x^{50} + \\binom{50}{2}x^{48}a^2 + \\dots + \\binom{50}{50}a^{50}\\right]$. All odd terms cancel out. The remaining even-index terms are $\\binom{50}{0}, \\binom{50}{2}, \\dots, \\binom{50}{50}$, which totals $\\frac{50}{2} + 1 = 25 + 1 = 26$ terms."
      },
      {
        "id": "math-mcq-3",
        "subject": "Maths",
        "topic": "Matrices & Determinants",
        "year": "KMC 2079 Set A",
        "question": "If $A$ is a square matrix of order 3 and $\\det(A) = |A| = 4$, then $\\det(2A)$ is:",
        "options": [
          "8",
          "16",
          "32",
          "64"
        ],
        "correct": 2,
        "explanation": "For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$. Here $n = 3$, $k = 2$, and $|A| = 4$. Therefore $|2A| = 2^3 |A| = 8 \\times 4 = 32$."
      },
      {
        "id": "math-mcq-4",
        "subject": "Maths",
        "topic": "Complex Numbers",
        "year": "KMC 2079 Set A",
        "question": "If $\\omega$ is a non-real cube root of unity, the value of $(1 - \\omega + \\omega^2)(1 + \\omega - \\omega^2)$ is:",
        "options": [
          "1",
          "2",
          "4",
          "-4"
        ],
        "correct": 2,
        "explanation": "Since $1 + \\omega + \\omega^2 = 0$, we have $1 + \\omega^2 = -\\omega$ and $1 + \\omega = -\\omega^2$. Substituting: $(-\\omega - \\omega)(-\\omega^2 - \\omega^2) = (-2\\omega)(-2\\omega^2) = 4\\omega^3 = 4(1) = 4$."
      },
      {
        "id": "math-mcq-5",
        "subject": "Maths",
        "topic": "Derivatives & Mean Value Theorems",
        "year": "KMC 2079 Set A",
        "question": "The value of $c$ in Rolle's Theorem for $f(x) = x^2 - 4x + 3$ on the interval $[1, 3]$ is:",
        "options": [
          "1.5",
          "2.0",
          "2.5",
          "0"
        ],
        "correct": 1,
        "explanation": "$f(1) = 1 - 4 + 3 = 0$ and $f(3) = 9 - 12 + 3 = 0$. By Rolle's theorem, $f'(c) = 0 \\implies 2c - 4 = 0 \\implies c = 2$, which lies strictly in $(1, 3)$."
      },
      {
        "id": "math-mcq-6",
        "subject": "Maths",
        "topic": "Tangents & Normals",
        "year": "KMC 2079 Set A",
        "question": "The slope of the normal to the parabola $y^2 = 4ax$ at the point $(at^2, 2at)$ is:",
        "options": [
          "$t$",
          "$-t$",
          "$1/t$",
          "$-1/t$"
        ],
        "correct": 1,
        "explanation": "Differentiating $y^2 = 4ax \\implies 2y\\frac{dy}{dx} = 4a \\implies \\frac{dy}{dx} = \\frac{2a}{y} = \\frac{2a}{2at} = \\frac{1}{t}$. The slope of the normal is $m_N = -\\frac{1}{m_T} = -\\frac{1}{1/t} = -t$."
      },
      {
        "id": "math-mcq-7",
        "subject": "Maths",
        "topic": "3D Geometry (Direction Cosines)",
        "year": "KMC 2079 Set A",
        "question": "The direction cosines of a line equally inclined to the three positive coordinate axes are:",
        "options": [
          "$\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}$",
          "$\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}$",
          "$\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3}$",
          "$1, 1, 1$"
        ],
        "correct": 1,
        "explanation": "Since angles are equal, $\\alpha = \\beta = \\gamma \\implies l = m = n$. Using the identity $l^2 + m^2 + n^2 = 1 \\implies 3l^2 = 1 \\implies l = \\frac{1}{\\sqrt{3}}$. Hence $(l, m, n) = \\left(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}\\right)$."
      },
      {
        "id": "math-mcq-8",
        "subject": "Maths",
        "topic": "3D Geometry (Angle Between Lines)",
        "year": "KMC 2079 Set A",
        "question": "The angle between two lines having direction ratios $(1, 2, 1)$ and $(2, 1, -1)$ is:",
        "options": [
          "$\\pi / 2$",
          "$\\pi / 3$",
          "$\\pi / 4$",
          "$\\pi / 6$"
        ],
        "correct": 1,
        "explanation": "$\\cos\\theta = \\frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}} = \\frac{1(2) + 2(1) + 1(-1)}{\\sqrt{1+4+1}\\sqrt{4+1+1}} = \\frac{3}{\\sqrt{6}\\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2}$. Thus $\\theta = \\cos^{-1}(1/2) = \\frac{\\pi}{3}$."
      },
      {
        "id": "math-mcq-9",
        "subject": "Maths",
        "topic": "Inverse Trigonometry",
        "year": "KMC 2082 Set A",
        "question": "The principal value of $\\sin^{-1}\\left(\\sin\\frac{2\\pi}{3}\\right)$ is:",
        "options": [
          "$\\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{3}$",
          "$-\\frac{\\pi}{3}$",
          "$\\frac{5\\pi}{6}$"
        ],
        "correct": 1,
        "explanation": "The principal branch range of $\\sin^{-1}(x)$ is $[-\\pi/2, \\pi/2]$. Since $\\frac{2\\pi}{3} \\notin [-\\pi/2, \\pi/2]$, rewrite using $\\sin\\left(\\frac{2\\pi}{3}\\right) = \\sin\\left(\\pi - \\frac{\\pi}{3}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right)$. Thus $\\sin^{-1}\\left(\\sin\\frac{\\pi}{3}\\right) = \\frac{\\pi}{3}$."
      },
      {
        "id": "math-mcq-10",
        "subject": "Maths",
        "topic": "Inverse Trigonometry",
        "year": "KMC 2081 Set B",
        "question": "The value of $\\tan^{-1}(1) + \\tan^{-1}(2) + \\tan^{-1}(3)$ is:",
        "options": [
          "$\\pi / 2$",
          "$\\pi$",
          "$3\\pi / 2$",
          "$2\\pi$"
        ],
        "correct": 1,
        "explanation": "Since $xy = 2 \\times 3 = 6 > 1$, $\\tan^{-1}(2) + \\tan^{-1}(3) = \\pi + \\tan^{-1}\\left(\\frac{2+3}{1-6}\\right) = \\pi + \\tan^{-1}(-1) = \\pi - \\frac{\\pi}{4}$. Adding $\\tan^{-1}(1) = \\frac{\\pi}{4}$ gives $\\frac{\\pi}{4} + \\pi - \\frac{\\pi}{4} = \\pi$."
      },
      {
        "id": "math-mcq-11",
        "subject": "Maths",
        "topic": "Conic Sections (Parabola)",
        "year": "KMC 2080 Set B",
        "question": "The equation of the directrix of the parabola $y^2 = -8x$ is:",
        "options": [
          "$x = 2$",
          "$x = -2$",
          "$y = 2$",
          "$y = -2$"
        ],
        "correct": 0,
        "explanation": "Standard form: $y^2 = -4ax$. Here $4a = 8 \\implies a = 2$. The focus is at $(-a, 0) = (-2, 0)$ and the directrix equation is $x = a \\implies x = 2$."
      },
      {
        "id": "math-mcq-12",
        "subject": "Maths",
        "topic": "Conic Sections (Ellipse)",
        "year": "KMC 2083 Hostel",
        "question": "The eccentricity $e$ of the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ is:",
        "options": [
          "$\\frac{\\sqrt{7}}{4}$",
          "$\\frac{3}{4}$",
          "$\\frac{7}{16}$",
          "$\\frac{4}{5}$"
        ],
        "correct": 0,
        "explanation": "Here $a^2 = 16$ and $b^2 = 9$. With $a > b$, $b^2 = a^2(1 - e^2) \\implies 9 = 16(1 - e^2) \\implies e^2 = 1 - \\frac{9}{16} = \\frac{7}{16} \\implies e = \\frac{\\sqrt{7}}{4}$."
      },
      {
        "id": "math-mcq-13",
        "subject": "Maths",
        "topic": "Conic Sections (Hyperbola)",
        "year": "KMC 2081 Set A",
        "question": "The eccentricity of a rectangular (equilateral) hyperbola is always:",
        "options": [
          "1",
          "$\\sqrt{2}$",
          "2",
          "$\\frac{1}{\\sqrt{2}}$"
        ],
        "correct": 1,
        "explanation": "In a rectangular hyperbola, lengths of transverse and conjugate axes are equal ($a = b$). The formula $b^2 = a^2(e^2 - 1)$ becomes $a^2 = a^2(e^2 - 1) \\implies e^2 - 1 = 1 \\implies e^2 = 2 \\implies e = \\sqrt{2}$."
      },
      {
        "id": "math-mcq-14",
        "subject": "Maths",
        "topic": "Indefinite Integrals",
        "year": "KMC 2082 Set B",
        "question": "The value of $\\int e^x (\\tan x + \\sec^2 x) dx$ is:",
        "options": [
          "$e^x \\sec x + C$",
          "$e^x \\tan x + C$",
          "$e^x \\sec^2 x + C$",
          "$e^x (\\tan x + \\sec x) + C$"
        ],
        "correct": 1,
        "explanation": "Using the standard formula $\\int e^x [f(x) + f'(x)] dx = e^x f(x) + C$. Here $f(x) = \\tan x$ and $f'(x) = \\sec^2 x$. Thus the integral is $e^x \\tan x + C$."
      },
      {
        "id": "math-mcq-15",
        "subject": "Maths",
        "topic": "Definite Integrals",
        "year": "KMC 2080 Set A",
        "question": "The value of the definite integral $\\int_{-\\pi/2}^{\\pi/2} \\sin^5 x dx$ is:",
        "options": [
          "0",
          "1",
          "$\\pi / 2$",
          "$\\frac{8}{15}$"
        ],
        "correct": 0,
        "explanation": "Let $f(x) = \\sin^5 x$. Since $f(-x) = \\sin^5(-x) = -\\sin^5 x = -f(x)$, the integrand is an odd function over symmetric limits $[-\\pi/2, \\pi/2]$. Hence the definite integral is strictly 0."
      },
      {
        "id": "math-mcq-16",
        "subject": "Maths",
        "topic": "Differential Equations",
        "year": "KMC 2079 Set B",
        "question": "The integrating factor (I.F.) for the linear differential equation $\\frac{dy}{dx} + y\\cot x = 2\\cos x$ is:",
        "options": [
          "$\\sin x$",
          "$\\cos x$",
          "$\\ln(\\sin x)$",
          "$\\csc x$"
        ],
        "correct": 0,
        "explanation": "Here $P(x) = \\cot x$. The integrating factor is $\\text{I.F.} = e^{\\int P dx} = e^{\\int \\cot x dx} = e^{\\ln(\\sin x)} = \\sin x$."
      },
      {
        "id": "math-mcq-17",
        "subject": "Maths",
        "topic": "Differential Equations",
        "year": "KMC 2083 Set A",
        "question": "The order and degree of the differential equation $\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^{3/2} = 5\\frac{d^2y}{dx^2}$ are respectively:",
        "options": [
          "Order 1, Degree 3",
          "Order 2, Degree 2",
          "Order 2, Degree 1",
          "Order 2, Degree 3"
        ],
        "correct": 1,
        "explanation": "Squaring both sides to eliminate the fractional exponent: $\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^3 = 25\\left(\\frac{d^2y}{dx^2}\\right)^2$. The highest derivative is $\\frac{d^2y}{dx^2}$ (order = 2), and its power is 2 (degree = 2)."
      },
      {
        "id": "math-mcq-18",
        "subject": "Maths",
        "topic": "Vectors",
        "year": "KMC 2081 Set B",
        "question": "If $\\vec{a}$ and $\\vec{b}$ are unit vectors and $|\\vec{a} + \\vec{b}| = 1$, then the angle between $\\vec{a}$ and $\\vec{b}$ is:",
        "options": [
          "$\\pi / 3$",
          "$\\pi / 2$",
          "$2\\pi / 3$",
          "$5\\pi / 6$"
        ],
        "correct": 2,
        "explanation": "$|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2(\\vec{a}\\cdot\\vec{b}) \\implies 1 = 1 + 1 + 2\\cos\\theta \\implies 2\\cos\\theta = -1 \\implies \\cos\\theta = -1/2 \\implies \\theta = \\frac{2\\pi}{3}$ ($120^\\circ$)."
      },
      {
        "id": "math-mcq-19",
        "subject": "Maths",
        "topic": "Vectors (Scalar Triple Product)",
        "year": "KMC 2082 Set A",
        "question": "Three vectors $\\vec{a}, \\vec{b}, \\vec{c}$ are coplanar if and only if their scalar triple product $[\\vec{a} \\; \\vec{b} \\; \\vec{c}]$ equals:",
        "options": [
          "1",
          "-1",
          "0",
          "$\\vec{a} \\cdot \\vec{b}$"
        ],
        "correct": 2,
        "explanation": "The scalar triple product $[\\vec{a}\\;\\vec{b}\\;\\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$ represents the volume of the parallelepiped formed by the three vectors. If the vectors lie in the same plane, volume is zero."
      },
      {
        "id": "math-mcq-20",
        "subject": "Maths",
        "topic": "Probability",
        "year": "KMC 2080 Set B",
        "question": "If $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \\cap B) = 0.2$, the conditional probability $P(A | B)$ is:",
        "options": [
          "0.2",
          "0.4",
          "0.5",
          "0.8"
        ],
        "correct": 1,
        "explanation": "By definition of conditional probability: $P(A | B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = \\frac{2}{5} = 0.4$."
      },
      {
        "id": "math-mcq-21",
        "subject": "Maths",
        "topic": "Probability (Independent Events)",
        "year": "KMC 2083 Hostel",
        "question": "Two fair coins are tossed simultaneously. What is the probability of getting at least one head?",
        "options": [
          "$1 / 4$",
          "$1 / 2$",
          "$3 / 4$",
          "$1$"
        ],
        "correct": 2,
        "explanation": "Sample space $S = \\{HH, HT, TH, TT\\}$ has 4 outcomes. The complementary event 'no heads' is $\\{TT\\}$ with probability $1/4$. Thus $P(\\text{at least one head}) = 1 - 1/4 = 3/4$."
      },
      {
        "id": "math-mcq-22",
        "subject": "Maths",
        "topic": "Limits & L'Hopital's Rule",
        "year": "KMC 2081 Set A",
        "question": "The value of $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$ is:",
        "options": [
          "0",
          "$1 / 2$",
          "1",
          "$\\infty$"
        ],
        "correct": 1,
        "explanation": "This is in indeterminate form $\\frac{0}{0}$. Applying L'Hopital's Rule: $\\lim_{x \\to 0} \\frac{e^x - 1}{2x}$ (still $\\frac{0}{0}$). Differentiating a second time: $\\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}$."
      },
      {
        "id": "math-mcq-23",
        "subject": "Maths",
        "topic": "Continuity",
        "year": "KMC 2082 Set B",
        "question": "If $f(x) = \\frac{\\sin 3x}{x}$ for $x \\ne 0$ is continuous at $x = 0$, the value of $f(0)$ must be:",
        "options": [
          "0",
          "1",
          "3",
          "$1 / 3$"
        ],
        "correct": 2,
        "explanation": "For continuity at $x = 0$, $f(0) = \\lim_{x \\to 0} f(x) = \\lim_{x \\to 0} \\frac{\\sin 3x}{x} = \\lim_{x \\to 0} \\left(3 \\cdot \\frac{\\sin 3x}{3x}\\right) = 3(1) = 3$."
      },
      {
        "id": "math-mcq-24",
        "subject": "Maths",
        "topic": "Derivatives (Implicit)",
        "year": "KMC 2079 Set A",
        "question": "If $x^p y^q = (x + y)^{p+q}$, then $\\frac{dy}{dx}$ is always equal to:",
        "options": [
          "$\\frac{x}{y}$",
          "$\\frac{y}{x}$",
          "$-\\frac{y}{x}$",
          "$\\frac{p y}{q x}$"
        ],
        "correct": 1,
        "explanation": "Taking natural logs: $p\\ln x + q\\ln y = (p+q)\\ln(x+y)$. Differentiating implicitly: $\\frac{p}{x} + \\frac{q}{y}y' = \\frac{p+q}{x+y}(1 + y')$. Rearranging terms gives $\\left[\\frac{q}{y} - \\frac{p+q}{x+y}\\right]y' = \\frac{p+q}{x+y} - \\frac{p}{x} \\implies \\frac{qx - py}{y(x+y)}y' = \\frac{qx - py}{x(x+y)} \\implies y' = \\frac{y}{x}$."
      },
      {
        "id": "math-mcq-25",
        "subject": "Maths",
        "topic": "Maxima & Minima",
        "year": "KMC 2083 Set B",
        "question": "The function $f(x) = x + \\frac{1}{x}$ has a local minimum at:",
        "options": [
          "$x = -1$",
          "$x = 0$",
          "$x = 1$",
          "$x = 2$"
        ],
        "correct": 2,
        "explanation": "$f'(x) = 1 - \\frac{1}{x^2} = 0 \\implies x^2 = 1 \\implies x = \\pm 1$. Second derivative is $f''(x) = \\frac{2}{x^3}$. At $x = 1$, $f''(1) = 2 > 0$ (local minimum). At $x = -1$, $f''(-1) = -2 < 0$ (local maximum)."
      },
      {
        "id": "math-mcq-26",
        "subject": "Maths",
        "topic": "Binomial Coefficients",
        "year": "KMC 2080 Set A",
        "question": "The sum of all binomial coefficients in the expansion of $(1 + x)^n$ is:",
        "options": [
          "$n$",
          "$2n$",
          "$2^{n-1}$",
          "$2^n$"
        ],
        "correct": 3,
        "explanation": "Expanding $(1 + x)^n = C_0 + C_1 x + C_2 x^2 + \\dots + C_n x^n$. Setting $x = 1$ gives $C_0 + C_1 + C_2 + \\dots + C_n = (1 + 1)^n = 2^n$."
      },
      {
        "id": "math-mcq-27",
        "subject": "Maths",
        "topic": "Matrices (Adjoint)",
        "year": "KMC 2081 Set B",
        "question": "If $A$ is a non-singular square matrix of order 3, then $|\\text{adj}(A)|$ is equal to:",
        "options": [
          "$|A|$",
          "$|A|^2$",
          "$|A|^3$",
          "$3|A|$"
        ],
        "correct": 1,
        "explanation": "Using the determinant property of the adjoint matrix: $|\\text{adj}(A)| = |A|^{n-1}$. For order $n = 3$, this evaluates to $|A|^{3-1} = |A|^2$."
      },
      {
        "id": "math-mcq-28",
        "subject": "Maths",
        "topic": "3D Geometry (Plane)",
        "year": "KMC 2082 Set A",
        "question": "The perpendicular distance from the origin to the plane $2x - 3y + 6z + 14 = 0$ is:",
        "options": [
          "2",
          "7",
          "14",
          "$\\sqrt{7}$"
        ],
        "correct": 0,
        "explanation": "The distance formula from origin $(0, 0, 0)$ to plane $Ax + By + Cz + D = 0$ is $d = \\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|14|}{\\sqrt{2^2 + (-3)^2 + 6^2}} = \\frac{14}{\\sqrt{4 + 9 + 36}} = \\frac{14}{\\sqrt{49}} = \\frac{14}{7} = 2$."
      },
      {
        "id": "math-mcq-29",
        "subject": "Maths",
        "topic": "Definite Integrals (Properties)",
        "year": "KMC 2083 Hostel",
        "question": "The value of $\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ is:",
        "options": [
          "$\\pi / 2$",
          "$\\pi / 4$",
          "$\\pi$",
          "1"
        ],
        "correct": 1,
        "explanation": "Let $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$. Applying King's property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ gives $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} dx$. Adding both: $2I = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$."
      },
      {
        "id": "math-mcq-30",
        "subject": "Maths",
        "topic": "Complex Numbers (De Moivre's)",
        "year": "KMC 2079 Set B",
        "question": "The modulus of the complex number $z = \\frac{1 + i}{1 - i}$ is:",
        "options": [
          "0",
          "1",
          "$\\sqrt{2}$",
          "2"
        ],
        "correct": 1,
        "explanation": "Simplifying: $\\frac{1+i}{1-i} = \\frac{(1+i)^2}{(1-i)(1+i)} = \\frac{1 + 2i - 1}{1 - i^2} = \\frac{2i}{2} = i$. The modulus is $|z| = |i| = 1$."
      }
    ],
    "rapidFire": [
      {
        "id": "rf-p1",
        "subject": "Physics",
        "trapTitle": "Simple Pendulum vs Spring Clock on the Moon",
        "confusion": "Does a spring watch also lose time on the Moon like a pendulum does?",
        "question": "A simple pendulum and a watch based on an oscillating spring are both taken to the Moon. Which statement is strictly true?",
        "options": [
          "Both clocks run slow and lose time",
          "The pendulum loses time, but the spring watch maintains correct time",
          "The spring watch loses time, but the pendulum maintains correct time",
          "Both clocks maintain exactly correct time"
        ],
        "correct": 1,
        "whyStudentsFail": "Students mix up the two time period formulas. They assume all mechanical clocks are affected by gravity.",
        "goldenRule": "Pendulum: $T = 2\\pi\\sqrt{l/g}$ (depends on $g$, so slows down when $g$ decreases). Spring: $T = 2\\pi\\sqrt{m/k}$ (completely independent of $g$, stays unchanged everywhere!)."
      },
      {
        "id": "rf-p2",
        "subject": "Physics",
        "trapTitle": "Sound Velocity vs Frequency",
        "confusion": "If a tuning fork's frequency is quadrupled, does sound velocity become 4v?",
        "question": "The frequency of a sound wave in air is $f$ and its velocity is $v$. If the frequency is increased to $4f$, what is the new velocity in the same air medium?",
        "options": [
          "$4v$",
          "$2v$",
          "$v$ (unchanged)",
          "$v/4$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students look at $v = f\\lambda$ and incorrectly assume that increasing $f$ will increase $v$.",
        "goldenRule": "Velocity of sound depends ONLY on medium properties (temperature, density, elasticity $\\sqrt{\\gamma P/\\rho}$). Frequency is determined by the source. Increasing $f$ by 4x merely shortens the wavelength $\\lambda$ to $\\lambda/4$, keeping $v$ constant!"
      },
      {
        "id": "rf-p3",
        "subject": "Physics",
        "trapTitle": "Photon Rest Mass vs Momentum",
        "confusion": "How can a particle with zero rest mass possess momentum?",
        "question": "A photon has zero rest mass ($m_0 = 0$). Does it possess momentum?",
        "options": [
          "No, zero mass implies zero momentum ($p = mv = 0$)",
          "Yes, its relativistic momentum is $p = h/\\lambda = E/c$",
          "Only when traveling through a glass medium",
          "Only if its frequency is in the X-ray spectrum"
        ],
        "correct": 1,
        "whyStudentsFail": "Students rely on classical Newtonian formula $p = mv$. For light, relativistic relation $E^2 = p^2 c^2 + m_0^2 c^4$ applies. With $m_0 = 0$, $E = pc \\implies p = E/c$.",
        "goldenRule": "Photons have zero rest mass, but they carry non-zero relativistic energy and momentum: $p = \\frac{h}{\\lambda} = \\frac{hf}{c} = \\frac{E}{c}$."
      },
      {
        "id": "rf-p4",
        "subject": "Physics",
        "trapTitle": "Acceleration at SHM Extremes vs Mean",
        "confusion": "Is acceleration zero when velocity is zero at the turning points of SHM?",
        "question": "A body undergoes simple harmonic motion. At the extreme displacement amplitude ($y = A$), what are its velocity and acceleration?",
        "options": [
          "Velocity is zero, acceleration is zero",
          "Velocity is zero, acceleration is maximum",
          "Velocity is maximum, acceleration is zero",
          "Both velocity and acceleration are maximum"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse velocity being zero with acceleration being zero.",
        "goldenRule": "In SHM, velocity $v = \\omega\\sqrt{A^2-y^2}$ and acceleration $a = -\\omega^2 y$. At extreme points ($y=A$), $v = 0$ while acceleration is MAXIMUM ($|a| = \\omega^2 A$). At the mean position ($y=0$), velocity is maximum while acceleration is ZERO!"
      },
      {
        "id": "rf-p5",
        "subject": "Physics",
        "trapTitle": "Effect of Cutting a Spring",
        "confusion": "When a spring is cut in half, does the spring constant halve?",
        "question": "A spring of spring constant $k$ is cut into two equal halves. What is the spring constant of each individual half?",
        "options": [
          "$k / 2$",
          "$k$",
          "$2k$",
          "$4k$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students intuitively assume cutting a spring in half halves its spring constant.",
        "goldenRule": "Spring constant is inversely proportional to its length ($k \\propto 1/L$). Shorter springs are stiffer! Halving the length DOUBLES the spring constant: $k' = 2k$."
      },
      {
        "id": "rf-p6",
        "subject": "Physics",
        "trapTitle": "Work Done in an Isothermal vs Adiabatic Process",
        "confusion": "Does a gas do more work during isothermal expansion or adiabatic expansion for the same volume change?",
        "question": "An ideal gas expands from volume $V_1$ to $V_2$. In which process is the work done by the gas greater?",
        "options": [
          "Adiabatic process",
          "Isothermal process",
          "Both do equal work",
          "Depends on whether the gas is monoatomic or diatomic"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse the slopes of isothermal and adiabatic curves on a P-V indicator diagram.",
        "goldenRule": "Adiabatic curves are steeper than isothermal curves (slope $= -\\gamma P/V$ vs $-P/V$). During expansion from $V_1$ to $V_2$, the isothermal curve lies ABOVE the adiabatic curve, enclosing greater area under the P-V graph. Thus, isothermal work is greater!"
      },
      {
        "id": "rf-p7",
        "subject": "Physics",
        "trapTitle": "Free Fall Inside an Earth Satellite",
        "confusion": "Is gravity zero inside an orbiting satellite?",
        "question": "An astronaut inside an orbiting satellite experiences weightlessness because:",
        "options": [
          "Gravitational pull of the Earth is zero at that altitude",
          "The astronaut and the satellite are in continuous free fall towards Earth",
          "Atmospheric pressure is zero in orbit",
          "Centrifugal force destroys mass"
        ],
        "correct": 1,
        "whyStudentsFail": "Students often believe Earth's gravity stops existing in orbit.",
        "goldenRule": "Gravitational pull is very strong in low Earth orbit (~89% of surface value). Weightlessness occurs because the satellite and occupant are in perpetual free fall together, meaning the normal contact force from the floor is zero ($N = 0$)!"
      },
      {
        "id": "rf-p8",
        "subject": "Physics",
        "trapTitle": "Electric Field vs Potential",
        "confusion": "Can electric field be zero at a point where electric potential is non-zero?",
        "question": "Can electric field intensity be zero at a point where electric potential is non-zero?",
        "options": [
          "No, if $E = 0$ then $V$ must be zero",
          "Yes, for example inside a charged hollow metallic sphere",
          "Only at infinite distance from charges",
          "No, $V$ and $E$ always vanish together"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think field and potential are always directly proportional ($E = V/d$).",
        "goldenRule": "Electric field is the gradient of potential: $E = -\\frac{dV}{dr}$. If potential is constant (not necessarily zero), its derivative is zero! Inside a charged conductor, $V = \\text{const} \\ne 0$ while $E = 0$."
      },
      {
        "id": "rf-p9",
        "subject": "Physics",
        "trapTitle": "Magnetic Force on Stationary Charge",
        "confusion": "Does a strong magnetic field exert force on a stationary electron?",
        "question": "A stationary electron is placed in a very strong uniform magnetic field. What force does it experience?",
        "options": [
          "Extremely strong force towards the North pole",
          "Strong centripetal force",
          "Zero force",
          "Oscillating force"
        ],
        "correct": 2,
        "whyStudentsFail": "Students remember magnetic fields exert force on charges, forgetting velocity is required.",
        "goldenRule": "Magnetic Lorentz force is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$. If velocity $v = 0$, magnetic force is identically zero, regardless of field strength!"
      },
      {
        "id": "rf-p10",
        "subject": "Physics",
        "trapTitle": "Open vs Closed Pipe Harmonics",
        "confusion": "Do closed organ pipes produce both even and odd harmonics?",
        "question": "Which harmonics are present in the acoustic resonance of a closed organ pipe?",
        "options": [
          "All harmonics (both even and odd: $f, 2f, 3f, \\dots$)",
          "Only odd harmonics ($f, 3f, 5f, \\dots$)",
          "Only even harmonics ($2f, 4f, 6f, \\dots$)",
          "Only the fundamental frequency"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse open pipes (all harmonics present) with closed pipes.",
        "goldenRule": "Closed organ pipe has a node at the closed end and antinode at the open end: $L = (2n-1)\\frac{\\lambda}{4} \\implies f_n = (2n-1)f_1$. Only ODD harmonics exist, which is why open pipes produce richer musical sound!"
      },
      {
        "id": "rf-p11",
        "subject": "Physics",
        "trapTitle": "Central Fringe in White Light Interference",
        "confusion": "What is the color of the central fringe when white light is used in Young's experiment?",
        "question": "If white light is used instead of monochromatic light in Young's double slit experiment, the central fringe is:",
        "options": [
          "Dark",
          "Pure white",
          "Red",
          "Violet"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think white light immediately splits into rainbows at the center.",
        "goldenRule": "At the geometric center, the path difference is zero ($\\Delta x = 0$) for ALL wavelengths simultaneously. Every color interferes constructively with zero phase difference, combining to produce a crisp central WHITE fringe surrounded by colored fringes."
      },
      {
        "id": "rf-p12",
        "subject": "Physics",
        "trapTitle": "Work Done by Centripetal Force",
        "confusion": "Does centripetal force do work on a particle in uniform circular motion?",
        "question": "A stone of mass $m$ tied to a string of length $r$ whirls in a horizontal circle with constant speed $v$. Work done by tension in one full revolution is:",
        "options": [
          "$2\\pi r \\left(\\frac{mv^2}{r}\\right)$",
          "$\\frac{1}{2}mv^2$",
          "Zero",
          "$mvr$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students multiply centripetal force by circumference $2\\pi r$.",
        "goldenRule": "Work is $W = F \\cdot s \\cdot \\cos\\theta$. The centripetal force is directed radially inward while displacement is tangential ($\\theta = 90^\\circ$). Since $\\cos(90^\\circ) = 0$, centripetal force does ZERO work!"
      },
      {
        "id": "rf-p13",
        "subject": "Physics",
        "trapTitle": "Total Internal Reflection Conditions",
        "confusion": "Can total internal reflection occur when light travels from air into glass?",
        "question": "Total internal reflection can occur ONLY when light travels from:",
        "options": [
          "An optically rarer medium to an optically denser medium",
          "An optically denser medium to an optically rarer medium",
          "Vacuum into any medium",
          "Air into water"
        ],
        "correct": 1,
        "whyStudentsFail": "Students forget the direction requirement for total internal reflection.",
        "goldenRule": "Light must bend AWAY from the normal to achieve $90^\\circ$ refraction. This only happens when entering a faster (rarer) medium, with angle of incidence exceeding the critical angle: $i > \\theta_c$."
      },
      {
        "id": "rf-p14",
        "subject": "Physics",
        "trapTitle": "Bernoulli Effect on Moving Trains",
        "confusion": "Why are standing passengers pulled towards a high-speed passing train?",
        "question": "A person standing near a railway track feels pushed towards a fast-moving train due to:",
        "options": [
          "Gravitational attraction of the heavy train",
          "Reduced air pressure between the person and the moving train",
          "Increased air pressure between the person and the train",
          "Electrostatic induction"
        ],
        "correct": 1,
        "whyStudentsFail": "Common sense suggests wind should blow you away from a train.",
        "goldenRule": "Bernoulli's theorem: where fluid speed is high, pressure is low ($P + \\frac{1}{2}\\rho v^2 = \\text{const}$). High-speed air between train and person has lower pressure than still air behind, creating a net inward force pushing the person toward the tracks."
      },
      {
        "id": "rf-p15",
        "subject": "Physics",
        "trapTitle": "Terminal Velocity Radius Dependency",
        "confusion": "If a raindrop's radius doubles, does its terminal velocity double?",
        "question": "Terminal velocity of a spherical body falling through a viscous fluid is proportional to:",
        "options": [
          "$r$",
          "$r^2$",
          "$r^3$",
          "$1/r$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse Stokes' force formula ($F \\propto r$) with terminal velocity ($v_t \\propto r^2$).",
        "goldenRule": "Weight scales with volume ($r^3$), while viscous drag scales with $r v_t$. Equating both: $r^3 \\propto r v_t \\implies v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta} \\propto r^2$. Doubling radius increases terminal velocity by 4 TIMES!"
      },
      {
        "id": "rf-p16",
        "subject": "Physics",
        "trapTitle": "Internal Resistance of an Ideal Voltmeter vs Ammeter",
        "confusion": "Should an ideal voltmeter have zero resistance?",
        "question": "What are the ideal resistances of an ideal voltmeter and an ideal ammeter?",
        "options": [
          "Voltmeter: 0, Ammeter: $\\infty$",
          "Voltmeter: $\\infty$, Ammeter: 0",
          "Both should have zero resistance",
          "Both should have infinite resistance"
        ],
        "correct": 1,
        "whyStudentsFail": "Students frequently swap the two ideal values.",
        "goldenRule": "A voltmeter is connected in PARALLEL and must draw ZERO current $\\implies R_V = \\infty$. An ammeter is connected in SERIES and must cause ZERO voltage drop $\\implies R_A = 0$."
      },
      {
        "id": "rf-p17",
        "subject": "Physics",
        "trapTitle": "Resistance Temperature Coefficient of Metals vs Semiconductors",
        "confusion": "What happens to the resistance of a semiconductor when heated?",
        "question": "When temperature is increased, what happens to the electrical resistance of pure silicon (a semiconductor)?",
        "options": [
          "It increases linearly",
          "It decreases exponentially",
          "It remains strictly unchanged",
          "It drops to zero instantly"
        ],
        "correct": 1,
        "whyStudentsFail": "Students generalize metallic behavior (where resistance increases with heat) to semiconductors.",
        "goldenRule": "Metals have positive temperature coefficient (lattice collisions increase with $T$). Semiconductors have negative temperature coefficient: thermal energy breaks covalent bonds, exponentially increasing carrier density (electrons and holes), which causes resistance to fall!"
      },
      {
        "id": "rf-p18",
        "subject": "Physics",
        "trapTitle": "Capacitor Energy with Dielectric",
        "confusion": "What happens to stored energy if a dielectric is inserted with battery disconnected?",
        "question": "A parallel plate capacitor is charged by a battery and then disconnected. A dielectric slab ($\\kappa > 1$) is inserted between plates. The stored electrostatic energy:",
        "options": [
          "Increases by $\\kappa$ times",
          "Decreases by $\\kappa$ times ($U' = U / \\kappa$)",
          "Remains constant",
          "Becomes zero"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse the battery-connected case ($U = \\frac{1}{2}CV^2$) with battery-disconnected case ($U = \\frac{Q^2}{2C}$).",
        "goldenRule": "With battery disconnected, charge $Q$ is constant. Capacitance increases: $C' = \\kappa C$. Energy is $U' = \\frac{Q^2}{2C'} = \\frac{Q^2}{2\\kappa C} = \\frac{U}{\\kappa}$. Energy decreases because the field does work pulling the dielectric into the gap!"
      },
      {
        "id": "rf-p19",
        "subject": "Physics",
        "trapTitle": "Diffraction Grating Resolving Power",
        "confusion": "Does increasing total lines $N$ on a grating improve resolving power?",
        "question": "The resolving power of a diffraction grating ($R = \\lambda / d\\lambda$) in order $n$ depends on:",
        "options": [
          "Order $n$ only",
          "Total number of rulings $N$ only",
          "Product $n \\times N$",
          "Wavelength $\\lambda$ only"
        ],
        "correct": 2,
        "whyStudentsFail": "Students forget that resolving power involves both the order and number of slits.",
        "goldenRule": "Resolving power of a diffraction grating is $R = \\frac{\\lambda}{d\\lambda} = n N$, where $n$ is spectral order and $N$ is total number of illuminated rulings."
      },
      {
        "id": "rf-p20",
        "subject": "Physics",
        "trapTitle": "Photoelectric Effect Threshold Frequency",
        "confusion": "Can high intensity red light cause photoelectric emission if frequency is below threshold?",
        "question": "Red light of high intensity shines on a zinc plate without causing emission. If very faint ultraviolet light shines on it instead, photoelectrons:",
        "options": [
          "Are still not emitted because UV is too faint",
          "Are emitted immediately without time lag",
          "Are emitted only after waiting several hours for heat build-up",
          "Are emitted with zero kinetic energy"
        ],
        "correct": 1,
        "whyStudentsFail": "Classical wave theory suggested intensity alone supplies enough energy given enough time.",
        "goldenRule": "Photoelectric emission is a 1-to-1 photon-electron collision. If $f < f_0$, zero emission occurs regardless of intensity. If $f \\ge f_0$, emission is instantaneous ($\\sim 10^{-9}\\text{ s}$), even for faint light!"
      },
      {
        "id": "rf-p21",
        "subject": "Physics",
        "trapTitle": "Transformer Operation with DC",
        "confusion": "Can a step-up transformer increase voltage of a 12V DC car battery?",
        "question": "What happens if a 12V DC battery is connected across the primary coil of a transformer?",
        "options": [
          "A high steady DC voltage is produced at the secondary",
          "Zero continuous voltage is produced at secondary, and primary coil may burn out",
          "An alternating AC voltage is produced at secondary",
          "A low steady DC voltage is produced"
        ],
        "correct": 1,
        "whyStudentsFail": "Students forget that mutual induction requires changing magnetic flux.",
        "goldenRule": "Transformers operate on Faraday's law: $e = -N\\frac{d\\Phi}{dt}$. Steady DC produces constant flux ($\\frac{d\\Phi}{dt} = 0$), inducing zero secondary voltage. Moreover, zero inductive reactance ($X_L = 0$) allows massive DC current through the primary, causing rapid burnout!"
      },
      {
        "id": "rf-p22",
        "subject": "Physics",
        "trapTitle": "Apparent Weight in an Elevator",
        "confusion": "When an elevator accelerates downward at $a = g$, what is apparent weight?",
        "question": "A person of mass $m$ stands on a scale inside an elevator moving downward with acceleration $a = g$. The scale reads:",
        "options": [
          "$2mg$",
          "$mg$",
          "Zero",
          "$-mg$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse downward velocity with downward acceleration.",
        "goldenRule": "Apparent weight is $N = m(g - a)$. When accelerating downward at $a = g$, $N = m(g - g) = 0$. The person floats in free fall weightlessness!"
      },
      {
        "id": "rf-p23",
        "subject": "Physics",
        "trapTitle": "Velocity of Sound in Vacuum",
        "confusion": "Can sound travel through space if its frequency is in the ultrasound range?",
        "question": "What is the speed of ultrasonic sound waves in the vacuum of outer space?",
        "options": [
          "$3 \\times 10^8\\text{ m/s}$",
          "$332\\text{ m/s}$",
          "Zero (cannot propagate)",
          "Infinite"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse sound with light / electromagnetic radiation.",
        "goldenRule": "Sound is a mechanical longitudinal wave requiring a physical material medium (particles) for compressions and rarefactions to travel. It CANNOT travel through vacuum under any circumstance!"
      },
      {
        "id": "rf-p24",
        "subject": "Physics",
        "trapTitle": "Phase Difference Between Displacement and Acceleration in SHM",
        "confusion": "What is the phase angle between displacement and acceleration in SHM?",
        "question": "The phase difference between displacement and acceleration of a simple harmonic oscillator is:",
        "options": [
          "0",
          "$\\pi / 2$ ($90^\\circ$)",
          "$\\pi$ ($180^\\circ$)",
          "$2\\pi$ ($360^\\circ$)"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse velocity-displacement phase ($\\pi/2$) with acceleration-displacement phase.",
        "goldenRule": "In SHM, $a = -\\omega^2 y = \\omega^2 y \\cos(\\omega t + \\pi)$. The negative sign signifies that acceleration is always directed OPPOSITE to displacement. The phase difference is strictly $\\pi$ radians ($180^\\circ$)!"
      },
      {
        "id": "rf-p25",
        "subject": "Physics",
        "trapTitle": "Mass Defect and Nuclear Binding Energy",
        "confusion": "Is the mass of a nucleus equal to the sum of the masses of its constituent nucleons?",
        "question": "The rest mass of an atomic nucleus is always:",
        "options": [
          "Equal to the sum of individual masses of its constituent protons and neutrons",
          "Less than the sum of individual masses of its constituent protons and neutrons",
          "Greater than the sum of individual masses of its constituent nucleons",
          "Zero"
        ],
        "correct": 1,
        "whyStudentsFail": "Classical conservation of mass leads students to assume nuclear mass equals constituent sum.",
        "goldenRule": "When nucleons bind to form a nucleus, energy is released: $\\Delta E = \\Delta m \\cdot c^2$ (Binding Energy). This lost energy comes from a loss in mass (mass defect $\\Delta m$). Thus, nuclear mass is strictly LESS than the sum of isolated parts!"
      },
      {
        "id": "rf-p26",
        "subject": "Physics",
        "trapTitle": "Conservation of Mechanical Energy in Damped Oscillations",
        "confusion": "Does mechanical energy remain constant in a real pendulum swinging in air?",
        "question": "For a real pendulum swinging in air, which quantity decreases exponentially with time?",
        "options": [
          "Time period",
          "Frequency",
          "Oscillation amplitude and total mechanical energy",
          "Length of string"
        ],
        "correct": 2,
        "whyStudentsFail": "Students forget that air resistance causes continuous non-conservative dissipation.",
        "goldenRule": "Damping forces (air viscosity) do negative work, converting mechanical energy into heat. Amplitude decays exponentially as $A(t) = A_0 e^{-\\gamma t}$, and energy as $E(t) = E_0 e^{-2\\gamma t}$."
      },
      {
        "id": "rf-p27",
        "subject": "Physics",
        "trapTitle": "Color of Sky on the Moon",
        "confusion": "What does the sky look like from the surface of the Moon during daytime?",
        "question": "To an observer standing on the Moon during lunar daytime, the sky appears:",
        "options": [
          "Bright blue like on Earth",
          "Completely black with visible stars",
          "Milky white",
          "Reddish orange"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think daytime illumination always makes the sky look blue.",
        "goldenRule": "The blue sky on Earth is caused by Rayleigh scattering of sunlight by atmospheric gas molecules ($I \\propto 1/\\lambda^4$). The Moon has no atmosphere, so no scattering occurs. The sky is pitch black even when the sun shines brightly!"
      },
      {
        "id": "rf-p28",
        "subject": "Physics",
        "trapTitle": "Current in Series vs Parallel Resistors",
        "confusion": "When two identical bulbs are connected in series, is the second bulb dimmer than the first?",
        "question": "Two identical light bulbs are connected in series across a battery. Which bulb is brighter?",
        "options": [
          "The first bulb receives current first and is brighter",
          "The second bulb is brighter",
          "Both bulbs shine with identical brightness",
          "Neither bulb glows"
        ],
        "correct": 2,
        "whyStudentsFail": "A misconception that electric current gets 'used up' as it flows past the first bulb.",
        "goldenRule": "Electric charge is conserved (Kirchhoff's current law). In a series circuit, current $I$ is IDENTICAL at every single point. Since power $P = I^2 R$ and $R_1 = R_2$, both bulbs glow with equal brightness!"
      },
      {
        "id": "rf-p29",
        "subject": "Physics",
        "trapTitle": "Surface Tension Temperature Dependency",
        "confusion": "Does heating water make it easier or harder to wash clothes?",
        "question": "When temperature of water increases, its surface tension:",
        "options": [
          "Increases linearly",
          "Decreases",
          "Remains constant",
          "Doubles at boiling point"
        ],
        "correct": 1,
        "whyStudentsFail": "Students overlook how thermal agitation affects cohesive intermolecular forces.",
        "goldenRule": "Higher temperature increases molecular kinetic energy, weakening intermolecular cohesive hydrogen bonds. Surface tension drops, allowing hot water to wet fabric fibers much better and wash clothes cleaner!"
      },
      {
        "id": "rf-p30",
        "subject": "Physics",
        "trapTitle": "Magnetic Flux vs Magnetic Field",
        "confusion": "If a coil is rotated parallel to magnetic field lines, is magnetic flux maximum?",
        "question": "A flat circular coil of area $A$ lies with its plane parallel to a magnetic field $\\vec{B}$. The magnetic flux through the coil is:",
        "options": [
          "$B A$",
          "Zero",
          "$B A / 2$",
          "Infinite"
        ],
        "correct": 1,
        "whyStudentsFail": "Students mix up the plane of the coil with the area normal vector $\\vec{A}$.",
        "goldenRule": "Magnetic flux is $\\Phi = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$, where $\\theta$ is the angle between $\\vec{B}$ and the NORMAL to the coil. When the coil is parallel to field lines, the normal is perpendicular ($\\theta = 90^\\circ$). Thus $\\cos(90^\\circ) = 0 \\implies \\Phi = 0$!"
      },
      {
        "id": "rf-c1",
        "subject": "Chemistry",
        "trapTitle": "pH of Dilute Acid (10^-8 M HCl)",
        "confusion": "Why isn't pH = -log(10^-8) = 8 for 10^-8 M HCl?",
        "question": "What is the true pH of a $10^{-8}\\text{ M } HCl$ solution at $25^\\circ\\text{C}$?",
        "options": [
          "pH = 8.0 (Alkaline)",
          "pH = 6.98 (Slightly acidic)",
          "pH = 7.00 (Neutral)",
          "pH = 1.00 (Strongly acidic)"
        ],
        "correct": 1,
        "whyStudentsFail": "Blindly applying $-\\log[H^+]$ without considering auto-ionization of water ($10^{-7}\\text{ M}$). An acid dissolved in water CANNOT make water alkaline!",
        "goldenRule": "When acid concentration is $\\le 10^{-6}\\text{ M}$, you MUST add $[H^+]$ from water: Total $[H^+] = 10^{-8} + x$. Solving $x(10^{-8}+x) = 10^{-14}$ gives total $[H^+] = 1.05 \\times 10^{-7}\\text{ M} \\implies pH \\approx 6.98$."
      },
      {
        "id": "rf-c2",
        "subject": "Chemistry",
        "trapTitle": "pH of Extremely Dilute Base (10^-7 M NaOH)",
        "confusion": "Does adding 10^-7 M NaOH to pure water keep pH at 7?",
        "question": "What is the calculated pH of a $10^{-7}\\text{ M } NaOH$ solution at $25^\\circ\\text{C}$?",
        "options": [
          "pH = 7.00",
          "pH = 7.21",
          "pH = 8.00",
          "pH = 6.79"
        ],
        "correct": 1,
        "whyStudentsFail": "Calculating $-\\log(10^{-7}) = 7$ leads students to conclude pH = 7. But adding a base to water CANNOT produce a neutral or acidic solution!",
        "goldenRule": "Water itself contributes $[OH^-] = 10^{-7}\\text{ M}$. Total $[OH^-] = 10^{-7} + x$. Solving $x(10^{-7}+x) = 10^{-14}$ yields total $[OH^-] = 1.618 \\times 10^{-7}\\text{ M} \\implies pOH = 6.79 \\implies pH = 14 - 6.79 = 7.21$."
      },
      {
        "id": "rf-c3",
        "subject": "Chemistry",
        "trapTitle": "Equivalent Weight of KMnO4 Across Media",
        "confusion": "Why does KMnO4 equivalent weight change from 31.6 to 52.67 to 158?",
        "question": "In strongly alkaline medium, what is the equivalent weight of $KMnO_4$ (Molar mass = $M$)?",
        "options": [
          "$M / 5 = 31.6$",
          "$M / 3 = 52.67$",
          "$M / 1 = 158$",
          "$M / 2 = 79$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students memorize $M/5 = 31.6$ for acidic medium and use it everywhere.",
        "goldenRule": "Acidic: $Mn^{+7} \\to Mn^{+2}$ (gain of 5 $e^-$) $\\implies E = M/5$. Neutral/Weak base: $Mn^{+7} \\to Mn^{+4}$ (gain of 3 $e^-$) $\\implies E = M/3$. Strongly alkaline: $Mn^{+7} \\to Mn^{+6}$ ($MnO_4^{2-}$, gain of 1 $e^-$) $\\implies E = M/1 = 158$!"
      },
      {
        "id": "rf-c4",
        "subject": "Chemistry",
        "trapTitle": "Primary vs Secondary Standards",
        "confusion": "Why isn't NaOH a primary standard even though it's available in pure solid pellets?",
        "question": "Why cannot standard NaOH solution be prepared by direct weighing?",
        "options": [
          "NaOH is insoluble in water",
          "NaOH is deliquescent and absorbs atmospheric $CO_2$",
          "NaOH has a very low molar mass",
          "NaOH decomposes explosively in light"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think being a solid is sufficient for primary standard qualification.",
        "goldenRule": "Primary standards must have constant, indefinite composition in air. Solid NaOH is hygroscopic (absorbs moisture from air) and reacts with atmospheric $CO_2$ to form $Na_2CO_3$, making exact weighing impossible."
      },
      {
        "id": "rf-c5",
        "subject": "Chemistry",
        "trapTitle": "Chlorobenzene Reactivity in Nucleophilic Substitution",
        "confusion": "Why doesn't chlorobenzene undergo nucleophilic substitution like chloroethane?",
        "question": "Why is chlorobenzene extremely inert towards nucleophilic substitution compared to chloroethane?",
        "options": [
          "Because benzene ring attracts nucleophiles",
          "Resonance imparts partial double bond character to C-Cl bond and carbon is $sp^2$ hybridized",
          "Because chlorine atom is too small",
          "Because it is an electrovalent compound"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think haloalkanes and haloarenes undergo identical substitution reactions.",
        "goldenRule": "Resonance delocalizes lone pairs from Cl into the benzene ring, giving C-Cl partial double bond character. Furthermore, $sp^2$ carbon has higher s-character (33.3%), making the bond shorter and harder to break."
      },
      {
        "id": "rf-c6",
        "subject": "Chemistry",
        "trapTitle": "Color of Zinc vs Iron Complexes",
        "confusion": "Why are Fe3+ compounds colored but Zn2+ compounds completely colorless?",
        "question": "Why are all hydrated salts of $Zn^{2+}$ colorless in aqueous solution?",
        "options": [
          "Zinc has an incomplete d-subshell",
          "Zinc has a completely filled $3d^{10}$ subshell, preventing d-d electron transition",
          "Zinc absorbs all visible light",
          "Zinc ions form only covalent bonds"
        ],
        "correct": 1,
        "whyStudentsFail": "Students assume all transition metal compounds are colored.",
        "goldenRule": "Color in transition metal complexes arises from excitation of d-electrons between split $t_{2g}$ and $e_g$ levels ($d-d$ transition). In $Zn^{2+}$ ($3d^{10}$), all d-orbitals are fully occupied, leaving no vacant orbital for promotion. Hence, colorless!"
      },
      {
        "id": "rf-c7",
        "subject": "Chemistry",
        "trapTitle": "SN1 vs SN2 Stereochemistry",
        "confusion": "Does SN1 reaction result in 100% inversion of configuration?",
        "question": "What is the stereochemical outcome of an $S_N1$ reaction on an optically active alkyl halide?",
        "options": [
          "Complete inversion of configuration (Walden inversion)",
          "Complete retention of configuration",
          "Racemization (with partial net inversion due to front-side shielding)",
          "Total loss of all optical activity with zero side-products"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse $S_N2$ (strict Walden inversion) with $S_N1$ (carbocation intermediate).",
        "goldenRule": "In $S_N1$, ionization forms a planar, achiral carbocation ($sp^2$). The nucleophile attacks from either face with roughly equal probability, leading to racemization (pair of enantiomers). In $S_N2$, backside attack forces 100% inversion!"
      },
      {
        "id": "rf-c8",
        "subject": "Chemistry",
        "trapTitle": "Acidic Nature of Phenol vs Ethanol",
        "confusion": "Why is phenol significantly more acidic than aliphatic alcohols like ethanol?",
        "question": "Phenol is millions of times more acidic than ethanol primarily because:",
        "options": [
          "Phenol has higher molecular weight",
          "The phenoxide ion is stabilized by resonance delocalization of negative charge into the aromatic ring",
          "Ethanol contains two carbon atoms",
          "Oxygen in phenol is $sp^3$ hybridized"
        ],
        "correct": 1,
        "whyStudentsFail": "Students assume both are simple alcohols containing the same -OH group.",
        "goldenRule": "In ethanol, loss of $H^+$ yields ethoxide ion ($C_2H_5O^-$), where the negative charge is concentrated on oxygen and destabilized by the $+I$ effect of the ethyl group. In phenol, the negative charge on phenoxide is delocalized over ortho and para positions of the benzene ring!"
      },
      {
        "id": "rf-c9",
        "subject": "Chemistry",
        "trapTitle": "Acidity of Carboxylic Acids vs Phenols",
        "confusion": "Which is more acidic: acetic acid or phenol?",
        "question": "Between acetic acid ($CH_3COOH$) and phenol ($C_6H_5OH$), which is more acidic and why?",
        "options": [
          "Phenol, because benzene has more resonance structures (5 structures vs 2)",
          "Acetic acid, because the negative charge is delocalized over two highly electronegative oxygen atoms",
          "Both have identical pKa values of 4.75",
          "Phenol, because of the $-I$ effect of the phenyl ring"
        ],
        "correct": 1,
        "whyStudentsFail": "Students count the number of resonance contributors (5 for phenoxide vs 2 for acetate) and incorrectly pick phenol.",
        "goldenRule": "Quality of resonance beats quantity! In acetate ion ($CH_3COO^-$), the negative charge is shared between TWO equivalent, highly electronegative oxygen atoms. In phenoxide, negative charge is forced onto less electronegative carbon atoms. $CH_3COOH$ ($pK_a \\approx 4.75$) is far more acidic than phenol ($pK_a \\approx 10$)!"
      },
      {
        "id": "rf-c10",
        "subject": "Chemistry",
        "trapTitle": "Fehling's Test for Benzaldehyde",
        "confusion": "Does benzaldehyde reduce Fehling's solution like aliphatic aldehydes?",
        "question": "What is observed when benzaldehyde ($C_6H_5CHO$) is boiled with Fehling's solution?",
        "options": [
          "Formation of a dense red precipitate of $Cu_2O$",
          "No red precipitate forms (Fehling's test is negative)",
          "Formation of a silver mirror",
          "Evolution of bubbling hydrogen gas"
        ],
        "correct": 1,
        "whyStudentsFail": "Students assume all aldehydes (both aliphatic and aromatic) reduce Fehling's solution.",
        "goldenRule": "Benzaldehyde readily reduces Tollens' reagent (silver mirror), but CANNOT reduce Fehling's solution! Aromatic aldehydes are weaker reducing agents due to resonance stabilization with the benzene ring, and Fehling's is a weaker oxidizing agent than Tollens'."
      },
      {
        "id": "rf-c11",
        "subject": "Chemistry",
        "trapTitle": "Basic Strength of Amines in Aqueous Solution",
        "confusion": "Why isn't trimethylamine (tertiary) the strongest base in water?",
        "question": "The order of basic strength of methylamines in aqueous solution is:",
        "options": [
          "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
          "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary)",
          "$NH_3 > CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N$",
          "$(CH_3)_3N > NH_3 > CH_3NH_2 > (CH_3)_2NH$"
        ],
        "correct": 1,
        "whyStudentsFail": "Considering only inductive $+I$ effect makes students pick tertiary amine as strongest.",
        "goldenRule": "In aqueous medium, basic strength depends on a balance of THREE factors: inductive effect ($+I$), hydration/solvation energy of conjugate cation, and steric hindrance. For methyl groups: $2^\\circ > 1^\\circ > 3^\\circ > NH_3$ (mnemonic: 213). For ethyl groups: $2^\\circ > 3^\\circ > 1^\\circ > NH_3$ (231)!"
      },
      {
        "id": "rf-c12",
        "subject": "Chemistry",
        "trapTitle": "Oxidation State of Fe in Brown Ring Complex",
        "confusion": "What is the true oxidation state of iron in [Fe(H2O)5(NO)]SO4?",
        "question": "In the brown ring test complex $[Fe(H_2O)_5(NO)]SO_4$, what is the oxidation state of iron?",
        "options": [
          "+3",
          "+2",
          "+1",
          "0"
        ],
        "correct": 2,
        "whyStudentsFail": "Assuming NO is a neutral ligand leads to $+2$. But in this complex, electron transfer occurs.",
        "goldenRule": "In the brown ring complex, nitric oxide transfers an electron to $Fe^{2+}$, converting ligand to nitrosonium ion ($NO^+$) and reducing iron to the rare $+1$ oxidation state: $[Fe^{+1}(H_2O)_5(NO^+)]SO_4$!"
      },
      {
        "id": "rf-c13",
        "subject": "Chemistry",
        "trapTitle": "Order of Reaction from Stoichiometry",
        "confusion": "Can the order of an overall reaction be deduced directly from its balanced equation?",
        "question": "Can the rate law and order of an overall multi-step chemical reaction be determined purely by inspecting the balanced stoichiometric equation?",
        "options": [
          "Yes, order always equals sum of stoichiometric coefficients",
          "No, order is an experimental quantity and cannot be deduced theoretically from an overall equation",
          "Yes, but only for gaseous reactions",
          "Yes, but only if temperature is $298\\text{ K}$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students equate molecularity of elementary steps with reaction order of overall complex reactions.",
        "goldenRule": "Molecularity is theoretical for elementary steps. Reaction ORDER is strictly an experimentally measured parameter determined by the rate-determining step. It can be zero, fractional, or negative, and cannot be deduced from a balanced overall equation!"
      },
      {
        "id": "rf-c14",
        "subject": "Chemistry",
        "trapTitle": "Temperature Coefficient of Reaction Rate",
        "confusion": "Why does a 10 deg C rise roughly double the rate of a chemical reaction?",
        "question": "A $10^\\circ\\text{C}$ rise in temperature doubles the reaction rate primarily because:",
        "options": [
          "Average molecular speed doubles",
          "Total number of collisions doubles",
          "The fraction of molecules possessing energy $\\ge$ activation energy ($E_a$) roughly doubles",
          "Activation energy decreases by half"
        ],
        "correct": 2,
        "whyStudentsFail": "Students think molecular collisions double with a small $10^\\circ\\text{C}$ increase.",
        "goldenRule": "Total collision frequency increases by only ~2-3% with a $10^\\circ\\text{C}$ rise ($v_{rms} \\propto \\sqrt{T}$). The dramatic doubling of reaction rate occurs because the Maxwell-Boltzmann fraction of effective collisions ($e^{-E_a/RT}$) exceeding threshold energy nearly doubles!"
      },
      {
        "id": "rf-c15",
        "subject": "Chemistry",
        "trapTitle": "Enthalpy of Neutralization of Strong vs Weak Acid",
        "confusion": "Why is heat of neutralization of HCN with NaOH less than 57.1 kJ/mol?",
        "question": "The heat of neutralization of strong acid with strong base is $-57.1\\text{ kJ/mol}$. For $HCN + NaOH$, it is only $-12.1\\text{ kJ/mol}$ because:",
        "options": [
          "HCN is a volatile liquid",
          "A portion of liberated heat is consumed in completely ionizing the weak acid HCN",
          "NaCN precipitates out",
          "Neutralization is an endothermic reaction"
        ],
        "correct": 1,
        "whyStudentsFail": "Students assume all acid-base neutralizations liberate exactly $57.1\\text{ kJ}$ per mole.",
        "goldenRule": "Strong acids and bases are $100\\%$ dissociated. For weak acids (like $HCN$ or acetic acid), significant energy (enthalpy of ionization $\\approx +45\\text{ kJ/mol}$) must first be absorbed to break covalent bonds and ionize $H^+$, lowering the net heat released!"
      },
      {
        "id": "rf-c16",
        "subject": "Chemistry",
        "trapTitle": "Concentration Terms Independent of Temperature",
        "confusion": "Does molarity change when laboratory temperature rises in summer?",
        "question": "Which of the following concentration units remains completely unaffected by changes in temperature?",
        "options": [
          "Molarity ($M$)",
          "Normality ($N$)",
          "Molality ($m$)",
          "Volume percentage ($\\text{v/v}$)"
        ],
        "correct": 2,
        "whyStudentsFail": "Students mix up molarity (moles / liter solution) and molality (moles / kg solvent).",
        "goldenRule": "Volume expands with temperature, causing Molarity ($M$) and Normality ($N$) to change. Molality ($m$) and Mole Fraction depend strictly on MASS of solvent, which is temperature-independent!"
      },
      {
        "id": "rf-c17",
        "subject": "Chemistry",
        "trapTitle": "Electrolysis of Aqueous NaCl",
        "confusion": "Why is H2 evolved at the cathode instead of metallic sodium during electrolysis of brine?",
        "question": "During electrolysis of concentrated aqueous $NaCl$ (brine) using inert electrodes, the product liberated at the cathode is:",
        "options": [
          "Metallic sodium ($Na$)",
          "Hydrogen gas ($H_2$)",
          "Oxygen gas ($O_2$)",
          "Chlorine gas ($Cl_2$)"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think $Na^+$ ions will deposit as sodium metal at the cathode.",
        "goldenRule": "In aqueous solution, $H^+$ ($E^\\circ = 0.00\\text{ V}$) has a much higher reduction potential than $Na^+$ ($E^\\circ = -2.71\\text{ V}$). Therefore, water/$H^+$ is preferentially reduced: $2H_2O + 2e^- \\to H_2\\uparrow + 2OH^-$!"
      },
      {
        "id": "rf-c18",
        "subject": "Chemistry",
        "trapTitle": "Rusting of Iron Requirements",
        "confusion": "Does iron rust in boiled, distilled water sealed under oil?",
        "question": "An iron nail placed in boiled distilled water covered by a layer of kerosene oil does NOT rust because:",
        "options": [
          "Distilled water is too acidic",
          "Boiling expels dissolved oxygen, and both $O_2$ and $H_2O$ are mandatory for rusting",
          "Kerosene reacts chemically with iron",
          "Iron requires salt to oxidize"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think water alone is sufficient to produce rust ($Fe_2O_3 \\cdot xH_2O$).",
        "goldenRule": "Rusting is an electrochemical process requiring BOTH water AND dissolved oxygen ($O_2$). Boiling water expels dissolved oxygen, and the oil barrier prevents air from re-dissolving, completely preventing rust formation."
      },
      {
        "id": "rf-c19",
        "subject": "Chemistry",
        "trapTitle": "Markovnikov vs Anti-Markovnikov Addition",
        "confusion": "Does HCl show peroxide effect (anti-Markovnikov addition) like HBr?",
        "question": "When propene reacts with $HCl$ in the presence of benzoyl peroxide, the major product is:",
        "options": [
          "1-chloropropane (Anti-Markovnikov)",
          "2-chloropropane (Markovnikov)",
          "1,2-dichloropropane",
          "Propane"
        ],
        "correct": 1,
        "whyStudentsFail": "Students apply the peroxide effect blindly to all hydrogen halides.",
        "goldenRule": "The peroxide effect (Kharasch effect) occurs ONLY with $HBr$! For $HCl$, the H-Cl bond is too strong ($430.5\\text{ kJ/mol}$) for homolytic cleavage by alkoxy radicals. For $HI$, the I-I bond formation is endothermic. Thus, $HCl$ always follows standard Markovnikov's rule, yielding 2-chloropropane!"
      },
      {
        "id": "rf-c20",
        "subject": "Chemistry",
        "trapTitle": "Lucas Reagent Turbidity Speed",
        "confusion": "Which alcohol produces immediate cloudiness with Lucas reagent at room temperature?",
        "question": "When treated with Lucas reagent ($conc. HCl + anh. ZnCl_2$), which alcohol gives immediate cloudiness/turbidity?",
        "options": [
          "Primary alcohol ($1^\\circ$)",
          "Secondary alcohol ($2^\\circ$)",
          "Tertiary alcohol ($3^\\circ$)",
          "Methanol"
        ],
        "correct": 2,
        "whyStudentsFail": "Students mix up the turbidity times for the three alcohol classes.",
        "goldenRule": "Reaction proceeds via carbocation intermediate. Tertiary carbocations form instantly $\\implies$ immediate turbidity ($<30\\text{ s}$). Secondary takes ~5 minutes. Primary gives no turbidity at room temperature unless heated for hours!"
      },
      {
        "id": "rf-c21",
        "subject": "Chemistry",
        "trapTitle": "Aldol Condensation Requirement",
        "confusion": "Can benzaldehyde undergo self-aldol condensation?",
        "question": "Why does benzaldehyde ($C_6H_5CHO$) fail to undergo self-aldol condensation?",
        "options": [
          "It is an aromatic compound",
          "It lacks any $\\alpha$-hydrogen atoms",
          "It does not contain a carbonyl group",
          "It is insoluble in water"
        ],
        "correct": 1,
        "whyStudentsFail": "Students see hydrogens on the benzene ring and think they can be removed by base.",
        "goldenRule": "Aldol condensation requires enolate formation by base removal of an acidic hydrogen on the carbon directly adjacent to carbonyl ($\\alpha$-carbon). In benzaldehyde, the $\\alpha$-carbon is a benzene ring carbon already bonded to 3 carbons and has NO hydrogen attached ($0\\text{ }\\alpha-H$). Hence, it undergoes Cannizzaro instead!"
      },
      {
        "id": "rf-c22",
        "subject": "Chemistry",
        "trapTitle": "Iodoform Test for 3-Pentanone vs 2-Pentanone",
        "confusion": "Do both 2-pentanone and 3-pentanone give a positive iodoform test?",
        "question": "Between 2-pentanone and 3-pentanone, which one gives a yellow precipitate of iodoform ($CHI_3$)?",
        "options": [
          "Only 2-pentanone",
          "Only 3-pentanone",
          "Both give positive iodoform test",
          "Neither gives iodoform test"
        ],
        "correct": 0,
        "whyStudentsFail": "Students know pentanone is a ketone and assume all ketone isomers behave identically.",
        "goldenRule": "Iodoform test specifically tests for the methyl carbonyl group ($CH_3-C=O$). 2-pentanone has $CH_3-CO-CH_2CH_2CH_3$ (has terminal methyl group $\\implies$ POSITIVE). 3-pentanone has $CH_3CH_2-CO-CH_2CH_3$ (no terminal methyl $\\implies$ NEGATIVE)!"
      },
      {
        "id": "rf-c23",
        "subject": "Chemistry",
        "trapTitle": "Colligative Properties Depend On What?",
        "confusion": "Does osmotic pressure depend on chemical nature of solute molecules?",
        "question": "Colligative properties of dilute solutions depend strictly on:",
        "options": [
          "Chemical structure of solute particles",
          "Total number / concentration of solute particles, independent of their chemical nature",
          "Density of solute",
          "Color of solution"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think chemical reactivity alters colligative properties.",
        "goldenRule": "Colligative properties ($\\Delta T_b, \\Delta T_f, \\Pi, \\Delta P/P^\\circ$) depend exclusively on the NUMBER of discrete solute particles present per unit solvent, not on their size, shape, or chemical identity!"
      },
      {
        "id": "rf-c24",
        "subject": "Chemistry",
        "trapTitle": "Conductance of Electrolytes on Dilution",
        "confusion": "Does specific conductance increase or decrease upon dilution?",
        "question": "Upon dilution of an electrolytic solution, what happens to specific conductance ($\\kappa$) and molar conductance ($\\Lambda_m$)?",
        "options": [
          "Both increase",
          "Both decrease",
          "Specific conductance decreases, but molar conductance increases",
          "Specific conductance increases, but molar conductance decreases"
        ],
        "correct": 2,
        "whyStudentsFail": "Students think all forms of electrical conductance increase when more water is added.",
        "goldenRule": "Specific conductance ($\\kappa$) is conductance per $1\\text{ cm}^3$ volume; dilution reduces number of current-carrying ions per unit volume, so $\\kappa$ DECREASES. Molar conductance $\\Lambda_m = \\kappa \\cdot V$ INCREASES because volume $V$ containing 1 mole increases much faster than $\\kappa$ falls!"
      },
      {
        "id": "rf-c25",
        "subject": "Chemistry",
        "trapTitle": "Paramagnetism of Oxygen Molecule (O2)",
        "confusion": "Why is O2 paramagnetic according to Molecular Orbital Theory?",
        "question": "According to Molecular Orbital Theory (MOT), the oxygen molecule ($O_2$) is paramagnetic because:",
        "options": [
          "All bonding orbitals are completely filled",
          "It contains two unpaired electrons in degenerate antibonding $\\pi^*$ orbitals",
          "Oxygen atoms have odd atomic numbers",
          "It has a triple covalent bond"
        ],
        "correct": 1,
        "whyStudentsFail": "Lewis dot structures show all electrons paired, making students guess diamagnetic.",
        "goldenRule": "Lewis structure fails to explain $O_2$ paramagnetism! MOT electronic configuration shows the last two valence electrons enter degenerate antibonding $\\pi^*_{2p_x}$ and $\\pi^*_{2p_y}$ orbitals singly with parallel spins by Hund's rule, creating two unpaired electrons!"
      },
      {
        "id": "rf-c26",
        "subject": "Chemistry",
        "trapTitle": "Common Ion Effect on Solubility",
        "confusion": "What happens to the solubility of AgCl when NaCl is added to saturated solution?",
        "question": "When solid $NaCl$ is added to a saturated aqueous solution of sparingly soluble $AgCl$, the solubility of $AgCl$:",
        "options": [
          "Increases significantly",
          "Decreases sharply, precipitating more $AgCl$",
          "Remains completely unchanged",
          "Doubles"
        ],
        "correct": 1,
        "whyStudentsFail": "Students overlook Le Chatelier's principle applied to the solubility product.",
        "goldenRule": "Equilibrium: $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$. Adding $NaCl$ introduces common $Cl^-$ ions, driving equilibrium to the left according to Le Chatelier's principle. This common ion effect drastically suppresses $AgCl$ solubility!"
      },
      {
        "id": "rf-c27",
        "subject": "Chemistry",
        "trapTitle": "Schottky vs Frenkel Defects",
        "confusion": "Which crystal defect decreases the density of a solid?",
        "question": "Which crystal point defect causes a noticeable decrease in the density of an ionic crystal?",
        "options": [
          "Frenkel defect",
          "Schottky defect",
          "Interstitial defect",
          "Metal excess defect"
        ],
        "correct": 1,
        "whyStudentsFail": "Students mix up the mechanisms of Schottky and Frenkel defects.",
        "goldenRule": "In a Schottky defect, an equal number of cations and anions are completely MISSING from lattice sites into empty space (mass lost while volume constant $\\implies$ density DECREASES). In Frenkel defect, ions merely dislocate into interstitial spaces within the crystal (density stays unchanged)!"
      },
      {
        "id": "rf-c28",
        "subject": "Chemistry",
        "trapTitle": "Oxidation of Toluene by Alkaline KMnO4",
        "confusion": "What is the final organic oxidation product when any alkylbenzene is oxidized by KMnO4?",
        "question": "When toluene ($C_6H_5CH_3$) or ethylbenzene ($C_6H_5CH_2CH_3$) is refluxed with alkaline $KMnO_4$, the final product after acidification is:",
        "options": [
          "Benzaldehyde",
          "Benzoic acid",
          "Benzyl alcohol",
          "Phthalic acid"
        ],
        "correct": 1,
        "whyStudentsFail": "Students expect ethylbenzene to produce phenylacetic acid ($C_6H_5CH_2COOH$).",
        "goldenRule": "Any alkyl side chain on a benzene ring containing at least one benzylic hydrogen (regardless of chain length: methyl, ethyl, propyl) is completely degraded and oxidized down to a single carboxyl group: BENZOIC ACID ($C_6H_5COOH$)!"
      },
      {
        "id": "rf-c29",
        "subject": "Chemistry",
        "trapTitle": "Cannizzaro Reaction Condition",
        "confusion": "Can acetaldehyde (ethanal) undergo Cannizzaro reaction?",
        "question": "Which of the following aldehydes CANNOT undergo Cannizzaro reaction?",
        "options": [
          "Formaldehyde ($HCHO$)",
          "Benzaldehyde ($C_6H_5CHO$)",
          "Acetaldehyde ($CH_3CHO$)",
          "Trimethylacetaldehyde / Pivalaldehyde ($(CH_3)_3CCHO$)"
        ],
        "correct": 2,
        "whyStudentsFail": "Students forget that having alpha-hydrogens causes aldol condensation instead.",
        "goldenRule": "Cannizzaro reaction is exclusive to aldehydes that have ZERO $\\alpha$-hydrogens ($HCHO, C_6H_5CHO, (CH_3)_3CCHO$). Acetaldehyde has three $\\alpha$-hydrogens and will undergo aldol condensation instead when treated with alkali!"
      },
      {
        "id": "rf-c30",
        "subject": "Chemistry",
        "trapTitle": "Amphoteric Nature of Amino Acids",
        "confusion": "Why do amino acids exist as dipolar zwitterions in neutral aqueous solution?",
        "question": "In neutral aqueous solution, amino acids exist primarily as dipolar ions known as:",
        "options": [
          "Anions",
          "Cations",
          "Zwitterions ($H_3N^+-CHR-COO^-$)",
          "Neutral uncharged molecules ($H_2N-CHR-COOH$)"
        ],
        "correct": 2,
        "whyStudentsFail": "Students draw amino acids with neutral $-NH_2$ and $-COOH$ groups in water.",
        "goldenRule": "The basic amino group ($-NH_2$) accepts a proton from the acidic carboxyl group ($-COOH$) through internal proton transfer, forming a dipolar ion with both positive and negative charges on the same molecule: a Zwitterion!"
      },
      {
        "id": "rf-m1",
        "subject": "Maths",
        "trapTitle": "Tangent vs Normal Slope",
        "confusion": "Does a vertical tangent have slope 0 or undefined?",
        "question": "If a curve has a vertical tangent line at point $P$, what is the value of $\\frac{dy}{dx}$ at that point?",
        "options": [
          "$\\frac{dy}{dx} = 0$",
          "$\\frac{dy}{dx}$ is undefined (or $\\frac{dx}{dy} = 0$)",
          "$\\frac{dy}{dx} = 1$",
          "$\\frac{dy}{dx} = -1$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse horizontal tangents (where $\\frac{dy}{dx} = 0$) with vertical tangents.",
        "goldenRule": "Horizontal line: slope $m = \\tan(0) = 0 \\implies \\frac{dy}{dx} = 0$. Vertical line: slope $m = \\tan(90^\\circ) = \\infty$ (undefined). For vertical tangents, solve $\\frac{dx}{dy} = 0$ or find where the denominator of derivative equals zero!"
      },
      {
        "id": "rf-m2",
        "subject": "Maths",
        "trapTitle": "Rolle's Theorem Interval Requirements",
        "confusion": "Why does Rolle's theorem fail for f(x) = 1/(x^2 - 1) on [-2, 2] even though f(-2) = f(2)?",
        "question": "Why can Rolle's theorem NOT be applied to $f(x) = \\frac{1}{x^2 - 1}$ on the closed interval $[-2, 2]$?",
        "options": [
          "Because $f(-2) \\ne f(2)$",
          "Because $f(x)$ is discontinuous at $x = \\pm 1$, which lie inside the interval $[-2, 2]$",
          "Because $f'(x)$ is zero everywhere",
          "Because the interval length is greater than 1"
        ],
        "correct": 1,
        "whyStudentsFail": "Students check only the endpoint condition $f(a) = f(b)$ and forget to test continuity across the ENTIRE interval.",
        "goldenRule": "Hypotheses 1 and 2 are mandatory: $f(x)$ must be CONTINUOUS on $[a, b]$ and DIFFERENTIABLE on $(a, b)$. If the function has vertical asymptotes or jumps inside the interval (here at $x = 1$ and $x = -1$), Rolle's theorem completely fails!"
      },
      {
        "id": "rf-m3",
        "subject": "Maths",
        "trapTitle": "Derivative of Implicit Symmetry x^p y^q = (x+y)^(p+q)",
        "confusion": "Do the powers p and q affect the derivative dy/dx?",
        "question": "If $x^p y^q = (x + y)^{p+q}$, what is the value of $\\frac{dy}{dx}$?",
        "options": [
          "$\\frac{p}{q} \\frac{y}{x}$",
          "$\\frac{y}{x}$ (always, independent of $p$ and $q$)",
          "$\\frac{x}{y}$",
          "$-\\frac{y}{x}$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students spend 10 minutes doing lengthy algebraic differentiation and get lost in terms with $p$ and $q$.",
        "goldenRule": "For ANY powers $p, q > 0$, the identity $x^p y^q = (x+y)^{p+q}$ always yields $\\frac{dy}{dx} = \\frac{y}{x}$ and its second derivative $\\frac{d^2y}{dx^2} = 0$! Memorize this for fast 1-mark exam questions."
      },
      {
        "id": "rf-m4",
        "subject": "Maths",
        "trapTitle": "Principal Value of Inverse Cosine for Negative Arguments",
        "confusion": "Is cos^-1(-x) equal to -cos^-1(x)?",
        "question": "What is the correct identity for $\\cos^{-1}(-x)$ for $x \\in [0, 1]$?",
        "options": [
          "$-\\cos^{-1}(x)$",
          "$\\pi - \\cos^{-1}(x)$",
          "$\\frac{\\pi}{2} - \\cos^{-1}(x)$",
          "$\\cos^{-1}(x)$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students assume inverse cosine is an odd function like $\\sin^{-1}(-x) = -\\sin^{-1}(x)$.",
        "goldenRule": "The principal branch range of $\\cos^{-1}(x)$ is strictly $[0, \\pi]$ (never negative!). Therefore, $\\cos^{-1}(-x) = \\pi - \\cos^{-1}(x)$. For example: $\\cos^{-1}(-1/2) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$!"
      },
      {
        "id": "rf-m5",
        "subject": "Maths",
        "trapTitle": "Odd Function Over Symmetric Limits",
        "confusion": "Do you need to calculate the indefinite integral of sin^7(x) from -pi to +pi?",
        "question": "What is the value of the definite integral $\\int_{-\\pi}^{\\pi} x^2 \\sin(x) dx$?",
        "options": [
          "$\\pi^2 / 2$",
          "$2\\pi$",
          "0",
          "$-\\pi$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students attempt integration by parts multiple times instead of checking symmetry.",
        "goldenRule": "Check parity! $f(-x) = (-x)^2 \\sin(-x) = -x^2 \\sin x = -f(x)$ (odd function). The definite integral of ANY odd function over symmetric limits $[-a, a]$ is IDENTICALLY ZERO without doing any integration!"
      },
      {
        "id": "rf-m6",
        "subject": "Maths",
        "trapTitle": "Square Matrix Determinant Scaling |kA|",
        "confusion": "If A is a 3x3 matrix, is |2A| equal to 2|A|?",
        "question": "If $A$ is a $3 \\times 3$ matrix and $|A| = 5$, what is $|3A|$?",
        "options": [
          "15",
          "45",
          "135",
          "405"
        ],
        "correct": 2,
        "whyStudentsFail": "Students factor out the scalar once as $3 \\times 5 = 15$.",
        "goldenRule": "In determinants, a scalar factors out from EACH row/column individually! For an $n \\times n$ matrix: $|kA| = k^n |A|$. For a $3 \\times 3$ matrix: $|3A| = 3^3 |A| = 27 \\times 5 = 135$!"
      },
      {
        "id": "rf-m7",
        "subject": "Maths",
        "trapTitle": "Number of Terms in Binomial Expansion",
        "confusion": "Does (x + y + z)^n have n + 1 terms?",
        "question": "How many terms are in the expansion of the trinomial $(x + y + z)^n$?",
        "options": [
          "$n + 1$",
          "$(n + 1)^2$",
          "$\\frac{(n + 1)(n + 2)}{2}$",
          "$3n$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse the standard two-variable binomial $(x+y)^n$ ($n+1$ terms) with multinomial expansions.",
        "goldenRule": "For a multinomial with $k$ variables $(x_1 + x_2 + \\dots + x_k)^n$, the number of distinct terms is given by stars-and-bars: $\\binom{n + k - 1}{k - 1}$. For 3 variables: $\\binom{n + 2}{2} = \\frac{(n + 1)(n + 2)}{2}$!"
      },
      {
        "id": "rf-m8",
        "subject": "Maths",
        "trapTitle": "Angle Between Two Perpendicular Vectors",
        "confusion": "What is the dot product of two mutually orthogonal non-zero vectors?",
        "question": "If two non-zero vectors $\\vec{a}$ and $\\vec{b}$ are perpendicular to each other, which condition holds?",
        "options": [
          "$\\vec{a} \\times \\vec{b} = 0$",
          "$\\vec{a} \\cdot \\vec{b} = 0$",
          "$|\\vec{a}| = |\\vec{b}|$",
          "$\\vec{a} + \\vec{b} = 0$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students mix up dot product condition with cross product condition.",
        "goldenRule": "PERPENDICULAR vectors: dot product is zero because $\\cos(90^\\circ) = 0 \\implies \\vec{a} \\cdot \\vec{b} = 0$. PARALLEL vectors: cross product is zero because $\\sin(0) = 0 \\implies \\vec{a} \\times \\vec{b} = \\vec{0}$!"
      },
      {
        "id": "rf-m9",
        "subject": "Maths",
        "trapTitle": "Eccentricity of Conic Sections",
        "confusion": "Can an ellipse have eccentricity greater than 1?",
        "question": "Which match between conic section and its eccentricity $e$ is correct?",
        "options": [
          "Circle: $e = 1$, Parabola: $e = 0$, Ellipse: $e > 1$",
          "Circle: $e = 0$, Ellipse: $0 < e < 1$, Parabola: $e = 1$, Hyperbola: $e > 1$",
          "Ellipse: $e > 1$, Hyperbola: $e < 1$",
          "Parabola: $e = 2$, Hyperbola: $e = 1$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students mix up the relative values of eccentricity across the four conic sections.",
        "goldenRule": "Remember: Circle $e = 0$ $\\implies$ Ellipse $0 < e < 1$ $\\implies$ Parabola $e = 1$ $\\implies$ Hyperbola $e > 1$ $\\implies$ Rectangular Hyperbola $e = \\sqrt{2}$!"
      },
      {
        "id": "rf-m10",
        "subject": "Maths",
        "trapTitle": "Critical Points vs Extrema",
        "confusion": "Does f'(c) = 0 guarantee that x = c is a local maximum or minimum?",
        "question": "If $f'(c) = 0$ for a differentiable function, which statement is strictly true?",
        "options": [
          "$x = c$ must be a local maximum",
          "$x = c$ must be a local minimum",
          "$x = c$ is a stationary point, but may be a point of inflection (no extremum)",
          "$f''(c)$ must also be zero"
        ],
        "correct": 2,
        "whyStudentsFail": "Students assume any point where derivative is zero must be a peak or a valley.",
        "goldenRule": "$f'(c) = 0$ is a NECESSARY condition for an interior extremum, but NOT sufficient! For example, $f(x) = x^3$ has $f'(0) = 0$, but $x = 0$ is neither a maximum nor minimum; it is a horizontal point of inflection!"
      },
      {
        "id": "rf-m11",
        "subject": "Maths",
        "trapTitle": "Direction Cosines Sum of Squares",
        "confusion": "Can direction cosines be (1, 1, 1)?",
        "question": "Can the numbers $(1, 1, 1)$ represent the direction cosines ($l, m, n$) of a line in 3D space?",
        "options": [
          "Yes, for a line equally inclined to all axes",
          "No, because the sum of squares $l^2 + m^2 + n^2$ must strictly equal 1",
          "Yes, if the line passes through origin",
          "Only in spherical coordinates"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse direction RATIOS ($a, b, c$) with direction COSINES ($l, m, n$).",
        "goldenRule": "Direction ratios can be $(1, 1, 1)$. But direction cosines represent actual unit vector components, so they MUST satisfy $l^2 + m^2 + n^2 = 1$! The direction cosines for $(1, 1, 1)$ are $\\left(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}\\right)$."
      },
      {
        "id": "rf-m12",
        "subject": "Maths",
        "trapTitle": "Integral of 1/x vs ln|x|",
        "confusion": "Why is the absolute value necessary in int (1/x) dx = ln|x| + C?",
        "question": "Why is $\\int \\frac{1}{x} dx = \\ln|x| + C$ written with absolute value signs?",
        "options": [
          "It is just a stylistic convention",
          "Because $\\ln(x)$ is undefined for negative real numbers, but $1/x$ is defined for all $x \\ne 0$",
          "Because the derivative of $|x|$ is 1",
          "To make the constant $C$ positive"
        ],
        "correct": 1,
        "whyStudentsFail": "Students omit absolute values, causing errors when evaluating definite integrals with negative bounds.",
        "goldenRule": "The domain of $f(x) = 1/x$ includes all negative numbers ($x < 0$). For $x < 0$, $\\frac{d}{dx}\\ln(-x) = \\frac{1}{-x}(-1) = \\frac{1}{x}$. Combining $x > 0$ and $x < 0$ requires $\\ln|x|$!"
      },
      {
        "id": "rf-m13",
        "subject": "Maths",
        "trapTitle": "Derivative of Absolute Value Function",
        "confusion": "Is f(x) = |x| differentiable at x = 0?",
        "question": "What is the derivative of $f(x) = |x|$ at the origin $x = 0$?",
        "options": [
          "$f'(0) = 0$",
          "$f'(0) = 1$",
          "$f'(0) = -1$",
          "Does not exist (non-differentiable at sharp corner)"
        ],
        "correct": 3,
        "whyStudentsFail": "Students see that $|x|$ is continuous everywhere and think it must be differentiable.",
        "goldenRule": "Left-hand derivative is $\\lim_{h \\to 0^-}\\frac{-h}{h} = -1$. Right-hand derivative is $\\lim_{h \\to 0^+}\\frac{h}{h} = +1$. Since $\\text{LHD} \\ne \\text{RHD}$, the derivative DOES NOT EXIST at the sharp corner $x = 0$!"
      },
      {
        "id": "rf-m14",
        "subject": "Maths",
        "trapTitle": "Independent vs Mutually Exclusive Events",
        "confusion": "Can two mutually exclusive events with positive probabilities be independent?",
        "question": "If two events $A$ and $B$ have positive probabilities ($P(A) > 0, P(B) > 0$) and are mutually exclusive, can they be independent?",
        "options": [
          "Yes, always",
          "No, mutually exclusive events can NEVER be independent (if probabilities are non-zero)",
          "Only if $P(A) = P(B) = 0.5$",
          "Depends on the sample space"
        ],
        "correct": 1,
        "whyStudentsFail": "Students treat 'mutually exclusive' and 'independent' as interchangeable synonyms.",
        "goldenRule": "Mutually exclusive means they CANNOT happen together: $P(A \\cap B) = 0$. Independent requires $P(A \\cap B) = P(A) \\cdot P(B)$. If $P(A) > 0$ and $P(B) > 0$, their product is non-zero, so $P(A)P(B) \\ne 0$. They are highly dependent: if one occurs, the other is impossible!"
      },
      {
        "id": "rf-m15",
        "subject": "Maths",
        "trapTitle": "Multiplication of Matrices Commutativity",
        "confusion": "Is matrix multiplication AB = BA always true for square matrices?",
        "question": "If $A$ and $B$ are two square matrices of order 2, does $AB = BA$ hold in general?",
        "options": [
          "Yes, multiplication of numbers and matrices is always commutative",
          "No, matrix multiplication is generally non-commutative ($AB \\ne BA$)",
          "Yes, provided both are non-singular",
          "Yes, provided their determinants are equal"
        ],
        "correct": 1,
        "whyStudentsFail": "Students carry arithmetic commutativity ($a \\times b = b \\times a$) into linear algebra.",
        "goldenRule": "Matrix multiplication is strictly non-commutative in general! $AB \\ne BA$ for almost all matrix pairs. Never assume $(A+B)^2 = A^2 + 2AB + B^2$; the true expansion is $A^2 + AB + BA + B^2$!"
      },
      {
        "id": "rf-m16",
        "subject": "Maths",
        "trapTitle": "Value of 0! (Zero Factorial)",
        "confusion": "Why is 0! equal to 1 instead of 0?",
        "question": "What is the mathematical value of $0!$?",
        "options": [
          "0",
          "1",
          "Undefined",
          "Infinity"
        ],
        "correct": 1,
        "whyStudentsFail": "Intuition suggests multiplying zero factors should yield zero.",
        "goldenRule": "From the recurrence $n! = n \\times (n-1)!$, setting $n = 1$ gives $1! = 1 \\times 0! \\implies 1 = 1 \\times 0! \\implies 0! = 1$. Combinatorially, there is exactly 1 way to arrange zero objects (the empty set arrangement)!"
      },
      {
        "id": "rf-m17",
        "subject": "Maths",
        "trapTitle": "Derivative of a^x vs e^x",
        "confusion": "Is the derivative of 2^x just 2^x?",
        "question": "What is the derivative of $f(x) = 2^x$ with respect to $x$?",
        "options": [
          "$x \\cdot 2^{x-1}$",
          "$2^x$",
          "$2^x \\ln 2$",
          "$\\frac{2^x}{\\ln 2}$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students either apply the power rule ($n x^{n-1}$) or forget the natural log multiplier.",
        "goldenRule": "For constant base $a > 0$: $\\frac{d}{dx}(a^x) = a^x \\ln a$. Power rule $\\frac{d}{dx}(x^n) = n x^{n-1}$ applies ONLY when variable is in the base and exponent is constant!"
      },
      {
        "id": "rf-m18",
        "subject": "Maths",
        "trapTitle": "Continuous vs Differentiable Functions",
        "confusion": "Does continuity always guarantee differentiability?",
        "question": "Which statement accurately describes the relationship between continuity and differentiability?",
        "options": [
          "Continuity implies differentiability",
          "Differentiability implies continuity, but continuity does NOT imply differentiability",
          "Both are completely equivalent",
          "Neither implies the other"
        ],
        "correct": 1,
        "whyStudentsFail": "Students assume smooth curves and continuous curves have identical mathematical properties.",
        "goldenRule": "Differentiable $\\implies$ Continuous ALWAYS! But Continuous $\\not\\implies$ Differentiable! A classic counterexample is $f(x) = |x|$, which is continuous everywhere on $\\mathbb{R}$, but fails to be differentiable at $x = 0$."
      },
      {
        "id": "rf-m19",
        "subject": "Maths",
        "trapTitle": "Area Under Curve with Negative y",
        "confusion": "Can geometric area between a curve and x-axis ever be negative?",
        "question": "The geometric enclosed area between $y = \\sin x$ and the x-axis from $x = 0$ to $x = 2\\pi$ is:",
        "options": [
          "0",
          "2",
          "4",
          "$2\\pi$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students evaluate $\\int_0^{2\\pi}\\sin x dx = [-\\cos x]_0^{2\\pi} = -1 - (-1) = 0$ and say area is zero.",
        "goldenRule": "Definite integral calculates ALGEBRAIC net area (positive above axis, negative below). GEOMETRIC area is strictly non-negative: $\\text{Area} = \\int_0^\\pi \\sin x dx + \\left|\\int_\\pi^{2\\pi}\\sin x dx\\right| = 2 + |-2| = 4$ square units!"
      },
      {
        "id": "rf-m20",
        "subject": "Maths",
        "trapTitle": "Sum of Roots vs Product of Roots of Unity",
        "confusion": "What is the product of all three cube roots of unity (1, omega, omega^2)?",
        "question": "The product of the three cube roots of unity ($1 \\times \\omega \\times \\omega^2$) is:",
        "options": [
          "0",
          "1",
          "-1",
          "$\\omega$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse SUM of roots ($1 + \\omega + \\omega^2 = 0$) with PRODUCT of roots.",
        "goldenRule": "Sum of roots of unity is ZERO: $1 + \\omega + \\omega^2 = 0$. Product of roots is ONE: $1 \\cdot \\omega \\cdot \\omega^2 = \\omega^3 = 1$!"
      },
      {
        "id": "rf-m21",
        "subject": "Maths",
        "trapTitle": "Homogeneous Differential Equation Degree",
        "confusion": "How do you identify a homogeneous differential equation?",
        "question": "The differential equation $\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$ is homogeneous because:",
        "options": [
          "Both numerator and denominator have terms of degree 2",
          "The right hand side can be expressed purely as a function of $(y/x)$",
          "Both of the above are equivalent and true",
          "Neither is true"
        ],
        "correct": 2,
        "whyStudentsFail": "Students look only at powers of individual variables instead of total term degree.",
        "goldenRule": "A differential equation is homogeneous if $f(tx, ty) = t^0 f(x, y) = f(x, y)$. Dividing numerator and denominator by $x^2$ gives $\\frac{1 + (y/x)^2}{y/x} = g(y/x)$. Use substitution $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$!"
      },
      {
        "id": "rf-m22",
        "subject": "Maths",
        "trapTitle": "Inverse of a Singular Matrix",
        "confusion": "Can a matrix with determinant zero have an inverse?",
        "question": "A square matrix $A$ has $|A| = 0$. Its inverse $A^{-1}$:",
        "options": [
          "Is the null matrix",
          "Is the identity matrix",
          "Does not exist",
          "Equals the transpose of $A$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students forget that the formula $A^{-1} = \\frac{\\text{adj}(A)}{|A|}$ divides by determinant.",
        "goldenRule": "Division by zero is impossible! If $|A| = 0$ (singular matrix), $A^{-1}$ DOES NOT EXIST. An inverse exists if and only if $A$ is non-singular ($|A| \\ne 0$)!"
      },
      {
        "id": "rf-m23",
        "subject": "Maths",
        "trapTitle": "Asymptotes of a Hyperbola",
        "confusion": "What is the angle between asymptotes of a rectangular hyperbola?",
        "question": "The angle between the two asymptotes of the rectangular hyperbola $x^2 - y^2 = a^2$ is:",
        "options": [
          "$45^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$ (perpendicular)",
          "$180^\\circ$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students forget the defining geometric feature of a rectangular hyperbola.",
        "goldenRule": "Asymptotes of $x^2/a^2 - y^2/b^2 = 1$ are $y = \\pm \\frac{b}{a}x$. For a rectangular hyperbola, $a = b$, giving asymptotes $y = x$ (slope 1) and $y = -x$ (slope -1). Product of slopes is $1 \\times (-1) = -1$, meaning asymptotes are strictly PERPENDICULAR ($90^\\circ$)!"
      },
      {
        "id": "rf-m24",
        "subject": "Maths",
        "trapTitle": "Limit of (1 + 1/n)^n as n tends to infinity",
        "confusion": "Does (1 + 1/n)^n equal 1 because 1^infinity is 1?",
        "question": "What is $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$?",
        "options": [
          "1",
          "0",
          "$e \\approx 2.71828$",
          "$\\infty$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students think $1^\\infty = 1$. But $1^\\infty$ is an indeterminate form!",
        "goldenRule": "The base approaches 1 while the exponent grows to infinity. This is the fundamental definition of Euler's number: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e$!"
      },
      {
        "id": "rf-m25",
        "subject": "Maths",
        "trapTitle": "Vector Cross Product Self-Product",
        "confusion": "Is a vector cross product with itself equal to 1 or zero?",
        "question": "For any 3D vector $\\vec{a}$, what is $\\vec{a} \\times \\vec{a}$?",
        "options": [
          "$|\\vec{a}|^2$",
          "$\\vec{0}$ (null vector)",
          "1",
          "$\\vec{a}$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$ with the cross product.",
        "goldenRule": "Dot product with itself gives magnitude squared: $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$. Cross product involves sine of angle between identical vectors ($\\theta = 0$): $\\vec{a} \\times \\vec{a} = |\\vec{a}|^2 \\sin(0)\\hat{n} = \\vec{0}$!"
      },
      {
        "id": "rf-m26",
        "subject": "Maths",
        "trapTitle": "Middle Term When Power is Odd",
        "confusion": "How many middle terms exist in the binomial expansion of (x + y)^9?",
        "question": "In the expansion of $(x + y)^9$, how many middle terms are there?",
        "options": [
          "1",
          "2 (namely $T_5$ and $T_6$)",
          "3",
          "None"
        ],
        "correct": 1,
        "whyStudentsFail": "Students forget that total number of terms is $n + 1 = 10$ (an even number).",
        "goldenRule": "When index $n$ is EVEN, total terms $n+1$ is odd $\\implies$ ONE middle term: $T_{n/2 + 1}$. When index $n$ is ODD, total terms $n+1$ is even $\\implies$ TWO middle terms: $T_{(n+1)/2}$ and $T_{(n+3)/2}$!"
      },
      {
        "id": "rf-m27",
        "subject": "Maths",
        "trapTitle": "Determinant of Transpose",
        "confusion": "Does transposing a matrix change its determinant?",
        "question": "If $A$ is a square matrix, how is $\\det(A^T)$ related to $\\det(A)$?",
        "options": [
          "$\\det(A^T) = -\\det(A)$",
          "$\\det(A^T) = \\det(A)$",
          "$\\det(A^T) = \\frac{1}{\\det(A)}$",
          "$\\det(A^T) = [\\det(A)]^2$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students confuse swapping two rows (which flips sign) with transposing the entire matrix.",
        "goldenRule": "Transposing interchanges ALL rows with columns simultaneously. The determinant value is completely UNCHANGED: $|A^T| = |A|$!"
      },
      {
        "id": "rf-m28",
        "subject": "Maths",
        "trapTitle": "Derivative of ln(cos^-1 x) Chain Rule",
        "confusion": "Why does the derivative of ln(cos^-1 x) have a negative sign?",
        "question": "What is $\\frac{d}{dx}\\left[\\ln(\\cos^{-1} x)\\right]$?",
        "options": [
          "$\\frac{1}{\\sqrt{1-x^2}\\cos^{-1} x}$",
          "$-\\frac{1}{\\sqrt{1-x^2}\\cos^{-1} x}$",
          "$\\frac{1}{\\cos^{-1} x}$",
          "$-\\frac{\\sqrt{1-x^2}}{\\cos^{-1} x}$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students forget that the inner derivative $\\frac{d}{dx}(\\cos^{-1} x) = -\\frac{1}{\\sqrt{1-x^2}}$ carries a crucial MINUS sign.",
        "goldenRule": "Chain rule: $\\frac{d}{dx}\\ln(u) = \\frac{1}{u}\\frac{du}{dx}$. Here $u = \\cos^{-1} x$, and $\\frac{du}{dx} = -\\frac{1}{\\sqrt{1-x^2}}$. Thus, the derivative is strictly $-\\frac{1}{\\sqrt{1-x^2}\\cos^{-1} x}$!"
      },
      {
        "id": "rf-m29",
        "subject": "Maths",
        "trapTitle": "Probability of Impossible Event vs Zero Probability",
        "confusion": "Does probability 0 always mean an event is strictly impossible?",
        "question": "In continuous probability distributions, what is the probability of a continuous random variable taking an exact single value $P(X = c)$?",
        "options": [
          "1",
          "0 (yet the value is not impossible)",
          "0.5",
          "Undefined"
        ],
        "correct": 1,
        "whyStudentsFail": "Students equate zero probability with impossibility (true only in discrete sample spaces).",
        "goldenRule": "For a continuous variable, probability is the area under a probability density function: $P(X = c) = \\int_c^c f(x)dx = 0$. The probability of any single exact point is zero, even though points from the domain occur!"
      },
      {
        "id": "rf-m30",
        "subject": "Maths",
        "trapTitle": "Direction Cosines of Z-axis",
        "confusion": "What are the direction cosines of the z-axis?",
        "question": "The direction cosines of the z-axis in 3D Cartesian coordinates are:",
        "options": [
          "$(1, 0, 0)$",
          "$(0, 1, 0)$",
          "$(0, 0, 1)$",
          "$(1, 1, 1)$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students mix up the order of the axes.",
        "goldenRule": "The z-axis makes angles $90^\\circ$ with x-axis, $90^\\circ$ with y-axis, and $0^\\circ$ with z-axis. Direction cosines are $(\\cos 90^\\circ, \\cos 90^\\circ, \\cos 0^\\circ) = (0, 0, 1)$!"
      }
    ]
  }
};
