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

### 图文

- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- [The Illustrated GPT-2](https://jalammar.github.io/illustrated-gpt2/)
- [The Annotated Transformer](https://nlp.seas.harvard.edu/annotated-transformer/)

### 视频与代码

- [Andrej Karpathy YouTube](https://www.youtube.com/@AndrejKarpathy)
  1. `The spelled-out intro to neural networks and backpropagation`
  2. `Let's build GPT: from scratch, in code`
  3. `Let's build the GPT Tokenizer`
- [Zero to Hero 配套代码](https://github.com/karpathy/nn-zero-to-hero)
- [nanoGPT](https://github.com/karpathy/nanoGPT)

### 书籍

- Sebastian Raschka：《Build a Large Language Model (From Scratch)》
- [配套代码：LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch)
- Lewis Tunstall 等：《Natural Language Processing with Transformers》

### 论文

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [GPT-3](https://arxiv.org/abs/2005.14165)
- [LLaMA](https://arxiv.org/abs/2302.13971)

第一遍读论文时只关注：问题、核心改动、架构图、实验结论，不要求推导全部公式。

## 实践任务

- [ ] 手写 Scaled Dot-Product Attention。
- [ ] 手写 Causal Mask。
- [ ] 实现 Multi-Head Attention 和 Transformer Block。
- [ ] 实现或分析一个简单 Tokenizer。
- [ ] 跟随 Karpathy 训练迷你 GPT。
- [ ] 比较有无 KV Cache 的生成过程。

## 阶段验收

能够解释：

- Attention 为什么除以 `sqrt(d_k)`？
- Causal Mask 有什么作用？
- 多头注意力为什么不等于简单重复？
- GPT 如何生成下一个 Token？
- KV Cache 缓存了什么，为什么能够加速？

产出：迷你 GPT、结构图和原理笔记。
