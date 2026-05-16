const root = document.querySelector("#view-root");

const states = {
  si: {
    key: "si",
    name: "思",
    system: "[思] 内耗系统",
    color: "#F0DCDC",
    title: "你的今日心绪偏向：[思] 内耗系统",
    emotion:
      "你可能正在经历过度思考、反复纠结与精神内耗。很多事情并非没有答案，只是大脑太久没有停下来。",
    formula: "檀香 × 雪松",
    formulaText: "以沉静木质气息收拢发散的思绪，让心绪从不断复盘中慢慢归位。",
    advice: "允许一切发生。你不必把每一件事都想明白。",
    tags: "别再想了 / 停止内耗",
    productName: "闻绪 [思] 内耗系统",
    scent: "檀香、雪松",
    scene: "适合深夜失眠、反复复盘、脑内弹幕过多的时刻。",
    image: "../产品包装效果图/闻绪香包_檀香雪松.png",
    cupImage: "./assets/mood-si.png",
    shareMain: "允许一切发生。\n你不必把每一件事都想明白。",
    shareTip: "建议：今晚，把脑内弹幕调成静音。"
  },
  bei: {
    key: "bei",
    name: "悲/忧",
    system: "[悲/忧] 焦虑系统",
    color: "#DFD8CC",
    title: "你的今日心绪偏向：[悲/忧] 焦虑系统",
    emotion:
      "你可能正在经历低落、焦虑、节奏混乱或心神不宁。不是你太脆弱，而是生活的速度太久没有为你慢下来。",
    formula: "薰衣草 × 桂花",
    formulaText: "以柔和花草气息舒缓焦躁，让紧绷的呼吸逐渐变慢。",
    advice: "慢一点也没关系。你可以不急着恢复正常。",
    tags: "有点不安 / 慢一点也没关系",
    productName: "闻绪 [悲/忧] 焦虑系统",
    scent: "薰衣草、桂花",
    scene: "适合节奏混乱、心神不宁、面对 DDL 感到窒息的时刻。",
    image: "../产品包装效果图/包装图案替换-薰衣草桂花款.png",
    cupImage: "./assets/mood-bei.png",
    shareMain: "慢一点也没关系。\n你可以不急着恢复正常。",
    shareTip: "建议：把今天的进度条暂停一下。"
  },
  nu: {
    key: "nu",
    name: "怒",
    system: "[怒] 压抑系统",
    color: "#FED1A7",
    title: "你的今日心绪偏向：[怒] 压抑系统",
    emotion:
      "你可能正在经历情绪积压、易怒压抑或假装没事。很多时候，你不是没有情绪，只是太习惯把它藏起来。",
    formula: "艾草 × 草本",
    formulaText: "以清透草本气息疏通积压的情绪，让那些被憋住的感受找到一个温和出口。",
    advice: "今天不想懂事，也没关系。",
    tags: "别憋着了 / 假装没事",
    productName: "闻绪 [怒] 压抑系统",
    scent: "艾草、草本",
    scene: "适合情绪积压、强行体面、需要温和宣泄的时刻。",
    image: "../产品包装效果图/包装图案替换-艾草款.png",
    cupImage: "./assets/mood-nu.png",
    shareMain: "今天不想懂事。\n那些被憋住的情绪，也需要出口。",
    shareTip: "建议：给自己一个合法发疯的安全时刻。"
  },
  kong: {
    key: "kong",
    name: "恐",
    system: "[恐] 安全系统",
    color: "#DFEAF8",
    title: "你的今日心绪偏向：[恐] 安全系统",
    emotion:
      "你可能正在经历紧张失控、惊恐不安或缺乏底气。你的心不是太敏感，只是它正在寻找一个可以安放的地方。",
    formula: "沉香 × 琥珀",
    formulaText: "以厚重、温润、稳定的气息托住悬着的心，让不安慢慢沉下来。",
    advice: "留一盏气味的灯，陪你度过今天。",
    tags: "需要一点安全感 / 有点慌",
    productName: "闻绪 [恐] 安全系统",
    scent: "沉香、琥珀",
    scene: "适合独居深夜、重大挑战前、心里七上八下的时刻。",
    image: "../产品包装效果图/包装图案替换.png",
    cupImage: "./assets/mood-kong.png",
    shareMain: "留一盏气味的灯。\n让悬着的心，慢慢有个底。",
    shareTip: "建议：今晚，不必强撑着勇敢。"
  },
  xi: {
    key: "xi",
    name: "喜",
    system: "[喜] 失衡系统",
    color: "#E6EED0",
    title: "你的今日心绪偏向：[喜] 失衡系统",
    emotion:
      "你可能正在经历兴奋后的空虚、身心疲惫或情绪落差。快乐不是消失了，只是它需要被温柔地接住。",
    formula: "柑橘 × 温和花香",
    formulaText: "以明亮而柔和的气息帮助情绪降落，让心境从过度亢奋回到平衡。",
    advice: "快乐用完了，也可以慢慢充电。",
    tags: "一键恢复出厂设置 / 太嗨之后",
    productName: "闻绪 [喜] 失衡系统",
    scent: "柑橘、温和花香",
    scene: "适合狂欢之后、项目完成之后、情绪大起大落后的恢复时刻。",
    image: "../产品包装效果图/闻绪香包包装_带花纹.png",
    cupImage: "./assets/mood-xi.png",
    shareMain: "快乐用完了，也可以慢慢充电。\n热闹之后的空，也值得被照顾。",
    shareTip: "建议：让情绪慢慢降落回地球。"
  }
};

const questions = [
  {
    q: "最近你最常出现的状态是？",
    options: [
      ["A", "脑子停不下来，总在反复复盘", "si"],
      ["B", "心里有点堵，节奏总是被打乱", "bei"],
      ["C", "表面很平静，心里已经憋了很多", "nu"],
      ["D", "对未知有点慌，总觉得缺少底气", "kong"],
      ["E", "热闹之后突然觉得很空", "xi"]
    ]
  },
  {
    q: "深夜独处时，你更容易想到什么？",
    options: [
      ["A", "白天是不是哪句话说错了", "si"],
      ["B", "明天又要开始面对一堆事情", "bei"],
      ["C", "今天又忍下了很多不想忍的事", "nu"],
      ["D", "一个人的时候，总觉得心里悬着", "kong"],
      ["E", "明明刚刚很开心，现在却突然失落", "xi"]
    ]
  },
  {
    q: "你最想对现在的自己说哪句话？",
    options: [
      ["A", "别再想了", "si"],
      ["B", "慢一点也没关系", "bei"],
      ["C", "别憋着了", "nu"],
      ["D", "需要一点安全感", "kong"],
      ["E", "快乐用完了，也可以慢慢恢复", "xi"]
    ]
  },
  {
    q: "如果今天给自己放一个情绪假，你最想做什么？",
    options: [
      ["A", "关掉所有消息，停止思考", "si"],
      ["B", "把生活节奏调慢一点", "bei"],
      ["C", "找一个安全出口，把情绪释放出来", "nu"],
      ["D", "待在一个不会被打扰的地方", "kong"],
      ["E", "从兴奋状态里慢慢降落", "xi"]
    ]
  },
  {
    q: "哪一个场景最像你最近的生活？",
    options: [
      ["A", "躺在床上，脑内小剧场还在运转", "si"],
      ["B", "面对 DDL 和不确定性，呼吸都变紧", "bei"],
      ["C", "刚微笑着处理完麻烦事，内心其实很崩溃", "nu"],
      ["D", "面对新环境或挑战，心里七上八下", "kong"],
      ["E", "聚会结束后，突然有一种电子失恋感", "xi"]
    ]
  },
  {
    q: "你最想闻到哪种气味状态？",
    options: [
      ["A", "沉静、收敛、让思绪慢下来", "si"],
      ["B", "柔和、舒缓、像被轻轻安慰", "bei"],
      ["C", "草本、通透、把憋住的气释放掉", "nu"],
      ["D", "稳定、厚重、像被温柔托住", "kong"],
      ["E", "明亮、轻盈、帮助情绪恢复平衡", "xi"]
    ]
  },
  {
    q: "今天的你，最需要哪一份处方？",
    options: [
      ["A", "允许一切发生", "si"],
      ["B", "世界是个巨大的草台班子", "bei"],
      ["C", "今天不想懂事", "nu"],
      ["D", "留一盏气味的灯", "kong"],
      ["E", "一键恢复出厂设置", "xi"]
    ]
  }
];

let currentQuestion = 0;
let answers = [];
let selectedAnswer = null;
let resultKey = "si";
let cupTimer = null;

function render(view) {
  root.innerHTML = document.querySelector(`#tpl-${view}`).innerHTML;
  document.documentElement.style.setProperty("--theme", states[resultKey].color);
  bindGlobalActions();
  if (view === "quiz") initQuiz();
  if (view === "match") initMatch();
  if (view === "prescription") initPrescription();
  if (view === "cup") initCup();
  if (view === "product") initProduct();
  if (view === "share") initShare();
}

function bindGlobalActions() {
  root.querySelectorAll("[data-action='go']").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.view));
  });
  root.querySelectorAll("[data-action='restart']").forEach((button) => {
    button.addEventListener("click", () => {
      currentQuestion = 0;
      answers = [];
      selectedAnswer = null;
      resultKey = "si";
      render("quiz");
    });
  });
}

function initQuiz() {
  selectedAnswer = null;
  const question = questions[currentQuestion];
  root.querySelector("#quizProgress").textContent = `第 ${currentQuestion + 1} / ${questions.length} 问`;
  root.querySelector("#questionText").textContent = question.q;
  const optionList = root.querySelector("#optionList");
  shuffleOptions(question.options).forEach(([label, text, key], index) => {
    const displayLabel = String.fromCharCode(65 + index);
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.innerHTML = `<b>${displayLabel}</b><span>${text}</span>`;
    button.addEventListener("click", () => {
      selectedAnswer = key;
      optionList.querySelectorAll(".option").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      root.querySelector("#nextQuestion").disabled = false;
    });
    optionList.appendChild(button);
  });
  const next = root.querySelector("#nextQuestion");
  next.textContent = currentQuestion === questions.length - 1 ? "生成我的心绪处方" : "下一题";
  next.addEventListener("click", () => {
    answers.push(selectedAnswer);
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      render("quiz");
      return;
    }
    resultKey = getResultKey();
    render("match");
  });
}

function shuffleOptions(options) {
  const list = options.map((item) => [...item]);
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function getResultKey() {
  const score = Object.keys(states).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
  answers.forEach((key) => {
    score[key] += 1;
  });
  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
}

function initMatch() {
  const map = root.querySelector("#fiveMap");
  const points = [
    ["si", "50%", "0%"],
    ["bei", "87%", "31%"],
    ["nu", "73%", "78%"],
    ["kong", "17%", "78%"],
    ["xi", "-3%", "31%"]
  ];
  points.forEach(([key, left, top]) => {
    const node = document.createElement("div");
    node.className = "map-node";
    node.style.left = left;
    node.style.top = top;
    node.style.setProperty("--node-color", states[key].color);
    node.textContent = states[key].name;
    map.appendChild(node);
    if (key === resultKey) setTimeout(() => node.classList.add("active"), 1200);
  });
  const lines = ["正在辨认你的心绪……", "正在匹配五志香谱……", "正在为你开出一缕气味……"];
  let index = 0;
  const copy = root.querySelector("#matchCopy");
  const interval = setInterval(() => {
    index += 1;
    copy.textContent = lines[index % lines.length];
  }, 760);
  setTimeout(() => {
    clearInterval(interval);
    copy.textContent = "你的今日心绪，已经被闻见。";
    root.querySelector("#matchDone").classList.remove("hidden");
    root.querySelector("#prescriptionBtn").classList.remove("hidden");
  }, 2600);
}

function initPrescription() {
  const state = states[resultKey];
  root.querySelector("#resultTitle").textContent = state.title;
  root.querySelector("#emotionText").textContent = state.emotion;
  root.querySelector("#scentFormula").textContent = state.formula;
  root.querySelector("#formulaText").textContent = state.formulaText;
  root.querySelector("#todayAdvice").textContent = state.advice;
}

function initCup() {
  const state = states[resultKey];
  root.querySelector("#liquid").style.background = state.color;
  root.querySelector("#floatingPack").src = state.cupImage;
  const captions = [
    "闻绪为你取出今日处方。",
    "轻轻撕开，把情绪交给气味。",
    "草本颗粒落入水中，心绪开始被慢慢梳理。",
    "那些说不清的情绪，正在变成可以闻到的安宁。"
  ];
  let i = 0;
  clearInterval(cupTimer);
  cupTimer = setInterval(() => {
    i = (i + 1) % captions.length;
    const caption = root.querySelector("#cupCaption");
    if (caption) caption.textContent = captions[i];
  }, 1600);
}

function initProduct() {
  clearInterval(cupTimer);
  const state = states[resultKey];
  root.querySelector("#productImage").src = state.cupImage;
  root.querySelector("#productName").textContent = state.productName;
  root.querySelector("#productTags").textContent = state.tags;
  root.querySelector("#productScent").textContent = state.scent;
  root.querySelector("#productScene").textContent = state.scene;
}

function initShare() {
  const state = states[resultKey];
  root.querySelector("#shareMood").textContent = state.system;
  root.querySelector("#shareMain").textContent = state.shareMain;
  root.querySelector("#shareFormula").textContent = `气味：${state.formula}`;
  root.querySelector("#shareTip").textContent = state.shareTip;
  drawPoster(state);
  root.querySelector("#savePoster").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = `闻绪-${state.name}-今日心绪处方卡.png`;
    link.href = root.querySelector("#posterCanvas").toDataURL("image/png");
    link.click();
  });
  root.querySelector("#sharePoster").addEventListener("click", () => {
    root.querySelector("#shareSheet").classList.toggle("hidden");
  });
}

function drawPoster(state) {
  const canvas = root.querySelector("#posterCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FEF7E7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = state.color;
  ctx.globalAlpha = 0.75;
  ctx.fillRect(70, 92, 610, 916);
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "#B0966E";
  ctx.lineWidth = 4;
  ctx.strokeRect(90, 112, 570, 876);
  ctx.fillStyle = "#B0966E";
  ctx.font = "34px serif";
  ctx.fillText("闻绪 WENXU", 128, 184);
  ctx.fillStyle = "#272018";
  ctx.font = "54px serif";
  ctx.fillText("今日心绪处方", 128, 285);
  ctx.font = "42px sans-serif";
  ctx.fillText(state.system, 128, 372);
  ctx.font = "31px sans-serif";
  wrapText(ctx, state.shareMain, 128, 470, 500, 52);
  ctx.fillStyle = "#7B6A57";
  ctx.font = "30px sans-serif";
  ctx.fillText(`气味：${state.formula}`, 128, 690);
  wrapText(ctx, state.shareTip, 128, 760, 500, 48);
  ctx.fillStyle = "#B0966E";
  ctx.font = "30px serif";
  ctx.fillText("闻一缕香，解千般绪", 128, 928);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const lines = text.split("\n");
  lines.forEach((line) => {
    let current = "";
    Array.from(line).forEach((char) => {
      const test = current + char;
      if (ctx.measureText(test).width > maxWidth && current) {
        ctx.fillText(current, x, y);
        current = char;
        y += lineHeight;
      } else {
        current = test;
      }
    });
    ctx.fillText(current, x, y);
    y += lineHeight;
  });
}

render("start");
