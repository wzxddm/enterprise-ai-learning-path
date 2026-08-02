# 阶段七：评测、部署与性能优化

时间：第 18～20 周

## 评测

### 必学内容

- Golden Dataset 和离线回归测试。
- Exact Match、Precision、Recall、F1。
- 检索召回率、忠实性和答案相关性。
- LLM-as-a-Judge 的优点与偏差。
- 人工盲测。
- 质量、延迟、吞吐量和成本的综合权衡。

### 工具

- [Ragas](https://docs.ragas.io/)
- [Promptfoo](https://www.promptfoo.dev/)
- [DeepEval](https://docs.confident-ai.com/)

## 部署与推理

### 学习顺序

1. [Ollama](https://ollama.com/)：快速本地验证。
2. [llama.cpp](https://github.com/ggml-org/llama.cpp)：CPU、端侧和量化。
3. [vLLM](https://docs.vllm.ai/)：生产级 GPU 推理。

### 必学内容

- FP16、BF16、INT8、INT4。
- 参数量、权重与显存估算。
- KV Cache。
- Continuous Batching 和 PagedAttention。
- TTFT、TPOT、吞吐量和并发。
- Tensor Parallel。

## 实践任务

- [ ] 建立至少 100 条固定评测用例。
- [ ] 为 Prompt、RAG 和模型版本建立回归测试。
- [ ] 使用 vLLM 部署一个开源模型。
- [ ] 提供兼容 OpenAI API 的服务。
- [ ] 完成不同并发量的压力测试。
- [ ] 对比至少两种精度或量化配置。
- [ ] 记录 TTFT、输出速度、吞吐量、显存和准确性。

## 阶段验收

最终报告至少包含：

| 维度 | 指标示例 |
|---|---|
| 质量 | 准确率、忠实性、人工偏好 |
| 延迟 | TTFT、TPOT、P50/P95 |
| 吞吐 | Request/s、Token/s |
| 资源 | GPU 利用率、显存 |
| 成本 | 单请求或每百万 Token 成本 |

产出：可复现评测集、推理服务和性能报告。

## 后续深入资料

- [Stanford CS224N](https://web.stanford.edu/class/cs224n/)
- [Stanford CS336：Language Modeling from Scratch](https://stanford-cs336.github.io/)
- [NVIDIA CUDA C++ Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
- [DeepSpeed Tutorials](https://www.deepspeed.ai/tutorials/)
- [PyTorch FSDP Tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html)
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM)
