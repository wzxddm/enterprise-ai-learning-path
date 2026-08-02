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
        { order: 1, type: "中文文档", title: "阿里云百炼：什么是模型服务平台百炼", level: "入门", focus: "先认识模型、API、应用编排和企业模型服务平台，不钻 SDK 细节。", output: "画出“模型—应用—业务系统—评测治理”四层图。", url: "https://help.aliyun.com/zh/model-studio/what-is-model-studio" },
        { order: 2, type: "中文教程", title: "Datawhale：动手学大模型应用开发", level: "入门实践", focus: "只学第一章、第二章的基本概念与 Prompt Engineering、第五章的评估入门。", output: "完成 Token、采样、Prompt 版本与字段稳定性实验。", url: "https://datawhalechina.github.io/llm-universe/" },
        { order: 3, type: "中文视频", title: "书生浦语：浦语提示词工程实践", level: "进阶实践", focus: "观看结构化提示词部分；跳过与企业工单无关的小红书文案案例。", output: "将工单任务改写成角色、目标、约束、流程和输出契约。", url: "https://www.bilibili.com/video/BV1tjS7YfEWJ/" },
        { order: 4, type: "中文任务", title: "书生浦语：提示词工程任务文档", level: "动手训练", focus: "只做结构化提示词练习，再进入平台内的工单数据实验。", output: "提交三个 Prompt 版本、失败案例和改进说明。", url: "https://github.com/InternLM/Tutorial/tree/camp4/docs/L1/Prompt" }
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
        { order: 1, type: "中文视频", title: "李沐：动手学深度学习中文视频", level: "入门", focus: "按顺序看预备知识、线性神经网络、多层感知机和深度学习计算对应视频。", output: "用自己的话解释张量、Loss、梯度、Batch 和过拟合。", url: "https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497" },
        { order: 2, type: "中文教材", title: "《动手学深度学习》中文版", level: "入门到中级", focus: "只学第 2～5 章和第 11 章；不展开计算机视觉与完整数学体系。", output: "实现训练、验证、保存、加载和 Loss 曲线分析。", url: "https://zh-v2.d2l.ai/" },
        { order: 3, type: "中文数据", title: "CLUE 中文语言理解评测：TNEWS 数据", level: "实践", focus: "只取 TNEWS 新闻分类子任务，理解训练集、验证集、标签和类别不平衡。", output: "完成小型中文文本分类与错误样本分析。", url: "https://github.com/CLUEbenchmark/CLUE" }
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
        { order: 1, type: "中文教材", title: "《动手学深度学习》：注意力机制", level: "原理入门", focus: "学习注意力提示、注意力汇聚、Self-Attention 和 Transformer 小节。", output: "画出 Q、K、V、Mask 和多头注意力的数据流。", url: "https://zh-v2.d2l.ai/chapter_attention-mechanisms/index.html" },
        { order: 2, type: "中文教程", title: "Datawhale：从零开始的大语言模型原理与实践", level: "中级", focus: "聚焦 Tokenizer、Embedding、Transformer、Decoder-only 和预训练目标。", output: "手写 Attention、Causal Mask 和 Transformer Block。", url: "https://github.com/datawhalechina/happy-llm" },
        { order: 3, type: "中文代码课", title: "Datawhale：大模型白盒子构建指南", level: "进阶实践", focus: "本阶段只做 Tiny Transformer 与 Tiny Llama3，Tiny RAG/Agent/Eval 留给后续阶段。", output: "训练迷你 GPT，并完成有无 KV Cache 的性能对比。", url: "https://github.com/datawhalechina/tiny-universe" }
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
        { order: 1, type: "中文教程", title: "Datawhale：动手学大模型应用开发 · RAG", level: "入门", focus: "只学 Embedding、文档切分、向量检索、检索增强生成和基础评测部分。", output: "先手写不依赖完整框架的最小 RAG 链路。", url: "https://datawhalechina.github.io/llm-universe/" },
        { order: 2, type: "中文文档", title: "Milvus 中文官方文档", level: "中级", focus: "学习向量、Collection、索引、相似度、Metadata Filter 和部署概念。", output: "比较三种切分策略，并记录 Recall@k 与检索延迟。", url: "https://milvus.io/docs/zh/overview.md" },
        { order: 3, type: "中文实战", title: "书生浦语：InternLM + LlamaIndex RAG 实践", level: "进阶实践", focus: "只完成 RAG 关卡，重点观察框架封装的加载、索引、检索与生成环节。", output: "实现带引用、拒答、权限过滤和 50 条问题集的知识助手。", url: "https://github.com/InternLM/Tutorial" },
        { order: 4, type: "中文项目", title: "茴香豆：企业级知识助手实践", level: "拓展", focus: "阶段项目完成后再阅读其领域知识助手设计，不作为入门必做项。", output: "对照自己的方案补充拒答、群聊场景和运维设计。", url: "https://github.com/InternLM/HuixiangDou/blob/main/README_zh.md" }
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
        { order: 1, type: "中文教材", title: "Datawhale：Hello-Agents", level: "入门到中级", focus: "先学智能体概念、ReAct、工具调用、记忆和上下文；再学工作流、通信协议与评测章节。", output: "完成 Workflow/Agent 选型表和一个只读工具调用循环。", url: "https://datawhalechina.github.io/hello-agents/" },
        { order: 2, type: "中文实战", title: "书生浦语：Lagent 自定义 Agent 智能体", level: "进阶实践", focus: "只完成 Lagent 关卡，重点理解工具注册、状态、终止条件和错误恢复。", output: "实现可中止、可观测、有权限边界的代码仓库 Agent。", url: "https://github.com/InternLM/Tutorial" }
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
        { order: 1, type: "中文教程", title: "Datawhale：开源大模型食用指南", level: "入门实践", focus: "先学本地部署、数据格式、全参数微调与 LoRA 的区别；选择一个小模型案例。", output: "写出 Prompt / RAG / 微调决策表并准备指令数据。", url: "https://github.com/datawhalechina/self-llm" },
        { order: 2, type: "中文文档", title: "LLaMA Factory 中文官方文档", level: "中级", focus: "学习数据集格式、Chat Template、LoRA/QLoRA 参数、训练监控、导出和评估。", output: "完成一次可复现 LoRA 训练，保存配置、种子和数据版本。", url: "https://llamafactory.readthedocs.io/zh-cn/latest/" },
        { order: 3, type: "中文视频", title: "LLaMA Factory 官方中文视频教程", level: "进阶实践", focus: "在读完中文文档后跟做，重点核对参数含义，不直接照抄配置。", output: "使用固定测试集完成微调前后与通用能力退化对比。", url: "https://www.bilibili.com/video/BV1djgRzxEts/" }
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
      outcome: "100 条评测集 + LMDeploy 服务 + 压测与上线报告",
      production: {
        position: "贯穿 AI 系统生命周期的质量和基础设施层",
        solves: "上线判断、版本回归、容量、延迟、成本与可靠性",
        status: "已成为生产必需能力，但业务评测仍缺少统一标准",
        future: "在线评测、自动回归、模型路由与业务 KPI 联动"
      },
      concepts: ["Golden Set", "LLM-as-a-Judge", "量化", "KV Cache", "Continuous Batching", "PagedAttention", "TTFT", "吞吐与成本"],
      resources: [
        { order: 1, type: "中文文档", title: "OpenCompass 中文评测教程", level: "入门到中级", focus: "学习快速开始、数据集与模型配置、指标、主观评测和 LLM Judge。", output: "建立 100 条 Golden Set 和版本回归评测流水线。", url: "https://opencompass.readthedocs.io/zh-cn/latest/" },
        { order: 2, type: "中文文档", title: "LMDeploy 中文部署教程", level: "中级", focus: "依次学习离线推理、兼容服务、量化、性能测试和生产指标监控。", output: "部署兼容 API 的模型服务并记录 TTFT、吞吐、显存和成本。", url: "https://lmdeploy.readthedocs.io/zh-cn/latest/" },
        { order: 3, type: "中文实战", title: "书生浦语：OpenCompass 评测与 LMDeploy 部署", level: "进阶实践", focus: "只做评测、量化和部署相关关卡，把前六阶段项目放入回归测试。", output: "提交质量、性能、成本、风险完整的 Go / No-Go 报告。", url: "https://github.com/InternLM/Tutorial" }
      ],
      tasks: [
        { id: "s7-t1", title: "建立 100 条 Golden Set", type: "评测", minutes: 300, detail: "包含质量、风险和长尾案例。" },
        { id: "s7-t2", title: "建立版本回归流水线", type: "项目", minutes: 240, detail: "覆盖 Prompt、模型和检索版本。" },
        { id: "s7-t3", title: "使用 LMDeploy 部署开源模型", type: "部署", minutes: 300, detail: "提供兼容 API 的服务。" },
        { id: "s7-t4", title: "完成并发和量化压测", type: "实验", minutes: 300, detail: "报告 P50/P95、TTFT、Token/s 和显存。" },
        { id: "s7-t5", title: "完成最终 Go / No-Go 报告", type: "写作", minutes: 240, detail: "整合质量、性能、成本和风险。" }
      ],
      project: { title: "生产评测与推理服务", brief: "构建可回归、可压测、可决策的模型服务。", metrics: ["质量通过率", "P95 / TTFT", "Token/s", "显存与单请求成本"] }
    }
  ],
  workbooks: {
    "stage-1": {
      title: "第一阶段可执行学习单",
      subtitle: "4 个单元 · 中文资料、练习数据、参考答案与验收标准一一对应",
      notice: "先独立完成，再展开参考答案。示例答案用于校准方法，不能替代你自己的模型实验数据。",
      units: [
        {
          number: "01",
          title: "判断一个场景是否值得使用 LLM",
          time: "2～3 小时",
          goal: "先学会选问题。企业落地最早失败的地方通常不是 API，而是选了无法评测、无法接管或没有价值的场景。",
          questions: [
            "模型、应用编排、业务系统和评测治理分别负责什么？",
            "LLM 相比规则多了什么能力，又失去了什么确定性？",
            "什么场景同时满足高频、可评测、失败可接管？"
          ],
          sources: [
            { title: "阿里云百炼：平台定位、模型服务与应用开发", scope: "只看产品定位、模型服务和应用开发能力。", url: "https://help.aliyun.com/zh/model-studio/what-is-model-studio" },
            { title: "Datawhale 第一章：大模型简介", scope: "只看 1.1 LLM 简介与 1.4 大模型开发整体流程。", url: "https://datawhalechina.github.io/llm-universe/#/C1/C1" }
          ],
          steps: [
            "从自己熟悉的业务中选 3 个候选场景。",
            "分别按业务频率、人工耗时、语言复杂度、数据可得性、输出可验证性打 1～5 分。",
            "把错误成本作为单独否决条件，并写出至少一个明确不使用 AI 的场景。",
            "画出模型—应用—业务系统—评测治理四层图。"
          ],
          deliverables: ["3 个场景的评分表", "一张四层生产架构图", "一个不用 AI 的反例"],
          answer: {
            label: "示例答案",
            points: [
              "客服工单分诊适合作为首个项目：输入非结构化、结果可标注、失败可人工接管，并且可以先以建议模式上线。",
              "自动退款不适合作为本阶段项目：动作不可逆，还需要鉴权、金额限制、幂等和审批。",
              "架构图至少应包含模型层、Prompt/Workflow 层、工单与业务 API 层，以及横切的评测、权限、日志和人工兜底。"
            ]
          },
          acceptance: ["不以“模型能回答”作为选型依据", "能说明首版为什么只做分诊建议", "评分包含可验证性和错误成本"]
        },
        {
          number: "02",
          title: "验证概率性与 Prompt 契约",
          time: "4～5 小时",
          goal: "亲手看到同一输入的波动，并用冻结数据比较 Prompt 版本，而不是凭感觉挑一个好回答。",
          questions: [
            "Temperature 为 0 是否绝对稳定？",
            "Few-shot 和结构化 Prompt 各解决什么问题？",
            "JSON Schema 能保证哪一层正确性？"
          ],
          sources: [
            { title: "Datawhale：基本概念", scope: "只看消息、Token 和生成参数。", url: "https://datawhalechina.github.io/llm-universe/#/C2/1.%20基本概念" },
            { title: "Datawhale：Prompt Engineering", scope: "学习清晰具体、思考时间和迭代原则。", url: "https://datawhalechina.github.io/llm-universe/#/C2/3.%20Prompt%20Engineering" },
            { title: "书生浦语：提示词工程中文视频", scope: "只看结构化提示词部分。", url: "https://www.bilibili.com/video/BV1tjS7YfEWJ/" }
          ],
          steps: [
            "下载 20 条中文种子工单和实验记录表。",
            "任选 5 条，在 Temperature 0 和 0.7 下各运行 5 次。",
            "分别编写零样本、带规则、带 2 个示例的三个 Prompt 版本。",
            "统计字段级稳定率、Schema 通过率、P50/P95 和失败类型。"
          ],
          files: [
            { title: "下载 20 条中文种子工单", url: "downloads/stage-1/tickets-seed.jsonl" },
            { title: "下载实验记录 CSV", url: "downloads/stage-1/experiment-record.csv" }
          ],
          deliverables: ["三个 Prompt 版本", "完成的实验 CSV", "一页结论与失败案例"],
          answer: {
            label: "结论参考，不是固定数值",
            points: [
              "低 Temperature 通常降低但不能消除波动；模型、服务路由和计算实现仍可能变化。",
              "示例可能改善格式与边界，也可能造成示例偏置，因此必须使用同一冻结测试集比较。",
              "字段级稳定率可以定义为：某字段 20 次输出中众数出现次数 ÷ 20。不要只比较整段文本。",
              "Schema 只保证结构；字段是否忠实、优先级是否符合业务规则需要其他校验。"
            ],
            files: [{ title: "查看三个 Prompt 版本参考答案", url: "downloads/stage-1/prompt-reference.md" }]
          },
          acceptance: ["记录模型、Prompt、参数和数据版本", "至少保留一个反直觉失败案例", "不用少量成功样例得出上线结论"]
        },
        {
          number: "03",
          title: "建立结构、语义和业务三层校验",
          time: "4～6 小时",
          goal: "把模型输出降级为候选结果：Schema 管结构、代码管业务一致性、权限系统管真实动作。",
          questions: [
            "Tool Calling 中是谁提出意图，谁执行动作？",
            "为什么合法 JSON 仍可能造成事故？",
            "哪些规则必须由确定性代码负责？"
          ],
          sources: [
            { title: "书生浦语：提示词工程任务文档", scope: "完成结构化提示词任务，并映射到工单输出契约。", url: "https://github.com/InternLM/Tutorial/tree/camp4/docs/L1/Prompt" }
          ],
          steps: [
            "阅读参考 Schema，先自己实现字段和枚举校验。",
            "增加跨字段规则：生产故障必须 P1 且转人工；安全事件必须进入安全团队；未知类别必须转人工。",
            "构造至少三条 JSON 合法但业务冲突的自动化测试。",
            "自己的测试通过后，再查看 Go 参考实现。"
          ],
          files: [
            { title: "查看输出 Schema", url: "https://github.com/wzxddm/enterprise-ai-learning-path/blob/main/01-llm-basics/lab/schema/ticket-triage.schema.json" }
          ],
          deliverables: ["输出 Schema", "业务校验器", "至少 3 个业务冲突测试", "失败处理流程"],
          answer: {
            label: "参考实现说明",
            points: [
              "JSON Schema 负责字段存在、类型、枚举和长度；业务校验器负责跨字段一致性。",
              "模型只生成工具意图和参数候选，应用代码负责校验、鉴权、幂等、执行和审计。",
              "校验失败应有限修复或转人工，不能因为 JSON 可解析就写入真实工单系统。",
              "参考 Go 代码演示方法，不代表真实公司的完整业务规则。"
            ],
            files: [
              { title: "查看 Go 参考校验器", url: "https://github.com/wzxddm/enterprise-ai-learning-path/blob/main/01-llm-basics/lab/reference/validator.go" },
              { title: "查看业务冲突参考测试", url: "https://github.com/wzxddm/enterprise-ai-learning-path/blob/main/01-llm-basics/lab/reference/validator_test.go" }
            ]
          },
          acceptance: ["存在 Schema 通过但业务校验失败的测试", "高风险和未知案例会转人工", "用户输入无法越权改变业务规则"]
        },
        {
          number: "04",
          title: "用评测完成 Go / No-Go 决策",
          time: "5～7 小时",
          goal: "把质量、延迟、成本和风险放在同一份上线报告中，形成第一阶段的企业工程闭环。",
          questions: [
            "为什么必须比较规则、纯 LLM 和混合方案？",
            "为什么 P1 Recall 比总体 Accuracy 更重要？",
            "什么证据足以进入小流量灰度？"
          ],
          sources: [
            { title: "Datawhale：如何评估 LLM 应用", scope: "只学人工评估、简单自动评估和迭代闭环。", url: "https://datawhalechina.github.io/llm-universe/#/C5/1.如何评估%20LLM%20应用" },
            { title: "第一阶段完整项目题", scope: "重点看三条基线、指标、生产架构和报告结构。", url: "https://github.com/wzxddm/enterprise-ai-learning-path/blob/main/01-llm-basics/project-ticket-triage.md" }
          ],
          steps: [
            "把 20 条种子数据扩充到至少 50 条，开发集和测试集分开。",
            "比较关键词规则、纯 LLM、规则 + LLM + 业务校验三条基线。",
            "统计 Macro-F1、P1 Recall、人工转交 Recall、Schema 通过率、P95 和单工单成本。",
            "填写 Go / No-Go 报告，并写明灰度范围、监控、人工兜底和回滚。"
          ],
          files: [
            { title: "下载 Go / No-Go 报告模板", url: "downloads/stage-1/go-no-go-template.md" }
          ],
          deliverables: ["50～100 条冻结测试集", "三条基线对比", "失败案例清单", "Go / No-Go 报告"],
          answer: {
            label: "示例上线判断",
            points: [
              "常见的合格结论是 Conditional Go，而不是全自动上线。",
              "只让混合方案处理低风险、高一致性工单；P1、安全、退款、信息不足和注入案例转人工。",
              "如果 P1 Recall 未达门槛，即使总体准确率很高，也应 No-Go。",
              "准确率、延迟和成本必须来自你的真实运行，不能照抄示例数据。"
            ],
            files: [{ title: "查看 35 题完整参考答案", url: "https://github.com/wzxddm/enterprise-ai-learning-path/blob/main/01-llm-basics/answer-key.md" }]
          },
          acceptance: ["三条方案使用相同测试集和口径", "报告失败案例而非只报平均数", "上线范围、回滚和剩余风险明确"]
        }
      ]
    }
  },
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
