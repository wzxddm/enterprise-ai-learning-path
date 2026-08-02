# 阶段四：Embedding、检索与 RAG

时间：第 10～12 周

## 必学内容

- Embedding 和余弦相似度。
- Chunk 大小、重叠和语义切分。
- 向量索引和 Top-k。
- Metadata Filter。
- 关键词与向量混合检索。
- Reranker 和 Query Rewrite。
- 上下文组装、引用和无答案拒答。
- 检索评测与生成评测。

## 核心资料

全部为中文，严格按顺序学习：

1. [Datawhale：动手学大模型应用开发](https://datawhalechina.github.io/llm-universe/)：只学 Embedding、文档切分、向量检索、RAG 和基础评测。
2. [Milvus 中文官方文档](https://milvus.io/docs/zh/overview.md)：学习向量、Collection、索引、相似度、元数据过滤和部署概念。
3. [书生浦语：InternLM + LlamaIndex RAG 实践](https://github.com/InternLM/Tutorial)：只完成 RAG 关卡。
4. [茴香豆：企业级知识助手实践（简体中文）](https://github.com/InternLM/HuixiangDou/blob/main/README_zh.md)：完成自己的阶段项目后再作为拓展阅读。

每份资料的难度与产出见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

## 实现顺序

第一次先手写最小流程：

```text
文档读取
→ 文本清洗与切分
→ Embedding
→ 向量存储
→ 相似度检索
→ 上下文组装
→ LLM 生成
→ 返回引用
```

完成后再用 LlamaIndex 或 LangChain 重构，明确框架封装了哪些环节。

## 实践项目

构建一个面向代码仓库或技术文档的知识助手：

- [ ] 支持 Markdown、PDF 和代码文件。
- [ ] 支持增量索引。
- [ ] 回答展示文件名和原文引用。
- [ ] 没有检索证据时拒绝回答。
- [ ] 比较至少三种 Chunk 策略。
- [ ] 建立至少 50 条评测问题。
- [ ] 记录召回、回答质量、延迟和 Token 成本。

## 阶段验收

能够回答：

- RAG 回答错误时，如何判断是检索问题还是生成问题？
- Chunk 越大是否越好？
- 什么情况下需要混合检索和 Reranker？
- 如何证明一次 RAG 优化确实有效？

产出：带引用的知识库和 RAG 评测报告。
