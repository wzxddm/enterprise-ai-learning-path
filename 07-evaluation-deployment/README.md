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

### 中文评测资料

1. [OpenCompass 中文评测教程](https://opencompass.readthedocs.io/zh-cn/latest/)：依次学习快速开始、数据集与模型配置、指标、主观评测和 LLM Judge。

## 部署与推理

### 学习顺序

1. [LMDeploy 中文部署教程](https://lmdeploy.readthedocs.io/zh-cn/latest/)：依次学习离线推理、兼容服务、量化、性能测试和生产指标监控。
2. [书生浦语大模型实战营](https://github.com/InternLM/Tutorial)：只完成 OpenCompass 评测、量化和 LMDeploy 部署相关关卡。

每份资料的难度与产出见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

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
- [ ] 使用 LMDeploy 部署一个开源模型。
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

- [LMDeploy 中文部署教程](https://lmdeploy.readthedocs.io/zh-cn/latest/)：继续深入量化、并行、性能测试与监控章节。
- [OpenCompass 中文评测教程](https://opencompass.readthedocs.io/zh-cn/latest/)：继续深入自定义数据集、主观评测和加速评测章节。
- [Datawhale：大模型白盒子构建指南](https://github.com/datawhalechina/tiny-universe)：学习 Tiny Eval，并与本阶段评测体系对照。
