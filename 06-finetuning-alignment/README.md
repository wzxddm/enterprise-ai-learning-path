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

### 官方文档

- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1)
- [PEFT Documentation](https://huggingface.co/docs/peft/)
- [TRL Documentation](https://huggingface.co/docs/trl/)
- [Alignment Handbook](https://github.com/huggingface/alignment-handbook)
- [Unsloth Documentation](https://docs.unsloth.ai/)

### 论文

- [LoRA](https://arxiv.org/abs/2106.09685)
- [QLoRA](https://arxiv.org/abs/2305.14314)
- [InstructGPT](https://arxiv.org/abs/2203.02155)
- [DPO](https://arxiv.org/abs/2305.18290)

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
