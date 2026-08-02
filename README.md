# 大模型 AI 学习路线

这是一套面向已有编程经验开发者的 20 周学习计划。路线跳过编程语言、数据结构、Git、Web 开发和 Docker 等通用内容，直接学习大模型原理与工程实践。

## 网页学习平台

交互式打卡平台位于 [`docs/`](docs/README.md)，包含阶段导航、42 个任务、每日打卡、连续学习、测验、项目与知乎文章看板，以及进度数据导入导出。

在线访问：[AI Path · 企业 AI 应用工程师成长路径](https://wzxddm.github.io/enterprise-ai-learning-path/)

本地启动：

```bash
python3 -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/docs/`。发布说明见 [DEPLOY.md](DEPLOY.md)。

建议每周投入 8～12 小时，按照下面的顺序推进：

```text
大模型基本概念
→ 必要的深度学习基础
→ Transformer / GPT 原理
→ RAG
→ Agent
→ 微调与对齐
→ 评测、部署与性能优化
```

所有必学资料均为中文，并已按阶段、难度和产出排序。统一入口见[七阶段中文资料学习顺序](resources/chinese-roadmap.md)，不要跨阶段囤课。

## 目录

| 阶段 | 周数 | 主题 | 主要产出 |
|---|---:|---|---|
| [总览与学习方法](00-overview/README.md) | - | 路线、时间分配、学习原则 | 个人学习目标 |
| [阶段一：LLM 基本概念](01-llm-basics/README.md) | 1～2 | Token、Prompt、推理参数、Tool Calling | LLM API 实验 |
| [阶段二：深度学习基础](02-deep-learning-basics/README.md) | 3～5 | 矩阵、梯度、神经网络、PyTorch | 文本分类实验 |
| [阶段三：Transformer 与 GPT](03-transformer-gpt/README.md) | 6～9 | Attention、Tokenizer、GPT、KV Cache | 迷你 GPT |
| [阶段四：RAG](04-rag/README.md) | 10～12 | Embedding、检索、重排、引用 | 文档知识库 |
| [阶段五：Agent](05-agent/README.md) | 13～14 | Tool Calling、状态机、MCP、安全 | 代码仓库 Agent |
| [阶段六：微调与对齐](06-finetuning-alignment/README.md) | 15～17 | SFT、LoRA、QLoRA、DPO | LoRA 微调实验 |
| [阶段七：评测与部署](07-evaluation-deployment/README.md) | 18～20 | 评测集、LMDeploy、量化、性能 | 评测与部署报告 |
| [七阶段中文资料](resources/chinese-roadmap.md) | 按阶段 | 中文教材、网站、视频与数据 | 每份资料的学习范围和产出 |
| [项目作品集](projects/README.md) | 持续 | 四个综合项目 | 可展示的 GitHub 项目 |
| [20 周进度表](progress/20-week-plan.md) | 持续 | 每周任务和打卡 | 学习记录 |
| [知乎专栏写作系统](writing/README.md) | 持续 | 定位、选题、模板、发布标准 | 14 篇生产实践文章 |

## 使用方式

1. 先阅读[总览](00-overview/README.md)，确定目标方向。
2. 按阶段阅读，每个阶段只选择一套主资料。
3. 理论学习和代码实践的时间比例保持在 `4:6` 左右。
4. 完成阶段验收条件后再进入下一阶段。
5. 在[进度表](progress/20-week-plan.md)中记录日期、代码地址和复盘。
6. 使用[知乎文章模板](writing/article-template.md)把实验和失败案例沉淀为专栏文章。

## 关于语言

本路线不包含编程语言教学。调用在线模型和编写业务服务时可以继续使用 Go；涉及 PyTorch、Hugging Face、微调和研究代码时，直接使用 Python 工具链并随用随查，无须单独安排 Python 课程。
