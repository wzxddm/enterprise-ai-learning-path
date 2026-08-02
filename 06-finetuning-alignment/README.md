# 阶段六：微调与对齐

时间：第 15～17 周

## 必学内容

- Pretraining、Continued Pretraining 和 SFT。
- Instruction Tuning 和 Chat Template。
- LoRA、QLoRA 和 PEFT。
- 数据清洗、数据配比和质量控制。
- DPO、RLHF 的目标和基本原理。
- 量化和灾难性遗忘。

## 核心资料

全部为中文，严格按顺序学习：

1. [Datawhale：开源大模型食用指南](https://github.com/datawhalechina/self-llm)：学习本地部署、数据格式、全参数微调与 LoRA 的区别，只选一个小模型案例。
2. [LLaMA Factory 中文官方文档](https://llamafactory.readthedocs.io/zh-cn/latest/)：学习数据集、Chat Template、LoRA/QLoRA、训练监控、导出和评估。
3. [LLaMA Factory 官方中文视频教程](https://www.bilibili.com/video/BV1djgRzxEts/)：读完文档后再跟做，并逐项核对参数含义。

每份资料的难度与产出见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

## 技术选型判断

| 需求 | 优先方案 |
|---|---|
| 改变回答格式或语气 | Prompt |
| 注入经常变化的知识 | RAG |
| 稳定执行特定任务 | SFT / LoRA |
| 学习领域语言分布 | Continued Pretraining |
| 改变回答偏好 | DPO / 对齐 |

## 实践任务

- [ ] 准备一份小规模指令数据集。
- [ ] 检查数据重复、冲突、格式和长度分布。
- [ ] 使用 LoRA 或 QLoRA 微调小型开源模型。
- [ ] 保存训练配置、随机种子和数据版本。
- [ ] 使用固定测试集比较微调前后效果。
- [ ] 检查模型的通用能力是否下降。

## 阶段验收

能够解释：

- 为什么新知识通常优先使用 RAG，而不是微调？
- LoRA 降低了哪些训练成本？
- Chat Template 不匹配会造成什么问题？
- 数据质量为什么通常比盲目增加训练轮数更重要？

产出：LoRA Adapter、训练配置和前后对比报告。
