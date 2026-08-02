window.LEARNING_DATA = {
  meta: {
    title: "企业 AI 应用工程师成长路径",
    subtitle: "20 周 · 7 个阶段 · 4 个生产级项目",
    weeklyHours: 10,
    totalWeeks: 20
  },
  stages: [
    {
      id: "stage-1",
      number: "01",
      symbol: "◈",
      title: "LLM 能力与企业边界",
      shortTitle: "LLM 基础",
      weeks: "第 1～2 周",
      duration: "20～24 小时",
      tone: "violet",
      description: "从“会调用模型”走到“能够判断一个 AI 方案是否值得进入生产”。",
      outcome: "可评测的客服工单分诊助手 + 2 篇知乎文章",
      production: {
        position: "模型能力与业务系统之间的接口和决策边界",
        solves: "非结构化信息理解、抽取、分类、摘要与受控工具意图生成",
        status: "企业采用已经普及，难点转向规模化、评测、治理和 ROI",
        future: "从通用聊天转向嵌入业务流程的 Copilot 与有界 Agent"
      },
      concepts: ["Token 与上下文", "采样与非确定性", "Prompt 契约", "结构化输出", "Tool Calling", "模型选型", "幻觉与注入", "评测与兜底"],
      resources: [
        { type: "视频", title: "Karpathy · Intro to Large Language Models", url: "https://www.youtube.com/@AndrejKarpathy" },
        { type: "报告", title: "Stanford · 2026 AI Index", url: "https://hai.stanford.edu/ai-index/2026-ai-index-report" },
        { type: "报告", title: "Deloitte · 2026 State of AI", url: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html" },
        { type: "安全", title: "OWASP Top 10 for LLM Applications", url: "https://genai.owasp.org/llm-top-10/" }
      ],
      tasks: [
        { id: "s1-t1", title: "阅读企业 AI 技术地图", type: "阅读", minutes: 45, detail: "标注模型、编排、数据、评测和治理五层。" },
        { id: "s1-t2", title: "完成 10 个业务场景评分", type: "分析", minutes: 75, detail: "按频率、成本、错误风险、数据和可验证性评分。" },
        { id: "s1-t3", title: "完成 Token、上下文和采样实验", type: "实验", minutes: 120, detail: "相同输入运行 20 次，记录一致率和失败类型。" },
        { id: "s1-t4", title: "设计 Prompt 与 JSON Schema", type: "编码", minutes: 120, detail: "区分格式正确、语义正确和业务正确。" },
        { id: "s1-t5", title: "建立规则、LLM、混合三条基线", type: "项目", minutes: 240, detail: "不能只展示单一模型方案。" },
        { id: "s1-t6", title: "制作并冻结 50～100 条测试集", type: "评测", minutes: 180, detail: "包含模糊、长尾、高风险和注入案例。" },
        { id: "s1-t7", title: "完成质量、延迟与成本报告", type: "项目", minutes: 180, detail: "报告 Macro-F1、P1 Recall、P95 和单次成本。" },
        { id: "s1-t8", title: "完成安全、降级和人工兜底设计", type: "设计", minutes: 120, detail: "说明超时、重试、熔断、权限和回滚。" },
        { id: "s1-t9", title: "完成两篇知乎文章草稿", type: "写作", minutes: 300, detail: "必须包含实验、失败案例和一手来源。" }
      ],
      project: {
        title: "企业客服工单分诊助手",
        brief: "将非结构化工单转换为摘要、类别、优先级、责任团队和风险标签，并在不确定时转人工。",
        metrics: ["Schema 通过率 ≥ 99%", "P1 Recall ≥ 95%", "Macro-F1 ≥ 0.85", "报告 P50/P95 与单工单成本"]
      }
    },
    {
      id: "stage-2",
      number: "02",
      symbol: "∇",
      title: "必要的深度学习基础",
      shortTitle: "深度学习",
      weeks: "第 3～5 周",
      duration: "30～36 小时",
      tone: "blue",
      description: "补齐读懂 Transformer、训练和微调代码所需的数学与 PyTorch 知识。",
      outcome: "文本分类模型 + 训练曲线与错误分析",
      production: {
        position: "模型训练、误差分析和微调的基础层",
        solves: "理解模型如何从数据学习，以及训练为什么失效",
        status: "工具链成熟，应用工程师无需掌握全部理论，但要能阅读训练与评测代码",
        future: "自动化训练会增强，但数据、目标函数和误差判断仍需工程判断"
      },
      concepts: ["矩阵与点积", "Softmax", "交叉熵", "梯度与链式法则", "反向传播", "优化器", "过拟合", "PyTorch 训练循环"],
      resources: [
        { type: "视频", title: "3Blue1Brown · 神经网络", url: "https://www.3blue1brown.com/topics/neural-networks" },
        { type: "教材", title: "动手学深度学习", url: "https://zh-v2.d2l.ai/" },
        { type: "文档", title: "PyTorch 60 Minute Blitz", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" }
      ],
      tasks: [
        { id: "s2-t1", title: "理解矩阵、点积与余弦相似度", type: "原理", minutes: 120, detail: "用代码验证每个运算的形状和意义。" },
        { id: "s2-t2", title: "实现 Softmax 与交叉熵", type: "编码", minutes: 120, detail: "说明数值稳定性问题。" },
        { id: "s2-t3", title: "手写最小反向传播", type: "编码", minutes: 180, detail: "能够解释梯度如何更新参数。" },
        { id: "s2-t4", title: "完成 PyTorch 训练循环", type: "项目", minutes: 180, detail: "包含训练、验证、保存与加载。" },
        { id: "s2-t5", title: "制造并分析一次过拟合", type: "实验", minutes: 120, detail: "记录训练和验证 Loss 的变化。" },
        { id: "s2-t6", title: "完成文本分类与错误分析", type: "项目", minutes: 300, detail: "不要只报告最终准确率。" }
      ],
      project: { title: "文本分类实验", brief: "完整训练、验证和错误分析一个小型文本分类模型。", metrics: ["训练可复现", "验证集独立", "包含错误样本分析"] }
    },
    {
      id: "stage-3",
      number: "03",
      symbol: "⌘",
      title: "Transformer 与 GPT 原理",
      shortTitle: "Transformer",
      weeks: "第 6～9 周",
      duration: "40～48 小时",
      tone: "cyan",
      description: "从 Tokenizer 一路实现到迷你 GPT，把模型原理映射到性能和产品边界。",
      outcome: "迷你 GPT + 原理文章 + KV Cache 实验",
      production: {
        position: "LLM 的核心模型层和推理性能基础",
        solves: "理解模型如何编码上下文并逐 Token 生成结果",
        status: "Decoder-only Transformer 仍是主流基础架构，推理优化快速演进",
        future: "更高效注意力、稀疏模型、长上下文和推理时计算继续发展"
      },
      concepts: ["Tokenizer", "Embedding", "位置编码", "Self-Attention", "Multi-Head", "Causal Mask", "Decoder-only", "KV Cache"],
      resources: [
        { type: "图文", title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
        { type: "视频", title: "Karpathy · Zero to Hero", url: "https://github.com/karpathy/nn-zero-to-hero" },
        { type: "书籍", title: "Build a Large Language Model From Scratch", url: "https://github.com/rasbt/LLMs-from-scratch" }
      ],
      tasks: [
        { id: "s3-t1", title: "实现并分析 Tokenizer", type: "编码", minutes: 240, detail: "观察语言和词表如何影响 Token 数。" },
        { id: "s3-t2", title: "手写 Scaled Dot-Product Attention", type: "编码", minutes: 240, detail: "验证缩放项和张量形状。" },
        { id: "s3-t3", title: "实现 Causal Mask 与 Multi-Head", type: "编码", minutes: 240, detail: "解释信息为什么不能看向未来。" },
        { id: "s3-t4", title: "组装 Transformer Block", type: "项目", minutes: 300, detail: "包含残差、归一化和 FFN。" },
        { id: "s3-t5", title: "训练迷你 GPT", type: "项目", minutes: 420, detail: "记录数据、参数、Loss 和样例。" },
        { id: "s3-t6", title: "完成 KV Cache 性能实验", type: "实验", minutes: 180, detail: "比较延迟和内存变化。" }
      ],
      project: { title: "迷你 GPT", brief: "从 Tokenizer、Attention 到自回归生成，完成可解释实现。", metrics: ["训练过程可复现", "有无 KV Cache 对比", "能解释张量形状"] }
    },
    {
      id: "stage-4",
      number: "04",
      symbol: "⌕",
      title: "Embedding、检索与 RAG",
      shortTitle: "RAG",
      weeks: "第 10～12 周",
      duration: "30～36 小时",
      tone: "green",
      description: "构建带权限、引用、拒答和分层评测的企业知识助手。",
      outcome: "技术文档知识库 + 50 条问题 + RAG 评测报告",
      production: {
        position: "连接模型与企业私有、实时知识的数据层",
        solves: "知识截止、私有知识、证据引用和内容更新",
        status: "企业知识应用的常见方案，瓶颈通常在数据、检索、权限和评测",
        future: "多模态检索、混合检索、权限原生化和端到端优化"
      },
      concepts: ["Embedding", "Chunking", "Vector Search", "Hybrid Search", "Reranker", "Query Rewrite", "引用", "分层评测"],
      resources: [
        { type: "文档", title: "Sentence Transformers", url: "https://www.sbert.net/" },
        { type: "文档", title: "LlamaIndex", url: "https://docs.llamaindex.ai/" },
        { type: "课程", title: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com/llm-bootcamp/" }
      ],
      tasks: [
        { id: "s4-t1", title: "手写最小语义搜索", type: "编码", minutes: 180, detail: "理解向量、相似度与 Top-k。" },
        { id: "s4-t2", title: "比较三种 Chunk 策略", type: "实验", minutes: 240, detail: "不要只调整 Chunk 大小。" },
        { id: "s4-t3", title: "实现最小 RAG 链路", type: "项目", minutes: 300, detail: "先不依赖完整框架。" },
        { id: "s4-t4", title: "加入混合检索与重排", type: "项目", minutes: 240, detail: "比较召回和延迟。" },
        { id: "s4-t5", title: "实现引用、拒答与权限过滤", type: "项目", minutes: 240, detail: "无证据时不得强行回答。" },
        { id: "s4-t6", title: "建立 RAG 分层评测", type: "评测", minutes: 240, detail: "区分检索错误和生成错误。" }
      ],
      project: { title: "企业技术文档助手", brief: "支持多格式文档、增量索引、权限过滤、引用和拒答。", metrics: ["检索 Recall@k", "答案忠实性", "P95 延迟", "无答案拒答率"] }
    },
    {
      id: "stage-5",
      number: "05",
      symbol: "↯",
      title: "Agent、工具调用与工作流",
      shortTitle: "Agent",
      weeks: "第 13～14 周",
      duration: "20～24 小时",
      tone: "amber",
      description: "实现可观测、可中止、有权限边界的代码仓库 Agent。",
      outcome: "代码仓库 Agent + 安全与故障测试报告",
      production: {
        position: "业务应用的决策、编排和动作执行层",
        solves: "路径无法完全预定义的多步骤任务",
        status: "能力进步明显，但开放式自治的可靠性、成本和治理仍不成熟",
        future: "有界自治、长任务记忆、可验证执行和专业 Agent 协作"
      },
      concepts: ["Workflow vs Agent", "Tool Schema", "ReAct", "状态管理", "幂等", "权限", "MCP", "Prompt Injection"],
      resources: [
        { type: "文章", title: "Building Effective Agents", url: "https://www.anthropic.com/engineering/building-effective-agents" },
        { type: "协议", title: "Model Context Protocol", url: "https://modelcontextprotocol.io/" },
        { type: "文档", title: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" }
      ],
      tasks: [
        { id: "s5-t1", title: "设计 Workflow 与 Agent 决策表", type: "分析", minutes: 90, detail: "优先选择可控的最小自治范围。" },
        { id: "s5-t2", title: "实现工具注册与参数校验", type: "编码", minutes: 180, detail: "模型只提出意图，代码负责执行。" },
        { id: "s5-t3", title: "实现状态、超时和终止条件", type: "项目", minutes: 240, detail: "防止循环和成本失控。" },
        { id: "s5-t4", title: "加入权限和人工确认", type: "安全", minutes: 180, detail: "危险动作必须有审批。" },
        { id: "s5-t5", title: "完成故障与注入测试", type: "评测", minutes: 180, detail: "覆盖错误参数、工具失败和恶意文档。" }
      ],
      project: { title: "代码仓库 Agent", brief: "搜索代码、读取文件、运行测试并输出可审计过程。", metrics: ["任务成功率", "平均步骤数", "失败恢复率", "危险动作拦截率"] }
    },
    {
      id: "stage-6",
      number: "06",
      symbol: "⌁",
      title: "微调与模型对齐",
      shortTitle: "微调",
      weeks: "第 15～17 周",
      duration: "30～36 小时",
      tone: "rose",
      description: "理解何时需要微调，并用固定评测证明 LoRA 的增量价值。",
      outcome: "LoRA Adapter + 数据报告 + 微调前后对比",
      production: {
        position: "模型行为和领域能力的适配层",
        solves: "稳定任务行为、领域语言和特定输出偏好",
        status: "PEFT 工具链成熟，但知识更新通常仍应优先使用 RAG",
        future: "小模型专业化、合成数据、持续评测驱动训练"
      },
      concepts: ["SFT", "Instruction Tuning", "LoRA", "QLoRA", "Chat Template", "数据治理", "DPO", "灾难性遗忘"],
      resources: [
        { type: "文档", title: "Hugging Face PEFT", url: "https://huggingface.co/docs/peft/" },
        { type: "文档", title: "TRL", url: "https://huggingface.co/docs/trl/" },
        { type: "工具", title: "Unsloth", url: "https://docs.unsloth.ai/" }
      ],
      tasks: [
        { id: "s6-t1", title: "完成 Prompt / RAG / 微调决策表", type: "分析", minutes: 90, detail: "先证明微调是必要方案。" },
        { id: "s6-t2", title: "构造并审核指令数据集", type: "数据", minutes: 300, detail: "检查重复、冲突、格式和分布。" },
        { id: "s6-t3", title: "完成 LoRA / QLoRA 训练", type: "项目", minutes: 420, detail: "保存配置、种子和数据版本。" },
        { id: "s6-t4", title: "完成微调前后固定评测", type: "评测", minutes: 240, detail: "同时检查通用能力退化。" },
        { id: "s6-t5", title: "输出成本与收益判断", type: "写作", minutes: 180, detail: "明确是否值得持续维护。" }
      ],
      project: { title: "领域模型适配", brief: "用 LoRA 让小模型稳定完成一个窄领域任务。", metrics: ["目标任务增益", "通用能力保持", "训练成本", "推理成本"] }
    },
    {
      id: "stage-7",
      number: "07",
      symbol: "▥",
      title: "评测、部署与性能优化",
      shortTitle: "生产化",
      weeks: "第 18～20 周",
      duration: "30～36 小时",
      tone: "orange",
      description: "建立上线证据，部署开源模型并完成质量、性能和成本权衡。",
      outcome: "100 条评测集 + vLLM 服务 + 压测与上线报告",
      production: {
        position: "贯穿 AI 系统生命周期的质量和基础设施层",
        solves: "上线判断、版本回归、容量、延迟、成本与可靠性",
        status: "已成为生产必需能力，但业务评测仍缺少统一标准",
        future: "在线评测、自动回归、模型路由与业务 KPI 联动"
      },
      concepts: ["Golden Set", "LLM-as-a-Judge", "量化", "KV Cache", "Continuous Batching", "PagedAttention", "TTFT", "吞吐与成本"],
      resources: [
        { type: "评测", title: "Ragas", url: "https://docs.ragas.io/" },
        { type: "评测", title: "Promptfoo", url: "https://www.promptfoo.dev/" },
        { type: "部署", title: "vLLM", url: "https://docs.vllm.ai/" }
      ],
      tasks: [
        { id: "s7-t1", title: "建立 100 条 Golden Set", type: "评测", minutes: 300, detail: "包含质量、风险和长尾案例。" },
        { id: "s7-t2", title: "建立版本回归流水线", type: "项目", minutes: 240, detail: "覆盖 Prompt、模型和检索版本。" },
        { id: "s7-t3", title: "使用 vLLM 部署开源模型", type: "部署", minutes: 300, detail: "提供兼容 API 的服务。" },
        { id: "s7-t4", title: "完成并发和量化压测", type: "实验", minutes: 300, detail: "报告 P50/P95、TTFT、Token/s 和显存。" },
        { id: "s7-t5", title: "完成最终 Go / No-Go 报告", type: "写作", minutes: 240, detail: "整合质量、性能、成本和风险。" }
      ],
      project: { title: "生产评测与推理服务", brief: "构建可回归、可压测、可决策的模型服务。", metrics: ["质量通过率", "P95 / TTFT", "Token/s", "显存与单请求成本"] }
    }
  ],
  quiz: {
    id: "stage-1-quiz",
    title: "第一阶段生产判断测验",
    passScore: 80,
    questions: [
      {
        id: "q1",
        question: "JSON Schema 能直接保证什么？",
        options: ["业务决策一定正确", "输出结构符合约束", "模型不会幻觉", "用户输入一定安全"],
        answer: 1,
        explanation: "Schema 主要保证语法和结构；语义正确与业务正确仍需验证。"
      },
      {
        id: "q2",
        question: "在 Tool Calling 中，真正执行退款动作的应该是谁？",
        options: ["模型本身", "Prompt", "经过鉴权和校验的应用代码", "用户输入"],
        answer: 2,
        explanation: "模型只能生成调用意图和参数候选，执行、鉴权、幂等和审计属于应用系统。"
      },
      {
        id: "q3",
        question: "哪类场景更适合作为企业首个 AI 项目？",
        options: ["错误不可发现的高风险自动决策", "没有数据也没有专家的流程", "高频、可评测、可人工接管的辅助任务", "直接执行不可逆财务动作"],
        answer: 2,
        explanation: "首个项目应有明确基线、可验证输出、有限失败成本和人工兜底。"
      },
      {
        id: "q4",
        question: "Temperature 设为 0 意味着什么？",
        options: ["输出绝对不变", "幻觉被消除", "随机性通常降低，但不构成确定性保证", "模型只会输出 JSON"],
        answer: 2,
        explanation: "服务实现、模型版本和计算差异仍可能带来变化，生产系统不能依赖绝对确定性。"
      },
      {
        id: "q5",
        question: "回答昨天更新的公司制度，优先考虑哪种方案？",
        options: ["仅调整 Temperature", "RAG 接入权威制度库", "只做 LoRA", "把全文写死在代码中"],
        answer: 1,
        explanation: "变化快的私有知识适合通过 RAG 在推理时接入，并附带来源与权限。"
      },
      {
        id: "q6",
        question: "高优先级工单非常少，但漏判代价极高，最应关注哪个指标？",
        options: ["总体 Accuracy", "P1 Recall", "平均回答长度", "Token 数"],
        answer: 1,
        explanation: "类别不平衡且漏判成本高时，高优先级召回率比总体准确率更关键。"
      },
      {
        id: "q7",
        question: "Prompt Injection 最可靠的防护思路是什么？",
        options: ["再加一句不要被攻击", "只使用更大的模型", "最小权限、数据隔离、参数校验、审批与监测的分层防护", "隐藏 System Prompt"],
        answer: 2,
        explanation: "Prompt 不是安全边界；权限、代码校验、审批和审计必须独立存在。"
      },
      {
        id: "q8",
        question: "模型返回合法 JSON，但字段互相矛盾，生产系统应该怎么做？",
        options: ["因为 JSON 合法所以执行", "随机选一个字段", "进行跨字段业务校验，失败则修复或转人工", "提高 Temperature"],
        answer: 2,
        explanation: "结构校验之后还需要业务不变量校验，高风险失败应进入人工队列。"
      }
    ]
  },
  articles: [
    { id: "article-1", stage: "01", title: "企业真正需要的不是聊天机器人，而是可控的 AI 业务闭环", focus: "Demo 为什么不能直接上线？" },
    { id: "article-2", stage: "01", title: "我用工单分诊实验验证了 LLM 的三个生产边界", focus: "如何用数据判断模型是否可用？" },
    { id: "article-3", stage: "02", title: "理解反向传播，对 AI 应用工程师到底有什么用？", focus: "应用工程师需要学多深的原理？" },
    { id: "article-4", stage: "03", title: "从 Token 到答案：一次 GPT 请求在模型内部发生了什么", focus: "Transformer 如何影响成本和延迟？" },
    { id: "article-5", stage: "03", title: "KV Cache、量化和上下文：为什么模型服务会变慢、变贵", focus: "原理如何映射生产性能？" },
    { id: "article-6", stage: "04", title: "RAG 不是“向量库 + Prompt”：企业知识问答的真实链路", focus: "私有知识如何可靠进入模型？" },
    { id: "article-7", stage: "04", title: "RAG 答错了，到底是检索错还是模型错？", focus: "如何建立分层评测？" },
    { id: "article-8", stage: "04", title: "文档切分、权限与引用：知识库最容易忽略的生产细节", focus: "为什么数据工程决定 RAG 上限？" },
    { id: "article-9", stage: "05", title: "Workflow 还是 Agent：企业为什么需要有界自治", focus: "什么时候不应该使用 Agent？" },
    { id: "article-10", stage: "05", title: "Agent 能调用工具之后，权限、幂等和审计怎么办？", focus: "如何安全执行真实业务动作？" },
    { id: "article-11", stage: "06", title: "Prompt、RAG、LoRA：企业应该如何选择", focus: "什么时候微调才值得？" },
    { id: "article-12", stage: "06", title: "一次 LoRA 微调复盘：数据质量比训练参数更重要吗？", focus: "如何证明增量价值？" },
    { id: "article-13", stage: "07", title: "不做评测就没有生产 AI：从 Golden Set 到线上回归", focus: "如何获得上线证据？" },
    { id: "article-14", stage: "07", title: "从模型 API 到推理服务：质量、延迟、吞吐和成本的权衡", focus: "如何完成生产部署决策？" }
  ]
};
