# 阶段三：Transformer 与 GPT

时间：第 6～9 周

这是整个路线最重要的原理阶段。

## 学习顺序

```text
Tokenizer
→ Embedding
→ 位置编码
→ Self-Attention
→ Multi-Head Attention
→ Feed Forward
→ Transformer Block
→ Decoder-only Model
→ Next Token Prediction
→ 自回归生成
→ KV Cache
```

## 核心资料

全部为中文，严格按顺序学习：

1. [《动手学深度学习》：注意力机制](https://zh-v2.d2l.ai/chapter_attention-mechanisms/index.html)：先建立 Q、K、V、Mask 与多头注意力直觉。
2. [Datawhale：从零开始的大语言模型原理与实践](https://github.com/datawhalechina/happy-llm)：只学 Tokenizer、Embedding、Transformer、Decoder-only 和预训练目标。
3. [Datawhale：大模型白盒子构建指南](https://github.com/datawhalechina/tiny-universe)：只做 Tiny Transformer 与 Tiny Llama3；Tiny RAG、Agent、Eval 留到后续阶段。

每份资料的难度与产出见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

## 实践任务

- [ ] 手写 Scaled Dot-Product Attention。
- [ ] 手写 Causal Mask。
- [ ] 实现 Multi-Head Attention 和 Transformer Block。
- [ ] 实现或分析一个简单 Tokenizer。
- [ ] 跟随 Tiny-Universe 训练迷你 GPT。
- [ ] 比较有无 KV Cache 的生成过程。

## 阶段验收

能够解释：

- Attention 为什么除以 `sqrt(d_k)`？
- Causal Mask 有什么作用？
- 多头注意力为什么不等于简单重复？
- GPT 如何生成下一个 Token？
- KV Cache 缓存了什么，为什么能够加速？

产出：迷你 GPT、结构图和原理笔记。
