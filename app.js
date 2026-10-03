/**
 * Exam Preparation Dashboard Logic
 * Minimal Black & White Layout for Physics, Chemistry, and Mathematics
 */

(function () {
  'use strict';

  // State Management
  const STATE = {
    currentSubject: 'all', // 'all' | 'physics' | 'chemistry' | 'maths'
    searchQuery: '',
    mainTab: 'progress', // 'progress' | 'mcqs'
    mcqType: 'exam', // 'exam' | 'rapid'
    masteredTopics: new Set(JSON.parse(localStorage.getItem('prep_mastered_topics') || '[]')),
    examAnswers: JSON.parse(localStorage.getItem('prep_exam_answers') || '{}'),
    
    // Rapid Fire state
    rapidFire: {
      items: [],
      currentIndex: 0,
      streak: 0,
      currentAnswered: false
    }
  };

  const SUBJECT_KEYS = ['physics', 'chemistry', 'maths'];

  // Flatten and prepare topics list with subject references
  function getAllTopics() {
    const list = [];
    SUBJECT_KEYS.forEach(sub => {
      if (STUDY_DATA.topics && STUDY_DATA.topics[sub]) {
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
    try {
      console.log('Exam Prep App initializing...');
      setupEventListeners();
      updateProgressUI();
      renderTopics();
      renderExamMCQs();
      setupRapidFire();
      triggerMathRender();
      console.log('Exam Prep App ready.');
    } catch (err) {
      console.error('Initialization error in Exam Prep Dashboard:', err);
    }
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
    localStorage.setItem('prep_mastered_topics', JSON.stringify(Array.from(STATE.masteredTopics)));
    updateProgressUI();

    // Update card styling
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

    // Progress bar
    const bar = document.getElementById('progress-bar-fill');
    const detailLabel = document.getElementById('progress-detail-text');

    if (bar) bar.style.width = `${pct}%`;
    if (detailLabel) detailLabel.textContent = `${masteredCount} of ${totalCount} topics completed (${pct}%)`;

    // Mini subject counters
    SUBJECT_KEYS.forEach(s => {
      const subTopics = (STUDY_DATA.topics && STUDY_DATA.topics[s]) || [];
      const subMastered = subTopics.filter(t => STATE.masteredTopics.has(t.id)).length;
      const el = document.getElementById(`stat-${s}`);
      const prettyName = s === 'maths' ? 'Maths' : s.charAt(0).toUpperCase() + s.slice(1);
      if (el) el.textContent = `${prettyName}: ${subMastered}/${subTopics.length}`;
    });
  }

  function resetAllProgress() {
    if (confirm("Reset all study progress? This will uncheck all completed topics and clear MCQ attempts.")) {
      STATE.masteredTopics.clear();
      STATE.examAnswers = {};
      localStorage.removeItem('prep_mastered_topics');
      localStorage.removeItem('prep_exam_answers');
      updateProgressUI();
      renderTopics();
      renderExamMCQs();
    }
  }

  // ==========================================
  // VIEW 1: TOPICS ROADMAP RENDERING
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
      container.innerHTML = `<div class="empty-state">No topics found matching "${STATE.searchQuery}".</div>`;
      return;
    }

    container.innerHTML = topics.map((t, idx) => {
      const isMastered = STATE.masteredTopics.has(t.id);
      const subjectName = t.subjectKey === 'maths' ? 'Maths' : t.subjectKey.charAt(0).toUpperCase() + t.subjectKey.slice(1);

      return `
        <article class="topic-card ${isMastered ? 'mastered' : ''}" id="topic-card-${t.id}">
          <div class="topic-card-header">
            <div style="flex: 1;">
              <div class="topic-meta-left">
                <span class="badge-solid">Repeated ${t.repetitionCount}x</span>
                <span class="badge-outline">${subjectName}</span>
                <span style="font-size: 0.8rem; font-weight: 600; color: #555;">${t.weightage}</span>
              </div>
              <h3 class="topic-card-title">${t.title}</h3>
              <div class="years-row">
                ${t.years.map(y => `<span class="year-tag">${y}</span>`).join('')}
              </div>
            </div>

            <label class="custom-checkbox-label" title="Mark this topic as reviewed">
              <input type="checkbox" ${isMastered ? 'checked' : ''} data-topic-id="${t.id}" class="mastery-checkbox">
              <span>${isMastered ? 'Reviewed ✓' : 'Mark as reviewed'}</span>
            </label>
          </div>

          <p class="topic-desc">${t.summary}</p>

          <div class="key-points-box">
            <div class="key-points-title">Key points & formulas:</div>
            <ul>
              ${t.keyConcepts.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <!-- Collapsible Questions Accordion -->
          <div class="accordion-wrap">
            <button class="accordion-toggle" data-target="acc-${t.id}">
              <span>Exam questions & answers (${t.questions ? t.questions.length : 0})</span>
              <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-body" id="acc-${t.id}">
              ${(t.questions || []).map(q => `
                <div class="example-question-card">
                  <div class="example-q-meta">
                    <span>${q.type}</span>
                    <span>Appeared in: ${q.year}</span>
                  </div>
                  <div class="example-q-text">${q.question}</div>
                  <div class="example-q-answer">
                    <strong>Answer:</strong>
                    <div>${q.answer}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach listeners for checkboxes and accordions
    container.querySelectorAll('.mastery-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const topicId = e.target.getAttribute('data-topic-id');
        toggleTopicMastery(topicId);
        const span = e.target.parentElement.querySelector('span');
        if (span) {
          span.textContent = e.target.checked ? 'Reviewed ✓' : 'Mark as reviewed';
        }
      });
    });

    container.querySelectorAll('.accordion-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (content) {
          const isOpen = content.classList.contains('open');
          content.classList.toggle('open', !isOpen);
          const icon = btn.querySelector('.accordion-icon');
          if (icon) icon.textContent = isOpen ? '▼' : '▲';
        }
      });
    });

    triggerMathRender();
  }

  // ==========================================
  // VIEW 2A: 1-MARK EXAM MCQS
  // ==========================================
  function renderExamMCQs() {
    const container = document.getElementById('exam-mcq-container');
    if (!container) return;

    let mcqs = STUDY_DATA.mcqs.exam || [];

    if (STATE.currentSubject !== 'all') {
      mcqs = mcqs.filter(m => m.subject.toLowerCase() === STATE.currentSubject);
    }

    if (mcqs.length === 0) {
      container.innerHTML = `<div class="empty-state">No exam questions found for this subject.</div>`;
      updateExamScoreUI();
      return;
    }

    container.innerHTML = mcqs.map((q, qIndex) => {
      const savedAnswer = STATE.examAnswers[q.id];
      const hasAnswered = savedAnswer !== undefined;

      return `
        <div class="mcq-card" id="mcq-card-${q.id}">
          <div class="mcq-meta">
            <span class="badge-solid">${q.subject}</span>
            <span class="badge-outline">${q.topic}</span>
            <span style="font-size: 0.8rem; color: #555;">${q.year}</span>
          </div>

          <div class="mcq-prompt">${qIndex + 1}. ${q.question}</div>

          <div class="mcq-options-container" data-qid="${q.id}">
            ${q.options.map((opt, optIndex) => {
              const prefix = ['A', 'B', 'C', 'D'][optIndex];
              let extraClass = '';
              if (hasAnswered) {
                if (optIndex === q.correct) {
                  extraClass = 'is-correct';
                } else if (optIndex === savedAnswer) {
                  extraClass = 'is-wrong';
                }
              }

              return `
                <button class="mcq-opt-button ${extraClass}" 
                        data-qid="${q.id}" 
                        data-opt-idx="${optIndex}" 
                        ${hasAnswered ? 'disabled' : ''}>
                  <span style="font-weight: 700; min-width: 20px;">(${prefix})</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${hasAnswered ? `
            <div class="mcq-explanation">
              <strong>Explanation:</strong>
              <div>${q.explanation}</div>
            </div>
          ` : `<div class="mcq-explanation" id="expl-${q.id}" style="display: none;"></div>`}
        </div>
      `;
    }).join('');

    // Attach click listeners for options
    container.querySelectorAll('.mcq-opt-button').forEach(btn => {
      btn.addEventListener('click', () => {
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
    localStorage.setItem('prep_exam_answers', JSON.stringify(STATE.examAnswers));

    const card = document.getElementById(`mcq-card-${qid}`);
    if (!card) return;

    const buttons = card.querySelectorAll('.mcq-opt-button');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === question.correct) {
        btn.classList.add('is-correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('is-wrong');
      }
    });

    const expl = card.querySelector('.mcq-explanation');
    if (expl) {
      expl.innerHTML = `<strong>Explanation:</strong><div>${question.explanation}</div>`;
      expl.style.display = 'block';
    }

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
    if (scorePill) scorePill.textContent = `Score: ${correct} of ${attempted} (Total: ${mcqs.length})`;
  }

  function resetExamAnswers() {
    if (confirm("Clear your answers for these questions?")) {
      STATE.examAnswers = {};
      localStorage.removeItem('prep_exam_answers');
      renderExamMCQs();
    }
  }

  // ==========================================
  // VIEW 2B: RAPID-FIRE CONCEPT CHECK
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

    const counter = document.getElementById('rf-counter');
    const streakEl = document.getElementById('rf-streak-display');
    if (counter) counter.textContent = `Question ${STATE.rapidFire.currentIndex + 1} of ${list.length}`;
    if (streakEl) streakEl.textContent = `Streak: ${STATE.rapidFire.streak}`;

    const subTag = document.getElementById('rf-subject-tag');
    if (subTag) subTag.textContent = item.subject.toUpperCase();

    const trapTitle = document.getElementById('rf-trap-title');
    const trapConfusion = document.getElementById('rf-trap-confusion');
    if (trapTitle) trapTitle.textContent = item.trapTitle;
    if (trapConfusion) trapConfusion.textContent = `Common doubt: "${item.confusion}"`;

    const qPrompt = document.getElementById('rf-question-prompt');
    if (qPrompt) qPrompt.textContent = item.question;

    const optContainer = document.getElementById('rf-options-list');
    if (optContainer) {
      optContainer.innerHTML = item.options.map((opt, idx) => {
        const prefix = ['A', 'B', 'C', 'D'][idx];
        return `
          <button class="mcq-opt-button rf-opt-btn" data-idx="${idx}">
            <span style="font-weight: 700; min-width: 20px;">(${prefix})</span>
            <span>${opt}</span>
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

    const feedbackCard = document.getElementById('rf-feedback');
    if (feedbackCard) feedbackCard.style.display = 'none';

    const prevBtn = document.getElementById('rf-prev-btn');
    const nextBtn = document.getElementById('rf-next-btn');
    if (prevBtn) prevBtn.disabled = STATE.rapidFire.currentIndex === 0;
    if (nextBtn) {
      nextBtn.textContent = STATE.rapidFire.currentIndex === list.length - 1 ? 'Finish Quiz' : 'Next Question →';
    }

    triggerMathRender();
  }

  function handleRapidFireAnswer(selectedIdx) {
    if (STATE.rapidFire.currentAnswered) return;
    STATE.rapidFire.currentAnswered = true;

    const item = STATE.rapidFire.items[STATE.rapidFire.currentIndex];
    const optButtons = document.querySelectorAll('.rf-opt-btn');

    const isCorrect = selectedIdx === item.correct;
    if (isCorrect) {
      STATE.rapidFire.streak++;
    } else {
      STATE.rapidFire.streak = 0;
    }

    const streakEl = document.getElementById('rf-streak-display');
    if (streakEl) streakEl.textContent = `Streak: ${STATE.rapidFire.streak}`;

    optButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === item.correct) {
        btn.classList.add('is-correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('is-wrong');
      }
    });

    const failBox = document.getElementById('rf-why-fail');
    const ruleBox = document.getElementById('rf-golden-rule');
    const feedbackCard = document.getElementById('rf-feedback');

    if (failBox) failBox.textContent = item.whyStudentsFail;
    if (ruleBox) ruleBox.textContent = item.goldenRule;
    if (feedbackCard) feedbackCard.style.display = 'block';

    triggerMathRender();
  }

  function nextRapidQuestion() {
    const list = STATE.rapidFire.items;
    if (STATE.rapidFire.currentIndex < list.length - 1) {
      STATE.rapidFire.currentIndex++;
      renderRapidFireQuestion();
    } else {
      alert(`Quiz complete! Your final streak was ${STATE.rapidFire.streak}`);
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

  function renderRapidFireCheatSheet() {
    const container = document.getElementById('rf-all-traps-container');
    if (!container) return;

    let list = STUDY_DATA.mcqs.rapidFire || [];
    if (STATE.currentSubject !== 'all') {
      list = list.filter(item => item.subject.toLowerCase() === STATE.currentSubject);
    }

    if (list.length === 0) {
      container.innerHTML = `<div class="empty-state">No questions found for this subject.</div>`;
      return;
    }

    container.innerHTML = list.map((item, idx) => {
      const correctOpt = item.options[item.correct];
      return `
        <div class="topic-card">
          <div class="topic-meta-left">
            <span class="badge-solid">Question #${idx + 1}</span>
            <span class="badge-outline">${item.subject}</span>
            <span style="font-weight: 700;">${item.trapTitle}</span>
          </div>
          <div style="font-size: 0.9rem; font-style: italic; color: #555; margin-bottom: 8px;">
            Common doubt: "${item.confusion}"
          </div>
          <div style="font-weight: 600; margin-bottom: 12px; font-size: 0.98rem;">${item.question}</div>
          <div style="border-left: 2px solid #000; padding-left: 12px; margin-bottom: 12px; font-size: 0.92rem;">
            <strong>Correct Answer:</strong> ${correctOpt}
          </div>
          <div style="background: #fafafa; border: 1px solid #ddd; padding: 12px; font-size: 0.9rem;">
            <div><strong>Common mistake:</strong> ${item.whyStudentsFail}</div>
            <div style="margin-top: 6px;"><strong>What to remember:</strong> ${item.goldenRule}</div>
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
    // 1. Sidebar subject navigation
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        STATE.currentSubject = btn.getAttribute('data-subject');
        
        // Update top-bar title
        const titleEl = document.getElementById('page-subject-title');
        if (titleEl) {
          if (STATE.currentSubject === 'all') titleEl.textContent = 'All Subjects';
          else if (STATE.currentSubject === 'maths') titleEl.textContent = 'Mathematics';
          else titleEl.textContent = STATE.currentSubject.charAt(0).toUpperCase() + STATE.currentSubject.slice(1);
        }

        renderTopics();
        renderExamMCQs();
        setupRapidFire();
        if (document.getElementById('rf-all-traps-container') && document.getElementById('rf-all-traps-container').style.display !== 'none') {
          renderRapidFireCheatSheet();
        }
      });
    });

    // 2. Main View Switcher (Progress vs MCQs)
    const tabProgress = document.getElementById('tab-progress');
    const tabMCQs = document.getElementById('tab-mcqs');
    const viewProgress = document.getElementById('view-progress');
    const viewMCQs = document.getElementById('view-mcqs');

    if (tabProgress && tabMCQs) {
      tabProgress.addEventListener('click', () => {
        tabProgress.classList.add('active');
        tabProgress.setAttribute('aria-selected', 'true');
        tabMCQs.classList.remove('active');
        tabMCQs.setAttribute('aria-selected', 'false');
        if (viewProgress) viewProgress.style.display = 'block';
        if (viewMCQs) viewMCQs.style.display = 'none';
        STATE.mainTab = 'progress';
      });

      tabMCQs.addEventListener('click', () => {
        tabMCQs.classList.add('active');
        tabMCQs.setAttribute('aria-selected', 'true');
        tabProgress.classList.remove('active');
        tabProgress.setAttribute('aria-selected', 'false');
        if (viewProgress) viewProgress.style.display = 'none';
        if (viewMCQs) viewMCQs.style.display = 'block';
        STATE.mainTab = 'mcqs';
      });
    }

    // 3. MCQs Sub-Type Switcher (1-Mark Exam vs Rapid-Fire)
    const btnSubExam = document.getElementById('btn-sub-exam');
    const btnSubRapid = document.getElementById('btn-sub-rapid');
    const subviewExam = document.getElementById('subview-exam-mcqs');
    const subviewRapid = document.getElementById('subview-rapid-fire');

    if (btnSubExam && btnSubRapid) {
      btnSubExam.addEventListener('click', () => {
        btnSubExam.classList.add('active');
        btnSubRapid.classList.remove('active');
        if (subviewExam) subviewExam.style.display = 'block';
        if (subviewRapid) subviewRapid.style.display = 'none';
        STATE.mcqType = 'exam';
      });

      btnSubRapid.addEventListener('click', () => {
        btnSubRapid.classList.add('active');
        btnSubExam.classList.remove('active');
        if (subviewExam) subviewExam.style.display = 'none';
        if (subviewRapid) subviewRapid.style.display = 'block';
        STATE.mcqType = 'rapid';
        setupRapidFire();
      });
    }

    // 4. Rapid Fire Mode Switcher (Quiz vs List)
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

    // 5. Topic search input
    const searchInput = document.getElementById('topic-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value;
        renderTopics();
      });
    }

    // 6. Reset buttons
    const resetProgressBtn = document.getElementById('reset-progress-btn');
    if (resetProgressBtn) resetProgressBtn.addEventListener('click', resetAllProgress);

    const resetExamBtn = document.getElementById('reset-exam-mcqs-btn');
    if (resetExamBtn) resetExamBtn.addEventListener('click', resetExamAnswers);

    // 7. Rapid Fire navigation
    const nextBtn = document.getElementById('rf-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', nextRapidQuestion);

    const prevBtn = document.getElementById('rf-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', prevRapidQuestion);
  }

  // ==========================================
  // KATEX FORMULA RENDERING HELPER
  // ==========================================
  let katexRetries = 0;
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
        console.warn("KaTeX note:", err);
      }
    } else if (katexRetries < 5) {
      katexRetries++;
      setTimeout(triggerMathRender, 300);
    }
  }

  // DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
