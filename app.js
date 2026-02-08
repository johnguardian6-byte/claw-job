// ===================================================
// Claw Job — the builder feed
// Hand-curated. Community-driven. No backend needed (yet).
// ===================================================

(function () {
  'use strict';

  // ===== Seed Data =====
  // Each project: id, name, desc (with personality), url, tags[], postedAt, baseVotes
  const SEED_PROJECTS = [
    {
      id: 'claude-code',
      name: 'Claude Code',
      desc: 'The OG. Anthropic\'s agentic CLI that pair-programs with you in the terminal. If you\'re reading this site, you probably already live in it.',
      url: 'https://github.com/anthropics/claude-code',
      tags: ['claude-native'],
      postedAt: '2026-01-10T10:00:00Z',
      baseVotes: 247,
    },
    {
      id: 'model-context-protocol',
      name: 'Model Context Protocol',
      desc: 'The open protocol that lets AI models talk to the rest of your stack. MCP is to Claude what APIs were to the web. Every tool on this list probably touches it.',
      url: 'https://github.com/modelcontextprotocol/servers',
      tags: ['claude-native', 'mcp', 'framework'],
      postedAt: '2026-01-12T14:30:00Z',
      baseVotes: 198,
    },
    {
      id: 'cline',
      name: 'Cline',
      desc: 'Autonomous coding agent that lives in your VS Code sidebar. Give it a task, watch it go. Supports Claude, GPT, whatever. The "just let the AI drive" experience.',
      url: 'https://github.com/cline/cline',
      tags: ['integrates-with-claude'],
      postedAt: '2026-01-14T09:00:00Z',
      baseVotes: 173,
    },
    {
      id: 'awesome-claude-code',
      name: 'awesome-claude-code',
      desc: 'Community-curated list of everything Claude Code. Skills, configs, workflows, tips. Basically the Yellow Pages for the ecosystem (if Yellow Pages were cool).',
      url: 'https://github.com/hesreallyhim/awesome-claude-code',
      tags: ['claude-native', 'community'],
      postedAt: '2026-01-16T16:00:00Z',
      baseVotes: 134,
    },
    {
      id: 'agentkit',
      name: 'AgentKit',
      desc: 'Coinbase\'s toolkit for building AI agents that can actually do stuff onchain. Your bot can now have a wallet, trade tokens, and deploy contracts. The future is autonomous.',
      url: 'https://github.com/coinbase/agentkit',
      tags: ['web3', 'framework', 'integrates-with-claude'],
      postedAt: '2026-01-18T11:00:00Z',
      baseVotes: 156,
    },
    {
      id: 'goat-sdk',
      name: 'GOAT (Great Onchain Agent Toolkit)',
      desc: 'Open-source framework for giving AI agents onchain superpowers. 200+ tools across DeFi, NFTs, and payments. If AgentKit is the sedan, GOAT is the monster truck.',
      url: 'https://github.com/goat-sdk/goat',
      tags: ['web3', 'framework'],
      postedAt: '2026-01-20T08:00:00Z',
      baseVotes: 121,
    },
    {
      id: 'wormhole',
      name: 'Wormhole',
      desc: 'Cross-chain messaging protocol connecting 30+ blockchains. 1B+ messages sent. The postal service of Web3 — boring infra that makes everything else possible.',
      url: 'https://github.com/wormhole-foundation/wormhole',
      tags: ['web3', 'framework'],
      postedAt: '2026-01-22T15:00:00Z',
      baseVotes: 112,
    },
    {
      id: 'aider',
      name: 'aider',
      desc: 'The OG terminal AI coder, before Claude Code existed. Pair program with LLMs from the command line. Still going strong with Claude, GPT, and local models.',
      url: 'https://github.com/Aider-AI/aider',
      tags: ['integrates-with-claude', 'community'],
      postedAt: '2026-01-24T10:00:00Z',
      baseVotes: 167,
    },
    {
      id: 'mcp-typescript-sdk',
      name: 'MCP TypeScript SDK',
      desc: 'The official SDK for building MCP servers and clients in TypeScript. If you want Claude to talk to your thing, start here. Clean API, good docs, actually works.',
      url: 'https://github.com/modelcontextprotocol/typescript-sdk',
      tags: ['claude-native', 'mcp', 'framework'],
      postedAt: '2026-01-26T13:00:00Z',
      baseVotes: 89,
    },
    {
      id: 'vercel-ai-sdk',
      name: 'Vercel AI SDK',
      desc: 'The AI cheat code for web apps. Streaming, tool use, multi-model support with Claude provider built right in. If you\'re building AI UIs, you probably already use this.',
      url: 'https://github.com/vercel/ai',
      tags: ['framework', 'integrates-with-claude'],
      postedAt: '2026-01-28T09:00:00Z',
      baseVotes: 145,
    },
    {
      id: 'eliza',
      name: 'Eliza',
      desc: 'Multi-agent simulation framework from the ai16z crew. Build autonomous agents with personality, memory, and goals. The vibes are very "what if NPCs were real."',
      url: 'https://github.com/elizaOS/eliza',
      tags: ['web3', 'framework'],
      postedAt: '2026-01-30T10:00:00Z',
      baseVotes: 142,
    },
    {
      id: 'smithery',
      name: 'Smithery',
      desc: '4,000+ MCP servers in one registry. It\'s like an app store for giving Claude new abilities. Search, install, ship. The ecosystem is growing faster than you think.',
      url: 'https://smithery.ai',
      tags: ['mcp', 'community'],
      postedAt: '2026-01-31T15:00:00Z',
      baseVotes: 97,
    },
    {
      id: 'zed-editor',
      name: 'Zed Editor',
      desc: 'Rust-powered code editor with native Claude integration via the Agent Control Protocol. Blazing fast, multiplayer-first, and the AI features are baked in — not bolted on.',
      url: 'https://github.com/zed-industries/zed',
      tags: ['integrates-with-claude', 'community'],
      postedAt: '2026-02-01T08:00:00Z',
      baseVotes: 158,
    },
    {
      id: 'claude-code-action',
      name: 'Claude Code GitHub Action',
      desc: 'Run Claude Code in your CI/CD pipeline. Automated code review, PR fixes, issue triage. Let the robot do the boring parts of open source maintenance.',
      url: 'https://github.com/anthropics/claude-code-action',
      tags: ['claude-native'],
      postedAt: '2026-02-01T14:30:00Z',
      baseVotes: 76,
    },
    {
      id: 'rig',
      name: 'Rig',
      desc: 'AI agent framework in Rust for when TypeScript isn\'t fast enough. Build LLM-powered apps with Claude, embeddings, and vector stores. Systems-level AI engineering.',
      url: 'https://github.com/0xPlaygrounds/rig',
      tags: ['framework', 'integrates-with-claude'],
      postedAt: '2026-02-02T11:00:00Z',
      baseVotes: 83,
    },
    {
      id: 'anthropic-cookbook',
      name: 'Anthropic Cookbook',
      desc: 'Official recipe book for building with Claude. Patterns, examples, and "ah-ha" moments. Less documentation, more "here\'s how to actually do the thing."',
      url: 'https://github.com/anthropics/anthropic-cookbook',
      tags: ['claude-native', 'community'],
      postedAt: '2026-02-02T18:00:00Z',
      baseVotes: 108,
    },
    {
      id: 'continue-dev',
      name: 'Continue',
      desc: 'Open-source AI code assistant for VS Code and JetBrains. Autocomplete, chat, edit — works with Claude, GPT, local models. The IDE extension that respects your freedom.',
      url: 'https://github.com/continuedev/continue',
      tags: ['integrates-with-claude', 'community'],
      postedAt: '2026-02-03T09:00:00Z',
      baseVotes: 139,
    },
    {
      id: 'boba-agents',
      name: 'Boba Agents',
      desc: 'Trading agents platform that connects AI to DeFi. Configure autonomous strategies, copy-trade KOL wallets, and let your agent sip from the liquidity pool.',
      url: 'https://agents.boba.xyz',
      tags: ['web3', 'integrates-with-claude'],
      postedAt: '2026-02-03T16:00:00Z',
      baseVotes: 64,
    },
    {
      id: 'github-mcp-server',
      name: 'GitHub MCP Server',
      desc: 'GitHub themselves built an MCP server. That\'s the signal. Manage repos, issues, PRs, and code search — all through Claude. When GitHub builds for your protocol, you\'ve won.',
      url: 'https://github.com/github/github-mcp-server',
      tags: ['mcp', 'integrates-with-claude'],
      postedAt: '2026-02-04T10:00:00Z',
      baseVotes: 131,
    },
    {
      id: 'mcp-server-fetch',
      name: 'MCP Server: Fetch',
      desc: 'Give Claude the ability to fetch any URL and read the web. Simple, essential, and one of the first MCP servers you should install. It\'s like giving AI eyes.',
      url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch',
      tags: ['mcp', 'claude-native'],
      postedAt: '2026-02-04T16:00:00Z',
      baseVotes: 53,
    },
    {
      id: 'desktop-commander-mcp',
      name: 'Desktop Commander MCP',
      desc: 'Turn Claude Desktop into a terminal power tool. Execute commands, manage files, control processes — all from the chat window. Claude with admin privileges is a vibe.',
      url: 'https://github.com/wonderwhy-er/DesktopCommanderMCP',
      tags: ['mcp', 'claude-native'],
      postedAt: '2026-02-05T08:00:00Z',
      baseVotes: 74,
    },
    {
      id: 'thirdweb',
      name: 'thirdweb',
      desc: 'Full-stack Web3 dev platform. SDKs, smart contracts, wallets, infra. Not Claude-specific but pairs beautifully with AI agents that need to touch the chain.',
      url: 'https://github.com/thirdweb-dev/js',
      tags: ['web3', 'framework'],
      postedAt: '2026-02-05T14:00:00Z',
      baseVotes: 88,
    },
    {
      id: 'mcp-server-sqlite',
      name: 'MCP Server: SQLite',
      desc: 'Turn Claude into a business analyst with SQL. Query databases, explore schemas, run analytics — all through natural language. The "talk to your data" dream, actually realized.',
      url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite',
      tags: ['mcp', 'claude-native'],
      postedAt: '2026-02-05T20:00:00Z',
      baseVotes: 67,
    },
    {
      id: 'brave-search-mcp',
      name: 'Brave Search MCP',
      desc: 'Official MCP server from Brave for live web search. Give Claude access to real-time search results without the Google tax. Privacy-first AI browsing.',
      url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search',
      tags: ['mcp'],
      postedAt: '2026-02-06T09:00:00Z',
      baseVotes: 58,
    },
    {
      id: 'claude-squad',
      name: 'Claude Squad',
      desc: 'Run multiple Claude Code instances in parallel with a TUI manager. Like tmux for your AI workforce. Delegate tasks to a squad and watch them cook.',
      url: 'https://github.com/smtg-ai/claude-squad',
      tags: ['claude-native'],
      postedAt: '2026-02-06T14:00:00Z',
      baseVotes: 71,
    },
    {
      id: 'openrouter',
      name: 'OpenRouter',
      desc: 'Unified API gateway for every major LLM. Route between Claude, GPT, Gemini, Llama with one API key. The Switzerland of AI model access.',
      url: 'https://openrouter.ai',
      tags: ['integrates-with-claude', 'framework'],
      postedAt: '2026-02-06T20:00:00Z',
      baseVotes: 93,
    },
    {
      id: 'opencode',
      name: 'OpenCode',
      desc: 'Open-source Claude Code rival, built in Go. Terminal-first, multi-provider, zero lock-in. For the "I love the vibe but want to own my tools" crowd.',
      url: 'https://github.com/opencode-ai/opencode',
      tags: ['integrates-with-claude', 'community'],
      postedAt: '2026-02-07T08:00:00Z',
      baseVotes: 62,
    },
    {
      id: 'mcp-inspector',
      name: 'MCP Inspector',
      desc: 'Chrome DevTools but for MCP servers. Debug connections, inspect messages, test tools interactively. Essential when your MCP server is "working on my machine."',
      url: 'https://github.com/modelcontextprotocol/inspector',
      tags: ['mcp', 'claude-native'],
      postedAt: '2026-02-07T12:00:00Z',
      baseVotes: 55,
    },
    {
      id: 'cursor',
      name: 'Cursor',
      desc: 'The AI code editor that started a movement. Built on VS Code, supercharged with Claude and other models. If you haven\'t tried Composer mode, you\'re missing out.',
      url: 'https://cursor.com',
      tags: ['integrates-with-claude'],
      postedAt: '2026-02-07T16:00:00Z',
      baseVotes: 186,
    },
  ];

  // ===== State =====
  let activeTag = 'all';
  let activeRange = 'all';
  let currentSort = 'hot';
  let searchQuery = '';
  let upvotedIds = new Set();
  let extraVotes = {};  // id -> additional votes from this browser
  let lastRenderWasUpvoteOnly = false;

  // ===== DOM =====
  const dom = {
    feedList:     document.getElementById('feed-list'),
    emptyState:   document.getElementById('empty-state'),
    emptyText:    document.querySelector('#empty-state p'),
    tagFilters:   document.getElementById('tag-filters'),
    timeFilters:  document.getElementById('time-filters'),
    sortSelect:   document.getElementById('sort-select'),
    totalCount:   document.getElementById('total-count'),
    upvoteCount:  document.getElementById('upvote-count'),
    themeToggle:  document.getElementById('theme-toggle'),
    searchInput:  document.getElementById('search-input'),
    submitBtn:    document.getElementById('submit-btn'),
    submitModal:  document.getElementById('submit-modal'),
    modalClose:   document.getElementById('modal-close'),
    submitForm:   document.getElementById('submit-form'),
    toastContainer: document.getElementById('toast-container'),
  };

  // ===== Helpers =====
  function getLatestProjectDate() {
    let max = 0;
    for (const p of SEED_PROJECTS) {
      const t = new Date(p.postedAt).getTime();
      if (t > max) max = t;
    }
    return max;
  }

  const LATEST_DATE = getLatestProjectDate();

  function isNewProject(project) {
    const age = LATEST_DATE - new Date(project.postedAt).getTime();
    return age < 7 * 24 * 60 * 60 * 1000;
  }

  // ===== Theme =====
  function loadTheme() {
    const saved = localStorage.getItem('clawjob_theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  function toggleTheme() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('clawjob_theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('clawjob_theme', 'light');
    }
  }

  // ===== LocalStorage Persistence =====
  function loadUpvotes() {
    try {
      const raw = localStorage.getItem('clawjob_upvotes');
      if (raw) {
        const data = JSON.parse(raw);
        upvotedIds = new Set(data.ids || []);
        extraVotes = data.votes || {};
      }
    } catch { /* fresh start */ }
  }

  function saveUpvotes() {
    try {
      localStorage.setItem('clawjob_upvotes', JSON.stringify({
        ids: [...upvotedIds],
        votes: extraVotes,
      }));
    } catch { /* oh well */ }
  }

  // ===== Toast Notifications =====
  const UPVOTE_TOASTS = ['nice taste.', 'good eye.', 'based.', 'solid pick.'];
  const UNVOTE_TOASTS = ['fair enough.', 'changed your mind?'];

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    dom.toastContainer.appendChild(toast);
    // Trigger reflow then animate in
    void toast.offsetWidth;
    toast.classList.add('toast-visible');
    setTimeout(function () {
      toast.classList.remove('toast-visible');
      setTimeout(function () { toast.remove(); }, 300);
    }, 1500);
  }

  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ===== Upvote Logic =====
  function toggleUpvote(id) {
    if (upvotedIds.has(id)) {
      upvotedIds.delete(id);
      extraVotes[id] = (extraVotes[id] || 0) - 1;
      if (extraVotes[id] === 0) delete extraVotes[id];
      showToast(randomFrom(UNVOTE_TOASTS));
    } else {
      upvotedIds.add(id);
      extraVotes[id] = (extraVotes[id] || 0) + 1;
      showToast(randomFrom(UPVOTE_TOASTS));
    }
    saveUpvotes();
    lastRenderWasUpvoteOnly = true;
    renderFeed();
    lastRenderWasUpvoteOnly = false;
  }

  function getVotes(project) {
    return project.baseVotes + (extraVotes[project.id] || 0);
  }

  // ===== Time Ranges =====
  function getTimeThreshold(range) {
    const anchor = LATEST_DATE;
    switch (range) {
      case 'day':   return anchor - 24 * 60 * 60 * 1000;
      case 'week':  return anchor - 7 * 24 * 60 * 60 * 1000;
      case 'month': return anchor - 30 * 24 * 60 * 60 * 1000;
      case 'year':  return anchor - 365 * 24 * 60 * 60 * 1000;
      default:      return 0;
    }
  }

  // ===== Search =====
  function debounce(fn, ms) {
    let timer;
    return function () {
      clearTimeout(timer);
      var args = arguments, ctx = this;
      timer = setTimeout(function () { fn.apply(ctx, args); }, ms);
    };
  }

  function searchScore(project, query) {
    var q = query.toLowerCase();
    var name = project.name.toLowerCase();
    if (name === q) return 100;
    if (name.startsWith(q)) return 80;
    if (name.indexOf(q) !== -1) return 60;
    for (var i = 0; i < project.tags.length; i++) {
      if (project.tags[i].toLowerCase().indexOf(q) !== -1) return 40;
    }
    if (project.desc.toLowerCase().indexOf(q) !== -1) return 20;
    return 0;
  }

  // ===== Sorting =====
  function hotScore(project) {
    var votes = getVotes(project);
    var ageHours = (LATEST_DATE - new Date(project.postedAt).getTime()) / 3600000;
    return votes / Math.pow(ageHours + 2, 1.5);
  }

  function sortProjects(projects) {
    if (searchQuery) {
      return projects.sort(function (a, b) {
        return searchScore(b, searchQuery) - searchScore(a, searchQuery);
      });
    }
    switch (currentSort) {
      case 'top':
        return projects.sort(function (a, b) { return getVotes(b) - getVotes(a); });
      case 'new':
        return projects.sort(function (a, b) { return new Date(b.postedAt) - new Date(a.postedAt); });
      case 'hot':
      default:
        return projects.sort(function (a, b) { return hotScore(b) - hotScore(a); });
    }
  }

  // ===== Filtering =====
  function getFilteredProjects() {
    var results = SEED_PROJECTS.slice();

    // Tag filter
    if (activeTag !== 'all') {
      results = results.filter(function (p) { return p.tags.indexOf(activeTag) !== -1; });
    }

    // Time filter
    if (activeRange !== 'all') {
      var threshold = getTimeThreshold(activeRange);
      results = results.filter(function (p) { return new Date(p.postedAt).getTime() >= threshold; });
    }

    // Search filter
    if (searchQuery) {
      results = results.filter(function (p) { return searchScore(p, searchQuery) > 0; });
    }

    return sortProjects(results);
  }

  // ===== Empty State Messages =====
  function getEmptyMessage() {
    if (searchQuery) {
      return 'no projects match "' + esc(searchQuery) + '". try a broader search?';
    }
    var tagLabel = activeTag !== 'all' ? tagLabelMap(activeTag) : '';
    if (activeTag !== 'all' && activeRange !== 'all') {
      return 'no ' + tagLabel + ' projects in this range. broaden your filters?';
    }
    if (activeTag !== 'all') {
      return 'no ' + tagLabel + ' projects yet. know one? submit it.';
    }
    return 'nothing here yet. the void stares back.';
  }

  // ===== Rendering =====
  function renderFeed() {
    var projects = getFilteredProjects();
    var upvotedCount = upvotedIds.size;

    // Update header counters
    dom.totalCount.textContent = projects.length + ' projects';
    if (upvotedCount > 0) {
      dom.upvoteCount.textContent = upvotedCount + ' upvoted';
      dom.upvoteCount.classList.remove('hidden');
    } else {
      dom.upvoteCount.textContent = '';
      dom.upvoteCount.classList.add('hidden');
    }

    if (projects.length === 0) {
      dom.feedList.innerHTML = '';
      dom.feedList.classList.add('hidden');
      dom.emptyState.classList.remove('hidden');
      dom.emptyText.textContent = getEmptyMessage();
      return;
    }

    dom.emptyState.classList.add('hidden');
    dom.feedList.classList.remove('hidden');

    var skipAnim = lastRenderWasUpvoteOnly;
    dom.feedList.innerHTML = projects.map(function (p, i) {
      return renderItem(p, i + 1, skipAnim ? 0 : Math.min(i, 9));
    }).join('');
  }

  function renderItem(project, rank, staggerIndex) {
    var votes = getVotes(project);
    var isUpvoted = upvotedIds.has(project.id);
    var domain = extractDomain(project.url);
    var timeStr = timeAgo(project.postedAt);
    var isNew = isNewProject(project);

    var tagHtml = project.tags.map(function (t) {
      return '<span class="feed-tag feed-tag-' + esc(t) + '" data-tag="' + esc(t) + '" role="button" tabindex="0">' + tagLabelMap(t) + '</span>';
    }).join('');

    var newBadge = isNew ? '<span class="new-badge">new</span>' : '';

    var animStyle = staggerIndex > 0
      ? ' style="animation-delay:' + (staggerIndex * 20) + 'ms"'
      : '';
    var animClass = staggerIndex >= 0 ? ' feed-item-enter' : '';

    return '<li class="feed-item' + (isUpvoted ? ' user-upvoted' : '') + animClass + '"' + animStyle + ' data-id="' + esc(project.id) + '">' +
      '<span class="feed-rank">' + rank + '.</span>' +
      '<button class="upvote-btn' + (isUpvoted ? ' upvoted' : '') + '" data-id="' + esc(project.id) + '" aria-label="Upvote ' + esc(project.name) + '">' +
        '<span class="upvote-arrow"></span>' +
        '<span class="upvote-count">' + votes + '</span>' +
      '</button>' +
      '<div class="feed-content">' +
        '<div class="feed-title-row">' +
          '<a class="feed-title" href="' + esc(project.url) + '" target="_blank" rel="noopener">' + esc(project.name) + '</a>' +
          newBadge +
          '<span class="feed-domain">(' + esc(domain) + ')</span>' +
        '</div>' +
        '<p class="feed-desc">' + esc(project.desc) + '</p>' +
        '<div class="feed-meta">' +
          tagHtml +
          '<span class="feed-time">' + timeStr + '</span>' +
        '</div>' +
      '</div>' +
    '</li>';
  }

  // ===== Helpers =====
  function extractDomain(url) {
    try {
      var u = new URL(url);
      return u.hostname.replace(/^www\./, '');
    } catch (e) {
      return url;
    }
  }

  function tagLabelMap(tag) {
    var labels = {
      'claude-native': 'claude-native',
      'mcp': 'mcp',
      'integrates-with-claude': 'integrates w/ claude',
      'web3': 'web3',
      'framework': 'framework',
      'community': 'community',
    };
    return labels[tag] || tag;
  }

  function timeAgo(dateStr) {
    var diff = LATEST_DATE - new Date(dateStr).getTime();
    var mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + 'm ago';
    var hours = Math.floor(mins / 60);
    if (hours < 24) return hours + 'h ago';
    var days = Math.floor(hours / 24);
    if (days < 30) return days + 'd ago';
    var months = Math.floor(days / 30);
    if (months < 12) return months + 'mo ago';
    return Math.floor(months / 12) + 'y ago';
  }

  function esc(str) {
    var el = document.createElement('span');
    el.textContent = str;
    return el.innerHTML;
  }

  // ===== Submit Modal =====
  function openModal() {
    dom.submitModal.classList.remove('hidden');
    dom.submitModal.querySelector('input').focus();
  }

  function closeModal() {
    dom.submitModal.classList.add('hidden');
    dom.submitForm.reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    var name = dom.submitForm.querySelector('#field-name').value.trim();
    var url = dom.submitForm.querySelector('#field-url').value.trim();
    var why = dom.submitForm.querySelector('#field-why').value.trim();
    var tags = [];
    dom.submitForm.querySelectorAll('input[name="tags"]:checked').forEach(function (cb) {
      tags.push(cb.value);
    });

    if (!name || !url) return;

    var title = encodeURIComponent('Project submission: ' + name);
    var body = encodeURIComponent(
      '## Project\n\n' +
      '**Name:** ' + name + '\n' +
      '**URL:** ' + url + '\n' +
      '**Tags:** ' + (tags.length ? tags.join(', ') : 'none selected') + '\n\n' +
      '## Why it\'s interesting\n\n' + (why || '_No description provided_')
    );

    var issueUrl = 'https://github.com/johnguardian6-byte/claw-job/issues/new?title=' + title + '&body=' + body;
    window.open(issueUrl, '_blank');
    closeModal();
  }

  // ===== Events =====
  function initEvents() {
    // Upvote clicks (event delegation)
    dom.feedList.addEventListener('click', function (e) {
      // Inline tag click -> activate that tag filter
      var tag = e.target.closest('.feed-tag');
      if (tag && tag.dataset.tag) {
        activateTag(tag.dataset.tag);
        return;
      }

      var btn = e.target.closest('.upvote-btn');
      if (!btn) return;
      var id = btn.dataset.id;
      if (!id) return;

      // Pop animation
      btn.classList.remove('upvote-pop');
      void btn.offsetWidth;
      btn.classList.add('upvote-pop');

      toggleUpvote(id);
    });

    // Tag filters (control bar pills)
    dom.tagFilters.addEventListener('click', function (e) {
      var pill = e.target.closest('.tag-pill');
      if (!pill) return;
      activateTag(pill.dataset.tag);
    });

    function activateTag(tag) {
      dom.tagFilters.querySelectorAll('.tag-pill').forEach(function (p) { p.classList.remove('active'); });
      var match = dom.tagFilters.querySelector('[data-tag="' + tag + '"]');
      if (match) match.classList.add('active');
      activeTag = tag;
      renderFeed();
      dom.tagFilters.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Time filters
    dom.timeFilters.addEventListener('click', function (e) {
      var btn = e.target.closest('.time-btn');
      if (!btn) return;
      dom.timeFilters.querySelectorAll('.time-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeRange = btn.dataset.range;
      renderFeed();
    });

    // Theme toggle
    dom.themeToggle.addEventListener('click', toggleTheme);

    // Sort
    dom.sortSelect.addEventListener('change', function () {
      currentSort = dom.sortSelect.value;
      renderFeed();
    });

    // Search
    var debouncedSearch = debounce(function () {
      searchQuery = dom.searchInput.value.trim();
      renderFeed();
    }, 300);
    dom.searchInput.addEventListener('input', debouncedSearch);

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      // Don't capture if user is typing in an input/textarea (except our search)
      var target = e.target;
      var isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT';

      if (e.key === '/' && !isInput) {
        e.preventDefault();
        dom.searchInput.focus();
        return;
      }

      if (e.key === 'Escape') {
        if (!dom.submitModal.classList.contains('hidden')) {
          closeModal();
          return;
        }
        if (document.activeElement === dom.searchInput) {
          if (searchQuery) {
            dom.searchInput.value = '';
            searchQuery = '';
            renderFeed();
          }
          dom.searchInput.blur();
          return;
        }
      }
    });

    // Submit modal
    dom.submitBtn.addEventListener('click', openModal);
    dom.modalClose.addEventListener('click', closeModal);
    dom.submitModal.addEventListener('click', function (e) {
      if (e.target === dom.submitModal) closeModal();
    });
    dom.submitForm.addEventListener('submit', handleSubmit);
  }

  // ===== Init =====
  function init() {
    loadTheme();
    loadUpvotes();
    initEvents();
    renderFeed();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
