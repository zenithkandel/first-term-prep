# ==========================================
# 30 EXAM MCQS FOR MATHEMATICS (Group A style)
# ==========================================
maths_exam = [
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
]

print("Maths exam count:", len(maths_exam))
