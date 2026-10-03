# ==========================================
# 30 EXAM MCQS FOR CHEMISTRY (Group A style)
# ==========================================
chemistry_exam = [
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
        "question": "For a spontaneous chemical process at constant temperature and pressure, the change in Gibbs free energy ($\Delta G$) must be:",
        "options": [
            "Positive ($\Delta G > 0$)",
            "Negative ($\Delta G < 0$)",
            "Zero ($\Delta G = 0$)",
            "Equal to enthalpy change ($\Delta G = \Delta H$)"
        ],
        "correct": 1,
        "explanation": "By the second law of thermodynamics, a process is thermodynamically spontaneous under constant $T$ and $P$ if and only if $\Delta G = \Delta H - T\Delta S < 0$."
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
        "explanation": "At equilibrium, $\Delta G = 0$. Since $\Delta G = -nFE_{cell}$, the operating cell potential $E_{cell}$ becomes zero. $E^\\circ_{cell}$ is a thermodynamic constant at standard states and is non-zero ($E^\\circ_{cell} = \\frac{0.0591}{n}\\log K_{eq}$)."
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
    }
]

print("Chemistry exam count:", len(chemistry_exam))
