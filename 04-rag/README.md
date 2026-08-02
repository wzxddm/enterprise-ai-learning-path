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

### 网站与官方文档

- [Sentence Transformers](https://www.sbert.net/)
- [FAISS](https://github.com/facebookresearch/faiss)
- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [LlamaIndex Documentation](https://docs.llamaindex.ai/)
- [LangChain RAG Tutorial](https://python.langchain.com/docs/tutorials/rag/)

### 视频课程

- [Full Stack Deep Learning：LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/)

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
