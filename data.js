const STUDY_DATA = {
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
        "id": "phy-ex-1",
        "subject": "Physics",
        "topic": "SHM & Oscillations",
        "year": "KMC 2082 Set A",
        "question": "A watch based on an oscillating spring gives correct time on Earth. If it is taken to the Moon, then it:",
        "options": [
          "Becomes fast",
          "Becomes slow",
          "Remains unaffected",
          "Stops"
        ],
        "correct": 2,
        "explanation": "The time period of a spring oscillator is $T = 2\\pi\\sqrt{m/k}$, which depends solely on mass $m$ and spring constant $k$, and is completely independent of acceleration due to gravity $g$. Hence, its rate remains unaffected."
      },
      {
        "id": "phy-ex-2",
        "subject": "Physics",
        "topic": "Bohr's Atomic Model",
        "year": "KMC 2082 Set A",
        "question": "If $E_n$ and $L_n$ denote the magnitude of total energy and angular momentum of an electron in the nth orbit of a Bohr atom, then:",
        "options": [
          "$E_n \\propto L_n$",
          "$E_n \\propto \\frac{1}{L_n}$",
          "$E_n \\propto L_n^2$",
          "$E_n \\propto \\frac{1}{L_n^2}$"
        ],
        "correct": 3,
        "explanation": "By Bohr's postulate, $L_n = \\frac{nh}{2\\pi} \\implies n \\propto L_n$. Total energy in nth orbit is $E_n = -\\frac{13.6}{n^2}\\text{ eV} \\implies E_n \\propto \\frac{1}{n^2}$. Substituting $n \\propto L_n$ gives $E_n \\propto \\frac{1}{L_n^2}$."
      },
      {
        "id": "phy-ex-3",
        "subject": "Physics",
        "topic": "Waves & Sound",
        "year": "KMC 2082 Set A",
        "question": "An empty vessel is being filled with water. Its natural frequency will:",
        "options": [
          "Go on increasing",
          "Go on decreasing",
          "Remains unchanged",
          "Insufficient information"
        ],
        "correct": 0,
        "explanation": "An empty vessel filled with water acts as a closed organ pipe whose length $L$ of vibrating air column decreases as water rises. Fundamental frequency $f = \\frac{v}{4L}$. As $L$ decreases, the pitch/frequency goes on increasing."
      },
      {
        "id": "phy-ex-4",
        "subject": "Physics",
        "topic": "Photoelectric Effect",
        "year": "KMC 2078 Set 1",
        "question": "A charged particle is released from rest in a region of steady and uniform magnetic and electric fields which are parallel to each other. The particle will move in a:",
        "options": [
          "Straight line",
          "Circle",
          "Helix",
          "Cycloid"
        ],
        "correct": 0,
        "explanation": "Since the particle starts from rest, its initial velocity is zero. The magnetic force $\\vec{F}_B = q(\\vec{v} \\times \\vec{B}) = 0$. The electric force $\\vec{F}_E = q\\vec{E}$ accelerates it along the direction of $\\vec{E}$. Once moving parallel to $\\vec{B}$, the angle between $\\vec{v}$ and $\\vec{B}$ is $0^\\circ$, so magnetic force remains zero. The particle continues in a straight line."
      },
      {
        "id": "phy-ex-5",
        "subject": "Physics",
        "topic": "Rotational Dynamics",
        "year": "KMC 2078 Set 1",
        "question": "A flywheel of moment of inertia $4\\text{ kg}\\cdot\\text{m}^2$ rotating about an axis with 120 rev/min is brought to rest in 5 s. The torque needed is:",
        "options": [
          "5 Nm",
          "10 Nm",
          "20 Nm",
          "40 Nm"
        ],
        "correct": 1,
        "explanation": "Initial angular velocity $\\omega_0 = 120\\text{ rpm} = \\frac{120 \\times 2\\pi}{60} = 4\\pi \\approx 12.57\\text{ rad/s}$. Angular acceleration $\\alpha = \\frac{\\omega_0}{t} = \\frac{4\\pi}{5} = 2.513\\text{ rad/s}^2$. Required torque $\\tau = I\\alpha = 4 \\times \\frac{4\\pi}{5} = 3.2\\pi \\approx 10.05\\text{ Nm}$."
      },
      {
        "id": "phy-ex-6",
        "subject": "Physics",
        "topic": "Waves & Sound",
        "year": "KMC 2078 Set 1",
        "question": "Two sound waves are represented by $y_1 = a\\sin(\\omega t - kx)$ and $y_2 = b\\cos(\\omega t - kx)$. The phase difference between the two waves is:",
        "options": [
          "$\\pi$",
          "$\\frac{\\pi}{4}$",
          "$\\frac{3\\pi}{4}$",
          "$\\frac{\\pi}{2}$"
        ],
        "correct": 3,
        "explanation": "Using trigonometric identity, $y_2 = b\\cos(\\omega t - kx) = b\\sin\\left(\\omega t - kx + \\frac{\\pi}{2}\\right)$. The phase difference is $\\phi = \\frac{\\pi}{2}$."
      },
      {
        "id": "phy-ex-7",
        "subject": "Physics",
        "topic": "Modern Physics",
        "year": "KMC 2078 Set 1",
        "question": "Which of the following is NOT deflected by both electric and magnetic fields?",
        "options": [
          "$\\alpha$-particle",
          "$\\beta$-particle",
          "Photon",
          "Proton"
        ],
        "correct": 2,
        "explanation": "Photons are neutral quanta of electromagnetic radiation with zero net electric charge. Hence, neither electric ($\\vec{F} = q\\vec{E}$) nor magnetic ($\\vec{F} = q\\vec{v}\\times\\vec{B}$) fields exert any deflecting force on them."
      },
      {
        "id": "phy-ex-8",
        "subject": "Physics",
        "topic": "Waves & Sound",
        "year": "KMC 2082 Set A",
        "question": "When a long steel pipe is tapped at one end, a listener at the other end hears two distinct sounds:",
        "options": [
          "Of the same intensity, at the same time",
          "Of the same intensity, one after another",
          "Less intense first, more intense later",
          "More intense first, less intense later"
        ],
        "correct": 3,
        "explanation": "Sound travels much faster in solids (steel, $\\approx 5000\\text{ m/s}$) than in air ($\\approx 330\\text{ m/s}$) and attenuates less. Therefore, the sound wave through the steel arrives first and with higher intensity, followed later by the less intense sound wave travelling through air."
      },
      {
        "id": "chem-ex-1",
        "subject": "Chemistry",
        "topic": "Ionic Equilibrium",
        "year": "KMC 2080 Set A & Re-exam",
        "question": "Common ion effect is NOT applicable for which of the following pairs?",
        "options": [
          "$HCl$ & $H_2SO_4$",
          "$H_2S$ & $HCl$",
          "$NH_4OH$ & $NH_4Cl$",
          "$CH_3COOH$ & $CH_3COONa$"
        ],
        "correct": 0,
        "explanation": "The common ion effect is defined specifically as the suppression of dissociation of a WEAK electrolyte by adding a strong electrolyte containing a common ion. Both $HCl$ and $H_2SO_4$ are strong electrolytes that dissociate virtually 100%, so common ion suppression does not occur."
      },
      {
        "id": "chem-ex-2",
        "subject": "Chemistry",
        "topic": "Ionic Equilibrium",
        "year": "KMC 2080 Re-exam & 2079 Set B",
        "question": "Which of the following 0.1 M solutions has a basic pH ($> 7$)?",
        "options": [
          "$NH_4Cl$",
          "$CH_3COONa$",
          "$CH_3COONH_4$",
          "$(NH_4)_2SO_4$"
        ],
        "correct": 1,
        "explanation": "$CH_3COONa$ is a salt of a weak acid ($CH_3COOH$) and a strong base ($NaOH$). In aqueous solution, the acetate ion ($CH_3COO^-$) undergoes anionic hydrolysis: $CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$, generating excess $OH^-$ ions and making the solution basic (pH > 7)."
      },
      {
        "id": "chem-ex-3",
        "subject": "Chemistry",
        "topic": "Haloalkanes & Haloarenes",
        "year": "KMC 2080 Re-exam & 2079 Set B",
        "question": "The chemical compound used as tear gas (Chloropicrin) is:",
        "options": [
          "$Cl_3C-NO_2$",
          "$CH_3CH_2OH$",
          "$C_6H_5COCH_3$",
          "$C_6H_5CH_2CH_2OH$"
        ],
        "correct": 0,
        "explanation": "Chloropicrin ($Cl_3C-NO_2$, trichloronitromethane) is synthesized by heating chloroform ($CHCl_3$) with concentrated nitric acid ($HNO_3$) and is widely utilized as a potent tear gas / riot control agent."
      },
      {
        "id": "chem-ex-4",
        "subject": "Chemistry",
        "topic": "Haloalkanes & Haloarenes",
        "year": "KMC 2080 Re-exam & 2079 Set B",
        "question": "The hybridization state of the carbon atom attached to halogen in haloarene (chlorobenzene) is:",
        "options": [
          "$sp$",
          "$sp^2$",
          "$sp^3$",
          "$dsp^2$"
        ],
        "correct": 1,
        "explanation": "In haloarenes such as chlorobenzene, the halogen atom is directly bonded to an aromatic ring carbon. Every carbon atom in the planar benzene ring is $sp^2$ hybridized with $33.3%$ s-character."
      },
      {
        "id": "chem-ex-5",
        "subject": "Chemistry",
        "topic": "Copper Metallurgy",
        "year": "KMC 2080 Set A",
        "question": "Schweitzer's reagent, used as a solvent for dissolving cellulose in rayon production, is:",
        "options": [
          "$CuSO_4 \\cdot 5H_2O$",
          "$CuSO_4 \\cdot H_2O$",
          "$[Cu(NH_3)_4]SO_4 \\cdot 4H_2O$",
          "$[Cu(NH_3)_4](OH)_2$"
        ],
        "correct": 2,
        "explanation": "Schweitzer's reagent is tetraamminecopper(II) sulphate or hydroxide, formulated as $[Cu(NH_3)_4]SO_4 \\cdot 4H_2O$ or $[Cu(NH_3)_4](OH)_2$, characterized by its deep azure-blue color."
      },
      {
        "id": "chem-ex-6",
        "subject": "Chemistry",
        "topic": "Zinc Metallurgy",
        "year": "KMC 2080 Set B",
        "question": "A blast furnace cannot be utilized for the industrial extraction of zinc because:",
        "options": [
          "Low melting point of zinc",
          "Low boiling point of zinc (907 °C)",
          "High reactivity of zinc",
          "High malleability of zinc"
        ],
        "correct": 1,
        "explanation": "The reduction temperature of zinc oxide by carbon inside a blast furnace is around 1100 °C to 1400 °C, which is significantly higher than zinc's boiling point of 907 °C. Zinc would volatilize into vapor and instantly re-oxidize back to ZnO by $CO_2$ in the upper furnace stack."
      },
      {
        "id": "chem-ex-7",
        "subject": "Chemistry",
        "topic": "Volumetric Analysis",
        "year": "KMC 2079 Set B",
        "question": "The pH of a neutral aqueous solution at 50 °C ($pK_w = 13.26$) is:",
        "options": [
          "6.0",
          "7.0",
          "6.63",
          "7.13"
        ],
        "correct": 2,
        "explanation": "Neutrality means $[H^+] = [OH^-]$. Since $pH + pOH = pK_w = 13.26$, for a neutral solution $2pH = 13.26 \\implies pH = 13.26 / 2 = 6.63$. At elevated temperatures, water dissociation increases, lowering the neutral pH below 7.0!"
      },
      {
        "id": "chem-ex-8",
        "subject": "Chemistry",
        "topic": "Copper Metallurgy",
        "year": "KMC 2079 Set B",
        "question": "In copper smelting, 'Matte' is a molten mixture primarily consisting of:",
        "options": [
          "$Cu_2S$",
          "$FeS$",
          "$Cu_2S + FeS$",
          "$Cu_2S + FeO$"
        ],
        "correct": 2,
        "explanation": "During smelting of roasted copper pyrites in a reverberatory furnace, a heavy molten sulphide layer termed 'Matte' forms, containing approximately $45-50% Cu_2S$ and $FeS$."
      },
      {
        "id": "math-kmc-1",
        "subject": "Maths",
        "topic": "Logarithmic Series",
        "year": "KMC 2079 Set A",
        "question": "The sum of the infinite series $\\frac{1}{3} + \\frac{(1/3)^3}{3} + \\frac{(1/3)^5}{5} + \\dots$ up to $\\infty$ is:",
        "options": [
          "$\\ln 2$",
          "$\\ln\\sqrt{2}$",
          "$\\ln 3$",
          "$2\\ln 2$"
        ],
        "correct": 1,
        "explanation": "Recall the standard logarithmic expansion: $\\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right) = x + \\frac{x^3}{3} + \\frac{x^5}{5} + \\dots$. Putting $x = 1/3$: $\\frac{1+1/3}{1-1/3} = \\frac{4/3}{2/3} = 2$. Therefore, the sum is $\\frac{1}{2}\\ln 2 = \\ln(2^{1/2}) = \\ln\\sqrt{2}$."
      },
      {
        "id": "math-kmc-2",
        "subject": "Maths",
        "topic": "Permutations & Combinations",
        "year": "KMC 2079 Set A",
        "question": "If $P(n, r) = 336$ and $C(n, r) = 56$, then the value of $n$ is:",
        "options": [
          "7",
          "8",
          "9",
          "10"
        ],
        "correct": 1,
        "explanation": "Since $P(n, r) = r! \\times C(n, r)$, we have $r! = \\frac{336}{56} = 6 \\implies r = 3$. Then $P(n, 3) = n(n-1)(n-2) = 336$. Factoring $336 = 8 \\times 7 \\times 6$, so $n = 8$."
      },
      {
        "id": "math-kmc-3",
        "subject": "Maths",
        "topic": "Permutations",
        "year": "KMC 2079 Set A",
        "question": "The total number of 9-digit numbers which have all different digits is:",
        "options": [
          "$10!$",
          "$9!$",
          "$9 \\times 9!$",
          "$10 \\times 10!$"
        ],
        "correct": 2,
        "explanation": "A 9-digit number cannot have 0 as its first digit. So there are 9 choices (1 to 9) for the first digit. The remaining 8 positions must be filled from the remaining 9 digits (including 0) without repetition, which can be done in $P(9, 8) = 9!$ ways. Total = $9 \\times 9!$."
      },
      {
        "id": "math-kmc-4",
        "subject": "Maths",
        "topic": "Derivatives",
        "year": "KMC 2079 Set A",
        "question": "If $x^4 \\cdot y^5 = (x + y)^9$, then $\\frac{dy}{dx}$ is equal to:",
        "options": [
          "$\\frac{x}{y}$",
          "$\\frac{y}{x}$",
          "$-\\frac{y}{x}$",
          "$\\left(\\frac{x}{y}\\right)^2$"
        ],
        "correct": 1,
        "explanation": "For any homogeneous implicit relation of the form $x^p y^q = (x+y)^{p+q}$, taking logarithms gives $p\\ln x + q\\ln y = (p+q)\\ln(x+y)$. Differentiating both sides with respect to $x$ and simplifying always yields $\\frac{dy}{dx} = \\frac{y}{x}$."
      },
      {
        "id": "math-kmc-5",
        "subject": "Maths",
        "topic": "Conic Sections (Ellipse)",
        "year": "KMC 2079 Set A",
        "question": "The straight line $y = x + c$ touches the ellipse $\\frac{x^2}{3} + \\frac{y^2}{1} = 1$. The value of $c$ is:",
        "options": [
          "$\\pm 1$",
          "$\\pm 2$",
          "$\\pm 3$",
          "$\\pm 4$"
        ],
        "correct": 1,
        "explanation": "For a line $y = mx + c$ to touch the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, the tangency condition is $c^2 = a^2 m^2 + b^2$. Here $m = 1$, $a^2 = 3$, $b^2 = 1$. So $c^2 = 3(1)^2 + 1 = 4 \\implies c = \\pm 2$."
      },
      {
        "id": "math-kmc-6",
        "subject": "Maths",
        "topic": "Conic Sections (Hyperbola)",
        "year": "KMC 2079 Set A",
        "question": "The equation $x^2 = 5y^2 + 20$ represents a conic section. The eccentricity ($e$) of this conic section is:",
        "options": [
          "$e = 0$",
          "$e = 1$",
          "$e > 1$",
          "$e < 1$"
        ],
        "correct": 2,
        "explanation": "Rewriting $x^2 - 5y^2 = 20 \\implies \\frac{x^2}{20} - \\frac{y^2}{4} = 1$. This is the standard equation of a hyperbola ($\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$). The eccentricity of any hyperbola is always strictly greater than 1 ($e > 1$)."
      },
      {
        "id": "math-kmc-7",
        "subject": "Maths",
        "topic": "3D Geometry (Direction Cosines)",
        "year": "KMC 2079 Set A",
        "question": "The direction cosines of a line equally inclined to the coordinate axes are:",
        "options": [
          "$\\pm \\frac{1}{\\sqrt{2}}, \\pm \\frac{1}{\\sqrt{2}}, \\pm \\frac{1}{\\sqrt{2}}$",
          "$\\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}$",
          "$\\pm \\frac{1}{2}, \\pm \\frac{1}{2}, \\pm \\frac{1}{2}$",
          "$\\pm 1, \\pm 1, \\pm 1$"
        ],
        "correct": 1,
        "explanation": "If a line is equally inclined to axes, $\\alpha = \\beta = \\gamma \\implies l = m = n$. Since $l^2 + m^2 + n^2 = 1$, we have $3l^2 = 1 \\implies l = \\pm \\frac{1}{\\sqrt{3}}$. Thus the direction cosines are $\\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}$."
      },
      {
        "id": "math-kmc-8",
        "subject": "Maths",
        "topic": "3D Geometry (Angle Between Lines)",
        "year": "KMC 2079 Set A",
        "question": "The angle between the lines whose direction ratios are $(1, 2, 1)$ and $(2, 1, -1)$ is:",
        "options": [
          "$\\pi / 2$",
          "$\\pi / 3$",
          "$\\pi / 4$",
          "$\\pi / 6$"
        ],
        "correct": 1,
        "explanation": "$\\cos\\theta = \\frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}} = \\frac{(1)(2) + (2)(1) + (1)(-1)}{\\sqrt{1+4+1}\\sqrt{4+1+1}} = \\frac{3}{\\sqrt{6}\\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2}$. Therefore $\\theta = \\cos^{-1}(1/2) = \\frac{\\pi}{3}$."
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
        "goldenRule": "Photons carry momentum $p = \\frac{h}{\\lambda} = \\frac{E}{c}$ despite zero rest mass. They exert radiation pressure upon reflection or absorption!"
      },
      {
        "id": "rf-p4",
        "subject": "Physics",
        "trapTitle": "Electron in Parallel Fields",
        "confusion": "What happens when an electron travels parallel to both electric and magnetic fields?",
        "question": "An electron is moving with velocity $v$ parallel to both uniform electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields. What is the magnetic force on it?",
        "options": [
          "$evB$",
          "$eE/B$",
          "Zero",
          "$-evB$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students assume magnetic field always deflects a moving charge.",
        "goldenRule": "Magnetic Lorentz force is $\\vec{F}_B = q(\\vec{v} \\times \\vec{B}) = qvB\\sin\\theta$. When $\\vec{v}$ is parallel to $\\vec{B}$, $\\theta = 0^\\circ \\implies \\sin 0^\\circ = 0$, so magnetic force is ZERO! Only electric force acts."
      },
      {
        "id": "rf-p5",
        "subject": "Physics",
        "trapTitle": "Stopping Potential Slope Dependency",
        "confusion": "Does the slope of stopping potential vs frequency graph change for different metals?",
        "question": "Stopping potential ($V_0$) is plotted against incident frequency ($\\nu$) for Caesium (low $\\phi$) and Platinum (high $\\phi$). What is the ratio of their slopes?",
        "options": [
          "$\\phi_{Cs} / \\phi_{Pt}$",
          "1 : 1 (Both slopes are identical)",
          "Depends on light intensity",
          "Zero"
        ],
        "correct": 1,
        "whyStudentsFail": "Students think different metals with different work functions will give lines with different slopes.",
        "goldenRule": "Einstein's photoelectric equation: $eV_0 = h\\nu - \\phi \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi}{e}$. The slope is ALWAYS $\\frac{h}{e}$, a ratio of universal constants! The lines for all metals are strictly PARALLEL."
      },
      {
        "id": "rf-p6",
        "subject": "Physics",
        "trapTitle": "Energy vs Angular Momentum in Bohr Atom",
        "confusion": "Is total energy proportional to $L_n$, $1/L_n$, or $1/L_n^2$?",
        "question": "In a Bohr atom, how is the total energy $E_n$ related to the orbital angular momentum $L_n$?",
        "options": [
          "$E_n \\propto L_n$",
          "$E_n \\propto 1/L_n$",
          "$E_n \\propto 1/L_n^2$",
          "$E_n \\propto L_n^2$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse $E \\propto 1/n$ vs $E \\propto 1/n^2$, and forget that $L_n = n\\hbar \\implies n \\propto L_n$.",
        "goldenRule": "$L_n = n\\hbar \\implies n \\propto L_n$. Since $E_n = -13.6/n^2\\text{ eV}$, substituting $n$ gives $E_n \\propto 1/L_n^2$."
      },
      {
        "id": "rf-c1",
        "subject": "Chemistry",
        "trapTitle": "Common Ion Effect Applicability",
        "confusion": "Does adding $HCl$ to $H_2SO_4$ cause a common ion effect?",
        "question": "Which mixture will NOT demonstrate the common ion effect?",
        "options": [
          "$CH_3COOH + CH_3COONa$",
          "$NH_4OH + NH_4Cl$",
          "$HCl + H_2SO_4$",
          "$H_2S + HCl$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students spot the common ion ($H^+$) in $HCl$ and $H_2SO_4$ and forget the fundamental definition.",
        "goldenRule": "Common ion effect requires at least ONE WEAK electrolyte whose equilibrium can be shifted. Since both $HCl$ and $H_2SO_4$ are 100% dissociated strong acids, neither suppresses the other!"
      },
      {
        "id": "rf-c2",
        "subject": "Chemistry",
        "trapTitle": "The $10^{-7}$ M and $10^{-8}$ M pH Traps",
        "confusion": "Can a basic $10^{-7}$ M NaOH solution have a neutral pH of 7.0?",
        "question": "What is the true pH of a $10^{-7}$ M NaOH solution at 25 °C?",
        "options": [
          "7.00 (Neutral)",
          "6.79",
          "7.21 (Slightly basic)",
          "8.00"
        ],
        "correct": 2,
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
        "id": "rf-m1",
        "subject": "Maths",
        "trapTitle": "Tangent vs Normal Slope",
        "confusion": "Is the slope of the normal just the reciprocal of the tangent slope?",
        "question": "If the slope of the tangent to a curve at a point is $m = 4$, what is the slope of the normal line?",
        "options": [
          "$1/4$",
          "$-1/4$",
          "$-4$",
          "$4$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students often forget the negative sign and just write $1/m$ instead of $-1/m$.",
        "goldenRule": "Normal is perpendicular to tangent: $m_{tangent} \\times m_{normal} = -1 \\implies m_{normal} = -\\frac{1}{m_{tangent}}$."
      },
      {
        "id": "rf-m2",
        "subject": "Maths",
        "trapTitle": "Odd Function Definite Integral",
        "confusion": "Do you need to substitute $x = \\sin\\theta$ when integrating an odd function from $-a$ to $a$?",
        "question": "What is $\\int_{-\\pi}^{\\pi} \\sin^5(x),dx$?",
        "options": [
          "Zero",
          "$\\pi$",
          "$2\\pi$",
          "$5/2$"
        ],
        "correct": 0,
        "whyStudentsFail": "Students spend minutes trying to integrate $\\sin^5(x)$ using reduction formulas without checking that $\\sin^5(x)$ is odd.",
        "goldenRule": "Always check function parity on symmetric limits $[-a, a]$. If $f(-x) = -f(x)$, $\\int_{-a}^a f(x),dx = 0$ instantly!"
      },
      {
        "id": "rf-m1",
        "subject": "Maths",
        "trapTitle": "Rolle's Theorem Discontinuity Trap",
        "confusion": "If f(a) = f(b), does Rolle's theorem always guarantee f'(c) = 0?",
        "question": "For $f(x) = \\frac{1}{x^2 - 1}$ on $[-2, 2]$, $f(-2) = f(2) = 1/3$. Can Rolle's theorem be applied here?",
        "options": [
          "Yes, because f(a) = f(b) = 1/3",
          "No, because the function is discontinuous at x = 1 and x = -1 inside the interval",
          "Yes, because f'(x) exists everywhere",
          "Only if the interval is expanded to [-3, 3]"
        ],
        "correct": 1,
        "whyStudentsFail": "Students only verify $f(a) = f(b)$ and forget that the function MUST be continuous on the entire closed interval $[a, b]$.",
        "goldenRule": "Always check continuity first! If the denominator becomes 0 anywhere inside $[a, b]$, Rolle's Theorem fails immediately."
      },
      {
        "id": "rf-m2",
        "subject": "Maths",
        "trapTitle": "Slope of Normal vs Tangent",
        "confusion": "Is the normal slope just the negative of the tangent slope?",
        "question": "If the slope of the tangent to a curve at a point is $m = 3$, what is the slope of the normal?",
        "options": [
          "$-3$",
          "$1/3$",
          "$-1/3$",
          "$3$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students mix up negative reciprocal with simple negative ($-m$) or simple reciprocal ($1/m$).",
        "goldenRule": "Tangent and normal are perpendicular: $m_1 \\times m_2 = -1 \\implies m_{normal} = -\\frac{1}{m_{tangent}}$."
      },
      {
        "id": "rf-m3",
        "subject": "Maths",
        "trapTitle": "Counting Numbers with Distinct Digits",
        "confusion": "Why is the total number of 9-digit numbers with distinct digits not 10! or 9!?",
        "question": "How many 9-digit numbers can be formed using different digits (0 to 9)?",
        "options": [
          "$10!$",
          "$9!$",
          "$9 \\times 9!$",
          "$10 \\times 9!$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students forget that the very first digit cannot be 0 (otherwise it becomes an 8-digit number!).",
        "goldenRule": "First digit has 9 choices (1-9). The remaining 8 places are filled by remaining 9 digits in $P(9, 8) = 9!$ ways $\\implies 9 \\times 9!$."
      },
      {
        "id": "rf-m4",
        "subject": "Maths",
        "trapTitle": "Implicit Derivative Symmetry",
        "confusion": "Does differentiating $x^4 y^5 = (x+y)^9$ take long quotient rule steps?",
        "question": "What is $\\frac{dy}{dx}$ for $x^4 y^5 = (x + y)^9$?",
        "options": [
          "$\\frac{4x}{5y}$",
          "$\\frac{y}{x}$",
          "$-\\frac{y}{x}$",
          "$\\frac{x+y}{xy}$"
        ],
        "correct": 1,
        "whyStudentsFail": "Students spend 10 minutes applying product and chain rules and make algebraic mistakes.",
        "goldenRule": "Golden Shortcut: For any relation $x^p y^q = (x + y)^{p+q}$, the derivative $\\frac{dy}{dx}$ is always simply $\\frac{y}{x}$!"
      },
      {
        "id": "rf-m5",
        "subject": "Maths",
        "trapTitle": "Direction Cosines Normalization",
        "confusion": "Can any three numbers representing direction ratios serve as direction cosines?",
        "question": "If a line is equally inclined to the three coordinate axes, its direction cosines are:",
        "options": [
          "$(1, 1, 1)$",
          "$(\\pm 1/3, \\pm 1/3, \\pm 1/3)$",
          "$(\\pm 1/\\sqrt{3}, \\pm 1/\\sqrt{3}, \\pm 1/\\sqrt{3})$",
          "$(\\pm 1/2, \\pm 1/2, \\pm 1/2)$"
        ],
        "correct": 2,
        "whyStudentsFail": "Students confuse direction ratios $(1, 1, 1)$ with direction cosines. Direction cosines must satisfy $l^2 + m^2 + n^2 = 1$.",
        "goldenRule": "Always normalize direction ratios: $l = \\frac{a}{\\sqrt{a^2+b^2+c^2}}$. With $a=b=c=1$, $l = 1/\\sqrt{1+1+1} = 1/\\sqrt{3}$."
      },
      {
        "id": "rf-m6",
        "subject": "Maths",
        "trapTitle": "Odd Function Definite Integral",
        "confusion": "Do you need integration by parts when evaluating $\\int_{-a}^a x^3\\sqrt{1-x^2},dx$?",
        "question": "What is the value of $\\int_{-1}^1 x^3\\sqrt{1 - x^2},dx$?",
        "options": [
          "Zero",
          "$\\pi / 4$",
          "$1/2$",
          "$\\pi$"
        ],
        "correct": 0,
        "whyStudentsFail": "Students waste time making trigonometric substitutions without checking that the integrand is an odd function.",
        "goldenRule": "If limits are symmetric $[-a, a]$, test $f(-x)$. If $f(-x) = -f(x)$ (odd function), the integral is ZERO with no calculation needed!"
      }
    ]
  }
};
