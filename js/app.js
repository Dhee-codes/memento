// Memory data, keyed by id. Only "graduation-brunch" has full content —
// the only memory with a real Memory Detail page. Add more entries here
// as their content becomes available, and tag their Memory Lane entry
// with a matching data-memory-id.
const MEMORIES = {
  "graduation-brunch": {
    title: "Graduation Brunch",
    description: "Celebrating Sarah's big day with the best pastries in town.",
    date: "May 15, 2026",
    category: "Family Celebration",
    orderTitle: "The Celebration Bundle",
    orderDesc:
      "12 Assorted Croissants, 6 Pain au Chocolat, and a customized Graduation Tart.",
    yourViewCount: "2 memories shared",
    linkSlug: "sarah-grad...",
    isPublic: true,
    // Real photos, carried over from the original hardcoded markup.
    ourView: [
      {
        large: true,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABZ1b1JQnA2DXtEtdSU4HMRPyhl1ZnEthOu7bmD-Qi4ULH-6hZCYgSMiZRRpd9dlfZjTjEkil1n6lUgSBKobvtpKu4YNG-kYLud4tg8yYOQR15PHgcLEkm47p5vWrZD1TyN5Y6Mzy2oDIHn61aiAnjRLuliWyXHMqUbdRsW89zdwA6_Dy3PTlKhCYXQ13YQIdbNiIs0bbopTVvpj0xOZ_DO4IPb7psQuJDp6tS9s1JyE33NGFFUKSnyQ",
        alt: "Croissants",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkAzcK2uoFFf5TeaU1Ca2F__gmz99MWqUJNMOGHb0aIlwTKTJ7_uNunFtDUdkSrK-q6Fe0nMx-WRxVHdjh4mO-28fO1IDHQp0XegZOaQFa7yrDvAQwxsl853UAYIF_7uufnyxaXYuPXAyAD4MumgSN3j4h5jY311mzUwT4qF1TGTu11ZTma_Joz0LBECCK-4RxsXeERYj5Dr-4n5_YYLg_MXdf-2MEeotWf2elJSBzBsRMCpyvKRrmhg",
        alt: "Tart",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMvvhpYZJEzks-moF1JLtHI8RCttyOQ6wGO3hRetjsiesLN2nPYiI-JU_RHx_VbtcKDyUJ_UzBerVLKmFMnUr4zg4WJ_8A-DXsaSeWiuOfs2IwlMre36spwPmvJjthk799yZr5cdnTX7awqFKX_wdzP3hxwNajAHCYDryZv-_7NgpysZTkqg1kEgaDbd2olt9qdPx_IWltv9dNypJfjuB3EhpCrDC5wmwvExvtenH0S6pbul1HUjCQsg",
        alt: "Pain au Chocolat",
      },
    ],
    yourView: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLhMnoWL_R0khhVSMSWz4T0T-5MBlkLuROWP_VSedexoPFZiRfrTikOGfv-y62bAakxgVLSAhhfpNtL27JMhIkx6XnxZSSknwsxMQ5HD53-nY1tfyG2NS7zL8Qe8x8fdMbekyC8eDf7FO1aQjIxkbHEP_VARuQ4eBe2e1YbBoVGv98S6iVuC3GDstbpq6IDKS6Q0_8ytEA_0PtsVEryay13m2bDuEXDtW9OAjpL2UH9SctA4ESj5NnUQ",
        alt: "Family photo",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPCh1Hrc3syBEFCvzDc2YfataY7jf_MzaO1seZYmPBOq8jeVWNcqZWOrVOUCCxkxxYe1mR7shhA4bw0C6hUakYyaj4oVY0J1X-LOV0xOp9n4v244neR9evl1GkIAEF5QPFnEcLW3-PQX4Nw3sebAP1c1306AXOthJYQ1IHMyj71LvMKzeaWG1W5rqNBZ_o9n9qC_RDT-Kfx1rjWKfOzvuHxDFptobgpBABiBw1G9GESGRzfiequ6YNqw",
        alt: "Toast",
      },
    ],
  },
  "sunday-morning-treats": {
    title: "Sunday Morning Treats",
    description: "No description added yet.",
    date: "February 24, 2026",
    category: "Not tagged yet",
    orderTitle: "Order details coming soon",
    orderDesc: "This memory hasn't been linked to order details yet.",
    yourViewCount: "No photos shared yet",
    linkSlug: "sunday-morning-treats",
    isPublic: true,
    ourView: [],
    yourView: [],
  },
  "valentines-special-bake": {
    title: "Valentine's Special Bake",
    description: "No description added yet.",
    date: "February 14, 2026",
    category: "Not tagged yet",
    orderTitle: "Order details coming soon",
    orderDesc: "This memory hasn't been linked to order details yet.",
    yourViewCount: "No photos shared yet",
    linkSlug: "valentines-special-bake",
    isPublic: true,
    ourView: [],
    yourView: [],
  },
};

let currentMemoryId = null;

function renderOurView(items) {
  const grid = document.getElementById("memory-detail-bento-grid");
  if (!items.length) {
    grid.innerHTML = `
            <div class="bento-item is-placeholder"><span>Photo not added yet</span></div>
            <div class="bento-item is-placeholder"><span>Photo not added yet</span></div>`;
    return;
  }
  grid.innerHTML = items
    .map(
      (p) =>
        `<div class="bento-item${p.large ? " bento-large" : ""}"><img src="${p.src}" alt="${p.alt}"></div>`,
    )
    .join("");
}

function renderYourView(items) {
  const grid = document.getElementById("memory-detail-customer-grid");
  const photoTiles = items.length
    ? items
        .map(
          (p) =>
            `<div class="bento-item customer-photo-item"><img src="${p.src}" alt="${p.alt}"><div class="customer-photo-overlay"></div></div>`,
        )
        .join("")
    : `<div class="bento-item customer-photo-item is-placeholder"><span>No photos shared yet</span></div>`;
  grid.innerHTML =
    photoTiles +
    `
        <button class="memory-detail-add-photo-btn">
            <span class="material-symbols-outlined">add</span>
            <span class="memory-detail-add-photo-label">Add your photos</span>
        </button>`;
}

function renderMemoryDetail(memoryId) {
  const m = MEMORIES[memoryId];
  if (!m) return;
  currentMemoryId = memoryId;
  document.querySelector(".memory-detail-title").textContent = m.title;
  document.querySelector(".memory-detail-quote").textContent =
    `"${m.description}"`;
  document.querySelector(".tag-tertiary").textContent = m.date;
  document.querySelector(".tag-secondary").textContent = m.category;
  document.querySelector(".memory-detail-order-title").textContent =
    m.orderTitle;
  document.querySelector(".memory-detail-order-desc").textContent = m.orderDesc;
  document.getElementById("memory-detail-your-view-count").textContent =
    m.yourViewCount;
  renderOurView(m.ourView);
  renderYourView(m.yourView);
}

let editingMemoryId = null;

function renderEditMemory(memoryId) {
  const m = MEMORIES[memoryId];
  if (!m) return;
  editingMemoryId = memoryId;
  const titleInput = document.getElementById("em-title");
  const descInput = document.getElementById("em-description");
  const saveBtn = document.getElementById("edit-memory-save-btn");
  titleInput.value = m.title;
  descInput.value = m.description;
  saveBtn.disabled = true;
}

document.addEventListener("DOMContentLoaded", () => {
  // Basic routing function
  window.showScreen = function (screenId, memoryId) {
    let url = (screenId === "welcome" ? "index" : screenId) + ".html";
    if (memoryId) {
      url += "?id=" + memoryId;
    }
    window.location.href = url;
  };

  // Global navigation intercept
  document.addEventListener("click", (e) => {
    const backBtn = e.target.closest('[data-action="back"]');
    if (backBtn) {
      e.preventDefault();
      window.history.back();
      return;
    }

    const routeTarget = e.target.closest("[data-route]");
    if (routeTarget) {
      e.preventDefault();
      const screenId = routeTarget.getAttribute("data-route");
      const memoryId = routeTarget.getAttribute("data-memory-id");
      showScreen(screenId, memoryId || currentMemoryId);
    }
  });

  // Make sure the active screen class is added
  const screen = document.querySelector(".app-screen");
  if (screen) screen.classList.add("active");

  // Update bottom nav active state based on URL
  const bottomNav = document.getElementById("app-bottom-nav");
  if (bottomNav) {
    let currentPath =
      window.location.pathname.split("/").pop().replace(".html", "") || "index";
    if (currentPath === "index") currentPath = "welcome";
    bottomNav.querySelectorAll(".nav-item").forEach((nav) => {
      if (nav.getAttribute("data-route") === currentPath) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    });
  }

  // Handle specific page inits based on URL parameters
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (window.location.pathname.includes("memory-detail")) {
    renderMemoryDetail(id || "graduation-brunch");
  } else if (window.location.pathname.includes("edit-memory")) {
    renderEditMemory(id || "graduation-brunch");
  }

  // Initialize screens
  initWelcomeScreen();
  initLoginScreen();
  initJoinScreen();
  initHomeScreen();
  initProfileScreen();
  initEditProfileScreen();
  initMemoryLaneScreen();
  initMemoryDetailScreen();
  initEditMemoryScreen();
  initShareMemoryScreen();
});

// ... (keep rest of the file intact, will append to bottom)
// I'll just append initJoinScreen at the end of the file.

function initWelcomeScreen() {
  const welcomeScreen = document.getElementById("screen-welcome");
  if (!welcomeScreen) return;

  // Parallax logic
  document.addEventListener("mousemove", (e) => {
    if (!welcomeScreen.classList.contains("active")) return;

    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;

    document
      .querySelectorAll(".welcome-floating-element, .welcome-floating-reverse")
      .forEach((el, index) => {
        const speed = (index + 1) * 0.2;
        const rot = el.classList.contains("welcome-floating-reverse") ? -5 : 5;
        el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px) rotate(${index % 2 === 0 ? rot : -rot}deg)`;
      });
  });

  // Tap feedback
  document.querySelectorAll(".welcome-glass-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(1.1)";
      setTimeout(() => (card.style.transform = ""), 300);
    });
  });

  // WebGL Shader logic
  const canvas = document.getElementById("welcome-shader-canvas");
  if (!canvas) return;

  function syncSize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  }
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(syncSize).observe(canvas);
  }
  syncSize();

  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return;
  const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
  const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

vec3 honeyGlaze = vec3(0.957, 0.478, 0.165);
vec3 tangerineBurst = vec3(1.0, 0.416, 0.165);
vec3 warmCream = vec3(1.0, 0.98, 0.96);

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = v_texCoord;
    float wave = sin(uv.x * 2.0 + u_time * 0.5) * 0.5 + 0.5;
    vec3 bgColor = mix(warmCream, mix(honeyGlaze, tangerineBurst, uv.y), 0.15 + 0.05 * wave);
    
    float bubbles = 0.0;
    for(int i = 0; i < 8; i++) {
        float t = u_time * (0.1 + 0.05 * float(i));
        vec2 pos = vec2(noise(vec2(float(i), 1.0)), noise(vec2(float(i), 2.0)));
        pos.y = fract(pos.y - t * 0.2);
        pos.x += sin(t + pos.y * 5.0) * 0.1;
        float d = length(uv - pos);
        bubbles += smoothstep(0.05, 0.0, d) * 0.1;
    }
    gl_FragColor = vec4(bgColor + bubbles * honeyGlaze, 1.0);
}
`;
  function cs(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const pos = gl.getAttribLocation(prog, "a_position");
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, "u_time");
  const uRes = gl.getUniformLocation(prog, "u_resolution");

  function render(t) {
    if (!welcomeScreen.classList.contains("active")) {
      requestAnimationFrame(render);
      return;
    }
    if (typeof ResizeObserver === "undefined") syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime) gl.uniform1f(uTime, t * 0.001);
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  render(0);
}

function initLoginScreen() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Logging in...");
      showScreen("home");
    });
  }
}

function initJoinScreen() {
  const joinForm = document.getElementById("join-form");
  if (joinForm) {
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Signing up...");
      showScreen("home");
    });
  }

  // Input focus effects for join form are mostly handled by CSS,
  // but we can add the label color toggle logic here if needed.
  const joinInputs = document.querySelectorAll("#screen-join input");
  joinInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      const label = input.parentElement.parentElement.querySelector("label");
      if (label) label.style.color = "var(--color-primary)";
    });
    input.addEventListener("blur", () => {
      const label = input.parentElement.parentElement.querySelector("label");
      if (label) label.style.color = ""; // Revert to original
    });
  });
}

function initHomeScreen() {
  const slideshow = document.getElementById("home-slideshow");
  const indicators = document.getElementById("home-slideshow-indicators");

  if (slideshow && indicators) {
    const dots = indicators.querySelectorAll(".slide-indicator");
    slideshow.addEventListener("scroll", () => {
      const scrollLeft = slideshow.scrollLeft;
      const width = slideshow.clientWidth;
      const activeIndex = Math.round(scrollLeft / width);

      dots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    });
  }

  // Since app-bottom-nav is shared, we could handle active state here or in a global router modifier
  // It's already partly handled by `window.showScreen` if we wanted to update nav items there.
}

function initProfileScreen() {
  // Optional micro-interactions for profile
  const profileScreen = document.getElementById("screen-profile");
  if (profileScreen) {
    // We could trigger animations here when screen becomes active
    // But CSS animation fade-in-up runs when the node is displayed
  }
}

function initEditProfileScreen() {
  const editProfileScreen = document.getElementById("screen-edit-profile");
  if (editProfileScreen) {
    // Micro-interactions for form fields
    const inputs = editProfileScreen.querySelectorAll(".edit-profile-input");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        const label = input
          .closest(".edit-profile-input-group")
          .querySelector(".edit-profile-label");
        if (label) label.style.color = "var(--color-primary)";
      });
      input.addEventListener("blur", () => {
        const label = input
          .closest(".edit-profile-input-group")
          .querySelector(".edit-profile-label");
        if (label) label.style.color = "";
      });
    });

    // Save button: enabled only once something actually changes,
    // then writes the new values into the Profile screen and
    // navigates back there.
    const nameInput = editProfileScreen.querySelector("#full_name");
    const emailInput = editProfileScreen.querySelector("#email_address");
    const phoneInput = editProfileScreen.querySelector("#phone_number");
    const saveBtn = document.getElementById("edit-profile-save-btn");

    const initialName = nameInput.value;
    const initialEmail = emailInput.value;
    const initialPhone = phoneInput.value;

    function checkProfileChanges() {
      saveBtn.disabled =
        nameInput.value === initialName &&
        emailInput.value === initialEmail &&
        phoneInput.value === initialPhone;
    }
    [nameInput, emailInput, phoneInput].forEach((inp) => {
      inp.addEventListener("input", checkProfileChanges);
    });

    saveBtn.addEventListener("click", () => {
      if (saveBtn.disabled) return;
      document.querySelector(".profile-user-name").textContent =
        nameInput.value;
      document.querySelector(".profile-user-email").textContent =
        emailInput.value;
      const profileValues = document.querySelectorAll(".profile-detail-value");
      profileValues[0].textContent = nameInput.value;
      profileValues[1].textContent = emailInput.value;
      profileValues[2].textContent = phoneInput.value;
      showScreen("profile");
    });

    // Floating Header Effect (scoping to the screen instead of window if it scrolls independently, or window if the body scrolls)
    // Since we are using standard body scrolling, we'll listen to window.
    // To be safe and only apply when screen is active, we can check it.
    const header = editProfileScreen.querySelector(".edit-profile-header");
    window.addEventListener("scroll", () => {
      if (editProfileScreen.classList.contains("active")) {
        if (window.scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    });
  }
}

function initMemoryLaneScreen() {
  const memoryLaneScreen = document.getElementById("screen-memory-lane");
  if (memoryLaneScreen) {
    // Empty state toggle logic
    const emptyState = document.getElementById("memory-lane-empty-state");
    const timeline = memoryLaneScreen.querySelector(".memory-lane-timeline");

    if (Object.keys(MEMORIES).length === 0) {
      if (timeline) timeline.style.display = "none";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (timeline) timeline.style.display = "block";
      if (emptyState) emptyState.style.display = "none";
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // We can reuse the fade-in-up class or set styles directly
          // Since the CSS handles fade-in-up immediately, we might want to toggle a class
          // if we wanted it to trigger only on scroll.
          // For now, let's ensure it has animation.
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const articles = memoryLaneScreen.querySelectorAll(".memory-lane-entry");
    articles.forEach((article) => {
      // Initial state for JS-based intersection observer
      article.style.opacity = "0";
      article.style.transform = "translateY(2.5rem)";
      article.style.transition = "all 0.7s ease-out";
      observer.observe(article);
    });

    // Tap interactions for cards
    const cards = memoryLaneScreen.querySelectorAll(".memory-lane-card");
    cards.forEach((card) => {
      card.addEventListener("touchstart", () => {
        card.style.transform = "scale(0.98)";
      });
      card.addEventListener("touchend", () => {
        card.style.transform = "";
      });
    });
  }
}

function initMemoryDetailScreen() {
  const screen = document.getElementById("screen-memory-detail");
  if (!screen) return;
  const header = document.getElementById("memory-detail-header");
  window.addEventListener("scroll", () => {
    if (screen.classList.contains("active")) {
      header.classList.toggle("scrolled", window.scrollY > 20);
    }
  });
}

function initEditMemoryScreen() {
  const screen = document.getElementById("screen-edit-memory");
  if (!screen) return;

  const titleInput = screen.querySelector("#em-title");
  const descInput = screen.querySelector("#em-description");
  const saveBtn = screen.querySelector("#edit-memory-save-btn");

  const checkChanges = () => {
    const m = MEMORIES[editingMemoryId];
    if (!m) return;
    saveBtn.disabled =
      titleInput.value === m.title && descInput.value === m.description;
  };
  titleInput.addEventListener("input", checkChanges);
  descInput.addEventListener("input", checkChanges);

  saveBtn.addEventListener("click", () => {
    if (saveBtn.disabled) return;
    const m = MEMORIES[editingMemoryId];
    if (!m) return;
    m.title = titleInput.value.trim() || m.title;
    m.description = descInput.value.trim() || m.description;
    renderMemoryDetail(editingMemoryId);
    showScreen("memory-detail");
  });

  screen.querySelectorAll(".edit-memory-remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = btn.closest(".edit-memory-media-item");
      item.style.opacity = "0";
      item.style.transform = "scale(0.8)";
      item.style.transition = "all 0.3s";
      setTimeout(() => item.classList.add("hidden"), 300);
    });
  });
}

function initShareMemoryScreen() {
  const sheet = document.getElementById("share-sheet");
  const backdrop = document.getElementById("share-modal-backdrop");
  const closeBtn = document.getElementById("share-sheet-close");
  if (!sheet || !backdrop) return;

  const openSheet = () => {
    const m = MEMORIES[currentMemoryId];
    if (m) {
      document.querySelector(".share-link-url").textContent =
        `memento.app/s/${m.linkSlug}`;
      const toggleInput = document.querySelector(".share-toggle-switch input");
      if (toggleInput) toggleInput.checked = m.isPublic;
    }
    sheet.classList.add("open");
    backdrop.classList.add("visible");
  };
  const closeSheet = () => {
    sheet.classList.remove("open");
    backdrop.classList.remove("visible");
  };

  // Any button with .js-open-share opens the sheet directly, as a
  // modal over whichever screen (Memory Detail) is already showing —
  // no navigation involved.
  document.querySelectorAll(".js-open-share").forEach((btn) => {
    btn.addEventListener("click", openSheet);
  });

  if (closeBtn) closeBtn.addEventListener("click", closeSheet);
  if (backdrop) backdrop.addEventListener("click", closeSheet);

  const copyBtn = document.querySelector(".share-copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const url = document.querySelector(".share-link-url").textContent;
      navigator.clipboard?.writeText(url).catch(() => {});
      const label = copyBtn.querySelector(".share-copy-label");
      const orig = label.textContent;
      label.textContent = "COPIED!";
      setTimeout(() => {
        label.textContent = orig;
      }, 1500);
    });
  }
}
