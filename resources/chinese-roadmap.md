# 七阶段中文资料学习顺序

这份清单是整个仓库唯一的资料总表。全部学习入口均为中文，并且已经固定到具体阶段。不要跨阶段囤课，也不要从头通读一个大型网站；只学习“本阶段范围”，完成对应产出后再进入下一步。

统一学习规则：

```text
第 1 步建立直觉 → 第 2 步补原理 → 第 3 步完成代码或数据实验 → 阶段项目验收
```

## 阶段一：LLM 能力与企业边界

目标：从会调用模型，走到能够判断 AI 方案是否值得进入生产。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文文档 / 入门 | [阿里云百炼：什么是模型服务平台百炼](https://help.aliyun.com/zh/model-studio/what-is-model-studio) | 模型、API、应用编排和企业模型服务平台，不钻 SDK 细节 | “模型—应用—业务系统—评测治理”四层图 |
| 第 2 步 | 中文教程 / 入门实践 | [Datawhale：动手学大模型应用开发](https://datawhalechina.github.io/llm-universe/) | 第一章；第二章基本概念与 Prompt Engineering；第五章评估入门 | Token、采样、Prompt 版本与字段稳定性实验 |
| 第 3 步 | 中文视频 / 进阶实践 | [书生浦语：浦语提示词工程实践](https://www.bilibili.com/video/BV1tjS7YfEWJ/) | 结构化提示词部分，跳过无关文案案例 | 工单任务的角色、目标、约束、流程和输出契约 |
| 第 4 步 | 中文任务 / 动手训练 | [书生浦语：提示词工程任务文档](https://github.com/InternLM/Tutorial/tree/camp4/docs/L1/Prompt) | 结构化提示词练习，再进入工单数据实验 | 三个 Prompt、实验 CSV、校验器与失败复盘 |

配套入口：[第一阶段可执行学习单](../01-llm-basics/workbook.md) · [20 条中文种子工单](../docs/downloads/stage-1/tickets-seed.jsonl) · [Go 参考校验器](../01-llm-basics/lab/reference/validator.go) · [35 题参考答案](../01-llm-basics/answer-key.md)

阶段验收：完成可评测的客服工单分诊助手、50～100 条测试集、质量/延迟/成本报告和两篇知乎文章草稿。

## 阶段二：必要的深度学习基础

目标：只补齐读懂 Transformer、训练与微调代码需要的知识，不学习编程语言基础。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文视频 / 入门 | [李沐：动手学深度学习中文视频](https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497) | 预备知识、线性神经网络、多层感知机、深度学习计算 | 能解释张量、Loss、梯度、Batch 和过拟合 |
| 第 2 步 | 中文教材 / 入门到中级 | [《动手学深度学习》中文版](https://zh-v2.d2l.ai/) | 第 2～5 章、第 11 章 | 完整训练循环、验证、保存、加载和 Loss 曲线分析 |
| 第 3 步 | 中文数据 / 实践 | [CLUE 中文语言理解评测：TNEWS](https://github.com/CLUEbenchmark/CLUE) | 只取 TNEWS 新闻分类子任务 | 中文文本分类、错误样本和类别不平衡分析 |

阶段验收：训练过程可复现，验证集独立，并能解释至少三类错误样本。

## 阶段三：Transformer 与 GPT 原理

目标：从 Tokenizer 一路实现到迷你 GPT，并把原理映射到性能与产品边界。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文教材 / 原理入门 | [《动手学深度学习》：注意力机制](https://zh-v2.d2l.ai/chapter_attention-mechanisms/index.html) | 注意力提示、注意力汇聚、Self-Attention 和 Transformer | Q、K、V、Mask 与多头注意力数据流图 |
| 第 2 步 | 中文教程 / 中级 | [Datawhale：从零开始的大语言模型原理与实践](https://github.com/datawhalechina/happy-llm) | Tokenizer、Embedding、Transformer、Decoder-only 和预训练目标 | Attention、Causal Mask 与 Transformer Block |
| 第 3 步 | 中文代码课 / 进阶实践 | [Datawhale：大模型白盒子构建指南](https://github.com/datawhalechina/tiny-universe) | 只做 Tiny Transformer、Tiny Llama3 | 迷你 GPT 与有无 KV Cache 性能对比 |

阶段验收：能解释每个核心张量的形状、Causal Mask、生成过程和 KV Cache 的时间/空间权衡。

## 阶段四：Embedding、检索与 RAG

目标：构建带权限、引用、拒答和分层评测的企业知识助手。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文教程 / 入门 | [Datawhale：动手学大模型应用开发](https://datawhalechina.github.io/llm-universe/) | Embedding、文档切分、向量检索、RAG 和基础评测 | 不依赖完整框架的最小 RAG |
| 第 2 步 | 中文文档 / 中级 | [Milvus 中文官方文档](https://milvus.io/docs/zh/overview.md) | 向量、Collection、索引、相似度、元数据过滤和部署 | 三种切分策略的 Recall@k 与延迟对比 |
| 第 3 步 | 中文实战 / 进阶实践 | [书生浦语：InternLM + LlamaIndex RAG 实践](https://github.com/InternLM/Tutorial) | 只做 RAG 关卡，观察框架封装的各环节 | 带引用、拒答、权限过滤和 50 条问题集的助手 |
| 第 4 步 | 中文项目 / 拓展 | [茴香豆：企业级知识助手实践（简体中文）](https://github.com/InternLM/HuixiangDou/blob/main/README_zh.md) | 阶段项目完成后再看领域知识助手设计 | 补充拒答、群聊场景与运维设计 |

阶段验收：能把错误拆成数据、切分、召回、重排、上下文和生成六层，并用评测证明优化有效。

## 阶段五：Agent、工具调用与工作流

目标：实现可观测、可中止、有权限边界的代码仓库 Agent。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文教材 / 入门到中级 | [Datawhale：Hello-Agents](https://datawhalechina.github.io/hello-agents/) | 智能体、ReAct、工具调用、记忆、工作流、通信协议和评测 | Workflow/Agent 选型表与只读工具调用循环 |
| 第 2 步 | 中文实战 / 进阶实践 | [书生浦语：Lagent 自定义 Agent 智能体](https://github.com/InternLM/Tutorial) | Lagent 关卡；工具注册、状态、终止条件和错误恢复 | 可中止、可观测、有权限边界的代码 Agent |

阶段验收：覆盖错误参数、工具失败、无限循环、越权动作、间接注入和人工确认测试。

## 阶段六：微调与模型对齐

目标：先证明微调是必要方案，再用固定评测证明 LoRA 的增量价值。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文教程 / 入门实践 | [Datawhale：开源大模型食用指南](https://github.com/datawhalechina/self-llm) | 本地部署、数据格式、全参数微调与 LoRA 区别；选一个小模型案例 | Prompt / RAG / 微调决策表与指令数据 |
| 第 2 步 | 中文文档 / 中级 | [LLaMA Factory 中文官方文档](https://llamafactory.readthedocs.io/zh-cn/latest/) | 数据集、Chat Template、LoRA/QLoRA、训练监控、导出和评估 | 可复现 LoRA 训练与完整配置 |
| 第 3 步 | 中文视频 / 进阶实践 | [LLaMA Factory 官方中文视频教程](https://www.bilibili.com/video/BV1djgRzxEts/) | 对照文档跟做并核对参数，不直接照抄配置 | 微调前后与通用能力退化对比 |

阶段验收：报告数据质量、目标任务增益、通用能力保持、训练成本和推理成本。

## 阶段七：评测、部署与性能优化

目标：建立上线证据，部署开源模型，并完成质量、性能、成本和风险权衡。

| 顺序 | 类型 / 难度 | 中文资料 | 本阶段只学 | 学完产出 |
|---|---|---|---|---|
| 第 1 步 | 中文文档 / 入门到中级 | [OpenCompass 中文评测教程](https://opencompass.readthedocs.io/zh-cn/latest/) | 快速开始、数据集与模型配置、指标、主观评测和 LLM Judge | 100 条 Golden Set 与版本回归流水线 |
| 第 2 步 | 中文文档 / 中级 | [LMDeploy 中文部署教程](https://lmdeploy.readthedocs.io/zh-cn/latest/) | 离线推理、兼容服务、量化、性能测试和监控 | 模型服务与 TTFT、吞吐、显存、成本报告 |
| 第 3 步 | 中文实战 / 进阶实践 | [书生浦语：OpenCompass 评测与 LMDeploy 部署](https://github.com/InternLM/Tutorial) | 只做评测、量化和部署关卡 | 完整 Go / No-Go 上线报告 |

阶段验收：同一份报告同时给出质量、P50/P95、TTFT、Token/s、并发、显存、单请求成本、风险与回滚方案。

## 如何判断可以进入下一阶段

- 资料：只检查本阶段指定范围是否理解，不以观看时长验收。
- 练习：能独立回答阶段原理题、生产判断题和故障分析题。
- 实战：代码可运行，数据与配置可复现，至少保留一个失败案例。
- 写作：文章必须回答生产位置、业务问题、当前现状、实验数据、上线措施和未来方向。
