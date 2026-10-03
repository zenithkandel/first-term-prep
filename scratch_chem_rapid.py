# =========================================================================
# 30 RAPID FIRE QUESTIONS FOR CHEMISTRY
# Focused on student misconceptions, confusion traps, and exam pitfalls
# =========================================================================
chemistry_rapid = [
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
        "question": "Upon dilution of an electrolytic solution, what happens to specific conductance ($\kappa$) and molar conductance ($\Lambda_m$)?",
        "options": [
            "Both increase",
            "Both decrease",
            "Specific conductance decreases, but molar conductance increases",
            "Specific conductance increases, but molar conductance decreases"
        ],
        "correct": 2,
        "whyStudentsFail": "Students think all forms of electrical conductance increase when more water is added.",
        "goldenRule": "Specific conductance ($\kappa$) is conductance per $1\\text{ cm}^3$ volume; dilution reduces number of current-carrying ions per unit volume, so $\kappa$ DECREASES. Molar conductance $\Lambda_m = \\kappa \\cdot V$ INCREASES because volume $V$ containing 1 mole increases much faster than $\kappa$ falls!"
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
    }
]

print("Chemistry rapid fire count:", len(chemistry_rapid))
