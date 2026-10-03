# =========================================================================
# 30 RAPID FIRE QUESTIONS FOR PHYSICS
# Focused on student misconceptions, confusion traps, and exam pitfalls
# =========================================================================
physics_rapid = [
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
        "question": "A parallel plate capacitor is charged by a battery and then disconnected. A dielectric slab ($\kappa > 1$) is inserted between plates. The stored electrostatic energy:",
        "options": [
            "Increases by $\kappa$ times",
            "Decreases by $\kappa$ times ($U' = U / \kappa$)",
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
        "goldenRule": "Photoelectric emission is a 1-to-1 photon-electron collision. If $f < f_0$, zero emission occurs regardless of intensity. If $f \\ge f_0$, emission is instantaneous ($\sim 10^{-9}\\text{ s}$), even for faint light!"
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
    }
]

print("Physics rapid fire count:", len(physics_rapid))
