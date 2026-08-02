# 阶段五：Agent、工具调用与工作流

时间：第 13～14 周

## 必学内容

- Tool Schema 和 Tool Calling。
- ReAct 和 Planning。
- Workflow 与 Agent 的区别。
- 状态管理和短期记忆。
- 串行、并行和条件分支。
- 重试、超时、幂等和最大步骤数。
- 人工确认、权限控制和沙箱。
- Prompt Injection 与间接注入。
- MCP 的作用和基本架构。

## 核心资料

全部为中文，严格按顺序学习：

1. [Datawhale：Hello-Agents](https://datawhalechina.github.io/hello-agents/)：先学智能体、ReAct、工具调用、记忆和上下文，再学工作流、通信协议与评测。
2. [书生浦语：Lagent 自定义 Agent 智能体](https://github.com/InternLM/Tutorial)：只完成 Lagent 关卡，重点理解工具注册、状态、终止条件和错误恢复。

每份资料的难度与产出见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

## 工程模型

```text
Agent = LLM 决策器
      + 状态机
      + 工具集合
      + 执行循环
      + 权限控制
      + 可观测系统
```

## 实践项目

实现一个代码仓库分析 Agent：

- [ ] 搜索代码并读取文件。
- [ ] 运行测试或只读诊断命令。
- [ ] 对危险操作要求人工确认。
- [ ] 支持工具超时、失败重试和最大步骤限制。
- [ ] 记录每一步推理状态、工具调用、延迟和 Token。
- [ ] 构造工具报错、错误参数和注入攻击测试。

先把单 Agent 做到稳定可控，再考虑多 Agent。

## 阶段验收

能够解释：

- 固定工作流什么时候比 Agent 更合适？
- 如何避免 Agent 无限循环？
- Tool Calling 失败时如何恢复？
- 外部文档中的恶意指令为什么危险？

产出：可观测、可中止、有权限边界的代码 Agent。
