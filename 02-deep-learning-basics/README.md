# 阶段二：必要的深度学习基础

时间：第 3～5 周

目标不是补完整数学体系，而是获得阅读 Transformer 和微调代码所需的知识。

## 必学内容

### 数学

- 向量、矩阵乘法、点积。
- 余弦相似度。
- 概率分布和 Softmax。
- 交叉熵。
- 导数、梯度、链式法则。
- 梯度下降和反向传播。

### 深度学习

- Tensor 和计算图。
- 前向传播、Loss、反向传播。
- Optimizer、Batch、Epoch、Learning Rate。
- 训练集、验证集、过拟合和正则化。
- PyTorch 的 `nn.Module`、Dataset、DataLoader 和训练循环。

## 核心资料

全部为中文，严格按顺序学习：

1. [李沐：动手学深度学习中文视频](https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497)：只看预备知识、线性神经网络、多层感知机和深度学习计算对应视频。
2. [《动手学深度学习》中文版](https://zh-v2.d2l.ai/)：只学第 2～5 章和第 11 章，不展开计算机视觉与完整数学体系。
3. [CLUE 中文语言理解评测](https://github.com/CLUEbenchmark/CLUE)：只使用 TNEWS 新闻分类数据完成阶段项目。

每份资料的难度与产出见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

## 实践任务

- [ ] 阅读并重新实现一个最小训练循环。
- [ ] 修改学习率和 Batch Size，对比 Loss 曲线。
- [ ] 完成一个小型文本分类实验。
- [ ] 制造一次过拟合，并尝试缓解它。

## 阶段验收

能够解释：

- Loss 如何通过反向传播影响模型参数？
- Softmax 和交叉熵分别做什么？
- 训练 Loss 下降、验证 Loss 上升意味着什么？
- 为什么训练需要 Batch？

产出：训练代码、Loss 曲线和实验结论。
