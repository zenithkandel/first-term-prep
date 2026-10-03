/**
 * First-Term Exam Preparation Dashboard Logic
 * Minimal Black-and-White Dashboard for KMC Class XII
 */

(function () {
  'use strict';

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const STATE = {
    currentSubject: 'all', // 'all' | 'physics' | 'chemistry' | 'biology'
    searchQuery: '',
    mcqMode: 'exam', // 'exam' | 'rapid'
    theme: localStorage.getItem('kmc_prep_theme') || 'dark',
    masteredTopics: new Set(JSON.parse(localStorage.getItem('kmc_prep_mastered') || '[]')),
    examAnswers: JSON.parse(localStorage.getItem('kmc_prep_exam_answers') || '{}'),
    
    // Rapid Fire state
    rapidFire: {
      items: [],
      currentIndex: 0,
      streak: 0,
      timerActive: false,
      timerSeconds: 15,
      timerInterval: null,
      currentAnswered: false
    }
  };

  // Flatten and prepare topics list with subject references
  function getAllTopics() {
    const list = [];
    ['physics', 'chemistry', 'biology'].forEach(sub => {
      if (STUDY_DATA.topics[sub]) {
        STUDY_DATA.topics[sub].forEach(t => {
          list.push({ ...t, subjectKey: sub });
        });
      }
    });
    // Sort strictly by repetitionCount descending
    list.sort((a, b) => b.repetitionCount - a.repetitionCount);
    return list;
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  function init() {
    applyTheme(STATE.theme);
    setupEventListeners();
    updateProgressUI();
    renderTopics();
    renderExamMCQs();
    setupRapidFire();
    triggerMathRender();
  }

  // ==========================================
  // THEME MANAGEMENT
  // ==========================================
  function applyTheme(theme) {
    STATE.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kmc_prep_theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☼' : '☽';
    }
  }

  function toggleTheme() {
    applyTheme(STATE.theme === 'dark' ? 'light' : 'dark');
  }

  // ==========================================
  // PROGRESS & MASTERY TRACKING
  // ==========================================
  function toggleTopicMastery(topicId) {
    if (STATE.masteredTopics.has(topicId)) {
      STATE.masteredTopics.delete(topicId);
    } else {
      STATE.masteredTopics.add(topicId);
    }
    localStorage.setItem('kmc_prep_mastered', JSON.stringify(Array.from(STATE.masteredTopics)));
    updateProgressUI();

    // Toggle card visual state
    const card = document.getElementById(`topic-card-${topicId}`);
    if (card) {
      card.classList.toggle('mastered', STATE.masteredTopics.has(topicId));
    }
  }

  function updateProgressUI() {
    const allTopics = getAllTopics();
    const totalCount = allTopics.length;
    const masteredCount = Array.from(STATE.masteredTopics).filter(id => allTopics.some(t => t.id === id)).length;
    const pct = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;

    // Main bar
    const bar = document.getElementById('progress-bar-fill');
    const pctLabel = document.getElementById('progress-percentage');
    const detailLabel = document.getElementById('progress-detail-text');

    if (bar) bar.style.width = `${pct}%`;
    if (pctLabel) pctLabel.textContent = `${pct}%`;
    if (detailLabel) detailLabel.textContent = `${masteredCount} of ${totalCount} topics mastered`;

    // Mini stats
    const subs = ['physics', 'chemistry', 'biology'];
    subs.forEach(s => {
      const subTopics = STUDY_DATA.topics[s] || [];
      const subMastered = subTopics.filter(t => STATE.masteredTopics.has(t.id)).length;
      const subTotal = subTopics.length;
      const subPct = subTotal > 0 ? Math.round((subMastered / subTotal) * 100) : 0;
      const el = document.getElementById(`stat-${s}`);
      if (el) el.textContent = `${subMastered} / ${subTotal} (${subPct}%)`;
    });

    // High repetition (>= 5x)
    const highRep = allTopics.filter(t => t.repetitionCount >= 5);
    const highRepMastered = highRep.filter(t => STATE.masteredTopics.has(t.id)).length;
    const elHigh = document.getElementById('stat-high-rep');
    if (elHigh) elHigh.textContent = `${highRepMastered} / ${highRep.length} Covered`;
  }

  function resetAllProgress() {
    if (confirm("Reset your study progress? This will uncheck all mastered topics and clear MCQ history.")) {
      STATE.masteredTopics.clear();
      STATE.examAnswers = {};
      localStorage.removeItem('kmc_prep_mastered');
      localStorage.removeItem('kmc_prep_exam_answers');
      updateProgressUI();
      renderTopics();
      renderExamMCQs();
    }
  }

  // ==========================================
  // SECTION 1: TOPIC ROADMAP RENDERING
  // ==========================================
  function renderTopics() {
    const container = document.getElementById('topics-container');
    if (!container) return;

    let topics = getAllTopics();

    // Subject filter
    if (STATE.currentSubject !== 'all') {
      topics = topics.filter(t => t.subjectKey === STATE.currentSubject);
    }

    // Search filter
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      topics = topics.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        (t.keyConcepts && t.keyConcepts.some(c => c.toLowerCase().includes(q)))
      );
    }

    if (topics.length === 0) {
      container.innerHTML = `<div class="empty-state">No topics found matching your criteria.</div>`;
      return;
    }

    container.innerHTML = topics.map((t, idx) => {
      const isMastered = STATE.masteredTopics.has(t.id);
      const repLabel = `${t.repetitionCount}x Repeated in Past Exams`;
      const subjectName = t.subjectKey.toUpperCase();

      return `
        <article class="topic-card ${isMastered ? 'mastered' : ''}" id="topic-card-${t.id}">
          <div class="topic-header">
            <div class="topic-title-area">
              <div class="topic-badges">
                <span class="badge badge-rep">#${idx + 1} • ${repLabel}</span>
                <span class="badge badge-subject">${subjectName}</span>
                <span class="badge badge-weight">${t.weightage}</span>
              </div>
              <h3 class="topic-title">${t.title}</h3>
              <div class="topic-years-list">
                ${t.years.map(y => `<span class="year-chip">${y}</span>`).join('')}
              </div>
            </div>

            <label class="mastery-checkbox-label" title="Toggle mastery status">
              <input type="checkbox" ${isMastered ? 'checked' : ''} data-topic-id="${t.id}" class="mastery-checkbox">
              <span>${isMastered ? 'Mastered ✓' : 'Mark Mastered'}</span>
            </label>
          </div>

          <p class="topic-summary">${t.summary}</p>

          <div class="key-concepts-box">
            <div class="key-concepts-header">High-Yield Core Formulas & Principles:</div>
            <ul>
              ${t.keyConcepts.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <!-- Collapsible Questions Accordion -->
          <div class="questions-accordion">
            <button class="accordion-toggle-btn" data-target="acc-${t.id}">
              <span>View Past Exam Questions & Model Solutions (${t.questions ? t.questions.length : 0})</span>
              <span class="accordion-arrow">▼</span>
            </button>
            <div class="accordion-content" id="acc-${t.id}">
              ${(t.questions || []).map(q => `
                <div class="question-example-item">
                  <div class="question-meta">
                    <span class="q-type-badge">${q.type}</span>
                    <span class="q-year-badge">Appeared in: ${q.year}</span>
                  </div>
                  <div class="q-text">${q.question}</div>
                  <div class="q-answer-box">
                    <div class="q-answer-title">Model Answer / Step-by-Step Solution:</div>
                    <div class="q-answer-text">${q.answer}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach listeners for mastery checkboxes and accordions
    container.querySelectorAll('.mastery-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const topicId = e.target.getAttribute('data-topic-id');
        toggleTopicMastery(topicId);
        // update checkbox label text
        const span = e.target.parentElement.querySelector('span');
        if (span) {
          span.textContent = e.target.checked ? 'Mastered ✓' : 'Mark Mastered';
        }
      });
    });

    container.querySelectorAll('.accordion-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (content) {
          const isOpen = content.classList.contains('show');
          content.classList.toggle('show', !isOpen);
          btn.classList.toggle('open', !isOpen);
        }
      });
    });

    triggerMathRender();
  }

  // ==========================================
  // SECTION 2A: AUTHENTIC 1-MARK EXAM MCQS
  // ==========================================
  function renderExamMCQs() {
    const container = document.getElementById('exam-mcq-container');
    if (!container) return;

    let mcqs = STUDY_DATA.mcqs.exam || [];

    if (STATE.currentSubject !== 'all') {
      mcqs = mcqs.filter(m => m.subject.toLowerCase() === STATE.currentSubject);
    }

    if (mcqs.length === 0) {
      container.innerHTML = `<div class="empty-state">No exam MCQs available for this subject.</div>`;
      updateExamScoreUI();
      return;
    }

    container.innerHTML = mcqs.map((q, qIndex) => {
      const savedAnswer = STATE.examAnswers[q.id];
      const hasAnswered = savedAnswer !== undefined;

      return `
        <div class="mcq-item-card" id="mcq-card-${q.id}">
          <div class="mcq-item-header">
            <div class="topic-badges">
              <span class="badge badge-subject">${q.subject}</span>
              <span class="badge badge-weight">${q.topic}</span>
              <span class="year-chip">${q.year}</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">Q${qIndex + 1}</span>
          </div>

          <div class="mcq-q-title">${q.question}</div>

          <div class="mcq-options-grid" data-qid="${q.id}">
            ${q.options.map((opt, optIndex) => {
              const prefix = ['A', 'B', 'C', 'D'][optIndex];
              let extraClass = '';
              if (hasAnswered) {
                if (optIndex === q.correct) {
                  extraClass = 'selected-correct';
                } else if (optIndex === savedAnswer) {
                  extraClass = 'selected-wrong';
                }
              }

              return `
                <button class="mcq-option-btn ${extraClass}" 
                        data-qid="${q.id}" 
                        data-opt-idx="${optIndex}" 
                        ${hasAnswered ? 'disabled' : ''}>
                  <span class="opt-prefix">(${prefix})</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div class="mcq-explanation-box ${hasAnswered ? 'show' : ''}" id="expl-${q.id}">
            <div class="mcq-explanation-header">Verified Answer & Detailed Analysis:</div>
            <div style="line-height: 1.55;">${q.explanation}</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners for option buttons
    container.querySelectorAll('.mcq-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qid = btn.getAttribute('data-qid');
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        handleExamOptionSelect(qid, optIdx);
      });
    });

    updateExamScoreUI();
    triggerMathRender();
  }

  function handleExamOptionSelect(qid, selectedIdx) {
    const question = STUDY_DATA.mcqs.exam.find(m => m.id === qid);
    if (!question) return;

    STATE.examAnswers[qid] = selectedIdx;
    localStorage.setItem('kmc_prep_exam_answers', JSON.stringify(STATE.examAnswers));

    const card = document.getElementById(`mcq-card-${qid}`);
    if (!card) return;

    const buttons = card.querySelectorAll('.mcq-option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === question.correct) {
        btn.classList.add('selected-correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('selected-wrong');
      }
    });

    const expl = document.getElementById(`expl-${qid}`);
    if (expl) expl.classList.add('show');

    updateExamScoreUI();
    triggerMathRender();
  }

  function updateExamScoreUI() {
    let mcqs = STUDY_DATA.mcqs.exam || [];
    if (STATE.currentSubject !== 'all') {
      mcqs = mcqs.filter(m => m.subject.toLowerCase() === STATE.currentSubject);
    }

    let attempted = 0;
    let correct = 0;

    mcqs.forEach(q => {
      if (STATE.examAnswers[q.id] !== undefined) {
        attempted++;
        if (STATE.examAnswers[q.id] === q.correct) {
          correct++;
        }
      }
    });

    const scorePill = document.getElementById('exam-score-pill');
    const accPill = document.getElementById('exam-accuracy-pill');

    if (scorePill) scorePill.textContent = `Score: ${correct} / ${attempted} (Total: ${mcqs.length})`;
    if (accPill) {
      const pct = attempted > 0 ? Math.round((correct / attempted) * 100) : null;
      accPill.textContent = pct !== null ? `Accuracy: ${pct}%` : 'Accuracy: --%';
    }
  }

  function resetExamAnswers() {
    if (confirm("Reset all exam MCQ answers?")) {
      STATE.examAnswers = {};
      localStorage.removeItem('kmc_prep_exam_answers');
      renderExamMCQs();
    }
  }

  // ==========================================
  // SECTION 2B: RAPID-FIRE CONCEPT CLEARERS
  // ==========================================
  function setupRapidFire() {
    let list = STUDY_DATA.mcqs.rapidFire || [];
    if (STATE.currentSubject !== 'all') {
      list = list.filter(item => item.subject.toLowerCase() === STATE.currentSubject);
    }
    STATE.rapidFire.items = list;
    STATE.rapidFire.currentIndex = 0;
    STATE.rapidFire.currentAnswered = false;

    renderRapidFireQuestion();
  }

  function renderRapidFireQuestion() {
    const list = STATE.rapidFire.items;
    const activeContent = document.getElementById('rf-active-content');
    const emptyState = document.getElementById('rf-empty-state');
    if (!activeContent || !emptyState) return;

    if (list.length === 0) {
      activeContent.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    } else {
      activeContent.style.display = 'block';
      emptyState.style.display = 'none';
    }

    const item = list[STATE.rapidFire.currentIndex];
    STATE.rapidFire.currentAnswered = false;

    // Update Counter & Streak
    const counter = document.getElementById('rf-counter');
    const streakEl = document.getElementById('rf-streak-display');
    if (counter) counter.textContent = `Question ${STATE.rapidFire.currentIndex + 1} of ${list.length}`;
    if (streakEl) streakEl.textContent = `Streak: ${STATE.rapidFire.streak} 🔥`;

    // Subject tag
    const subTag = document.getElementById('rf-subject-tag');
    if (subTag) subTag.textContent = item.subject.toUpperCase();

    // Trap & Confusion
    const trapTitle = document.getElementById('rf-trap-title');
    const trapConfusion = document.getElementById('rf-trap-confusion');
    if (trapTitle) trapTitle.textContent = item.trapTitle;
    if (trapConfusion) trapConfusion.textContent = `Student Confusion: "${item.confusion}"`;

    // Question
    const qPrompt = document.getElementById('rf-question-prompt');
    if (qPrompt) qPrompt.textContent = item.question;

    // Options
    const optContainer = document.getElementById('rf-options-list');
    if (optContainer) {
      optContainer.innerHTML = item.options.map((opt, idx) => {
        const prefix = ['A', 'B', 'C', 'D'][idx];
        return `
          <button class="mcq-option-btn rf-opt-btn" data-idx="${idx}">
            <span class="opt-prefix">(${prefix})</span>
            <span class="opt-text">${opt}</span>
          </button>
        `;
      }).join('');

      optContainer.querySelectorAll('.rf-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.getAttribute('data-idx'), 10);
          handleRapidFireAnswer(selectedIdx);
        });
      });
    }

    // Hide feedback card
    const feedbackCard = document.getElementById('rf-feedback');
    if (feedbackCard) feedbackCard.classList.remove('show');

    // Update Nav buttons
    const prevBtn = document.getElementById('rf-prev-btn');
    const nextBtn = document.getElementById('rf-next-btn');
    if (prevBtn) prevBtn.disabled = STATE.rapidFire.currentIndex === 0;
    if (nextBtn) {
      nextBtn.textContent = STATE.rapidFire.currentIndex === list.length - 1 ? 'Finish Drill 🏁' : 'Next Trap →';
    }

    // Timer reset if active
    if (STATE.rapidFire.timerActive) {
      startRapidTimer();
    }

    triggerMathRender();
  }

  function handleRapidFireAnswer(selectedIdx) {
    if (STATE.rapidFire.currentAnswered) return;
    STATE.rapidFire.currentAnswered = true;
    clearInterval(STATE.rapidFire.timerInterval);

    const item = STATE.rapidFire.items[STATE.rapidFire.currentIndex];
    const optButtons = document.querySelectorAll('.rf-opt-btn');

    const isCorrect = selectedIdx === item.correct;

    if (isCorrect) {
      STATE.rapidFire.streak++;
    } else {
      STATE.rapidFire.streak = 0;
    }

    const streakEl = document.getElementById('rf-streak-display');
    if (streakEl) streakEl.textContent = `Streak: ${STATE.rapidFire.streak} 🔥`;

    optButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === item.correct) {
        btn.classList.add('selected-correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('selected-wrong');
      }
    });

    // Populate and show feedback
    const failBox = document.getElementById('rf-why-fail');
    const ruleBox = document.getElementById('rf-golden-rule');
    const feedbackCard = document.getElementById('rf-feedback');

    if (failBox) failBox.textContent = item.whyStudentsFail;
    if (ruleBox) ruleBox.textContent = item.goldenRule;
    if (feedbackCard) feedbackCard.classList.add('show');

    triggerMathRender();
  }

  function nextRapidQuestion() {
    const list = STATE.rapidFire.items;
    if (STATE.rapidFire.currentIndex < list.length - 1) {
      STATE.rapidFire.currentIndex++;
      renderRapidFireQuestion();
    } else {
      alert(`Drill Complete! Final Streak: ${STATE.rapidFire.streak} 🔥`);
      STATE.rapidFire.currentIndex = 0;
      renderRapidFireQuestion();
    }
  }

  function prevRapidQuestion() {
    if (STATE.rapidFire.currentIndex > 0) {
      STATE.rapidFire.currentIndex--;
      renderRapidFireQuestion();
    }
  }

  function shuffleRapidQuestions() {
    const list = [...STATE.rapidFire.items];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    STATE.rapidFire.items = list;
    STATE.rapidFire.currentIndex = 0;
    STATE.rapidFire.streak = 0;
    renderRapidFireQuestion();
  }

  function toggleRapidTimer() {
    const btn = document.getElementById('rf-timer-toggle');
    STATE.rapidFire.timerActive = !STATE.rapidFire.timerActive;
    if (btn) {
      btn.textContent = STATE.rapidFire.timerActive ? 'Timer: 15s (Active)' : 'Timer: Off';
    }
    if (STATE.rapidFire.timerActive) {
      startRapidTimer();
    } else {
      clearInterval(STATE.rapidFire.timerInterval);
    }
  }

  function startRapidTimer() {
    clearInterval(STATE.rapidFire.timerInterval);
    let timeLeft = 15;
    const btn = document.getElementById('rf-timer-toggle');
    if (btn) btn.textContent = `Timer: ${timeLeft}s`;

    STATE.rapidFire.timerInterval = setInterval(() => {
      timeLeft--;
      if (btn) btn.textContent = `Timer: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(STATE.rapidFire.timerInterval);
        if (!STATE.rapidFire.currentAnswered) {
          handleRapidFireAnswer(-1); // timeout
        }
      }
    }, 1000);
  }

  function renderRapidFireCheatSheet() {
    const container = document.getElementById('rf-all-traps-container');
    if (!container) return;

    let list = STUDY_DATA.mcqs.rapidFire || [];
    if (STATE.currentSubject !== 'all') {
      list = list.filter(item => item.subject.toLowerCase() === STATE.currentSubject);
    }

    if (list.length === 0) {
      container.innerHTML = `<div class="empty-state">No traps found for this subject.</div>`;
      return;
    }

    container.innerHTML = list.map((item, idx) => {
      const correctOpt = item.options[item.correct];
      return `
        <div class="trap-card-item">
          <div class="trap-card-header">
            <div class="topic-badges">
              <span class="badge badge-rep">TRAP #${idx + 1}</span>
              <span class="badge badge-subject">${item.subject}</span>
              <span class="badge badge-weight">${item.trapTitle}</span>
            </div>
          </div>
          <div style="font-size: 0.88rem; font-style: italic; color: var(--text-secondary); margin-bottom: 8px;">
            Common Misconception: "${item.confusion}"
          </div>
          <div class="trap-card-q">Q: ${item.question}</div>
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 12px;">
            <strong style="color: var(--text-primary);">Correct Exam Answer:</strong> ${correctOpt}
          </div>
          <div class="rf-fail-box" style="margin-bottom: 10px;">
            <div class="rf-fail-title">Why Students Fail This:</div>
            <div class="rf-fail-content">${item.whyStudentsFail}</div>
          </div>
          <div class="rf-rule-box">
            <div class="rf-rule-title">The Golden Rule To Remember:</div>
            <div class="rf-rule-content">${item.goldenRule}</div>
          </div>
        </div>
      `;
    }).join('');

    triggerMathRender();
  }

  // ==========================================
  // EVENT LISTENERS
  // ==========================================
  function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Reset progress
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) resetBtn.addEventListener('click', resetAllProgress);

    // Subject tabs
    document.querySelectorAll('.subject-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.subject-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        STATE.currentSubject = btn.getAttribute('data-subject');
        renderTopics();
        renderExamMCQs();
        setupRapidFire();
        if (document.getElementById('rf-all-traps-container') && document.getElementById('rf-all-traps-container').style.display !== 'none') {
          renderRapidFireCheatSheet();
        }
      });
    });

    // Topic search
    const searchInput = document.getElementById('topic-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value;
        renderTopics();
      });
    }

    // MCQ Sub-mode toggles (Exam vs Rapid Fire)
    const btnModeExam = document.getElementById('btn-mode-exam');
    const btnModeRapid = document.getElementById('btn-mode-rapid');
    const viewExam = document.getElementById('view-exam-mcqs');
    const viewRapid = document.getElementById('view-rapid-fire');

    if (btnModeExam && btnModeRapid) {
      btnModeExam.addEventListener('click', () => {
        btnModeExam.classList.add('active');
        btnModeRapid.classList.remove('active');
        if (viewExam) viewExam.style.display = 'block';
        if (viewRapid) viewRapid.style.display = 'none';
        STATE.mcqMode = 'exam';
      });

      btnModeRapid.addEventListener('click', () => {
        btnModeRapid.classList.add('active');
        btnModeExam.classList.remove('active');
        if (viewExam) viewExam.style.display = 'none';
        if (viewRapid) viewRapid.style.display = 'block';
        STATE.mcqMode = 'rapid';
        setupRapidFire();
      });
    }

    // Rapid Fire View Toggles (Interactive Quiz vs All Traps List)
    const quizViewBtn = document.getElementById('rf-view-quiz-btn');
    const listViewBtn = document.getElementById('rf-view-list-btn');
    const quizBox = document.getElementById('rapid-fire-box');
    const listBox = document.getElementById('rf-all-traps-container');

    if (quizViewBtn && listViewBtn) {
      quizViewBtn.addEventListener('click', () => {
        quizViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        if (quizBox) quizBox.style.display = 'block';
        if (listBox) listBox.style.display = 'none';
      });

      listViewBtn.addEventListener('click', () => {
        listViewBtn.classList.add('active');
        quizViewBtn.classList.remove('active');
        if (quizBox) quizBox.style.display = 'none';
        if (listBox) {
          listBox.style.display = 'flex';
          renderRapidFireCheatSheet();
        }
      });
    }

    // Reset exam answers button
    const resetExamBtn = document.getElementById('reset-exam-mcqs-btn');
    if (resetExamBtn) resetExamBtn.addEventListener('click', resetExamAnswers);

    // Rapid Fire controls
    const nextBtn = document.getElementById('rf-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', nextRapidQuestion);

    const prevBtn = document.getElementById('rf-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', prevRapidQuestion);

    const shuffleBtn = document.getElementById('rf-shuffle-btn');
    if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleRapidQuestions);

    const timerBtn = document.getElementById('rf-timer-toggle');
    if (timerBtn) timerBtn.addEventListener('click', toggleRapidTimer);
  }

  // ==========================================
  // KATEX FORMULA RENDERING HELPER
  // ==========================================
  function triggerMathRender() {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX rendering note:", err);
      }
    } else {
      setTimeout(triggerMathRender, 300);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
