import json

# ==========================================
# 30 EXAM MCQS FOR PHYSICS (Group A style)
# ==========================================
physics_exam = [
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
    }
]

print("Physics exam count:", len(physics_exam))
